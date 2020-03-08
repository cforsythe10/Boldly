defmodule Boldly.Repo.Migrations.CreateParticipants do
  use Ecto.Migration

  def change do
    create table(:participants) do
      add :is_pending, :boolean, default: false, null: false
      add :is_active, :boolean, default: false, null: false

      add :creator_uuid,
          references(:creators,
            on_delete: :nothing,
            name: :creator_uuid,
            column: :uuid,
            type: :uuid
          )

      add :campaign_uuid,
          references(:campaigns,
            on_delete: :nothing,
            name: :camapign_uuid,
            column: :uuid,
            type: :uuid
          )

      timestamps()
    end
  end
end
