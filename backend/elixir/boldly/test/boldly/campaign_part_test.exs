defmodule Boldly.CampaignPartTest do
  use Boldly.DataCase

  alias Boldly.CampaignPart

  describe "participants" do
    alias Boldly.CampaignPart.Participant

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
      uuid: "7488a646-e31f-11e4-aace-600308960662",
      values: "some values",
      launched_by: "7488a646-e31f-11e4-aace-600308960660"
    }

    @valid_attrs %{is_active: true, is_pending: true}
    @update_attrs %{is_active: false, is_pending: false}
    @invalid_attrs %{is_active: nil, is_pending: nil}

    def participant_fixture(attrs \\ %{}) do
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
        uuid: @valid_camapign_attrs.uuid,
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
        |> CampaignPart.create_participant()

      participant
    end

    test "list_participants/0 returns all participants" do
      participant = participant_fixture()
      assert CampaignPart.list_participants() == [participant]
    end

    test "get_participant!/1 returns the participant with given id" do
      participant = participant_fixture()
      assert CampaignPart.get_participant!(participant.id) == participant
    end

    test "create_participant/1 with valid data creates a participant" do
      assert %Participant{} = participant = participant_fixture()
      assert participant.is_active == true
      assert participant.is_pending == false
    end

    test "create_participant/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = CampaignPart.create_participant(@invalid_attrs)
    end

    test "update_participant/2 with valid data updates the participant" do
      participant = participant_fixture()

      assert {:ok, %Participant{} = participant} =
               CampaignPart.update_participant(participant, @update_attrs)

      assert participant.is_active == false
      assert participant.is_pending == false
    end

    test "update_participant/2 with invalid data returns error changeset" do
      participant = participant_fixture()

      assert {:error, %Ecto.Changeset{}} =
               CampaignPart.update_participant(participant, @invalid_attrs)

      assert participant == CampaignPart.get_participant!(participant.id)
    end

    test "delete_participant/1 deletes the participant" do
      participant = participant_fixture()
      assert {:ok, %Participant{}} = CampaignPart.delete_participant(participant)
      assert_raise Ecto.NoResultsError, fn -> CampaignPart.get_participant!(participant.id) end
    end

    test "change_participant/1 returns a participant changeset" do
      participant = participant_fixture()
      assert %Ecto.Changeset{} = CampaignPart.change_participant(participant)
    end
  end
end
