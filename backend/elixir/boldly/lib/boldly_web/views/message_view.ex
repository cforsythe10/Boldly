defmodule BoldlyWeb.MessageView do
  use BoldlyWeb, :view
  alias BoldlyWeb.MessageView

  @doc """
  Returns a JSON object which is either a list or a single item which is composed of the following fields:

  Attribute fields (returned under a `data` field) are:

  conversation_id,
  id,
  content,
  sent_by_creator,
  date
  """
  def render("index.json", %{messages: messages}) do
    %{data: render_many(messages, MessageView, "message.json")}
  end

  def render("show.json", %{message: message}) do
    %{data: render_one(message, MessageView, "message.json")}
  end

  def render("message.json", %{message: message}) do
    %{
      conversation_id: message.conversation_id,
      content: message.content,
      date: message.date,
      sent_by_creator: message.sent_by_creator,
      id: message.id
    }
  end
end
