import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";

import { Course } from "@/config/courses";

interface CourseCardProps {
  course: Course;
}

export default function CourseCard({ course }: CourseCardProps) {
  return (
    <Card>
      <CardHeader>
        <CardTitle>
          <Link
            className="hover:underline"
            href={`/courses/${course.subjectCode}${course.courseNumber}`}
          >
            {course.subjectCode} {course.courseNumber}
          </Link>
        </CardTitle>
        <CardDescription>{course.title}</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="text-gray-500 mb-4">
          Credit Hours: {course.creditHours}
        </div>
      </CardContent>
    </Card>
  );
}
