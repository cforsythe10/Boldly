defmodule BoldlyWeb.ConversationView do
  use BoldlyWeb, :view
  alias BoldlyWeb.ConversationView

  @doc """
  Returns a JSON object which is either a list or a single item which is composed of the following fields:

  Attribute fields (returned under a `data` field) are:

  creator_id,
  brand_id,
  id
  """
  def render("index.json", %{conversations: conversations}) do
    %{data: render_many(conversations, ConversationView, "conversation.json")}
  end

  def render("show.json", %{conversation: conversation}) do
    %{data: render_one(conversation, ConversationView, "conversation.json")}
  end

  def render("conversation.json", %{conversation: conversation}) do
    %{
      creator_id: conversation.creator_id,
      brand_id: conversation.brand_id,
      id: conversation.id
    }
  end
end
