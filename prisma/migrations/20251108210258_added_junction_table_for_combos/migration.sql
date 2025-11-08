/*
  Warnings:

  - You are about to drop the `ChefItems` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropForeignKey
ALTER TABLE "ChefItems" DROP CONSTRAINT "ChefItems_chefId_fkey";

-- DropForeignKey
ALTER TABLE "ChefItems" DROP CONSTRAINT "ChefItems_foodItemId_fkey";

-- DropTable
DROP TABLE "ChefItems";

-- CreateTable
CREATE TABLE "chef_items" (
    "chefId" INTEGER NOT NULL,
    "foodItemId" INTEGER NOT NULL
);

-- CreateTable
CREATE TABLE "combo_items" (
    "comboId" INTEGER NOT NULL,
    "foodItemId" INTEGER NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "chef_items_chefId_foodItemId_key" ON "chef_items"("chefId", "foodItemId");

-- CreateIndex
CREATE UNIQUE INDEX "combo_items_comboId_foodItemId_key" ON "combo_items"("comboId", "foodItemId");

-- AddForeignKey
ALTER TABLE "chef_items" ADD CONSTRAINT "chef_items_chefId_fkey" FOREIGN KEY ("chefId") REFERENCES "chefs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "chef_items" ADD CONSTRAINT "chef_items_foodItemId_fkey" FOREIGN KEY ("foodItemId") REFERENCES "food_items"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "combo_items" ADD CONSTRAINT "combo_items_foodItemId_fkey" FOREIGN KEY ("foodItemId") REFERENCES "food_items"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "combo_items" ADD CONSTRAINT "combo_items_comboId_fkey" FOREIGN KEY ("comboId") REFERENCES "combos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
