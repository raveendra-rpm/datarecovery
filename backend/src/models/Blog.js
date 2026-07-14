import mongoose from 'mongoose';

const commentSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  website: { type: String },
  comment: { type: String, required: true },
  date: { type: Date, default: Date.now },
  replies: [
    {
      admin: { type: Boolean, default: false },
      text: { type: String, required: true },
      date: { type: Date, default: Date.now },
    },
  ],
});

const blogSchema = new mongoose.Schema(
  {
    title: { type: String, required: true, trim: true },
    slug: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
      trim: true,
    },
    excerpt: { type: String, default: '' },
    content: { type: String, default: '' }, // Rich HTML from the CMS editor
    contentTablet: { type: String, default: '' }, // Optional tablet-specific override
    contentMobile: { type: String, default: '' }, // Optional mobile-specific override
    contentImages: [{ type: String }], // Embedded editor image paths extracted from content
    image: { type: String, required: true }, // Main thumbnail/OG image path
    imageAlt: { type: String, default: '' }, // Alt text for SEO + accessibility
    author: { type: String, default: 'Admin' },
    date: { type: String, required: true },
    category: { type: String, default: '' },
    isUncategorized: { type: Boolean, default: false },
    isActive: { type: Boolean, default: true },
    tags: [{ type: String, trim: true }],
    noindex: { type: Boolean, default: false }, // when true, tells search engines not to index this post

    // ── SEO fields ──
    metaTitle: { type: String, default: '' },
    metaDescription: { type: String, default: '' },
    metaKeywords: { type: String, default: '' },
    focusKeyword: { type: String, default: '' }, // Drives the live SEO score checks
    canonicalUrl: { type: String, default: '' },
    ogTitle: { type: String, default: '' },
    ogDescription: { type: String, default: '' },
    readingTime: { type: Number, default: 0 }, // Auto-estimated from word count

    comments: [commentSchema],
  },
  { timestamps: true },
);

// Text index so title/content/category search works out of the box
blogSchema.index({ title: 'text', content: 'text', category: 'text' });

const Blog = mongoose.model('Blog', blogSchema);
export default Blog;
