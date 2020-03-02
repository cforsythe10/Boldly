defmodule Boldly.CreatorAccount do
  @moduledoc """
  The CreatorAccount context.
  """

  import Ecto.Query, warn: false
  alias Boldly.Repo

  alias Boldly.CreatorAccount.Creator

  @doc """
  Returns the list of creators.

  ## Examples

      iex> list_creators()
      [%Creator{}, ...]

  """
  def list_creators do
    Repo.all(Creator)
  end

  @doc """
  Gets a single creator.

  Raises `Ecto.NoResultsError` if the Creator does not exist.

  ## Examples

      iex> get_creator!(123)
      %Creator{}

      iex> get_creator!(456)
      ** (Ecto.NoResultsError)

  """
  def get_creator!(id), do: Repo.get!(Creator, id)

  @doc """
  Creates a creator.

  ## Examples

      iex> create_creator(%{field: value})
      {:ok, %Creator{}}

      iex> create_creator(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_creator(attrs \\ %{}) do
    %Creator{}
    |> Creator.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a creator.

  ## Examples

      iex> update_creator(creator, %{field: new_value})
      {:ok, %Creator{}}

      iex> update_creator(creator, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_creator(%Creator{} = creator, attrs) do
    creator
    |> Creator.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a creator.

  ## Examples

      iex> delete_creator(creator)
      {:ok, %Creator{}}

      iex> delete_creator(creator)
      {:error, %Ecto.Changeset{}}

  """
  def delete_creator(%Creator{} = creator) do
    Repo.delete(creator)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking creator changes.

  ## Examples

      iex> change_creator(creator)
      %Ecto.Changeset{source: %Creator{}}

  """
  def change_creator(%Creator{} = creator) do
    Creator.changeset(creator, %{})
  end

  def authenticate_creator(email, password) do
    query = from(u in Creator, where: u.email == ^email)
    query |> Repo.one() |> verify_password(password)
  end

  defp verify_password(nil, _) do
    # Dummy check
    Bcrypt.no_user_verify()
    {:error, "Wrong email or password"}
  end

  defp verify_password(creator, password) do
    if Bcrypt.verify_pass(password, creator.password_hash) do
      {:ok, creator}
    else
      {:error, "Wrong email or password"}
    end
  end
end
