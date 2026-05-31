'use client';

import { Search, Bell, LogOut, Menu } from 'lucide-react';
import { useState, useEffect } from 'react';
import { useRouter, usePathname } from 'next/navigation';
import { toast } from 'sonner';

interface HeaderProps {
  onToggleSidebar?: () => void;
}

export function Header({ onToggleSidebar }: HeaderProps) {
  const router = useRouter();
  const pathname = usePathname();
  const [adminName, setAdminName] = useState('Admin User');
  const [initials, setInitials] = useState('AU');

  useEffect(() => {
    const email = localStorage.getItem('adminEmail');
    if (email) {
      setAdminName(email); // Menampilkan nama login secara utuh sesuai request
      setInitials(email.substring(0, 2).toUpperCase());
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isAdminAuthenticated');
    localStorage.removeItem('adminEmail');
    localStorage.removeItem('token');
    toast.success('Berhasil logout');
    router.push('/login');
  };
  
  // Hanya tampilkan search bar jika berada di halaman Overview (dashboard)
  const showSearch = pathname === '/admin';

  return (
    <header className="fixed left-0 lg:left-[280px] right-0 top-0 z-40 h-20 border-b border-[#c2c9bb] bg-[#f9faf5] px-6 lg:px-8 py-0 shadow-sm flex items-center justify-between">
      {/* Burger Menu for Mobile */}
      {onToggleSidebar && (
        <button
          onClick={onToggleSidebar}
          className="mr-4 p-2 rounded-lg text-[#2D5A27] hover:bg-[#F3F4EF] lg:hidden flex-shrink-0"
          aria-label="Toggle sidebar"
        >
          <Menu size={24} />
        </button>
      )}

      {/* Search Bar - Hanya muncul di halaman Overview */}
      <div className="flex-1 max-w-md hidden md:block">
        {showSearch && (
          <div className="relative">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
            <input 
              type="text" 
              placeholder="Search resources..." 
              className="w-full bg-transparent border border-gray-300 rounded-full py-2.5 pl-12 pr-4 focus:outline-none focus:border-[#2D5A27] text-sm text-gray-700 placeholder-gray-400"
            />
          </div>
        )}
      </div>

      {/* Right Actions */}
      <nav aria-label="Header actions" className="inline-flex items-center gap-6 ml-auto">
        <div className="inline-flex items-center gap-4">
          <div className="flex items-center justify-center h-10 w-10 rounded-full border-[1.5px] border-[#9DD090] bg-transparent text-green-700 font-bold text-sm">
            {initials}
          </div>
          <span className="text-sm font-medium text-gray-700 hidden sm:block">{adminName}</span>
          
          <button 
            onClick={handleLogout}
            className="ml-2 p-2 text-[#42493E] hover:bg-red-50 hover:text-red-600 rounded-lg transition-colors"
            title="Logout"
          >
            <LogOut size={18} />
          </button>
        </div>
      </nav>
    </header>
  );
}
