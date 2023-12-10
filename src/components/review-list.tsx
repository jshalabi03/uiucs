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
    <>
      <div className="font-bold text-2xl">Reviews</div>
      <div className="mx-auto px-4 md:px-6 max-w-2xl">
        {reviews.length === 0 ? "No reviews yet!" : null}
        {reviews.map(async (review, index) => {
          const [author] = await db
            .select()
            .from(users)
            .where(eq(users.id, review.userId));
          return (
            <>
              {index > 0 ? <Separator /> : null}
              <div className="border-2 border-gray-300 rounded-lg p-6 flex gap-4 my-6 w-[950px]">
                <Avatar className="w-10 h-10 border">
                  <AvatarImage
                    alt={author.name ?? ""}
                    src={author.image ?? ""}
                  />
                  <AvatarFallback>{author.name}</AvatarFallback>
                </Avatar>
                <div className="grid gap-4">
                  <div className="flex gap-4 items-start">
                    <div className="grid gap-0.5 text-sm">
                      <h3 className="font-semibold">{author.name}</h3>
                      <time className="text-sm text-zinc-500 dark:text-zinc-400">
                        {review.createdAt.toDateString()}
                      </time>
                      <p className="text-sm text-zinc-500 mt-2">
                        Taken with{" "}
                        <span className="font-bold">{review.instructor}</span>
                      </p>
                    </div>
                  </div>
                  <Separator />
                  <div className="text-md leading-loose text-gray-600 dark:text-zinc-400">
                    <p>{review.reviewBody}</p>
                  </div>
                  <Separator />
                  <div className="flex flex-col space-y-2">
                    <div>
                      Overall:{" "}
                      <span className="font-bold">{review.overallRating}</span>
                    </div>
                    <div>
                      Difficulty:{" "}
                      <span className="font-bold">
                        {review.difficultyRating}
                      </span>
                    </div>
                    <div>
                      Workload:{" "}
                      <span className="font-bold">{review.workloadRating}</span>
                    </div>
                    <div>
                      Usefulness:{" "}
                      <span className="font-bold">
                        {review.usefulnessRating}
                      </span>
                    </div>
                  </div>
                  {/* <pre>{JSON.stringify(review, null, 2)}</pre> */}
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
