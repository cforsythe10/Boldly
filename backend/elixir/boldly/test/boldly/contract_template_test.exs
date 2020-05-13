defmodule Boldly.ContractTemplateTest do
  use Boldly.DataCase

  alias Boldly.ContractTemplate

  describe "templates" do
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

    @valid_attrs %{file_path: "some file_path"}
    @update_attrs %{file_path: "some updated file_path"}
    @invalid_attrs %{file_path: nil}

    def brand_fixture(attrs \\ %{}) do
      {:ok, brand} = attrs |> Enum.into(@valid_brand_attrs) |> Boldly.BrandAccount.create_brand()

      temp_attrs = %{
        file_path: @valid_attrs.file_path,
        brand_uuid: brand.uuid
      }
    end

    def template_fixture(attrs \\ %{}) do
      temp_attrs = brand_fixture()

      {:ok, template} =
        attrs
        |> Enum.into(temp_attrs)
        |> ContractTemplate.create_template()

      template
    end

    test "list_templates/0 returns all templates" do
      template = template_fixture()
      assert ContractTemplate.list_templates() == [template]
    end

    test "get_template!/1 returns the template with given id" do
      template = template_fixture()
      assert ContractTemplate.get_template!(template.id) == template
    end

    test "create_template/1 with valid data creates a template" do
      temp_att = brand_fixture()
      assert {:ok, %Template{} = template} = ContractTemplate.create_template(temp_att)
      assert template.file_path == "some file_path"
    end

    test "create_template/1 with invalid data returns error changeset" do
      assert {:error, %Ecto.Changeset{}} = ContractTemplate.create_template(@invalid_attrs)
    end

    test "update_template/2 with valid data updates the template" do
      template = template_fixture()

      assert {:ok, %Template{} = template} =
               ContractTemplate.update_template(template, @update_attrs)

      assert template.file_path == "some updated file_path"
    end

    test "update_template/2 with invalid data returns error changeset" do
      template = template_fixture()

      assert {:error, %Ecto.Changeset{}} =
               ContractTemplate.update_template(template, @invalid_attrs)

      assert template == ContractTemplate.get_template!(template.id)
    end

    test "delete_template/1 deletes the template" do
      template = template_fixture()
      assert {:ok, %Template{}} = ContractTemplate.delete_template(template)
      assert_raise Ecto.NoResultsError, fn -> ContractTemplate.get_template!(template.id) end
    end

    test "change_template/1 returns a template changeset" do
      template = template_fixture()
      assert %Ecto.Changeset{} = ContractTemplate.change_template(template)
    end
  end
end
