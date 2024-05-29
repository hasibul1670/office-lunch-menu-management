/*
  Warnings:

  - Added the required column `menuName` to the `menus` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "menus" ADD COLUMN     "menuName" TEXT NOT NULL;
