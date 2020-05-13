defmodule Boldly.Repo.Migrations.AddFieldsCreatorsBrands do
  use Ecto.Migration

  def change do
    alter table(:creators) do
      add :description, :string
      add :picture, :string
      add :web_link, :string
      add :profile_visits, :integer
    end

    alter table(:brands) do
      add :description, :string
      add :picture, :string
      add :web_link, :string
      add :profile_visits, :integer
    end
  end
end
