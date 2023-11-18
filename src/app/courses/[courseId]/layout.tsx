import { Icons } from "@/components/icons";
import { Button } from "@/components/ui/button";
import { courses } from "@/config/courses";
import { getCourseById } from "@/lib/course-utils";
import { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

export async function generateStaticParams() {
  return courses.map((course) => ({
    courseId: `${course.subjectCode}${course.courseNumber}`,
  }));
}

export const metadata: Metadata = {};

interface CourseLayoutParams {
  params: { courseId: string };
  children: React.ReactNode;
  review: React.ReactNode;
}

export default function CourseLayout({
  params: { courseId },
  children,
  review,
}: CourseLayoutParams) {
  const course = getCourseById(courseId);
  if (!course) {
    notFound();
  }

  return (
    <main className="flex flex-col items-center justify-between p-8 space-y-4">
      <h1 className="text-2xl">
        Reviews for{" "}
        <span className="font-bold">
          {courseId} - {course.title}
        </span>
        .
      </h1>
      {children}
      {review}
    </main>
  );
}
