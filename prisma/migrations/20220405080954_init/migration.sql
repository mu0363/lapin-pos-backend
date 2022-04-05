/*
  Warnings:

  - You are about to drop the column `category_id` on the `items` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE `items` DROP FOREIGN KEY `items_category_id_fkey`;

-- AlterTable
ALTER TABLE `items` DROP COLUMN `category_id`;
