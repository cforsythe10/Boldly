defmodule Boldly.CampaignMatcher do
  import Ecto.Query, warn: false
  alias Boldly.Repo

  alias Boldly.CampaignInfo.Campaign
  alias Boldly.CreatorAccount.Creator

  alias Boldly.CampaignInfo
  alias Boldly.CreatorAccount

  def match(campaign_id) do
    campaign = CampaignInfo.get_campaign!(campaign_id)

    campaign
    |> compose_query()
    |> Repo.all()
  end

  def compose_query(camp) do
    {start_date, end_date} = get_age_range(camp.age_range)
    industry = camp.industry
    vals = String.split(camp.values, ",")
    interests = String.split(camp.interests, ",")

    val_query = vals_query(Creator, vals)
    interests_query = int_query(from(c in subquery(val_query)), interests)

    # date_query = where([c], c.birthday >= ^start_date and c.birthday <= ^end_date)

    q_base = from(c in subquery(interests_query), select: c)

    q_base
    |> where([c], c.industry == ^industry)
    |> where([c], c.birthday <= ^start_date and c.birthday >= ^end_date)
    |> location_query(camp.location, camp.specific_to_location)
  end

  def get_age_range(age_range \\ "18-50") do
    [s, e] = String.split(age_range, "-")
    s_i = String.to_integer(s)
    e_i = String.to_integer(e)

    start_date = Date.add(Date.utc_today(), -365 * s_i)
    end_date = Date.add(Date.utc_today(), -365 * e_i)

    {start_date, end_date}
  end

  def location_query(query, loc, false), do: query

  def location_query(query, loc, true) do
    query
    |> where([c], c.location == ^loc)
  end

  def int_query(query, [""]), do: query

  def int_query(query, interests) do
    Enum.reduce(interests, query, fn int, qt ->
      q_t = "%#{int}%"
      from m in qt, or_where: like(m.interests, ^q_t)
    end)
  end

  def vals_query(query, [""]), do: query

  def vals_query(query, val_list) do
    Enum.reduce(val_list, query, fn val, qt ->
      q_t = "%#{val}%"
      from m in qt, or_where: like(m.values, ^q_t)
    end)
  end

  defp get_scores(creators) when is_list(creators) do
  end
end
