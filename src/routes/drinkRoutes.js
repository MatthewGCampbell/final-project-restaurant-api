import express from 'express'
import { getAllDrinksHandler, getDrinkByIdHandler, createDrinkHandler, updateDrinkHandler, deleteDrinkHandler } from '../controller/drinkController.js';
import { validateItemId, validateItemBody, validateUpdateItem } from '../middleware/itemValidators.js';
import { authenticate } from '../middleware/authenticate.js'
import { authorizeRoles } from '../middleware/authorizeRoles.js'


// need to add validators and authenticate/authororization
const router = express.Router();

router.get('/', getAllDrinksHandler);
router.get('/:id', validateItemId, getDrinkByIdHandler);
router.post('/', authenticate, authorizeRoles('HEAD_CHEF'), validateItemBody, createDrinkHandler);
router.put('/:id', authenticate, authorizeRoles('HEAD_CHEF'), validateItemId, validateUpdateItem, updateDrinkHandler);
router.delete('/:id', authenticate, authorizeRoles('HEAD_CHEF'), validateItemId, deleteDrinkHandler);

export default router; 