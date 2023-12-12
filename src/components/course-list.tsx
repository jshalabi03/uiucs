"use client";

import * as React from "react";
import CourseCard from "./course-card";
import { Course } from "@/config/courses";
import { SearchBar } from "./search-bar";
import { getCourseId } from "@/lib/course-utils";
import { ReviewStats } from "@/lib/types";

interface CourseListProps {
  className?: string;
  courses: Array<Course>;
  statistics: { [courseId: string]: ReviewStats };
}

export default function CourseList({
  className,
  courses,
  statistics,
}: CourseListProps) {
  const [searchTerm, setSearchTerm] = React.useState("");

  const filteredCourses = React.useMemo(() => {
    return courses.filter((course: Course) => {
      return (
        getCourseId(course).toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        course.description.toLowerCase().includes(searchTerm.toLowerCase())
      );
    });
  }, [courses, searchTerm]);

  return (
    <div className={className ?? ""}>
      <SearchBar
        inputValue={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 mt-4">
        {filteredCourses.map((course, idx) => (
          <CourseCard
            key={getCourseId(course)}
            course={course}
            stats={statistics[getCourseId(course)] ?? null}
          />
        ))}
      </div>
    </div>
  );
}
