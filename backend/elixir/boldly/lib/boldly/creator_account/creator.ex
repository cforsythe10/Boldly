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

    field :description, :string
    field :picture, :string
    field :web_link, :string
    field :profile_visits, :integer, default: 0

    timestamps(type: :utc_datetime_usec)
  end

  def change_incr(creator, %{profile_visits: num_visits}) do
    p_visits = creator.profile_visits + 1

    creator
    |> cast(
      %{
        profile_visits: p_visits
      },
      [
        :uuid,
        :name,
        :birthday,
        :values,
        :industry,
        :interests,
        :location,
        :email,
        :password,
        :description,
        :picture,
        :web_link,
        :profile_visits
      ]
    )
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
      :password,
      :description,
      :picture,
      :web_link,
      :profile_visits
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
    |> store_image()
  end

  defp put_password_hash(
         %Ecto.Changeset{valid?: true, changes: %{password: password}} = changeset
       ) do
    change(changeset, Bcrypt.add_hash(password))
  end

  defp put_password_hash(changeset), do: changeset

  defp store_image(
         %Ecto.Changeset{valid?: true, changes: %{picture: picture, name: name}} = changeset
       ) do
    f_uuid = UUID.uuid4(:hex)

    unique_filename = "#{f_uuid}-#{name}"
    bucket_name = System.get_env("BUCKET_NAME")
    IO.puts(bucket_name)

    img =
      ExAws.S3.put_object(bucket_name, unique_filename, picture)
      |> ExAws.request!()

    img_url = "https://#{bucket_name}.s3.amazonaws.com/#{bucket_name}/#{unique_filename}"

    change(changeset, %{picture: unique_filename})
  end

  defp store_image(changeset), do: changeset
end
