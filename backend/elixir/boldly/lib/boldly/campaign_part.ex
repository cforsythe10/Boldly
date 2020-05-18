defmodule Boldly.CampaignPart do
  @moduledoc """
  The CampaignPart context.
  """

  import Ecto.Query, warn: false
  alias Boldly.Repo

  alias Boldly.CampaignPart.Participant
  alias Boldly.CreatorAccount
  alias Boldly.CampaignInfo

  def get_creators_in_campaign(c_uuid) do
    Repo.all(from(c in Participant, where: c.campaign_uuid == ^c_uuid, preload: [:creators]))
  end

  def is_not_participating(creator_uuid, camp_uuid) do
    from(c in Participant, where: c.creator_uuid == ^creator_uuid and c.campaign_uuid == ^camp_uuid)
    |> Repo.all()
    |> Enum.empty?()
  end

  def apply_to_campaign(creator_id, campaign_id) do
    cre = CreatorAccount.get_creator!(creator_id)
    camp = CampaignInfo.get_campaign!(campaign_id)

    creator_uuid = cre.uuid
    campaign_uuid = camp.uuid

    part =
      Repo.one(
        from(c in Participant,
          where: c.campaign_uuid == ^campaign_uuid and c.creator_uuid == ^creator_uuid
        )
      )

    part
    |> Participant.apply()
    |> Repo.update()
  end

  @doc """
  Returns the list of participants.

  ## Examples

      iex> list_participants()
      [%Participant{}, ...]

  """
  def list_participants do
    Repo.all(Participant)
  end

  @doc """
  Gets a single participant.

  Raises `Ecto.NoResultsError` if the Participant does not exist.

  ## Examples

      iex> get_participant!(123)
      %Participant{}

      iex> get_participant!(456)
      ** (Ecto.NoResultsError)

  """
  def get_participant!(id), do: Repo.get!(Participant, id)

  @doc """
  Creates a participant.

  ## Examples

      iex> create_participant(%{field: value})
      {:ok, %Participant{}}

      iex> create_participant(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_participant(attrs \\ %{}) do
    %Participant{}
    |> Participant.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a participant.

  ## Examples

      iex> update_participant(participant, %{field: new_value})
      {:ok, %Participant{}}

      iex> update_participant(participant, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_participant(%Participant{} = participant, attrs) do
    participant
    |> Participant.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a participant.

  ## Examples

      iex> delete_participant(participant)
      {:ok, %Participant{}}

      iex> delete_participant(participant)
      {:error, %Ecto.Changeset{}}

  """
  def delete_participant(%Participant{} = participant) do
    Repo.delete(participant)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking participant changes.

  ## Examples

      iex> change_participant(participant)
      %Ecto.Changeset{source: %Participant{}}

  """
  def change_participant(%Participant{} = participant) do
    Participant.changeset(participant, %{})
  end
end
