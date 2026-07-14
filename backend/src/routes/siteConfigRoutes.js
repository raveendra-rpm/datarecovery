import express from 'express';
import { getSiteConfig, updateSiteConfig, uploadImage, uploadSiteMedia } from '../controllers/siteConfigController.js';
import { protect, admin } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.route('/')
  .get(getSiteConfig)
  .put(protect, admin, updateSiteConfig);

router.post('/upload-image', protect, admin, uploadSiteMedia.single('image'), uploadImage);

export default router;
