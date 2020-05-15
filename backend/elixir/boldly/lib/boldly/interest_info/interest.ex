defmodule Boldly.InterestInfo.Interest do
  use Ecto.Schema
  import Ecto.Changeset

  schema "interests" do
    field :categories, :string
    field :interest, :string

    timestamps()
  end

  @doc false
  def changeset(interest, attrs) do
    interest
    |> cast(attrs, [:interest, :categories])
    |> validate_required([:interest, :categories])
  end
end
