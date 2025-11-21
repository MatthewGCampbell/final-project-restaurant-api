import prisma from '../config/db.js' // prisma client

export async function getAll() { 
	return await prisma.chef.findMany({
    omit: {password: true}
  });
}

export async function getById(id){
  const chef = await prisma.chef.findUnique({
    omit: {password: true},
    where: { id },  
  });
  return chef;
}

export async function create(data) {
  const res = await prisma.chef.create({
    omit: {password: true},
    data,
  });
	return res;
}

export async function update(id, updates) {
  try {
    const updatedChef = await prisma.chef.update({
      omit: {password: true},
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
      omit: {password: true},
      where: { id },
    });
    return deletedChef;
  } catch (error) {
    if (error.code === 'P2025') return null;
    throw error;
  }
}

export async function findUserByEmail(email) {
  return await prisma.chef.findUnique({ where: { email } });
}
