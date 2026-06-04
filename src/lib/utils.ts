import { clsx, type ClassValue } from 'clsx';
import { twMerge } from 'tailwind-merge';

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(price: number) {
  return new Intl.NumberFormat('id-ID', {
    style: 'currency',
    currency: 'IDR',
    maximumFractionDigits: 0,
  }).format(price);
}

export interface AdminActivity {
  id: string;
  title: string;
  date: string;
  status: 'SUCCESS' | 'WARNING' | 'FAILED';
  iconBg: string;
  rawDate: number;
}

export function logAdminActivity(title: string, iconBg: string = 'bg-[#F4F5F2]') {
  if (typeof window === 'undefined') return;
  try {
    const stored = localStorage.getItem('admin_activities');
    const activities: AdminActivity[] = stored ? JSON.parse(stored) : [];
    
    const newActivity: AdminActivity = {
      id: `local-${Date.now()}-${Math.random().toString(36).substring(2, 9)}`,
      title,
      date: new Date().toLocaleDateString('en-US', {
        month: 'short',
        day: 'numeric',
        year: 'numeric',
      }),
      status: 'SUCCESS',
      iconBg,
      rawDate: Date.now(),
    };
    
    activities.unshift(newActivity);
    localStorage.setItem('admin_activities', JSON.stringify(activities.slice(0, 50)));
  } catch (error) {
    console.error('Failed to log admin activity:', error);
  }
}
