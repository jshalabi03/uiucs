"use client";

import Link from "next/link";

import UserNav from "./user-nav";
import { Button } from "./ui/button";
import React from "react";
import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";

export default async function Header() {
  const [isSigningIn, setIsSigningIn] = React.useState(false);

  const session = await getServerSession(authOptions);

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
      <Link href="/api/auth/signin">Sign in</Link>
    </div>
  );
}
