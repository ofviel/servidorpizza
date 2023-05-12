/*
  Warnings:

  - You are about to drop the `user` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
PRAGMA foreign_keys=off;
DROP TABLE "user";
PRAGMA foreign_keys=on;

-- CreateTable
CREATE TABLE "cadastropizza" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "nome" TEXT NOT NULL,
    "tamanhopizza" TEXT NOT NULL,
    "saborpizza" TEXT NOT NULL,
    "adicionais" TEXT NOT NULL,
    "datahora" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);
