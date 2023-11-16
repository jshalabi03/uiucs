"use client";

import Link from "next/link";

import UserNav from "./user-nav";
import { Button } from "./ui/button";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default function Header() {
  // const session = await getServerSession(authOptions);
  const session = { user: null };

  if (session?.user) {
    return (
      <div className="border border-b border-blue-950 bg-orange-300 flex items-center justify-between p-4">
        <Link href="/">Home</Link>
        <UserNav user={session.user} />
      </div>
    );
  }

  return (
    <div className="border border-b border-blue-950 bg-orange-300 flex items-center justify-between p-4">
      <Link href="/">Home</Link>
      {/* <Button
        variant="ghost"
        onClick={() => {
          setIsSigningIn(true);
          setTimeout(() => {
            setIsSigningIn(false);
          }, 2000);
        }}
        disabled={isSigningIn}
      >
        Sign in
      </Button> */}
      <Link
        onClick={() => alert("sign in not implemented yet")}
        // href="/api/auth/signin"
        href=""
      >
        Sign in
      </Link>
    </div>
  );
}
