defmodule BoldlyWeb.CreatorView do
  use BoldlyWeb, :view
  alias BoldlyWeb.CreatorView

  def render("index.json", %{creators: creators}) do
    %{data: render_many(creators, CreatorView, "creator.json")}
  end

  def render("show.json", %{creator: creator}) do
    %{data: render_one(creator, CreatorView, "creator.json")}
  end

  def render("creator.json", %{creator: creator}) do
    %{
      uuid: creator.id,
      name: creator.name,
      birthday: creator.birthday,
      values: creator.values,
      industry: creator.industry,
      interests: creator.interests,
      location: creator.location,
      email: creator.email
    }
  end

  def render("sign_in.json", %{creator: creator}) do
    %{
      data: %{
        creator: %{
          uuid: creator.id,
          name: creator.name,
          birthday: creator.birthday,
          values: creator.values,
          industry: creator.industry,
          interests: creator.interests,
          location: creator.location,
          email: creator.email
        }
      }
    }
  end
end
