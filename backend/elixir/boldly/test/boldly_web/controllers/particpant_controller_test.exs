defmodule BoldlyWeb.ParticipantControllerTest do
  use BoldlyWeb.ConnCase

  alias Boldly.CampaignPart
  alias Boldly.CampaignPart.Participant
  alias Boldly.CampaignInfo
  alias Boldly.CreatorAccount

  @valid_brand_attrs %{
    ecommerce: true,
    email: "some email",
    industries: "some industries",
    location: "some location",
    values: "some values",
    password: "some password",
    name: "some name"
  }
  @valid_creator_attrs %{
    birthday: ~D[2010-04-17],
    email: "some email",
    industry: "some industry",
    interests: "some interests",
    location: "some location",
    name: "some name",
    values: "some values",
    password: "some password"
  }

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

  @valid_camapign_attrs %{
    age_range: "some age_range",
    compensation: "some compensation",
    creator_responsibilities: "some creator_responsibilities",
    description: "some description",
    desired_engagement_rate: 42,
    end_date: ~D[2010-04-17],
    industry: "some industry",
    interests: "some interests",
    is_draft: true,
    location: "some location",
    name: "some name",
    perks: "some perks",
    photo_reference: "some photo_reference",
    specific_to_location: true,
    start_date: ~D[2010-04-17],
    values: "some values"
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

  @create_attrs %{
    is_active: true,
    is_deleted: true
  }
  @update_attrs %{
    is_active: false,
    is_deleted: false
  }
  @invalid_attrs %{is_active: nil, is_deleted: nil}

  def fixture(:setup_part) do
    {:ok, brand} = %{} |> Enum.into(@valid_brand_attrs) |> Boldly.BrandAccount.create_brand()

    use_attrs = %{
      age_range: @valid_camapign_attrs.age_range,
      compensation: @valid_camapign_attrs.compensation,
      creator_responsibilities: @valid_camapign_attrs.creator_responsibilities,
      description: @valid_camapign_attrs.description,
      desired_engagement_rate: @valid_camapign_attrs.desired_engagement_rate,
      end_date: @valid_camapign_attrs.end_date,
      industry: @valid_camapign_attrs.industry,
      interests: @valid_camapign_attrs.interests,
      is_draft: @valid_camapign_attrs.is_draft,
      location: @valid_camapign_attrs.location,
      name: @valid_camapign_attrs.name,
      perks: @valid_camapign_attrs.perks,
      photo_reference: @valid_camapign_attrs.photo_reference,
      specific_to_location: @valid_camapign_attrs.specific_to_location,
      start_date: @valid_camapign_attrs.start_date,
      values: @valid_camapign_attrs.values,
      launched_by: brand.uuid
    }

    {:ok, campaign} =
      %{}
      |> Enum.into(use_attrs)
      |> Boldly.CampaignInfo.create_campaign()

    {:ok, creator} =
      %{}
      |> Enum.into(@valid_creator_attrs)
      |> Boldly.CreatorAccount.create_creator()

    part_attrs = %{
      is_active: true,
      is_deleted: false,
      creator_uuid: creator.uuid,
      campaign_uuid: campaign.uuid
    }
  end

  def fixture(:participant) do
    part_attrs = fixture(:setup_part)

    {:ok, participant} =
      %{}
      |> Enum.into(part_attrs)
      |> CampaignPart.create_participant()

    participant
  end

  def campaign_fixture(attrs \\ %{}) do
    {:ok, brand} = @valid_brand_attrs |> Boldly.BrandAccount.create_brand()
    # IO.puts(attrs)


    {:ok, campaign} =
      attrs
      |> Enum.into(Map.put(@valid_campaign_attrs, :launched_by, brand.uuid))
      |> CampaignInfo.create_campaign()

    campaign
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

    cam_attrs = %{
      age_range: age_range,
      specific_to_location: specific_loc,
      interests: ints,
      location: loc,
      industry: industry,
      values: vals
    }


    camp = campaign_fixture(cam_attrs)
    {camp, vals, ints, specific_loc, loc, industry, vals, begin_age, stop_age}
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "Create Participants from matches" do
    test "participants are correctly recorded", %{conn: conn} do
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

      c_num = 50
      match_creators = create_users_with_attributes(match_usr_attrs, c_num)

      %{
        interests: ["nonesense", "nonesense2"]
      }
      |> Enum.into(match_usr_attrs)
      |> create_users_with_attributes(10)

      %{
        location: "not correct"
      }
      |> Enum.into(match_usr_attrs)
      |> create_users_with_attributes(10)

      %{
        vals: ["not correct", "notCorrect 2"]
      }
      |> Enum.into(match_usr_attrs)
      |> create_users_with_attributes(10)

      %{
        industry: "not correct"
      }
      |> Enum.into(match_usr_attrs)
      |> create_users_with_attributes(10)

      d_not2 = Date.utc_today()
      d_not1 = Date.add(d_not2, -365 * (begin_age - 3))

      %{
        date_range: Date.range(d_not1, d_not2)
      }
      |> Enum.into(match_usr_attrs)
      |> create_users_with_attributes(10)

      conn = post(conn, Routes.participant_path(conn, :match_creators, campaign_id: camp.id))

      assert Enum.count(json_response(conn, 200)["data"]) == c_num
    end

    test "get participants in a campaign", %{conn: conn} do
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

      c_num = 50
      match_creators = create_users_with_attributes(match_usr_attrs, c_num)

      %{
        interests: ["nonesense", "nonesense2"]
      }
      |> Enum.into(match_usr_attrs)
      |> create_users_with_attributes(10)

      %{
        location: "not correct"
      }
      |> Enum.into(match_usr_attrs)
      |> create_users_with_attributes(10)

      %{
        vals: ["not correct", "notCorrect 2"]
      }
      |> Enum.into(match_usr_attrs)
      |> create_users_with_attributes(10)

      %{
        industry: "not correct"
      }
      |> Enum.into(match_usr_attrs)
      |> create_users_with_attributes(10)

      d_not2 = Date.utc_today()
      d_not1 = Date.add(d_not2, -365 * (begin_age - 3))

      %{
        date_range: Date.range(d_not1, d_not2)
      }
      |> Enum.into(match_usr_attrs)
      |> create_users_with_attributes(10)

      conn = post(conn, Routes.participant_path(conn, :match_creators, campaign_id: camp.id))

      conn = post(conn, Routes.participant_path(conn, :get_creators_in_campaign, campaign_uuid: camp.uuid))

      assert Enum.count(json_response(conn, 200)["data"]) == c_num
    end
  end

  describe "index" do
    test "lists all participants", %{conn: conn} do
      conn = get(conn, Routes.participant_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create participant" do
    test "renders participant when data is valid", %{conn: conn} do
      setup_part = fixture(:setup_part)
      conn = post(conn, Routes.participant_path(conn, :create), participant: setup_part)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.participant_path(conn, :show, id))

      assert %{
               "id" => id,
               "is_active" => true,
               "is_deleted" => false
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.participant_path(conn, :create), participant: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update participant" do
    setup [:create_participant]

    test "renders participant when data is valid", %{
      conn: conn,
      participant: %Participant{id: id} = participant
    } do
      conn =
        put(conn, Routes.participant_path(conn, :update, participant), participant: @update_attrs)

      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.participant_path(conn, :show, id))

      assert %{
               "id" => id,
               "is_active" => false,
               "is_deleted" => false
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, participant: participant} do
      conn =
        put(conn, Routes.participant_path(conn, :update, participant), participant: @invalid_attrs)

      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete participant" do
    setup [:create_participant]

    test "deletes chosen participant", %{conn: conn, participant: participant} do
      conn = delete(conn, Routes.participant_path(conn, :delete, participant))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.participant_path(conn, :show, participant))
      end
    end
  end

  defp create_participant(_) do
    participant = fixture(:participant)
    {:ok, participant: participant}
  end
end
