'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';

import {
  LayoutGrid,
  ClipboardList,
  Package,
  GraduationCap,
  Users2,
  ArrowLeft,
  X,
  Image as ImageIcon,
} from 'lucide-react';

const navigationItems = [
  {
    label: 'Dashboard',
    icon: LayoutGrid,
    path: '/admin',
  },
  {
    label: 'Programs Management',
    icon: ClipboardList,
    path: '/admin/news',
  },
  {
    label: 'Product Management',
    icon: Package,
    path: '/admin/products',
  },
  {
    label: 'Education Content',
    icon: GraduationCap,
    path: '/admin/education',
  },
  {
    label: 'Gallery Management',
    icon: ImageIcon,
    path: '/admin/gallery',
  },
];

interface SidebarProps {
  isOpen?: boolean;
  onClose?: () => void;
}

export function Sidebar({ isOpen, onClose }: SidebarProps) {
  const pathname = usePathname();

  return (
    <>
      {/* OVERLAY FOR MOBILE */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40 bg-black/50 lg:hidden"
          onClick={onClose}
        />
      )}

      <aside
        aria-label="Admin sidebar"
        className={cn(
          "fixed left-0 top-0 h-screen w-[280px] flex-col bg-[#2D5A27] py-8 z-50 transition-transform duration-300 flex",
          isOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* PROFILE SECTION */}
        <div className="px-8 mb-12">
          <div className="flex items-center justify-between gap-3 w-full">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-white rounded-4xl flex items-center justify-center overflow-hidden">
                 <img 
                   src="/logo.png" 
                   alt="Teman Pilah"
                   className="w-full h-full object-cover scale-150"
                 />
              </div>
              <div>
                <h2 className="text-xl font-black text-white leading-tight">
                  Teman Pilah
                </h2>
                <p className="text-[10px] font-bold text-[#FC9430] uppercase tracking-widest">
                  Admin Dashboard
                </p>
              </div>
            </div>
            {/* Close Button on Mobile */}
            {onClose && (
              <button 
                onClick={onClose}
                className="p-1 rounded-lg text-[#9DD090] hover:text-white lg:hidden"
                aria-label="Close menu"
              >
                <X size={20} />
              </button>
            )}
          </div>
        </div>

      {/* NAVIGATION */}
      <nav
        aria-label="Admin navigation"
        className="flex flex-1 flex-col gap-2 px-6"
      >
        {navigationItems.map((item) => {
          const Icon = item.icon;
          const isActive = pathname === item.path;
          
          return (
            <Link
              key={item.label}
              href={item.path}
              onClick={onClose}
              className={cn(
                "flex w-full items-center gap-4 rounded-xl px-5 py-4 transition-all duration-200 group",
                isActive
                  ? "bg-[#FC9430] text-[#1B361F] shadow-lg shadow-[#FC9430]/20"
                  : "text-[#9DD090] hover:bg-white/5 hover:text-white"
              )}
            >
              <Icon
                size={22}
                className={cn(
                  "flex-shrink-0 transition-colors",
                  isActive ? "text-[#1B361F]" : "text-[#9DD090] group-hover:text-white"
                )}
                strokeWidth={isActive ? 2.5 : 2}
              />

              <span
                className={cn(
                  "text-sm font-bold tracking-tight",
                )}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </nav>
      
      {/* BACK TO WEB */}
      <div className="px-8 mt-auto pt-6 border-t border-white/10">
        <Link 
          href="/" 
          onClick={onClose}
          className="flex items-center gap-2 text-xs font-bold text-[#9DD090] hover:text-white transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Kembali ke Website
        </Link>
      </div>
    </aside>
    </>
  );
}

