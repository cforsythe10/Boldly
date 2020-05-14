defmodule Boldly.MessageInfo do
  alias Boldly.Messages.Message
  alias Boldly.Repo

  import Ecto.Query, warn: false

  def list_messages() do
    Repo.all(Message)
  end

  def get_message!(id) do
    Repo.one(from m in Message, where: m.id == ^id)
  end

  def get_messages!(conv_id) do
    query = from m in Message, where: m.conversation_id == ^conv_id, order_by: [desc: m.date]
    Repo.all(query)
  end

  def create_message(attrs \\ %{}) do
    %Message{}
    |> Message.changeset(attrs)
    |> Repo.insert()
  end

  def update_message(%Message{} = mess, attrs \\ %{}) do
    mess
    |> Message.changeset(attrs)
    |> Repo.update()
  end

  def delete_message(%Message{} = mess) do
    Repo.delete(mess)
  end

  def change_message(%Message{} = mess) do
    Message.changeset(mess, %{})
  end
end
