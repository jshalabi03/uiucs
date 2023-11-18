CREATE TABLE IF NOT EXISTS "review" (
	"userId" text NOT NULL,
	"course_id" text NOT NULL,
	"review_body" text,
	"overall_rating" integer,
	"difficulty_rating" integer,
	"workload_rating" integer,
	"usefulness_rating" integer,
	"instructor" text,
	CONSTRAINT review_userId_course_id PRIMARY KEY("userId","course_id")
);
--> statement-breakpoint
DO $$ BEGIN
 ALTER TABLE "review" ADD CONSTRAINT "review_userId_user_id_fk" FOREIGN KEY ("userId") REFERENCES "user"("id") ON DELETE cascade ON UPDATE no action;
EXCEPTION
 WHEN duplicate_object THEN null;
END $$;
