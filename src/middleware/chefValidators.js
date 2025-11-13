import { param, query, body, oneOf } from 'express-validator';
import { handleValidationErrors } from './handleValidationErrors.js';
import { Role } from '../config/db.js';

export const validateChefQuery = [
  query('limit')
  .optional()
  .isInt({min: 1, max: 15})
  .withMessage('limit must be an integer between 1 and 15'),
  handleValidationErrors
];

export const validateChefBody = [
  body('name')
  .isString()
  .withMessage('Name must be a string'),
  handleValidationErrors,

  body('role')
  .isIn([Role.HEAD_CHEF, Role.SOUS_CHEF])
  .withMessage('Role must be either HEAD_CHEF or SOUS_CHEF'),
  handleValidationErrors,
];

export const validateChefId = [
  param('id')
  .isInt({min: 1})
  .withMessage("Id must be an integer with a minimum value of 1"),
  handleValidationErrors,
];