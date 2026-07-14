// Client for the blog feature. Client-side calls go through the
// `/api-backend/*` rewrite in next.config.ts (same-origin, no CORS);
// server-side calls (Server Components) hit the backend directly.

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || '';

const getServerBaseUrl = () =>
  process.env.BACKEND_API_URL || 'http://localhost:5000';

export const api = (path: string) => {
  const p = path.replace(/^\//, '');
  if (typeof window !== 'undefined') return `/api-backend/${p}`;
  return `${getServerBaseUrl()}/api/${p}`;
};

// Resolves a `/uploads/...` (or bare filename) path from the DB into a URL
// the <Image>/<img> tag can load. Both client and server render through the
// same-origin `/uploads/*` rewrite, so a relative path always works;
// `absolute` is only needed for OG/JSON-LD tags that require a full URL.
export const getImageUrl = (path: string, absolute = false) => {
  if (!path) return '';
  if (path.startsWith('http')) return path;

  const normalizedPath = path.startsWith('/') ? path : `/${path}`;

  if (absolute) {
    return `${SITE_URL.replace(/\/$/, '')}${normalizedPath}`;
  }

  return normalizedPath;
};

export interface CommentReply {
  _id?: string;
  admin?: boolean;
  text: string;
  date?: string;
}

export interface CommentItem {
  _id?: string;
  name: string;
  email: string;
  website?: string;
  comment: string;
  date: string;
  replies?: CommentReply[];
}

export interface BlogItem {
  _id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  content: string;
  contentTablet?: string;
  contentMobile?: string;
  image: string;
  author?: string;
  category?: string;
  isUncategorized?: boolean;
  isActive?: boolean;
  comments?: CommentItem[];
  metaTitle?: string;
  metaDescription?: string;
  metaKeywords?: string;
  focusKeyword?: string;
  imageAlt?: string;
  canonicalUrl?: string;
  ogTitle?: string;
  ogDescription?: string;
  readingTime?: number;
  updatedAt?: string;
  tags?: string[];
  noindex?: boolean;
}

export interface BlogCategoryMetric {
  _id: string;
  count: number;
  latestTitle: string;
}

export interface CategoryItem {
  _id: string;
  name: string;
}

export async function fetchCategories(): Promise<CategoryItem[]> {
  try {
    const res = await fetch(api('/categories'), { cache: 'no-store' });
    if (!res.ok) return [];
    return res.json();
  } catch (e) {
    console.error('Failed to fetch categories:', e);
    return [];
  }
}

export async function fetchBlogs(): Promise<BlogItem[]> {
  try {
    const res = await fetch(api('/blogs'), { cache: 'no-store' });
    if (!res.ok) return [];
    return res.json();
  } catch (e) {
    console.error('Failed to fetch blogs:', e);
    return [];
  }
}

export async function fetchBlogItem(slug: string): Promise<BlogItem | null> {
  try {
    const res = await fetch(api(`/blogs/${slug}`), { cache: 'no-store' });
    if (!res.ok) return null;
    return res.json();
  } catch (e) {
    console.error('Failed to fetch blog item:', e);
    return null;
  }
}

export async function fetchBlogCategoriesMetrics(): Promise<
  BlogCategoryMetric[]
> {
  try {
    const res = await fetch(api('/blogs/metrics'), { cache: 'no-store' });
    if (!res.ok) return [];
    return res.json();
  } catch (e) {
    console.error('Failed to fetch blog categories metrics:', e);
    return [];
  }
}

export async function fetchBlogSearch(query: string): Promise<BlogItem[]> {
  try {
    const res = await fetch(api(`/blogs/search?q=${encodeURIComponent(query)}`));
    if (!res.ok) return [];
    return res.json();
  } catch (e) {
    console.error('Failed to search blogs:', e);
    return [];
  }
}
