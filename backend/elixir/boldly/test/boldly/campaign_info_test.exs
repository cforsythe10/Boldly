defmodule Boldly.CampaignInfoTest do
  use Boldly.DataCase

  alias Boldly.CampaignInfo

  describe "campaigns" do
    alias Boldly.CampaignInfo.Campaign


    @valid_brand_attrs %{
      ecommerce: true,
      email: "some email",
      uuid: "7488a646-e31f-11e4-aace-600308960660",
      id: 1,
      industries: "some industries",
      location: "some location",
      values: "some values",
      password: "some password",
      name: "some name"
    }

    @valid_attrs %{
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
      uuid: "7488a646-e31f-11e4-aace-600308960662",
      values: "some values",
      launched_by: "7488a646-e31f-11e4-aace-600308960660",
      brand: %{
        ecommerce: true,
        email: "some email",
        uuid: "7488a646-e31f-11e4-aace-600308960660",
        id: 1,
        industries: "some industries",
        location: "some location",
        values: "some values",
        password: "some password",
        name: "some name"
      }
    }
    @update_attrs %{
      age_range: "some updated age_range",
      compensation: "some updated compensation",
      creator_responsibilities: "some updated creator_responsibilities",
      description: "some updated description",
      desired_engagement_rate: 43,
      end_date: ~D[2011-05-18],
      industry: "some updated industry",
      interests: "some updated interests",
      is_draft: false,
      location: "some updated location",
      name: "some updated name",
      perks: "some updated perks",
      photo_reference: "some updated photo_reference",
      specific_to_location: false,
      start_date: ~D[2011-05-18],
      uuid: "7488a646-e31f-11e4-aace-600308960668",
      values: "some updated values"
    }
    @invalid_attrs %{
      age_range: nil,
      compensation: nil,
      creator_responsibilities: nil,
      description: nil,
      desired_engagement_rate: nil,
      end_date: nil,
      industry: nil,
      interests: nil,
      is_draft: nil,
      location: nil,
      name: nil,
      perks: nil,
      photo_reference: nil,
      specific_to_location: nil,
      start_date: nil,
      uuid: nil,
      values: nil
    }

    def campaign_fixture(attrs \\ %{}) do
      {:ok, brand} = attrs |> Enum.into(@valid_brand_attrs) |> Boldly.BrandAccount.create_brand()

      use_attrs = %{
        age_range: @valid_attrs.age_range,
        compensation: @valid_attrs.compensation,
        creator_responsibilities: @valid_attrs.creator_responsibilities,
        description: @valid_attrs.description,
        desired_engagement_rate: @valid_attrs.desired_engagement_rate,
        end_date: @valid_attrs.end_date,
        industry: @valid_attrs.industry,
        interests: @valid_attrs.interests,
        is_draft: @valid_attrs.is_draft,
        location: @valid_attrs.location,
        name: @valid_attrs.name,
        perks: @valid_attrs.perks,
        photo_reference: @valid_attrs.photo_reference,
        specific_to_location: @valid_attrs.specific_to_location,
        start_date: @valid_attrs.start_date,
        uuid: @valid_attrs.uuid,
        values: @valid_attrs.values,
        launched_by: brand.uuid
      }
      {:ok, campaign} =
        attrs
        |> Enum.into(use_attrs)
        |> CampaignInfo.create_campaign()

      campaign
    end

    test "list_campaigns/0 returns all campaigns" do
      campaign = campaign_fixture()
      assert CampaignInfo.list_campaigns() == [campaign]
    end

    test "get_campaign!/1 returns the campaign with given id" do
      campaign = campaign_fixture()
      assert CampaignInfo.get_campaign!(campaign.id) == campaign
    end

    test "create_campaign/1 with valid data creates a campaign" do
      {:ok, brand} = %{} |> Enum.into(@valid_brand_attrs) |> Boldly.BrandAccount.create_brand()
      assert {:ok, %Campaign{} = campaign} = CampaignInfo.create_campaign(@valid_attrs)
      assert campaign.age_range == "some age_range"
      assert campaign.compensation == "some compensation"
      assert campaign.creator_responsibilities == "some creator_responsibilities"
      assert campaign.description == "some description"
      assert campaign.desired_engagement_rate == 42
      assert campaign.end_date == ~D[2010-04-17]
      assert campaign.industry == "some industry"
      assert campaign.interests == "some interests"
      assert campaign.is_draft == true
      assert campaign.location == "some location"
      assert campaign.name == "some name"
      assert campaign.perks == "some perks"
      assert campaign.photo_reference == "some photo_reference"
      assert campaign.specific_to_location == true
      assert campaign.start_date == ~D[2010-04-17]
      assert campaign.uuid == "7488a646-e31f-11e4-aace-600308960662"
      assert campaign.values == "some values"
      assert campaign.launched_by == brand.uuid
    end

    test "create_campaign/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = CampaignInfo.create_campaign(@invalid_attrs)
    end

    test "update_campaign/2 with valid data updates the campaign" do
      campaign = campaign_fixture()
      assert {:ok, %Campaign{} = campaign} = CampaignInfo.update_campaign(campaign, @update_attrs)
      assert campaign.age_range == "some updated age_range"
      assert campaign.compensation == "some updated compensation"
      assert campaign.creator_responsibilities == "some updated creator_responsibilities"
      assert campaign.description == "some updated description"
      assert campaign.desired_engagement_rate == 43
      assert campaign.end_date == ~D[2011-05-18]
      assert campaign.industry == "some updated industry"
      assert campaign.interests == "some updated interests"
      assert campaign.is_draft == false
      assert campaign.location == "some updated location"
      assert campaign.name == "some updated name"
      assert campaign.perks == "some updated perks"
      assert campaign.photo_reference == "some updated photo_reference"
      assert campaign.specific_to_location == false
      assert campaign.start_date == ~D[2011-05-18]
      assert campaign.uuid == "7488a646-e31f-11e4-aace-600308960668"
      assert campaign.values == "some updated values"
    end

    test "update_campaign/2 with invalid data returns error changeset" do
      campaign = campaign_fixture()
      assert {:error, %Ecto.Changeset{}} = CampaignInfo.update_campaign(campaign, @invalid_attrs)
      assert campaign == CampaignInfo.get_campaign!(campaign.id)
    end

    test "delete_campaign/1 deletes the campaign" do
      campaign = campaign_fixture()
      assert {:ok, %Campaign{}} = CampaignInfo.delete_campaign(campaign)
      assert_raise Ecto.NoResultsError, fn -> CampaignInfo.get_campaign!(campaign.id) end
    end

    test "change_campaign/1 returns a campaign changeset" do
      campaign = campaign_fixture()
      assert %Ecto.Changeset{} = CampaignInfo.change_campaign(campaign)
    end
  end
end
