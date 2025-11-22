import { param, query, body, oneOf } from 'express-validator';
import { handleValidationErrors } from './handleValidationErrors.js';


export const validateItemId = [
  param('id')
  .isInt({min: 1})
  .withMessage("Id must be an integer with a minimum value of 1"),
  handleValidationErrors,
];


export const validateItemBody = [
  body('name')
  .isString()
  .withMessage('Name must be a string'),

  body('price')
    .isInt({min: 1})
    .withMessage('Price must be an integer with a minimum value of 1'),
  handleValidationErrors,
];

export const validateUpdateItem = [
  oneOf (
    [
      body('name').exists(),
      body('price').exists(),
    ],
    {
      message: 'At least one field (name, price) must be provided'
    },
  ),

  body('name')
    .optional()
    .isString()
    .withMessage('Name must be a string'),

  body('price')
    .optional()
    .isFloat()
    .withMessage('Price must be a valid decimal'),

    handleValidationErrors
];
