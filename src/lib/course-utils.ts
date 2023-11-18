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

export function getCourseById(courseId: string): Course | null {
  try {
    const { subjectCode, courseNumber } = parseCourseId(courseId);
    return (
      courses.find(
        (c) => c.subjectCode === subjectCode && c.courseNumber === courseNumber
      ) ?? null
    );
  } catch (err) {
    return null;
  }
}

export function getCourseId(course: Course): string {
  return `${course.subjectCode}${course.courseNumber}`;
}

export function getColorForCourse(course: Course): string {
  if (course.courseNumber >= 500) {
    return "#E9D5FF";
  } else if (course.courseNumber >= 400) {
    return "#FBCFE8";
  } else if (course.courseNumber >= 300) {
    return "#BBF7D0";
  } else if (course.courseNumber >= 200) {
    return "#FDE68A";
  } else if (course.courseNumber >= 100) {
    return "#FED7AA";
  } else {
    return "#6B7280";
  }
}
