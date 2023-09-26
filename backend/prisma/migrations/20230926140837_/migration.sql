-- CreateTable
CREATE TABLE `document` (
    `document_id` INTEGER NOT NULL AUTO_INCREMENT,
    `document_name` VARCHAR(191) NOT NULL,
    `document_path` VARCHAR(191) NOT NULL,
    `document_explain` VARCHAR(191) NOT NULL,
    `added_year` INTEGER NOT NULL,
    `added_month` INTEGER NOT NULL,
    `added_day` INTEGER NOT NULL,

    PRIMARY KEY (`document_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `decoder` (
    `decoder_id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(191) NOT NULL,
    `affiliation` VARCHAR(191) NOT NULL,
    `specialty` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`decoder_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `history` (
    `history_id` INTEGER NOT NULL AUTO_INCREMENT,
    `document_id` INTEGER NOT NULL,
    `decoder_id` INTEGER NOT NULL,
    `decoding_datetime` DATETIME(3) NOT NULL,
    `decoding_content` VARCHAR(191) NOT NULL,

    PRIMARY KEY (`history_id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `history` ADD CONSTRAINT `history_document_id_fkey` FOREIGN KEY (`document_id`) REFERENCES `document`(`document_id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `history` ADD CONSTRAINT `history_decoder_id_fkey` FOREIGN KEY (`decoder_id`) REFERENCES `decoder`(`decoder_id`) ON DELETE RESTRICT ON UPDATE CASCADE;
