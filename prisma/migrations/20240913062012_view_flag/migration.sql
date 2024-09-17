-- AlterTable
ALTER TABLE "decoded" ADD COLUMN     "view_flag" BOOLEAN NOT NULL DEFAULT false;

-- AlterTable
ALTER TABLE "document" ADD COLUMN     "view_flag" BOOLEAN NOT NULL DEFAULT false;
