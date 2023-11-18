import { db } from "@/db";
import { users, verificationTokens } from "@/db/schema";

export async function POST() {
  await db.delete(users);
  await db.delete(verificationTokens);
  return new Response("Success");
}
