defmodule BoldlyWeb.BrandView do
  use BoldlyWeb, :view
  alias BoldlyWeb.BrandView

  def render("index.json", %{brands: brands}) do
    %{data: render_many(brands, BrandView, "brand.json")}
  end

  def render("show.json", %{brand: brand}) do
    %{data: render_one(brand, BrandView, "brand.json")}
  end

  @doc """
  Renders data for a Brand account in JSON format

  Attribute fields (returned under a `data` field) are:

  `uuid`, `id`, `ecommerce`, `location`, `industries`, `values`, `email`, `name`

  """
  def render("brand.json", %{brand: brand}) do
    %{
      uuid: brand.uuid,
      id: brand.id,
      ecommerce: brand.ecommerce,
      location: brand.location,
      industries: brand.industries,
      values: brand.values,
      email: brand.email,
      name: brand.name
    }
  end

  def render("sign_in.json", %{brand: brand}) do
    %{
      data: %{
        brand: %{
          uuid: brand.uuid,
          id: brand.id,
          ecommerce: brand.ecommerce,
          location: brand.location,
          industries: brand.industries,
          values: brand.values,
          email: brand.email,
          name: brand.name
        }
      }
    }
  end
end
