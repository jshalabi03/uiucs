import type { Config } from "drizzle-kit";

export default {
  schema: "./src/db/schema.ts",
  out: "./drizzle",
  driver: "pg",
  dbCredentials: {
    connectionString:
      "postgres://default:C4MeFpgTKyG8@ep-round-dew-45641949-pooler.us-east-1.postgres.vercel-storage.com:5432/verceldb?sslmode=require",
  },
} satisfies Config;
