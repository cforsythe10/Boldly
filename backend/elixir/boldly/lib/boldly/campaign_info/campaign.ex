defmodule Boldly.CampaignInfo.Campaign do
  use Ecto.Schema
  import Ecto.Changeset

  schema "campaigns" do
    field :age_range, :string
    field :compensation, :string
    field :creator_responsibilities, :string
    field :description, :string
    field :desired_engagement_rate, :integer
    field :end_date, :date
    field :industry, :string
    field :interests, :string
    field :is_draft, :boolean, default: false
    field :location, :string
    field :name, :string
    field :perks, :string
    field :photo_reference, :string
    field :specific_to_location, :boolean, default: false
    field :start_date, :date
    field :uuid, Ecto.UUID, autogenerate: true
    field :values, :string

    belongs_to :brands, Boldly.BrandAccount.Brand,
      foreign_key: :launched_by,
      references: :uuid,
      type: Ecto.UUID

    timestamps()
  end

  @doc false
  def changeset(campaign, attrs) do
    campaign
    |> cast(attrs, [
      :uuid,
      :name,
      :start_date,
      :end_date,
      :photo_reference,
      :description,
      :values,
      :creator_responsibilities,
      :age_range,
      :compensation,
      :desired_engagement_rate,
      :perks,
      :industry,
      :interests,
      :location,
      :specific_to_location,
      :is_draft,
      :launched_by
    ])
    |> assoc_constraint(:brands, name: :launched_by)
    |> validate_required([
      :name,
      :start_date,
      :end_date,
      # :photo_reference,
      :description,
      :values,
      :creator_responsibilities,
      :age_range,
      :compensation,
      :desired_engagement_rate,
      :perks,
      :industry,
      :interests,
      :location,
      :specific_to_location,
      :is_draft,
      :launched_by
    ])
    |> unique_constraint(:uuid)
    |> store_image()
  end

  defp store_image(
         %Ecto.Changeset{valid?: true, changes: %{photo_reference: picture, name: name}} =
           changeset
       ) do
    f_uuid = UUID.uuid4(:hex)

    unique_filename = "#{f_uuid}-#{name}"
    bucket_name = System.get_env("BUCKET_NAME")

    img =
      ExAws.S3.put_object(bucket_name, unique_filename, picture)
      |> ExAws.request!()

    # img_url = "https://#{bucket_name}.s3.amazonaws.com/#{bucket_name}/#{unique_filename}"

    change(changeset, %{photo_reference: unique_filename})
  end

  defp store_image(changeset), do: changeset
end
