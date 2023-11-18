ALTER TABLE "review" ALTER COLUMN "review_body" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "review" ALTER COLUMN "overall_rating" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "review" ALTER COLUMN "difficulty_rating" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "review" ALTER COLUMN "workload_rating" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "review" ALTER COLUMN "usefulness_rating" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "review" ALTER COLUMN "instructor" SET DEFAULT 'Other';--> statement-breakpoint
ALTER TABLE "review" ALTER COLUMN "instructor" SET NOT NULL;--> statement-breakpoint
ALTER TABLE "review" ALTER COLUMN "created_at" SET NOT NULL;