defmodule Boldly.ConversationInfoTest do
  use Boldly.DataCase

  alias Boldly.Conversations.Conversation
  alias Boldly.ConversationInfo
  alias Boldly.BrandAccount
  alias Boldly.CreatorAccount
  alias Boldly.BrandAccount.Brand
  alias Boldly.CreatorAccount.Creator

  describe "conversations" do
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

    def accounts_fixture() do
      {:ok, b1} = brand_fixture1()
      {:ok, b2} = brand_fixture2()

      {:ok, c1} = creator_fixture1()
      {:ok, c2} = creator_fixture2()

      {b1, b2, c1, c2}
    end

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

    test "list_conversations/0 returns all conversations" do
      {_, _, _, _, conv1, conv2, conv3, conv4} = convs_fixture()

      assert Enum.sort(ConversationInfo.list_conversations()) ==
               Enum.sort([conv1, conv2, conv3, conv4])
    end

    # get_conversation!(creator_id, brand_id)
    test "get_conversation!/2 returns conversation given creator_id and brand_id" do
      {b1, b2, c1, c2, conv1, conv2, conv3, conv4} = convs_fixture()

      assert ConversationInfo.get_conversation!(c1.id, b1.id) == conv1
      assert ConversationInfo.get_conversation!(c1.id, b2.id) == conv2
      assert ConversationInfo.get_conversation!(c2.id, b1.id) == conv3
      assert ConversationInfo.get_conversation!(c2.id, b2.id) == conv4
    end

    test "create_conversation/1 with valid data creates conversation" do
      {b1, b2, c1, c2} = accounts_fixture()

      assert {:ok, %Conversation{} = conv} =
               ConversationInfo.create_conversation(%{brand_id: b1.id, creator_id: c1.id})

      assert conv.creator_id == c1.id
      assert conv.brand_id == b1.id
    end

    test "create_conversation/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = ConversationInfo.create_conversation(@invalid_attrs)
    end

    test "create_conversation/1 with invalid creator_id returns error changeset" do
      {b1, b2, c1, c2} = accounts_fixture()
      creators = CreatorAccount.list_creators()

      for c <- creators do
        CreatorAccount.delete_creator(c)
      end

      assert {:error, %Ecto.Changeset{}} =
               ConversationInfo.create_conversation(%{creator_id: c1.id, brand_id: b1.id})

      assert {:error, %Ecto.Changeset{}} =
               ConversationInfo.create_conversation(%{creator_id: c1.id, brand_id: b2.id})

      assert {:error, %Ecto.Changeset{}} =
               ConversationInfo.create_conversation(%{creator_id: c2.id, brand_id: b1.id})

      assert {:error, %Ecto.Changeset{}} =
               ConversationInfo.create_conversation(%{creator_id: c2.id, brand_id: b2.id})
    end

    test "create_conversation/1 with invalid brand_id return error changeset" do
      {b1, b2, c1, c2} = accounts_fixture()
      brands = BrandAccount.list_brands()

      for b <- brands do
        BrandAccount.delete_brand(b)
      end

      assert {:error, %Ecto.Changeset{}} =
               ConversationInfo.create_conversation(%{creator_id: c1.id, brand_id: b1.id})

      assert {:error, %Ecto.Changeset{}} =
               ConversationInfo.create_conversation(%{creator_id: c1.id, brand_id: b2.id})

      assert {:error, %Ecto.Changeset{}} =
               ConversationInfo.create_conversation(%{creator_id: c2.id, brand_id: b1.id})

      assert {:error, %Ecto.Changeset{}} =
               ConversationInfo.create_conversation(%{creator_id: c2.id, brand_id: b2.id})
    end
  end
end
