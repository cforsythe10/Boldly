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
    |> get_scores

  end

  def comp_q(vals \\ [1,2,3], interests \\ [4,5,6]) do
    val_query = vals_query(vals)
    interests_query = int_query(from(c in subquery(val_query)), interests)
  end

  def compose_query(camp) do
    {start_date, end_date} = get_age_range(camp.age_range)
    industry = camp.industry
    vals = String.split(camp.values, ",")
    interests = camp.interests

    val_query = vals_query(vals)
    interests_query = int_query(from(c in subquery(val_query)), interests)

    # date_query = where([c], c.birthday >= ^start_date and c.birthday <= ^end_date)

    q_base = from(c in subquery(interests_query), select: c)

    q_base
    |> where([c], c.industry == ^industry)
    |> where([c], c.birthday >= ^start_date and c.birthday <= ^end_date)
  end

  def get_age_range(age_range) do
    [s, e] = String.split(age_range, "-")
    s_i = String.to_integer(s)
    e_i = String.to_integer(e)

    
  end

  def int_query(query, interests) do
    Enum.reduce(interests, query, fn int, qt ->
      q_t = "%#{int}%"
      from m in qt, or_where: like(m.interests, ^q_t)
    end)
  end



  # def vals_query(query, nil), do: query

  def vals_query(val_list, query \\ from(c in Creator)) do
    Enum.reduce(val_list, query, fn val, qt ->
      q_t = "%#{val}%"
      from m in qt, or_where: like(m.values, ^q_t)
    end)
  end

  defp get_scores(creators) when is_list(creators) do

  end
end
