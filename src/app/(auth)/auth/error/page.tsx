"use client";

import { Button } from "@/components/ui/button";
import { signIn, useSession } from "next-auth/react";
import Link from "next/link";
import { redirect } from "next/navigation";

interface AuthErrorModalParams {
  searchParams: { error: string };
}
export default function AuthErrorModal({
  searchParams: { error },
}: AuthErrorModalParams) {
  const { data } = useSession();

  if (data?.user) {
    redirect("/");
  }

  const errorString =
    error == "AccessDenied"
      ? `Please sign in with an active email ending with illinois.edu`
      : error;
  return (
    <div className="flex flex-col items-center justify-center text-center mt-4">
      <h1 className="text-2xl font-bold">There was an error signing in</h1>
      <p className="text-lg font-semibold text-gray-500">{errorString}</p>
      <Button
        className="mt-6 py-2 px-4 bg-orange-400 text-white font-semibold rounded-lg shadow-md hover:bg-orange-500 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:ring-opacity-75"
        onClick={() => signIn("google")}
      >
        Sign In
      </Button>
    </div>
  );
}
