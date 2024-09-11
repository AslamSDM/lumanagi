CREATE TABLE IF NOT EXISTS "users" (
	"id" text PRIMARY KEY NOT NULL,
	"address" text NOT NULL,
	"referralCode" text NOT NULL,
	"referredById" text,
	"created_at" timestamp with time zone DEFAULT now(),
	CONSTRAINT "users_address_unique" UNIQUE("address"),
	CONSTRAINT "users_referralCode_unique" UNIQUE("referralCode")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "users" ADD CONSTRAINT "users_referredById_users_id_fk" FOREIGN KEY ("referredById") REFERENCES "public"."users"("id") ON DELETE set null ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
