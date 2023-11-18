import {
  Dialog,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  InterceptedDialogContent,
} from "@/components/ui/dialog";
import { Course } from "@/config/courses";

export default function ReviewModal({
  children,
  course,
}: {
  children: React.ReactNode;
  course: Course;
}) {
  return (
    <Dialog open>
      <InterceptedDialogContent>{children}</InterceptedDialogContent>
    </Dialog>
  );
}
