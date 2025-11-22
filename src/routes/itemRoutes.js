import express from 'express';
import { getAllItemsHandler, getItemByIdHandler, createItemHandler, updateItemHandler, deleteItemHandler } from '../controller/itemController.js';
import { validateItemId, validateItemBody, validateUpdateItem } from '../middleware/itemValidators.js'
import { authenticate } from '../middleware/authenticate.js'
import { authorizeRoles } from '../middleware/authorizeRoles.js'

const router = express.Router();

// add middleware and validators
router.get('/', getAllItemsHandler);
router.get('/:id', validateItemId, getItemByIdHandler);
router.post('/', authenticate, authorizeRoles('HEAD_CHEF'), validateItemBody, createItemHandler);
router.put('/:id', authenticate, authorizeRoles('HEAD_CHEF'), validateUpdateItem, validateItemId, updateItemHandler);
router.delete('/:id', authenticate, authorizeRoles('HEAD_CHEF'), validateItemId, deleteItemHandler); 

export default router;