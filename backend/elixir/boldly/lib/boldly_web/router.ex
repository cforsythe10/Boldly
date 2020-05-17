defmodule BoldlyWeb.Router do
  use BoldlyWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
    plug :fetch_session
    # plug :conv_from_json
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

    resources "/interests", InterestController, except: [:new, :edit]

    post "/message", MessageController, :show_conv
    post "/conversation", ConversationController, :show_conv
    post "/conversations/all", ConversationController, :get_conversations
    post "/contract", ContractController, :get_all_contracts

    post "/campaigns/match", ParticipantController, :match_creators
    post "/campaigns/matches", ParticipantController, :get_creators_in_campaign

    post "/campaign/apply", ParticipantController, :apply_to_campaign
  end

  scope "/api", BoldlyWeb do
    pipe_through [:api, :api_auth]
    resources "/brands", BrandController, except: [:new, :edit]
    resources "/creators", CreatorController, except: [:new, :edit]
    resources "/campaigns", CampaignController, except: [:new, :edit]
  end

  defp conv_from_json(conn, _opts) do
    string_key_map = conn.body_params

    temp = for {key, val} <- string_key_map, into: %{}, do: {String.to_existing_atom(key), val}
    # IO.puts( temp)
    assign(conn, :body_params, temp)
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
