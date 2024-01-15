-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_chatMessage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "chatId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "hide" BOOLEAN NOT NULL DEFAULT false
);
INSERT INTO "new_chatMessage" ("authorId", "chatId", "content", "id") SELECT "authorId", "chatId", "content", "id" FROM "chatMessage";
DROP TABLE "chatMessage";
ALTER TABLE "new_chatMessage" RENAME TO "chatMessage";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
