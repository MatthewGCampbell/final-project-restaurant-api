/*
  Warnings:

  - You are about to drop the column `drinkItemId` on the `chef_items` table. All the data in the column will be lost.

*/
-- DropForeignKey
ALTER TABLE "chef_items" DROP CONSTRAINT "chef_items_drinkItemId_fkey";

-- AlterTable
ALTER TABLE "chef_items" DROP COLUMN "drinkItemId";

-- CreateTable
CREATE TABLE "chef_drink_items" (
    "chefId" INTEGER NOT NULL,
    "drinkItemId" INTEGER NOT NULL,

    CONSTRAINT "chef_drink_items_pkey" PRIMARY KEY ("chefId","drinkItemId")
);

-- AddForeignKey
ALTER TABLE "chef_drink_items" ADD CONSTRAINT "chef_drink_items_chefId_fkey" FOREIGN KEY ("chefId") REFERENCES "chefs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chef_drink_items" ADD CONSTRAINT "chef_drink_items_drinkItemId_fkey" FOREIGN KEY ("drinkItemId") REFERENCES "drink_items"("id") ON DELETE CASCADE ON UPDATE CASCADE;
