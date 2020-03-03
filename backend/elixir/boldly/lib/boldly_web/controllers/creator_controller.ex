defmodule BoldlyWeb.CreatorController do
  use BoldlyWeb, :controller

  alias Boldly.CreatorAccount
  alias Boldly.CreatorAccount.Creator

  action_fallback BoldlyWeb.FallbackController

  def index(conn, _params) do
    creators = CreatorAccount.list_creators()
    render(conn, "index.json", creators: creators)
  end

  def create(conn, %{"creator" => creator_params}) do
    with {:ok, %Creator{} = creator} <- CreatorAccount.create_creator(creator_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.creator_path(conn, :show, creator))
      |> render("show.json", creator: creator)
    end
  end

  def show(conn, %{"id" => id}) do
    creator = CreatorAccount.get_creator!(id)
    render(conn, "show.json", creator: creator)
  end

  def update(conn, %{"id" => id, "creator" => creator_params}) do
    creator = CreatorAccount.get_creator!(id)

    with {:ok, %Creator{} = creator} <- CreatorAccount.update_creator(creator, creator_params) do
      render(conn, "show.json", creator: creator)
    end
  end

  def delete(conn, %{"id" => id}) do
    creator = CreatorAccount.get_creator!(id)

    with {:ok, %Creator{}} <- CreatorAccount.delete_creator(creator) do
      send_resp(conn, :no_content, "")
    end
  end

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
