defmodule Boldly.CampaignMatcherTest do
  use Boldly.DataCase

  alias Boldly.CampaignInfo.Campaign
  alias Boldly.CreatorAccount.Creator

  alias Boldly.CampaignInfo
  alias Boldly.CreatorAccount
  alias Boldly.CampaignMatcher

  @valid_creator_attrs1 %{
    birthday: ~D[1990-04-17],
    email: "some email",
    industry: "some industry",
    interests: "some interests",
    location: "some location",
    name: "some name",
    values: "some values",
    password: "some password"
  }

  @valid_creator_attrs2 %{
    birthday: ~D[2012-04-17],
    email: "some email2",
    industry: "some industry2",
    interests: "some interests2",
    location: "some location2",
    name: "some name2",
    values: "some values2",
    password: "some password2"
  }

  @valid_brand_attrs %{
    ecommerce: true,
    email: "some email",
    uuid: "7488a646-e31f-11e4-aace-600308960660",
    id: 1,
    industries: "some industries",
    location: "some location",
    values: "some values",
    password: "some password",
    name: "some name"
  }

  @valid_campaign_attrs %{
    age_range: "18-35",
    compensation: "some compensation",
    creator_responsibilities: "some creator_responsibilities",
    description: "some description",
    desired_engagement_rate: 42,
    end_date: ~D[2010-04-17],
    industry: "some industry",
    interests: "some interests",
    is_draft: false,
    location: "some location",
    name: "some name",
    perks: "some perks",
    photo_reference: "some photo_reference",
    specific_to_location: true,
    start_date: ~D[2010-04-17],
    uuid: "7488a646-e31f-11e4-aace-600308960662",
    values: "some values",
    launched_by: "7488a646-e31f-11e4-aace-600308960660"
  }

  def campaign_fixture(attrs \\ %{}) do
    {:ok, brand} = @valid_brand_attrs |> Boldly.BrandAccount.create_brand()
    {:ok, creator1} = @valid_creator_attrs1 |> Boldly.CreatorAccount.create_creator()

    {:ok, creator2} = @valid_creator_attrs2 |> Boldly.CreatorAccount.create_creator()

    {:ok, campaign} =
      attrs
      |> Enum.into(Map.put(@valid_campaign_attrs, :launched_by, brand.uuid))
      |> CampaignInfo.create_campaign()

    {campaign, creator1, creator2}
  end

  # attrs ={
  #   date_range: Date.range(~D[1999-01-01], ~D[2000-01-01]),
  #   industry: "industry",
  #   vals: list of vals -- will combine into string if multiple are chose,
  #   max_num_vals: should not exceed number of elements in vals
  #   interests: list like vals,
  #   max_num_int: should not exceed number of interests,
  #  location: "location"
  #   }
  def create_users_with_attributes(attrs, num_create \\ 5) do
    email_stream = StreamData.string(:alphanumeric, min_length: 20, max_length: 50)

    Enum.map(1..num_create, fn _ ->
      [d] = Enum.take(Enum.shuffle(attrs.date_range), 1)
      [email] = Enum.take(email_stream, 1)
      [n_vals] = Enum.take(StreamData.integer(1..attrs.max_num_vals), 1)
      [n_ints] = Enum.take(StreamData.integer(1..attrs.max_num_int), 1)
      vals = Enum.take(StreamData.member_of(attrs.vals), n_vals)
      ints = Enum.take(StreamData.member_of(attrs.interests), n_ints)
      loc = attrs.location

      values =
        if Enum.count(vals) == 1 do
          Enum.at(vals, 0)
        else
          Enum.reduce(vals, "", fn v, str ->
            if str == "" do
              str = v
            else
              str <> ",#{v}"
            end
          end)
        end

      interests =
        if Enum.count(ints) == 1 do
          Enum.at(ints, 0)
        else
          Enum.reduce(ints, "", fn i, str ->
            if str == "" do
              str = i
            else
              str <> ",#{i}"
            end
          end)
        end

      {:ok, creator} =
        %{birthday: d, email: email, values: values, interests: interests, location: loc}
        |> Enum.into(@valid_creator_attrs1)
        |> CreatorAccount.create_creator()

      creator
    end)
  end

  describe "main algorithm" do
    test "main algorithm returns correct applicant" do
      {camp, creator1, creator2} = campaign_fixture()

      res = CampaignMatcher.match(camp.id)

      c1 = Boldly.CreatorAccount.get_creator!(creator1.id)
      # IO.puts(res)

      assert res == [c1]
    end
  end
end
