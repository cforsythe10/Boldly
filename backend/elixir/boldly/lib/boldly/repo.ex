defmodule Boldly.Repo do
  use Ecto.Repo,
    otp_app: :boldly,
    adapter: Ecto.Adapters.Postgres
end
