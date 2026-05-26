// 'use client';

// import React from 'react';
// import {
//   Newspaper,
//   Package,
//   FolderKanban,
//   Users,
//   ArrowUpRight,
// } from 'lucide-react';

// const summaryCards = [
//   {
//     id: 'total-news',
//     title: 'TOTAL NEWS',
//     value: '24',
//     icon: Newspaper,
//     trend: '12%',
//     trendColor: 'text-[#154212]',
//     trendBg: 'bg-[#dff3dd]',
//   },
//   {
//     id: 'total-products',
//     title: 'TOTAL PRODUCTS',
//     value: '15',
//     icon: Package,
//     trend: '8%',
//     trendColor: 'text-[#904d00]',
//     trendBg: 'bg-[#fff1db]',
//   },
//   {
//     id: 'total-programs',
//     title: 'TOTAL PROGRAMS',
//     value: '8',
//     icon: FolderKanban,
//     trend: 'Stable',
//     trendColor: 'text-[#60233e]',
//     trendBg: 'bg-[#f6e3ea]',
//   },
//   {
//     id: 'total-users',
//     title: 'TOTAL USERS',
//     value: '120',
//     icon: Users,
//     trend: '24%',
//     trendColor: 'text-[#154212]',
//     trendBg: 'bg-[#dff3dd]',
//   },
// ];

// const activityRows = [
//   {
//     id: 1,
//     title: 'New product added: Recycled Tote',
//     date: 'Oct 24, 2023',
//     admin: 'Sarah Johnson',
//     status: 'SUCCESS',
//     statusBg: 'bg-[#dff3dd]',
//     statusText: 'text-[#154212]',
//   },
//   {
//     id: 2,
//     title: 'News published: Eco-Summit 2024',
//     date: 'Oct 23, 2023',
//     admin: 'Michael Chen',
//     status: 'SUCCESS',
//     statusBg: 'bg-[#dff3dd]',
//     statusText: 'text-[#154212]',
//   },
//   {
//     id: 3,
//     title: 'User permissions updated',
//     date: 'Oct 23, 2023',
//     admin: 'Sarah Johnson',
//     status: 'PENDING',
//     statusBg: 'bg-[#fff1db]',
//     statusText: 'text-[#904d00]',
//   },
//   {
//     id: 4,
//     title: 'Deprecated program archived',
//     date: 'Oct 22, 2023',
//     admin: 'Admin Root',
//     status: 'SUCCESS',
//     statusBg: 'bg-[#dff3dd]',
//     statusText: 'text-[#154212]',
//   },
//   {
//     id: 5,
//     title: 'New partner verified: GreenSpace',
//     date: 'Oct 21, 2023',
//     admin: 'Michael Chen',
//     status: 'SUCCESS',
//     statusBg: 'bg-[#dff3dd]',
//     statusText: 'text-[#154212]',
//   },
//   {
//     id: 6,
//     title: 'User registered: Amelia W.',
//     date: 'Oct 20, 2023',
//     admin: 'System',
//     status: 'SUCCESS',
//     statusBg: 'bg-[#dff3dd]',
//     statusText: 'text-[#154212]',
//   },
// ];

// export default function AdminDashboard() {
//   return (
//     <div className="flex flex-col gap-8">
//       {/* HEADER */}
//       <div className="flex flex-col gap-2">
//         <h1 className="text-[32px] font-bold leading-[38px] text-[#154212]">
//           Overview Dashboard
//         </h1>
//         <p className="text-base leading-[25px] text-[#42493e]">
//           Welcome back! Here&apos;s what&apos;s happening with Teman Pilah today.
//         </p>
//       </div>

//       {/* SUMMARY CARDS */}
//       <section
//         aria-label="Dashboard summary metrics"
//         className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-4"
//       >
//         {summaryCards.map((card) => {
//           const Icon = card.icon;

//           return (
//             <article
//               key={card.id}
//               className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-[0px_2px_12px_#0000000a]"
//             >
//               {/* TOP */}
//               <div className="flex items-start justify-between">
//                 <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#f3f4ef]">
//                   <Icon
//                     size={28}
//                     className="text-[#2d5a27]"
//                   />
//                 </div>

//                 <div
//                   className={`inline-flex items-center gap-1 rounded-full px-3 py-1 ${card.trendBg}`}
//                 >
//                   <ArrowUpRight
//                     size={14}
//                     className={card.trendColor}
//                   />
//                   <span
//                     className={`text-sm font-medium ${card.trendColor}`}
//                   >
//                     {card.trend}
//                   </span>
//                 </div>
//               </div>

//               {/* CONTENT */}
//               <div className="mt-8 flex flex-col gap-1">
//                 <span className="text-base tracking-[0.8px] text-[#42493e]">
//                   {card.title}
//                 </span>
//                 <h2 className="text-[40px] font-bold leading-[60px] text-[#1a1c19]">
//                   {card.value}
//                 </h2>
//               </div>
//             </article>
//           );
//         })}
//       </section>

//       {/* RECENT ACTIVITY */}
//       <section className="overflow-hidden rounded-2xl border border-neutral-200 bg-white shadow-[0px_2px_12px_#0000000a]">
//         {/* TABLE HEADER */}
//         <div className="flex items-center justify-between border-b border-neutral-200 px-6 py-5">
//           <h2 className="text-xl font-semibold text-[#1a1c19]">
//             Recent Activity
//           </h2>
//           <button
//             type="button"
//             className="text-base font-bold text-[#60233e] transition-opacity hover:opacity-70"
//           >
//             View All Activities
//           </button>
//         </div>

//         {/* TABLE */}
//         <div className="overflow-x-auto">
//           {/* COLUMN HEADER */}
//           <div className="min-w-[900px] border-b border-neutral-200 bg-[#f3f4ef]">
//             <div className="grid grid-cols-[2fr_1fr_1fr_140px] px-6 py-4">
//               <div className="text-sm font-bold tracking-[0.8px] text-[#72796e]">
//                 ACTIVITY
//               </div>
//               <div className="text-sm font-bold tracking-[0.8px] text-[#72796e]">
//                 DATE
//               </div>
//               <div className="text-sm font-bold tracking-[0.8px] text-[#72796e]">
//                 ADMIN
//               </div>
//               <div className="text-sm font-bold tracking-[0.8px] text-[#72796e]">
//                 STATUS
//               </div>
//             </div>
//           </div>

//           {/* ROWS */}
//           <div className="min-w-[900px]">
//             {activityRows.map((activity) => (
//               <article
//                 key={activity.id}
//                 className="grid grid-cols-[2fr_1fr_1fr_140px] items-center border-b border-neutral-200 px-6 py-5 last:border-none"
//               >
//                 {/* ACTIVITY */}
//                 <div className="flex items-center gap-3">
//                   <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#f3f4ef]">
//                     <div className="h-3 w-3 rounded-full bg-[#2d5a27]" />
//                   </div>
//                   <span className="text-base font-semibold text-[#1a1c19]">
//                     {activity.title}
//                   </span>
//                 </div>

//                 {/* DATE */}
//                 <div className="text-base text-[#42493e]">
//                   {activity.date}
//                 </div>

//                 {/* ADMIN */}
//                 <div className="text-base text-[#42493e]">
//                   {activity.admin}
//                 </div>

//                 {/* STATUS */}
//                 <div>
//                   <div
//                     className={`inline-flex rounded-full px-3 py-1 ${activity.statusBg}`}
//                   >
//                     <span
//                       className={`text-xs font-bold tracking-[0px] ${activity.statusText}`}
//                     >
//                       {activity.status}
//                     </span>
//                   </div>
//                 </div>
//               </article>
//             ))}
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// }


// import React from 'react';

// import { Hero } from '@/components/landing/Hero';
// import { About } from '@/components/landing/About';
// import { Programs } from '@/components/landing/Programs';
// import { Education } from '@/components/landing/Education';
// import { ProductCatalog } from '@/components/landing/ProductCatalog';
// import { Gallery } from '@/components/landing/Gallery';
// import { Partnerships } from '@/components/landing/Partnerships';
// import { JoinCTA } from '@/components/landing/JoinCTA';

// type ProgramItem = {
//   id: number;
//   title: string;
//   summary?: string;
//   content: string;
//   image?: string;
//   slug: string;
// };

// export default async function LandingPage() {

//   // =========================
//   // PRODUCTS
//   // =========================
//   const productsRes = await fetch(
//     'http://localhost:2000/api/products',
//     {
//       cache: 'no-store',
//     }
//   );

//   const productsJson = await productsRes.json();

//   const products = productsJson?.data || [];

//   // =========================
//   // PROGRAMS / NEWS
//   // =========================
//   let programs = [];

//   try {
//     const programsRes = await fetch(
//       'http://localhost:2000/api/news',
//       {
//         cache: 'no-store',
//       }
//     );

//     const programsJson = await programsRes.json();

//     programs = (programsJson?.data || []).map(
//       (item: ProgramItem) => ({
//         id: item.id,

//         title: item.title,

//         description:
//           item.summary || item.content,

//         image:
//           item.image ||
//           'https://picsum.photos/500/300',

//         slug: item.slug,
//       })
//     );
//   } catch (error) {
//     console.error(
//       'Failed to fetch programs:',
//       error
//     );

//     programs = [];
//   }

//   return (
//     <div className="overflow-x-hidden pt-20">

//       <Hero />

//       <About />

//       <Programs programs={programs} />

//       <Education />

//       <ProductCatalog products={products} />

//       <Gallery />

//       <Partnerships />

//       <JoinCTA />

//     </div>
//   );
// }

'use client';

import React from 'react';
import {
  FolderKanban,
  Package,
  Handshake,
  MoreVertical,
  User,
  Archive,
  Edit2,
  Send,
} from 'lucide-react';

const summaryCards = [
  {
    id: 'total-programs',
    title: 'TOTAL PROGRAMS',
    value: '8',
    icon: FolderKanban,
    trend: 'Stable',
    trendColor: 'text-[#42493E]',
    iconBg: 'bg-[#FDF2F2]',
    iconColor: 'text-[#E02424]',
  },
  {
    id: 'total-products',
    title: 'TOTAL PRODUCTS',
    value: '15',
    icon: Package,
    trend: '8%',
    trendColor: 'text-[#92400E]',
    iconBg: 'bg-[#FEF3C7]',
    iconColor: 'text-[#D97706]',
  },
  {
    id: 'total-partnerships',
    title: 'TOTAL PARTNERSHIPS',
    value: '12',
    icon: Handshake,
    trend: '5%',
    trendColor: 'text-[#046C4E]',
    iconBg: 'bg-[#DCFCE7]',
    iconColor: 'text-[#059669]',
  },
];

const activityRows = [
  {
    id: 1,
    title: 'New program published: Bank Sampah Desa',
    date: 'Oct 24, 2023',
    admin: 'Sarah Johnson',
    status: 'SUCCESS',
    icon: Send,
    iconBg: 'bg-[#FDF2F2]',
    iconColor: 'text-[#E02424]',
  },
  {
    id: 2,
    title: 'Product updated: Recycled Tote Bag',
    date: 'Oct 23, 2023',
    admin: 'Michael Chen',
    status: 'SUCCESS',
    icon: Edit2,
    iconBg: 'bg-[#FEF3C7]',
    iconColor: 'text-[#D97706]',
  },
  {
    id: 3,
    title: 'Partnership approved: Green Earth Community',
    date: 'Oct 23, 2023',
    admin: 'Sarah Johnson',
    status: 'SUCCESS',
    icon: Handshake,
    iconBg: 'bg-[#DCFCE7]',
    iconColor: 'text-[#059669]',
  },
  {
    id: 4,
    title: 'User permissions updated',
    date: 'Oct 22, 2023',
    admin: 'Admin Root',
    status: 'PENDING',
    icon: User,
    iconBg: 'bg-[#FEF3C7]',
    iconColor: 'text-[#D97706]',
  },
  {
    id: 5,
    title: 'Program archived: Workshop Kompos',
    date: 'Oct 21, 2023',
    admin: 'Michael Chen',
    status: 'SUCCESS',
    icon: Archive,
    iconBg: 'bg-[#FDF2F2]',
    iconColor: 'text-[#E02424]',
  },
];

export default function AdminDashboard() {
  return (
    <div className="flex flex-col gap-10" data-debug="true">
      {/* HEADER SECTION */}
      <div className="flex flex-col gap-1">
        <h1 className="text-[32px] font-extrabold text-[#1B361F] tracking-tight">
          Overview Dashboard
        </h1>
        <p className="text-base text-[#42493E] font-medium">
          Welcome back! Here's what's happening with Teman Pilah today.
        </p>
      </div>

      {/* METRIC CARDS */}
      <section className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {summaryCards.map((card) => (
          <div key={card.id} className="bg-white rounded-[24px] p-8 border border-[#C2C9BB]/30 shadow-sm flex flex-col gap-8 transition-all hover:shadow-md">
            <div className="flex items-center justify-between">
              <div className={`w-14 h-14 rounded-2xl ${card.iconBg} ${card.iconColor} flex items-center justify-center`}>
                <card.icon size={26} />
              </div>
              <div className="flex items-center gap-1">
                 <span className={`text-sm font-bold opacity-80 ${card.trendColor}`}>
                  {card.id === 'total-programs' ? '- Stable' : `~ ${card.trend}`}
                 </span>
              </div>
            </div>
            <div className="space-y-1">
              <p className="text-[11px] font-bold text-[#72796E] tracking-widest uppercase">{card.title}</p>
              <h2 className="text-[44px] font-extrabold text-[#1B361F] leading-tight">{card.value}</h2>
            </div>
          </div>
        ))}
      </section>

      {/* RECENT ACTIVITY TABLE */}
      <section className="bg-white rounded-[24px] border border-[#C2C9BB]/30 shadow-sm overflow-hidden mb-10">
        <div className="px-8 py-6 border-b border-[#C2C9BB]/20 flex items-center justify-between">
          <h2 className="text-xl font-bold text-[#1B361F]">Recent Activity</h2>
          <button className="text-[#60233E] font-bold text-sm hover:underline">View All Activities</button>
        </div>
        
        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead>
              <tr className="bg-[#F9FAF5] border-b border-[#C2C9BB]/20">
                <th className="px-8 py-4 text-[10px] font-bold text-[#72796E] uppercase tracking-widest">Activity</th>
                <th className="px-8 py-4 text-[10px] font-bold text-[#72796E] uppercase tracking-widest">Date</th>
                <th className="px-8 py-4 text-[10px] font-bold text-[#72796E] uppercase tracking-widest">Admin</th>
                <th className="px-8 py-4 text-[10px] font-bold text-[#72796E] uppercase tracking-widest">Status</th>
                <th className="px-8 py-4 text-[10px] font-bold text-[#72796E] uppercase tracking-widest w-10"></th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[#C2C9BB]/10">
              {activityRows.map((row) => (
                <tr key={row.id} className="hover:bg-[#F9FAF5]/50 transition-colors">
                  <td className="px-8 py-5">
                    <div className="flex items-center gap-4">
                      <div className={`w-10 h-10 rounded-xl ${row.iconBg} ${row.iconColor} flex items-center justify-center`}>
                        <row.icon size={16} />
                      </div>
                      <span className="font-bold text-[#1B361F] text-sm">{row.title}</span>
                    </div>
                  </td>
                  <td className="px-8 py-5 text-[#42493E] font-medium text-xs">
                    {row.date}
                  </td>
                  <td className="px-8 py-5 text-[#42493E] font-medium text-xs">
                    {row.admin}
                  </td>
                  <td className="px-8 py-5">
                    <span className={`px-2.5 py-1 rounded-full text-[9px] font-black tracking-widest ${
                      row.status === 'SUCCESS' ? 'bg-[#DCFCE7] text-[#046C4E]' : 'bg-[#FEF3C7] text-[#92400E]'
                    }`}>
                      {row.status}
                    </span>
                  </td>
                  <td className="px-8 py-5">
                    <button className="text-[#C2C9BB] hover:text-[#42493E]">
                      <MoreVertical size={18} />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}
