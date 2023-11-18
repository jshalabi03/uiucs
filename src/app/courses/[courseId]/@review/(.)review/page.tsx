"use client";

import { ReviewForm } from "@/components/review-form";
import ReviewDrawer from "@/components/review/drawer";
import ReviewModal from "@/components/review/modal";
import { getCourseById } from "@/lib/course-utils";
import { notFound } from "next/navigation";
import { useLayoutEffect, useState } from "react";

export default function ReviewSlot({
  params: { courseId },
}: {
  params: { courseId: string };
}) {
  const course = getCourseById(courseId);
  if (!course) {
    notFound();
  }
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  const Component = isMobile ? ReviewDrawer : ReviewModal;

  return (
    <Component course={course}>
      <ReviewForm course={course} />
    </Component>
  );
}
