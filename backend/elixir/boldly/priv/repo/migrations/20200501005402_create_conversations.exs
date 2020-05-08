defmodule Boldly.Repo.Migrations.CreateConversations do
  use Ecto.Migration

  def change do
    create table(:conversations) do
      add :creator_id, references(:creators, null: false)
      add :brand_id, references(:brands, null: false)

      tiestamps()
    end

    create unique_index(:conversations, [:creator_id, :brand_id], name: :sender)
  end
end
