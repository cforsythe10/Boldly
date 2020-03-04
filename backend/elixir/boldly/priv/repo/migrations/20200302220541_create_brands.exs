defmodule Boldly.Repo.Migrations.CreateBrands do
  use Ecto.Migration

  def change do
    create table(:brands) do
      add :uuid, :uuid, null: false
      add :ecommerce, :boolean
      add :location, :string, null: false
      add :industry, :string
      add :values, :string
      add :email, :string, null: false
      add :password_hash, :string, null: false
      add :name, :string, null: false
      add :profile_picture, :string
      add :bio, :string, null: false
      add :website, :string, null: false

      timestamps(type: :utc_datetime_usec)
    end

    create unique_index(:brands, [:uuid])
    create unique_index(:brands, [:email])
  end
end
