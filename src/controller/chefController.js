import { Role } from '../config/db.js';
import { getAllChefs, addChef } from '../services/chefService.js'

export async function getAllChefsHandler(req, res) {
  const {
    limit = 10,
  } = req.query;
  const filter = {};
  filter.limit = parseInt(limit);
  const chefs = await getAllChefs(filter);
  res.status(200).json(chefs);
}

export async function addChefHandler(req, res) {
  const { name, role } = req.body;
  console.log(name);
  console.log(role);
  const newChef = await addChef({name, role});
  res.status(200).json(newChef);
}