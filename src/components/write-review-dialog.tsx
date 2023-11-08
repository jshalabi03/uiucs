"use client";

import React from "react";

import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Label } from "@/components/ui/label";
import { Course } from "@/config/courses";

import StarRating from "./star-rating";
import { Textarea } from "./ui/textarea";
import { Icons } from "./icons";

export function WriteReviewDialog({ course }: { course: Course }) {
  const [rating, setRating] = React.useState(0);
  const [reviewBody, setReviewBody] = React.useState("");
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
  };
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Icons.pen_square className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Write Review</DialogTitle>
          <DialogDescription>How was {course.title}?</DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit}>
          <div className="grid gap-4 py-4">
            <div className="grid grid-cols-4 items-center gap-4">
              <Label htmlFor="rating" className="text-right">
                Rate
              </Label>
              <StarRating
                className="col-span-3"
                rating={rating}
                setRating={setRating}
              />
            </div>
            <Textarea
              id="body"
              className="col-span-4"
              value={reviewBody}
              onChange={(e) => setReviewBody(e.target.value)}
            />
          </div>
          <DialogFooter>
            <Button type="submit">Submit review</Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
