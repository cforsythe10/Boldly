defmodule BoldlyWeb.CreatorControllerTest do
  use BoldlyWeb.ConnCase

  alias Boldly.CreatorAccount
  alias Boldly.CreatorAccount.Creator

  @create_attrs %{
    birthday: ~D[2010-04-17],
    email: "some email",
    id: "7488a646-e31f-11e4-aace-600308960662",
    industry: "some industry",
    interests: "some interests",
    location: "some location",
    name: "some name",
    selectedvalues: "some selectedvalues",
    password: "some password"
  }
  @update_attrs %{
    birthday: ~D[2011-05-18],
    email: "some updated email",
    id: "7488a646-e31f-11e4-aace-600308960668",
    industry: "some updated industry",
    interests: "some updated interests",
    location: "some updated location",
    name: "some updated name",
    selectedvalues: "some updated selectedvalues",
    password: "some other password"
  }
  @invalid_attrs %{birthday: nil, email: nil, id: nil, industry: nil, interests: nil, location: nil, name: nil, selectedvalues: nil, password: nil}

  def fixture(:creator) do
    {:ok, creator} = CreatorAccount.create_creator(@create_attrs)
    creator
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all creators", %{conn: conn} do
      conn = get(conn, Routes.creator_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create creator" do
    test "renders creator when data is valid", %{conn: conn} do
      conn = post(conn, Routes.creator_path(conn, :create), creator: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.creator_path(conn, :show, id))

      assert %{
               "id" => id,
               "birthday" => "2010-04-17",
               "email" => "some email",
               "industry" => "some industry",
               "interests" => "some interests",
               "location" => "some location",
               "name" => "some name",
               "selectedvalues" => "some selectedvalues"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.creator_path(conn, :create), creator: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update creator" do
    setup [:create_creator]

    test "renders creator when data is valid", %{conn: conn, creator: %Creator{id: id} = creator} do
      conn = put(conn, Routes.creator_path(conn, :update, creator), creator: @update_attrs)
      assert %{"id" => id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.creator_path(conn, :show, id))

      assert %{
               "id" => id,
               "birthday" => "2011-05-18",
               "email" => "some updated email",
               "industry" => "some updated industry",
               "interests" => "some updated interests",
               "location" => "some updated location",
               "name" => "some updated name",
               "selectedvalues" => "some updated selectedvalues"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, creator: creator} do
      conn = put(conn, Routes.creator_path(conn, :update, creator), creator: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete creator" do
    setup [:create_creator]

    test "deletes chosen creator", %{conn: conn, creator: creator} do
      conn = delete(conn, Routes.creator_path(conn, :delete, creator))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.creator_path(conn, :show, creator))
      end
    end
  end

  defp create_creator(_) do
    creator = fixture(:creator)
    {:ok, creator: creator}
  end
end
