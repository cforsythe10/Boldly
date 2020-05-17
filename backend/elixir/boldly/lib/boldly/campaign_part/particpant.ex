defmodule Boldly.CampaignPart.Participant do
  use Ecto.Schema
  import Ecto.Changeset

  schema "participants" do
    field :is_active, :boolean, default: false
    field :is_deleted, :boolean, default: false
    field :has_applied, :boolean, default: false
    field :score, :integer, default: 0

    belongs_to :creators, Boldly.CreatorAccount.Creator,
      foreign_key: :creator_uuid,
      references: :uuid,
      type: Ecto.UUID

    belongs_to :campaigns, Boldly.CampaignInfo.Campaign,
      foreign_key: :campaign_uuid,
      references: :uuid,
      type: Ecto.UUID

    timestamps()
  end

  @doc false
  def changeset(participant, attrs) do
    participant
    |> cast(attrs, [:is_deleted, :score, :is_active, :creator_uuid, :campaign_uuid, :has_applied])
    |> assoc_constraint(:creators, name: :creator_uuid)
    |> assoc_constraint(:campaigns, name: :campaign_uuid)
    |> validate_required([:is_deleted, :is_active, :creator_uuid, :campaign_uuid])
  end

  def apply(participant) do
    participant
    |> cast(%{has_applied: true}, [
      :is_deleted,
      :score,
      :is_active,
      :creator_uuid,
      :campaign_uuid,
      :has_applied
    ])
    |> assoc_constraint(:creators, name: :creator_uuid)
    |> assoc_constraint(:campaigns, name: :campaign_uuid)
    |> validate_required([:is_deleted, :is_active, :creator_uuid, :campaign_uuid])
  end
end
