import prisma from '../config/db.js' // prisma client

export async function getAll() { 
	return await prisma.chef.findMany();
}

export async function getById(id){
  const chef = await prisma.chef.findUnique({
    where: { id },  
  });
  return chef;
}

export async function create(data) {
  return prisma.chef.create({
    data,
  });
}

export async function update(id, updates) {
  try {
    const updatedChef = await prisma.chef.update({
      where: { id },
      data: updates,
    });
    return updatedChef;
  } catch (error) {
    if (error.code === 'P2025') return null;
    throw error;
  }
}

export async function remove(id) {
  try {
    const deletedChef = await prisma.chef.delete({
      where: { id },
    });
    return deletedChef;
  } catch (error) {
    if (error.code === 'P2025') return null;
    throw error;
  }
}

