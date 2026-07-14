'use client';

import { useEffect, useState, useCallback } from 'react';
import { useSession } from 'next-auth/react';
import toast from 'react-hot-toast';
import {
  Loader2,
  Mail,
  Phone,
  Building2,
  Trash2,
  MessageSquareText,
  Inbox,
} from 'lucide-react';

const API_URL = '/api-backend';

type ContactStatus = 'new' | 'contacted' | 'not_interested';

interface ContactItem {
  _id: string;
  name: string;
  email: string;
  phone: string;
  company?: string;
  message?: string;
  status: ContactStatus;
  createdAt: string;
}

const TABS: { key: 'all' | ContactStatus; label: string }[] = [
  { key: 'all', label: 'All' },
  { key: 'contacted', label: 'Contacted' },
  { key: 'not_interested', label: 'Not Interested' },
];

const STATUS_STYLES: Record<ContactStatus, string> = {
  new: 'bg-blue-50 text-blue-700 border-blue-100',
  contacted: 'bg-emerald-50 text-emerald-700 border-emerald-100',
  not_interested: 'bg-slate-100 text-slate-500 border-slate-200',
};

const STATUS_LABELS: Record<ContactStatus, string> = {
  new: 'New',
  contacted: 'Contacted',
  not_interested: 'Not Interested',
};

function formatDate(iso: string) {
  if (!iso) return '—';
  return new Date(iso).toLocaleDateString('en-IN', {
    day: '2-digit',
    month: 'short',
    year: 'numeric',
    hour: '2-digit',
    minute: '2-digit',
  });
}

export default function AdminContactsPage() {
  const { data: session } = useSession();
  const [contacts, setContacts] = useState<ContactItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [activeTab, setActiveTab] = useState<'all' | ContactStatus>('all');
  const [updatingId, setUpdatingId] = useState<string | null>(null);
  const [deletingId, setDeletingId] = useState<string | null>(null);

  const getHeaders = useCallback(
    () => ({ Authorization: `Bearer ${session?.accessToken}` }),
    [session?.accessToken],
  );

  const fetchData = useCallback(async () => {
    if (!session?.accessToken) return;
    setIsLoading(true);
    try {
      const res = await fetch(`${API_URL}/cms/contacts`, { headers: getHeaders() });
      if (res.ok) {
        setContacts(await res.json());
      } else {
        toast.error('Failed to load contacts');
      }
    } catch (e) {
      console.error(e);
      toast.error('Failed to load contacts');
    }
    setIsLoading(false);
  }, [getHeaders, session?.accessToken]);

  useEffect(() => {
    fetchData();
  }, [fetchData]);

  const handleStatusChange = async (id: string, status: ContactStatus) => {
    setUpdatingId(id);
    try {
      const res = await fetch(`${API_URL}/cms/contacts/${id}/status`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', ...getHeaders() },
        body: JSON.stringify({ status }),
      });
      if (!res.ok) throw new Error('Failed to update status');
      const updated = await res.json();
      setContacts((prev) => prev.map((c) => (c._id === id ? updated : c)));
      toast.success(`Marked as ${STATUS_LABELS[status]}`);
    } catch (e) {
      console.error(e);
      toast.error('Failed to update status');
    }
    setUpdatingId(null);
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Delete this enquiry permanently?')) return;
    setDeletingId(id);
    try {
      const res = await fetch(`${API_URL}/cms/contacts/${id}`, {
        method: 'DELETE',
        headers: getHeaders(),
      });
      if (!res.ok) throw new Error('Failed to delete');
      setContacts((prev) => prev.filter((c) => c._id !== id));
      toast.success('Enquiry deleted');
    } catch (e) {
      console.error(e);
      toast.error('Failed to delete enquiry');
    }
    setDeletingId(null);
  };

  const counts: Record<'all' | ContactStatus, number> = {
    all: contacts.length,
    new: contacts.filter((c) => c.status === 'new').length,
    contacted: contacts.filter((c) => c.status === 'contacted').length,
    not_interested: contacts.filter((c) => c.status === 'not_interested').length,
  };

  const visibleContacts =
    activeTab === 'all' ? contacts : contacts.filter((c) => c.status === activeTab);

  return (
    <div className="max-w-[1700px] mx-auto pb-20 font-sans tracking-tight">
      <div className="space-y-1 mb-8">
        <div className="flex items-center gap-2 text-[10px] font-bold text-indigo-600 bg-indigo-50 px-3 py-1 rounded-full uppercase tracking-widest mb-2 w-fit border border-indigo-100 shadow-sm">
          <Inbox className="w-4 h-4" />
          <span>Enquiries</span>
        </div>
        <h1 className="text-3xl font-bold text-gray-900 tracking-tight">Contacts</h1>
        <p className="text-sm text-gray-500 font-medium tracking-tight">
          Manage enquiries submitted from the website contact form.
        </p>
      </div>

      {/* Tabs */}
      <div className="flex items-center gap-2 mb-6 border-b border-gray-200">
        {TABS.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={`relative px-5 py-3 text-sm font-semibold transition-colors ${
              activeTab === tab.key
                ? 'text-indigo-600'
                : 'text-gray-400 hover:text-gray-600'
            }`}
          >
            {tab.label}
            <span
              className={`ml-2 inline-flex items-center justify-center min-w-[20px] h-5 px-1.5 rounded-full text-[10px] font-bold ${
                activeTab === tab.key ? 'bg-indigo-100 text-indigo-700' : 'bg-gray-100 text-gray-400'
              }`}
            >
              {counts[tab.key]}
            </span>
            {activeTab === tab.key && (
              <span className="absolute left-0 right-0 -bottom-px h-0.5 bg-indigo-600 rounded-full" />
            )}
          </button>
        ))}
      </div>

      {isLoading && contacts.length === 0 ? (
        <div className="py-40 flex flex-col items-center justify-center space-y-4">
          <Loader2 className="w-12 h-12 animate-spin text-indigo-200" />
        </div>
      ) : (
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse text-sm">
              <thead>
                <tr className="bg-gray-50/50 border-b border-gray-100 font-extrabold text-[10px] text-gray-400 uppercase tracking-[0.2em]">
                  <th className="px-8 py-6">Contact</th>
                  <th className="px-8 py-6">Message</th>
                  <th className="px-8 py-6">Received</th>
                  <th className="px-8 py-6 text-center">Status</th>
                  <th className="px-8 py-6 text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-50">
                {visibleContacts.map((item) => (
                  <tr key={item._id} className="group hover:bg-indigo-50/30 transition-all duration-300">
                    <td className="px-8 py-6 align-top">
                      <div className="min-w-0">
                        <h3 className="font-bold text-gray-900">{item.name}</h3>
                        <div className="mt-1.5 space-y-1 text-xs text-gray-500">
                          <div className="flex items-center gap-1.5">
                            <Mail className="w-3.5 h-3.5 text-gray-300 shrink-0" />
                            <a href={`mailto:${item.email}`} className="hover:text-indigo-600 truncate">
                              {item.email}
                            </a>
                          </div>
                          <div className="flex items-center gap-1.5">
                            <Phone className="w-3.5 h-3.5 text-gray-300 shrink-0" />
                            <a href={`tel:${item.phone}`} className="hover:text-indigo-600">
                              {item.phone}
                            </a>
                          </div>
                          {item.company && (
                            <div className="flex items-center gap-1.5">
                              <Building2 className="w-3.5 h-3.5 text-gray-300 shrink-0" />
                              <span>{item.company}</span>
                            </div>
                          )}
                        </div>
                      </div>
                    </td>
                    <td className="px-8 py-6 align-top max-w-xs">
                      {item.message ? (
                        <div className="flex items-start gap-2 text-gray-600">
                          <MessageSquareText className="w-3.5 h-3.5 text-gray-300 shrink-0 mt-0.5" />
                          <span className="line-clamp-3">{item.message}</span>
                        </div>
                      ) : (
                        <span className="text-gray-300">—</span>
                      )}
                    </td>
                    <td className="px-8 py-6 align-top whitespace-nowrap text-gray-500">
                      {formatDate(item.createdAt)}
                    </td>
                    <td className="px-8 py-6 align-top text-center">
                      <div className="flex flex-col items-center gap-2">
                        <span
                          className={`px-3 py-1 rounded-2xl inline-flex items-center justify-center border font-extrabold text-[10px] uppercase tracking-widest ${STATUS_STYLES[item.status]}`}
                        >
                          {STATUS_LABELS[item.status]}
                        </span>
                        <select
                          value={item.status}
                          disabled={updatingId === item._id}
                          onChange={(e) => handleStatusChange(item._id, e.target.value as ContactStatus)}
                          className="text-xs font-semibold border border-gray-200 rounded-lg px-2 py-1.5 bg-white text-gray-600 focus:outline-none focus:ring-2 focus:ring-indigo-200 disabled:opacity-50"
                        >
                          <option value="new">New</option>
                          <option value="contacted">Contacted</option>
                          <option value="not_interested">Not Interested</option>
                        </select>
                      </div>
                    </td>
                    <td className="px-8 py-6 align-top text-right">
                      <button
                        onClick={() => handleDelete(item._id)}
                        disabled={deletingId === item._id}
                        className="p-3 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-2xl transition-all disabled:opacity-50"
                        title="Delete"
                      >
                        {deletingId === item._id ? (
                          <Loader2 className="w-4 h-4 animate-spin" />
                        ) : (
                          <Trash2 className="w-4 h-4" />
                        )}
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>

            {visibleContacts.length === 0 && (
              <div className="py-24 flex flex-col items-center justify-center px-10">
                <div className="w-20 h-20 bg-gray-50 flex items-center justify-center rounded-2xl mb-6 scale-90 opacity-40">
                  <Inbox className="w-10 h-10 text-gray-300" />
                </div>
                <h3 className="font-extrabold text-gray-400 text-lg uppercase tracking-tight">
                  No Enquiries Found
                </h3>
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
}
