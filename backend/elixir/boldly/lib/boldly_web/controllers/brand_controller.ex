defmodule BoldlyWeb.BrandController do
  use BoldlyWeb, :controller

  alias Boldly.BrandAccount
  alias Boldly.BrandAccount.Brand

  action_fallback BoldlyWeb.FallbackController

  def index(conn, _params) do
    brands = BrandAccount.list_brands()
    render(conn, "index.json", brands: brands)
  end

  def create(conn, %{"brand" => brand_params}) do
    with {:ok, %Brand{} = brand} <- BrandAccount.create_brand(brand_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.brand_path(conn, :show, brand))
      |> render("show.json", brand: brand)
    end
  end

  def show(conn, %{"id" => id}) do
    brand = BrandAccount.get_brand!(id)
    render(conn, "show.json", brand: brand)
  end

  def update(conn, %{"id" => id, "brand" => brand_params}) do
    brand = BrandAccount.get_brand!(id)

    with {:ok, %Brand{} = brand} <- BrandAccount.update_brand(brand, brand_params) do
      render(conn, "show.json", brand: brand)
    end
  end

  def delete(conn, %{"id" => id}) do
    brand = BrandAccount.get_brand!(id)

    with {:ok, %Brand{}} <- BrandAccount.delete_brand(brand) do
      send_resp(conn, :no_content, "")
    end
  end

  def sign_in(conn, %{"email" => email, "password" => password}) do
    case Boldly.BrandAccount.authenticate_user(email, password) do
      {:ok, brand} ->
        conn
        |> put_session(:current_user_id, brand.id)
        |> put_status(:ok)
        |> put_view(BoldlyWeb.BrandView)
        |> render("sign_in.json", brand: brand)

      {:error, message} ->
        conn
        |> delete_session(:current_user_id)
        |> put_status(:unauthorized)
        |> put_view(BoldlyWeb.ErrorView)
        |> render("401.json", message: message)
    end
  end
end
