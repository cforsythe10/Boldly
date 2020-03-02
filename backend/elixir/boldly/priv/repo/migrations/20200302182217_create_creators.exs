defmodule Boldly.Repo.Migrations.CreateCreators do
  use Ecto.Migration

  def change do
    create table(:creators, primary_key: false) do
      add :id, :uuid, primary_key: true, null: false
      add :name, :string, null: false
      add :birthday, :date, null: false
      add :selectedvalues, :string
      add :industry, :string
      add :interests, :string
      add :location, :string
      add :email, :string, null: false
      add :password_hash, :string

      timestamps(type: :utc_datetime_usec)
    end

    create unique_index(:creators, [:id])
    create unique_index(:creators, [:email])
  end
end
