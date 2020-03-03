defmodule Boldly.CreatorAccountTest do
  use Boldly.DataCase

  alias Boldly.CreatorAccount

  describe "creators" do
    alias Boldly.CreatorAccount.Creator

    @valid_attrs %{
      birthday: ~D[2010-04-17],
      email: "some email",
      id: "7488a646-e31f-11e4-aace-600308960662",
      industry: "some industry",
      interests: "some interests",
      location: "some location",
      name: "some name",
      values: "some values",
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
      values: "some updated values",
      password: "some updated password"
    }
    @invalid_attrs %{
      birthday: nil,
      email: nil,
      id: nil,
      industry: nil,
      interests: nil,
      location: nil,
      name: nil,
      values: nil,
      password: nil
    }

    def creator_fixture(attrs \\ %{}) do
      {:ok, creator} =
        attrs
        |> Enum.into(@valid_attrs)
        |> CreatorAccount.create_creator()

      creator1 = %Boldly.CreatorAccount.Creator{
        __meta__: creator.__meta__,
        updated_at: creator.updated_at,
        inserted_at: creator.inserted_at,
        birthday: creator.birthday,
        email: creator.email,
        id: creator.id,
        industry: creator.industry,
        interests: creator.interests,
        location: creator.location,
        name: creator.name,
        values: creator.values,
        password: nil,
        password_hash: creator.password_hash
      }
    end

    test "list_creators/0 returns all creators" do
      creator = creator_fixture()
      assert CreatorAccount.list_creators() == [creator]
    end

    test "get_creator!/1 returns the creator with given id" do
      creator = creator_fixture()
      assert CreatorAccount.get_creator!(creator.id) == creator
    end

    test "create_creator/1 with valid data creates a creator" do
      assert {:ok, %Creator{} = creator} = CreatorAccount.create_creator(@valid_attrs)
      assert creator.birthday == ~D[2010-04-17]
      assert creator.email == "some email"
      assert creator.id == "7488a646-e31f-11e4-aace-600308960662"
      assert creator.industry == "some industry"
      assert creator.interests == "some interests"
      assert creator.location == "some location"
      assert creator.name == "some name"
      assert creator.values == "some values"
      assert Bcrypt.verify_pass("some password", creator.password_hash)
    end

    test "create_creator/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = CreatorAccount.create_creator(@invalid_attrs)
    end

    test "update_creator/2 with valid data updates the creator" do
      creator = creator_fixture()
      assert {:ok, %Creator{} = creator} = CreatorAccount.update_creator(creator, @update_attrs)
      assert creator.birthday == ~D[2011-05-18]
      assert creator.email == "some updated email"
      assert creator.id == "7488a646-e31f-11e4-aace-600308960668"
      assert creator.industry == "some updated industry"
      assert creator.interests == "some updated interests"
      assert creator.location == "some updated location"
      assert creator.name == "some updated name"
      assert creator.values == "some updated values"
    end

    test "update_creator/2 with invalid data returns error changeset" do
      creator = creator_fixture()
      assert {:error, %Ecto.Changeset{}} = CreatorAccount.update_creator(creator, @invalid_attrs)
      assert creator == CreatorAccount.get_creator!(creator.id)
    end

    test "delete_creator/1 deletes the creator" do
      creator = creator_fixture()
      assert {:ok, %Creator{}} = CreatorAccount.delete_creator(creator)
      assert_raise Ecto.NoResultsError, fn -> CreatorAccount.get_creator!(creator.id) end
    end

    test "change_creator/1 returns a creator changeset" do
      creator = creator_fixture()
      assert %Ecto.Changeset{} = CreatorAccount.change_creator(creator)
    end

    test "authenticate_user/2 authenticates the user" do
      creator = creator_fixture()
      assert {:error, "Wrong email or password"} = CreatorAccount.authenticate_user("wrong email", "")
      assert {:ok, authenticated_user} = CreatorAccount.authenticate_user(creator.email, @valid_attrs.password)
      assert creator == authenticated_user
    end
  end
end
