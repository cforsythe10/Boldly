defmodule Boldly.ParticpantStatusTest do
  use Boldly.DataCase

  alias Boldly.ParticpantStatus

  describe "participants" do
    alias Boldly.ParticpantStatus.Participant

    @valid_attrs %{flag: "some flag", uuid: "7488a646-e31f-11e4-aace-600308960662"}
    @update_attrs %{flag: "some updated flag", uuid: "7488a646-e31f-11e4-aace-600308960668"}
    @invalid_attrs %{flag: nil, uuid: nil}

    def participant_fixture(attrs \\ %{}) do
      {:ok, participant} =
        attrs
        |> Enum.into(@valid_attrs)
        |> ParticpantStatus.create_participant()

      participant
    end

    test "list_participants/0 returns all participants" do
      participant = participant_fixture()
      assert ParticpantStatus.list_participants() == [participant]
    end

    test "get_participant!/1 returns the participant with given id" do
      participant = participant_fixture()
      assert ParticpantStatus.get_participant!(participant.id) == participant
    end

    test "create_participant/1 with valid data creates a participant" do
      assert {:ok, %Participant{} = participant} = ParticpantStatus.create_participant(@valid_attrs)
      assert participant.flag == "some flag"
      assert participant.uuid == "7488a646-e31f-11e4-aace-600308960662"
    end

    test "create_participant/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = ParticpantStatus.create_participant(@invalid_attrs)
    end

    test "update_participant/2 with valid data updates the participant" do
      participant = participant_fixture()
      assert {:ok, %Participant{} = participant} = ParticpantStatus.update_participant(participant, @update_attrs)
      assert participant.flag == "some updated flag"
      assert participant.uuid == "7488a646-e31f-11e4-aace-600308960668"
    end

    test "update_participant/2 with invalid data returns error changeset" do
      participant = participant_fixture()
      assert {:error, %Ecto.Changeset{}} = ParticpantStatus.update_participant(participant, @invalid_attrs)
      assert participant == ParticpantStatus.get_participant!(participant.id)
    end

    test "delete_participant/1 deletes the participant" do
      participant = participant_fixture()
      assert {:ok, %Participant{}} = ParticpantStatus.delete_participant(participant)
      assert_raise Ecto.NoResultsError, fn -> ParticpantStatus.get_participant!(participant.id) end
    end

    test "change_participant/1 returns a participant changeset" do
      participant = participant_fixture()
      assert %Ecto.Changeset{} = ParticpantStatus.change_participant(participant)
    end
  end
end
