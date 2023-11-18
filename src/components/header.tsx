"use client";

import Link from "next/link";

import UserNav from "./user-nav";
import { Button } from "./ui/button";
import React from "react";
import { signIn, useSession } from "next-auth/react";

export default function Header() {
  const { data } = useSession();

  if (data?.user) {
    return (
      <div className="border border-b border-blue-950 bg-orange-300 flex items-center justify-between p-4">
        <Link href="/">Home</Link>
        <UserNav user={data.user} />
      </div>
    );
  }

  return (
    <div className="border border-b border-blue-950 bg-orange-300 flex items-center justify-between p-4">
      <Link href="/">Home</Link>
      <Button
        variant="outline"
        onClick={() => {
          signIn("google");
        }}
      >
        Sign in
      </Button>
    </div>
  );
}
