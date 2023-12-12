import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Course } from "@/config/courses";
import { cn } from "@/lib/utils";
import { getColorForCourse, getCourseId } from "@/lib/course-utils";
import { db } from "@/db";
import { eq } from "drizzle-orm";
import { reviews as reviewsTable } from "@/db/schema";
import { useCallback } from "react";
import { ReviewStats } from "@/lib/types";

interface ReviewRatings {
  overallRating: number;
  difficultyRating: number;
  workloadRating: number;
  usefulnessRating: number;
}

interface CourseCardParams {
  course: Course;
  stats: ReviewStats | null;
}

export default function CourseCard({ course, stats }: CourseCardParams) {
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
                <div className={`font-bold text-lg`}>{stats?.count ?? 0}</div>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white">
            <div className="text-gray-700">Ratings</div>
            {stats ? (
              <div className="grid grid-cols-2">
                <div className="text-center">
                  <div className={`font-bold`}>
                    {stats.difficultyRating.toFixed(2)}
                  </div>
                  <div className="text-xs text-gray-600">Difficulty</div>
                </div>
                <div className="text-center">
                  <div className={`font-bold`}>
                    {stats.overallRating.toFixed(2)}
                  </div>
                  <div className="text-xs text-gray-600">Overall</div>
                </div>
                <div className="text-center">
                  <div className={`font-bold`}>
                    {stats.workloadRating.toFixed(2)}
                  </div>
                  <div className="text-xs text-gray-600">Workload</div>
                </div>
                <div className="text-center">
                  <div className={`font-bold`}>
                    {stats.usefulnessRating.toFixed(2)}
                  </div>
                  <div className="text-xs text-gray-600">Usefulness</div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-2">
                <div className="text-center">
                  <div className={`font-bold`}>N/A</div>
                  <div className="text-xs text-gray-600">Difficulty</div>
                </div>
                <div className="text-center">
                  <div className={`font-bold`}>N/A</div>
                  <div className="text-xs text-gray-600">Overall</div>
                </div>
                <div className="text-center">
                  <div className={`font-bold`}>N/A</div>
                  <div className="text-xs text-gray-600">Workload</div>
                </div>
                <div className="text-center">
                  <div className={`font-bold`}>N/A</div>
                  <div className="text-xs text-gray-600">Usefulness</div>
                </div>
              </div>
            )}
          </div>
        </Card>
      </div>
    </Link>
  );
}
