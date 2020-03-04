defmodule Boldly.ParticpantStatus.Participant do
  use Ecto.Schema
  import Ecto.Changeset

  schema "participants" do
    field :flag, :string
    field :uuid, Ecto.UUID

    timestamps()
  end

  @doc false
  def changeset(participant, attrs) do
    participant
    |> cast(attrs, [:uuid, :flag])
    |> validate_required([:uuid, :flag])
    |> unique_constraint(:uuid)
  end
end
