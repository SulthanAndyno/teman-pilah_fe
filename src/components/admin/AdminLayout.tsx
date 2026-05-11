'use client';

import { Sidebar } from '@/components/admin/Sidebar';
import { Header } from '@/components/admin/Header';

export function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex min-h-screen bg-white">
      <Sidebar />

      {/* Main Content */}
      <div className="flex-grow flex flex-col overflow-hidden">
        <Header />

        <main className="flex-grow p-8 overflow-y-auto">
          {children}
        </main>
      </div>
    </div>
  );
}
