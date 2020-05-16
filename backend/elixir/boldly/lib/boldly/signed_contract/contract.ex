defmodule Boldly.SignedContract.Contract do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}
  schema "contracts" do
    field :file_path, :string
    field :document, :string, virtual: true

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
    |> cast(attrs, [:id, :file_path, :document, :brand_uuid, :campaign_uuid, :creator_uuid])
    |> assoc_constraint(:creators, name: :creator_uuid)
    |> assoc_constraint(:campaigns, name: :campaign_uuid)
    |> assoc_constraint(:brands, name: :brand_uuid)
    |> validate_required([:brand_uuid, :campaign_uuid, :creator_uuid])
    |> unique_constraint(:id)
    |> store_document()
  end

  defp store_document(
         %Ecto.Changeset{
           valid?: true,
           changes: %{
             document: document,
             campaign_uuid: ca_id,
             brand_uuid: b_id,
             creator_uuid: cr_id
           }
         } = changeset
       ) do
    f_uuid = UUID.uuid4(:hex)

    unique_filename = "#{f_uuid}-#{ca_id}-#{b_id}-#{cr_id}"
    bucket_name = System.get_env("BUCKET_NAME")

    img =
      ExAws.S3.put_object(bucket_name, unique_filename, document)
      |> ExAws.request!()

    img_url = "https://#{bucket_name}.s3.amazonaws.com/#{bucket_name}/#{unique_filename}"

    change(changeset, %{file_path: unique_filename})
  end

  defp store_document(changeset), do: changeset
end
