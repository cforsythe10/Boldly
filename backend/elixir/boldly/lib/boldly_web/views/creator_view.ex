defmodule BoldlyWeb.CreatorView do
  use BoldlyWeb, :view
  alias BoldlyWeb.CreatorView

  def render("index.json", %{creators: creators}) do
    %{data: render_many(creators, CreatorView, "creator.json")}
  end

  def render("show.json", %{creator: creator}) do
    %{data: render_one(creator, CreatorView, "creator.json")}
  end

  @doc """
  Returns data for a Creator in JSON format.

  Attribute fields (returned under a `data` field) are:

  ```
  uuid,
  name,
  birthday,
  values,
  industry,
  interests,
  location,
  email,
  id,
  description,
  picture,
  web_link,
  profile_visits
  ```
  """
  def render("creator.json", %{creator: creator}) do
    %{
      uuid: creator.uuid,
      name: creator.name,
      birthday: creator.birthday,
      values: creator.values,
      industry: creator.industry,
      interests: creator.interests,
      location: creator.location,
      email: creator.email,
      id: creator.id,
      description: creator.description,
      picture: creator.picture,
      web_link: creator.web_link,
      profile_visits: creator.profile_visits,
      engagement_rate: creator.engagement_rate,
      instagram_stats: creator.instagram_stats
    }
  end

  def render("sign_in.json", %{creator: creator}) do
    %{
      data: %{
        creator: %{
          uuid: creator.uuid,
          name: creator.name,
          birthday: creator.birthday,
          values: creator.values,
          industry: creator.industry,
          interests: creator.interests,
          location: creator.location,
          email: creator.email,
          id: creator.id,
          description: creator.description,
          picture: creator.picture,
          web_link: creator.web_link,
          profile_visits: creator.profile_visits,
          engagement_rate: creator.engagement_rate,
          instagram_stats: creator.instagram_stats
        }
      }
    }
  end
end
