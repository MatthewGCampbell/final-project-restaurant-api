import { getAll } from '../repositories/chefRepo.js'

export async function getAllChefs() { 
	return await getAll();
}
