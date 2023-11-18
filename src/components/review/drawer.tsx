"use client";
import { Course } from "@/config/courses";
import { useRouter } from "next/navigation";
import React from "react";
import { Drawer } from "vaul";

export default function ReviewDrawer({
  children,
  course,
}: {
  children: React.ReactNode;
  course: Course;
}) {
  const router = useRouter();

  const onDismiss = React.useCallback(() => {
    router.back();
  }, [router]);

  return (
    <Drawer.Root open onClose={onDismiss}>
      <Drawer.Portal>
        <Drawer.Overlay className="fixed inset-0 bg-black/40" />
        <Drawer.Content className="bg-gray-100 flex flex-col rounded-t-[10px] h-full mt-24 max-h-[96%] fixed bottom-0 left-0 right-0 p-12">
          {children}
        </Drawer.Content>
      </Drawer.Portal>
    </Drawer.Root>
  );
}
