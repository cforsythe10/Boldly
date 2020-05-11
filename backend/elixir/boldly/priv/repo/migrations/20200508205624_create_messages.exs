defmodule Boldly.Repo.Migrations.CreateMessages do
  use Ecto.Migration

  def change do
    create table(:messages) do
      add :sent_by_creator, :boolean
      add :conversation_id, references(:conversations, null: false)
      add :content, :string
      add :date, :utc_datetime

      timestamps()
    end

    create index(:messages, [:conversation_id])
  end
end
