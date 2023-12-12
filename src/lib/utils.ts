import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import { Review, ReviewStats } from "./types";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function calculateAveragedReviews(reviews: Review[]) {
  const initialAcc: { [courseId: string]: ReviewStats } = {};
  const groupedReviews = reviews.reduce((acc, review) => {
    if (!acc[review.courseId]) {
      acc[review.courseId] = {
        count: 0,
        overallRating: 0,
        difficultyRating: 0,
        workloadRating: 0,
        usefulnessRating: 0,
      };
    }

    acc[review.courseId].count += 1;
    acc[review.courseId].overallRating += review.overallRating;
    acc[review.courseId].difficultyRating += review.difficultyRating;
    acc[review.courseId].workloadRating += review.workloadRating;
    acc[review.courseId].usefulnessRating += review.usefulnessRating;

    return acc;
  }, initialAcc);

  const averagedReviews = Object.fromEntries(
    Object.entries(groupedReviews).map(([courseId, data]) => [
      courseId,
      {
        count: data.count,
        overallRating: data.overallRating / data.count,
        difficultyRating: data.difficultyRating / data.count,
        workloadRating: data.workloadRating / data.count,
        usefulnessRating: data.usefulnessRating / data.count,
      },
    ])
  );

  return averagedReviews;
}
