defmodule BoldlyWeb.ContractControllerTest do
  use BoldlyWeb.ConnCase

  alias Boldly.SignedContract
  alias Boldly.SignedContract.Contract

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
    file_path: "some file_path"
  }
  @update_attrs %{
    file_path: "some updated file_path"
  }
  @invalid_attrs %{file_path: nil, id: nil}

  def fixture(:contract_setup) do
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

    contract_attrs = %{
      brand_uuid: brand.uuid,
      campaign_uuid: campaign.uuid,
      creator_uuid: creator.uuid,
      file_path: "some file_path"
    }
  end

  def fixture(:contract) do
    contract_attrs = fixture(:contract_setup)
    {:ok, contract} = SignedContract.create_contract(contract_attrs)
    contract
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all contracts", %{conn: conn} do
      conn = get(conn, Routes.contract_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create contract" do
    test "renders contract when data is valid", %{conn: conn} do
      contract_attrs = fixture(:contract_setup)
      conn = post(conn, Routes.contract_path(conn, :create), contract: contract_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.contract_path(conn, :show, id))

      assert %{
               "id" => id,
               "file_path" => "some file_path"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.contract_path(conn, :create), contract: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update contract" do
    setup [:create_contract]

    test "renders contract when data is valid", %{
      conn: conn,
      contract: %Contract{id: id} = contract
    } do
      conn = put(conn, Routes.contract_path(conn, :update, contract), contract: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.contract_path(conn, :show, id))

      assert %{
               "id" => id,
               "file_path" => "some updated file_path"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, contract: contract} do
      conn = put(conn, Routes.contract_path(conn, :update, contract), contract: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete contract" do
    setup [:create_contract]

    test "deletes chosen contract", %{conn: conn, contract: contract} do
      conn = delete(conn, Routes.contract_path(conn, :delete, contract))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.contract_path(conn, :show, contract))
      end
    end
  end

  defp create_contract(_) do
    contract = fixture(:contract)
    {:ok, contract: contract}
  end
end
