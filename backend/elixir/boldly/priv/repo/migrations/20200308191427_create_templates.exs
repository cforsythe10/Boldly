defmodule Boldly.Repo.Migrations.CreateTemplates do
  use Ecto.Migration

  def change do
    create table(:templates, primary_key: false) do
      add :id, :uuid, primary_key: true
      add :file_path, :string

      add :brand_uuid,
          references(:brands, on_delete: :nothing, name: :brand_uuid, column: :uuid, type: :uuid)

      timestamps()
    end
  end
end
