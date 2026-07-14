import express from 'express';
import { createContact } from '../controllers/contactController.js';

const router = express.Router();

// Public — submitted by the /contacts page form.
router.post('/', createContact);

export default router;
