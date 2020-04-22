defmodule Boldly.ContractTemplate.Template do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :binary_id, autogenerate: true}
  schema "templates" do
    field :file_path, :string

    belongs_to :brands, Boldly.BrandAccount.Brand,
      foreign_key: :brand_uuid,
      references: :uuid,
      type: Ecto.UUID

    timestamps()
  end

  @doc false
  def changeset(template, attrs) do
    template
    |> cast(attrs, [:id, :file_path, :brand_uuid])
    |> validate_required([:file_path, :brand_uuid])
  end
end
