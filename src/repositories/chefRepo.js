import prisma from '../config/db.js' // prisma client

export async function getAll() { 
	return await prisma.chef.findMany();
}
