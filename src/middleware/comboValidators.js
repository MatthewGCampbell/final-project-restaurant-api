import { param, query, body, oneOf } from 'express-validator';
import { handleValidationErrors } from './handleValidationErrors.js';

export const validateComboId = [
  param('id')
  .isInt({min: 1})
  .withMessage("Id must be an integer with a minimum value of 1"),
  handleValidationErrors,
];


/* {
    "name": "5 for 5",
    "price": 15,
    "foodItems": [1, 2, 3],
    "drinkItems": [2]
} */

export const validateComboBody = [

  oneOf (
    [
      body('foodItems').exists(),
      body('drinkItems').exists()
    ],
    {
      message: 'You must either have drink or food items'
    },
  ),


  body('name')
  .isString()
  .withMessage('Name must be a string'),

  body('price')
  .isInt()
  .withMessage('Price must be an int'),
  
  body('foodItems')
  .optional()
  .isArray()
  .withMessage('FoodItems must be an array'),
  
  body('drinkItems')
  .optional()
  .isArray()
  .withMessage('drinkItems must be an array'),
  handleValidationErrors
];

export const validateComboBodyUpdate = [

  oneOf (
    [
      body('name').exists(),
      body('price').exists(),
      body('foodItems').exists(),
      body('drinkItems').exists()
    ],
    {
      message: 'You must either have a name, price, drink items, food items'
    },
  ),


  body('name')
  .optional()
  .isString()
  .withMessage('Name must be a string'),

  body('price')
  .optional()
  .isInt()
  .withMessage('Price must be an int'),
  
  body('foodItems')
  .optional()
  .isArray()
  .withMessage('FoodItems must be an array'),
  
  body('drinkItems')
  .optional()
  .isArray()
  .withMessage('drinkItems must be an array'),
  handleValidationErrors
];