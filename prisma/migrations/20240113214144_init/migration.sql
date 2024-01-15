-- CreateTable
CREATE TABLE "news" (
    "news_id" SERIAL NOT NULL,
    "news_name" TEXT NOT NULL,
    "news_path" TEXT NOT NULL,
    "news_explain" TEXT NOT NULL,
    "added_year" INTEGER NOT NULL,
    "added_month" INTEGER NOT NULL,
    "added_day" INTEGER NOT NULL,
    "delete_flag" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "news_pkey" PRIMARY KEY ("news_id")
);
