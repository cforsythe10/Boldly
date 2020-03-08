defmodule BoldlyWeb.ParticipantController do
  use BoldlyWeb, :controller

  alias Boldly.CampaignPart
  alias Boldly.CampaignPart.Participant

  action_fallback BoldlyWeb.FallbackController

  def index(conn, _params) do
    participants = CampaignPart.list_participants()
    render(conn, "index.json", participants: participants)
  end

  def create(conn, %{"participant" => participant_params}) do
    with {:ok, %Participant{} = participant} <-
           CampaignPart.create_participant(participant_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.participant_path(conn, :show, participant))
      |> render("show.json", participant: participant)
    end
  end

  def show(conn, %{"id" => id}) do
    participant = CampaignPart.get_participant!(id)
    render(conn, "show.json", participant: participant)
  end

  def update(conn, %{"id" => id, "participant" => participant_params}) do
    participant = CampaignPart.get_participant!(id)

    with {:ok, %Participant{} = participant} <-
           CampaignPart.update_participant(participant, participant_params) do
      render(conn, "show.json", participant: participant)
    end
  end

  def delete(conn, %{"id" => id}) do
    participant = CampaignPart.get_participant!(id)

    with {:ok, %Participant{}} <- CampaignPart.delete_participant(participant) do
      send_resp(conn, :no_content, "")
    end
  end
end
