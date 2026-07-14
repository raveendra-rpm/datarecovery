import express from 'express';
import {
  getAllBlogs,
  getBlogBySlug,
  searchBlogs,
  addComment,
  getBlogCategoriesMetrics,
} from '../controllers/blogController.js';

const router = express.Router();

router.get('/', getAllBlogs);
router.get('/metrics', getBlogCategoriesMetrics);
router.get('/search', searchBlogs);
router.get('/:slug', getBlogBySlug);
router.post('/:id/comment', addComment);

export default router;
