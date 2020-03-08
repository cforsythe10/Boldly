defmodule Boldly.BrandAccount.Brand do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :id, autogenerate: true}
  schema "brands" do
    field :ecommerce, :boolean, default: false
    field :email, :string
    field :industries, :string
    field :location, :string
    field :values, :string
    field :password, :string, virtual: true
    field :password_hash, :string
    field :name, :string
    field :uuid, Ecto.UUID, autogenerate: true

    has_many :campaigns, Boldly.CampaignInfo.Campaign,
      foreign_key: :launched_by,
      references: :uuid

    timestamps(type: :utc_datetime_usec)
  end

  @doc false
  def changeset(brand, attrs) do
    brand
    |> cast(attrs, [
      :uuid,
      :ecommerce,
      :location,
      :industries,
      :values,
      :email,
      :password,
      :name
    ])
    |> validate_required([
      # :uuid,
      :ecommerce,
      :location,
      :industries,
      :values,
      :email,
      :password,
      :name
    ])
    # |> unique_constraint(:id)
    |> unique_constraint(:uuid)
    |> unique_constraint(:email)
    # |> cast_assoc(:campaigns)
    |> put_password_hash()
  end

  defp put_password_hash(
         %Ecto.Changeset{valid?: true, changes: %{password: password}} = changeset
       ) do
    change(changeset, Bcrypt.add_hash(password))
  end

  defp put_password_hash(changeset), do: changeset
end
