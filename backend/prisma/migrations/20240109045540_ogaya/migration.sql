-- CreateTable
CREATE TABLE "document" (
    "document_id" SERIAL NOT NULL,
    "document_name" TEXT NOT NULL,
    "document_path" TEXT NOT NULL,
    "document_explain" TEXT NOT NULL,
    "added_year" INTEGER NOT NULL,
    "added_month" INTEGER NOT NULL,
    "added_day" INTEGER NOT NULL,
    "deleted" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "document_pkey" PRIMARY KEY ("document_id")
);

-- CreateTable
CREATE TABLE "decoder" (
    "decoder_id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "affiliation" TEXT NOT NULL,
    "specialty" TEXT NOT NULL,

    CONSTRAINT "decoder_pkey" PRIMARY KEY ("decoder_id")
);

-- CreateTable
CREATE TABLE "history" (
    "history_id" SERIAL NOT NULL,
    "document_id" INTEGER NOT NULL,
    "decoder_id" INTEGER NOT NULL,
    "decoding_datetime" TIMESTAMP(3) NOT NULL,
    "decoding_content" TEXT NOT NULL,

    CONSTRAINT "history_pkey" PRIMARY KEY ("history_id")
);

-- AddForeignKey
ALTER TABLE "history" ADD CONSTRAINT "history_document_id_fkey" FOREIGN KEY ("document_id") REFERENCES "document"("document_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "history" ADD CONSTRAINT "history_decoder_id_fkey" FOREIGN KEY ("decoder_id") REFERENCES "decoder"("decoder_id") ON DELETE RESTRICT ON UPDATE CASCADE;
