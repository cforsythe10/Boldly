defmodule BoldlyWeb.MessageControllerTest do
  use BoldlyWeb.ConnCase
  alias Plug.Test

  alias Boldly.Conversations.Conversation
  alias Boldly.ConversationInfo
  alias Boldly.BrandAccount
  alias Boldly.CreatorAccount
  alias Boldly.BrandAccount.Brand
  alias Boldly.CreatorAccount.Creator
  alias Boldly.Messages.Message
  alias Boldly.MessageInfo

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

  def create_mess(conv_id, sent_by_creator, content, date \\ DateTime.utc_now()) do
    attrs = %{
      conversation_id: conv_id,
      date: date,
      sent_by_creator: sent_by_creator,
      content: content
    }

    {:ok, mess} = MessageInfo.create_message(attrs)
    mess
  end

  def fill_conv_with_messages(conv_id, max_messages \\ 500) do
    [n] = Enum.take(StreamData.integer(5..max_messages), 1)
    mess_gen = StreamData.string(:alphanumeric, min_length: 10, max_length: 1000)
    b_gen = StreamData.boolean()

    mess = Enum.take(mess_gen, n)
    sb = Enum.take(b_gen, n)

    d_now = DateTime.utc_now()

    d =
      Enum.map(1..n, fn x ->
        DateTime.add(d_now, x * 10, :second)
      end)

    messages =
      Enum.map(1..n, fn x ->
        create_mess(conv_id, Enum.at(sb, x), Enum.at(mess, x), Enum.at(d, x))
      end)

    {n, mess, sb, d, messages}
  end

  setup %{conn: conn} do
    {:ok,
     conn: conn,
     b1: b1,
     b2: b2,
     c1: c1,
     c2: c2,
     conv1: conv1,
     conv2: conv2,
     conv3: conv3,
     conv4: conv4} = setup_conversations(conn)

    {:ok,
     conn: put_req_header(conn, "accept", "application/json"),
     b1: b1,
     b2: b2,
     c1: c1,
     c2: c2,
     conv1: conv1,
     conv2: conv2,
     conv3: conv3,
     conv4: conv4}
  end

  describe "index" do
    test "list all messages", %{
      conn: conn,
      b1: b1,
      b2: b2,
      c1: c1,
      c2: c2,
      conv1: conv1,
      conv2: conv2,
      conv3: conv3,
      conv4: conv4
    } do
      {n1, mess1, sb1, d1, messages1} = fill_conv_with_messages(conv1.id, 1000)
      {n2, mess2, sb2, d2, messages2} = fill_conv_with_messages(conv2.id)
      {n3, mess3, sb3, d3, messages3} = fill_conv_with_messages(conv3.id)
      {n4, mess4, sb4, d4, messages4} = fill_conv_with_messages(conv4.id)

      conn = get(conn, Routes.message_path(conn, :index))
      assert Enum.count(json_response(conn, 200)["data"]) == n1 + n2 + n3 + n4
    end
  end

  describe "create message" do
    test "renders message when data is valid", %{
      conn: conn,
      b1: b1,
      b2: b2,
      c1: c1,
      c2: c2,
      conv1: conv1,
      conv2: conv2,
      conv3: conv3,
      conv4: conv4
    } do
      [conv_id] = Enum.take(StreamData.member_of([conv1.id, conv2.id, conv3.id, conv4.id]), 1)

      [content] =
        Enum.take(StreamData.string(:alphanumeric, min_length: 10, max_length: 10000), 1)

      date = DateTime.truncate(DateTime.utc_now(), :second)
      [sent_by_creator] = Enum.take(StreamData.boolean(), 1)

      conn =
        post(
          conn,
          Routes.message_path(conn, :create,
            message: %{
              conversation_id: conv_id,
              content: content,
              sent_by_creator: sent_by_creator
            }
          )
        )

      assert %{
               "id" => id,
               "date" => date
             } = json_response(conn, 201)["data"]

      conn = get(conn, Routes.message_path(conn, :show, id))

      assert json_response(conn, 200)["data"] == %{
               "id" => id,
               "conversation_id" => conv_id,
               "content" => content,
               "date" => date,
               "sent_by_creator" => sent_by_creator
             }
    end
  end

  defp setup_conversations(conn) do
    {:ok, b1} = fixture(:brand1)
    {:ok, b2} = fixture(:brand2)
    {:ok, c1} = fixture(:creator1)
    {:ok, c2} = fixture(:creator2)

    {:ok, conv1} = create_conv(c1.id, b1.id)
    {:ok, conv2} = create_conv(c1.id, b2.id)
    {:ok, conv3} = create_conv(c2.id, b1.id)
    {:ok, conv4} = create_conv(c2.id, b2.id)

    {:ok,
     conn: Test.init_test_session(conn, current_user: %{}),
     b1: b1,
     b2: b2,
     c1: c1,
     c2: c2,
     conv1: conv1,
     conv2: conv2,
     conv3: conv3,
     conv4: conv4}
  end
end
