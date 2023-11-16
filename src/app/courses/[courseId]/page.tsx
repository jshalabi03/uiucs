import { ReviewForm } from "@/components/review-form";

import { notFound } from "next/navigation";

import { courses } from "@/config/courses";
import { getCourseById } from "@/lib/course-utils";
import Link from "next/link";
import { OpenReviewDialog } from "@/components/open-review-dialog";

interface CoursePageParams {
  params: { courseId: string };
}

export default function CoursePage({ params: { courseId } }: CoursePageParams) {
  const course = getCourseById(courseId);
  if (!course) {
    notFound();
  }

  return (
    <main className="flex flex-col items-center justify-between p-8 space-y-4">
      <h1 className="text-2xl">Reviews for {course.title}.</h1>
      <p>
        Taken the course? Write a review! <OpenReviewDialog course={course} />
      </p>
    </main>
  );
}

export async function generateStaticParams() {
  return courses.map((course) => ({
    courseId: `${course.subjectCode}${course.courseNumber}`,
  }));
}
