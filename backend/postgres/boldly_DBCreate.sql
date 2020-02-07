CREATE TABLE brands (
	"UUID" uuid NOT NULL,
	"Name" char NOT NULL,
	"Location" char NOT NULL,
	"Industry" char NOT NULL,
	"Brand Values" char NOT NULL,
	"Email" char NOT NULL,
	CONSTRAINT "Brands_pk" PRIMARY KEY ("UUID")
) WITH (
  OIDS=FALSE
);

CREATE TABLE creators (
	"UUID" uuid NOT NULL,
	"Name" char NOT NULL,
	"Birthday" DATE NOT NULL,
	"Selected Values" char NOT NULL,
	"Industry" char NOT NULL,
	"Interests" char NOT NULL,
	"Location" char NOT NULL,
	"Email" char NOT NULL,
	"contractID" uuid NOT NULL,
	CONSTRAINT "Creators_pk" PRIMARY KEY ("UUID")
) WITH (
  OIDS=FALSE
);

CREATE TABLE bold_academy (
	"faq" json NOT NULL,
	"module" json NOT NULL,
	"cModule" point NOT NULL,
	"cUUID" uuid NOT NULL
) WITH (
  OIDS=FALSE
);

CREATE TABLE contracts (
	"docHash" character NOT NULL,
	"docPass" character NOT NULL,
	"documentName" character NOT NULL
) WITH (
  OIDS=FALSE
);

CREATE TABLE messages (
	"inbox" bigint NOT NULL,
	"ongoingC" json NOT NULL,
	"sent" bigint NOT NULL,
	"cUUID" uuid NOT NULL,
	"bUUID" uuid NOT NULL
) WITH (
  OIDS=FALSE
);

CREATE TABLE survey (
	"brandQ" char NOT NULL,
	"creatorQ" char NOT NULL,
	"profileQ" char NOT NULL,
	"locationQ" char NOT NULL,
	"cUUID" uuid NOT NULL,
	"bUUID" uuid NOT NULL
) WITH (
  OIDS=FALSE
);

CREATE TABLE c_settings (
	"nightMode" BOOLEAN NOT NULL,
	"cUUID" uuid NOT NULL
) WITH (
  OIDS=FALSE
);

CREATE TABLE b_settings (
	"bUUID" uuid NOT NULL,
	"nightMode" BOOLEAN NOT NULL
) WITH (
  OIDS=FALSE
);

CREATE TABLE insightsandstats (
	"cUUID" uuid,
	"bUUID" uuid
) WITH (
  OIDS=FALSE
);

CREATE TABLE campaign_info (
	"UUID" uuid NOT NULL,
	"launched_by" uuid NOT NULL,
	"Title" char NOT NULL,
	"Description" char NOT NULL,
	"start_date" DATE NOT NULL,
	"end_date" DATE NOT NULL,
	"image_reference" point NOT NULL,
	"campaign_values" char NOT NULL,
	"looking_for_creators" char NOT NULL,
	"social_platforms_used" char NOT NULL,
	"start_age_range" int NOT NULL,
	"end_age_range" int NOT NULL,
	"desired_follower_count" int NOT NULL,
	"engagement_rate" DECIMAL NOT NULL,
	"desired_num_posts_per_week" int NOT NULL
) WITH (
  OIDS=FALSE
);


ALTER TABLE bold_academy ADD CONSTRAINT "bold_academy_fk0" FOREIGN KEY ("cUUID") REFERENCES creators("UUID");


ALTER TABLE messages ADD CONSTRAINT "messages_fk0" FOREIGN KEY ("cUUID") REFERENCES creators("UUID");
ALTER TABLE messages ADD CONSTRAINT "messages_fk1" FOREIGN KEY ("bUUID") REFERENCES brands("UUID");

ALTER TABLE survey ADD CONSTRAINT "Survey_fk0" FOREIGN KEY ("cUUID") REFERENCES creators("UUID");
ALTER TABLE survey ADD CONSTRAINT "Survey_fk1" FOREIGN KEY ("bUUID") REFERENCES brands("UUID");

ALTER TABLE c_settings ADD CONSTRAINT "c_settings_fk0" FOREIGN KEY ("cUUID") REFERENCES creators("UUID");

ALTER TABLE b_settings ADD CONSTRAINT "b_settings_fk0" FOREIGN KEY ("bUUID") REFERENCES brands("UUID");

ALTER TABLE insightsandstats ADD CONSTRAINT "insightsandstats_fk0" FOREIGN KEY ("cUUID") REFERENCES creators("UUID");
ALTER TABLE insightsandstats ADD CONSTRAINT "insightsandstats_fk1" FOREIGN KEY ("bUUID") REFERENCES brands("UUID");

ALTER TABLE campaign_info ADD CONSTRAINT "campaign_information_fk0" FOREIGN KEY ("UUID") REFERENCES creators("UUID");
