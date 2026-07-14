import express from 'express';
import { createCategory, deleteCategory } from '../controllers/categoryController.js';

const router = express.Router();

// Mounted behind protect + editorOrAdmin in server.js (same /api/cms prefix as blogAdminRoutes)
router.post('/categories', createCategory);
router.delete('/categories/:id', deleteCategory);

export default router;
