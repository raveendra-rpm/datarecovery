import type { Metadata } from 'next';
import { fetchBlogs, fetchBlogCategoriesMetrics, fetchCategories } from '@/lib/blog-api';
import BlogClientLayout from './BlogClientLayout';

const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || 'Data Storage Solutions';

export const dynamic = 'force-dynamic';

type SearchParams = Promise<{ category?: string; tag?: string }>;

export async function generateMetadata({
  searchParams,
}: {
  searchParams: SearchParams;
}): Promise<Metadata> {
  const { category, tag } = await searchParams;

  if (category) {
    return {
      title: `${category} Articles | Blog | ${SITE_NAME}`,
      description: `Read our latest articles and guides on ${category.toLowerCase()} from ${SITE_NAME}.`,
      alternates: { canonical: `/blogs?category=${encodeURIComponent(category)}` },
    };
  }
  if (tag) {
    return {
      title: `#${tag} | Blog | ${SITE_NAME}`,
      description: `Articles tagged "${tag}" from ${SITE_NAME}.`,
      alternates: { canonical: `/blogs?tag=${encodeURIComponent(tag)}` },
    };
  }

  return {
    title: `Blog | ${SITE_NAME}`,
    description:
      'Data recovery tips, guides and news from Data Storage Solutions — hard drive, SSD, RAID, and more.',
    alternates: { canonical: '/blogs' },
  };
}

export default async function BlogPage({ searchParams }: { searchParams: SearchParams }) {
  const { category, tag } = await searchParams;

  const [allPosts, categoriesMetrics, categories] = await Promise.all([
    fetchBlogs().catch(() => []),
    fetchBlogCategoriesMetrics().catch(() => []),
    fetchCategories().catch(() => []),
  ]);

  const posts = allPosts.filter((post) => {
    if (category && post.category !== category) return false;
    if (tag && !post.tags?.includes(tag)) return false;
    return true;
  });

  return (
    <BlogClientLayout
      articles={posts}
      metrics={categoriesMetrics}
      categories={categories.map((c) => c.name)}
      activeCategory={category}
      activeTag={tag}
    />
  );
}
