import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Course } from "@/config/courses";

interface CourseCardParams {
  course: Course;
}

export default function CourseCard({ course }: CourseCardParams) {
  return (
    <Link href={`/courses/${course.subjectCode}${course.courseNumber}`} passHref>
      <div className="cursor-pointer">
        <Card className="transform transition duration-300 ease-in-out hover:scale-105 hover:bg-orange-200 border border-gray-300">
          <div className="flex justify-between items-center bg-amber-100 p-4">
            <div>
              <div className="font-bold text-lg text-black">
                {course.subjectCode} {course.courseNumber}
              </div>
              <div className="text-gray-700">{course.title}</div>
            </div>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center">
                <div className="font-bold text-orange-500">{course.difficulty}</div>
                <div className="text-xs text-gray-600">Difficulty</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-orange-500">{course.reviews}</div>
                <div className="text-xs text-gray-600">Reviews</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-orange-500">{course.avgGPA}</div>
                <div className="text-xs text-gray-600">Avg GPA</div>
              </div>
            </div>
          </div>
          <div className="p-4 bg-white">
            <div className="flex justify-between items-center">
              <div className="text-gray-700">Credit: {course.creditHoursStr}</div>
              <div className="flex items-center">
                <div className="text-gray-700 mr-2">Rating:</div>
                <div className="font-bold text-orange-500 text-lg">
                  {course.Rating}
                </div>
              </div>
            </div>
          </div>
        </Card>
      </div>
    </Link>
  );
}
