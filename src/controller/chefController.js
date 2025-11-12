import { getAllChefs } from '../services/chefService.js'

export async function getAllChefsHandler(req, res) { 
	const chefs = await getAllChefs();
	res.status(200).json(chefs);
}
