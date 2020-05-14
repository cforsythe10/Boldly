defmodule BoldlyWeb.ConversationController do
  use BoldlyWeb, :controller

  alias Boldly.ConversationInfo
  alias Boldly.Conversations.Conversation

  action_fallback BoldlyWeb.FallbackController

  @doc """
  Lists all Conversations.

  Returns a JSON list of all conversations. Output fields can be seen in `BoldlyWeb.ConversationView.render/2`.

  """
  def index(conn, _params) do
    conversations = ConversationInfo.list_conversations()
    render(conn, "index.json", conversations: conversations)
  end

  @doc """
  Creates a Conversation between a brand and a creator. The attributes for the desired conversation should be wrapped in `conversation` key at the top level of the JSON load.

  Input fields are:
  ```
  brand_id: id,
  creator_id: id
  ```

  Output fields can be seen in `BoldlyWeb.ConversationView.render/2`.
  """
  def create(conn, %{"conversation" => conv_params}) do
    with {:ok, %Conversation{} = conv} <- ConversationInfo.create_conversation(conv_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.conversation_path(conn, :show, conv))
      |> render("show.json", conversation: conv)
    end
  end


  # def show(conn, %{"creator_id" => creator_id, "brand_id" => brand_id}) do
  #   conv = ConversationInfo.get_conversation!(creator_id, brand_id)
  #   render(conn, "show.json", conversation: conv)
  # end

  @doc """
  Returns the Conversation information of the brand and creator's conversation.

  JSON payload should have, at the top level:
  ```
  brand_id: id,
  creator_id: id
  ```

  Output fields can be seen in `BoldlyWeb.ConversationView.render/2`.

  """
  def show_conv(conn, %{"creator_id" => creator_id, "brand_id" => brand_id}) do
    conv = ConversationInfo.get_conversation!(creator_id, brand_id)
    render(conn, "show.json", conversation: conv)
  end

  @doc """
  Returns all Conversations that the Creator or brand is a part of.

  The payload for Creators should be `{creator_id: id}`, and for Brands should be `{brand_id: id}`.

  Output fields can be seen in `BoldlyWeb.ConversationView.render/2`.

  """
  def get_conversations(conn, %{"creator_id" => creator_id}) do
    conv = ConversationInfo.get_creator_conversations(creator_id)
    render(conn, "index.json", conversations: conv)
  end

  def get_conversations(conn, %{"brand_id" => brand_id}) do
    conv = ConversationInfo.get_brand_conversations(brand_id)
    render(conn, "index.json", conversations: conv)
  end


  @doc """
  Not yet implemented.
  """
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

  @doc """
  Not yet implemented.
  """
  def delete(conn, %{"creator_id" => creator_id, "brand_id" => brand_id}) do
    conv = ConversationInfo.get_conversation!(creator_id, brand_id)

    with {:ok, %Conversation{}} <- ConversationInfo.delete_conversation(conv) do
      send_resp(conn, :no_content, "")
    end
  end
end
