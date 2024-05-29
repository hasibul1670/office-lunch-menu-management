/*
  Warnings:

  - You are about to drop the `options` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `option_details` to the `menus` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "options" DROP CONSTRAINT "options_menuId_fkey";

-- AlterTable
ALTER TABLE "menus" ADD COLUMN     "option_details" JSONB NOT NULL;

-- DropTable
DROP TABLE "options";
