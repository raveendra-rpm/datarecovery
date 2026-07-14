import { ListTree } from 'lucide-react';
import type { TocEntry } from '@/lib/toc';

export default function TableOfContents({ toc }: { toc: TocEntry[] }) {
  if (toc.length < 2) return null;

  return (
    <details
      open
      className="mb-10 bg-blue-50/60 border border-blue-100 rounded-2xl p-6 [&_summary::-webkit-details-marker]:hidden"
    >
      <summary className="flex items-center gap-2 font-bold text-slate-900 cursor-pointer select-none list-none">
        <ListTree className="w-4 h-4 text-blue-600" />
        Table of Contents
      </summary>
      <nav className="mt-4">
        <ol className="space-y-2">
          {toc.map((item) => (
            <li key={item.id} className={item.level === 3 ? 'ml-5' : ''}>
              <a
                href={`#${item.id}`}
                className="text-sm text-slate-600 hover:text-blue-600 transition-colors leading-snug"
              >
                {item.text}
              </a>
            </li>
          ))}
        </ol>
      </nav>
    </details>
  );
}
