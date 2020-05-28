defmodule Boldly.Repo.Migrations.AddInstagramStats do
  use Ecto.Migration

  def change do
    alter table(:creators) do
      add :instagram_stats, :string
    end
  end
end
