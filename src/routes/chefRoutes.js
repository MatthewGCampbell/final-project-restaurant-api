import express from 'express'
import { getAllChefsHandler, getChefByIdHandler, createChefHandler, updateChefHandler, deleteChefHandler } from '../controller/chefController.js'

// need to add validators and authenticate/authororization

const router = express.Router();
router.get('/', getAllChefsHandler);
router.get('/:id', getChefByIdHandler);
router.post('/', createChefHandler);
router.put('/:id', updateChefHandler);
router.delete('/:id', deleteChefHandler);

export default router; 


