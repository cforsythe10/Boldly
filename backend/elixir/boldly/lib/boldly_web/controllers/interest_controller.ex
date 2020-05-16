defmodule BoldlyWeb.InterestController do
  use BoldlyWeb, :controller

  alias Boldly.InterestInfo
  alias Boldly.InterestInfo.Interest

  action_fallback BoldlyWeb.FallbackController

  def index(conn, _params) do
    interests = InterestInfo.list_interests()
    render(conn, "index.json", interests: interests)
  end

  def create(conn, %{"interest" => interest_params}) do
    with {:ok, %Interest{} = interest} <- InterestInfo.create_interest(interest_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.interest_path(conn, :show, interest))
      |> render("show.json", interest: interest)
    end
  end

  def show(conn, %{"id" => id}) do
    interest = InterestInfo.get_interest!(id)
    render(conn, "show.json", interest: interest)
  end

  def update(conn, %{"id" => id, "interest" => interest_params}) do
    interest = InterestInfo.get_interest!(id)

    with {:ok, %Interest{} = interest} <- InterestInfo.update_interest(interest, interest_params) do
      render(conn, "show.json", interest: interest)
    end
  end

  def delete(conn, %{"id" => id}) do
    interest = InterestInfo.get_interest!(id)

    with {:ok, %Interest{}} <- InterestInfo.delete_interest(interest) do
      send_resp(conn, :no_content, "")
    end
  end
end
