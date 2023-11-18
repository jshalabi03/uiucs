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
import { ReviewForm } from "./review-form";

export function OpenReviewDialog({ course }: { course: Course }) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="outline" size="icon">
          <Icons.pen_square className="w-5 h-5" />
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px] md:max-w-2xl">
        <DialogHeader>
          <DialogTitle className="text-3xl font-bold text-center">
            Write Review
          </DialogTitle>
          <DialogDescription className="text-gray-500 text-center">
            How was {course.title}?
          </DialogDescription>
        </DialogHeader>
        <ReviewForm course={course} />
      </DialogContent>
    </Dialog>
  );
}
