# Script for populating the database. You can run it as:
#
#     mix run priv/repo/seeds.exs
#
# Inside the script, you can read and write to any of your
# repositories directly:
#
#     Boldly.Repo.insert!(%Boldly.SomeSchema{})
#
# We recommend using the bang functions (`insert!`, `update!`
# and so on) as they will fail if something goes wrong.
alias Boldly.InterestInfo
alias Boldly.{BrandAccount, CreatorAccount, CampaignInfo}

valid_brand_attrs = %{
  ecommerce: true,
  email: "some email",
  industries: "some industries",
  location: "some location",
  values: "some values",
  password: "some password",
  name: "some name"
}

valid_campaign_attrs = %{
  age_range: "20-80",
  compensation: "some compensation",
  creator_responsibilities: "some creator_responsibilities",
  description: "some description",
  desired_engagement_rate: 42,
  end_date: ~D[2010-04-17],
  industry: "public toilet",
  interests: "public toilet,my mother,your sister,blah",
  is_draft: true,
  location: "some location",
  name: "some name",
  perks: "some perks",
  photo_reference: "some photo_reference",
  specific_to_location: true,
  start_date: ~D[2010-04-17],
  uuid: "7488a646-e31f-11e4-aace-600308960662",
  values: "val1,val2,val3,valkilmer",
  launched_by: "7488a646-e31f-11e4-aace-600308960660"
}

valid_creator_attrs1 = %{
  birthday: ~D[1980-04-17],
  email: "some_creator_email",
  industry: "public toilet",
  interests: "my mother",
  location: "some location",
  name: "some name",
  values: "val1,val4,val5",
  password: "some password"
}

valid_creator_attrs2 = %{
  birthday: ~D[1999-04-17],
  email: "some_creator_email2",
  industry: "public toilet",
  interests: "my mother",
  location: "some location",
  name: "some name",
  values: "val4,val5",
  password: "some password"
}

{:ok, brand} = BrandAccount.create_brand(valid_brand_attrs)

{:ok, campaign} =
  CampaignInfo.create_campaign(Enum.into(%{launched_by: brand.uuid}, valid_campaign_attrs))

{:ok, _creator1} = CreatorAccount.create_creator(valid_creator_attrs1)
{:ok, _creator1} = CreatorAccount.create_creator(valid_creator_attrs2)

# InterestInfo.create_interest(%{interest: interest, categories: categories})

# f_name = "../../interests.csv"
#
# f_name
# |> Path.expand(__DIR__)
# |> File.stream!()
# |> CSV.decode!(headers: true)
# |> Enum.each(fn interest ->
#   InterestInfo.create_interest(%{
#     interest: interest["interest"],
#     categories: interest["categories"]
#   })
# end)
