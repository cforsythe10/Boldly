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

  @doc """
  Gets a single conversation.

  Raises `Ecto.NoResultsError` if the Conversation does not exist.

  ## Examples

    iex> get_conversation!(123, 123)
    %Conversation{}

    iex> get_conversation!(456, 456)
    ** (Ecto.NoResultsError)

  """
  def get_conversation!(creator_id, brand_id) do
    query = from c in Conversation, where: c.brand_id == ^brand_id and c.creator_id == ^creator_id
    Repo.one(query)
  end

  @doc """
  Gets all conversations that the Creator is a part of.

  ## Example

    iex> get_creator_conversations(123)
    [%Conversation{}, ...]
  """
  def get_creator_conversations(creator_id) do
    query = from c in Conversation, where: c.creator_id == ^creator_id
    Repo.all(query)
  end


  @doc """
  Gets all conversations that the Brand is a part of.

  ## Example

    iex> get_brand_conversations(123)
    [%Conversation{}, ...]
  """
  def get_brand_conversations(brand_id) do
    query = from c in Conversation, where: c.brand_id == ^brand_id
    Repo.all(query)
  end

  @doc """
  Create a Conversation between a Brand and Creator.

  ## Examples

    iex> create_conversation(%{field: value})
    {:ok, %Conversaton{}}

    iex> create_conversation(%{field: bad_value})
    {:error, %Ecto.Changeset{}}
  """
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
