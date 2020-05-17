defmodule BoldlyWeb.ParticipantController do
  use BoldlyWeb, :controller

  alias Boldly.CampaignPart
  alias Boldly.CampaignPart.Participant
  alias Boldly.CampaignMatcher
  alias Boldly.CampaignInfo

  action_fallback BoldlyWeb.FallbackController

  @doc """
  Lists all campaign participants across all Campaigns.

  Output fields can be seen in `BoldlyWeb.ParticipantView.render/2`.
  """
  def index(conn, _params) do
    participants = CampaignPart.list_participants()
    render(conn, "index.json", participants: participants)
  end

  def get_creators_in_campaign(conn, %{"campaign_uuid" => c_uuid}) do
    participants = CampaignPart.get_creators_in_campaign(c_uuid)
    render(conn, "get_creators.json", participants: participants)
  end

  def apply_to_campaign(conn, %{"campaign_id" => ca_uuid, "creator_id" => cr_uuid}) do
    {:ok, part} = CampaignPart.apply_to_campaign(cr_uuid, ca_uuid)
    render(conn, "show.json", participant: part)
  end

  def match_creators(conn, %{"campaign_id" => camp_id}) do
    campaign = CampaignInfo.get_campaign!(camp_id)
    ca_uuid = campaign.uuid

    matches = CampaignMatcher.match(camp_id)

    participants =
      Enum.map(matches, fn m ->
        cr_uuid = m.uuid

        {:ok, %Participant{} = participant} =
          %{
            is_active: false,
            is_deleted: false,
            creator_uuid: cr_uuid,
            campaign_uuid: ca_uuid
          }
          |> CampaignPart.create_participant()

        participant
      end)

    render(conn, "index.json", participants: participants)
  end

  @doc """
  Creates a Participant for a Campaign given valid creation attributes.

  Fields should be wrapped in a `participant` field at the top level of the JSON payload.

  Fields should be:
  ```
  campaign_uuid: uuid of Campaign of which the creator is participating
  creator_uuid: The uuid of the Creator participating in the Campaign
  is_active: boolean, default: false
  is_deleted: boolean, default: false
  ```

  Output fields can be seen in `BoldlyWeb.ParticipantView.render/2`.
  """
  def create(conn, %{"participant" => participant_params}) do
    with {:ok, %Participant{} = participant} <-
           CampaignPart.create_participant(participant_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.participant_path(conn, :show, participant))
      |> render("show.json", participant: participant)
    end
  end

  @doc """
  Displays the Campaign Participant info given a valid `id`.

  Output fields can be seen in `BoldlyWeb.ParticipantView.render/2`.
  """
  def show(conn, %{"id" => id}) do
    participant = CampaignPart.get_participant!(id)
    render(conn, "show.json", participant: participant)
  end

  @doc """
  Updates the Participant given a valid id under and `id` attribute and valid update attributes under a `participant` key.

  Output fields can be seen in `BoldlyWeb.ParticipantView.render/2`.
  """
  def update(conn, %{"id" => id, "participant" => participant_params}) do
    participant = CampaignPart.get_participant!(id)

    with {:ok, %Participant{} = participant} <-
           CampaignPart.update_participant(participant, participant_params) do
      render(conn, "show.json", participant: participant)
    end
  end

  @doc """
  Deletes a Campaign Participant given a valid id under and `id` key.

  Sends an empty response.
  """
  def delete(conn, %{"id" => id}) do
    participant = CampaignPart.get_participant!(id)

    with {:ok, %Participant{}} <- CampaignPart.delete_participant(participant) do
      send_resp(conn, :no_content, "")
    end
  end
end
