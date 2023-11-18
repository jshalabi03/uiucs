import { ReviewForm } from "@/components/review-form";
import { getCourseById } from "@/lib/course-utils";
import { notFound } from "next/navigation";

interface ReviewFormPageProps {
  params: { courseId: string };
}

export default function ReviewFormPage({
  params: { courseId },
}: ReviewFormPageProps) {
  const course = getCourseById(courseId);
  if (!course) {
    notFound();
  }
  return (
    <>
      <ReviewForm course={course} />
    </>
  );
}
