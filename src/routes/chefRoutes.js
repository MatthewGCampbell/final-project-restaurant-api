import express from 'express'
import { getAllChefsHandler } from '../controller/chefController.js'
import { validateChefQuery } from '../middleware/chefValidators.js'

// need to add validators and authenticate/authororization

const router = express.Router();
router.get('/', validateChefQuery, getAllChefsHandler);


export default router; 
