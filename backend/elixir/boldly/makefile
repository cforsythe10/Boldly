creator_schema:
	mix phx.gen.context CreatorAccount Creator creators id:uuid:unique name:string birthday:date values:string industry:string interests:string location:string email:string:unique

creator_endpoint:
	mix phx.gen.json CreatorAccount Creator creators id:uuid name:string birthday:date values:string industry:string interests:string location:string email:string --no-context --no-schema


brand_schema:
	mix phx.gen.context BrandAccount Brand brands id:uuid:unique ecommerce:boolean location:string industries:string values:string email:string

brand_endpoint:
	mix phx.gen.json BrandAccount Brand brands id:uuid ecommerce:boolean location:string industries:string values:string email:string

remove_creator_schema:
	rm -rf lib/boldly/creator*
	rm -rf priv/repo/migrations/*creators*
	rm -rf test/boldly/*creator*
