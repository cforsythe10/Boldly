defmodule Boldly.SignedContract.Contract do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}
  schema "contracts" do
    field :file_path, :string

    belongs_to :creators, Boldly.CreatorAccount.Creator,
      foreign_key: :creator_uuid,
      references: :uuid,
      type: Ecto.UUID

    belongs_to :campaigns, Boldly.CampaignInfo.Campaign,
      foreign_key: :campaign_uuid,
      references: :uuid,
      type: Ecto.UUID

    belongs_to :brands, Boldly.BrandAccount.Brand,
      foreign_key: :brand_uuid,
      references: :uuid,
      type: Ecto.UUID

    timestamps()
  end

  @doc false
  def changeset(contract, attrs) do
    contract
    |> cast(attrs, [:id, :file_path, :brand_uuid, :campaign_uuid, :creator_uuid])
    |> assoc_constraint(:creators, name: :creator_uuid)
    |> assoc_constraint(:campaigns, name: :campaign_uuid)
    |> assoc_constraint(:brands, name: :brand_uuid)
    |> validate_required([:file_path, :brand_uuid, :campaign_uuid, :creator_uuid])
    |> unique_constraint(:id)
  end
end
