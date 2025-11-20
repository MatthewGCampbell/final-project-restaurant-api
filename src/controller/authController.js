import e from 'express';
import { logIn } from '../services/authService.js';


// export async function addUserHandler(req, res) {
//   const {email, password} = req.body;
//   res.status(200).json(`Creating a new user with ${email} and ${password}`);
// }

export async function userLoginHandler(req, res) {
  const {email, password} = req.body;
  const accessToken = await logIn(email, password);
  res.status(200).json({ accessToken });
}