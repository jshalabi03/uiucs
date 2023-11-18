import { AuthOptions } from "next-auth";
import { DrizzleAdapter } from "@auth/drizzle-adapter";
import GoogleProvider from "next-auth/providers/google";
import { db } from "@/db";

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET as string,
  adapter: DrizzleAdapter(db),
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email }) {
      if (
        account?.provider === "google" &&
        profile?.email?.endsWith("@illinois.edu")
      ) {
        return true;
      } else {
        return false;
      }
    },
  },
  pages: {
    error: "/auth/error",
    signIn: "/signIn",
  },
};
