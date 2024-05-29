/*
  Warnings:

  - You are about to drop the column `option_details` on the `menus` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "menus" DROP COLUMN "option_details";

-- CreateTable
CREATE TABLE "options" (
    "id" SERIAL NOT NULL,
    "option_name" TEXT NOT NULL,
    "option_image" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "menuId" INTEGER,

    CONSTRAINT "options_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "options" ADD CONSTRAINT "options_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "menus"("id") ON DELETE SET NULL ON UPDATE CASCADE;
