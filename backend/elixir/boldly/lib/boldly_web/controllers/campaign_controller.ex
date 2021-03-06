defmodule BoldlyWeb.CampaignController do
  use BoldlyWeb, :controller

  alias Boldly.CampaignInfo
  alias Boldly.CampaignInfo.Campaign
  alias Boldly.CampaignPart
  alias Boldly.CampaignPart.Participant
  alias Boldly.CampaignMatcher
  alias Boldly.CampaignInfo

  action_fallback BoldlyWeb.FallbackController

  @doc """
  Lists all Campaigns.

  Output is a list of brands containing the fields listed in `BoldlyWeb.CampaignView.render/2`.
  """
  def index(conn, _params) do
    campaigns = CampaignInfo.list_campaigns() |> get_pictures()
    render(conn, "index.json", campaigns: campaigns)
  end

  def match_all_campaigns(conn, _params) do
    CampaignInfo.list_campaigns()
    |> Enum.each(fn c ->
      matches = CampaignMatcher.match(c.id)

      participants =
        Enum.map(matches, fn m ->
          cr_uuid = m.uuid

          if CampaignPart.is_not_participating(cr_uuid, c.uuid) do
            {:ok, %Participant{} = participant} =
              %{
                is_active: false,
                is_deleted: false,
                creator_uuid: cr_uuid,
                campaign_uuid: c.uuid
              }
              |> CampaignPart.create_participant()

            participant
          end
        end)
    end)

    send_resp(conn, :no_content, "")
  end

  def get_camps_and_parts(conn, %{"brand_id" => b_id}) do
    {fut, curr, past} = CampaignInfo.get_all_brand_camps_and_parts(b_id)
    # IO.puts(curr)
    render(conn, "brands_index.json", %{current: curr, past: past, future: fut})
  end

  def get_camps_and_parts(conn, %{"creator_id" => c_id}) do
    {matched, applied, active} = CampaignInfo.get_all_creator_camps_and_parts(c_id)
    render(conn, "creators_index.json", %{matched: matched, applied: applied, active: active})
  end

  @doc """
  Creates a Campaign given the attributes are valid.

  The campaign attributes should be wrapped in a `campaign` field at the top level of the JSON.

  The fields should be:
  ```
  launched_by: UUID of the Brand which is launching this Campaign
  age_range: string
  compensation: string
  creator_responsibilities: string
  description: string
  desired_engagement_rate: integer
  end_date: date
  industry: string
  interests: string
  is_draft: boolean, default: false
  location: string
  name: string
  perks: string
  photo_reference: string
  specific_to_location: boolean, default: false
  start_date: date
  values: string
  ```

  Output fields can be seen in `BoldlyWeb.CampaignView.render/2`.
  """
  def create(conn, %{"campaign" => campaign_params}) do
    with {:ok, %Campaign{} = campaign_p} <- CampaignInfo.create_campaign(campaign_params) do
      campaign = campaign_p |> get_pictures()

      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.campaign_path(conn, :show, campaign))
      |> render("show.json", campaign: campaign)
    end
  end

  @doc """
  Shows the Campaign with the matching `id` value.

  Output fields can be seen in `BoldlyWeb.CampaignView.render/2`.

  """
  def show(conn, %{"id" => id}) do
    campaign = CampaignInfo.get_campaign!(id)
    render(conn, "show.json", campaign: campaign |> get_pictures())
  end

  @doc """
  Updates the Campaign with id given under `id` and campaign attributes given under `campaign` keys.

  Outputs newly updated object.

  Output fields can be seen in `BoldlyWeb.CampaignView.render/2`.

  """
  def update(conn, %{"id" => id, "campaign" => campaign_params}) do
    campaign = CampaignInfo.get_campaign!(id)

    with {:ok, %Campaign{} = campaign} <- CampaignInfo.update_campaign(campaign, campaign_params) do
      render(conn, "show.json", campaign: campaign |> get_pictures())
    end
  end

  @doc """
  Deletes Campaign with the given `id`.

  Returns an empty response if successful.
  """
  def delete(conn, %{"id" => id}) do
    campaign = CampaignInfo.get_campaign!(id)

    with {:ok, %Campaign{}} <- CampaignInfo.delete_campaign(campaign) do
      send_resp(conn, :no_content, "")
    end
  end

  def get_pictures(campaigns) when is_list(campaigns) do
    Enum.map(campaigns, fn campaign ->
      get_pictures(campaign)
    end)
  end

  def get_pictures(campaigns) do
    if campaigns.photo_reference do
      bucket_name = System.get_env("BUCKET_NAME")
      pic_base64 = ExAws.S3.get_object(bucket_name, campaigns.photo_reference) |> ExAws.request!()
      Map.replace!(campaigns, :photo_reference, pic_base64.body)
    else
      campaigns
    end
  end
end
