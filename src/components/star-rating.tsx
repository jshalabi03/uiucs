"use client";

import React from "react";
import { Icons } from "./icons";

const FilledStar = () => <Icons.star className="w-6 h-6 text-yellow-300" />;
const EmptyStar = () => (
  <Icons.star className="w-6 h-6 text-gray-300 dark:text-gray-500" />
);

const HoverStar = FilledStar;
interface StarRatingProps {
  className?: string;
  rating: number;
  setRating: (rating: number) => void;
}

export default function StarRating({
  className,
  rating,
  setRating,
}: StarRatingProps) {
  const [hoverRating, setHoverRating] = React.useState(0);
  return (
    <div className={`flex items-center space-x-1 ${className}`}>
      {[...Array(5)].map((_, i) => (
        <button
          key={i}
          onClick={() => {
            setRating(i + 1);
          }}
          onMouseEnter={() => {
            setHoverRating(i + 1);
          }}
          onMouseLeave={() => {
            setHoverRating(0);
          }}
          className="flex items-center justify-center"
        >
          {hoverRating > i ? (
            <HoverStar />
          ) : rating > i ? (
            <FilledStar />
          ) : (
            <EmptyStar />
          )}
        </button>
      ))}
    </div>
  );
}
