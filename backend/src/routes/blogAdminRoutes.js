import express from 'express';
import {
  getAdminBlogs,
  createBlog,
  updateBlog,
  deleteBlog,
  replyToComment,
  deleteAdminReply,
  deleteComment,
  upload,
  uploadBlogImage,
} from '../controllers/blogController.js';

const router = express.Router();

// Mounted behind protect + editorOrAdmin in server.js
router.get('/blogs', getAdminBlogs);
router.post('/blogs', upload.single('image'), createBlog);
router.put('/blogs/:id', upload.single('image'), updateBlog);
router.delete('/blogs/:id', deleteBlog);

// TinyMCE inline image upload (used by the editor's images_upload_url)
router.post('/blogs/image-upload-direct', upload.single('file'), uploadBlogImage);

// Comment moderation
router.post('/blogs/:id/comments/:commentId/reply', replyToComment);
router.delete('/blogs/:id/comments/:commentId/reply/:replyId', deleteAdminReply);
router.delete('/blogs/:id/comments/:commentId', deleteComment);

export default router;
