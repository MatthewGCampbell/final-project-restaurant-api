import prisma from '../config/db.js' // prisma client

export async function getAll() { 
    return await prisma.combo.findMany();
}

export async function getById(id){
  const task = await prisma.combo.findUnique({
    where: { id },
    select: {
      id: true,
      name: true,
      price: true,
    },
  });
  return task;
}

export async function create(data) {
  return prisma.combo.create({
    data,
  });
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

