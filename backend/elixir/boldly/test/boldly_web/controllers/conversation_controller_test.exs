defmodule BoldlyWeb.ConversationControllerTest do
  use BoldlyWeb.ConnCase
  alias Plug.Test

  alias Boldly.Conversations.Conversation
  alias Boldly.ConversationInfo
  alias Boldly.BrandAccount
  alias Boldly.CreatorAccount
  alias Boldly.BrandAccount.Brand
  alias Boldly.CreatorAccount.Creator

  @valid_brand_attrs1 %{
    ecommerce: true,
    email: "some email",
    industries: "some industries",
    location: "some location",
    values: "some values",
    password: "some password",
    name: "some name"
  }

  @valid_creator_attrs1 %{
    birthday: ~D[2010-04-17],
    email: "some email",
    industry: "some industry",
    interests: "some interests",
    location: "some location",
    name: "some name",
    values: "some values",
    password: "some password"
  }

  @valid_brand_attrs2 %{
    ecommerce: true,
    email: "some email2",
    industries: "some industries2",
    location: "some location2",
    values: "some values2",
    password: "some password2",
    name: "some name2"
  }

  @valid_creator_attrs2 %{
    birthday: ~D[2010-04-17],
    email: "some email2",
    industry: "some industry2",
    interests: "some interests2",
    location: "some location2",
    name: "some name2",
    values: "some values2",
    password: "some password2"
  }

  @invalid_attrs %{
    creator_id: nil,
    brand_id: nil
  }

  def fixture(:brand1) do
    {:ok, brand} =
      %{}
      |> Enum.into(@valid_brand_attrs1)
      |> BrandAccount.create_brand()
  end

  def fixture(:creator1) do
    {:ok, creator} =
      %{}
      |> Enum.into(@valid_creator_attrs1)
      |> CreatorAccount.create_creator()
  end

  def fixture(:brand2) do
    {:ok, brand} =
      %{}
      |> Enum.into(@valid_brand_attrs2)
      |> BrandAccount.create_brand()
  end

  def fixture(:creator2) do
    {:ok, creator} =
      %{}
      |> Enum.into(@valid_creator_attrs2)
      |> CreatorAccount.create_creator()
  end

  def create_conv(creator_id, brand_id) do
    {:ok, conv} =
      ConversationInfo.create_conversation(%{creator_id: creator_id, brand_id: brand_id})
  end

  setup %{conn: conn} do
    {:ok, conn: conn, b1: b1, b2: b2, c1: c1, c2: c2} = setup_users(conn)

    {:ok,
     conn: put_req_header(conn, "accept", "application/json"), b1: b1, b2: b2, c1: c1, c2: c2}
  end

  describe "index" do
    test "list all conversations", %{conn: conn, b1: b1, b2: b2, c1: c1, c2: c2} do
      [c_id] = Enum.take(StreamData.member_of([c1.id, c2.id]),1)
      [b_id] = Enum.take(StreamData.member_of([b1.id, b2.id]),1)
      {:ok, conv} = create_conv(c_id, b_id)
      conn = get(conn, Routes.conversation_path(conn, :index))

      assert json_response(conn,200)["data"] == [
        %{
          "id" => conv.id,
          "creator_id" => conv.creator_id,
          "brand_id" => conv.brand_id
        }
      ]
    end
  end

  defp setup_users(conn) do
    {:ok, b1} = fixture(:brand1)
    {:ok, b2} = fixture(:brand2)
    {:ok, c1} = fixture(:creator1)
    {:ok, c2} = fixture(:creator2)

    {
      :ok,
      conn: Test.init_test_session(conn, current_user: %{}), b1: b1, b2: b2, c1: c1, c2: c2
    }
  end
end
