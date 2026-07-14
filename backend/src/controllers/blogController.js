import multer from 'multer';
import path from 'path';
import fs from 'fs';
import Blog from '../models/Blog.js';
import { escapeRegex } from '../middlewares/security.js';

const SITE_URL = (process.env.NEXT_PUBLIC_SITE_URL || 'https://datastoragesolutions.in').replace(/\/$/, '');

// Auto-generates a URL-safe slug from the post title when the admin leaves
// the slug field blank, so every post gets an SEO-friendly URL by default.
const slugify = (value = '') =>
  String(value)
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '')
    .slice(0, 100);

const stripHtmlToText = (html = '') => {
  if (typeof html !== 'string' || !html) return '';
  return html
    .replace(/<[^>]*>/g, ' ')
    .replace(/&nbsp;/g, ' ')
    .replace(/&amp;/g, '&')
    .replace(/&lt;/g, '<')
    .replace(/&gt;/g, '>')
    .replace(/&quot;/g, '"')
    .replace(/&#39;/g, "'")
    .replace(/\s+/g, ' ')
    .trim();
};

// Average adult reading speed (~200 wpm) used to auto-estimate reading time
// when the admin doesn't set one explicitly.
const computeReadingTime = (content = '') => {
  const words = stripHtmlToText(content).split(' ').filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
};

const normalizeUploadPath = (value = '') => {
  if (typeof value !== 'string' || !value) return '';
  const cleanValue = value.replace(/\\/g, '/').trim();
  const match = cleanValue.match(
    /(?:https?:\/\/[^"'\s<>)]+)?(?:\.\.\/)*\/?uploads\/[^"'\s<>)]+/i,
  );
  if (!match) return cleanValue;

  const uploadsIndex = match[0].toLowerCase().indexOf('uploads/');
  return `/${match[0].slice(uploadsIndex)}`;
};

const normalizeRichContent = (content = '') => {
  if (typeof content !== 'string' || !content) return '';
  return content.replace(
    /\b(src|href)=["']([^"']+)["']/gi,
    (fullMatch, attribute, url) => {
      const normalizedUrl = normalizeUploadPath(url);
      return normalizedUrl === url
        ? fullMatch
        : `${attribute}="${normalizedUrl}"`;
    },
  );
};

// Accepts a comma-separated string (from the form) or an array (from JSON
// clients) and returns a clean, de-duplicated array of tag strings.
const parseTags = (value) => {
  if (Array.isArray(value)) {
    return [...new Set(value.map((t) => String(t).trim()).filter(Boolean))];
  }
  if (typeof value === 'string' && value.trim()) {
    return [...new Set(value.split(',').map((t) => t.trim()).filter(Boolean))];
  }
  return [];
};

const extractContentImages = (content = '') => {
  if (typeof content !== 'string' || !content) return [];
  const matches = [...content.matchAll(/<img[^>]+src=["']([^"']+)["']/gi)];
  return [
    ...new Set(
      matches.map((match) => normalizeUploadPath(match[1])).filter(Boolean),
    ),
  ];
};

const normalizeBlogOutput = (blogDoc) => {
  const obj = blogDoc.toObject();
  obj.content = normalizeRichContent(obj.content || '');
  obj.contentTablet = normalizeRichContent(obj.contentTablet || '');
  obj.contentMobile = normalizeRichContent(obj.contentMobile || '');
  obj.contentImages =
    Array.isArray(obj.contentImages) && obj.contentImages.length
      ? obj.contentImages.map(normalizeUploadPath).filter(Boolean)
      : extractContentImages(
          [obj.content, obj.contentTablet, obj.contentMobile]
            .filter(Boolean)
            .join(''),
        );
  return obj;
};

// ── Multer storage for the featured image + inline editor images ──
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    const dir = 'uploads/blogs';
    if (!fs.existsSync(dir)) {
      fs.mkdirSync(dir, { recursive: true });
    }
    cb(null, dir);
  },
  filename: (req, file, cb) => {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1e9);
    cb(null, `blog-media-${uniqueSuffix}${path.extname(file.originalname)}`);
  },
});

const fileFilter = (req, file, cb) => {
  if (file.mimetype.startsWith('image/')) {
    cb(null, true);
  } else {
    cb(new Error('Only image files are allowed!'), false);
  }
};

export const upload = multer({
  storage,
  fileFilter,
  limits: { fileSize: 10 * 1024 * 1024 }, // 10MB limit
});

// ───────────────────────── Public endpoints ─────────────────────────

export const getAllBlogs = async (req, res) => {
  try {
    const limit = parseInt(req.query.limit) || 0;
    const blogs = await Blog.find({ isActive: true })
      .sort({ createdAt: -1 })
      .limit(limit);
    res.json(blogs.map(normalizeBlogOutput));
  } catch (error) {
    console.error('[BLOG]', error.message);
    res.status(500).json({ error: 'An internal error occurred.' });
  }
};

// Category list with post counts — powers the blog sidebar "Categories" widget
export const getBlogCategoriesMetrics = async (req, res) => {
  try {
    const pipeline = [
      { $match: { isUncategorized: { $ne: true }, isActive: true } },
      { $sort: { createdAt: -1 } },
      {
        $group: {
          _id: '$category',
          count: { $sum: 1 },
          latestTitle: { $first: '$title' },
        },
      },
    ];
    const metrics = await Blog.aggregate(pipeline);
    res.json(metrics);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const addComment = async (req, res) => {
  try {
    const blog = await Blog.findById(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });

    const { name, email, website, comment } = req.body;

    if (
      !name ||
      !comment ||
      typeof name !== 'string' ||
      typeof comment !== 'string'
    ) {
      return res.status(400).json({ error: 'Name and comment are required.' });
    }
    if (name.length > 100 || comment.length > 2000) {
      return res.status(400).json({ error: 'Input exceeds maximum length.' });
    }

    blog.comments.push({
      name: name.trim().substring(0, 100),
      email: email ? String(email).trim().substring(0, 200) : '',
      website: website ? String(website).trim().substring(0, 200) : '',
      comment: comment.trim().substring(0, 2000),
    });
    await blog.save();

    res.status(201).json(blog);
  } catch (error) {
    console.error('[BLOG]', error.message);
    res.status(500).json({ error: 'An internal error occurred.' });
  }
};

export const getBlogBySlug = async (req, res) => {
  try {
    const blog = await Blog.findOne({ slug: req.params.slug, isActive: true });
    if (!blog) return res.status(404).json({ error: 'Blog article not found' });
    res.json(normalizeBlogOutput(blog));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const searchBlogs = async (req, res) => {
  try {
    const query = req.query.q || '';
    if (!query || typeof query !== 'string') return res.json([]);

    const safeQuery = escapeRegex(query.substring(0, 100));
    const regex = new RegExp(safeQuery, 'i');
    const blogs = await Blog.find({
      isActive: true,
      $or: [{ title: regex }, { category: regex }],
    })
      .limit(5)
      .select('title slug image category');

    res.json(blogs);
  } catch (error) {
    console.error('[BLOG]', error.message);
    res.status(500).json({ error: 'An internal error occurred.' });
  }
};

// ───────────────────────── Admin (CMS) endpoints ─────────────────────────
// Mounted behind the existing protect + editorOrAdmin JWT middleware (see
// routes/blogAdminRoutes.js).

export const getAdminBlogs = async (req, res) => {
  try {
    const blogs = await Blog.find().sort({ createdAt: -1 });
    res.json(blogs.map(normalizeBlogOutput));
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createBlog = async (req, res) => {
  try {
    const {
      title,
      slug,
      excerpt,
      content,
      contentTablet,
      contentMobile,
      date,
      category,
      isUncategorized,
      isActive,
      author,
      metaTitle,
      metaDescription,
      metaKeywords,
      focusKeyword,
      imageAlt,
      canonicalUrl,
      ogTitle,
      ogDescription,
      readingTime,
      tags,
      noindex,
    } = req.body;

    const imagePath = req.file
      ? `/uploads/blogs/${req.file.filename}`
      : normalizeUploadPath(req.body.image || '');
    const normalizedContent = normalizeRichContent(content || '');
    const normalizedTabletContent = normalizeRichContent(contentTablet || '');
    const normalizedMobileContent = normalizeRichContent(contentMobile || '');

    // Keep meta keywords in sync with the focus keyword tags when not set explicitly
    const finalFocusKeyword = focusKeyword || '';
    const finalMetaKeywords = metaKeywords || finalFocusKeyword;
    const finalSlug = (slug && slug.trim()) || slugify(title);
    const finalExcerpt =
      excerpt || stripHtmlToText(content).slice(0, 160);
    const finalReadingTime =
      Number(readingTime) || computeReadingTime(content);

    const blog = await Blog.create({
      title,
      slug: finalSlug,
      excerpt: finalExcerpt,
      content: normalizedContent,
      contentTablet: normalizedTabletContent,
      contentMobile: normalizedMobileContent,
      contentImages: extractContentImages(
        [normalizedContent, normalizedTabletContent, normalizedMobileContent]
          .filter(Boolean)
          .join(''),
      ),
      author: author || (req.user && req.user.name) || 'Admin',
      date:
        date ||
        new Date().toLocaleDateString('en-GB', {
          day: '2-digit',
          month: 'long',
          year: 'numeric',
        }),
      image: imagePath,
      imageAlt: imageAlt || title,
      category:
        isUncategorized === 'true' || isUncategorized === true ? '' : category,
      isUncategorized: isUncategorized === 'true' || isUncategorized === true,
      isActive: isActive !== 'false' && isActive !== false,
      metaTitle: metaTitle || title, // Fallback to title
      metaDescription:
        metaDescription !== undefined && metaDescription !== ''
          ? metaDescription
          : finalExcerpt,
      metaKeywords: finalMetaKeywords,
      focusKeyword: finalFocusKeyword,
      canonicalUrl: canonicalUrl || `${SITE_URL}/blogs/${finalSlug}`,
      ogTitle: ogTitle || '',
      ogDescription: ogDescription || '',
      readingTime: finalReadingTime,
      tags: parseTags(tags),
      noindex: noindex === 'true' || noindex === true,
    });

    res.status(201).json(blog);
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ error: 'A post with this slug already exists.' });
    }
    res.status(500).json({ error: error.message });
  }
};

export const updateBlog = async (req, res) => {
  try {
    const {
      title,
      slug,
      excerpt,
      content,
      contentTablet,
      contentMobile,
      date,
      category,
      isUncategorized,
      isActive,
      author,
      image,
      metaTitle,
      metaDescription,
      metaKeywords,
      focusKeyword,
      imageAlt,
      canonicalUrl,
      ogTitle,
      ogDescription,
      readingTime,
      tags,
      noindex,
    } = req.body;

    const finalFocusKeyword = focusKeyword || '';
    const finalMetaKeywords = metaKeywords || finalFocusKeyword;
    const finalSlug = (slug && slug.trim()) || slugify(title);
    const finalExcerpt =
      excerpt || stripHtmlToText(content).slice(0, 160);
    const finalReadingTime =
      Number(readingTime) || computeReadingTime(content);

    const normalizedContent = normalizeRichContent(content || '');
    const normalizedTabletContent = normalizeRichContent(contentTablet || '');
    const normalizedMobileContent = normalizeRichContent(contentMobile || '');
    const updates = {
      title,
      slug: finalSlug,
      excerpt: finalExcerpt,
      content: normalizedContent,
      contentTablet: normalizedTabletContent,
      contentMobile: normalizedMobileContent,
      contentImages: extractContentImages(
        [normalizedContent, normalizedTabletContent, normalizedMobileContent]
          .filter(Boolean)
          .join(''),
      ),
      author: author || 'Admin',
      date,
      category:
        isUncategorized === 'true' || isUncategorized === true ? '' : category,
      isUncategorized: isUncategorized === 'true' || isUncategorized === true,
      isActive: isActive !== 'false' && isActive !== false,
      metaTitle: metaTitle || title,
      metaDescription:
        metaDescription !== undefined && metaDescription !== ''
          ? metaDescription
          : finalExcerpt,
      metaKeywords: finalMetaKeywords,
      focusKeyword: finalFocusKeyword,
      imageAlt: imageAlt || title,
      canonicalUrl: canonicalUrl || `${SITE_URL}/blogs/${finalSlug}`,
      ogTitle: ogTitle || '',
      ogDescription: ogDescription || '',
      readingTime: finalReadingTime,
      tags: parseTags(tags),
      noindex: noindex === 'true' || noindex === true,
    };

    if (req.file) {
      updates.image = `/uploads/blogs/${req.file.filename}`;
    } else if (image && image.trim() !== '') {
      updates.image = normalizeUploadPath(image);
    }

    const blog = await Blog.findByIdAndUpdate(req.params.id, updates, {
      new: true,
      runValidators: true,
    });
    if (!blog) return res.status(404).json({ error: 'Blog not found' });

    res.json(normalizeBlogOutput(blog));
  } catch (error) {
    if (error.code === 11000) {
      return res.status(409).json({ error: 'A post with this slug already exists.' });
    }
    res.status(500).json({ error: error.message });
  }
};

export const deleteBlog = async (req, res) => {
  try {
    const blog = await Blog.findByIdAndDelete(req.params.id);
    if (!blog) return res.status(404).json({ error: 'Blog not found' });
    res.json({ ok: true });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const replyToComment = async (req, res) => {
  try {
    const { id, commentId } = req.params;
    const { text } = req.body;

    const blog = await Blog.findOneAndUpdate(
      { _id: id, 'comments._id': commentId },
      { $push: { 'comments.$.replies': { admin: true, text } } },
      { new: true },
    );
    if (!blog)
      return res.status(404).json({ error: 'Blog or Comment not found' });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteAdminReply = async (req, res) => {
  try {
    const { id, commentId, replyId } = req.params;

    const blog = await Blog.findOneAndUpdate(
      { _id: id, 'comments._id': commentId },
      { $pull: { 'comments.$.replies': { _id: replyId } } },
      { new: true },
    );
    if (!blog)
      return res
        .status(404)
        .json({ error: 'Blog, Comment or Reply not found' });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const deleteComment = async (req, res) => {
  try {
    const { id, commentId } = req.params;

    const blog = await Blog.findByIdAndUpdate(
      id,
      { $pull: { comments: { _id: commentId } } },
      { new: true },
    );
    if (!blog)
      return res.status(404).json({ error: 'Blog or Comment not found' });
    res.json(blog);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// TinyMCE inline image upload handler — TinyMCE expects `{ location }` back
export const uploadBlogImage = (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: 'No file uploaded' });
    }
    const imagePath = `/uploads/blogs/${req.file.filename}`;
    res.json({ location: imagePath, path: imagePath });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
