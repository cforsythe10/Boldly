defmodule Boldly.CampaignInfo do
  @moduledoc """
  The CampaignInfo context.
  """

  import Ecto.Query, warn: false
  alias Boldly.Repo

  alias Boldly.CampaignInfo.Campaign
  alias Boldly.CampaignPart.Participant
  alias Boldly.{BrandAccount, CreatorAccount}

  @doc """
  Returns the list of campaigns.

  ## Examples

      iex> list_campaigns()
      [%Campaign{}, ...]

  """
  def list_campaigns do
    Repo.all(Campaign)
  end

  def get_all_brand_camps_and_parts(brand_id) do
    brand = BrandAccount.get_brand!(brand_id)

    uuid = brand.uuid
    curr = get_curr_campaigns_and_parts(uuid)
    past = get_past_campaigns_and_parts(uuid)

    {curr, past}
  end

  def get_all_creator_camps_and_parts(c_id) do
    creator = CreatorAccount.get_creator!(c_id)

    uuid = creator.uuid

    matched = get_matched(uuid)
    applied = get_applied(uuid)
    active = get_active(uuid)

    {matched, applied, active}
  end

  def get_matched(c_uuid) do
    d = Date.utc_today()

    parts =
      from(p in Participant,
        where:
          p.has_applied == false and p.creator_uuid == ^c_uuid and p.is_active == false and
            p.is_deleted == false
      )

    from(c in Campaign, join: p in ^parts, on: [campaign_uuid: c.uuid])
    |> Repo.all()
  end

  def get_applied(c_uuid) do
    d = Date.utc_today()

    parts =
      from(p in Participant,
        where:
          p.has_applied == true and p.is_active == false and p.creator_uuid == ^c_uuid and
            p.is_deleted == false
      )

    from(c in Campaign, join: p in ^parts, on: [campaign_uuid: c.uuid])
    |> Repo.all()
  end

  def get_active(c_uuid) do
    d = Date.utc_today()

    parts =
      from(p in Participant,
        where:
          p.has_applied == true and p.is_active == true and p.creator_uuid == ^c_uuid and
            p.is_deleted == false
      )

    from(c in Campaign, join: p in ^parts, on: [campaign_uuid: c.uuid])
    |> Repo.all()
  end

  def get_curr_campaigns_and_parts(brand_uuid) do
    d = Date.utc_today()

    parts =
      from(p in Participant,
        where: (p.has_applied == true or p.is_active == true) and p.is_deleted == false
      )

    from(c in Campaign,
      where: c.launched_by == ^brand_uuid and c.start_date <= ^d and c.end_date >= ^d,
      left_join: p in ^parts,
      on: [campaign_uuid: c.uuid],
      select: {c},
      preload: [participants: p]
    )
    |> Repo.all()
  end

  def get_past_campaigns_and_parts(brand_uuid) do
    d = Date.utc_today()

    parts = from(p in Participant, where: p.is_active == true or p.has_applied == true)

    from(c in Campaign,
      where: c.launched_by == ^brand_uuid and c.end_date < ^d,
      left_join: p in ^parts,
      on: [campaign_uuid: c.uuid],
      select: {c},
      preload: [participants: p]
    )
    |> Repo.all()
  end

  @doc """
  Gets a single campaign.

  Raises `Ecto.NoResultsError` if the Campaign does not exist.

  ## Examples

      iex> get_campaign!(123)
      %Campaign{}

      iex> get_campaign!(456)
      ** (Ecto.NoResultsError)

  """
  def get_campaign!(id), do: Repo.get!(Campaign, id)

  @doc """
  Creates a campaign.

  ## Examples

      iex> create_campaign(%{field: value})
      {:ok, %Campaign{}}

      iex> create_campaign(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_campaign(attrs \\ %{}) do
    %Campaign{}
    |> Campaign.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a campaign.

  ## Examples

      iex> update_campaign(campaign, %{field: new_value})
      {:ok, %Campaign{}}

      iex> update_campaign(campaign, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_campaign(%Campaign{} = campaign, attrs) do
    campaign
    |> Campaign.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a campaign.

  ## Examples

      iex> delete_campaign(campaign)
      {:ok, %Campaign{}}

      iex> delete_campaign(campaign)
      {:error, %Ecto.Changeset{}}

  """
  def delete_campaign(%Campaign{} = campaign) do
    Repo.delete(campaign)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking campaign changes.

  ## Examples

      iex> change_campaign(campaign)
      %Ecto.Changeset{source: %Campaign{}}

  """
  def change_campaign(%Campaign{} = campaign) do
    Campaign.changeset(campaign, %{})
  end
end
