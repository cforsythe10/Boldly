# This file is responsible for configuring your application
# and its dependencies with the aid of the Mix.Config module.
#
# This configuration file is loaded before any dependency and
# is restricted to this project.

# General application configuration
use Mix.Config

db_host = System.get_env("BOLDLY_POSTGRES_ENDPOINT")
hostn = if db_host, do: db_host, else: "localhost"

config :boldly,
  ecto_repos: [Boldly.Repo],
  migration_timestamps: [type: :utc_datetime_usec],
  database: "postgres",
  username: "postgres",
  password: "postgres",
  hostname: hostn

# url_n = if db_host, do: "ec2-3-23-96-218.us-east-2.compute.amazonaws.com", else: "localhost"

# Configure AWS stuffs
config :ex_aws,
access_key_id: System.get_env("AWS_ACCESS_KEY_ID"),
secret_access_key: System.get_env("AWS_SECRET_ACCESS_KEY"),
region: "us-east-2"


config :ex_aws, :hackney_opts, follow_redirects: true, recv_timeout: 30_000

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
