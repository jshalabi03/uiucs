"use client";

import Link from "next/link";

import { signIn, useSession } from "next-auth/react";
import UserNav from "./user-nav";
import { Button } from "./ui/button";
import React from "react";
import { getCurrentUser } from "@/lib/session";

export default async function Header() {
  const [isSigningIn, setIsSigningIn] = React.useState(false);

  const user = await getCurrentUser();

  if (user) {
    return (
      <div className="border border-b border-blue-950 bg-orange-300 flex items-center justify-between p-4">
        <Link href="/">Home</Link>
        <UserNav user={user} />
      </div>
    );
  }

  return (
    <div className="border border-b border-blue-950 bg-gray-300 flex justify-between p-4">
      <Link href="/">Home</Link>
      <Button
        variant="ghost"
        onClick={() => {
          setIsSigningIn(true);
          signIn("github");
        }}
        disabled={isSigningIn}
      >
        Sign in
      </Button>
    </div>
  );
}
