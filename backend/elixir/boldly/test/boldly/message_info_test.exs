defmodule Boldly.MessageInfoTest do
  use Boldly.DataCase

  alias Boldly.Conversations.Conversation
  alias Boldly.ConversationInfo
  alias Boldly.BrandAccount
  alias Boldly.CreatorAccount
  alias Boldly.BrandAccount.Brand
  alias Boldly.CreatorAccount.Creator
  alias Boldly.Messages.Message
  alias Boldly.MessageInfo

  describe "messages" do
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

    def brand_fixture1(attrs \\ %{}) do
      {:ok, brand} =
        attrs
        |> Enum.into(@valid_brand_attrs1)
        |> BrandAccount.create_brand()
    end

    def creator_fixture1(attrs \\ %{}) do
      {:ok, creator} =
        attrs
        |> Enum.into(@valid_creator_attrs1)
        |> CreatorAccount.create_creator()
    end

    def brand_fixture2(attrs \\ %{}) do
      {:ok, brand} =
        attrs
        |> Enum.into(@valid_brand_attrs2)
        |> BrandAccount.create_brand()
    end

    def creator_fixture2(attrs \\ %{}) do
      {:ok, creator} =
        attrs
        |> Enum.into(@valid_creator_attrs2)
        |> CreatorAccount.create_creator()
    end

    def create_conv(creator_id, brand_id) do
      {:ok, conv} =
        ConversationInfo.create_conversation(%{creator_id: creator_id, brand_id: brand_id})
    end

    # Returns: {b1, b2, c1, c2}
    def accounts_fixture() do
      {:ok, b1} = brand_fixture1()
      {:ok, b2} = brand_fixture2()

      {:ok, c1} = creator_fixture1()
      {:ok, c2} = creator_fixture2()

      {b1, b2, c1, c2}
    end

    # Returns: {b1, b2, c1, c2, conv1, conv2, conv3, conv4}
    def convs_fixture() do
      {:ok, b1} = brand_fixture1()
      {:ok, b2} = brand_fixture2()

      {:ok, c1} = creator_fixture1()
      {:ok, c2} = creator_fixture2()

      {:ok, conv1} = create_conv(c1.id, b1.id)
      {:ok, conv2} = create_conv(c1.id, b2.id)
      {:ok, conv3} = create_conv(c2.id, b1.id)
      {:ok, conv4} = create_conv(c2.id, b2.id)

      {b1, b2, c1, c2, conv1, conv2, conv3, conv4}
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

    def messages_fixture({b1, b2, cr1, cr2, conv1, conv2, conv3, conv4}, max_mess \\ 500) do
      [n1] = Enum.take(StreamData.integer(5..max_mess), 1)
      [n2] = Enum.take(StreamData.integer(5..max_mess), 1)
      [n3] = Enum.take(StreamData.integer(5..max_mess), 1)
      [n4] = Enum.take(StreamData.integer(5..max_mess), 1)

      mess_gen = StreamData.string(:alphanumeric, min_length: 10, max_length: 1000)
      b_gen = StreamData.boolean()

      # Messages
      mess1 = Enum.take(mess_gen, n1)
      mess2 = Enum.take(mess_gen, n2)
      mess3 = Enum.take(mess_gen, n3)
      mess4 = Enum.take(mess_gen, n4)

      # Sent by
      sb1 = Enum.take(b_gen, n1)
      sb2 = Enum.take(b_gen, n2)
      sb3 = Enum.take(b_gen, n3)
      sb4 = Enum.take(b_gen, n4)

      # Dates
      d_now = DateTime.utc_now()

      d1 =
        Enum.map(1..n1, fn x ->
          DateTime.add(d_now, x * 10, :second)
        end)

      d2 =
        Enum.map(1..n2, fn x ->
          DateTime.add(d_now, x * 10, :second)
        end)

      d3 =
        Enum.map(1..n3, fn x ->
          DateTime.add(d_now, x * 10, :second)
        end)

      d4 =
        Enum.map(1..n4, fn x ->
          DateTime.add(d_now, x * 10, :second)
        end)

      co1 =
        Enum.map(1..n1, fn x ->
          create_mess(conv1.id, Enum.at(sb1, x), Enum.at(mess1, x), Enum.at(d1, x))
        end)

      co2 =
        Enum.map(1..n2, fn x ->
          create_mess(conv2.id, Enum.at(sb2, x), Enum.at(mess2, x), Enum.at(d2, x))
        end)

      co3 =
        Enum.map(1..n3, fn x ->
          create_mess(conv3.id, Enum.at(sb3, x), Enum.at(mess3, x), Enum.at(d3, x))
        end)

      co4 =
        Enum.map(1..n4, fn x ->
          create_mess(conv4.id, Enum.at(sb4, x), Enum.at(mess4, x), Enum.at(d4, x))
        end)

      {[n1, n2, n3, n4], [mess1, mess2, mess3, mess4], [sb1, sb2, sb3, sb4], [d1, d2, d3, d4],
       [co1, co2, co3, co4]}
    end

    test "list_messages/0 returns all messages" do
      {b1, b2, cr1, cr2, conv1, conv2, conv3, conv4} = convs_fixture()

      {[n1, n2, n3, n4], [mess1, mess2, mess3, mess4], [sb1, sb2, sb3, sb4], [d1, d2, d3, d4],
       [co1, co2, co3, co4]} = messages_fixture({b1, b2, cr1, cr2, conv1, conv2, conv3, conv4})

      db_messages = MessageInfo.list_messages()

      assert Enum.sort(db_messages) ==
               Enum.sort(List.flatten([co1, co2, co3, co4]))

      assert Enum.count(db_messages) == n1 + n2 + n3 + n4
    end

    test "get_messages!/1 returns all messages from the conversation" do
      {b1, b2, cr1, cr2, conv1, conv2, conv3, conv4} = convs_fixture()

      {[n1, n2, n3, n4], [mess1, mess2, mess3, mess4], [sb1, sb2, sb3, sb4], [d1, d2, d3, d4],
       [co1, co2, co3, co4]} = messages_fixture({b1, b2, cr1, cr2, conv1, conv2, conv3, conv4})

      m1 = MessageInfo.get_messages!(conv1.id)
      m2 = MessageInfo.get_messages!(conv2.id)
      m3 = MessageInfo.get_messages!(conv3.id)
      m4 = MessageInfo.get_messages!(conv4.id)

      assert Enum.sort(m1) == Enum.sort(co1)
      assert Enum.sort(m2) == Enum.sort(co2)
      assert Enum.sort(m3) == Enum.sort(co3)
      assert Enum.sort(m4) == Enum.sort(co4)

      assert Enum.all?(m1, fn x -> x.conversation_id == conv1.id end)
      assert Enum.all?(m2, fn x -> x.conversation_id == conv2.id end)
      assert Enum.all?(m3, fn x -> x.conversation_id == conv3.id end)
      assert Enum.all?(m4, fn x -> x.conversation_id == conv4.id end)

      assert Enum.count(m1) == n1
      assert Enum.count(m2) == n2
      assert Enum.count(m3) == n3
      assert Enum.count(m4) == n4
    end

    test "create_message/1 with valid data creates a conversation" do
      {b1, b2, cr1, cr2, conv1, conv2, conv3, conv4} = convs_fixture()

      [content] =
        Enum.take(StreamData.string(:alphanumeric, min_length: 100, max_length: 1000), 1)

      [sent_by_creator] = Enum.take(StreamData.boolean(), 1)
      date = DateTime.utc_now()

      [conversation_id] =
        Enum.take(StreamData.member_of([conv1.id, conv2.id, conv3.id, conv4.id]), 1)

      attrs = %{
        content: content,
        sent_by_creator: sent_by_creator,
        date: date,
        conversation_id: conversation_id
      }

      assert {:ok, %Message{} = mess} = MessageInfo.create_message(attrs)
      assert mess.content == content
      assert mess.sent_by_creator == sent_by_creator
      assert mess.conversation_id == conversation_id
    end
  end
end
