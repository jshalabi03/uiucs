import CourseList from "@/components/course-list";
import { courses } from "@/config/courses";
import { db } from "@/db";
import { reviews as reviewsTable } from "@/db/schema";
import { authOptions } from "@/lib/auth";
import { ReviewStats } from "@/lib/types";
import { calculateAveragedReviews } from "@/lib/utils";
import { getServerSession } from "next-auth";

export default async function Home() {
  const session = await getServerSession(authOptions);
  console.log("Server-side session:", session);

  const reviews = await db.select().from(reviewsTable);
  const statistics = calculateAveragedReviews(reviews);

  return (
    <main className="flex flex-col items-center justify-between p-24">
      <div className="max-w-5xl w-full items-center text-sm">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          UIUcS
        </h1>
        <h2 className="mt-2 text-gray-400 text-lg font-light lg:text-xl">
          Explore UIUC&apos;s Computer Science Courses
        </h2>
        <CourseList
          className="mt-4"
          courses={courses}
          statistics={statistics}
        />
      </div>
    </main>
  );
}
