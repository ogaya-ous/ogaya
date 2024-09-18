/*
  Warnings:

  - You are about to drop the column `view_flag` on the `document` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "document" DROP COLUMN "view_flag",
ADD COLUMN     "complete_flag" BOOLEAN NOT NULL DEFAULT false;
