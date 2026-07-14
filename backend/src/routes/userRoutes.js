import express from 'express';
import { getUsers, createUser, updateUserProfile } from '../controllers/userController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(protect, admin, getUsers)
  .post(protect, admin, createUser);

router.route('/profile').put(protect, updateUserProfile);

export default router;
