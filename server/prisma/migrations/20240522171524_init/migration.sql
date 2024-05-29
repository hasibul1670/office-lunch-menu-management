/*
  Warnings:

  - You are about to drop the column `employeeId` on the `selectedItems` table. All the data in the column will be lost.
  - You are about to drop the column `optionId` on the `selectedItems` table. All the data in the column will be lost.
  - You are about to drop the `options` table. If the table is not empty, all the data it contains will be lost.
  - Added the required column `option_image` to the `menus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `option_name` to the `menus` table without a default value. This is not possible if the table is not empty.
  - Added the required column `date` to the `selectedItems` table without a default value. This is not possible if the table is not empty.
  - Added the required column `userId` to the `selectedItems` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "menus" DROP CONSTRAINT "menus_adminId_fkey";

-- DropForeignKey
ALTER TABLE "options" DROP CONSTRAINT "options_menuId_fkey";

-- DropForeignKey
ALTER TABLE "selectedItems" DROP CONSTRAINT "selectedItems_employeeId_fkey";

-- DropForeignKey
ALTER TABLE "selectedItems" DROP CONSTRAINT "selectedItems_optionId_fkey";

-- AlterTable
ALTER TABLE "menus" ADD COLUMN     "description" TEXT,
ADD COLUMN     "option_image" TEXT NOT NULL,
ADD COLUMN     "option_name" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "selectedItems" DROP COLUMN "employeeId",
DROP COLUMN "optionId",
ADD COLUMN     "date" TIMESTAMP(3) NOT NULL,
ADD COLUMN     "menuId" INTEGER,
ADD COLUMN     "userId" INTEGER NOT NULL;

-- DropTable
DROP TABLE "options";

-- AddForeignKey
ALTER TABLE "selectedItems" ADD CONSTRAINT "selectedItems_userId_fkey" FOREIGN KEY ("userId") REFERENCES "users"("id") ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "selectedItems" ADD CONSTRAINT "selectedItems_menuId_fkey" FOREIGN KEY ("menuId") REFERENCES "menus"("id") ON DELETE SET NULL ON UPDATE CASCADE;
