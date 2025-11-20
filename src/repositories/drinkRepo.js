import prisma from '../config/db.js' // prisma client

export async function getAll() { 
    return await prisma.DrinkItem.findMany();
}

export async function getById(id){
  const drink = await prisma.DrinkItem.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      price: true,
    },
  });
  return drink;
}

export async function create(data) {
  return prisma.DrinkItem.create({
    data,
  });
}

export async function update(id, updates) {
  try {
    const updatedDrink = await prisma.DrinkItem.update({
      where: { id },
      data: updates,
    });
    return updatedDrink;
  } catch (error) {
    if (error.code === 'P2025') return null;
    throw error;
  }
}

export async function remove(id) {
  try {
    const deletedDrink = await prisma.DrinkItem.delete({
      where: { id },
    });
    return deletedDrink;
  } catch (error) {
    if (error.code === 'P2025') return null;
    throw error;
  }
}
