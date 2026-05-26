// // 'use client';

// // import Link from 'next/link';
// // import { usePathname } from 'next/navigation';
// // import { cn } from '@/lib/utils';

// // const navigationItems = [
// //   {
// //     label: 'Dashboard',
// //     icon: 'https://c.animaapp.com/EgmZCwgD/img/container.svg',
// //     path: '/admin',
// //   },
// //   {
// //     label: 'News Management',
// //     icon: 'https://c.animaapp.com/EgmZCwgD/img/container-1.svg',
// //     path: '/admin/news',
// //   },
// //   {
// //     label: 'Product Management',
// //     icon: 'https://c.animaapp.com/EgmZCwgD/img/container-2.svg',
// //     path: '/admin/products',
// //   },
// //   {
// //     label: 'Programs',
// //     icon: 'https://c.animaapp.com/EgmZCwgD/img/container-3.svg',
// //     path: '/admin/programs',
// //   },
// //   {
// //     label: 'Education Content',
// //     icon: 'https://c.animaapp.com/EgmZCwgD/img/container-4.svg',
// //     path: '/admin/education',
// //   },
// //   {
// //     label: 'Partnerships',
// //     icon: 'https://c.animaapp.com/EgmZCwgD/img/container-5.svg',
// //     path: '/admin/partnerships',
// //   },
// //   {
// //     label: 'Users',
// //     icon: 'https://c.animaapp.com/EgmZCwgD/img/container-6.svg',
// //     path: '/admin/users',
// //   },
// //   {
// //     label: 'Settings',
// //     icon: 'https://c.animaapp.com/EgmZCwgD/img/container-7.svg',
// //     path: '/admin/settings',
// //   },
// // ];

// // export function Sidebar() {
// //   const pathname = usePathname();

// //   return (
// //     <aside
// //       aria-label="Admin sidebar"
// //       className="fixed left-0 top-0 hidden h-screen w-[280px] flex-col bg-[#2d5a27] py-6 lg:flex z-50 shadow-xl"
// //     >
// //       {/* HEADER */}
// //       <div className="px-6 mb-8">
// //         <div className="flex flex-col gap-1">
// //           <h2 className="text-2xl font-bold tracking-[0px] text-white">
// //             Teman Pilah
// //           </h2>
// //           <p className="text-base text-[#9dd090] opacity-80">
// //             Admin Dashboard
// //           </p>
// //         </div>
// //       </div>

// //       {/* NAVIGATION */}
// //       <nav
// //         aria-label="Admin navigation"
// //         className="flex flex-1 flex-col gap-2 overflow-y-auto px-6"
// //       >
// //         {navigationItems.map((item) => {
// //           const isActive = pathname === item.path;
          
// //           return (
// //             <Link
// //               key={item.label}
// //               href={item.path}
// //               className={cn(
// //                 "flex w-full items-center gap-3 rounded-lg px-4 py-3 text-left transition-all duration-200 group",
// //                 isActive
// //                   ? "bg-[#fc9430]"
// //                   : "hover:bg-white/5"
// //               )}
// //             >
// //               {/* ICON */}
// //               <img
// //                 src={item.icon}
// //                 alt=""
// //                 className="h-6 w-6 flex-shrink-0"
// //               />

// //               {/* LABEL */}
// //               <span
// //                 className={cn(
// //                   "text-base leading-6 tracking-[0px] font-medium",
// //                   isActive ? "text-[#663500]" : "text-[#9dd090]"
// //                 )}
// //               >
// //                 {item.label}
// //               </span>
// //             </Link>
// //           );
// //         })}
// //       </nav>
      
// //       {/* BACK TO WEB */}
// //       <div className="px-6 mt-4">
// //         <Link 
// //           href="/" 
// //           className="text-sm text-[#9dd090]/60 hover:text-white transition-colors"
// //         >
// //           &larr; Kembali ke Website
// //         </Link>
// //       </div>
// //     </aside>
// //   );
// // }


// 'use client';

// import Link from 'next/link';
// import { usePathname } from 'next/navigation';
// import { cn } from '@/lib/utils';

// import {
//   LayoutGrid,
//   ClipboardList,
//   Package,
//   GraduationCap,
//   Users2,
//   Settings,
//   ArrowLeft,
// } from 'lucide-react';

// const navigationItems = [
//   {
//     label: 'Dashboard',
//     icon: LayoutGrid,
//     path: '/admin',
//   },
//   {
//     label: 'Programs Management',
//     icon: ClipboardList,
//     path: '/admin/programs',
//   },
//   {
//     label: 'Product Management',
//     icon: Package,
//     path: '/admin/products',
//   },
//   {
//     label: 'Education Content',
//     icon: GraduationCap,
//     path: '/admin/education',
//   },
//   {
//     label: 'Partnerships',
//     icon: Users2,
//     path: '/admin/partnerships',
//   },
//   {
//     label: 'Settings',
//     icon: Settings,
//     path: '/admin/settings',
//   },
// ];

// export function Sidebar() {
//   const pathname = usePathname();

//   return (
//     <aside
//       aria-label="Admin sidebar"
//       className="fixed left-0 top-0 hidden h-screen w-[280px] flex-col bg-[#2D5A27] py-8 lg:flex z-50 transition-all"
//     >
//       {/* PROFILE SECTION */}
//       <div className="px-8 mb-12">
//         <div className="flex items-center gap-3">
//           <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center overflow-hidden">
//              <img 
//                src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=100" 
//                alt="Teman Pilah"
//                className="w-full h-full object-cover scale-150 rotate-12"
//              />
//           </div>
//           <div>
//             <h2 className="text-xl font-black text-white leading-tight">
//               Teman Pilah
//             </h2>
//             <p className="text-[10px] font-bold text-[#FC9430] uppercase tracking-widest">
//               Admin Dashboard • PRO
//             </p>
//           </div>
//         </div>
//       </div>

//       {/* NAVIGATION */}
//       <nav
//         aria-label="Admin navigation"
//         className="flex flex-1 flex-col gap-2 px-6"
//       >
//         {navigationItems.map((item) => {
//           const Icon = item.icon;
//           const isActive = pathname === item.path;
          
//           return (
//             <Link
//               key={item.label}
//               href={item.path}
//               className={cn(
//                 "flex w-full items-center gap-4 rounded-xl px-5 py-4 transition-all duration-200 group",
//                 isActive
//                   ? "bg-[#FC9430] text-[#1B361F] shadow-lg shadow-[#FC9430]/20"
//                   : "text-[#9DD090] hover:bg-white/5 hover:text-white"
//               )}
//             >
//               <Icon
//                 size={22}
//                 className={cn(
//                   "flex-shrink-0 transition-colors",
//                   isActive ? "text-[#1B361F]" : "text-[#9DD090] group-hover:text-white"
//                 )}
//                 strokeWidth={isActive ? 2.5 : 2}
//               />

//               <span
//                 className={cn(
//                   "text-sm font-bold tracking-tight",
//                 )}
//               >
//                 {item.label}
//               </span>
//             </Link>
//           );
//         })}
//       </nav>
      
//       {/* BACK TO WEB */}
//       <div className="px-8 mt-auto pt-6 border-t border-white/10">
//         <Link 
//           href="/" 
//           className="flex items-center gap-2 text-xs font-bold text-[#9DD090] hover:text-white transition-colors group"
//         >
//           <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
//           Kembali ke Website
//         </Link>
//       </div>
//     </aside>
//   );
// }


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
  Settings,
  ArrowLeft,
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
    label: 'Partnerships',
    icon: Users2,
    path: '/admin/partnerships',
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
      className="fixed left-0 top-0 hidden h-screen w-[280px] flex-col bg-[#2D5A27] py-8 lg:flex z-50 transition-all"
    >
      {/* PROFILE SECTION */}
      <div className="px-8 mb-12">
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
          className="flex items-center gap-2 text-xs font-bold text-[#9DD090] hover:text-white transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Kembali ke Website
        </Link>
      </div>
    </aside>
  );
}

