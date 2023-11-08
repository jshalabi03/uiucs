"use client";

import * as React from "react";
import CourseCard from "./course-card";
import { Course } from "@/config/courses";
import { SearchBar } from "./search-bar";
import { getCourseId } from "@/lib/course-utils";

interface CourseListProps {
  className?: string;
  courses: Array<Course>;
}

export default function CourseList({ className, courses }: CourseListProps) {
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
    <div className={className}>
      <SearchBar
        inputValue={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <div className="flex flex-col space-y-4 mt-4">
        {filteredCourses.map((course, idx) => (
          <CourseCard key={getCourseId(course)} course={course} />
        ))}
      </div>
    </div>
  );
}
