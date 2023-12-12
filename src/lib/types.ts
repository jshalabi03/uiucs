export type ReviewStats = {
  count: number;
  overallRating: number;
  difficultyRating: number;
  workloadRating: number;
  usefulnessRating: number;
};

export type Review = {
  userId: string;
  courseId: string;
  reviewBody: string;
  overallRating: number;
  difficultyRating: number;
  workloadRating: number;
  usefulnessRating: number;
  instructor: string;
  createdAt: Date;
};
