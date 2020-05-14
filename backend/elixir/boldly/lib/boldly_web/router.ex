defmodule BoldlyWeb.Router do
  use BoldlyWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
    plug :fetch_session
  end

  pipeline :api_auth do
    # plug :ensure_authenticated
  end

  scope "/api", BoldlyWeb do
    pipe_through :api
    post "/brands/sign_in", BrandController, :sign_in
    post "/creators/sign_in", CreatorController, :sign_in
    post "/users/sign_in", UserController, :sign_in
    post "/creators/increment", CreatorController, :increment_views
    post "/brands/increment", BrandController, :increment_views
    resources "/campaign_participants", ParticipantController, except: [:new, :edit]
    resources "/contracts", ContractController, except: [:new, :edit]
    resources "/templates", TemplateController, except: [:new, :edit]
    resources "/conversations", ConversationController, except: [:new, :edit]
    resources "/messages", MessageController, except: [:new, :edit, :update]
    post "/message", MessageController, :show_conv

    post "/conversation", ConversationController, :show_conv
  end

  scope "/api", BoldlyWeb do
    pipe_through [:api, :api_auth]
    resources "/brands", BrandController, except: [:new, :edit]
    resources "/creators", CreatorController, except: [:new, :edit]
    resources "/campaigns", CampaignController, except: [:new, :edit]
  end

  defp ensure_authenticated(conn, _opts) do
    current_user_id = get_session(conn, :current_user_id)

    if current_user_id do
      conn
    else
      conn
      |> put_status(:unauthorized)
      |> put_view(BoldlyWeb.ErrorView)
      |> render("401.json", message: "Unauthenticated user")
      |> halt()
    end
  end
end
