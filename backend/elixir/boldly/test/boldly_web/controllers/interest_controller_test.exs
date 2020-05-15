defmodule BoldlyWeb.InterestControllerTest do
  use BoldlyWeb.ConnCase

  alias Boldly.InterestInfo
  alias Boldly.InterestInfo.Interest

  @create_attrs %{
    categories: "some categories",
    interest: "some interest"
  }
  @update_attrs %{
    categories: "some updated categories",
    interest: "some updated interest"
  }
  @invalid_attrs %{categories: nil, interest: nil}

  def fixture(:interest) do
    {:ok, interest} = InterestInfo.create_interest(@create_attrs)
    interest
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all interests", %{conn: conn} do
      conn = get(conn, Routes.interest_path(conn, :index))

      assert Enum.all?(json_response(conn, 200)["data"], fn interest ->
               Map.has_key?(interest, "interest") and Map.has_key?(interest, "categories")
             end)
    end
  end

  describe "create interest" do
    test "renders interest when data is valid", %{conn: conn} do
      conn = post(conn, Routes.interest_path(conn, :create), interest: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.interest_path(conn, :show, id))

      assert %{
               "id" => id,
               "categories" => "some categories",
               "interest" => "some interest"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.interest_path(conn, :create), interest: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update interest" do
    setup [:create_interest]

    test "renders interest when data is valid", %{
      conn: conn,
      interest: %Interest{id: id} = interest
    } do
      conn = put(conn, Routes.interest_path(conn, :update, interest), interest: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.interest_path(conn, :show, id))

      assert %{
               "id" => id,
               "categories" => "some updated categories",
               "interest" => "some updated interest"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, interest: interest} do
      conn = put(conn, Routes.interest_path(conn, :update, interest), interest: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete interest" do
    setup [:create_interest]

    test "deletes chosen interest", %{conn: conn, interest: interest} do
      conn = delete(conn, Routes.interest_path(conn, :delete, interest))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.interest_path(conn, :show, interest))
      end
    end
  end

  defp create_interest(_) do
    interest = fixture(:interest)
    {:ok, interest: interest}
  end
end
