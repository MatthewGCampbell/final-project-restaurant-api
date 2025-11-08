/*
  Warnings:

  - You are about to drop the `Chef` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `Combo` table. If the table is not empty, all the data it contains will be lost.
  - You are about to drop the `FoodItem` table. If the table is not empty, all the data it contains will be lost.

*/
-- DropTable
DROP TABLE "Chef";

-- DropTable
DROP TABLE "Combo";

-- DropTable
DROP TABLE "FoodItem";

-- CreateTable
CREATE TABLE "chefs" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "role" "Role" NOT NULL DEFAULT 'SOUS_CHEF',

    CONSTRAINT "chefs_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "food_items" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "food_items_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "combos" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "combos_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "food_items_name_key" ON "food_items"("name");

-- CreateIndex
CREATE UNIQUE INDEX "combos_name_key" ON "combos"("name");
