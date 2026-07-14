'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { Loader2, Trash2, Reply } from 'lucide-react';
import type { CommentItem } from '@/lib/blog-api';

export default function BlogComments({
  blogId,
  initialComments = [],
}: {
  blogId: string;
  initialComments: CommentItem[];
}) {
  const { data: session } = useSession();
  const isAdmin = !!session?.accessToken;
  const authHeader = { Authorization: `Bearer ${session?.accessToken}` };

  const [comments, setComments] = useState(initialComments);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [website, setWebsite] = useState('');
  const [text, setText] = useState('');
  const [submitting, setSubmitting] = useState(false);

  const [replyingTo, setReplyingTo] = useState<string | null>(null);
  const [replyText, setReplyText] = useState('');

  const handlePostComment = async (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    try {
      const res = await fetch(`/api-backend/blogs/${blogId}/comment`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, website, comment: text }),
      });
      if (res.ok) {
        const updatedBlog = await res.json();
        setComments(updatedBlog.comments || []);
        setName('');
        setEmail('');
        setWebsite('');
        setText('');
      } else {
        alert('Failed to post comment');
      }
    } catch (err) {
      console.error(err);
      alert('Failed to post comment');
    }
    setSubmitting(false);
  };

  const handleAdminReply = async (commentId: string) => {
    if (!replyText.trim()) return;
    try {
      const res = await fetch(`/api-backend/cms/blogs/${blogId}/comments/${commentId}/reply`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', ...authHeader },
        body: JSON.stringify({ text: replyText }),
      });
      if (res.ok) {
        const updatedBlog = await res.json();
        setComments(updatedBlog.comments || []);
        setReplyingTo(null);
        setReplyText('');
      } else {
        alert('Failed to reply');
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteComment = async (commentId: string) => {
    if (!confirm('Delete this comment completely?')) return;
    try {
      const res = await fetch(`/api-backend/cms/blogs/${blogId}/comments/${commentId}`, {
        method: 'DELETE',
        headers: authHeader,
      });
      if (res.ok) {
        const updatedBlog = await res.json();
        setComments(updatedBlog.comments || []);
      }
    } catch (err) {
      console.error(err);
    }
  };

  const handleDeleteReply = async (commentId: string, replyId: string) => {
    if (!confirm('Delete this reply?')) return;
    try {
      const res = await fetch(`/api-backend/cms/blogs/${blogId}/comments/${commentId}/reply/${replyId}`, {
        method: 'DELETE',
        headers: authHeader,
      });
      if (res.ok) {
        const updatedBlog = await res.json();
        setComments(updatedBlog.comments || []);
      }
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="mt-16 space-y-8">
      {comments.length > 0 && (
        <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-10 border border-slate-100">
          <h3 className="text-2xl font-bold text-slate-900 mb-8">{comments.length} Comments</h3>
          <div className="space-y-8">
            {comments.map((c) => (
              <div key={c._id} className="border-b border-slate-100 pb-8 last:border-0 last:pb-0">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h4 className="font-bold text-slate-900 text-lg">{c.name}</h4>
                    <span className="text-xs text-slate-400 block mb-3">{new Date(c.date).toLocaleDateString()}</span>
                  </div>
                  {isAdmin && (
                    <div className="flex gap-2">
                      <button
                        onClick={() => setReplyingTo(replyingTo === c._id ? null : c._id || null)}
                        className="text-blue-500 hover:bg-blue-50 p-1.5 rounded"
                        title="Reply"
                      >
                        <Reply className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => c._id && handleDeleteComment(c._id)}
                        className="text-red-500 hover:bg-red-50 p-1.5 rounded"
                        title="Delete Comment"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  )}
                </div>
                <p className="text-slate-600 leading-relaxed">{c.comment}</p>

                {c.replies && c.replies.length > 0 && (
                  <div className="mt-4 ml-6 sm:ml-12 pl-4 sm:pl-6 border-l-2 border-slate-100 space-y-4">
                    {c.replies.map((r) => (
                      <div key={r._id} className="bg-slate-50 p-4 rounded-xl relative group">
                        <h5 className="font-bold text-blue-600 text-sm mb-1">Admin</h5>
                        <p className="text-slate-600 text-sm">{r.text}</p>
                        {isAdmin && (
                          <button
                            onClick={() => c._id && r._id && handleDeleteReply(c._id, r._id)}
                            className="absolute top-2 right-2 text-red-400 hover:text-red-600 opacity-0 group-hover:opacity-100 transition-opacity p-1"
                          >
                            <Trash2 className="w-3 h-3" />
                          </button>
                        )}
                      </div>
                    ))}
                  </div>
                )}

                {replyingTo === c._id && isAdmin && (
                  <div className="mt-4 ml-6 sm:ml-12 flex gap-3">
                    <input
                      type="text"
                      placeholder="Type your reply..."
                      value={replyText}
                      onChange={(e) => setReplyText(e.target.value)}
                      className="flex-1 px-3 py-2 border border-slate-200 rounded-lg text-sm text-slate-900 focus:border-blue-500 outline-none"
                    />
                    <button
                      onClick={() => c._id && handleAdminReply(c._id)}
                      className="bg-blue-600 text-white px-4 py-2 rounded-lg text-sm font-bold"
                    >
                      Reply
                    </button>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      )}

      <div className="bg-white rounded-2xl shadow-sm p-6 sm:p-10 border border-slate-100">
        <h3 className="text-2xl font-bold text-slate-900 mb-2">Leave a Reply</h3>
        <p className="text-sm text-slate-500 mb-8">Your email address will not be published. Required fields are marked *</p>

        <form onSubmit={handlePostComment} className="space-y-6">
          <div>
            <label className="block text-xs font-black text-slate-600 uppercase mb-2 tracking-wider">Comment *</label>
            <textarea
              rows={6}
              value={text}
              onChange={(e) => setText(e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all resize-none"
              required
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <label className="block text-xs font-black text-slate-600 uppercase mb-2 tracking-wider">Name *</label>
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                required
              />
            </div>
            <div>
              <label className="block text-xs font-black text-slate-600 uppercase mb-2 tracking-wider">Email *</label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-xs font-black text-slate-600 uppercase mb-2 tracking-wider">Website</label>
            <input
              type="url"
              value={website}
              onChange={(e) => setWebsite(e.target.value)}
              className="w-full px-4 py-3 border border-slate-200 rounded-xl text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all"
            />
          </div>

          <button
            type="submit"
            disabled={submitting}
            className="inline-flex items-center justify-center gap-2 px-10 py-4 bg-[#004B9B] hover:bg-[#003d82] text-white font-black rounded-xl transition-all shadow-lg hover:-translate-y-0.5 disabled:opacity-70"
          >
            {submitting && <Loader2 className="w-4 h-4 animate-spin" />} POST COMMENT
          </button>
        </form>
      </div>
    </div>
  );
}
