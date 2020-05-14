defmodule Boldly.ConversationInfo do
  import Ecto.Query, warn: false
  alias Boldly.Repo
  alias Boldly.Conversations.Conversation

  @doc """
  Returns the list of all conversations.

  ## Examples

    iex> list_conversations()
    [%Conversation{}, ...]
  """
  def list_conversations() do
    Repo.all(Conversation)
  end

  def get_conversation!(creator_id, brand_id) do
    query = from c in Conversation, where: c.brand_id == ^brand_id and c.creator_id == ^creator_id
    Repo.one(query)
  end

  def get_creator_conversations(creator_id) do
    query = from c in Conversation, where: c.creator_id == ^creator_id
    Repo.all(query)
  end

  def get_brand_conversations(brand_id) do
    query = from c in Conversation, where: c.brand_id == ^brand_id
    Repo.all(query)
  end

  def create_conversation(attrs \\ %{}) do
    %Conversation{}
    |> Conversation.changeset(attrs)
    |> Repo.insert()
  end

  def update_conversation(%Conversation{} = conv, attrs \\ %{}) do
    conv
    |> Conversation.changeset(attrs)
    |> Repo.update()
  end

  def delete_conversation(%Conversation{} = conv) do
    Repo.delete(conv)
  end

  def change_conversation(%Conversation{} = conv) do
    Conversation.changeset(conv, %{})
  end
end
