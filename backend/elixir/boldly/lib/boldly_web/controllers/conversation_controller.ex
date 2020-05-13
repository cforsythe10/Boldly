defmodule BoldlyWeb.ConversationController do
  use BoldlyWeb, :controller

  alias Boldly.ConversationInfo
  alias Boldly.Conversations.Conversation

  action_fallback BoldlyWeb.FallbackController

  def index(conn, _params) do
    conversations = ConversationInfo.list_conversations()
    render(conn, "index.json", conversations: conversations)
  end

  def create(conn, %{"conversation" => conv_params}) do
    with {:ok, %Conversation{} = conv} <- ConversationInfo.create_conversation(conv_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.conversation_path(conn, :show, conv))
      |> render("show.json", conversation: conv)
    end
  end

  def show(conn, %{"creator_id" => creator_id, "brand_id" => brand_id}) do
    conv = ConversationInfo.get_conversation!(creator_id, brand_id)
    render(conn, "show.json", conversation: conv)
  end

  def show_conv(conn, %{"creator_id" => creator_id, "brand_id" => brand_id}) do
    conv = ConversationInfo.get_conversation!(creator_id, brand_id)
    render(conn, "show.json", conversation: conv)
  end

  def update(conn, %{
        "creator_id" => creator_id,
        "brand_id" => brand_id,
        "conversation" => conv_params
      }) do
    conv = ConversationInfo.get_conversation!(creator_id, brand_id)

    with {:ok, %Conversation{} = conv} <- ConversationInfo.update_conversation(conv, conv_params) do
      render(conn, "show.json", conversation: conv)
    end
  end

  def delete(conn, %{"creator_id" => creator_id, "brand_id" => brand_id}) do
    conv = ConversationInfo.get_conversation!(creator_id, brand_id)

    with {:ok, %Conversation{}} <- ConversationInfo.delete_conversation(conv) do
      send_resp(conn, :no_content, "")
    end
  end
end
