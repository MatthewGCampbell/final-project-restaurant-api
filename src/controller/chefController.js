import { getAllChefs, getChefById, createChef, updateChef, deleteChef } from '../services/chefService.js'

export async function getAllChefsHandler(req, res) { 
	const chefs = await getAllChefs();
	res.status(200).json(chefs);
}

export async function getChefByIdHandler(req, res) {
  let id = parseInt(req.params.id);
  let chef = await getChefById(id);
  res.status(200).json(chef);
}

export async function createChefHandler(req, res) {
  const data = {
    name: req.body.name,
    role: req.body.role,
    chefId: req.user.id,
  };
  let newChef = await createChef(data);
  res.status(201).json(newChef);
}

export async function updateChefHandler(req, res) {
  let id = parseInt(req.params.id);
  const updates = {};
  if (req.body.name) updates.name = req.body.name;
  if (req.body.role) updates.role = req.body.role;

  const updatedChef = await updateChef(id, updates);
  res.status(200).json(updatedChef);
}

export async function deleteChefHandler(req, res) {
  let id = parseInt(req.params.id);
  await deleteChef(id);
  res.status(204).send();
}
