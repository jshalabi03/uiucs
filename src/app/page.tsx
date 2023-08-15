import CourseCard from "@/components/course-card";

import { courses } from "@/config/courses";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="max-w-5xl w-full items-center text-sm">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          UIUC CS Course Explorer
        </h1>
        <div className="flex flex-col space-y-2 mt-12">
          {courses.map((course, idx) => (
            <CourseCard key={idx} course={course} />
          ))}
        </div>
      </div>
    </main>
  );
}
