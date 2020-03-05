defmodule BoldlyWeb.CampaignControllerTest do
  use BoldlyWeb.ConnCase

  alias Boldly.CampaignInfo
  alias Boldly.CampaignInfo.Campaign
  alias Plug.Test

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

  @create_attrs %{
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
    uuid: "7488a646-e31f-11e4-aace-600308960662",
    values: "some values",
    launched_by: "7488a646-e31f-11e4-aace-600308960660"
  }
  @update_attrs %{
    age_range: "some updated age_range",
    compensation: "some updated compensation",
    creator_responsibilities: "some updated creator_responsibilities",
    description: "some updated description",
    desired_engagement_rate: 43,
    end_date: ~D[2011-05-18],
    industry: "some updated industry",
    interests: "some updated interests",
    is_draft: false,
    location: "some updated location",
    name: "some updated name",
    perks: "some updated perks",
    photo_reference: "some updated photo_reference",
    specific_to_location: false,
    start_date: ~D[2011-05-18],
    uuid: "7488a646-e31f-11e4-aace-600308960668",
    values: "some updated values",
    launched_by: "7488a646-e31f-11e4-aace-600308960660"
  }

  @invalid_attrs %{
    age_range: nil,
    compensation: nil,
    creator_responsibilities: nil,
    description: nil,
    desired_engagement_rate: nil,
    end_date: nil,
    industry: nil,
    interests: nil,
    is_draft: nil,
    location: nil,
    name: nil,
    perks: nil,
    photo_reference: nil,
    specific_to_location: nil,
    start_date: nil,
    uuid: nil,
    values: nil
  }

  def fixture(:campaign) do
    # {:ok, brand} =  %{} |> Enum.into(@valid_brand_attrs) |> Boldly.BrandAccount.create_brand()

    use_attrs = %{
      age_range: @create_attrs.age_range,
      compensation: @create_attrs.compensation,
      creator_responsibilities: @create_attrs.creator_responsibilities,
      description: @create_attrs.description,
      desired_engagement_rate: @create_attrs.desired_engagement_rate,
      end_date: @create_attrs.end_date,
      industry: @create_attrs.industry,
      interests: @create_attrs.interests,
      is_draft: @create_attrs.is_draft,
      location: @create_attrs.location,
      name: @create_attrs.name,
      perks: @create_attrs.perks,
      photo_reference: @create_attrs.photo_reference,
      specific_to_location: @create_attrs.specific_to_location,
      start_date: @create_attrs.start_date,
      uuid: @create_attrs.uuid,
      values: @create_attrs.values,
      launched_by: @valid_brand_attrs.uuid
    }

    {:ok, campaign} = CampaignInfo.create_campaign(use_attrs)
    campaign
  end

  def fixture(:current_user) do
    {:ok, current_user} = Boldly.BrandAccount.create_brand(@valid_brand_attrs)
    current_user
  end

  setup %{conn: conn} do
    {:ok, conn: conn, current_user: current_user} = setup_current_user(conn)
    {:ok, conn: put_req_header(conn, "accept", "application/json"), current_user: current_user}
  end

  describe "index" do
    test "lists all campaigns", %{conn: conn, current_user: current_user} do
      conn = get(conn, Routes.campaign_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create campaign" do
    test "renders campaign when data is valid", %{conn: conn, current_user: current_user} do
      conn = post(conn, Routes.campaign_path(conn, :create), campaign: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.campaign_path(conn, :show, id))

      assert %{
               "id" => id,
               "age_range" => "some age_range",
               "compensation" => "some compensation",
               "creator_responsibilities" => "some creator_responsibilities",
               "description" => "some description",
               "desired_engagement_rate" => 42,
               "end_date" => "2010-04-17",
               "industry" => "some industry",
               "interests" => "some interests",
               "is_draft" => true,
               "location" => "some location",
               "name" => "some name",
               "perks" => "some perks",
               "photo_reference" => "some photo_reference",
               "specific_to_location" => true,
               "start_date" => "2010-04-17",
               "uuid" => "7488a646-e31f-11e4-aace-600308960662",
               "values" => "some values"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, current_user: current_user} do
      conn = post(conn, Routes.campaign_path(conn, :create), campaign: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update campaign" do
    setup [:create_campaign]

    test "renders campaign when data is valid", %{
      conn: conn,
      campaign: %Campaign{id: id} = campaign
    } do
      conn = put(conn, Routes.campaign_path(conn, :update, campaign), campaign: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.campaign_path(conn, :show, id))

      assert %{
               "id" => id,
               "age_range" => "some updated age_range",
               "compensation" => "some updated compensation",
               "creator_responsibilities" => "some updated creator_responsibilities",
               "description" => "some updated description",
               "desired_engagement_rate" => 43,
               "end_date" => "2011-05-18",
               "industry" => "some updated industry",
               "interests" => "some updated interests",
               "is_draft" => false,
               "location" => "some updated location",
               "name" => "some updated name",
               "perks" => "some updated perks",
               "photo_reference" => "some updated photo_reference",
               "specific_to_location" => false,
               "start_date" => "2011-05-18",
               "uuid" => "7488a646-e31f-11e4-aace-600308960668",
               "values" => "some updated values",
               "launched_by" => "7488a646-e31f-11e4-aace-600308960660"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, campaign: campaign} do
      conn = put(conn, Routes.campaign_path(conn, :update, campaign), campaign: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete campaign" do
    setup [:create_campaign]

    test "deletes chosen campaign", %{conn: conn, campaign: campaign} do
      conn = delete(conn, Routes.campaign_path(conn, :delete, campaign))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.campaign_path(conn, :show, campaign))
      end
    end
  end

  defp create_campaign(_) do
    campaign = fixture(:campaign)
    {:ok, campaign: campaign}
  end

  defp setup_current_user(conn) do
    current_user = fixture(:current_user)

    {
      :ok,
      conn: Test.init_test_session(conn, current_user_id: current_user.id),
      current_user: current_user
    }
  end
end
