.PHONY: setup_dbs

ELIXIR_BACKG_PROCESS = $(shell pgrep -f erlang)

run: setup_dbs
	mix phx.server

git-reset: export BOLDLY_POSTGRES_ENDPOINT = boldy-base.cmnonc0gggxh.us-east-2.rds.amazonaws.com
git-reset: stop-aws-detached
	mix ecto.drop


setup_dbs: get_deps
	mix ecto.reset
	MIX_ENV=test mix ecto.reset

run-aws-detached: export BOLDLY_POSTGRES_ENDPOINT = boldy-base.cmnonc0gggxh.us-east-2.rds.amazonaws.com
run-aws-detached: setup-aws-psql
	elixir --erl "-detached" -S mix phx.server

stop-aws-detached:
	$(shell kill $(ELIXIR_BACKG_PROCESS))

aws-test: export BOLDLY_POSTGRES_ENDPOINT = boldy-base.cmnonc0gggxh.us-east-2.rds.amazonaws.com
aws-test: setup-aws-psql
	mix phx.server

setup-aws-psql: export BOLDLY_POSTGRES_ENDPOINT = boldy-base.cmnonc0gggxh.us-east-2.rds.amazonaws.com
setup-aws-psql: get_deps
	mix ecto.setup

reset-aws-db: export BOLDLY_POSTGRES_ENDPOINT = boldy-base.cmnonc0gggxh.us-east-2.rds.amazonaws.com
reset-aws-db:
	mix ecto.drop

contract_template_schema:
	mix phx.gen.context ContractTemplate Template templates file_path:string

contract_template_endpoint:
	mix phx.gen.json ContractTemplate Template templates file_path:string --no-context --no-schema

signed_contract_schema:
	mix phx.gen.context SignedContract Contract contracts id:uuid file_path:string

signed_contract_endpoint:
	mix phx.gen.json SignedContract Contract contracts id:uuid file_path:string --no-context --no-schema

campaign_participant_schema:
	mix phx.gen.context CampaignPart Participant participants is_deleted:boolean is_active:boolean

campaign_participant_endpoint:
	mix phx.gen.json CampaignPart Participant participants is_deleted:boolean is_active:boolean --no-context --no-schema

creator_schema:
	mix phx.gen.context CreatorAccount Creator creators id:uuid:unique name:string birthday:date values:string industry:string interests:string location:string email:string:unique

creator_endpoint:
	mix phx.gen.json CreatorAccount Creator creators id:uuid name:string birthday:date values:string industry:string interests:string location:string email:string --no-context --no-schema

brand_schema:
	mix phx.gen.context BrandAccount Brand brands id:uuid:unique ecommerce:boolean location:string industries:string values:string email:string

brand_endpoint:
	mix phx.gen.json BrandAccount Brand brands id:uuid ecommerce:boolean location:string industries:string values:string email:string --no-context --no-schema

remove_brand_enpoint:
	rm -rf lib/boldly_web/**/*brand*
	rm -rf priv/repo/migrations/*brands*
	rm -rf test/boldly_web/controllers/brand*

remove_creator_schema:
	rm -rf lib/boldly/creator*
	rm -rf priv/repo/migrations/*creators*
	rm -rf test/boldly/*creator*

interests_schema:
	mix phx.gen.context InterestInfo Interest interests \
	interest:string categories:string

interests_endpoint:
	mix phx.gen.json InterestInfo Interest interests \
	interest:string categories:string --no-context --no-schema

campaign_schema:
	mix phx.gen.context CampaignInfo Campaign campaigns uuid:uuid:unique launched_by:references:brands \
	name:string start_date:date end_date:date photo_reference:string \
	description:string values:string creator_responsibilities:string \
	age_range:string compensation:string \
	desired_engagement_rate:integer perks:string industry:string \
	interests:string location:string specific_to_location:boolean \
	is_draft:boolean

campaign_endpoint:
	mix phx.gen.json CampaignInfo Campaign campaigns uuid:uuid launched_by:references:brands \
	name:string start_date:date end_date:date photo_reference:string \
	description:string values:string creator_responsibilities:string \
	age_range:string compensation:string \
	desired_engagement_rate:integer perks:string industry:string \
	interests:string location:string specific_to_location:boolean \
	is_draft:boolean --no-context --no-schema

remove_campaign_schema:
	rm -rf lib/boldly/campaign*
	rm -rf priv/repo/migrations/*campaign*
	rm -rf test/boldly/*campaign*

remove_campaign_enpoint:
	rm -rf lib/boldly_web/**/*campagn*
	rm -rf priv/repo/migrations/*campaigns*
	rm -rf test/boldly_web/controllers/campaign*

get_deps:
	mix deps.get
