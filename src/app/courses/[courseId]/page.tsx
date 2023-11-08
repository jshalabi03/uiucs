import { WriteReviewDialog } from "@/components/write-review-dialog";

import { notFound } from "next/navigation";

import { courses } from "@/config/courses";
import { findCourse } from "@/lib/course-utils";

interface CoursePageParams {
  params: { courseId: string };
}

export default function CoursePage({ params: { courseId } }: CoursePageParams) {
  console.log("courseid: ", courseId);
  const course = findCourse(courseId);

  if (!course) {
    notFound();
  }

  return (
    <main className="flex flex-col items-center justify-between p-8 space-y-4">
      <h1 className="text-2xl">Reviews for {course.title}.</h1>
      <p>
        Taken the course? Write a review! <WriteReviewDialog course={course} />
      </p>
    </main>
  );
}

export async function generateStaticParams() {
  return courses.map((course) => ({
    courseId: `${course.subjectCode}${course.courseNumber}`,
  }));
}
