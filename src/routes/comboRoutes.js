import express from 'express'
import { getAllCombosHandler, getComboByIdHandler, createComboHandler, updateComboHandler, deleteComboHandler } from '../controller/comboController.js'
import { validateComboBody, validateComboId, validateComboBodyUpdate } from '../middleware/comboValidators.js';
import { authenticate } from '../middleware/authenticate.js'
import { authorizeRoles } from '../middleware/authorizeRoles.js'

// need to add validators and authenticate/authororization

const router = express.Router();
router.get('/', getAllCombosHandler);
router.get('/:id', validateComboId, getComboByIdHandler);
router.post('/', authenticate, authorizeRoles('HEAD_CHEF'), validateComboBody, createComboHandler);
router.put('/:id', authenticate, authorizeRoles('HEAD_CHEF'), validateComboBodyUpdate, updateComboHandler);
router.delete('/:id', authenticate, authorizeRoles('HEAD_CHEF'), validateComboId, deleteComboHandler);

export default router; 
