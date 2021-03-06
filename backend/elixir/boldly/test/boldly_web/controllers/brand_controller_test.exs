defmodule BoldlyWeb.BrandControllerTest do
  use BoldlyWeb.ConnCase

  alias Boldly.BrandAccount
  alias Boldly.BrandAccount.Brand
  alias Plug.Test

  @create_attrs %{
    ecommerce: true,
    email: "some email",
    # uuid: "7488a646-e31f-11e4-aace-600308960662",
    industries: "some industries",
    location: "some location",
    values: "some values",
    password: "some password",
    name: "some name",
    description: "some descriptive text",
    web_link: "www.google.com"
  }
  @update_attrs %{
    ecommerce: false,
    email: "some updated email",
    # uuid: "7488a646-e31f-11e4-aace-600308960662",
    industries: "some updated industries",
    location: "some updated location",
    values: "some updated values",
    password: "some updated password",
    name: "some updated name",
    description: "some other descriptive text",
    web_link: "www.bing.com"
  }
  @invalid_attrs %{
    ecommerce: nil,
    email: nil,
    id: nil,
    uuid: nil,
    industries: nil,
    location: nil,
    values: nil,
    password: nil,
    name: nil
  }

  @current_attrs %{
    ecommerce: true,
    email: "some current email",
    uuid: "7488a646-e31f-11e4-aace-600308960666",
    id: 2,
    industries: "some current industries",
    location: "some current location",
    values: "some current values",
    password: "some current password",
    name: "some current name"
  }

  def fixture(:brand) do
    {:ok, brand} = BrandAccount.create_brand(@create_attrs)
    brand
  end

  def fixture(:current_user) do
    {:ok, current_user} = BrandAccount.create_brand(@current_attrs)
    current_user
  end

  setup %{conn: conn} do
    {:ok, conn: conn, current_user: current_user} = setup_current_user(conn)
    {:ok, conn: put_req_header(conn, "accept", "application/json"), current_user: current_user}
  end

  describe "incrementing" do
    test "increments once", %{conn: conn, current_user: current_user} do
      conn = post(conn, Routes.brand_path(conn, :create), brand: @create_attrs)

      assert %{"id" => id, "uuid" => uuid, "profile_visits" => 0} =
               json_response(conn, 201)["data"]

      conn = post(conn, Routes.brand_path(conn, :increment_views), id: id)

      assert %{"profile_visits" => 1} = json_response(conn, 200)["data"]
    end

    test "increments 10 times", %{conn: conn, current_user: current_user} do
      conn = post(conn, Routes.brand_path(conn, :create), brand: @create_attrs)

      assert %{"id" => id, "uuid" => uuid, "profile_visits" => 0} =
               json_response(conn, 201)["data"]

      conn = post(conn, Routes.brand_path(conn, :increment_views), id: id)
      conn = post(conn, Routes.brand_path(conn, :increment_views), id: id)
      conn = post(conn, Routes.brand_path(conn, :increment_views), id: id)
      conn = post(conn, Routes.brand_path(conn, :increment_views), id: id)
      conn = post(conn, Routes.brand_path(conn, :increment_views), id: id)

      assert %{"profile_visits" => 5} = json_response(conn, 200)["data"]
    end
  end

  describe "index" do
    test "lists all brands", %{conn: conn, current_user: current_user} do
      conn = get(conn, Routes.brand_path(conn, :index))

      assert json_response(conn, 200)["data"] == [
               %{
                 "uuid" => current_user.uuid,
                 "id" => current_user.id,
                 "email" => current_user.email,
                 "ecommerce" => current_user.ecommerce,
                 "industries" => current_user.industries,
                 "location" => current_user.location,
                 "values" => current_user.values,
                 "name" => current_user.name,
                 "description" => current_user.description,
                 "picture" => current_user.picture,
                 "profile_visits" => current_user.profile_visits,
                 "web_link" => current_user.web_link
               }
             ]
    end
  end

  describe "create brand" do
    test "renders brand when data is valid", %{conn: conn} do
      conn = post(conn, Routes.brand_path(conn, :create), brand: @create_attrs)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.brand_path(conn, :show, id))

      assert %{
               "ecommerce" => true,
               "email" => "some email",
               "id" => id,
               # "uuid" => "7488a646-e31f-11e4-aace-600308960662",
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
      assert %{"id" => id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.brand_path(conn, :show, id))
      uuid = brand.uuid

      assert %{
               "ecommerce" => false,
               "email" => "some updated email",
               "id" => id,
               "uuid" => uuid,
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

  describe "sign in brand" do
    test "renders Brand when credentials are good", %{conn: conn, current_user: current_user} do
      conn =
        post(
          conn,
          Routes.brand_path(conn, :sign_in, %{
            email: current_user.email,
            password: @current_attrs.password
          })
        )

      assert json_response(conn, 200)["data"] == %{
               "brand" => %{
                 "uuid" => current_user.uuid,
                 "id" => current_user.id,
                 "ecommerce" => current_user.ecommerce,
                 "email" => current_user.email,
                 "industries" => current_user.industries,
                 "location" => current_user.location,
                 "name" => current_user.name,
                 "values" => current_user.values,
                 "description" => current_user.description,
                 "picture" => current_user.picture,
                 "profile_visits" => current_user.profile_visits,
                 "web_link" => current_user.web_link
               }
             }
    end

    test "renders errors when credentials are bad", %{conn: conn} do
      conn =
        post(
          conn,
          Routes.brand_path(conn, :sign_in, %{
            email: "doesn't f*cking exist",
            password: "bippittyboppitty"
          })
        )

      assert json_response(conn, 401)["errors"] == %{
               "detail" => "Wrong email or password"
             }
    end
  end

  defp create_brand(_) do
    brand = fixture(:brand)
    {:ok, brand: brand}
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
