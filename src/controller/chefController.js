import { Role } from '../config/db.js';
import { getAllChefs } from '../services/chefService.js'

export async function getAllChefsHandler(req, res) {
  const {
    limit = 10,
  } = req.query;
  const filter = {};
  filter.limit = parseInt(limit);
  const chefs = await getAllChefs(filter);
  res.status(200).json(chefs);
}