defmodule Boldly.Repo.Migrations.CreateInterests do
  use Ecto.Migration

  def change do
    create table(:interests) do
      add :interest, :string
      add :categories, :string

      timestamps()
    end

  end
end
