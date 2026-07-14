import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import { getImageUrl, type BlogItem } from '@/lib/blog-api';

export default function RelatedPosts({ posts }: { posts: BlogItem[] }) {
  if (posts.length === 0) return null;

  return (
    <div className="mt-16 pt-12 border-t border-slate-100">
      <h3 className="text-2xl font-bold text-slate-900 mb-8">Related Articles</h3>
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
        {posts.map((post) => (
          <Link
            key={post._id}
            href={`/blogs/${post.slug}`}
            className="group bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-lg transition-all duration-300"
          >
            <div className="relative aspect-[3/2] overflow-hidden">
              <Image
                src={getImageUrl(post.image) || '/images/data_recovery_logo.webp'}
                alt={post.title}
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-110"
                sizes="(max-width: 640px) 100vw, 33vw"
              />
            </div>
            <div className="p-4">
              <h4 className="text-sm font-bold text-slate-900 group-hover:text-blue-600 transition-colors line-clamp-2 leading-snug mb-2">
                {post.title}
              </h4>
              <span className="inline-flex items-center gap-1 text-blue-600 text-xs font-bold">
                Read More <ArrowRight className="w-3 h-3 transition-transform group-hover:translate-x-1" />
              </span>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
