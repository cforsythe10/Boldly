defmodule BoldlyWeb.ConversationView do
  use BoldlyWeb, :view
  alias BoldlyWeb.ConversationView


  def render("index.json", %{conversation: conversation}) do
    %{data: render_many(conversation, ConversationView, "conversation.json")}
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
