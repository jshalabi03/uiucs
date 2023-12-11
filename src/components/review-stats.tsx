import React from "react";

interface IReviewSectionLayoutProps {
  title: string;
  children: React.ReactNode;
}

const ReviewSectionLayout: React.FC<IReviewSectionLayoutProps> = ({
  title,
  children,
}) => {
  return (
    <div className="flex flex-col h-full p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-lg font-semibold mb-3">{title}</h2>
      <div className="flex-grow overflow-auto">{children}</div>
    </div>
  );
};

interface RatingBarProps {
  starCount: number;
  percentage: number;
}
const RatingBar = ({ starCount, percentage }: RatingBarProps) => {
  return (
    <div className="flex items-center mb-2">
      {/* Number and star emoji side by side */}
      <span className="flex items-center w-12 mr-2">
        {starCount} <span className="ml-1">🌟</span>
      </span>
      <div className="flex-grow bg-gray-200 rounded-full h-4 dark:bg-gray-700">
        <div
          className="bg-blue-600 h-4 rounded-full"
          style={{ width: `${percentage}%` }}
        ></div>
      </div>
      <span className="ml-2">{percentage}%</span>
    </div>
  );
};

interface OverallRatingProps {
  overallRating: number;
  numReviews: number;
}
const OverallRating = ({
  overallRating,
  numReviews,
}: {
  overallRating: number;
  numReviews: number;
}) => {
  return (
    <div className="flex flex-col items-center justify-center h-full">
      <div className="text-4xl font-bold mb-2">{overallRating}/10.0</div>
      <div className="text-lg mb-4">{numReviews} Ratings</div>
      {/* <div className="flex"> {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            xmlns="http://www.w3.org/2000/svg"
            className="h-10 w-10 text-gray-400"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M11.049 2.927c.396-.957 1.704-.957 2.1 0l1.414 3.429a1.5 1.5 0 001.343.829h3.604c.997 0 1.409 1.216.683 1.841l-2.906 2.83a1.5 1.5 0 00-.433 1.332l1.086 3.636c.204.686-.177 1.416-.858 1.416H9.813c-.68 0-1.062-.73-.858-1.416l1.086-3.636a1.5 1.5 0 00-.433-1.332L6.8 8.986c-.726-.625-.314-1.841.683-1.841h3.604a1.5 1.5 0 001.343-.829l1.414-3.429z"
            />
          </svg>
        ))}
      </div> */}
    </div>
  );
};

interface RatingBreakdownProps {
  ratings: {
    [key: number]: number;
  };
}
const RatingBreakdown = ({ ratings }: RatingBreakdownProps) => {
  return (
    <div className="flex flex-col h-full justify-between">
      {Object.keys(ratings).map((key: string, index: number) => (
        <RatingBar
          key={index}
          starCount={parseInt(key, 10)}
          percentage={ratings[parseInt(key, 10)]}
        />
      ))}
    </div>
  );
};

// const MostHelpfulReviews = () => {
//   return <div>Most helpful reviews content goes here...</div>;
// };

export interface CourseStatistics {
  overallRating: number;
  workloadRating: number;
  difficultyRating: number;
  usefulnessRating: number;
  numReviews: number;
}

interface GeneralStatsProps {
  stats: CourseStatistics;
}

function GeneralStats({ stats }: GeneralStatsProps) {
  return (
    <div className="flex flex-col">
      <div className="flex flex-col space-y-2">
        <div>
          Overall: <span className="font-bold">{stats.overallRating}</span>
        </div>
        <div>
          Difficulty:{" "}
          <span className="font-bold">{stats.difficultyRating}</span>
        </div>
        <div>
          Workload: <span className="font-bold">{stats.workloadRating}</span>
        </div>
        <div>
          Usefulness:{" "}
          <span className="font-bold">{stats.usefulnessRating}</span>
        </div>
      </div>
    </div>
  );
}

interface ReviewSectionsProps {
  stats: CourseStatistics;
}
const ReviewSections = ({ stats }: ReviewSectionsProps) => {
  return (
    <div className="flex space-x-4 max-w-7xl mx-auto my-6">
      <div className="w-[400px] h-[300px]">
        <ReviewSectionLayout title="Overall Rating">
          <OverallRating
            overallRating={stats.overallRating}
            numReviews={stats.numReviews}
          />
        </ReviewSectionLayout>
      </div>
      <div className="w-[350px] h-[300px]">
        <ReviewSectionLayout title="Rating Breakdown">
          <GeneralStats stats={stats} />
        </ReviewSectionLayout>
      </div>

      {/* <div className="w-[350px] h-[300px]">
        <ReviewSectionLayout title="Rating Breakdown">
          <RatingBreakdown />
        </ReviewSectionLayout>
      </div> */}
    </div>
  );
};

export default ReviewSections;
