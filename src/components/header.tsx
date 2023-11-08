"use client";

import Link from "next/link";

import UserNav from "./user-nav";
import { Button } from "./ui/button";
import React from "react";

export default function Header() {
  const [isSigningIn, setIsSigningIn] = React.useState(false);

  const user = null;

  if (user) {
    return (
      <div className="border border-b border-blue-950 bg-orange-300 flex items-center justify-between p-4">
        <Link href="/">Home</Link>
        <UserNav user={user} />
      </div>
    );
  }

  return (
    <div className="border border-b border-blue-950 bg-orange-300 flex items-center justify-between p-4">
      <Link href="/">Home</Link>
      <Button
        variant="ghost"
        onClick={() => {
          setIsSigningIn(true);
          /* @TODO implement logic for sign in with github provider */
          setTimeout(() => {
            setIsSigningIn(false);
          }, 2000);
        }}
        disabled={isSigningIn}
      >
        Sign in
      </Button>
    </div>
  );
}
