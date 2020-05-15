defmodule Boldly.InterestInfoTest do
  use Boldly.DataCase

  alias Boldly.InterestInfo

  describe "interests" do
    alias Boldly.InterestInfo.Interest

    @valid_attrs %{categories: "some categories", interest: "some interest"}
    @update_attrs %{categories: "some updated categories", interest: "some updated interest"}
    @invalid_attrs %{categories: nil, interest: nil}

    def interest_fixture(attrs \\ %{}) do
      {:ok, interest} =
        attrs
        |> Enum.into(@valid_attrs)
        |> InterestInfo.create_interest()

      interest
    end

    test "list_interests/0 returns all interests" do
      interest = interest_fixture()
      assert Enum.all?(InterestInfo.list_interests(), fn interest ->
        Map.has_key?(interest, :interest) and Map.has_key?(interest, :categories)
      end)
    end

    test "get_interest!/1 returns the interest with given id" do
      interest = interest_fixture()
      assert InterestInfo.get_interest!(interest.id) == interest
    end

    test "create_interest/1 with valid data creates a interest" do
      assert {:ok, %Interest{} = interest} = InterestInfo.create_interest(@valid_attrs)
      assert interest.categories == "some categories"
      assert interest.interest == "some interest"
    end

    test "create_interest/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = InterestInfo.create_interest(@invalid_attrs)
    end

    test "update_interest/2 with valid data updates the interest" do
      interest = interest_fixture()
      assert {:ok, %Interest{} = interest} = InterestInfo.update_interest(interest, @update_attrs)
      assert interest.categories == "some updated categories"
      assert interest.interest == "some updated interest"
    end

    test "update_interest/2 with invalid data returns error changeset" do
      interest = interest_fixture()
      assert {:error, %Ecto.Changeset{}} = InterestInfo.update_interest(interest, @invalid_attrs)
      assert interest == InterestInfo.get_interest!(interest.id)
    end

    test "delete_interest/1 deletes the interest" do
      interest = interest_fixture()
      assert {:ok, %Interest{}} = InterestInfo.delete_interest(interest)
      assert_raise Ecto.NoResultsError, fn -> InterestInfo.get_interest!(interest.id) end
    end

    test "change_interest/1 returns a interest changeset" do
      interest = interest_fixture()
      assert %Ecto.Changeset{} = InterestInfo.change_interest(interest)
    end
  end
end
