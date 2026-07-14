'use client';

import { useEffect, useState, useCallback, Suspense } from 'react';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import toast from 'react-hot-toast';
import {
  Plus,
  Pencil,
  Trash2,
  Search,
  Loader2,
  Newspaper,
  Sparkles,
  Folder,
  Calendar,
  FolderCog,
  X,
} from 'lucide-react';
import { getImageUrl, type BlogItem, type CategoryItem } from '@/lib/blog-api';

const API_URL = '/api-backend';

function CategoryManagerModal({
  headers,
  onClose,
}: {
  headers: Record<string, string>;
  onClose: () => void;
}) {
  const [categories, setCategories] = useState<CategoryItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [newName, setNewName] = useState('');
  const [adding, setAdding] = useState(false);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const loadCategories = useCallback(async () => {
    setIsLoading(true);
    try {
      const res = await fetch(`${API_URL}/categories`, { cache: 'no-store' });
      if (res.ok) setCategories(await res.json());
    } catch (e) {
      console.error(e);
    }
    setIsLoading(false);
  }, []);

  useEffect(() => {
    loadCategories();
  }, [loadCategories]);

  const handleAdd = async () => {
    const name = newName.trim();
    if (!name) return;
    setAdding(true);
    try {
      const res = await fetch(`${API_URL}/cms/categories`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...headers },
        body: JSON.stringify({ name }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || 'Failed to create category');
      setCategories((prev) => [...prev, data].sort((a, b) => a.name.localeCompare(b.name)));
      setNewName('');
      toast.success('Category created!');
    } catch (e: unknown) {
      toast.error(e instanceof Error ? e.message : 'Failed to create category');
    }
    setAdding(false);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this category? Existing posts will keep their category text.')) return;
    setDeletingId(id);
    try {
      const res = await fetch(`${API_URL}/cms/categories/${id}`, { method: 'DELETE', headers });
      if (res.ok) {
        setCategories((prev) => prev.filter((c) => c._id !== id));
        toast.success('Category deleted');
      } else {
        toast.error('Failed to delete category');
      }
    } catch (e) {
      console.error(e);
      toast.error('Failed to delete category');
    }
    setDeletingId(null);
  };

  return (
    <div className="fixed inset-0 z-[200] bg-gray-900/50 flex items-center justify-center p-4">
      <div className="bg-white rounded-2xl shadow-2xl w-full max-w-md p-8">
        <div className="flex items-center justify-between mb-6">
          <h2 className="text-lg font-bold text-gray-900 flex items-center gap-2">
            <FolderCog className="w-5 h-5 text-indigo-600" /> Manage Categories
          </h2>
          <button onClick={onClose} className="p-2 text-gray-400 hover:text-gray-700 hover:bg-gray-100 rounded-lg transition-colors">
            <X className="w-5 h-5" />
          </button>
        </div>

        <div className="flex gap-2 mb-6">
          <input
            autoFocus
            value={newName}
            onChange={(e) => setNewName(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                e.preventDefault();
                handleAdd();
              }
            }}
            placeholder="e.g. Encrypted Drive Recovery"
            className="flex-1 min-w-0 px-4 py-2.5 rounded-lg bg-gray-50 border border-gray-200 text-sm text-gray-900 focus:border-indigo-500 outline-none"
          />
          <button
            onClick={handleAdd}
            disabled={adding || !newName.trim()}
            className="px-5 py-2.5 rounded-lg bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-bold disabled:opacity-50 flex items-center gap-1.5"
          >
            {adding ? <Loader2 className="w-4 h-4 animate-spin" /> : <Plus className="w-4 h-4" />}
            Add
          </button>
        </div>

        {isLoading ? (
          <div className="py-10 flex justify-center">
            <Loader2 className="w-6 h-6 animate-spin text-indigo-300" />
          </div>
        ) : categories.length === 0 ? (
          <p className="text-sm text-gray-400 text-center py-6">No categories yet. Add your first one above.</p>
        ) : (
          <ul className="space-y-1 max-h-72 overflow-y-auto">
            {categories.map((c) => (
              <li key={c._id} className="flex items-center justify-between px-4 py-2.5 rounded-lg hover:bg-gray-50 group">
                <span className="text-sm font-semibold text-gray-700">{c.name}</span>
                <button
                  onClick={() => handleDelete(c._id)}
                  disabled={deletingId === c._id}
                  className="p-1.5 text-gray-300 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors opacity-0 group-hover:opacity-100 disabled:opacity-50"
                  title="Delete category"
                >
                  {deletingId === c._id ? <Loader2 className="w-4 h-4 animate-spin" /> : <Trash2 className="w-4 h-4" />}
                </button>
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}

function BlogList() {
  const { data: session } = useSession();
  const [blogList, setBlogList] = useState<BlogItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [search, setSearch] = useState('');
  const [showCategoryModal, setShowCategoryModal] = useState(false);

  const getHeaders = useCallback(
    () => ({ Authorization: `Bearer ${session?.accessToken}` }),
    [session?.accessToken],
  );

  const fetchData = useCallback(async () => {
    if (!session?.accessToken) return;
    setIsLoading(true);
    try {
      const res = await fetch(`${API_URL}/cms/blogs`, { headers: getHeaders() });
      if (res.ok) {
        setBlogList(await res.json());
      }
    } catch (e) {
      console.error(e);
      toast.error('Failed to load posts');
    }
    setIsLoading(false);
  }, [getHeaders, session?.accessToken]);

  useEffect(() => {
    fetchData();
    const handleFocus = () => fetchData();
    window.addEventListener('focus', handleFocus);
    return () => window.removeEventListener('focus', handleFocus);
  }, [fetchData]);

  const handleDelete = async (id: string) => {
    if (!confirm('Are you sure you want to delete this blog post?')) return;
    try {
      const res = await fetch(`${API_URL}/cms/blogs/${id}`, {
        method: 'DELETE',
        headers: getHeaders(),
      });
      if (res.ok) {
        toast.success('Post deleted');
        fetchData();
      } else {
        toast.error('Failed to delete post');
      }
    } catch (e) {
      console.error(e);
      toast.error('Failed to delete post');
    }
  };

  const filteredBlogs = blogList.filter(
    (n) =>
      n.title?.toLowerCase().includes(search.toLowerCase()) ||
      n.category?.toLowerCase().includes(search.toLowerCase()),
  );

  return (
    <div className="max-w-[1700px] mx-auto pb-20 font-sans tracking-tight">
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10">
        <div className="space-y-1">
          <div className="flex items-center gap-2 text-[10px] font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-widest mb-2 w-fit border border-indigo-100 shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span>Content Studio</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Blog Management</h1>
          <p className="text-sm text-gray-500 font-medium tracking-tight">Manage articles, guides and SEO metadata.</p>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={() => setShowCategoryModal(true)}
            className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-gray-50 text-gray-700 border border-gray-200 rounded-xl text-sm font-semibold transition-all shadow-sm"
          >
            <FolderCog className="w-4 h-4" />
            <span>Manage Categories</span>
          </button>
          <Link
            href="/admin/blog/action"
            className="group inline-flex items-center gap-2 px-8 py-3 bg-indigo-600 hover:bg-indigo-700 text-white rounded-xl text-sm font-semibold transition-all shadow-md hover:shadow-lg active:scale-95"
          >
            <Plus className="w-4 h-4 transition-transform group-hover:rotate-90" />
            <span>Create Post</span>
          </Link>
        </div>
      </div>

      {showCategoryModal && <CategoryManagerModal headers={getHeaders()} onClose={() => setShowCategoryModal(false)} />}

      <div className="bg-white p-6 rounded-2xl shadow-sm border border-gray-100 mb-8 flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1 group">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4.5 h-4.5 text-gray-300 group-focus-within:text-indigo-500 transition-colors" />
          <input
            type="text"
            placeholder="Search by title or category..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-gray-50 border border-transparent focus:border-indigo-500 focus:bg-white outline-none transition-all text-sm font-semibold text-gray-700 placeholder:text-gray-300"
          />
        </div>
      </div>

      {isLoading && blogList.length === 0 ? (
        <div className="py-40 flex flex-col items-center justify-center space-y-4">
          <Loader2 className="w-12 h-12 animate-spin text-indigo-200" />
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100 font-extrabold text-[10px] text-gray-400 uppercase tracking-[0.2em]">
                  <th className="px-8 py-6">Publication</th>
                  <th className="px-8 py-6">Category</th>
                  <th className="px-8 py-6">Date</th>
                  <th className="px-8 py-6 text-center">Status</th>
                  <th className="px-8 py-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {filteredBlogs.map((item) => (
                  <tr key={item._id} className="group hover:bg-indigo-50/30 transition-all duration-300">
                    <td className="px-8 py-7">
                      <div className="flex items-center gap-5">
                        <div className="w-14 h-14 rounded-2xl bg-gray-50 overflow-hidden border border-gray-100 shadow-sm relative">
                          {item.image ? (
                            // eslint-disable-next-line @next/next/no-img-element
                            <img
                              src={getImageUrl(item.image)}
                              alt={item.title}
                              className="w-full h-full object-cover"
                              title={item.title}
                            />
                          ) : (
                            <div className="w-full h-full flex items-center justify-center text-gray-200 bg-slate-50">
                              <Newspaper className="w-5 h-5 opacity-40" />
                            </div>
                          )}
                        </div>
                        <div className="min-w-0">
                          <h3 className="font-bold text-gray-900 group-hover:text-indigo-600 transition-colors uppercase tracking-tight line-clamp-1">
                            {item.title}
                          </h3>
                          <div className="flex items-center gap-2 mt-1 opacity-60">
                            <span className="text-[10px] font-bold tracking-widest uppercase">/{item.slug}</span>
                          </div>
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-7">
                      <div className="flex items-center gap-2">
                        <Folder className="w-3.5 h-3.5 text-gray-300" />
                        <span className="text-indigo-600 font-bold uppercase text-[10px] tracking-widest">
                          {item.category || 'Uncategorized'}
                        </span>
                      </div>
                    </td>
                    <td className="px-8 py-7 whitespace-nowrap">
                      <div className="flex items-center gap-2">
                        <Calendar className="w-3.5 h-3.5 text-gray-300" />
                        <span className="text-gray-500 font-medium">{item.date || '—'}</span>
                      </div>
                    </td>
                    <td className="px-8 py-7 text-center whitespace-nowrap">
                      <div
                        className={`px-4 py-1.5 rounded-2xl inline-flex items-center justify-center border font-extrabold text-[10px] uppercase tracking-widest transition-all ${
                          item.isActive !== false
                            ? 'bg-emerald-50 text-emerald-700 border-emerald-100 shadow-emerald-100 shadow-sm'
                            : 'bg-slate-50 text-slate-400 border-slate-100'
                        }`}
                      >
                        {item.isActive !== false ? 'Published' : 'Draft'}
                      </div>
                    </td>
                    <td className="px-8 py-7 text-right">
                      <div className="flex items-center justify-end gap-1 transition-all pr-2">
                        <Link
                          href={`/admin/blog/action?id=${item._id}`}
                          className="p-3 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-2xl transition-all"
                          title="Edit"
                        >
                          <Pencil className="w-4 h-4" />
                        </Link>
                        <button
                          onClick={() => handleDelete(item._id)}
                          className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all"
                          title="Delete"
                        >
                          <Trash2 className="w-4 h-4" />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {filteredBlogs.length === 0 && (
              <div className="py-24 flex flex-col items-center justify-center px-10">
                <div className="w-20 h-20 bg-gray-50 flex items-center justify-center rounded-2xl mb-6 scale-90 opacity-40">
                  <Newspaper className="w-10 h-10 text-gray-300" />
                </div>
                <h3 className="font-extrabold text-gray-400 text-lg uppercase tracking-tight">No Publications Found</h3>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}

export default function AdminBlogPage() {
  return (
    <Suspense
      fallback={
        <div className="min-h-screen flex items-center justify-center bg-gray-50 text-indigo-400">
          <Loader2 className="w-12 h-12 animate-spin" />
        </div>
      }
    >
      <BlogList />
    </Suspense>
  );
}
