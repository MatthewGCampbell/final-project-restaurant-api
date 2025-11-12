-- AlterTable
ALTER TABLE "chef_items" ADD CONSTRAINT "chef_items_pkey" PRIMARY KEY ("chefId", "foodItemId");

-- DropIndex
DROP INDEX "chef_items_chefId_foodItemId_key";

-- AlterTable
ALTER TABLE "combo_items" ADD CONSTRAINT "combo_items_pkey" PRIMARY KEY ("comboId", "foodItemId");

-- DropIndex
DROP INDEX "combo_items_comboId_foodItemId_key";
