/*
  Warnings:

  - The primary key for the `ChefItems` table will be changed. If it partially fails, the table could be left without primary key constraint.
  - A unique constraint covering the columns `[chefId,foodItemId]` on the table `ChefItems` will be added. If there are existing duplicate values, this will fail.

*/
-- AlterTable
ALTER TABLE "ChefItems" DROP CONSTRAINT "ChefItems_pkey";

-- CreateIndex
CREATE UNIQUE INDEX "ChefItems_chefId_foodItemId_key" ON "ChefItems"("chefId", "foodItemId");
