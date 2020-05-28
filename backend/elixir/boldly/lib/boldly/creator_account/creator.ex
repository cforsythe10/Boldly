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
    field :engagement_rate, :float, default: 0.0
    field :instagram_stats, :string

    timestamps(type: :utc_datetime_usec)
  end

  def change_engagement(creator, engagement) do
    creator
    |> cast(
      %{
        engagement_rate: engagement
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
        :profile_visits,
        :engagement_rate,
        :instagram_stats
      ]
    )
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
        :profile_visits,
        :engagement_rate,
        :instagram_stats
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
      :profile_visits,
      :engagement_rate,
      :instagram_stats
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
    |> store_instagram()
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

    img =
      ExAws.S3.put_object(bucket_name, unique_filename, picture)
      |> ExAws.request!()

    img_url = "https://#{bucket_name}.s3.amazonaws.com/#{bucket_name}/#{unique_filename}"

    change(changeset, %{picture: unique_filename})
  end

  defp store_image(changeset), do: changeset

  defp store_instagram(
         %Ecto.Changeset{valid?: true, changes: %{instagram_stats: instagram_stats, name: name}} =
           changeset
       ) do
    f_uuid = UUID.uuid4(:hex)

    unique_filename = "#{f_uuid}-#{name}-#{:rand.uniform(100)}"

    bucket_name = System.get_env("BUCKET_NAME")

    img =
      ExAws.S3.put_object(bucket_name, unique_filename, instagram_stats)
      |> ExAws.request!()

    change(changeset, %{instagram_stats: unique_filename})
  end

  defp store_instagram(changeset), do: changeset
end
