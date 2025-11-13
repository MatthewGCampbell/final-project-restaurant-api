import express from 'express';
import { addUserHandler, userLoginHandler } from '../controllers/authController.js';
import { validateSignup, validateLogin } from '../middleware/authValidators.js'

const router = express.Router();

router.post('/signup', validateSignup, addUserHandler);
router.post('/login', validateLogin, userLoginHandler)

export default router; 