/*
  Warnings:

  - The primary key for the `URL` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - You are about to drop the column `id` on the `URL` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[originalURL]` on the table `URL` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "URL" DROP CONSTRAINT "URL_pkey",
DROP COLUMN "id",
ADD CONSTRAINT "URL_pkey" PRIMARY KEY ("originalURL");

-- CreateIndex
CREATE UNIQUE INDEX "URL_originalURL_key" ON "URL"("originalURL");
