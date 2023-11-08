import { Course, courses } from "@/config/courses";

type SubjectCode = string;
type CourseNumber = number;

function parseCourseId(courseId: string): {
  subjectCode: SubjectCode;
  courseNumber: CourseNumber;
} {
  const [subjectCode] = courseId.match(/^[a-z]+/i) || [];
  const [courseNumber] = courseId.match(/\d+$/i) || [];

  if (subjectCode && courseNumber) {
    return {
      subjectCode: subjectCode.toUpperCase(),
      courseNumber: Number(courseNumber),
    };
  }
  throw new Error(`Invalid courseId: ${courseId}`);
}

export function findCourse(courseId: string): Course | null {
  const { subjectCode, courseNumber } = parseCourseId(courseId);
  return (
    courses.find(
      (c) => c.subjectCode === subjectCode && c.courseNumber === courseNumber
    ) ?? null
  );
}

export function getCourseId(course: Course): string {
  return `${course.subjectCode}${course.courseNumber}`;
}
