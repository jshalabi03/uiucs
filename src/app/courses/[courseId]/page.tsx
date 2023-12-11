import { ReviewForm } from "@/components/review-form";

import { notFound } from "next/navigation";

import { courses } from "@/config/courses";
import { getCourseById } from "@/lib/course-utils";
import Link from "next/link";
import { OpenReviewDialog } from "@/components/open-review-dialog";
import ReviewList from "@/components/review-list";
import ReviewStats, { CourseStatistics } from "@/components/review-stats";
import { Button } from "@/components/ui/button";
import { Icons } from "@/components/icons";
import { db } from "@/db";
import { reviews as reviewsTable } from "@/db/schema";
import { eq } from "drizzle-orm";

interface CoursePageParams {
  params: { courseId: string };
}

export default async function CoursePage({
  params: { courseId },
}: CoursePageParams) {
  const course = getCourseById(courseId);
  if (!course) {
    notFound();
  }

  const reviews = await db
    .select()
    .from(reviewsTable)
    .where(eq(reviewsTable.courseId, courseId));

  const stats: CourseStatistics = reviews.reduce(
    (acc, review) => {
      acc.overallRating += review.overallRating;
      acc.workloadRating += review.workloadRating;
      acc.difficultyRating += review.difficultyRating;
      acc.usefulnessRating += review.usefulnessRating;
      acc.numReviews += 1;
      return acc;
    },
    {
      overallRating: 0,
      workloadRating: 0,
      difficultyRating: 0,
      usefulnessRating: 0,
      numReviews: 0,
    }
  );

  // Calculate averages
  stats.overallRating /= stats.numReviews;
  stats.workloadRating /= stats.numReviews;
  stats.difficultyRating /= stats.numReviews;
  stats.usefulnessRating /= stats.numReviews;

  return (
    <>
      <div className="flex flex-row text-center align-center space-x-2">
        <p className="text-lg">Taken the course?</p>
        <Button asChild>
          <Link href={`${courseId}/review`}>
            <Icons.pen_square className="w-5 h-5 m-1" /> Write a review
          </Link>
        </Button>
      </div>
      {stats.numReviews === 0 ? null : <ReviewStats stats={stats} />}
      <ReviewList reviews={reviews} />
    </>
  );
}
