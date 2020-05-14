defmodule Boldly.MessageInfo do
  alias Boldly.Messages.Message
  alias Boldly.Repo

  import Ecto.Query, warn: false

  @doc """
  Returns the list of all Messages.
  ## Examples

    iex> list_messages()
    [%Message{}, ...]
  """
  def list_messages() do
    Repo.all(Message)
  end

  @doc """
  Gets a single message

  Raises `Ecto.NoResultsError` if the Message does not exist

  ## Examples

    iex> get_message!(123)
    %Message{}

    iex> get_message!(456)
    ** (Ecto.NoResultsError)

  """
  def get_message!(id) do
    Repo.one(from m in Message, where: m.id == ^id)
  end

  @doc """
  Returns all messages in a single conversation.

  Raises `Ecto.NoResultsError` if the Message does not exist

  ## Examples

    iex> get_messages!(123)
    [%Message{}, ...]

    iex> get_messages!(456)
    ** (Ecto.NoResultsError)
  """
  def get_messages!(conv_id) do
    query = from m in Message, where: m.conversation_id == ^conv_id, order_by: [desc: m.date]
    Repo.all(query)
  end


  @doc """
  Creates a message.

  ## Examples

    iex> create_message(%{field: value})
    {:ok, %Message{}}

    iex> create_message(%{field: bad_value})
    {:error, %Ecto.Changeset{}}

  """
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

  @doc """
  Deletes a message.

  ## Examples

    iex> delete_message(message)
    {:ok, %Message{}}
  """
  def delete_message(%Message{} = mess) do
    Repo.delete(mess)
  end

  def change_message(%Message{} = mess) do
    Message.changeset(mess, %{})
  end
end
