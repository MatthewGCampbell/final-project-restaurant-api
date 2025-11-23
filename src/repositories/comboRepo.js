import prisma from '../config/db.js' // prisma client

export async function getAll() {
  // TODO: Need to reformat response to exclude comboId and food/drink ids like getById(id)
  const combos = await prisma.combo.findMany({
    include: {
      foodItems: {
        include: {
          fooditem: true,
        }
      },
      drinkItems: {
        include: {
          drinkitem: true,
        }
      }
    }
  });
  return combos;
}

export async function getById(id) {
  const comboFoodDrinkItems = await prisma.combo.findUnique({
    where: { id },
    include: {
      foodItems: {
        include: {
          fooditem: true,
        }
      },
      drinkItems: {
        include: {
          drinkitem: true,
        }
      }
    }
  });

  // https://stackoverflow.com/questions/18133635/remove-property-for-all-objects-in-array
  const foodArr = comboFoodDrinkItems.foodItems.map(({ comboId, foodItemId, ...item }) => item);
  const drinkArr = comboFoodDrinkItems.drinkItems.map(({ comboId, drinkItemId, ...item }) => item);
  comboFoodDrinkItems.foodItems = foodArr;
  comboFoodDrinkItems.drinkItems = drinkArr;

  return comboFoodDrinkItems;
}

export async function create(data) {

  const combo = await prisma.combo.create({
    data: {
      name: data.name,
      price: data.price
    },
  });

  // "foodItems": [5, 4, 2]

  if (data.foodItems) {
    const foodItemArray = [];
    // { comboId: happyMeal.id, foodItemId: fries.id }

    for (const itemId of data.foodItems) {
      foodItemArray.push({ comboId: combo.id, foodItemId: itemId })
    }

    //Make combo food items
    const comboItems = await prisma.comboItems.createMany({
      data: foodItemArray
    });
  }

  if (data.drinkItems) {
    const drinkItemArray = [];
    // { comboId: happyMeal.id, foodItemId: fries.id }

    for (const drinkId of data.drinkItems) {
      drinkItemArray.push({ comboId: combo.id, drinkItemId: drinkId })
    }

    // Make Drink Items
    const comboDrinkItems = await prisma.comboDrinkItems.createMany({
      data: drinkItemArray
    });
  }

  return getById(combo.id);
}

export async function update(id, updates) {

  

  try {
    const updatedCombo = await prisma.combo.update({
      where: { id },
      data: updates,
    });
    return updatedCombo;
  } catch (error) {
    if (error.code === 'P2025') return null;
    throw error;
  }
}

export async function remove(id) {
  try {
    const deletedCombo = await prisma.combo.delete({
      where: { id },
    });
    return deletedCombo;
  } catch (error) {
    if (error.code === 'P2025') return null;
    throw error;
  }
}
