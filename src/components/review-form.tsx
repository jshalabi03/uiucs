"use client";

import React, { useTransition } from "react";
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
import { getCourseId } from "@/lib/course-utils";
import { signIn, useSession } from "next-auth/react";
import { Alert, AlertDescription, AlertTitle } from "./ui/alert";
import { AlertCircle } from "lucide-react";
import { useRouter } from "next/navigation";

// @TODO maybe make form more dynamic, but would decrease customizability
// e.g.,
//
// type RatingField = {
//   label: string;
//   max: number;
//   step: number;
// };
// const ratings: Array<RatingField> = [];

export function ReviewForm({ course }: { course: Course }) {
  const { data: session } = useSession();
  const router = useRouter();

  const [overallRating, setOverallRating] = React.useState(0);
  const [difficultyRating, setDifficultyRating] = React.useState(0);
  const [workloadRating, setWorkloadRating] = React.useState(0);
  const [usefulnessRating, setUsefulnessRating] = React.useState(0);
  const [reviewBody, setReviewBody] = React.useState("");
  const [instructor, setInstructor] = React.useState("");

  const [formErrorElement, setFormErrorElement] =
    React.useState<React.ReactNode>(null);

  const submitReviewWithId = submitReview.bind(null, getCourseId(course));

  const [pending, startTransition] = useTransition();

  return (
    <>
      <div className="mb-4">
        <h1 className="text-3xl font-bold text-center">Write Review</h1>
        <p className="text-gray-500 text-center">How was {course.title}?</p>
      </div>
      <form
        action={async (formData) => {
          if (!session?.user) {
            setFormErrorElement(
              <Alert variant="destructive">
                <AlertCircle className="h-4 w-4" />
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  You are not authenticated.{" "}
                  <Button variant="outline" onClick={() => signIn("google")}>
                    Please log in.
                  </Button>
                </AlertDescription>
              </Alert>
            );
            return;
          }
          try {
            submitReviewWithId(formData);
          } catch (err: unknown) {
            if (err instanceof Error) {
              setFormErrorElement(
                <Alert variant="destructive">
                  <AlertCircle className="h-4 w-4" />
                  <AlertTitle>An error occurred</AlertTitle>
                  <AlertDescription>{err.message}</AlertDescription>
                </Alert>
              );
            }
            return;
          }
        }}
        className="w-full mx-auto space-y-6"
      >
        <div className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4 w-full">
          <div className="space-y-4 md:w-full">
            <div className="flex justify-between items-center space-x-4">
              <div className="space-y-2 w-3/4">
                <div className="flex justify-between">
                  <Label htmlFor="overall">Overall</Label>
                  <span className="font-bold">
                    {overallRating.toFixed(1)}/10
                  </span>
                </div>
                <Slider
                  id="overall"
                  name="overall"
                  max={10}
                  min={0}
                  step={0.1}
                  value={[overallRating]}
                  onValueChange={(val) => setOverallRating(val[0])}
                />
              </div>
            </div>
            <div className="flex justify-between items-center space-x-4">
              <div className="space-y-2 w-3/4">
                <div className="flex justify-between">
                  <Label htmlFor="workload">Workload</Label>
                  <span className="font-bold">
                    {workloadRating} hours a week
                  </span>
                </div>
                <Slider
                  id="workload"
                  name="workload"
                  max={20}
                  min={0}
                  step={0.5}
                  value={[workloadRating]}
                  onValueChange={(val) => setWorkloadRating(val[0])}
                />
              </div>
            </div>
            <div className="flex justify-between items-center space-x-4">
              <div className="space-y-2 w-3/4">
                <div className="flex justify-between">
                  <Label htmlFor="difficulty">Difficulty</Label>
                  <span className="font-bold">
                    {difficultyRating.toFixed(1)}/10
                  </span>
                </div>
                <Slider
                  id="difficulty"
                  name="difficulty"
                  max={10}
                  min={0}
                  step={0.1}
                  value={[difficultyRating]}
                  onValueChange={(val) => setDifficultyRating(val[0])}
                />
              </div>
            </div>
            <div className="flex justify-between items-center space-x-4">
              <div className="space-y-2 w-3/4">
                <div className="flex justify-between">
                  <Label htmlFor="usefulness">Usefulness</Label>
                  <span className="font-bold">
                    {usefulnessRating.toFixed(1)}/10
                  </span>
                </div>
                <Slider
                  id="usefulness"
                  name="usefulness"
                  max={10}
                  min={0}
                  step={0.1}
                  value={[usefulnessRating]}
                  onValueChange={(val) => setUsefulnessRating(val[0])}
                />
              </div>
            </div>
            <div className="space-y-2">
              <Label htmlFor="instructor">Instructor</Label>
              <Select
                value={instructor}
                name="instructor"
                onValueChange={(val) => setInstructor(val)}
                required
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
              <Label htmlFor="review-body">Review</Label>
              <Textarea
                className="w-full h-full"
                id="review-body"
                name="review-body"
                value={reviewBody}
                onChange={(e) => setReviewBody(e.target.value)}
                placeholder="Write your review here"
                required
                rows={10}
              />
            </div>
          </div>
        </div>
        <Button className="w-full" type="submit">
          Submit Review
        </Button>
      </form>
      {!!formErrorElement && formErrorElement}
    </>
  );
}
