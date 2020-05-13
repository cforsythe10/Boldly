defmodule BoldlyWeb.TemplateControllerTest do
  use BoldlyWeb.ConnCase

  alias Boldly.ContractTemplate
  alias Boldly.ContractTemplate.Template

  @valid_brand_attrs %{
    ecommerce: true,
    email: "some email",
    industries: "some industries",
    location: "some location",
    values: "some values",
    password: "some password",
    name: "some name"
  }

  @create_attrs %{
    file_path: "some file_path"
  }
  @update_attrs %{
    file_path: "some updated file_path"
  }
  @invalid_attrs %{file_path: nil}

  def fixture(:template_setup) do
    {:ok, brand} = %{} |> Enum.into(@valid_brand_attrs) |> Boldly.BrandAccount.create_brand()

    temp_attrs = %{
      file_path: @create_attrs.file_path,
      brand_uuid: brand.uuid
    }
  end

  def fixture(:template) do
    temp_attrs = fixture(:template_setup)
    {:ok, template} = ContractTemplate.create_template(temp_attrs)
    template
  end

  setup %{conn: conn} do
    {:ok, conn: put_req_header(conn, "accept", "application/json")}
  end

  describe "index" do
    test "lists all templates", %{conn: conn} do
      conn = get(conn, Routes.template_path(conn, :index))
      assert json_response(conn, 200)["data"] == []
    end
  end

  describe "create template" do
    test "renders template when data is valid", %{conn: conn} do
      attrs_use = fixture(:template_setup)
      conn = post(conn, Routes.template_path(conn, :create), template: attrs_use)
      assert %{"id" => id} = json_response(conn, 201)["data"]

      conn = get(conn, Routes.template_path(conn, :show, id))
      brand_uuid = attrs_use.brand_uuid

      assert %{
               "id" => id,
               "file_path" => "some file_path",
               "brand_uuid" => brand_uuid
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn} do
      conn = post(conn, Routes.template_path(conn, :create), template: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "update template" do
    setup [:create_template]

    test "renders template when data is valid", %{
      conn: conn,
      template: %Template{id: id} = template
    } do
      conn = put(conn, Routes.template_path(conn, :update, template), template: @update_attrs)
      assert %{"id" => ^id} = json_response(conn, 200)["data"]

      conn = get(conn, Routes.template_path(conn, :show, id))

      assert %{
               "id" => id,
               "file_path" => "some updated file_path"
             } = json_response(conn, 200)["data"]
    end

    test "renders errors when data is invalid", %{conn: conn, template: template} do
      conn = put(conn, Routes.template_path(conn, :update, template), template: @invalid_attrs)
      assert json_response(conn, 422)["errors"] != %{}
    end
  end

  describe "delete template" do
    setup [:create_template]

    test "deletes chosen template", %{conn: conn, template: template} do
      conn = delete(conn, Routes.template_path(conn, :delete, template))
      assert response(conn, 204)

      assert_error_sent 404, fn ->
        get(conn, Routes.template_path(conn, :show, template))
      end
    end
  end

  defp create_template(_) do
    template = fixture(:template)
    {:ok, template: template}
  end
end
