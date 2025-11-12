import { getAll, getById, createChef, update, remove } from '../repositories/chefRepo.js'

export async function getAllChefs() { 
	return await getAll();
}

export async function getChefById(id) {
  let result = await getById(id);
  if (result) return result;
  else {
    const error = new Error(`Cannot find post with id ${id}`);
    error.status = 404;
    throw error;
  }
}

export async function createChef(data) {
  return await create(data);
}

export async function updateChef(id, data) {
  const updatedChef = await update(id, data);
  if (updatedChef) return updatedChef;
  else {
    const error = new Error(`Cannot find post with id ${id}`);
    error.status = 404;
    throw error;
  }
}

export async function deleteChef(id) {
  const result = await remove(id);
  if (result) return;
  else {
    const error = new Error(`Cannot find post with id ${id}`);
    error.status = 404;
    throw error;
  }
}