/*
  Warnings:

  - You are about to drop the `_friends` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "_friends";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "Friend" (
    "user1Id" INTEGER NOT NULL,
    "user2Id" INTEGER NOT NULL,

    PRIMARY KEY ("user1Id", "user2Id")
);
