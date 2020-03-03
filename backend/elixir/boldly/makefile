.PHONY: setup_dbs


run: setup_dbs
	mix phx.server

setup_dbs: get_deps
	mix ecto.reset
	MIX_ENV=test mix ecto.reset

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

campaign_schema:
	mix phx.gen.context id:uuid:unique launched_by:references:brands \
	name:string start_date:date end_date:date photo_reference:string \
	description:string values:string creator_responsibilities:string \
	age_range:string compensation:string desired_engagement_rate:int \
	perks:string industry:string interests:string location:string \
	specific_to_location:boolean

get_deps:
	mix deps.get
