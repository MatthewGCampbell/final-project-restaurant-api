import express from 'express'
import { getAllCombosHandler, getComboByIdHandler, createComboHandler, updateComboHandler, deleteComboHandler } from '../controller/comboController.js'

// need to add validators and authenticate/authororization

const router = express.Router();
router.get('/', getAllCombosHandler);
router.get('/:id', getComboByIdHandler);
router.post('/', createComboHandler);
router.put('/:id', updateComboHandler);
router.delete('/:id', deleteComboHandler);

export default router; 
