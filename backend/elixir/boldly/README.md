# Boldly #
<!-- TOC START min:1 max:3 link:true asterisk:false update:true -->
- [Boldly #](#boldly-)
  - [Makefile](#makefile)
  - [Operating on AWS](#operating-on-aws)
    - [Updating Tables/Schemas](#updating-tablesschemas)
    - [Stopping the Background Process](#stopping-the-background-process)
    - [Other Commands](#other-commands)
  - [Campaign creation](#campaign-creation)
  - [Conversations/Messaging API instructions](#conversationsmessaging-api-instructions)
    - [Creating a Conversation](#creating-a-conversation)
    - [Get Conversation](#get-conversation)
    - [Getting all conversations of a user](#getting-all-conversations-of-a-user)
    - [Create Message](#create-message)
    - [Get all messages in a conversation](#get-all-messages-in-a-conversation)
  - [Learn more](#learn-more)
<!-- TOC END -->



To start your Phoenix server:

  * Install dependencies with `mix deps.get`
  * Create and migrate your database with `mix ecto.setup`
  * Start Phoenix endpoint with `mix phx.server`

Now you can visit [`localhost:4000`](http://localhost:4000) from your browser.

## Makefile

`PLEASE` do not run anything aside from the following commands unless you know what you're doing (these commands should be prefaced with the word `make` from the command line).

Ready to run in production? Please [check our deployment guides](https://hexdocs.pm/phoenix/deployment.html).


## Operating on AWS

The following are instructions on what `MAKE` commands to run for the server and when.

All commands should be run from `Boldly/backend/elixir/boldly`.

### Updating Tables/Schemas

**Before you pull from github**, make sure you run this command: `make git-reset`. **THIS WILL DELETE ALL DATA IN THE DATABASE**

Then, once the latest schemas/migrations have been pulled from github, test it with `make aws-test` and make a few API calls to ensure everything is working.

If everything is fine, run `make run-aws-detached`. This will run it as a background process, and you can exit your shell without worry.

### Stopping the Background Process

Run `make stop-aws-detached` if you just wish to stop the process from running without deleting anything from the database. This will find the process and kill it automatically.

### Other Commands

`make setup-aws-psql` - runs `mix ecto.setup` to setup the DB with the appropriate tables and fields. *Do not run when the process is running in the background*

`make reset-aws-db` - runs `mix ecto.drop` to delete all the tables and their associated data. *Do not run when the process is running in the background*


## Campaign creation

`endpoint: /api/campaigns`

`Request Type: POST`

The following is an example payload to create a campaign

```json
{
	"campaign": {
		"age_range": "18-45",
		"compensation": "$400",
		"creator_responsibilities": "don't fucking die - get moolah for me",
		"description": "fool the sheep into joining the klimmek",
		"desired_engagement_rate": 55,
		"start_date": "2020-06-01",
		"end_date": "2020-07-01",
		"industry": "test",
		"interests": "public toilet",
		"is_draft": false,
		"location": "everywhere",
		"name": "Sam's Favorite Campaign",
		"perks": "Juggernaut?",
		"photo_reference": "not_implemented_yet",
		"specific_to_location": false,
		"values": "val1,val2",
		"launched_by": 1
	}
}
```

## Conversations/Messaging API instructions

__*READ THE FOLLOWING CAREFULLY*__. Note the difference when the endpoint is *plural* vs *singular*.

### Creating a Conversation
`endpoint: /api/conversations`

`Request Type: POST`

JSON Payload:
```json
{
  "conversation": {
    "brand_id": 1,
    "creator_id": 1
  }
}
```


### Get Conversation

`endpoint: /api/conversation`

`Request Type: POST`

JSON Payload:
```json
{
  "brand_id": 1,
  "creator_id": 1
}
```

### Getting all conversations of a user

`endpoint: /api/conversations/all`

`Request Type: POST`

JSON Payload:

1)
```json
{
  "brand_id": 1
}
```

__OR__

2)
```json
{
  "creator_id": 1
}
```

### Create Message

`endpoint: /api/messages`

`Request Type: POST`

JSON Payload:
```json
{
  "message": {
    "content": "message_content",
    "date": "2000-01-01 12:00:00Z",
    "sent_by_creator": true,
    "conversation_id": 1
  }
}

```

### Get all messages in a conversation

`endpoint: /api/message`

`Request Type: POST`

JSON Payload:
```json
{
  "conversation_id": 1
}
```

It will return all messages in descending order by date (newest first)

## Learn more

  * Official website: http://www.phoenixframework.org/
  * Guides: https://hexdocs.pm/phoenix/overview.html
  * Docs: https://hexdocs.pm/phoenix
  * Mailing list: http://groups.google.com/group/phoenix-talk
  * Source: https://github.com/phoenixframework/phoenix
