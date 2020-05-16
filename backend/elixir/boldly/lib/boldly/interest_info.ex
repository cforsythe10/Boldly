defmodule Boldly.InterestInfo do
  @moduledoc """
  The InterestInfo context.
  """

  import Ecto.Query, warn: false
  alias Boldly.Repo

  alias Boldly.InterestInfo.Interest

  @doc """
  Returns the list of interests.

  ## Examples

      iex> list_interests()
      [%Interest{}, ...]

  """
  def list_interests do
    Repo.all(Interest)
  end

  @doc """
  Gets a single interest.

  Raises `Ecto.NoResultsError` if the Interest does not exist.

  ## Examples

      iex> get_interest!(123)
      %Interest{}

      iex> get_interest!(456)
      ** (Ecto.NoResultsError)

  """
  def get_interest!(id), do: Repo.get!(Interest, id)

  @doc """
  Creates a interest.

  ## Examples

      iex> create_interest(%{field: value})
      {:ok, %Interest{}}

      iex> create_interest(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_interest(attrs \\ %{}) do
    %Interest{}
    |> Interest.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a interest.

  ## Examples

      iex> update_interest(interest, %{field: new_value})
      {:ok, %Interest{}}

      iex> update_interest(interest, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_interest(%Interest{} = interest, attrs) do
    interest
    |> Interest.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a interest.

  ## Examples

      iex> delete_interest(interest)
      {:ok, %Interest{}}

      iex> delete_interest(interest)
      {:error, %Ecto.Changeset{}}

  """
  def delete_interest(%Interest{} = interest) do
    Repo.delete(interest)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking interest changes.

  ## Examples

      iex> change_interest(interest)
      %Ecto.Changeset{source: %Interest{}}

  """
  def change_interest(%Interest{} = interest) do
    Interest.changeset(interest, %{})
  end
end
