defmodule Boldly.SignedContract do
  @moduledoc """
  The SignedContract context.
  """

  import Ecto.Query, warn: false
  alias Boldly.Repo

  alias Boldly.SignedContract.Contract

  @doc """
  Returns the list of contracts.

  ## Examples

      iex> list_contracts()
      [%Contract{}, ...]

  """
  def list_contracts do
    Repo.all(Contract)
  end

  @doc """
  Gets a single contract.

  Raises `Ecto.NoResultsError` if the Contract does not exist.

  ## Examples

      iex> get_contract!(123)
      %Contract{}

      iex> get_contract!(456)
      ** (Ecto.NoResultsError)

  """
  def get_contract!(id), do: Repo.get!(Contract, id)


  def get_all_brands_contracts(b_uuid) do
    query = from c in Contract, where: c.brand_uuid == ^b_uuid
    Repo.all(query)
  end

  def get_all_creators_contracts(c_uuid) do
    query = from c in Contract, where: c.creator_uuid == ^c_uuid
    Repo.all(query)
  end

  def get_all_campaigns_contracts(c_uuid) do
    query = from c in Contract, where: c.campaign_uuid == ^c_uuid
    Repo.all(query)
  end

  @doc """
  Creates a contract.

  ## Examples

      iex> create_contract(%{field: value})
      {:ok, %Contract{}}

      iex> create_contract(%{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def create_contract(attrs \\ %{}) do
    %Contract{}
    |> Contract.changeset(attrs)
    |> Repo.insert()
  end

  @doc """
  Updates a contract.

  ## Examples

      iex> update_contract(contract, %{field: new_value})
      {:ok, %Contract{}}

      iex> update_contract(contract, %{field: bad_value})
      {:error, %Ecto.Changeset{}}

  """
  def update_contract(%Contract{} = contract, attrs) do
    contract
    |> Contract.changeset(attrs)
    |> Repo.update()
  end

  @doc """
  Deletes a contract.

  ## Examples

      iex> delete_contract(contract)
      {:ok, %Contract{}}

      iex> delete_contract(contract)
      {:error, %Ecto.Changeset{}}

  """
  def delete_contract(%Contract{} = contract) do
    Repo.delete(contract)
  end

  @doc """
  Returns an `%Ecto.Changeset{}` for tracking contract changes.

  ## Examples

      iex> change_contract(contract)
      %Ecto.Changeset{source: %Contract{}}

  """
  def change_contract(%Contract{} = contract) do
    Contract.changeset(contract, %{})
  end
end
