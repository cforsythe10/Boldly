defmodule BoldlyWeb.ParticipantControllerTest do
  use BoldlyWeb.ConnCase

  alias Boldly.CampaignPart
  alias Boldly.CampaignPart.Participant

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

  @create_attrs %{
    is_active: true,
    is_pending: true
  }
  @update_attrs %{
    is_active: false,
    is_pending: false
  }
  @invalid_attrs %{is_active: nil, is_pending: nil}

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
      is_pending: false,
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

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
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
               "is_pending" => false
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
               "is_pending" => false
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
