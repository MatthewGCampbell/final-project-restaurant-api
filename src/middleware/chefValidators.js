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

  body('email')
	.isEmail()
	.withMessage('Email must be included'),
	
  body('password')
	.isLength({ min: 8, max: 24 })
	.withMessage('Missing password or not long enough'),
  
  body('role')
  .optional()
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


export const validateUpdateChef = [
  oneOf (
    [
      body('name').exists(),
      body('email').exists(),
      body('password').exists(),
      body('role').exists(),
    ],
    {
      message: 'At least one field (name, email, password, role) must be provided'
    },
  ),

  body('name')
    .optional()
    .isString()
    .withMessage('Name must be a string'),

  body('email')
    .optional()
    .isEmail()
    .withMessage('Email must be a valid email'),

  body('password')
    .optional()
    .isLength({ min: 8, max: 64 }),
  
  body('role')
    .optional()
    .isIn([Role.HEAD_CHEF, Role.SOUS_CHEF])
    .withMessage('Role must be either HEAD_CHEF or SOUS_CHEF'),

    handleValidationErrors
];