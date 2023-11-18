"use server";

import { db } from "@/db";
import { reviews, users } from "@/db/schema";
import { authOptions } from "@/lib/auth";
import { eq } from "drizzle-orm";
import { getServerSession } from "next-auth";
import { revalidatePath } from "next/cache";
import { redirect } from "next/navigation";

export async function submitReview(courseId: string, formData: FormData) {
  const session = await getServerSession(authOptions);
  if (!session?.user?.email) {
    redirect("/signIn");
  }
  const overallRating = formData.get("overall");
  const ratingWorkload = formData.get("workload");
  const ratingDifficulty = formData.get("difficulty");
  const ratingUsefulness = formData.get("usefulness");
  const instructor = formData.get("instructor");
  const reviewBody = formData.get("review-body");

  if (
    !overallRating ||
    !ratingWorkload ||
    !ratingDifficulty ||
    !ratingUsefulness ||
    !instructor ||
    !reviewBody
  ) {
    throw new Error("All fields must be filled out");
  }

  const usersList = await db
    .select()
    .from(users)
    .where(eq(users.email, session.user?.email));

  if (!usersList.length) {
    throw new Error("User not found in the database");
  }

  const user = usersList[0];

  try {
    await db.insert(reviews).values({
      userId: user.id,
      courseId: courseId,
      reviewBody: reviewBody?.toString(),
      overallRating: Number(overallRating?.toString()),
      workloadRating: Number(ratingWorkload?.toString()),
      difficultyRating: Number(ratingDifficulty?.toString()),
      usefulnessRating: Number(ratingUsefulness?.toString()),
      instructor: instructor?.toString(),
    });
  } catch (error) {
    throw new Error("Failed to submit review. Please try again.");
  }

  revalidatePath(`/courses/${courseId}`);
  redirect(`/courses/${courseId}`);
}
