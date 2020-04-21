defmodule BoldlyWeb.CreatorController do
  use BoldlyWeb, :controller

  alias Boldly.CreatorAccount
  alias Boldly.CreatorAccount.Creator

  action_fallback BoldlyWeb.FallbackController

  @doc """
  Lists all Creator accounts.

  Returns a JSON list of all creators. Output fields can be seen in `BoldlyWeb.CreatorView.render/2`.
  """
  def index(conn, _params) do
    creators = CreatorAccount.list_creators()
    render(conn, "index.json", creators: creators)
  end

  @doc """
  Creates a Creator account given valid attributes.

  The attributes for the desired creator should be wrapped in a `creator` key at the top level of the JSON load.

  Input fields are:
  ```
  birthday: date
  email: string
  industry: string
  interests: string
  location: string
  name: string
  values: string
  password: string
  ```


  Output fields can be seen in `BoldlyWeb.CreatorView.render/2`.
  """

  def create(conn, %{"creator" => creator_params}) do
    with {:ok, %Creator{} = creator} <- CreatorAccount.create_creator(creator_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.creator_path(conn, :show, creator))
      |> render("show.json", creator: creator)
    end
  end

  @doc """
  Shows the specified creator if it exists.

  Output fields can be seen in `BoldlyWeb.CreatorView.render/2`.
  """
  def show(conn, %{"id" => id}) do
    creator = CreatorAccount.get_creator!(id)
    render(conn, "show.json", creator: creator)
  end


  @doc """
  Updates the Creator account with the desired attributes. The creator account's `id` should be at the top level of the JSON, and the updated attributes should be under a `creator` key at the top level of the JSON.

  Output fields can be seen in `BoldlyWeb.CreatorView.render/2`.
  """
  def update(conn, %{"id" => id, "creator" => creator_params}) do
    creator = CreatorAccount.get_creator!(id)

    with {:ok, %Creator{} = creator} <- CreatorAccount.update_creator(creator, creator_params) do
      render(conn, "show.json", creator: creator)
    end
  end

  @doc """
  Deletes a Creator account if it exists.

  Returns an empty respnse.

  """
  def delete(conn, %{"id" => id}) do
    creator = CreatorAccount.get_creator!(id)

    with {:ok, %Creator{}} <- CreatorAccount.delete_creator(creator) do
      send_resp(conn, :no_content, "")
    end
  end


  @doc """
  Ensures that the email and password of the account are valid.

  If the account doesn't exist, sends 401 and sends error message.
  
  Output fields can be seen in `BoldlyWeb.CreatorView.render/2`.
  """
  def sign_in(conn, %{"email" => email, "password" => password}) do
    case Boldly.CreatorAccount.authenticate_user(email, password) do
      {:ok, creator} ->
        conn
        |> put_session(:current_user_id, creator.id)
        |> put_status(:ok)
        |> put_view(BoldlyWeb.CreatorView)
        |> render("sign_in.json", creator: creator)

      {:error, message} ->
        conn
        |> delete_session(:current_user_id)
        |> put_status(:unauthorized)
        |> put_view(BoldlyWeb.ErrorView)
        |> render("401.json", message: message)
    end
  end
end
