import prisma, { Role } from '../config/db.js';

export async function getAll(filter) { 
  return await prisma.chef.findMany({
    take: filter.limit
  });
}

