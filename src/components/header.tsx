"use client";

import Link from "next/link";
import UserNav from "./user-nav";
import { Button } from "./ui/button";
import React from "react";
import { signIn, useSession } from "next-auth/react";

export default function Header() {
  const { data } = useSession();

  const logo = (
    <img 
      src="/Logo.png" 
      alt="Logo" 
      className="absolute top-1/2 left-1 -translate-y-1/2 h-16" // Tailwind classes for positioning and size
    />
  );

  if (data?.user) {
    return (
      <div className="relative border border-b border-blue-950 bg-orange-300 flex items-center justify-between px-4 py-2">
        {logo}
        <Link href="/" className="pl-24">Home</Link>
        <UserNav user={data.user} />
      </div>
    );
  }

  return (
    <div className="relative border border-b border-blue-950 bg-orange-300 flex items-center justify-between px-4 py-2">
      {logo}
      <Link href="/" className="pl-24">Home</Link>
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
