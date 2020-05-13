defmodule BoldlyWeb.ContractView do
  use BoldlyWeb, :view
  alias BoldlyWeb.ContractView

  def render("index.json", %{contracts: contracts}) do
    %{data: render_many(contracts, ContractView, "contract.json")}
  end

  def render("show.json", %{contract: contract}) do
    %{data: render_one(contract, ContractView, "contract.json")}
  end

  def render("contract.json", %{contract: contract}) do
    %{
      id: contract.id,
      file_path: contract.file_path,
      brand_uuid: contract.brand_uuid,
      creator_uuid: contract.creator_uuid,
      campaign_uuid: contract.campaign_uuid
    }
  end
end
