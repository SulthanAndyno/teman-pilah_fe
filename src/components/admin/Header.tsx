'use client';

import { useRouter } from 'next/navigation';
import { LogOut } from 'lucide-react';
import { toast } from 'sonner';

const headerActions = [
  {
    label: 'Notifications',
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="block"
      >
        <path
          d="M8 14C8.73333 14 9.33333 13.4 9.33333 12.6667H6.66667C6.66667 13.4 7.26667 14 8 14ZM12 10V6.66667C12 4.62 10.9067 2.90667 9 2.45333V2C9 1.44667 8.55333 1 8 1C7.44667 1 7 1.44667 7 2V2.45333C5.08667 2.90667 4 4.61333 4 6.66667V10L2.66667 11.3333V12H13.3333V11.3333L12 10Z"
          fill="#42493E"
        />
        <circle cx="11.75" cy="3.25" r="2.25" fill="#E14D4D" />
      </svg>
    ),
  },

  {
    label: 'Profile settings',
    icon: (
      <svg
        width="16"
        height="16"
        viewBox="0 0 16 16"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
        className="block"
      >
        <path
          d="M8 8C9.47333 8 10.6667 6.80667 10.6667 5.33333C10.6667 3.86 9.47333 2.66667 8 2.66667C6.52667 2.66667 5.33333 3.86 5.33333 5.33333C5.33333 6.80667 6.52667 8 8 8ZM8 9.33333C4.9 9.33333 2.66667 10.2267 2.66667 12V13.3333H13.3333V12C13.3333 10.2267 11.1 9.33333 8 9.33333Z"
          fill="#42493E"
        />
        <circle
          cx="8"
          cy="8"
          r="6.25"
          stroke="#42493E"
          strokeWidth="1.5"
        />
      </svg>
    ),
  },
];

const user = {
  name: 'Admin User',
  role: 'SUPER ADMIN',
};

export function Header() {
  const router = useRouter();
  
  const handleLogout = () => {
    localStorage.removeItem('isAdminAuthenticated');
    toast.success('Berhasil logout');
    router.push('/login');
  };

  return (
    <header className="fixed left-[280px] right-0 top-0 z-40 h-20 border-b border-[#c2c9bb] bg-[#f9faf5] px-8 py-0 shadow-[0px_1px_2px_#0000000d] hidden lg:flex items-center justify-end">
      <nav
        aria-label="Header actions"
        className="inline-flex items-center gap-6"
      >
        <div className="inline-flex items-center gap-4">
          {headerActions.map((action) => (
            <button
              key={action.label}
              type="button"
              aria-label={action.label}
              className="relative flex h-4 w-4 items-center justify-center rounded-sm transition-opacity hover:opacity-80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f6f1e]"
            >
              {action.icon}
            </button>
          ))}
        </div>

        <div
          className="h-8 w-px bg-[#c2c9bb]"
          aria-hidden="true"
        />

        <div className="inline-flex items-center gap-3">
          <button
            type="button"
            aria-label={`${user.name}, ${user.role}`}
            className="inline-flex items-center gap-3 rounded-md transition-opacity hover:opacity-90 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#2f6f1e]"
          >
            <div
              className="h-10 w-10 rounded-full border-2 border-[#bcf0ae] bg-[#f9faf5] flex items-center justify-center overflow-hidden"
              aria-hidden="true"
            >
              <img
                src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&q=80&w=100"
                alt="Admin User"
                className="h-full w-full object-cover"
              />
            </div>

            <span className="inline-flex flex-col items-start text-left">
              <span className="text-base font-normal leading-4 tracking-[0] text-[#1a1c19]">
                {user.name}
              </span>

              <span className="text-[11px] leading-[16.5px] tracking-[0.55px] text-[#42493e] uppercase font-bold">
                {user.role}
              </span>
            </span>
          </button>

          <button 
            onClick={handleLogout}
            className="ml-2 p-2 text-[#42493e] hover:text-red-500 transition-colors"
            title="Logout"
          >
            <LogOut size={20} />
          </button>
        </div>
      </nav>
    </header>
  );
}
