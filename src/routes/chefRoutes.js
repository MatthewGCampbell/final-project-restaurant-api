import express from 'express'
import { getAllChefsHandler, addChefHandler, updateChefHandler, deleteChefHandler, getChefByIdHandler } from '../controllers/chefController.js'
import { validateChefQuery, validateChefBody, validateChefId } from '../middleware/chefValidators.js'

// need to add validators and authenticate/authororization

const router = express.Router();
router.get('/', validateChefQuery, getAllChefsHandler);
router.get('/:id', validateChefId, getChefByIdHandler);
router.post('/', validateChefBody, addChefHandler);
router.put('/:id', validateChefId, validateChefBody, updateChefHandler);
router.delete('/:id', validateChefId, deleteChefHandler);

export default router; 
