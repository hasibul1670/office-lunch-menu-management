/*
  Warnings:

  - You are about to drop the column `description` on the `menus` table. All the data in the column will be lost.
  - You are about to drop the column `option_image` on the `menus` table. All the data in the column will be lost.
  - You are about to drop the column `option_name` on the `menus` table. All the data in the column will be lost.
  - Added the required column `option_details` to the `menus` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "menus" DROP COLUMN "description",
DROP COLUMN "option_image",
DROP COLUMN "option_name",
ADD COLUMN     "option_details" JSONB NOT NULL;
