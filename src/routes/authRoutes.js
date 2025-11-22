import express from 'express';
import { userLoginHandler } from '../controller/authController.js';
import { validateLogin } from '../middleware/authValidators.js'

const router = express.Router();

router.get('/login', validateLogin, userLoginHandler)

export default router; 