defmodule BoldlyWeb.ParticipantView do
  use BoldlyWeb, :view
  alias BoldlyWeb.ParticipantView
  alias BoldlyWeb.CreatorView

  def render("index.json", %{participants: participants}) do
    %{data: render_many(participants, ParticipantView, "participant.json")}
  end

  def render("get_creators.json", %{participants: participants}) do
    %{data: render_many(participants, ParticipantView, "participant_user.json")}
  end

  def render("show.json", %{participant: participant}) do
    %{data: render_one(participant, ParticipantView, "participant.json")}
  end

  @doc """
  Renders the following in JSON, all under a `data` key:
  ```
  id
  is_deleted
  is_active
  campaign_uuid
  creator_uuid
  ```
  """
  def render("participant.json", %{participant: participant}) do
    %{
      id: participant.id,
      is_deleted: participant.is_deleted,
      is_active: participant.is_active,
      campaign_uuid: participant.campaign_uuid,
      creator_uuid: participant.creator_uuid,
      score: participant.score
    }
  end

  def render("participant_user.json", %{participant: participant}) do
    %{
      id: participant.id,
      is_deleted: participant.is_deleted,
      is_active: participant.is_active,
      campaign_uuid: participant.campaign_uuid,
      creator_uuid: participant.creator_uuid,
      score: participant.score,
      creator: render_one(participant.creators, CreatorView, "creator.json")
    }
  end
end
