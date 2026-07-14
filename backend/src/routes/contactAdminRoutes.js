import express from 'express';
import {
  getAdminContacts,
  updateContactStatus,
  deleteContact,
} from '../controllers/contactController.js';

const router = express.Router();

// Mounted behind protect + editorOrAdmin in server.js
router.get('/contacts', getAdminContacts);
router.patch('/contacts/:id/status', updateContactStatus);
router.delete('/contacts/:id', deleteContact);

export default router;
