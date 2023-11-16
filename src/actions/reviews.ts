"use server";

export async function submitReview(formData: FormData) {
  const overallRating = formData.get("overall");
  const ratingWorkload = formData.get("workload");
  const ratingDifficulty = formData.get("difficulty");
  const reviewTitle = formData.get("review-title");
  const reviewBody = formData.get("review-body");
  console.log("overallRating", overallRating);
  console.log("ratingWorkload", ratingWorkload);
  console.log("ratingDifficulty", ratingDifficulty);
  console.log("reviewBody", reviewBody);
}
