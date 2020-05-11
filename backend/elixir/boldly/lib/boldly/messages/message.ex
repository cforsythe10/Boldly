defmodule Boldly.Messages.Message do
  use Ecto.Schema
  import Ecto.Changeset

  schema "messages" do
    field :content, :string
    field :date, :naive_datetime
    field :sent_by, :string

    belongs_to :conversation, Boldly.Conversations.Conversation

    timestamps()
  end

  def changeset(changeset, params \\ %{}) do
    changeset
    |> cast(params, [:sent_by, :conversation_id, :content, :date])
    |> foreign_key_constraint(:conversation_id)
  end
end
