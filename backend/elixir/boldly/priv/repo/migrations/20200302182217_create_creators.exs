defmodule Boldly.Repo.Migrations.CreateCreators do
  use Ecto.Migration

  def change do
    create table(:creators) do
      add :uuid, :uuid, null: false
      add :name, :string, null: false
      add :birthday, :date, null: false
      add :values, :string
      add :industry, :string
      add :interests, :string
      add :location, :string, null: false
      add :email, :string, null: false
      add :password_hash, :string, null: false
      add :profile_picture, # what value for profile pic?
      add :bio, :string, null: false
      add :website, :url, null: false
      add :featured_posts, # what value for gram posts?

      timestamps(type: :utc_datetime_usec)
    end

    create unique_index(:creators, [:uuid])
    create unique_index(:creators, [:email])
  end
end
