"use client";

import React from "react";
import { Course } from "@/config/courses";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";
import { Input } from "./ui/input";
import { Slider } from "./ui/slider";
import { Textarea } from "./ui/textarea";

import { submitReview } from "@/actions/reviews";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./ui/select";

export function ReviewForm({ course }: { course: Course }) {
  const [overallRating, setOverallRating] = React.useState(0);
  const [difficultyRating, setDifficultyRating] = React.useState(0);
  const [workloadRating, setWorkloadRating] = React.useState(0);
  const [reviewTitle, setReviewTitle] = React.useState("");
  const [reviewBody, setReviewBody] = React.useState("");
  const [instructor, setInstructor] = React.useState("");

  return (
    <form
      onSubmit={() => alert("Submission not implemented yet!")}
      action={submitReview}
      className="w-full mx-auto space-y-6"
    >
      <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full">
        <div className="space-y-4 md:w-full">
          <div className="flex justify-between items-center space-x-4">
            <div className="space-y-2 w-3/4">
              <Label htmlFor="overall">Overall</Label> - {overallRating}/10
              <Slider
                id="overall"
                name="overall"
                max={10}
                min={0}
                step={1}
                value={[overallRating]}
                onValueChange={(val) => setOverallRating(val[0])}
              />
            </div>
          </div>
          <div className="flex justify-between items-center space-x-4">
            <div className="space-y-2 w-3/4">
              <Label htmlFor="workload">Workload</Label> - {workloadRating}/10
              <Slider
                id="workload"
                name="workload"
                max={10}
                min={0}
                step={1}
                value={[workloadRating]}
                onValueChange={(val) => setWorkloadRating(val[0])}
              />
            </div>
          </div>
          <div className="flex justify-between items-center space-x-4">
            <div className="space-y-2 w-3/4">
              <Label htmlFor="difficulty">Difficulty</Label> -{" "}
              {difficultyRating}/10
              <Slider
                id="difficulty"
                name="difficulty"
                max={10}
                min={0}
                step={1}
                value={[difficultyRating]}
                onValueChange={(val) => setDifficultyRating(val[0])}
              />
            </div>
          </div>
          <div className="space-y-2">
            <Label htmlFor="instructor">Instructor</Label>
            <Select
              value={instructor}
              onValueChange={(val) => setInstructor(val)}
            >
              <SelectTrigger>
                <SelectValue placeholder="Select your instructor" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  {course.instructors.concat(["Other"]).map((instructor) => (
                    <SelectItem key={instructor} value={instructor}>
                      {instructor}
                    </SelectItem>
                  ))}
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
        <div className="space-y-4 md:w-full">
          <div className="space-y-2">
            <Label htmlFor="review-title">Review Title</Label>
            <Input
              className="w-full"
              id="review-title"
              name="review-title"
              value={reviewTitle}
              onChange={(e) => setReviewTitle(e.target.value)}
              placeholder="Enter a title for your review"
              required
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="review-body">Review</Label>
            <Textarea
              className="w-full"
              id="review-body"
              name="review-body"
              value={reviewBody}
              onChange={(e) => setReviewBody(e.target.value)}
              placeholder="Write your review here"
              required
              rows={5}
            />
          </div>
        </div>
      </div>
      <Button className="w-full" type="submit">
        Submit Review
      </Button>
    </form>
  );
}
