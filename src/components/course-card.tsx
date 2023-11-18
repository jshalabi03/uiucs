import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Course } from "@/config/courses";
import { cn } from "@/lib/utils";
import { getColorForCourse, getCourseId } from "@/lib/course-utils";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { reviews as reviewsTable } from "@/db/schema";
import { useCallback } from "react";

interface ReviewRatings {
  overallRating: number;
  difficultyRating: number;
  workloadRating: number;
  usefulnessRating: number;
}

interface CourseCardParams {
  course: Course;
}

export default async function CourseCard({ course }: CourseCardParams) {
  // const reviews = await db
  //   .select()
  //   .from(reviewsTable)
  //   .where(eq(reviewsTable.courseId, getCourseId(course)));

  // const numReviews = reviews.length;

  // const calculateRating = useCallback(
  //   (ratingType: keyof ReviewRatings) => {
  //     return (
  //       reviews.reduce((sum, review) => sum + review[ratingType], 0) /
  //       numReviews
  //     );
  //   },
  //   [reviews, numReviews]
  // );

  // const overallRating = calculateRating("overallRating");
  // const difficultyRating = calculateRating("difficultyRating");
  // const workloadRating = calculateRating("workloadRating");
  // const usefulnessRating = calculateRating("usefulnessRating");
  const overallRating = 0;
  const difficultyRating = 0;
  const workloadRating = 0;
  const usefulnessRating = 0;
  const numReviews = 0;

  return (
    <Link
      href={`/courses/${course.subjectCode}${course.courseNumber}`}
      passHref
    >
      <div className="cursor-pointer">
        <Card className="transform transition duration-300 ease-in-out hover:scale-105 hover:bg-orange-200 border border-gray-300">
          <div
            style={{ backgroundColor: getColorForCourse(course) }}
            className={`flex flex-col space-y-4 p-4`}
          >
            <div className="flex flex-col">
              <div className="font-bold text-xl md:text-2xl text-black md:text-left">
                {course.subjectCode} {course.courseNumber}
              </div>
              <div className="h-[3em] text-gray-700 text-left md:text-left line-clamp-2">
                {course.title}
              </div>
            </div>
            <div className="flex flex-col items-baseline">
              <div className="text-gray-700">
                Credit:{" "}
                <span className={`font-bold text-md`}>
                  {course.creditHoursStr}
                </span>
              </div>
              <div className="flex items-center">
                <div className="text-gray-700 mr-2">Number of reviews:</div>
                <div className={`font-bold text-lg`}>{numReviews}</div>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white">
            <div className="text-gray-700">Ratings</div>
            <div className="grid grid-cols-2">
              <div className="text-center">
                <div className={`font-bold`}>{difficultyRating}</div>
                <div className="text-xs text-gray-600">Difficulty</div>
              </div>
              <div className="text-center">
                <div className={`font-bold`}>{overallRating}</div>
                <div className="text-xs text-gray-600">Overall</div>
              </div>
              <div className="text-center">
                <div className={`font-bold`}>{workloadRating}</div>
                <div className="text-xs text-gray-600">Workload</div>
              </div>
              <div className="text-center">
                <div className={`font-bold`}>{usefulnessRating}</div>
                <div className="text-xs text-gray-600">Usefulness</div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Link>
  );
}
