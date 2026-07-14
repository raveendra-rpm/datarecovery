import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.js';
import authRoutes from './routes/authRoutes.js';
import userRoutes from './routes/userRoutes.js';
import blogRoutes from './routes/blogRoutes.js';
import blogAdminRoutes from './routes/blogAdminRoutes.js';
import categoryRoutes from './routes/categoryRoutes.js';
import categoryAdminRoutes from './routes/categoryAdminRoutes.js';
import siteConfigRoutes from './routes/siteConfigRoutes.js';
import contactRoutes from './routes/contactRoutes.js';
import contactAdminRoutes from './routes/contactAdminRoutes.js';
import { protect, editorOrAdmin } from './middlewares/authMiddleware.js';

dotenv.config();

connectDB();

const app = express();

app.use(cors());
app.use(express.json());
app.use('/uploads', express.static('uploads'));

app.use('/api/auth', authRoutes);
app.use('/api/users', userRoutes);
app.use('/api/blogs', blogRoutes);
app.use('/api/categories', categoryRoutes);
app.use('/api/cms', protect, editorOrAdmin, blogAdminRoutes);
app.use('/api/cms', protect, editorOrAdmin, categoryAdminRoutes);
app.use('/api/cms', protect, editorOrAdmin, contactAdminRoutes);
app.use('/api/site-config', siteConfigRoutes);
app.use('/api/contacts', contactRoutes);

app.get('/api/health', (req, res) => {
  res.json({ status: 'API is running...' });
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running in ${process.env.NODE_ENV || 'development'} mode on port ${PORT}`);
});
