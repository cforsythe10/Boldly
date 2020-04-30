# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

db_host = System.get_env("BOLDLY_POSTGRES_ENDPOINT")

config :boldly,
  ecto_repos: [Boldly.Repo],
  migration_timestamps: [type: :utc_datetime_usec],
  database: "postgres",
  username: "postgres",
  password: "postgres",
  hostname: if db_host, do: db_host, else: "localhost"

# Configures the endpoint
config :boldly, BoldlyWeb.Endpoint,
  url: [host: "localhost"],
  secret_key_base: "iD1RirE9CFkDwO6DkAGd9q22tLVuylpfZA1RKQCVMLCG1VxzUuIs/bb3kLRRiwD0",
  render_errors: [view: BoldlyWeb.ErrorView, accepts: ~w(json)],
  pubsub: [name: Boldly.PubSub, adapter: Phoenix.PubSub.PG2]

# Configures Elixir's Logger
config :logger, :console,
  format: "$time $metadata[$level] $message\n",
  metadata: [:request_id]

# Use Jason for JSON parsing in Phoenix
config :phoenix, :json_library, Jason

# Import environment specific config. This must remain at the bottom
# of this file so it overrides the configuration defined above.
import_config "#{Mix.env()}.exs"
