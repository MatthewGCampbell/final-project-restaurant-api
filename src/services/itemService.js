import { getItems, getById, create, update, remove } from '../repositories/itemRepo.js';

export async function getAllItems() {
    const items = await getItems(); 
    return items
}

export async function getItemById(id) {
  let result = await getById(id);
  if (result) return result;
  else {
    const error = new Error(`Cannot find post with id ${id}`);
    error.status = 404;
    throw error;
  }
}

export async function createItem(data) {
    return await create(data); 
}

export async function updateItem(id, data) {
    const updatedItem = await update(id, data);
    if (updatedItem) return updatedItem;
    else {
        const error = new Error(`Cannot find post with id ${id}`);
        error.status = 404;
        throw error;
    }
}

export async function deleteItem(id) {
    const result = await remove(id);
    if (result) return;
    else {
        const error = new Error(`Cannot find post with id ${id}`);
        error.status = 404;
        throw error;
  }
}