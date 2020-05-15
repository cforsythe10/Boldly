defmodule BoldlyWeb.MessageController do
  use BoldlyWeb, :controller
  alias Boldly.MessageInfo
  alias Boldly.Messages.Message

  action_fallback BoldlyWeb.FallbackController

  @doc """
  Lists all Messages.

  Returns a JSON list of all Messages.

  Output fields can be seen in `BoldlyWeb.MessageView.render/2`.

  """
  def index(conn, _params) do
    messages = MessageInfo.list_messages()
    render(conn, "index.json", messages: messages)
  end

  @doc """
  Creates a Message.

  The attributes for the desired Message should be wrapped in a `message` key at the top level of the JSON load.

  Input fields are:
  ```
  content: string,
  conversation_id: id,
  date: date,
  sent_by_creator: boolean
  ```

  Output fields can be seen in `BoldlyWeb.MessageView.render/2`.

  """
  def create(conn, %{"message" => message_params}) do
    with {:ok, %Message{} = mess} <- MessageInfo.create_message(message_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.message_path(conn, :show, mess))
      |> render("show.json", message: mess)
    end
  end

  @doc """
  Returns the attributes of the desired Message if it exists.

  Output fields can be seen in `BoldlyWeb.MessageView.render/2`.
  """
  def show(conn, %{"id" => id}) do
    message = MessageInfo.get_message!(id)
    render(conn, "show.json", message: message)
  end

  @doc """
  Returns all Messages from the Conversation.

  Output fields can be seen in `BoldlyWeb.MessageView.render/2`.
  """
  def show_conv(conn, %{"conversation_id" => conv_id}) do
    messages = MessageInfo.get_messages!(conv_id)
    render(conn, "index.json", messages: messages)
  end

  def delete(conn, %{"id" => id}) do
    message = MessageInfo.get_message!(id)

    with {:ok, %Message{}} <- MessageInfo.delete_message(message) do
      send_resp(conn, :no_content, "")
    end
  end
end
