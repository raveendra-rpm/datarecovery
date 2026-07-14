import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Calendar, Clock, Tag } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import BlogArticleSchema from '@/components/schema/BlogArticleSchema';
import TableOfContents from '@/components/blog/TableOfContents';
import RelatedPosts from '@/components/blog/RelatedPosts';
import ShareButtons from '@/components/blog/ShareButtons';
import { buildTableOfContents } from '@/lib/toc';
import {
  fetchBlogs,
  fetchBlogItem,
  fetchBlogCategoriesMetrics,
  fetchCategories,
  getImageUrl,
} from '@/lib/blog-api';
import BlogSidebar, { BlogSearchWidget } from '../BlogSidebar';
import BlogComments from './BlogComments';

const SITE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://datastoragesolutions.in';
const SITE_NAME = process.env.NEXT_PUBLIC_SITE_NAME || 'Data Storage Solutions';

export const dynamic = 'force-dynamic';

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = await fetchBlogItem(slug);

  if (!post) {
    return { title: `Post Not Found | ${SITE_NAME}` };
  }

  const title = post.metaTitle || `${post.title} | ${SITE_NAME}`;
  const description = post.metaDescription || post.excerpt || post.title;

  return {
    title,
    description,
    keywords: post.metaKeywords || undefined,
    alternates: {
      canonical: post.canonicalUrl || `${SITE_URL}/blogs/${slug}`,
    },
    robots: post.noindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
    openGraph: {
      title: post.ogTitle || title,
      description: post.ogDescription || description,
      images: [getImageUrl(post.image, true)],
      type: 'article',
      publishedTime: post.date,
      authors: [post.author || 'Admin'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.ogTitle || title,
      description: post.ogDescription || description,
      images: [getImageUrl(post.image, true)],
    },
  };
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = await fetchBlogItem(slug);

  if (!post) {
    notFound();
  }

  const [dbPosts, categoriesMetrics, categories] = await Promise.all([
    fetchBlogs().catch(() => []),
    fetchBlogCategoriesMetrics().catch(() => []),
    fetchCategories().catch(() => []),
  ]);

  const wordCount = post.content
    ? post.content.replace(/<[^>]+>/g, ' ').split(/\s+/).filter(Boolean).length
    : undefined;

  const { toc, html: contentWithAnchors } = buildTableOfContents(post.content || '');

  const relatedPosts = dbPosts
    .filter((p) => p.slug !== post.slug && p.category && p.category === post.category)
    .slice(0, 3);

  const shareUrl = `${SITE_URL}/blogs/${slug}`;

  return (
    <main className="min-h-screen bg-[#f4f5f5]">
      <BlogArticleSchema
        title={post.title}
        slug={slug}
        excerpt={post.excerpt || post.metaDescription || post.title}
        image={getImageUrl(post.image, true)}
        date={post.date}
        author={post.author}
        category={post.category}
        readingTime={post.readingTime}
        dateModified={post.updatedAt}
        keywords={post.metaKeywords}
        imageAlt={post.imageAlt}
        canonicalUrl={post.canonicalUrl}
        wordCount={wordCount}
      />

      <PageHeader
        title="Blog Details"
        backgroundImage={getImageUrl(post.image) || '/images/who_we_are/about_us_banner.jpg'}
        breadcrumb={[
          { label: 'HOME', href: '/' },
          { label: 'BLOGS', href: '/blogs' },
          ...(post.category ? [{ label: post.category.toUpperCase() }] : []),
        ]}
      />

      <section className="py-16 lg:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:hidden w-full mb-10">
            <BlogSearchWidget />
          </div>

          <div className="flex flex-col lg:flex-row gap-12">
            {/* Main Content Area */}
            <article className="lg:w-2/3">
              {/* Title */}
              <h1 className="text-left text-[2.2rem] sm:text-[3rem] md:text-[3.5rem] lg:text-[4rem] font-medium text-slate-900 leading-[1.1] mb-6 md:mb-10 tracking-tight">
                {post.title}
              </h1>

              {/* Post Meta */}
              <div className="flex flex-wrap items-center gap-3 sm:gap-6 mb-8 sm:mb-10 text-slate-500 text-sm">
                <div className="flex items-center gap-2">
                  <div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">
                    {(post.author || 'A')[0]}
                  </div>
                  <span className="font-bold text-slate-900">{post.author || 'Admin'}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar className="w-4 h-4 text-blue-500" />
                  {post.date}
                </div>
                {!!post.readingTime && (
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-blue-500" />
                    {post.readingTime} min read
                  </div>
                )}
                {post.category && (
                  <div className="flex items-center gap-2">
                    <Tag className="w-4 h-4 text-blue-500" />
                    <Link
                      href={`/blogs?category=${encodeURIComponent(post.category)}`}
                      className="bg-blue-50 text-blue-600 hover:bg-blue-100 px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider transition-colors"
                    >
                      {post.category}
                    </Link>
                  </div>
                )}
              </div>

              {/* Featured Image */}
              <div className="relative aspect-[16/9] md:aspect-[2.2/1] rounded-2xl md:rounded-[2rem] overflow-hidden mb-12">
                <Image
                  src={getImageUrl(post.image) || '/images/data_recovery_logo.webp'}
                  alt={post.imageAlt || post.title}
                  fill
                  className="object-cover"
                  priority
                />
              </div>

              <TableOfContents toc={toc} />

              {/* Content */}
              <div
                className="prose prose-slate prose-lg max-w-none font-sans
                prose-headings:font-sans prose-headings:font-medium prose-headings:text-slate-900 prose-headings:tracking-tight prose-headings:scroll-mt-24
                prose-p:text-slate-700 prose-p:leading-[1.7] prose-p:text-[1.125rem]
                prose-li:text-slate-700 prose-li:text-[1.125rem]
                prose-strong:text-slate-900 prose-strong:font-semibold
                prose-blockquote:border-l-4 prose-blockquote:border-slate-300 prose-blockquote:bg-slate-100/50 prose-blockquote:p-6 prose-blockquote:rounded-r-2xl prose-blockquote:italic prose-blockquote:text-slate-700
                prose-img:rounded-2xl
                text-slate-700"
                dangerouslySetInnerHTML={{ __html: contentWithAnchors }}
              />

              {!!post.tags?.length && (
                <div className="flex flex-wrap gap-2 mt-10">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-slate-100 text-slate-600 px-4 py-2 rounded-lg text-sm font-medium"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>
              )}

              <div className="mt-8 pt-8 border-t border-slate-100">
                <ShareButtons url={shareUrl} title={post.title} />
              </div>

              <RelatedPosts posts={relatedPosts} />

              <BlogComments blogId={post._id} initialComments={post.comments || []} />
            </article>

            {/* Sidebar */}
            <BlogSidebar
              allArticles={dbPosts}
              allCategories={categories.map((c) => c.name)}
              metrics={categoriesMetrics}
              showRecentPosts
            />
          </div>
        </div>
      </section>
    </main>
  );
}
