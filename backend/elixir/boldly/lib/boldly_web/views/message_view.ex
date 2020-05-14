defmodule BoldlyWeb.MessageView do
  use BoldlyWeb, :view
  alias BoldlyWeb.MessageView


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
      sent_by_creator: message.sent_by_creator
    }
  end
end
