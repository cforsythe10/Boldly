defmodule Boldly.CampaignPart do
  @moduledoc """
  The CampaignPart context.
  """

  import Ecto.Query, warn: false
  alias Boldly.Repo

  alias Boldly.CampaignPart.Particpant

  @doc """
  Returns the list of participants.

  ## Examples

      iex> list_participants()
      [%Particpant{}, ...]

  """
  def list_participants do
    Repo.all(Particpant)
  end

  @doc """
  Gets a single participant.

  Raises `Ecto.NoResultsError` if the Particpant does not exist.

  ## Examples

      iex> get_participant!(123)
      %Particpant{}

      iex> get_participant!(456)
      ** (Ecto.NoResultsError)

  """
  def get_participant!(id), do: Repo.get!(Particpant, id)

  @doc """
  Creates a participant.

  ## Examples

      iex> create_participant(%{field: value})
      {:ok, %Particpant{}}

      iex> create_participant(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_participant(attrs \\ %{}) do
    %Particpant{}
    |> Particpant.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a participant.

  ## Examples

      iex> update_participant(participant, %{field: new_value})
      {:ok, %Particpant{}}

      iex> update_participant(participant, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_participant(%Particpant{} = participant, attrs) do
    participant
    |> Particpant.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a participant.

  ## Examples

      iex> delete_participant(participant)
      {:ok, %Particpant{}}

      iex> delete_participant(participant)
      {:error, %Ecto.Changeset{}}

  """
  def delete_participant(%Particpant{} = participant) do
    Repo.delete(participant)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking participant changes.

  ## Examples

      iex> change_participant(participant)
      %Ecto.Changeset{source: %Particpant{}}

  """
  def change_participant(%Particpant{} = participant) do
    Particpant.changeset(participant, %{})
  end
end
