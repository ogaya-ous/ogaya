-- CreateTable
CREATE TABLE "decoded" (
    "decoded_id" SERIAL NOT NULL,
    "decoded_name" INTEGER NOT NULL,
    "decoded_path" TEXT NOT NULL,
    "decoded_explain" TEXT NOT NULL,
    "decoded_content" TEXT NOT NULL,
    "added_year" INTEGER NOT NULL,
    "added_month" INTEGER NOT NULL,
    "added_day" INTEGER NOT NULL,
    "delete_flag" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "decoded_pkey" PRIMARY KEY ("decoded_id")
);
