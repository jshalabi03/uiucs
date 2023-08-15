/*
  Warnings:

  - You are about to alter the column `rating` on the `reviews` table. The data in that column could be lost. The data in that column will be cast from `Float` to `Int`.

*/
-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_reviews" (
    "course_id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "rating" INTEGER NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "userId" TEXT NOT NULL,
    CONSTRAINT "reviews_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_reviews" ("content", "course_id", "created_at", "rating", "updated_at", "userId") SELECT "content", "course_id", "created_at", "rating", "updated_at", "userId" FROM "reviews";
DROP TABLE "reviews";
ALTER TABLE "new_reviews" RENAME TO "reviews";
CREATE UNIQUE INDEX "reviews_course_id_userId_key" ON "reviews"("course_id", "userId");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
