'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { 
  LayoutDashboard, 
  Newspaper, 
  ShoppingBag, 
  Target, 
  GraduationCap, 
  Handshake, 
  Users, 
  Settings 
} from 'lucide-react';
import { cn } from '@/lib/utils';

const navigationItems = [
  {
    label: 'Dashboard',
    icon: LayoutDashboard,
    path: '/admin',
  },
  {
    label: 'News Management',
    icon: Newspaper,
    path: '/admin/news',
  },
  {
    label: 'Product Management',
    icon: ShoppingBag,
    path: '/admin/products',
  },
  {
    label: 'Programs',
    icon: Target,
    path: '/admin/programs',
  },
  {
    label: 'Education Content',
    icon: GraduationCap,
    path: '/admin/education',
  },
  {
    label: 'Partnerships',
    icon: Handshake,
    path: '/admin/partnerships',
  },
  {
    label: 'Users',
    icon: Users,
    path: '/admin/users',
  },
  {
    label: 'Settings',
    icon: Settings,
    path: '/admin/settings',
  },
];

export function Sidebar() {
  const pathname = usePathname();

  return (
    <aside
      aria-label="Admin sidebar"
      className="flex h-screen w-[280px] flex-col bg-[#2D5A27] py-6 shadow-xl z-50 shrink-0"
    >
      {/* HEADER */}
      <div className="px-6 mb-10">
        <div className="flex flex-col gap-1">
          <h2 className="text-2xl font-bold tracking-tight text-white font-serif">
            Teman Pilah
          </h2>
          <p className="text-sm font-medium text-[#9DD090]/80">
            Admin Dashboard
          </p>
        </div>
      </div>

      {/* NAVIGATION */}
      <nav
        aria-label="Admin navigation"
        className="flex flex-1 flex-col gap-1.5 overflow-y-auto px-4"
      >
        {navigationItems.map((item) => {
          const isActive = pathname === item.path;
          
          return (
            <Link
              key={item.label}
              href={item.path}
              className={cn(
                "flex w-full items-center gap-3.5 rounded-xl px-4 py-3.5 text-left transition-all duration-200 group",
                isActive
                  ? "bg-[#FC9430] shadow-lg shadow-[#FC9430]/20"
                  : "hover:bg-white/10"
              )}
            >
              {/* ICON */}
              <item.icon 
                className={cn(
                  "h-5 w-5 shrink-0 transition-colors",
                  isActive ? "text-[#663500]" : "text-[#9DD090]"
                )} 
              />

              {/* LABEL */}
              <span
                className={cn(
                  "text-sm font-semibold tracking-tight leading-tight",
                  isActive ? "text-[#663500]" : "text-[#9DD090]"
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>

      {/* FOOTER - Could add a logout or user info here */}
      <div className="px-6 mt-6">
        <Link 
          href="/"
          className="text-xs text-[#9DD090]/50 hover:text-[#9DD090] transition-colors"
        >
          &larr; Kembali ke Website
        </Link>
      </div>
    </aside>
  );
}
