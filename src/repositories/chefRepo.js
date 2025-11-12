import prisma, { Role } from '../config/db.js';

export async function getAll() { 
  return await prisma.chef.findMany();
}

