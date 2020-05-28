defmodule ExAws.Mixfile do
  use Mix.Project

  @version "2.1.3"

  def project do
    [
      app: :ex_aws,
      version: @version,
      elixir: "~> 1.4",
      elixirc_paths: elixirc_paths(Mix.env()),
      description: "Generic AWS client",
      name: "ExAws",
      source_url: "https://github.com/ex-aws/ex_aws",
      package: package(),
      dialyzer: [flags: "--fullpath"],
      deps: deps(),
      docs: [
        main: "ExAws",
        source_ref: "v#{@version}",
        source_url: "https://github.com/ex-aws/ex_aws"
      ]
    ]
  end

  def application do
    [extra_applications: [:logger, :crypto], mod: {ExAws, []}]
  end

  defp elixirc_paths(:test), do: ["lib", "test/support"]
  defp elixirc_paths(_), do: ["lib"]

  defp deps() do
    [
      {:sweet_xml, "~> 0.6", optional: true},
      {:ex_doc, "~> 0.16", only: [:dev, :test]},
      {:hackney, "~> 1.9", optional: true},
      {:jason, "~> 1.1", optional: true},
      {:jsx, "~> 2.8", optional: true},
      {:dialyze, "~> 0.2.0", only: [:dev, :test]},
      {:mox, "~> 0.3", only: :test},
      {:bypass, "~> 1.0", only: :test},
      {:configparser_ex, "~> 4.0", optional: true}
    ]
  end

  defp package do
    [
      description:
        "AWS client. Currently supports Dynamo, DynamoStreams, EC2, Firehose, Kinesis, KMS, Lambda, RRDS, Route53, S3, SES, SNS, SQS, STS",
      files: ["priv", "lib", "config", "mix.exs", "README*"],
      maintainers: ["Ben Wilson"],
      licenses: ["MIT"],
      links: %{github: "https://github.com/ex-aws/ex_aws"}
    ]
  end
end
