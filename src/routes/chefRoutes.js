import express from 'express'
import { getAllChefsHandler, addChefHandler } from '../controller/chefController.js'
import { validateChefQuery, validateCreateChef } from '../middleware/chefValidators.js'

// need to add validators and authenticate/authororization

const router = express.Router();
router.get('/', validateChefQuery, getAllChefsHandler);
router.post('/', validateCreateChef, addChefHandler);

export default router; 
