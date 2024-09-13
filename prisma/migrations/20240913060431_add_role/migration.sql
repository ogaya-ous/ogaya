-- CreateTable
CREATE TABLE "Account" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "provider" TEXT NOT NULL,
    "providerAccountId" TEXT NOT NULL,
    "refresh_token" TEXT,
    "access_token" TEXT,
    "expires_at" INTEGER,
    "token_type" TEXT,
    "scope" TEXT,
    "id_token" TEXT,
    "session_state" TEXT,

    CONSTRAINT "Account_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Session" (
    "id" TEXT NOT NULL,
    "sessionToken" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "Session_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL,
    "name" TEXT,
    "email" TEXT,
    "emailVerified" TIMESTAMP(3),
    "image" TEXT,
    "role" TEXT DEFAULT 'USER',

    CONSTRAINT "User_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "VerificationToken" (
    "identifier" TEXT NOT NULL,
    "token" TEXT NOT NULL,
    "expires" TIMESTAMP(3) NOT NULL
);

-- CreateTable
CREATE TABLE "document" (
    "document_id" SERIAL NOT NULL,
    "document_name" TEXT NOT NULL,
    "document_path" TEXT NOT NULL,
    "document_explain" TEXT NOT NULL,
    "added_year" INTEGER NOT NULL,
    "added_month" INTEGER NOT NULL,
    "added_day" INTEGER NOT NULL,
    "delete_flag" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "document_pkey" PRIMARY KEY ("document_id")
);

-- CreateTable
CREATE TABLE "image" (
    "image_id" SERIAL NOT NULL,
    "document_id" INTEGER NOT NULL,
    "image_path" TEXT NOT NULL,
    "added_year" INTEGER NOT NULL,
    "added_month" INTEGER NOT NULL,
    "added_day" INTEGER NOT NULL,

    CONSTRAINT "image_pkey" PRIMARY KEY ("image_id")
);

-- CreateTable
CREATE TABLE "history" (
    "history_id" SERIAL NOT NULL,
    "document_id" INTEGER NOT NULL,
    "user_id" TEXT NOT NULL,
    "added_year" INTEGER NOT NULL,
    "added_month" INTEGER NOT NULL,
    "added_day" INTEGER NOT NULL,
    "decoding_content" TEXT NOT NULL,
    "decoding_gpt" TEXT NOT NULL,

    CONSTRAINT "history_pkey" PRIMARY KEY ("history_id")
);

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

-- CreateTable
CREATE TABLE "decoded" (
    "decoded_id" SERIAL NOT NULL,
    "decoded_name" TEXT NOT NULL,
    "decoded_path" TEXT NOT NULL,
    "decoded_explain" TEXT NOT NULL,
    "decoded_content" TEXT NOT NULL,
    "added_year" INTEGER NOT NULL,
    "added_month" INTEGER NOT NULL,
    "added_day" INTEGER NOT NULL,
    "delete_flag" BOOLEAN NOT NULL DEFAULT false,

    CONSTRAINT "decoded_pkey" PRIMARY KEY ("decoded_id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Account_provider_providerAccountId_key" ON "Account"("provider", "providerAccountId");

-- CreateIndex
CREATE UNIQUE INDEX "Session_sessionToken_key" ON "Session"("sessionToken");

-- CreateIndex
CREATE UNIQUE INDEX "User_email_key" ON "User"("email");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_token_key" ON "VerificationToken"("token");

-- CreateIndex
CREATE UNIQUE INDEX "VerificationToken_identifier_token_key" ON "VerificationToken"("identifier", "token");

-- AddForeignKey
ALTER TABLE "Account" ADD CONSTRAINT "Account_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "Session" ADD CONSTRAINT "Session_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "image" ADD CONSTRAINT "image_document_id_fkey" FOREIGN KEY ("document_id") REFERENCES "document"("document_id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "history" ADD CONSTRAINT "history_document_id_fkey" FOREIGN KEY ("document_id") REFERENCES "document"("document_id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "history" ADD CONSTRAINT "history_user_id_fkey" FOREIGN KEY ("user_id") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
