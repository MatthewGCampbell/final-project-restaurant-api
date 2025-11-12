import { getAllCombos, getComboById, createCombo, updateCombo, deleteCombo } from '../services/comboService.js'

export async function getAllCombosHandler(req, res) { 
    const combos = await getAllCombos();
    res.status(200).json(combos);
}

export async function getComboByIdHandler(req, res) {
  let id = parseInt(req.params.id);
  let combo = await getComboById(id);
  res.status(200).json(combo);
}

export async function createComboHandler(req, res) {
  const data = {
    name: req.body.name,
    price: req.body.price,
    id: req.user.id,
  };
  let newCombo = await createCombo(data);
  res.status(201).json(newCombo);
}

export async function updateComboHandler(req, res) {
  let id = parseInt(req.params.id);
  const updates = {};
  if (req.body.name) updates.name = req.body.name;
  if (req.body.price) updates.pricee = req.body.price;

  const updatedCombo = await updateCombo(id, updates);
  res.status(200).json(updatedCombo);
}

export async function deleteComboHandler(req, res) {
  let id = parseInt(req.params.id);
  await deleteCombo(id);
  res.status(204).send();
}
