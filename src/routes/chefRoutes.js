import express from 'express'
import { getAllChefsHandler, addChefHandler, updateChefHandler, deleteChefHandler, getChefByIdHandler } from '../controllers/chefController.js'
import { validateChefQuery, validateChefBody, validateChefId } from '../middleware/chefValidators.js'
import { authenticate } from '../middleware/authenticate.js'
import { authorizeRoles } from '../middleware/authorizeRoles.js'

// need to add validators and authenticate/authororization

const router = express.Router();
router.get('/', validateChefQuery, getAllChefsHandler);
router.get('/:id', validateChefId, getChefByIdHandler);
router.post('/', authenticate, authorizeRoles('HEAD_CHEF'), validateChefBody, addChefHandler);
router.put('/:id', validateChefId, validateChefBody, updateChefHandler);
router.delete('/:id', validateChefId, authorizeRoles('HEAD_CHEF'), deleteChefHandler);

export default router; 
