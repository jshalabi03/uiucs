"use client";

import React from "react";
import { useRouter } from "next/navigation";
import { useLayoutEffect, useState } from "react";
import { Drawer as DrawerPrimitive } from "vaul";
import { Dialog, InterceptedDialogContent } from "@/components/ui/dialog";

function Modal({ children }: { children: React.ReactNode }) {
  return (
    <Dialog open>
      <InterceptedDialogContent>{children}</InterceptedDialogContent>
    </Dialog>
  );
}

function Drawer({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const onDismiss = React.useCallback(() => {
    router.back();
  }, [router]);

  return (
    <DrawerPrimitive.Root open onClose={onDismiss}>
      <DrawerPrimitive.Portal>
        <DrawerPrimitive.Overlay className="fixed inset-0 bg-black/40" />
        <DrawerPrimitive.Content className="bg-gray-100 flex flex-col rounded-t-[10px] h-full mt-24 max-h-[96%] fixed bottom-0 left-0 right-0 p-12">
          {children}
        </DrawerPrimitive.Content>
      </DrawerPrimitive.Portal>
    </DrawerPrimitive.Root>
  );
}

export default function ModalDrawer({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMobile, setIsMobile] = useState(false);

  useLayoutEffect(() => {
    setIsMobile(window.innerWidth <= 768);
  }, []);

  const Component = isMobile ? Drawer : Modal;

  return <Component>{children}</Component>;
}
