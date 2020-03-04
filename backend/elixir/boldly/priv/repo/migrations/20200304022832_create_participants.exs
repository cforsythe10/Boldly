defmodule Boldly.Repo.Migrations.CreateParticipants do
  use Ecto.Migration

  def change do
    create table(:participants) do
      add :uuid, :uuid, null: false
      add :flag, :string, null: false

      timestamps()
    end

    create unique_index(:participants, [:uuid])
  end
end
