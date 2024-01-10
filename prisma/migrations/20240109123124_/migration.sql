/*
  Warnings:

  - You are about to drop the column `deleted` on the `document` table. All the data in the column will be lost.
  - You are about to drop the column `decoder_id` on the `history` table. All the data in the column will be lost.
  - You are about to drop the `decoder` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `user_id` to the `history` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "history" DROP CONSTRAINT "history_decoder_id_fkey";

-- AlterTable
ALTER TABLE "document" DROP COLUMN "deleted",
ADD COLUMN     "delete_flag" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "history" DROP COLUMN "decoder_id",
ADD COLUMN     "user_id" INTEGER NOT NULL;

-- DropTable
DROP TABLE "decoder";

-- CreateTable
CREATE TABLE "user" (
    "user_id" SERIAL NOT NULL,
    "google_id" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "login_method" TEXT NOT NULL,
    "admin" BOOLEAN NOT NULL DEFAULT false,
    "delete_flag" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "user_pkey" PRIMARY KEY ("user_id")
);

-- AddForeignKey
ALTER TABLE "history" ADD CONSTRAINT "history_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "user"("user_id") ON DELETE RESTRICT ON UPDATE CASCADE;
