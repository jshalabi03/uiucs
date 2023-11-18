import { db } from "@/db";
import { reviews } from "@/db/schema";

export async function POST() {
  await db.delete(reviews);
  return new Response("Success");
}
