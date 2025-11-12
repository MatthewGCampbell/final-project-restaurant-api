import { getAll, getById, create, update, remove } from '../repositories/comboRepo.js'

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
  return await create(data);
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