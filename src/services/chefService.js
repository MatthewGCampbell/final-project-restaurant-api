import { getAll } from '../repositories/chefRepo.js'

export async function getAllChefs(filter) { 
	return await getAll(filter);
}
