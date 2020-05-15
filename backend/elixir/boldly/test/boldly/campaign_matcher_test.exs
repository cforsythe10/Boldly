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

      loc = attrs.location
      industry = attrs.industry

      [vals] =
        Enum.take(
          StreamData.uniq_list_of(StreamData.member_of(attrs.vals),
            min_length: 2,
            max_length: n_vals
          ),
          1
        )

      [ints] =
        Enum.take(
          StreamData.uniq_list_of(StreamData.member_of(attrs.interests),
            min_length: 2,
            max_length: n_ints
          ),
          1
        )

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
        %{
          birthday: d,
          email: email,
          values: values,
          interests: interests,
          location: loc,
          industry: industry
        }
        |> Enum.into(@valid_creator_attrs1)
        |> CreatorAccount.create_creator()

      CreatorAccount.get_creator!(creator.id)
    end)
  end

  def fixture(:camp_attrs) do
    begin_age = 10
    stop_age = 80

    vals = "v1,v2,v3,v6,v22,h68,n954"
    ints = "int11,int22,int3,int4,int8,int69"
    specific_loc = true
    loc = "NY,NY"
    industry = "ind1"
    age_range = "#{begin_age}-#{stop_age}"

    camp_attrs = %{
      age_range: age_range,
      specific_to_location: specific_loc,
      interests: ints,
      location: loc,
      industry: industry,
      values: vals
    }

    {camp, creator1, creator2} = campaign_fixture(camp_attrs)
    {camp, vals, ints, specific_loc, loc, industry, vals, begin_age, stop_age}
  end

  describe "main algorithm" do
    test "match/1 returns correct applicant" do
      {camp, creator1, creator2} = campaign_fixture()

      res = CampaignMatcher.match(camp.id)

      c1 = Boldly.CreatorAccount.get_creator!(creator1.id)

      assert res == [c1]
    end

    test "vals_query/2 returns correct applicants" do
      {camp, vals, ints, specific_loc, loc, industry, vals, begin_age, stop_age} =
        fixture(:camp_attrs)

      d1 = Date.add(Date.utc_today(), -365 * stop_age)
      d2 = Date.add(Date.utc_today(), -365 * begin_age)

      values = String.split(vals, ",")
      interests = String.split(ints, ",")

      match_usr_attrs = %{
        date_range: Date.range(d1, d2),
        location: loc,
        vals: values,
        interests: interests,
        max_num_vals: Enum.count(values),
        max_num_int: Enum.count(interests),
        industry: industry
      }

      bad_usr_attrs =
        %{
          vals: ["nonesense", "nonesense2"]
        }
        |> Enum.into(match_usr_attrs)

      match_creators = create_users_with_attributes(match_usr_attrs, 10)
      bad_creators = create_users_with_attributes(bad_usr_attrs, 10)

      matches = CampaignMatcher.vals_query(Creator, values) |> CampaignMatcher.match_test()

      assert matches == match_creators
      assert Enum.count(matches) == 10
    end

    test "int_query/2 returns correct applicants" do
      {camp, vals, ints, specific_loc, loc, industry, vals, begin_age, stop_age} =
        fixture(:camp_attrs)

      d1 = Date.add(Date.utc_today(), -365 * stop_age)
      d2 = Date.add(Date.utc_today(), -365 * begin_age)

      values = String.split(vals, ",")
      interests = String.split(ints, ",")

      match_usr_attrs = %{
        date_range: Date.range(d1, d2),
        location: loc,
        vals: values,
        interests: interests,
        max_num_vals: Enum.count(values),
        max_num_int: Enum.count(interests),
        industry: industry
      }

      bad_usr_attrs =
        %{
          interests: ["nonesense", "nonesense2"]
        }
        |> Enum.into(match_usr_attrs)

      match_creators = create_users_with_attributes(match_usr_attrs, 10)
      bad_creators = create_users_with_attributes(bad_usr_attrs, 10)

      matches = CampaignMatcher.int_query(Creator, interests) |> CampaignMatcher.match_test()

      assert matches == match_creators
      assert Enum.count(matches) == 10
    end

    test "vals_query/2 |> int_query/2 works" do
      {camp, vals, ints, specific_loc, loc, industry, vals, begin_age, stop_age} =
        fixture(:camp_attrs)

      d1 = Date.add(Date.utc_today(), -365 * stop_age)
      d2 = Date.add(Date.utc_today(), -365 * begin_age)

      values = String.split(vals, ",")
      interests = String.split(ints, ",")

      match_usr_attrs = %{
        date_range: Date.range(d1, d2),
        location: loc,
        vals: values,
        interests: interests,
        max_num_vals: Enum.count(values),
        max_num_int: Enum.count(interests),
        industry: industry
      }

      bad_usr_attrs =
        %{
          interests: ["nonesense", "nonesense2"]
        }
        |> Enum.into(match_usr_attrs)

      match_creators = create_users_with_attributes(match_usr_attrs, 10)
      bad_creators = create_users_with_attributes(bad_usr_attrs, 10)

      matches =
        from(c in subquery(CampaignMatcher.vals_query(Creator, values)))
        |> CampaignMatcher.int_query(interests)
        |> CampaignMatcher.match_test()

      assert matches == match_creators
      assert Enum.count(matches) == 10
    end

    test "match/1 returns correct creators" do
      {camp, vals, ints, specific_loc, loc, industry, vals, begin_age, stop_age} =
        fixture(:camp_attrs)

      d1 = Date.add(Date.utc_today(), -365 * stop_age)
      d2 = Date.add(Date.utc_today(), -365 * begin_age)

      values = String.split(vals, ",")
      interests = String.split(ints, ",")

      match_usr_attrs = %{
        date_range: Date.range(d1, d2),
        location: loc,
        vals: values,
        interests: interests,
        max_num_vals: Enum.count(values),
        max_num_int: Enum.count(interests),
        industry: industry
      }

      c_num = 500
      match_creators = create_users_with_attributes(match_usr_attrs, c_num)

      b_c1 =
        %{
          interests: ["nonesense", "nonesense2"]
        }
        |> Enum.into(match_usr_attrs)
        |> create_users_with_attributes(10)

      b_c2 =
        %{
          location: "not correct"
        }
        |> Enum.into(match_usr_attrs)
        |> create_users_with_attributes(10)

      b_c3 =
        %{
          vals: ["not correct", "notCorrect 2"]
        }
        |> Enum.into(match_usr_attrs)
        |> create_users_with_attributes(10)

      b_c4 =
        %{
          industry: "not correct"
        }
        |> Enum.into(match_usr_attrs)
        |> create_users_with_attributes(10)

      d_not2 = Date.utc_today()
      d_not1 = Date.add(d_not2, (-365) * (begin_age - 3))

      b_c5 =
        %{
          date_range: Date.range(d_not1, d_not2)
        }
        |> Enum.into(match_usr_attrs)
        |> create_users_with_attributes(100)

      matches = CampaignMatcher.match(camp.id)

      assert matches == match_creators
      assert Enum.count(matches) == c_num
    end
  end
end
