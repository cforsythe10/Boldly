defmodule BoldlyWeb.BrandControllerTest do
  use BoldlyWeb.ConnCase

  alias Boldly.BrandAccount
  alias Boldly.BrandAccount.Brand

  @create_attrs %{
    ecommerce: true,
    email: "some email",
    id: "7488a646-e31f-11e4-aace-600308960662",
    industries: "some industries",
    location: "some location",
    values: "some values",
    password: "some password"
  }
  @update_attrs %{
    ecommerce: false,
    email: "some updated email",
    id: "7488a646-e31f-11e4-aace-600308960668",
    industries: "some updated industries",
    location: "some updated location",
    values: "some updated values",
    password: "some updated password"
  }
  @invalid_attrs %{
    ecommerce: nil,
    email: nil,
    id: nil,
    industries: nil,
    location: nil,
    values: nil,
    password: nil
  }

  def fixture(:brand) do
    {:ok, brand} = BrandAccount.create_brand(@create_attrs)
    brand
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all brands", %{conn: conn} do
      conn = get(conn, Routes.brand_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create brand" do
    test "renders brand when data is valid", %{conn: conn} do
      conn = post(conn, Routes.brand_path(conn, :create), brand: @create_attrs)
      assert %{"uuid" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.brand_path(conn, :show, id))

      assert %{
               "ecommerce" => true,
               "email" => "some email",
               "uuid" => id,
               "industries" => "some industries",
               "location" => "some location",
               "values" => "some values"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.brand_path(conn, :create), brand: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update brand" do
    setup [:create_brand]

    test "renders brand when data is valid", %{conn: conn, brand: %Brand{id: id} = brand} do
      conn = put(conn, Routes.brand_path(conn, :update, brand), brand: @update_attrs)
      assert %{"uuid" => id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.brand_path(conn, :show, id))

      assert %{
               "ecommerce" => false,
               "email" => "some updated email",
               "uuid" => id,
               "industries" => "some updated industries",
               "location" => "some updated location",
               "values" => "some updated values"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, brand: brand} do
      conn = put(conn, Routes.brand_path(conn, :update, brand), brand: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete brand" do
    setup [:create_brand]

    test "deletes chosen brand", %{conn: conn, brand: brand} do
      conn = delete(conn, Routes.brand_path(conn, :delete, brand))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.brand_path(conn, :show, brand))
      end
    end
  end

  defp create_brand(_) do
    brand = fixture(:brand)
    {:ok, brand: brand}
  end
end
