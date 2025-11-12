import express from 'express'
import { getAllChefsHandler } from '../controller/chefController.js'

// need to add validators and authenticate/authororization

const router = express.Router();
router.get('/', getAllChefsHandler);

export default router; 
