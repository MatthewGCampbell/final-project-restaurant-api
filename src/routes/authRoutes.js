import express from 'express';
import { userLoginHandler } from '../controllers/authController.js';
import { validateLogin } from '../middleware/authValidators.js'

const router = express.Router();

router.post('/login', validateLogin, userLoginHandler)

export default router; 