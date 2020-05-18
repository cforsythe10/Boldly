defmodule BoldlyWeb.CampaignView do
  use BoldlyWeb, :view
  alias BoldlyWeb.CampaignView
  alias BoldlyWeb.ParticipantView

  def render("index.json", %{campaigns: campaigns}) do
    %{data: render_many(campaigns, CampaignView, "campaign.json")}
  end

  def render("brands_index.json", assigns) do
    # IO.puts(curr)
    %{
      data: %{
        current:
          render_many(assigns.current, CampaignView, "campaign_with_parts.json", as: :campaign),
        past: render_many(assigns.past, CampaignView, "campaign_with_parts.json", as: :campaign)
      }
    }
  end

  def render("creators_index.json", assigns) do
    %{
      data: %{
        matched_with: render_many(assigns.matched, CampaignView, "campaign.json", as: :campaign),
        applied_to: render_many(assigns.applied, CampaignView, "campaign.json", as: :campaign),
        currently_active:
          render_many(assigns.active, CampaignView, "campaign.json", as: :campaign)
      }
    }
  end

  def render("campaign_with_parts.json", %{campaign: {campaign}}) do
    %{
      id: campaign.id,
      uuid: campaign.uuid,
      name: campaign.name,
      start_date: campaign.start_date,
      end_date: campaign.end_date,
      photo_reference: campaign.photo_reference,
      description: campaign.description,
      values: campaign.values,
      creator_responsibilities: campaign.creator_responsibilities,
      age_range: campaign.age_range,
      compensation: campaign.compensation,
      desired_engagement_rate: campaign.desired_engagement_rate,
      perks: campaign.perks,
      industry: campaign.industry,
      interests: campaign.interests,
      location: campaign.location,
      specific_to_location: campaign.specific_to_location,
      is_draft: campaign.is_draft,
      launched_by: campaign.launched_by,
      participants:
        render_many(campaign.participants, ParticipantView, "participant.json", as: :participant)
    }
  end

  def render("show.json", %{campaign: campaign}) do
    %{data: render_one(campaign, CampaignView, "campaign.json")}
  end

  @doc """
  Renders campaign(s) attributes.

  The fields, all wrapped under a `data` field, are:

  ```
  id
  uuid
  name
  start_date
  end_date
  photo_reference
  description
  values
  creator_responsibilities
  age_range
  compensation
  desired_engagement_rate
  perks
  industry
  interests
  location
  specific_to_location
  is_draft
  launched_by
  ```
  """
  def render("campaign.json", %{campaign: campaign}) do
    %{
      id: campaign.id,
      uuid: campaign.uuid,
      name: campaign.name,
      start_date: campaign.start_date,
      end_date: campaign.end_date,
      photo_reference: campaign.photo_reference,
      description: campaign.description,
      values: campaign.values,
      creator_responsibilities: campaign.creator_responsibilities,
      age_range: campaign.age_range,
      compensation: campaign.compensation,
      desired_engagement_rate: campaign.desired_engagement_rate,
      perks: campaign.perks,
      industry: campaign.industry,
      interests: campaign.interests,
      location: campaign.location,
      specific_to_location: campaign.specific_to_location,
      is_draft: campaign.is_draft,
      launched_by: campaign.launched_by
    }
  end
end
