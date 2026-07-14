'use client';
import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import axios from 'axios';
import { Bar, Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Users, FileText, CheckCircle, Inbox, PhoneCall, UserX } from 'lucide-react';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  ArcElement,
  Title,
  Tooltip,
  Legend
);

type User = { _id: string; role: string };
type Post = { _id: string; isActive?: boolean };
type Contact = { _id: string; status: 'new' | 'contacted' | 'not_interested' };

export default function AdminDashboard() {
  const { data: session } = useSession();
  const [users, setUsers] = useState<User[]>([]);
  const [posts, setPosts] = useState<Post[]>([]);
  const [contacts, setContacts] = useState<Contact[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      if (!session?.accessToken) return;
      const headers = { Authorization: `Bearer ${session.accessToken}` };
      try {
        const [usersRes, postsRes, contactsRes] = await Promise.all([
          axios.get('/api-backend/users', { headers }).catch(() => ({ data: [] })),
          axios.get('/api-backend/cms/blogs', { headers }).catch(() => ({ data: [] })),
          axios.get('/api-backend/cms/contacts', { headers }).catch(() => ({ data: [] })),
        ]);
        setUsers(usersRes.data);
        setPosts(postsRes.data);
        setContacts(contactsRes.data);
      } finally {
        setLoading(false);
      }
    };
    fetchData();
  }, [session]);

  const publishedCount = posts.filter((p) => p.isActive !== false).length;
  const draftCount = posts.filter((p) => p.isActive === false).length;

  const newCount = contacts.filter((c) => c.status === 'new').length;
  const contactedCount = contacts.filter((c) => c.status === 'contacted').length;
  const notInterestedCount = contacts.filter((c) => c.status === 'not_interested').length;

  const postsChartData = {
    labels: ['Draft', 'Published'],
    datasets: [
      {
        label: 'Posts by Status',
        data: [draftCount, publishedCount],
        backgroundColor: ['rgba(234, 179, 8, 0.8)', 'rgba(34, 197, 94, 0.8)'],
      },
    ],
  };

  const barChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: false,
      },
    },
  };

  const contactsChartData = {
    labels: ['New', 'Contacted', 'Not Interested'],
    datasets: [
      {
        label: 'Enquiries by Status',
        data: [newCount, contactedCount, notInterestedCount],
        backgroundColor: [
          'rgba(59, 130, 246, 0.8)',
          'rgba(34, 197, 94, 0.8)',
          'rgba(148, 163, 184, 0.8)',
        ],
        borderWidth: 0,
      },
    ],
  };

  const doughnutChartOptions = {
    responsive: true,
    maintainAspectRatio: false,
    plugins: {
      legend: {
        position: 'bottom' as const,
      },
    },
  };

  const contentStats = [
    { name: 'Total Users', value: loading ? '...' : String(users.length), icon: Users, color: 'text-indigo-600', bg: 'bg-indigo-100' },
    { name: 'Total Posts', value: loading ? '...' : String(posts.length), icon: FileText, color: 'text-pink-600', bg: 'bg-pink-100' },
    { name: 'Published Posts', value: loading ? '...' : String(publishedCount), icon: CheckCircle, color: 'text-green-600', bg: 'bg-green-100' },
  ];

  const enquiryStats = [
    { name: 'Total Enquiries', value: loading ? '...' : String(contacts.length), icon: Inbox, color: 'text-blue-600', bg: 'bg-blue-100' },
    { name: 'Contacted', value: loading ? '...' : String(contactedCount), icon: PhoneCall, color: 'text-emerald-600', bg: 'bg-emerald-100' },
    { name: 'Not Interested', value: loading ? '...' : String(notInterestedCount), icon: UserX, color: 'text-slate-600', bg: 'bg-slate-100' },
  ];

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-semibold text-gray-900">Dashboard Overview</h1>

      {/* Content Stats */}
      <div>
        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Content</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {contentStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.name} className="overflow-hidden rounded-xl bg-white p-6 shadow-sm border border-gray-100">
                <div className="flex items-center">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full ${stat.bg}`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-500">{stat.name}</h3>
                    <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Enquiry Stats */}
      <div>
        <h2 className="text-xs font-bold uppercase tracking-widest text-gray-400 mb-3">Enquiries</h2>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {enquiryStats.map((stat) => {
            const Icon = stat.icon;
            return (
              <div key={stat.name} className="overflow-hidden rounded-xl bg-white p-6 shadow-sm border border-gray-100">
                <div className="flex items-center">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-full ${stat.bg}`}>
                    <Icon className={`h-6 w-6 ${stat.color}`} />
                  </div>
                  <div className="ml-4">
                    <h3 className="text-sm font-medium text-gray-500">{stat.name}</h3>
                    <p className="text-2xl font-semibold text-gray-900">{stat.value}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Posts by Status</h3>
          <div className="h-80 w-full">
            <Bar data={postsChartData} options={barChartOptions} />
          </div>
        </div>

        <div className="rounded-xl bg-white p-6 shadow-sm border border-gray-100">
          <h3 className="text-lg font-medium text-gray-900 mb-4">Enquiries by Status</h3>
          <div className="h-80 w-full">
            {contacts.length === 0 && !loading ? (
              <div className="h-full flex items-center justify-center text-sm text-gray-400">
                No enquiries yet.
              </div>
            ) : (
              <Doughnut data={contactsChartData} options={doughnutChartOptions} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
