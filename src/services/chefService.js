import { getAll, createChef } from '../repositories/chefRepo.js'

export async function getAllChefs(filter) { 
	return await getAll(filter);
}

export async function addChef(chefData) {
  return await createChef(chefData);
}