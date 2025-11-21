import bcrypt from 'bcrypt';
import { getAll, getById, create, update, remove } from '../repositories/chefRepo.js'
import { Prisma } from '../generated/prisma/index.js'

export async function getAllChefs() { 
	return await getAll();
}

export async function getChefById(id) {
  let result = await getById(id);
  if (result) return result;
  else {
    const error = new Error(`Cannot find chef with id ${id}`);
    error.status = 404;
    throw error;
  }
}

export async function createChef(data) {
	const hashed =  await bcrypt.hash(data.password, 10);
	data.password = hashed;
	try {
        const newChef = await create(data);
        return newChef
    } catch (error) {
        if (error instanceof Prisma.PrismaClientKnownRequestError) {
            if (error.code === "P2002") {
                const error = new Error('Error while making new user');
                error.status = 409;
                throw error
            }
            throw error;
        }
    }
}

export async function updateChef(id, data) {
  // Only hash if the password was provided
  if (data.password) {
    const hashed = await bcrypt.hash(data.password, 10);
    data.password = hashed;
  }
  const updatedChef = await update(id, data);
  if (updatedChef) return updatedChef;
  const error = new Error(`Cannot find chef with id ${id}`);
  error.status = 404;
  throw error;
}

export async function deleteChef(id) {
  const result = await remove(id);
  if (result) return;
  else {
    const error = new Error(`Cannot find chef with id ${id}`);
    error.status = 404;
    throw error;
  }
}
