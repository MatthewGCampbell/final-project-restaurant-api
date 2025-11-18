import express from 'express';
import { getAllItemsHandler, getItemByIdHandler, createItemHandler, updateItemHandler, deleteItemHandler } from '../controller/itemController.js';

const router = express.Router();

// add middleware and validators
router.get('/', getAllItemsHandler);

router.get('/:id', getItemByIdHandler);

router.post('/', createItemHandler);

router.put('/:id', updateItemHandler);

router.delete('/:id', deleteItemHandler); 

export default router; 