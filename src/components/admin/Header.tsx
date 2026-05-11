'use client';

import { usePathname } from 'next/navigation';

export function Header() {
  const pathname = usePathname();
  
  const navItems = [
    { name: 'Dashboard', path: '/admin' },
    { name: 'Produk', path: '/admin/products' },
    { name: 'Berita', path: '/admin/news' },
    { name: 'Settings', path: '/admin/settings' },
  ];

  const currentTitle = navItems.find(n => n.path === pathname)?.name || 'Admin';

  return (
    <header className="h-20 bg-white border-b border-border px-8 flex items-center justify-between shadow-sm">
      <h2 className="text-xl font-bold text-primary">
        {currentTitle}
      </h2>
      <div className="flex items-center gap-4">
        <div className="flex flex-col items-end hidden sm:flex">
          <span className="font-bold text-primary">Admin User</span>
          <span className="text-xs text-neutral">Super Admin</span>
        </div>
        <div className="w-10 h-10 rounded-full bg-accent text-white flex items-center justify-center font-bold">
          AU
        </div>
      </div>
    </header>
  );
}
