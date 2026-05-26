'use client';

import { Sidebar } from '@/components/admin/Sidebar';
import { Header } from '@/components/admin/Header';

export function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="min-h-screen bg-[#f9faf5]">
      <Sidebar />

      {/* Main Content */}
      <div className="lg:pl-[280px]">
        <Header />

        <main className="pt-20">
          <div className="px-8 py-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
