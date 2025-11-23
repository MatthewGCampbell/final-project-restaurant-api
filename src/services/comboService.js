import { getAll, getById, create, update, remove } from '../repositories/comboRepo.js'
import { getDrinkById } from '../services/drinkService.js';
import { getItemById } from '../services/itemService.js';
import express from 'express';

export async function getAllCombos() {
  return await getAll();
}

export async function getComboById(id) {
  let result = await getById(id);
  if (result) return result;
  else {
    const error = new Error(`Cannot find combo with id ${id}`);
    error.status = 404;
    throw error;
  }
}

export async function createCombo(data) {
  if (data.foodItems) {
    for (const id of data.foodItems) {
      const item = await getItemById(id);
    }
  }

  // Check Drink items to make sure ID is valid
  if (data.drinkItems) {
    for (const id of data.drinkItems) {
      const item = await getDrinkById(id);
    }
  }

  return create(data);
}

export async function updateCombo(id, data) {

  if (data.foodItems) {
    for (const id of data.foodItems) {
      await getItemById(id);
    }
  }

  // Check Drink items to make sure ID is valid
  if (data.drinkItems) {
    for (const id of data.drinkItems) {
      await getDrinkById(id);
    }
  }

  try {
    const combo = await getComboById(id); // throws
    res.status(200).json(combo);
  } catch (err) {
    const error = new Error(`Cannot find combo with id ${id}`);
    error.status = 404;
    throw error;
  }
  const updatedCombo = await update(id, data);  
  return updatedCombo;
}

export async function deleteCombo(id) {
  const result = await remove(id);
  if (result) return;
  else {
    const error = new Error(`Cannot find combo with id ${id}`);
    error.status = 404;
    throw error;
  }
}