import { getAllDrink, getDrinkById, createDrink, updateDrink, deleteDrink } from '../services/drinkService.js'

export async function getAllDrinksHandler(req, res) { 
    const drinks = await getAllDrink();
    res.status(200).json(drinks);
}

export async function getDrinkByIdHandler(req, res) {
  let id = parseInt(req.params.id);
  let drink = await getDrinkById(id);
  res.status(200).json(drink);
}

export async function createDrinkHandler(req, res) {
  const data = {
    name: req.body.name,
    price: req.body.price
  };
  let newDrink = await createDrink(data);
  res.status(201).json(newDrink);
}

export async function updateDrinkHandler(req, res) {
  let id = parseInt(req.params.id);
  const updates = {};
  if (req.body.name) updates.name = req.body.name;
  if (req.body.price) updates.price = req.body.price;

  const updatedDrink = await updateDrink(id, updates);
  res.status(200).json(updatedDrink);
}

export async function deleteDrinkHandler(req, res) {
  let id = parseInt(req.params.id);
  await deleteDrink(id);
  res.status(204).send();
}