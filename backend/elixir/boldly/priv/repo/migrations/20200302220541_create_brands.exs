defmodule Boldly.Repo.Migrations.CreateBrands do
  use Ecto.Migration

  def change do
    create table(:brands) do
      add :uuid, :uuid, null: false
      add :ecommerce, :boolean, default: false, null: false
      add :location, :string
      add :industries, :string
      add :values, :string
      add :email, :string, null: false
      add :password_hash, :string
      add :name, :string, null: false

      timestamps(type: :utc_datetime_usec)
    end

    create unique_index(:brands, [:uuid])
    create unique_index(:brands, [:email])
  end
end
