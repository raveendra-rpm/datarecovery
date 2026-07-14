'use client';

import { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Calendar, User, ArrowRight, ChevronLeft, ChevronRight, X } from 'lucide-react';
import PageHeader from '@/components/layout/PageHeader';
import { getImageUrl } from '@/lib/blog-api';
import BlogSidebar, { BlogSearchWidget } from './BlogSidebar';

interface NewsItem {
  _id: string;
  title: string;
  slug: string;
  date: string;
  excerpt: string;
  image: string;
  author?: string;
  category?: string;
}

interface CategoryMetric {
  _id: string;
  count: number;
  latestTitle: string;
}

export default function BlogClientLayout({
  articles,
  metrics = [],
  categories = [],
  activeCategory,
  activeTag,
}: {
  articles: NewsItem[];
  metrics?: CategoryMetric[];
  categories?: string[];
  activeCategory?: string;
  activeTag?: string;
}) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const maxPages = Math.max(1, Math.ceil(articles.length / itemsPerPage));
  const displayedArticles = articles.slice((currentPage - 1) * itemsPerPage, currentPage * itemsPerPage);

  const goToPage = (page: number) => {
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="min-h-screen bg-white">
      <PageHeader
        title="Blogs"
        backgroundImage="/images/who_we_are/about_us_banner.jpg"
        breadcrumb={[{ label: 'HOME', href: '/' }, { label: 'BLOGS' }]}
      />

      <section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto px-6">
          <div className="lg:hidden w-full mb-10">
            <BlogSearchWidget />
          </div>

          {(activeCategory || activeTag) && (
            <div className="flex items-center gap-3 mb-8 flex-wrap">
              <span className="text-slate-500 text-sm font-medium">Showing:</span>
              <span className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-1.5 rounded-full text-sm font-bold">
                {activeCategory || `#${activeTag}`}
                <Link href="/blogs" aria-label="Clear filter" className="hover:opacity-70">
                  <X className="w-3.5 h-3.5" />
                </Link>
              </span>
            </div>
          )}

          <div className="flex flex-col lg:flex-row gap-10 lg:gap-12">
            {/* Main list */}
            <div className="w-full lg:w-[68%] space-y-8">
              {displayedArticles.length > 0 ? (
                displayedArticles.map((post) => (
                  <article
                    key={post._id}
                    className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col md:flex-row"
                  >
                    <div className="md:w-2/5 relative aspect-[3/2] md:aspect-auto overflow-hidden shrink-0">
                      <Link href={`/blogs/${post.slug}`} aria-label={post.title}>
                        <Image
                          src={getImageUrl(post.image) || '/images/data_recovery_logo.webp'}
                          alt={post.title}
                          fill
                          className="object-cover transition-transform duration-500 group-hover:scale-110"
                          sizes="(max-width: 768px) 100vw, 40vw"
                        />
                      </Link>
                      {post.category && (
                        <div className="absolute top-4 left-4 z-20">
                          <span className="bg-blue-600 text-white text-[10px] font-bold uppercase tracking-widest px-3 py-1 rounded-full">
                            {post.category}
                          </span>
                        </div>
                      )}
                    </div>

                    <div className="md:w-3/5 p-6 md:p-8 flex flex-col">
                      <div className="flex items-center gap-4 text-slate-400 text-xs mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-3.5 h-3.5 text-blue-500" />
                          {post.date}
                        </div>
                        <div className="flex items-center gap-1">
                          <User className="w-3.5 h-3.5 text-blue-500" />
                          {post.author || 'Admin'}
                        </div>
                      </div>

                      <h2 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                        <Link href={`/blogs/${post.slug}`}>{post.title}</Link>
                      </h2>

                      <div
                        className="text-slate-500 text-sm leading-relaxed mb-6 line-clamp-3"
                        dangerouslySetInnerHTML={{ __html: post.excerpt || '' }}
                      />

                      <div className="mt-auto pt-4 border-t border-slate-50">
                        <Link
                          href={`/blogs/${post.slug}`}
                          className="inline-flex items-center gap-2 text-blue-600 font-bold text-sm group/link"
                        >
                          READ MORE
                          <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-1" />
                        </Link>
                      </div>
                    </div>
                  </article>
                ))
              ) : (
                <div className="flex flex-col items-center justify-center py-20 bg-slate-50/50 rounded-3xl border-2 border-dashed border-slate-200 text-center px-6">
                  <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center shadow-sm mb-6">
                    <ArrowRight className="w-6 h-6 text-slate-300" />
                  </div>
                  <h3 className="text-xl font-bold text-slate-800 mb-2">No Blogs Published Yet</h3>
                  <p className="text-slate-500 text-sm max-w-xs">
                    We haven&apos;t published any articles yet. Please check back later for updates!
                  </p>
                </div>
              )}

              {maxPages > 1 && (
                <div className="mt-12 flex flex-wrap justify-center items-center gap-2">
                  <button
                    onClick={() => goToPage(Math.max(1, currentPage - 1))}
                    disabled={currentPage === 1}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all border border-slate-200 ${
                      currentPage === 1
                        ? 'text-slate-200 cursor-not-allowed'
                        : 'text-slate-400 hover:border-blue-500 hover:text-blue-600 cursor-pointer'
                    }`}
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>

                  {Array.from({ length: maxPages }, (_, i) => i + 1).map((num) => (
                    <button
                      key={num}
                      onClick={() => goToPage(num)}
                      className={`w-10 h-10 rounded-full flex items-center justify-center transition-all cursor-pointer ${
                        currentPage === num
                          ? 'bg-blue-600 text-white shadow-lg shadow-blue-200'
                          : 'bg-white border border-slate-200 text-slate-400 hover:border-blue-500 hover:text-blue-600'
                      }`}
                    >
                      {num}
                    </button>
                  ))}

                  <button
                    onClick={() => goToPage(Math.min(maxPages, currentPage + 1))}
                    disabled={currentPage === maxPages}
                    className={`w-10 h-10 rounded-full flex items-center justify-center transition-all border border-slate-200 ${
                      currentPage === maxPages
                        ? 'text-slate-200 cursor-not-allowed'
                        : 'text-slate-400 hover:border-blue-500 hover:text-blue-600 cursor-pointer'
                    }`}
                  >
                    <ChevronRight className="w-5 h-5" />
                  </button>
                </div>
              )}
            </div>

            <BlogSidebar allArticles={articles} allCategories={categories} metrics={metrics} showRecentPosts />
          </div>
        </div>
      </section>
    </main>
  );
}
