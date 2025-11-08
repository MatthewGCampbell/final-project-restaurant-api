-- CreateTable
CREATE TABLE "ChefItems" (
    "chefId" INTEGER NOT NULL,
    "foodItemId" INTEGER NOT NULL,

    CONSTRAINT "ChefItems_pkey" PRIMARY KEY ("chefId","foodItemId")
);

-- AddForeignKey
ALTER TABLE "ChefItems" ADD CONSTRAINT "ChefItems_chefId_fkey" FOREIGN KEY ("chefId") REFERENCES "chefs"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "ChefItems" ADD CONSTRAINT "ChefItems_foodItemId_fkey" FOREIGN KEY ("foodItemId") REFERENCES "food_items"("id") ON DELETE CASCADE ON UPDATE CASCADE;
