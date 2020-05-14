defmodule Boldly.Repo.Migrations.CreateCampaigns do
  use Ecto.Migration

  def change do
    create table(:campaigns) do
      add :uuid, :uuid
      add :name, :string
      add :start_date, :date
      add :end_date, :date
      add :photo_reference, :string
      add :description, :string
      add :values, :string
      add :creator_responsibilities, :string
      add :age_range, :string
      add :compensation, :string
      add :desired_engagement_rate, :integer
      add :perks, :string
      add :industry, :string
      add :interests, :string
      add :location, :string
      add :specific_to_location, :boolean, default: false, null: false
      add :is_draft, :boolean, default: false, null: false

      add :launched_by,
          references(:brands, on_delete: :nothing, name: :launched_by, column: :uuid, type: :uuid)

      timestamps()
    end

    create unique_index(:campaigns, [:uuid])
    create index(:campaigns, [:launched_by])
  end
end
