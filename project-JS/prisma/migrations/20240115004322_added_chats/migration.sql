-- CreateTable
CREATE TABLE "chat" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "chatUser" (
    "chatId" INTEGER NOT NULL,
    "chatUser" INTEGER NOT NULL,

    PRIMARY KEY ("chatId", "chatUser")
);

-- CreateTable
CREATE TABLE "chatMessage" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "content" TEXT NOT NULL,
    "authorId" INTEGER NOT NULL,
    "chatId" INTEGER NOT NULL
);
