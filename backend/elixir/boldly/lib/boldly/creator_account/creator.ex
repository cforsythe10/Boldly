defmodule Boldly.CreatorAccount.Creator do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :id, autogenerate: true}
  schema "creators" do
    field :birthday, :date
    field :email, :string
    field :industry, :string
    field :interests, :string
    field :location, :string
    field :name, :string
    field :values, :string
    field :password, :string, virtual: true
    field :password_hash, :string
    field :uuid, Ecto.UUID, autogenerate: true

    timestamps(type: :utc_datetime_usec)
  end

  @doc false
  def changeset(creator, attrs) do
    creator
    |> cast(attrs, [
      :uuid,
      :name,
      :birthday,
      :values,
      :industry,
      :interests,
      :location,
      :email,
      :password
    ])
    |> validate_required([
      # :uuid,
      :name,
      :birthday,
      :values,
      :industry,
      :interests,
      :location,
      :email,
      :password
    ])
    # |> unique_constraint(:id)
    |> unique_constraint(:uuid)
    |> unique_constraint(:email)
    |> put_password_hash()
  end

  defp put_password_hash(
         %Ecto.Changeset{valid?: true, changes: %{password: password}} = changeset
       ) do
    change(changeset, Bcrypt.add_hash(password))
  end

  defp put_password_hash(changeset), do: changeset
end
