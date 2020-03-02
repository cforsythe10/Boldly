defmodule BoldlyWeb.Router do
  use BoldlyWeb, :router

  pipeline :api do
    plug :accepts, ["json"]
  end

  scope "/api", BoldlyWeb do
    pipe_through :api
    resources "/users", UserController, except: [:new, :edit]
  end
end
