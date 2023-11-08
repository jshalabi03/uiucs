import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

import Link from "next/link";

import { Course } from "@/config/courses";

interface CourseCardParams {
  course: Course;
}

export default function CourseCard({ course }: CourseCardParams) {
  return (
    <Link href={`/courses/${course.subjectCode}${course.courseNumber}`}>
      <Card className="transform transition duration-300 ease-in-out hover:scale-105 hover:bg-orange-200">
        <CardHeader>
          <CardTitle>
            {course.subjectCode} {course.courseNumber}
          </CardTitle>
          <CardDescription>{course.title}</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="text-gray-500 mb-4">
            Credit: {course.creditHoursStr}
          </div>
        </CardContent>
      </Card>
    </Link>
  );
}
