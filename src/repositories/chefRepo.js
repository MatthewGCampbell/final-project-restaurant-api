import prisma, { Role } from '../config/db.js';

export async function getAll(filter) { 
  return await prisma.chef.findMany({
    take: filter.limit
  });
}

export async function createChef(chefData) {
  return await prisma.chef.create({
    data: {
      name: chefData.name,
      email: chefData.email,
      password: chefData.password,
      role: chefData.role,
    },
  });
}