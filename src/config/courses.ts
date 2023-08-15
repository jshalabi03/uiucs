export interface Course {
  subjectCode: string;
  courseNumber: string;
  title: string;
  creditHours: number;
  prerequisites?: CourseSlice[];
  corequisites?: CourseSlice[];
}

interface CourseSlice {
  subjectCode: string;
  courseNumber: string;
}

export const courses: Course[] = [
  {
    subjectCode: "CS",
    courseNumber: "124",
    title: "Introduction to Computer Science I",
    creditHours: 3,
  },
  {
    subjectCode: "CS",
    courseNumber: "128",
    title: "Introduction to Computer Science II",
    creditHours: 3,
    prerequisites: [{ subjectCode: "CS", courseNumber: "124" }],
  },
  {
    subjectCode: "MATH",
    courseNumber: "257",
    title: "Computational Linear Algebra",
    creditHours: 3,
    prerequisites: [{ subjectCode: "MATH", courseNumber: "???" }],
  },
];
