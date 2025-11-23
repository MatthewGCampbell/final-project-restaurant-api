import { getAll, getById, create, update, remove } from '../repositories/comboRepo.js'
import { getById as getItemById } from '../repositories/itemRepo.js';
import { getById as getDrinkById } from '../repositories/drinkRepo.js';

export async function getAllCombos() {
  return await getAll();
}

export async function getComboById(id) {
  let result = await getById(id);
  if (result) return result;
  else {
    const error = new Error(`Cannot find combo with id ${id}`);
    error.status = 404;
    throw error;
  }
}

export async function createCombo(data) {
  if (data.foodItems) {
    for (const id of data.foodItems) {
      const item = await getItemById(id);
      if (!item) {
        const error = new Error(`Food item with id ${id} not found`);
        error.status = 404;
        throw error;
      }
    }
  }

  // Check Drink items to make sure ID is valid
  if (data.drinkItems) {
    for (const id of data.drinkItems) {
      const item = await getDrinkById(id);
      if (!item) {
        const error = new Error(`Drink item with id ${id} not found`);
        error.status = 404;
        throw error;
      }
    }
  }

  return create(data);
}

export async function updateCombo(id, data) {
  const updatedCombo = await update(id, data);
  if (updatedCombo) return updatedCombo;
  else {
    const error = new Error(`Cannot find combo with id ${id}`);
    error.status = 404;
    throw error;
  }
}

export async function deleteCombo(id) {
  const result = await remove(id);
  if (result) return;
  else {
    const error = new Error(`Cannot find combo with id ${id}`);
    error.status = 404;
    throw error;
  }
}