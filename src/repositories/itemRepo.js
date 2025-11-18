import prisma from '../config/db.js';

export async function getItems() {
    const items = await prisma.FoodItem.findMany();
    return items;
}

export async function getById(id) {
    const item = await prisma.FoodItem.findUnique({
        where: { id },
    });
    return item;
}

export async function create(item) {
    const newItem = prisma.FoodItem.create({
        data: item,
    });
    return newItem;
}

export async function update(id, updates) {
    try {
    const updatedItem = await prisma.FoodItem.update({
      where: { id },
      data: updates,
    });
    return updatedItem;
  } catch (error) {
    if (error.code === 'P2025') return null;
    throw error;
  }
}

export async function remove(id) {
    try {
        const deletedItem = await prisma.FoodItem.delete({
            where: { id },
        });
        return deletedItem; 
        } catch (error) {
            if (error.code === 'P2025') return null;
            throw error;
    }
}
