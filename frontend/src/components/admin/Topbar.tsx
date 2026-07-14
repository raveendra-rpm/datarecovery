'use client';
import { signOut, useSession } from 'next-auth/react';

export default function Topbar() {
  const { data: session } = useSession();

  return (
    <header className="flex h-16 items-center justify-between border-b bg-white px-6 shadow-sm">
      <div>
        <h2 className="text-lg font-medium text-gray-800">
          Welcome back, {session?.user?.name || 'Admin'}
        </h2>
      </div>
      <div className="flex items-center space-x-4">
        <span className="text-sm text-gray-600 border px-2 py-1 rounded-full bg-gray-100">
          Role: {session?.user?.role || 'Admin'}
        </span>
        <button
          onClick={() => signOut({ callbackUrl: '/admin/login' })}
          className="text-sm font-medium text-red-600 hover:text-red-700"
        >
          Logout
        </button>
      </div>
    </header>
  );
}
