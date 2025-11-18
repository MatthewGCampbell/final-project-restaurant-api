import express from 'express'
import { validateChefQuery, validateChefBody, validateChefId } from '../middleware/chefValidators.js'
import { authenticate } from '../middleware/authenticate.js'
import { authorizeRoles } from '../middleware/authorizeRoles.js'
import { getAllChefsHandler, getChefByIdHandler, createChefHandler, updateChefHandler, deleteChefHandler } from '../controller/chefController.js'

// need to add validators and authenticate/authororization
// TODO: validateChefBody needs fixing for post /
// + validate for put (update) not created yet 
const router = express.Router();
router.get('/', validateChefQuery, getAllChefsHandler);
router.get('/:id', validateChefId,getChefByIdHandler);
router.post('/', authenticate, authorizeRoles('HEAD_CHEF'), validateChefBody, createChefHandler); 
router.put('/:id', validateChefId, updateChefHandler);
router.delete('/:id', authenticate, authorizeRoles('HEAD_CHEF'), validateChefId, deleteChefHandler);

export default router; 

