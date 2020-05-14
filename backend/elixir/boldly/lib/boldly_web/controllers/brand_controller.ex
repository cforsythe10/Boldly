defmodule BoldlyWeb.BrandController do
  use BoldlyWeb, :controller

  alias Boldly.BrandAccount
  alias Boldly.BrandAccount.Brand

  action_fallback BoldlyWeb.FallbackController

  @doc """
  Lists all Brand accounts.

  Returns a JSON list of all brands. Output fields can be seen in `BoldlyWeb.BrandView.render/2`.

  """
  def index(conn, _params) do
    brands = BrandAccount.list_brands()
    render(conn, "index.json", brands: brands)
  end

  @doc """
  Creates a Brand account.

  The attributes for the desired brand should be wrapped in a `brand` key at the top level of the JSON load.

  Input fields are:
  ```
  ecommerce: boolean, default = false
  email: string
  industries: string
  location: string
  values: string
  password: string
  name: string
  ```

  Output fields can be seen in `BoldlyWeb.BrandView.render/2`
  """
  def create(conn, %{"brand" => brand_params}) do
    with {:ok, %Brand{} = brand} <- BrandAccount.create_brand(brand_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.brand_path(conn, :show, brand))
      |> render("show.json", brand: brand)
    end
  end

  @doc """
  Returns the attributes of the desired brand if it exists.

  Output fields can be seen in `BoldlyWeb.BrandView.render/2`.

  """
  def show(conn, %{"id" => id}) do
    brand = BrandAccount.get_brand!(id)
    render(conn, "show.json", brand: brand)
  end

  @doc """
  Updates the desired Brand's attributes.

  At the top level of the JSON, there should be an `id` key which is the `id` of the Brand, and a `brand` key within which are the attributes that are being updated.

  Returns the Brand with updated fields if successful, or an error if not.

  Output fields can be seen in `BoldlyWeb.BrandView.render/2`.

  """
  def update(conn, %{"id" => id, "brand" => brand_params}) do
    brand = BrandAccount.get_brand!(id)

    with {:ok, %Brand{} = brand} <- BrandAccount.update_brand(brand, brand_params) do
      render(conn, "show.json", brand: brand)
    end
  end

  @doc """
  Deletes a brand using the passed in `id` value. Returns an empty response on success
  """
  def delete(conn, %{"id" => id}) do
    brand = BrandAccount.get_brand!(id)

    with {:ok, %Brand{}} <- BrandAccount.delete_brand(brand) do
      send_resp(conn, :no_content, "")
    end
  end

  def increment_views(conn, %{"id" => id}) do
    brand = BrandAccount.get_brand!(id)

    with {:ok, %Brand{} = brand} <-
           BrandAccount.incr_view(brand) do
      render(conn, "show.json", brand: brand)
    end
  end

  @doc """
  Ensures that the login information is correct.

  Should be passed the Email and Password under `email` and `password` keys in JSON.

  Output fields can be seen in `BoldlyWeb.BrandView.render/2`

  """
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
