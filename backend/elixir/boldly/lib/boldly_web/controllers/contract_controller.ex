defmodule BoldlyWeb.ContractController do
  use BoldlyWeb, :controller

  alias Boldly.SignedContract
  alias Boldly.SignedContract.Contract

  action_fallback BoldlyWeb.FallbackController

  def index(conn, _params) do
    contracts = SignedContract.list_contracts() |> get_documents()
    render(conn, "index.json", contracts: contracts)
  end

  def create(conn, %{"contract" => contract_params}) do
    with {:ok, %Contract{} = contract_d} <- SignedContract.create_contract(contract_params) do
      contract = contract_d |> get_documents()

      conn
      |> put_status(:created)
      |> put_resp_header("location", Routes.contract_path(conn, :show, contract))
      |> render("show.json", contract: contract)
    end
  end

  def show(conn, %{"id" => id}) do
    contract = SignedContract.get_contract!(id)
    render(conn, "show.json", contract: contract |> get_documents())
  end

  def get_all_contracts(conn, %{"brand_uuid" => b_uuid}) do
    contracts = SignedContract.get_all_brands_contracts(b_uuid) |> get_documents()
    render(conn, "index.json", contracts: contracts)
  end

  def get_all_contracts(conn, %{"creator_uuid" => c_uuid}) do
    contracts = SignedContract.get_all_creators_contracts(c_uuid) |> get_documents()
    render(conn, "index.json", contracts: contracts)
  end

  def get_all_contracts(conn, %{"campaign_uuid" => c_uuid}) do
    contracts = SignedContract.get_all_campaigns_contracts(c_uuid) |> get_documents()
    render(conn, "index.json", contracts: contracts)
  end

  def update(conn, %{"id" => id, "contract" => contract_params}) do
    contract = SignedContract.get_contract!(id) |> get_documents()

    with {:ok, %Contract{} = contract} <-
           SignedContract.update_contract(contract, contract_params) do
      render(conn, "show.json", contract: contract)
    end
  end

  def delete(conn, %{"id" => id}) do
    contract = SignedContract.get_contract!(id)

    with {:ok, %Contract{}} <- SignedContract.delete_contract(contract) do
      send_resp(conn, :no_content, "")
    end
  end

  def get_documents(docs) when is_list(docs) do
    Enum.map(docs, fn doc ->
      get_documents(doc)
    end)
  end

  def get_documents(docs) do
    if docs.file_path do
      bucket_name = System.get_env("BUCKET_NAME")
      doc_base64 = ExAws.S3.get_object(bucket_name, docs.file_path) |> ExAws.request!()
      Map.replace!(docs, :file_path, doc_base64.body)
    else
      docs
    end
  end
end
