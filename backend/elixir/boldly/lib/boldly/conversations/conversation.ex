defmodule Boldly.Conversations.Conversation do
  use Ecto.Schema
  import Ecto.Changeset

  @primary_key {:id, :id, autogenerate: true}
  schema "conversations" do
    # field :status, :string

    belongs_to :creators, Boldly.CreatorAccount.Creator, foreign_key: :creator_id
    belongs_to :brands, Boldly.BrandAccount.Brand, foreign_key: :brand_id
    has_many :messages, Boldly.Messages.Message

    timestamps()
  end

  def changeset(changeset, params \\ %{}) do
    changeset
    |> cast(params, [:creator_id, :brand_id,]) #:status])
    |> validate_required([:creator_id, :brand_id])
    |> unique_constraint(:creator_brand, name: :sender)
    |> foreign_key_constraint(:creator_id)
    |> foreign_key_constraint(:brand_id)
  end

end
