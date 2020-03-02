.PHONY=all



setup-creators:
	mix phx.gen.context CreatorAccount Creator creators uuid:uuid:unique name:string birthday:date selectedvalues:string industry:string interests:string location:string email:string:unique 
