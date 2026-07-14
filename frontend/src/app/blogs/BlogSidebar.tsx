'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Search } from 'lucide-react';
import { getImageUrl } from '@/lib/blog-api';

interface NewsItem {
  id?: number;
  _id?: string;
  title: string;
  slug: string;
  date: string;
  image?: string;
}

interface CategoryMetric {
  _id: string;
  count: number;
  latestTitle: string;
}

export function BlogSearchWidget({ className = '' }: { className?: string }) {
  const [query, setQuery] = useState('');
  const [results, setResults] = useState<
    { _id?: string; slug: string; title: string; image?: string; category?: string }[]
  >([]);
  const [isSearching, setIsSearching] = useState(false);

  useEffect(() => {
    if (!query.trim()) {
      setResults([]);
      return;
    }

    const timer = setTimeout(async () => {
      setIsSearching(true);
      try {
        const res = await fetch(`/api-backend/blogs/search?q=${encodeURIComponent(query)}`);
        if (res.ok) {
          setResults(await res.json());
        }
      } catch (err) {
        console.error(err);
      }
      setIsSearching(false);
    }, 400);

    return () => clearTimeout(timer);
  }, [query]);

  return (
    <div className={`bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100 relative ${className}`}>
      <h3 className="text-sm font-black text-slate-900 border-b-2 border-blue-600 pb-3 mb-6 inline-block uppercase tracking-widest">
        Search
      </h3>
      <div className="relative w-full min-w-0">
        <div className="flex w-full min-w-0">
          <input
            type="text"
            placeholder="Search articles..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            className="min-w-0 flex-1 bg-slate-50 px-4 py-3 border border-slate-200 rounded-l-xl focus:outline-none focus:border-blue-500 text-sm text-slate-900 transition-all"
          />
          <button className="bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 font-semibold transition-colors text-sm rounded-r-xl shadow-sm">
            <Search className="w-4 h-4" />
          </button>
        </div>

        {query.trim().length > 0 && (
          <div className="absolute top-14 left-0 w-full bg-white rounded-xl shadow-2xl border border-slate-100 z-50 overflow-hidden flex flex-col">
            {isSearching ? (
              <div className="p-4 text-sm text-slate-500 text-center animate-pulse">Searching...</div>
            ) : results.length > 0 ? (
              results.map((r, i) => (
                <Link
                  key={r._id || i}
                  href={`/blogs/${r.slug}`}
                  className="flex items-start gap-3 p-4 hover:bg-slate-50 border-b border-slate-50 last:border-0 transition-colors"
                >
                  {r.image && (
                    <div className="w-12 h-12 rounded-lg bg-slate-100 shrink-0 overflow-hidden relative">
                      <Image src={getImageUrl(r.image)} alt={r.title} fill className="object-cover" sizes="48px" />
                    </div>
                  )}
                  <div className="flex-1">
                    <p className="text-sm font-bold text-slate-900 line-clamp-2 leading-tight">{r.title}</p>
                    {r.category && <p className="text-xs text-blue-600 font-semibold mt-1">{r.category}</p>}
                  </div>
                </Link>
              ))
            ) : (
              <div className="p-4 text-sm text-slate-500 text-center">No results found</div>
            )}
          </div>
        )}
      </div>
    </div>
  );
}

export default function BlogSidebar({
  allArticles,
  allCategories,
  metrics = [],
  showRecentPosts = false,
}: {
  allArticles: NewsItem[];
  allCategories: string[];
  metrics?: CategoryMetric[];
  showRecentPosts?: boolean;
}) {
  const [recentLimit, setRecentLimit] = useState(6);
  const displayedRecent = allArticles.slice(0, recentLimit);

  // Prefer live category counts (metrics) from the DB; fall back to the
  // static category list with zero counts if metrics haven't loaded yet.
  const mergedCategories =
    metrics.length > 0 ? metrics : allCategories.map((c) => ({ _id: c, count: 0, latestTitle: c }));

  const [catLimit, setCatLimit] = useState(10);
  const displayedCategories = mergedCategories.slice(0, catLimit);

  const loadMoreRecent = () => setRecentLimit((prev) => (prev === 6 ? 10 : prev + 10));
  const loadMoreCategories = () =>
    setCatLimit((prev) => (prev === 10 && mergedCategories.length > 10 ? 20 : Math.min(prev + 10, mergedCategories.length)));

  return (
    <aside className="w-full lg:w-[30%] space-y-8 flex-shrink-0">
      <BlogSearchWidget className="hidden lg:block" />

      {showRecentPosts && displayedRecent.length > 0 && (
        <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
          <h3 className="text-sm font-black text-slate-900 border-b-2 border-blue-600 pb-3 mb-6 inline-block uppercase tracking-widest">
            Recent Posts
          </h3>
          <ul className="flex flex-col w-full">
            {displayedRecent.map((p, idx) => (
              <li key={p._id || p.id || idx} className="border-b border-slate-100 py-4 first:pt-0 last:border-0 last:pb-0">
                <Link href={`/blogs/${p.slug}`} className="block w-full text-slate-800 text-[15px] font-medium hover:text-blue-600 transition-colors leading-relaxed">
                  {p.title}
                </Link>
              </li>
            ))}
          </ul>
          {recentLimit < allArticles.length && (
            <button
              onClick={loadMoreRecent}
              className="mt-4 text-blue-600 border border-blue-600 px-5 py-2 rounded-full font-bold text-xs hover:bg-blue-600 hover:text-white transition-colors uppercase tracking-wider block w-max"
            >
              Load More
            </button>
          )}
        </div>
      )}

      {/* Categories widget */}
      <div className="bg-white p-6 sm:p-8 rounded-2xl shadow-sm border border-slate-100">
        <h3 className="text-sm font-black text-slate-900 border-b-2 border-blue-600 pb-3 mb-6 inline-block uppercase tracking-widest">
          Categories
        </h3>
        <ul className="flex flex-col w-full">
          {displayedCategories.map((cat, i) => (
            <li key={i} className="border-b border-slate-100 py-3 first:pt-0 last:border-0 last:pb-0">
              <span className="flex justify-between items-center text-[15px] text-slate-800 font-medium">
                <span>{cat._id || 'Uncategorized'}</span>
                {cat.count > 0 && (
                  <span className="text-xs bg-blue-50 text-blue-600 px-2 py-1 rounded-full">{cat.count}</span>
                )}
              </span>
            </li>
          ))}
        </ul>
        {catLimit < mergedCategories.length && (
          <button
            onClick={loadMoreCategories}
            className="mt-6 text-blue-600 border border-blue-600 px-5 py-2 rounded-full font-bold text-xs hover:bg-blue-600 hover:text-white transition-colors uppercase tracking-wider block w-max"
          >
            {catLimit === 10 ? 'View All Categories' : 'Load 10 More'}
          </button>
        )}
      </div>

      {/* CTA */}
      <div className="relative bg-blue-600 rounded-2xl p-8 overflow-hidden text-center">
        <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-full blur-3xl -mr-16 -mt-16" />
        <div className="relative z-10">
          <h3 className="text-xl font-black text-white mb-3">Lost Your Critical Data?</h3>
          <p className="text-blue-100 text-sm mb-6 leading-relaxed">
            Don&apos;t panic. Our experts are here to help you 24/7. Get a free consultation today.
          </p>
          <Link
            href="/contacts"
            className="inline-block w-full bg-white text-blue-600 font-black py-3.5 rounded-xl hover:bg-blue-50 transition-colors shadow-lg"
          >
            CONTACT US NOW
          </Link>
        </div>
      </div>
    </aside>
  );
}
