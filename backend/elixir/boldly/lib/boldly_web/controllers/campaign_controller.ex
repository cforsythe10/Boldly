defmodule BoldlyWeb.CampaignController do
  use BoldlyWeb, :controller

  alias Boldly.CampaignInfo
  alias Boldly.CampaignInfo.Campaign

  action_fallback BoldlyWeb.FallbackController

  def index(conn, _params) do
    campaigns = CampaignInfo.list_campaigns()
    render(conn, "index.json", campaigns: campaigns)
  end

  def create(conn, %{"campaign" => campaign_params}) do
    with {:ok, %Campaign{} = campaign} <- CampaignInfo.create_campaign(campaign_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.campaign_path(conn, :show, campaign))
      |> render("show.json", campaign: campaign)
    end
  end

  def show(conn, %{"id" => id}) do
    campaign = CampaignInfo.get_campaign!(id)
    render(conn, "show.json", campaign: campaign)
  end

  def update(conn, %{"id" => id, "campaign" => campaign_params}) do
    campaign = CampaignInfo.get_campaign!(id)

    with {:ok, %Campaign{} = campaign} <- CampaignInfo.update_campaign(campaign, campaign_params) do
      render(conn, "show.json", campaign: campaign)
    end
  end

  def delete(conn, %{"id" => id}) do
    campaign = CampaignInfo.get_campaign!(id)

    with {:ok, %Campaign{}} <- CampaignInfo.delete_campaign(campaign) do
      send_resp(conn, :no_content, "")
    end
  end
end
