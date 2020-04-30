use Mix.Config

db_host = System.get_env("BOLDLY_POSTGRES_ENDPOINT", "localhost")


# Configure your database
config :boldly, Boldly.Repo,
  username: "postgres",
  password: "postgres",
  database: "boldly_test",
  hostname: db_host,
  pool: Ecto.Adapters.SQL.Sandbox

# We don't run a server during test. If one is required,
# you can enable the server option below.
config :boldly, BoldlyWeb.Endpoint,
  http: [port: 4002],
  server: false

# Print only warnings and errors during test
config :logger, level: :warn

config :bcrypt_elixir, :log_rounds, 4
