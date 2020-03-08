defmodule Boldly.Repo.Migrations.CreateContracts do
  use Ecto.Migration

  def change do
    create table(:contracts, primary_key: false) do
      add :id, :uuid, primary_key: true
      add :file_path, :string

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

      add :brand_uuid,
          references(:brands, on_delete: :nothing, name: :brand_uuid, column: :uuid, type: :uuid)

      timestamps()
    end
  end
end
