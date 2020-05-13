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

    field :description, :string
    field :picture, :string
    field :web_link, :string
    field :profile_visits, :integer, default: 0

    has_many :campaigns, Boldly.CampaignInfo.Campaign,
      foreign_key: :launched_by,
      references: :uuid

    timestamps(type: :utc_datetime_usec)
  end

  def change_incr(brand, %{profile_visits: num_visits}) do
    p_visits = brand.profile_visits + 1

    brand
    |> cast(
      %{
        profile_visits: p_visits
      },
      [
        :uuid,
        :ecommerce,
        :location,
        :industries,
        :values,
        :email,
        :password,
        :name,
        :description,
        :picture,
        :web_link,
        :profile_visits
      ]
    )
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
      :name,
      :description,
      :picture,
      :web_link,
      :profile_visits
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
