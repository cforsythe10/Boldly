defmodule BoldlyWeb.ParticipantView do
  use BoldlyWeb, :view
  alias BoldlyWeb.ParticipantView

  def render("index.json", %{participants: participants}) do
    %{data: render_many(participants, ParticipantView, "participant.json")}
  end

  def render("show.json", %{participant: participant}) do
    %{data: render_one(participant, ParticipantView, "participant.json")}
  end

  def render("participant.json", %{participant: participant}) do
    %{id: participant.id,
      is_pending: participant.is_pending,
      is_active: participant.is_active,
      campaign_uuid: participant.campaign_uuid,
      creator_uuid: participant.creator_uuid
    }
  end
end
