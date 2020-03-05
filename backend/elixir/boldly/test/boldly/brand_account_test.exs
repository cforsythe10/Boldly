defmodule Boldly.BrandAccountTest do
  use Boldly.DataCase

  alias Boldly.BrandAccount

  describe "brands" do
    alias Boldly.BrandAccount.Brand

    @valid_attrs %{
      ecommerce: true,
      email: "some email",
      industries: "some industries",
      location: "some location",
      values: "some values",
      password: "some password",
      name: "some name",
      # uuid: "7488a646-e31f-11e4-aace-600308960662"
    }
    @update_attrs %{
      ecommerce: false,
      email: "some updated email",
      # uuid: "7488a646-e31f-11e4-aace-600308960668",
      industries: "some updated industries",
      location: "some updated location",
      values: "some updated values",
      password: "some updated password",
      name: "some updated name",
      id: 1
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

    def brand_fixture(attrs \\ %{}) do
      {:ok, brand} =
        attrs
        |> Enum.into(@valid_attrs)
        |> BrandAccount.create_brand()

      %Boldly.BrandAccount.Brand{
        __meta__: brand.__meta__,
        inserted_at: brand.inserted_at,
        updated_at: brand.updated_at,
        ecommerce: brand.ecommerce,
        email: brand.email,
        uuid: brand.uuid,
        industries: brand.industries,
        location: brand.location,
        values: brand.values,
        password: nil,
        password_hash: brand.password_hash,
        name: brand.name,
        id: brand.id
      }
    end

    test "list_brands/0 returns all brands" do
      brand = brand_fixture()
      assert BrandAccount.list_brands() == [brand]
    end

    test "get_brand!/1 returns the brand with given id" do
      brand = brand_fixture()
      assert BrandAccount.get_brand!(brand.id) == brand
    end

    test "create_brand/1 with valid data creates a brand" do
      assert {:ok, %Brand{} = brand} = BrandAccount.create_brand(@valid_attrs)
      assert brand.ecommerce == true
      assert brand.email == "some email"
      assert brand.industries == "some industries"
      assert brand.location == "some location"
      assert brand.values == "some values"
      assert brand.name == "some name"
      assert Bcrypt.verify_pass("some password", brand.password_hash)
    end

    test "create_brand/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = BrandAccount.create_brand(@invalid_attrs)
    end

    test "update_brand/2 with valid data updates the brand" do
      brand1 = brand_fixture()
      assert {:ok, %Brand{} = brand} = BrandAccount.update_brand(brand1, @update_attrs)
      assert brand.ecommerce == false
      assert brand.email == "some updated email"
      assert brand.uuid == brand1.uuid
      assert brand.industries == "some updated industries"
      assert brand.location == "some updated location"
      assert brand.values == "some updated values"
      assert brand.name == "some updated name"
      assert Bcrypt.verify_pass("some updated password", brand.password_hash)
    end

    test "update_brand/2 with invalid data returns error changeset" do
      brand = brand_fixture()
      assert {:error, %Ecto.Changeset{}} = BrandAccount.update_brand(brand, @invalid_attrs)
      assert brand == BrandAccount.get_brand!(brand.id)
    end

    test "delete_brand/1 deletes the brand" do
      brand = brand_fixture()
      assert {:ok, %Brand{}} = BrandAccount.delete_brand(brand)
      assert_raise Ecto.NoResultsError, fn -> BrandAccount.get_brand!(brand.id) end
    end

    test "change_brand/1 returns a brand changeset" do
      brand = brand_fixture()
      assert %Ecto.Changeset{} = BrandAccount.change_brand(brand)
    end

    test "authenticate_user/2 authenticates the user" do
      brand = brand_fixture()

      assert {:error, "Wrong email or password"} =
               BrandAccount.authenticate_user("wrong email", "")

      assert {:ok, authenticated_user} =
               BrandAccount.authenticate_user(brand.email, @valid_attrs.password)

      assert brand == authenticated_user
    end
  end
end
