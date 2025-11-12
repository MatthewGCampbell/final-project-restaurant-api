import { param, query, body, oneOf } from 'express-validator';
import { handleValidationErrors } from './handleValidationErrors.js';


export const validateChefId = [
  param('id')
  .isInt({min: 1})
  .withMessage('Chef id must be a positive integer'),
  handleValidationErrors,
];
