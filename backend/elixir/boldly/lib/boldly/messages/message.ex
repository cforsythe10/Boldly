defmodule Boldly.Messages.Message do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :id, autogenerate: true}
  schema "messages" do
    field :content, :string
    field :date, :utc_datetime, default: DateTime.truncate(DateTime.utc_now(), :second)
    field :sent_by_creator, :boolean

    belongs_to :conversation, Boldly.Conversations.Conversation

    timestamps()
  end

  def changeset(changeset, params \\ %{}) do
    changeset
    |> cast(params, [:sent_by_creator, :conversation_id, :content, :date])
    |> foreign_key_constraint(:conversation_id)
  end
end
