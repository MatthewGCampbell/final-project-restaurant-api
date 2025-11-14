import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { Prisma } from '../generated/prisma/index.js';
import { createChef } from '../repositories/chefRepo.js';

const JWT_SECRET = process.env.JWT_SECRET;
const JWT_EXPIRES_IN = process.env.JWT_EXPIRES_IN;

export async function signUp(email, password) {
  const hashedPassword = await bcrypt.hash(password, 10);
  try {
    const newUser = await createChef({ email, password: hashedPassword});
    return newUser;
  } catch(error) {
    if(error instanceof Prisma.PrismaClientKnownRequestError) {
      if(error.code = 'P2002') {
        const error = new Error('Email has already been used');
        error.status = 409;
        throw error;
      }
      throw error;
    }
  }
}