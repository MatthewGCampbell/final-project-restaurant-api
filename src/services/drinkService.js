import { getAll, getById, create, update, remove } from '../repositories/drinkRepo.js'

export async function getAllDrink() { 
    return await getAll();
}

export async function getDrinkById(id) {
  let result = await getById(id);
  if (result) return result;
  else {
    const error = new Error(`Cannot find drink with id ${id}`);
    error.status = 404;
    throw error;
  }
}

export async function createDrink(data) {
  return await create(data);
}

export async function updateDrink(id, data) {
  const updatedDrink = await update(id, data);
  if (updatedDrink) return updatedDrink;
  else {
    const error = new Error(`Cannot find drink with id ${id}`);
    error.status = 404;
    throw error;
  }
}

export async function deleteDrink(id) {
  const result = await remove(id);
  if (result) return;
  else {
    const error = new Error(`Cannot find drink with id ${id}`);
    error.status = 404;
    throw error;
  }
}