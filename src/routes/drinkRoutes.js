import express from 'express'
import { getAllDrinksHandler, getDrinkByIdHandler, createDrinkHandler, updateDrinkHandler, deleteDrinkHandler } from '../controller/drinkController.js'

// need to add validators and authenticate/authororization
const router = express.Router();

router.get('/', getAllDrinksHandler);
router.get('/:id', getDrinkByIdHandler);
router.post('/', createDrinkHandler);
router.put('/:id', updateDrinkHandler);
router.delete('/:id', deleteDrinkHandler);

export default router; 