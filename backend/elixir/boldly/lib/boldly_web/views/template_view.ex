defmodule BoldlyWeb.TemplateView do
  use BoldlyWeb, :view
  alias BoldlyWeb.TemplateView

  def render("index.json", %{templates: templates}) do
    %{data: render_many(templates, TemplateView, "template.json")}
  end

  def render("show.json", %{template: template}) do
    %{data: render_one(template, TemplateView, "template.json")}
  end

  def render("template.json", %{template: template}) do
    %{id: template.id, file_path: template.file_path, brand_uuid: template.brand_uuid}
  end
end
