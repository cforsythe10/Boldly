defmodule Boldly.SignedContractTest do
  use Boldly.DataCase

  alias Boldly.SignedContract

  describe "contracts" do
    alias Boldly.SignedContract.Contract

    @valid_brand_attrs %{
      ecommerce: true,
      email: "some email",
      industries: "some industries",
      location: "some location",
      values: "some values",
      password: "some password",
      name: "some name"
    }
    @valid_creator_attrs %{
      birthday: ~D[2010-04-17],
      email: "some email",
      industry: "some industry",
      interests: "some interests",
      location: "some location",
      name: "some name",
      values: "some values",
      password: "some password"
    }

    @valid_camapign_attrs %{
      age_range: "some age_range",
      compensation: "some compensation",
      creator_responsibilities: "some creator_responsibilities",
      description: "some description",
      desired_engagement_rate: 42,
      end_date: ~D[2010-04-17],
      industry: "some industry",
      interests: "some interests",
      is_draft: true,
      location: "some location",
      name: "some name",
      perks: "some perks",
      photo_reference: "some photo_reference",
      specific_to_location: true,
      start_date: ~D[2010-04-17],
      values: "some values"
    }

    @valid_attrs %{file_path: "some file_path"}
    @update_attrs %{
      file_path: "some updated file_path"
    }
    @invalid_attrs %{file_path: nil}

    def pre_contract_fixture(attrs \\ %{}) do
      {:ok, brand} = attrs |> Enum.into(@valid_brand_attrs) |> Boldly.BrandAccount.create_brand()

      use_attrs = %{
        age_range: @valid_camapign_attrs.age_range,
        compensation: @valid_camapign_attrs.compensation,
        creator_responsibilities: @valid_camapign_attrs.creator_responsibilities,
        description: @valid_camapign_attrs.description,
        desired_engagement_rate: @valid_camapign_attrs.desired_engagement_rate,
        end_date: @valid_camapign_attrs.end_date,
        industry: @valid_camapign_attrs.industry,
        interests: @valid_camapign_attrs.interests,
        is_draft: @valid_camapign_attrs.is_draft,
        location: @valid_camapign_attrs.location,
        name: @valid_camapign_attrs.name,
        perks: @valid_camapign_attrs.perks,
        photo_reference: @valid_camapign_attrs.photo_reference,
        specific_to_location: @valid_camapign_attrs.specific_to_location,
        start_date: @valid_camapign_attrs.start_date,
        values: @valid_camapign_attrs.values,
        launched_by: brand.uuid
      }

      {:ok, campaign} =
        attrs
        |> Enum.into(use_attrs)
        |> Boldly.CampaignInfo.create_campaign()

      {:ok, creator} =
        attrs
        |> Enum.into(@valid_creator_attrs)
        |> Boldly.CreatorAccount.create_creator()

      part_attrs = %{
        is_active: true,
        is_pending: false,
        creator_uuid: creator.uuid,
        campaign_uuid: campaign.uuid
      }

      {:ok, participant} =
        attrs
        |> Enum.into(part_attrs)
        |> Boldly.CampaignPart.create_participant()

      contract_attrs = %{
        brand_uuid: brand.uuid,
        campaign_uuid: campaign.uuid,
        creator_uuid: creator.uuid,
        file_path: "some file_path"
      }
    end

    def contract_fixture(attrs \\ %{}) do
      contract_attrs = pre_contract_fixture()

      {:ok, contract} =
        attrs
        |> Enum.into(contract_attrs)
        |> SignedContract.create_contract()

      contract
    end

    test "list_contracts/0 returns all contracts" do
      contract = contract_fixture()
      assert SignedContract.list_contracts() == [contract]
    end

    test "get_contract!/1 returns the contract with given id" do
      contract = contract_fixture()
      assert SignedContract.get_contract!(contract.id) == contract
    end

    test "create_contract/1 with valid data creates a contract" do
      contr_attrs = pre_contract_fixture()
      assert {:ok, %Contract{} = contract} = SignedContract.create_contract(contr_attrs)
      assert contract.file_path == "some file_path"
    end

    test "create_contract/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = SignedContract.create_contract(@invalid_attrs)
    end

    test "update_contract/2 with valid data updates the contract" do
      contract = contract_fixture()

      contr_attrs = %{
        brand_uuid: contract.brand_uuid, campaing_uuid: contract.campaign_uuid, creator_uuid: contract.creator_uuid, file_path: "some other file_path", id: contract.id
      }

      assert {:ok, %Contract{} = contract1} =
               SignedContract.update_contract(contract, contr_attrs)

      assert contract1.file_path == "some other file_path"
      assert contract1.id == contract.id
    end

    test "update_contract/2 with invalid data returns error changeset" do
      contract = contract_fixture()

      assert {:error, %Ecto.Changeset{}} =
               SignedContract.update_contract(contract, @invalid_attrs)

      assert contract == SignedContract.get_contract!(contract.id)
    end

    test "delete_contract/1 deletes the contract" do
      contract = contract_fixture()
      assert {:ok, %Contract{}} = SignedContract.delete_contract(contract)
      assert_raise Ecto.NoResultsError, fn -> SignedContract.get_contract!(contract.id) end
    end

    test "change_contract/1 returns a contract changeset" do
      contract = contract_fixture()
      assert %Ecto.Changeset{} = SignedContract.change_contract(contract)
    end
  end
end
