import express from 'express';
import { loginUser } from '../controllers/authController.js';
import { z } from 'zod';
import { validate } from '../middlewares/validate.js';

const router = express.Router();

const loginSchema = z.object({
  body: z.object({
    email: z.string().email('Invalid email format'),
    password: z.string().min(6, 'Password must be at least 6 characters'),
  }),
});

router.post('/login', validate(loginSchema), loginUser);

export default router;
