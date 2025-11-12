import { param, query, body, oneOf } from 'express-validator';
import { handleValidationErrors } from './handleValidationErrors.js';

export const validateChefQuery = [
  query('limit')
  .optional()
  .isInt({min: 1, max: 15})
  .withMessage('limit must be an integer between 1 and 15'),
  handleValidationErrors
]