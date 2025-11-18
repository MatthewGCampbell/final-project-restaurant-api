import prisma, { Role } from '../config/db.js';

export async function getAll(filter) { 
  return await prisma.chef.findMany({
    omit: {
      password: true,
    },
    take: filter.limit
  });
}

export async function createChef(chefData) {
  return await prisma.chef.create({
    data: { chefData },
  });
}

export async function findUserByEmail(email) {
  return await prisma.chef.findUnique({ where: { email } });
}