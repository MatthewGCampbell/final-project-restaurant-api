/*
  Warnings:

  - Added the required column `drinkItemId` to the `chef_items` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "chef_items" ADD COLUMN     "drinkItemId" INTEGER NOT NULL;

-- CreateTable
CREATE TABLE "drink_items" (
    "id" SERIAL NOT NULL,
    "name" TEXT NOT NULL,
    "price" DOUBLE PRECISION NOT NULL,

    CONSTRAINT "drink_items_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "drink_items_name_key" ON "drink_items"("name");

-- AddForeignKey
ALTER TABLE "chef_items" ADD CONSTRAINT "chef_items_drinkItemId_fkey" FOREIGN KEY ("drinkItemId") REFERENCES "drink_items"("id") ON DELETE CASCADE ON UPDATE CASCADE;
