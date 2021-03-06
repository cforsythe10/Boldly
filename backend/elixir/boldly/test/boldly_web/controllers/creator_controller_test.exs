defmodule BoldlyWeb.CreatorControllerTest do
  use BoldlyWeb.ConnCase

  alias Boldly.CreatorAccount
  alias Boldly.CreatorAccount.Creator
  alias Plug.Test

  @create_attrs %{
    birthday: ~D[2010-04-17],
    email: "some email",
    industry: "some industry",
    interests: "some interests",
    location: "some location",
    name: "some name",
    values: "some values",
    password: "some password",
    description: "some descriptive text",
    web_link: "www.google.com"
  }
  @update_attrs %{
    birthday: ~D[2011-05-18],
    email: "some updated email",
    industry: "some updated industry",
    interests: "some updated interests",
    location: "some updated location",
    name: "some updated name",
    values: "some updated values",
    password: "some other password",
    description: "some updated descriptive text",
    web_link: "www.bing.com"
  }
  @invalid_attrs %{
    birthday: nil,
    email: nil,
    uuid: nil,
    id: nil,
    industry: nil,
    interests: nil,
    location: nil,
    name: nil,
    values: nil,
    password: nil,
    description: nil,
    web_link: nil
  }

  @current_user_attrs %{
    birthday: ~D[2011-05-18],
    email: "some current email",
    industry: "some industry",
    interests: "some interests",
    location: "some location",
    name: "some name",
    values: "some updated values",
    password: "some current password"
  }

  @increment_test_attr %{
    birthday: ~D[2010-04-17],
    email: "some email2",
    industry: "some industry",
    interests: "some interests",
    location: "some location",
    name: "some name",
    values: "some values",
    password: "some password",
    description: "some descriptive text",
    web_link: "www.google.com"
  }

  def fixture(:creator) do
    {:ok, creator} = CreatorAccount.create_creator(@create_attrs)
    creator
  end

  def fixture(:current_user) do
    {:ok, current_creator} = CreatorAccount.create_creator(@current_user_attrs)
    current_creator
  end

  setup %{conn: conn} do
    {:ok, conn: conn, current_user: current_user} = setup_current_user(conn)
    {:ok, conn: put_req_header(conn, "accept", "application/json"), current_user: current_user}
  end

  describe "incrementing" do
    test "increments once", %{conn: conn, current_user: current_user} do
      conn = post(conn, Routes.creator_path(conn, :create), creator: @create_attrs)

      assert %{"id" => id, "uuid" => uuid, "profile_visits" => 0} =
               json_response(conn, 201)["data"]

      conn = post(conn, Routes.creator_path(conn, :increment_views), id: id)

      assert %{"profile_visits" => 1} = json_response(conn, 200)["data"]
    end

    test "increments 10 times", %{conn: conn, current_user: current_user} do
      conn = post(conn, Routes.creator_path(conn, :create), creator: @create_attrs)

      assert %{"id" => id, "uuid" => uuid, "profile_visits" => 0} =
               json_response(conn, 201)["data"]

      conn = post(conn, Routes.creator_path(conn, :increment_views), id: id)
      conn = post(conn, Routes.creator_path(conn, :increment_views), id: id)
      conn = post(conn, Routes.creator_path(conn, :increment_views), id: id)
      conn = post(conn, Routes.creator_path(conn, :increment_views), id: id)
      conn = post(conn, Routes.creator_path(conn, :increment_views), id: id)

      assert %{"profile_visits" => 5} = json_response(conn, 200)["data"]
    end
  end

  describe "index" do
    test "lists all creators", %{conn: conn, current_user: current_user} do
      conn = get(conn, Routes.creator_path(conn, :index))

      assert json_response(conn, 200)["data"] == [
               %{
                 "uuid" => current_user.uuid,
                 "birthday" => Date.to_string(current_user.birthday),
                 "email" => current_user.email,
                 "industry" => current_user.industry,
                 "interests" => current_user.interests,
                 "location" => current_user.location,
                 "name" => current_user.name,
                 "values" => current_user.values,
                 "id" => current_user.id,
                 "description" => current_user.description,
                 "web_link" => current_user.web_link,
                 "picture" => current_user.picture,
                 "profile_visits" => current_user.profile_visits
               }
             ]
    end
  end

  describe "create creator" do
    test "renders creator when data is valid", %{conn: conn} do
      conn = post(conn, Routes.creator_path(conn, :create), creator: @create_attrs)
      assert %{"id" => id, "uuid" => uuid} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.creator_path(conn, :show, id))

      assert %{
               "uuid" => uuid,
               "id" => id,
               "birthday" => "2010-04-17",
               "email" => "some email",
               "industry" => "some industry",
               "interests" => "some interests",
               "location" => "some location",
               "name" => "some name",
               "values" => "some values",
               "web_link" => "www.google.com",
               "description" => "some descriptive text",
               "picture" => nil,
               "profile_visits" => 0
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
      uuid = creator.uuid

      assert %{
               "uuid" => uuid,
               "id" => id,
               "birthday" => "2011-05-18",
               "email" => "some updated email",
               "industry" => "some updated industry",
               "interests" => "some updated interests",
               "location" => "some updated location",
               "name" => "some updated name",
               "values" => "some updated values"
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

  describe "sign in creator" do
    test "renders Creator when credentials are good", %{conn: conn, current_user: current_user} do
      conn =
        post(
          conn,
          Routes.creator_path(conn, :sign_in, %{
            email: current_user.email,
            password: @current_user_attrs.password
          })
        )

      assert json_response(conn, 200)["data"] == %{
               "creator" => %{
                 "uuid" => current_user.uuid,
                 "id" => current_user.id,
                 "birthday" => Date.to_string(current_user.birthday),
                 "email" => current_user.email,
                 "industry" => current_user.industry,
                 "interests" => current_user.interests,
                 "location" => current_user.location,
                 "name" => current_user.name,
                 "values" => current_user.values,
                 "description" => current_user.description,
                 "web_link" => current_user.web_link,
                 "picture" => current_user.picture,
                 "profile_visits" => current_user.profile_visits
               }
             }
    end

    test "renders errors when credentials are bad", %{conn: conn} do
      conn =
        post(
          conn,
          Routes.creator_path(conn, :sign_in, %{
            email: "doesn't f*cking exist",
            password: "bippittyboppitty"
          })
        )

      assert json_response(conn, 401)["errors"] == %{
               "detail" => "Wrong email or password"
             }
    end
  end

  defp create_creator(_) do
    creator = fixture(:creator)
    {:ok, creator: creator}
  end

  defp setup_current_user(conn) do
    current_user = fixture(:current_user)

    {:ok,
     conn: Test.init_test_session(conn, current_user_id: current_user.id),
     current_user: current_user}
  end
end
