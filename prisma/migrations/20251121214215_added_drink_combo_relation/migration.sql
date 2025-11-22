-- CreateTable
CREATE TABLE "combo_drink_items" (
    "comboId" INTEGER NOT NULL,
    "drinkItemId" INTEGER NOT NULL,

    CONSTRAINT "combo_drink_items_pkey" PRIMARY KEY ("comboId","drinkItemId")
);

-- AddForeignKey
ALTER TABLE "combo_drink_items" ADD CONSTRAINT "combo_drink_items_drinkItemId_fkey" FOREIGN KEY ("drinkItemId") REFERENCES "drink_items"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "combo_drink_items" ADD CONSTRAINT "combo_drink_items_comboId_fkey" FOREIGN KEY ("comboId") REFERENCES "combos"("id") ON DELETE CASCADE ON UPDATE CASCADE;
