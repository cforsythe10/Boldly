defmodule Boldly.Repo.Migrations.CreateMessages do
  use Ecto.Migration

  def change do
    create table(:messages) do
      add :sent_by, :string
      add :conversation_id, references(:conversations,  null: false)
      add :content, :string
      add :date, :naive_datetime

      timestamps()
    end

  create index(:messages, [:sent_by])
  create index(:messages, [:conversation_id])
  end
end
