defmodule BoldlyWeb.ContractController do
  use BoldlyWeb, :controller

  alias Boldly.SignedContract
  alias Boldly.SignedContract.Contract

  action_fallback BoldlyWeb.FallbackController

  def index(conn, _params) do
    contracts = SignedContract.list_contracts()
    render(conn, "index.json", contracts: contracts)
  end

  def create(conn, %{"contract" => contract_params}) do
    with {:ok, %Contract{} = contract} <- SignedContract.create_contract(contract_params) do
      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.contract_path(conn, :show, contract))
      |> render("show.json", contract: contract)
    end
  end

  def show(conn, %{"id" => id}) do
    contract = SignedContract.get_contract!(id)
    render(conn, "show.json", contract: contract)
  end

  def update(conn, %{"id" => id, "contract" => contract_params}) do
    contract = SignedContract.get_contract!(id)

    with {:ok, %Contract{} = contract} <- SignedContract.update_contract(contract, contract_params) do
      render(conn, "show.json", contract: contract)
    end
  end

  def delete(conn, %{"id" => id}) do
    contract = SignedContract.get_contract!(id)

    with {:ok, %Contract{}} <- SignedContract.delete_contract(contract) do
      send_resp(conn, :no_content, "")
    end
  end
end
