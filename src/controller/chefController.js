import e from 'express';
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

export async function getChefByIdHandler(req, res) {
  const { id } = req.params;
  res.status(200).json(`Geting chef with id ${id}`);
}

// TODO: Example Handler Please Change
export async function addChefHandler(req, res) {
  const { name, role } = req.body;
  console.log(name);
  console.log(role);
  const newChef = await addChef({name, role});
  res.status(200).json(newChef);
}

// TODO: Example Handler Please Change
export async function updateChefHandler(req, res) {
  const { id } = req.params;
  const {name, role} = req.body;
  console.log(id);
  res.status(200).json(`Updating chef with id ${id} with the new name of ${name} and the new role of ${role}`)
}

// TODO: Example Handler Please Change
export async function deleteChefHandler(req, res) {
  const { id } = req.params;
  console.log(id);
  res.status(200).json(`Deleting chef with id ${id}`)
}
