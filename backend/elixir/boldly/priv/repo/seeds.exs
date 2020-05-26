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
