'use client';

import { Program } from '@/types';
import { getImageUrl } from '@/lib/utils';
import { Edit2, Trash2 } from 'lucide-react';
import Link from 'next/link';

interface ProgramTableProps {
  programs: Program[];
  onEdit: (program: Program) => void;
  onDelete: (id: string) => void;
}

export function ProgramTable({ programs, onEdit, onDelete }: ProgramTableProps) {
  return (
    <div className="w-full overflow-hidden rounded-2xl border border-[#c2c9bb] bg-white shadow-[0px_1px_2px_#0000000d]">
      <div className="overflow-x-auto">
        {/* TABLE HEADER */}
        <div className="grid grid-cols-[1fr_120px_1fr_120px] border-b border-[#c2c9bb] bg-[#f3f4ef]">
          <div className="px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.65px] text-[#72796e]">
            TITLE
          </div>
          <div className="px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.65px] text-[#72796e]">
            IMAGE
          </div>
          <div className="px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.65px] text-[#72796e]">
            DESCRIPTION
          </div>
          <div className="px-6 py-4 text-right text-[13px] font-semibold uppercase tracking-[0.65px] text-[#72796e]">
            ACTIONS
          </div>
        </div>

        {/* TABLE BODY */}
        <div className="divide-y divide-[#c2c9bb]">
          {programs.map((program) => (
            <div 
              key={program.id} 
              className="grid grid-cols-[1fr_120px_1fr_120px] items-center hover:bg-[#f9faf5] transition-colors"
            >
              <div className="px-6 py-6">
                <span className="text-sm font-bold text-[#1a1c19]">
                  {program.title}
                </span>
              </div>

              <div className="px-6 py-4">
                <div className="h-14 w-14 rounded-lg border border-[#e0e3db] overflow-hidden bg-[#f3f4ef]">
                  <img
                    src={getImageUrl(program.image)}
                    alt={program.title}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>

              <div className="px-6 py-4">
                <p className="text-sm text-[#42493e] line-clamp-2">
                  {program.description}
                </p>
              </div>

              <div className="flex items-center justify-end gap-3 px-6 py-4">
                <Link 
                  href={`/admin/programs/${program.id}/edit`}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#f3f4ef] text-[#1a1c19] transition-colors hover:bg-[#e0e3db]"
                  title="Edit"
                >
                  <Edit2 size={18} />
                </Link>
                <button 
                  onClick={() => onDelete(program.id)}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#ffdad6] text-[#410002] transition-colors hover:bg-[#ffb4ab]"
                  title="Delete"
                >
                  <Trash2 size={18} />
                </button>
              </div>
            </div>
          ))}

          {programs.length === 0 && (
            <div className="py-20 text-center text-[#72796e]">
              Belum ada program yang ditambahkan.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

// 'use client';

// import { Program } from '@/types';
// import { Edit2, Trash2, Eye } from 'lucide-react';
// import Link from 'next/link';

// interface ProgramTableProps {
//   programs: Program[];
//   onDelete: (id: string) => void;
// }

// export function ProgramTable({ programs, onDelete }: ProgramTableProps) {
//   return (
//     <div className="w-full bg-white rounded-[24px] border border-[#c2c9bb]/30 shadow-sm overflow-hidden">
//       <div className="overflow-x-auto">
//         <table className="w-full text-left border-collapse">
//           <thead>
//             <tr className="border-b border-[#c2c9bb]/20">
//               <th className="px-8 py-6 text-[11px] font-bold text-[#72796e] uppercase tracking-widest w-12">
//                 {/* Status Dot Column */}
//               </th>
//               <th className="px-4 py-6 text-[11px] font-bold text-[#72796e] uppercase tracking-widest text-left">
//                 Program Title
//               </th>
//               <th className="px-8 py-6 text-[11px] font-bold text-[#72796e] uppercase tracking-widest text-center">
//                 Status
//               </th>
//               <th className="px-8 py-6 text-[11px] font-bold text-[#72796e] uppercase tracking-widest text-center">
//                 Date
//               </th>
//               <th className="px-8 py-6 text-[11px] font-bold text-[#72796e] uppercase tracking-widest text-right">
//                 Actions
//               </th>
//             </tr>
//           </thead>
//           <tbody className="divide-y divide-[#c2c9bb]/10">
//             {programs.map((program) => {
//               // Extract date from program.createdAt or use dummy for demo
//               const programDate = program.createdAt 
//                 ? new Date(program.createdAt).toLocaleDateString('en-GB', { day: '2-digit', month: 'short', year: 'numeric' })
//                 : '12 Oct, 2023';

//               // Determine status and colors for demo
//               const status = program.id === '1' ? 'Ongoing' : program.id === '2' ? 'Upcoming' : 'Completed';
//               const statusColors = {
//                 'Ongoing': 'bg-[#DCFCE7] text-[#166534]',
//                 'Upcoming': 'bg-[#FFEDD5] text-[#9A3412]',
//                 'Completed': 'bg-[#F1F5F9] text-[#475569]'
//               }[status];

//               const dotColors = {
//                 'Ongoing': 'bg-gray-300', // Matches the image's first item grey dot for some reason? Let's follow image: grey, green, green, green
//                 'Upcoming': 'bg-green-500',
//                 'Completed': 'bg-green-500'
//               } as const;

//               // Adjusting dots to match exactly the image:
//               // Row 1: Grey dot
//               // Row 2-4: Green dot
//               const rowDotColor = program.id === '1' ? 'bg-[#D1D5DB]' : 'bg-[#22C55E]';

//               return (
//                 <tr key={program.id} className="group hover:bg-[#F9FAF5] transition-colors">
//                   <td className="px-8 py-6">
//                     <div className={`w-2.5 h-2.5 rounded-full ${rowDotColor}`} />
//                   </td>
//                   <td className="px-4 py-6">
//                     <span className="text-sm font-bold text-[#1B361F]">
//                       {program.title}
//                     </span>
//                   </td>
//                   <td className="px-8 py-6 text-center">
//                     <span className={`px-4 py-1.5 rounded-full text-[10px] font-bold tracking-tight inline-block ${statusColors}`}>
//                       {status}
//                     </span>
//                   </td>
//                   <td className="px-8 py-6 text-center">
//                     <span className="text-sm font-medium text-[#72796E]">
//                       {programDate}
//                     </span>
//                   </td>
//                   <td className="px-8 py-6">
//                     <div className="flex items-center justify-end gap-3">
//                       <button className="p-2 text-[#72796E] hover:text-[#1B361F] hover:bg-white rounded-lg transition-all" title="View details">
//                         <Eye size={18} />
//                       </button>
//                       <Link 
//                         href={`/admin/programs/${program.id}/edit`}
//                         className="p-2 text-[#72796E] hover:text-[#1B361F] hover:bg-white rounded-lg transition-all"
//                         title="Edit program"
//                       >
//                         <Edit2 size={18} />
//                       </Link>
//                       <button 
//                         onClick={() => onDelete(program.id)}
//                         className="p-2 text-[#72796E] hover:text-red-500 hover:bg-red-50 rounded-lg transition-all"
//                         title="Delete program"
//                       >
//                         <Trash2 size={18} strokeWidth={2} />
//                       </button>
//                     </div>
//                   </td>
//                 </tr>
//               );
//             })}
//           </tbody>
//         </table>

//         {programs.length === 0 && (
//           <div className="py-24 text-center">
//             <div className="inline-flex w-16 h-16 bg-[#F9FAF5] rounded-full items-center justify-center text-[#C2C9BB] mb-4">
//               <Eye size={24} />
//             </div>
//             <p className="text-sm font-bold text-[#1B361F]">No programs found</p>
//             <p className="text-[11px] font-medium text-[#72796E] mt-1">Start by adding your first sustainability program.</p>
//           </div>
//         )}
//       </div>
//     </div>
//   );
// }
