'use client';

import { useState } from 'react';
import { Sidebar } from '@/components/admin/Sidebar';
import { Header } from '@/components/admin/Header';

export function AdminLayout({ children }: { children: React.ReactNode }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#f9faf5]">
      <Sidebar isOpen={isSidebarOpen} onClose={() => setIsSidebarOpen(false)} />

      {/* Main Content */}
      <div className="lg:pl-[280px] transition-all duration-300">
        <Header onToggleSidebar={() => setIsSidebarOpen(!isSidebarOpen)} />

        <main className="pt-20">
          <div className="px-4 sm:px-8 py-6 sm:py-10">
            {children}
          </div>
        </main>
      </div>
    </div>
  );
}
