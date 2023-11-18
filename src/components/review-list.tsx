import { db } from "@/db";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Button } from "./ui/button";
import { Separator } from "./ui/separator";
import { users } from "@/db/schema";
import { eq } from "drizzle-orm";

interface IReview {
  userId: string;
  courseId: string;
  reviewBody: string;
  overallRating: number;
  difficultyRating: number;
  workloadRating: number;
  usefulnessRating: number;
  instructor: string;
  createdAt: Date;
}

interface ReviewListParams {
  reviews: IReview[];
}

export default async function ReviewList({ reviews }: ReviewListParams) {
  return (
    <div className="mx-auto px-4 md:px-6 max-w-2xl">
      {reviews.map(async (review, index) => {
        const [author] = await db
          .select()
          .from(users)
          .where(eq(users.id, review.userId));
        return (
          <>
            {index > 0 ? <Separator /> : null}
            <div className="flex gap-4 my-6">
              <Avatar className="w-10 h-10 border">
                <AvatarImage alt={author.name ?? ""} src={author.image ?? ""} />
                <AvatarFallback>{author.name}</AvatarFallback>
              </Avatar>
              <div className="grid gap-4">
                <div className="flex gap-4 items-start">
                  <div className="grid gap-0.5 text-sm">
                    <h3 className="font-semibold">{author.name}</h3>
                    <time className="text-sm text-zinc-500 dark:text-zinc-400">
                      {review.createdAt.toDateString()}
                    </time>
                  </div>
                </div>
                <div className="text-sm leading-loose text-zinc-500 dark:text-zinc-400">
                  <p>{review.reviewBody}</p>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </div>
  );
}
