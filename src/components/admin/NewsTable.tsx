// // 'use client';

// // import { News } from '@/types';

// // interface NewsTableProps {
// //   newsList: News[];
// //   onEdit: (news: News) => void;
// //   onDelete: (id: string) => void;
// // }

// // const EyeIcon = () => (
// //   <svg
// //     aria-hidden="true"
// //     fill="none"
// //     height="16"
// //     viewBox="0 0 16 16"
// //     width="16"
// //     xmlns="http://www.w3.org/2000/svg"
// //   >
// //     <path
// //       d="M1.33301 8.00016C2.39967 5.3335 4.66634 4.00016 7.99967 4.00016C11.333 4.00016 13.5997 5.3335 14.6663 8.00016C13.5997 10.6668 11.333 12.0002 7.99967 12.0002C4.66634 12.0002 2.39967 10.6668 1.33301 8.00016Z"
// //       stroke="#42493E"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //       strokeWidth="1.3"
// //     />
// //     <circle
// //       cx="8"
// //       cy="8"
// //       r="2"
// //       stroke="#42493E"
// //       strokeWidth="1.3"
// //     />
// //   </svg>
// // );

// // const EditIcon = () => (
// //   <svg
// //     aria-hidden="true"
// //     fill="none"
// //     height="16"
// //     viewBox="0 0 16 16"
// //     width="16"
// //     xmlns="http://www.w3.org/2000/svg"
// //   >
// //     <path
// //       d="M8.66699 2.00016L14.0003 7.3335L6.00033 15.3335H0.666992V10.0002L8.66699 2.00016Z"
// //       stroke="#E9A23B"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //       strokeWidth="1.3"
// //     />
// //     <path
// //       d="M7.33301 3.3335L12.6663 8.66683"
// //       stroke="#E9A23B"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //       strokeWidth="1.3"
// //     />
// //   </svg>
// // );

// // const TrashIcon = () => (
// //   <svg
// //     aria-hidden="true"
// //     fill="none"
// //     height="16"
// //     viewBox="0 0 16 16"
// //     width="16"
// //     xmlns="http://www.w3.org/2000/svg"
// //   >
// //     <path
// //       d="M2.66699 4.00016H13.3337"
// //       stroke="#D05B5B"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //       strokeWidth="1.3"
// //     />
// //     <path
// //       d="M6 6.6665V10.6665"
// //       stroke="#D05B5B"
// //       strokeLinecap="round"
// //       strokeWidth="1.3"
// //     />
// //     <path
// //       d="M10 6.6665V10.6665"
// //       stroke="#D05B5B"
// //       strokeLinecap="round"
// //       strokeWidth="1.3"
// //     />
// //     <path
// //       d="M4 4.00016L4.66667 12.0002C4.72228 12.6666 5.2791 13.1784 5.94766 13.1784H10.053C10.7215 13.1784 11.2784 12.6666 11.334 12.0002L12 4.00016"
// //       stroke="#D05B5B"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //       strokeWidth="1.3"
// //     />
// //     <path
// //       d="M6 4.00016V2.66683C6 2.29864 6.29848 2.00016 6.66667 2.00016H9.33333C9.70152 2.00016 10 2.29864 10 2.66683V4.00016"
// //       stroke="#D05B5B"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //       strokeWidth="1.3"
// //     />
// //   </svg>
// // );

// // export function NewsTable({ newsList, onEdit, onDelete }: NewsTableProps) {
// //   return (
// //     <div className="overflow-hidden rounded-2xl border border-[#c2c9bb4c] bg-white shadow-[0px_4px_12px_#0000000d]">
// //       <div className="flex items-center border-b border-[#c2c9bb] px-6 py-4 bg-gray-50/50">
// //         <div className="w-[373.59px] text-xs font-bold uppercase tracking-wider text-[#72796e]">
// //           ARTICLE TITLE
// //         </div>
// //         <div className="w-[125.39px] text-xs font-bold uppercase tracking-wider text-[#72796e]">
// //           AUTHOR
// //         </div>
// //         <div className="w-[155.72px] text-xs font-bold uppercase tracking-wider text-[#72796e]">
// //           DATE PUBLISHED
// //         </div>
// //         <div className="w-[147.28px] text-xs font-bold uppercase tracking-wider text-[#72796e]">
// //           STATUS
// //         </div>
// //         <div className="flex-1 text-right text-xs font-bold uppercase tracking-wider text-[#72796e]">
// //           ACTIONS
// //         </div>
// //       </div>

// //       <div className="divide-y divide-[#c2c9bb]">
// //         {newsList.map((article) => (
// //           <div
// //             key={article.id}
// //             className="flex items-center px-6 py-4 hover:bg-gray-50/30 transition-colors"
// //           >
// //             <div className="w-[373.59px] text-base font-medium text-[#1a1c19] line-clamp-1">
// //               {article.title}
// //             </div>

// //             <div className="w-[125.39px] text-sm text-[#42493e]">
// //               Admin<br />
// //               <span className="text-xs text-slate-400">Teman Pilah</span>
// //             </div>

// //             <div className="w-[155.72px] text-sm text-[#42493e]">
// //               {article.date}
// //             </div>

// //             <div className="w-[147.28px]">
// //               <div
// //                 className={`inline-flex rounded-full px-3 py-1 text-xs font-medium ${
// //                   article.status === 'published' 
// //                     ? 'bg-[#bcf0ae] text-[#23501e]' 
// //                     : 'bg-[#fffdcc] text-[#6e3900]'
// //                 }`}
// //               >
// //                 {article.status.charAt(0).toUpperCase() + article.status.slice(1)}
// //               </div>
// //             </div>

// //             <div className="flex flex-1 items-center justify-end gap-3">
// //               <button
// //                 aria-label={`View ${article.title}`}
// //                 className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
// //                 type="button"
// //               >
// //                 <EyeIcon />
// //               </button>

// //               <button
// //                 onClick={() => onEdit(article)}
// //                 aria-label={`Edit ${article.title}`}
// //                 className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
// //                 type="button"
// //               >
// //                 <EditIcon />
// //               </button>

// //               <button
// //                 onClick={() => onDelete(article.id)}
// //                 aria-label={`Delete ${article.title}`}
// //                 className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
// //                 type="button"
// //               >
// //                 <TrashIcon />
// //               </button>
// //             </div>
// //           </div>
// //         ))}
        
// //         {newsList.length === 0 && (
// //           <div className="py-20 text-center">
// //             <p className="text-[#72796e]">Belum ada berita yang tersedia.</p>
// //           </div>
// //         )}
// //       </div>

// //       <div className="flex items-center justify-between border-t border-[#c2c9bb] bg-[#f3f4ef] px-6 py-4">
// //         <p className="text-sm text-[#42493e]">
// //           Showing 1 to {newsList.length} of {newsList.length} news
// //         </p>

// //         <nav
// //           aria-label="Pagination"
// //           className="inline-flex items-center gap-2"
// //         >
// //           <button
// //             disabled
// //             className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#c2c9bb80] text-[#c2c9bb]"
// //           >
// //             <svg
// //               aria-hidden="true"
// //               fill="none"
// //               height="16"
// //               viewBox="0 0 16 16"
// //               width="16"
// //               xmlns="http://www.w3.org/2000/svg"
// //             >
// //               <path
// //                 d="M9.5 4L5.5 8L9.5 12"
// //                 stroke="#C2C9BB"
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth="1.5"
// //               />
// //             </svg>
// //           </button>

// //           <button
// //             className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#154212]"
// //             type="button"
// //           >
// //             <span className="text-sm font-bold text-white">1</span>
// //           </button>

// //           <button
// //             disabled
// //             className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#c2c9bb] text-[#42493e]"
// //           >
// //             <svg
// //               aria-hidden="true"
// //               fill="none"
// //               height="16"
// //               viewBox="0 0 16 16"
// //               width="16"
// //               xmlns="http://www.w3.org/2000/svg"
// //             >
// //               <path
// //                 d="M6.5 4L10.5 8L6.5 12"
// //                 stroke="#72796E"
// //                 strokeLinecap="round"
// //                 strokeLinejoin="round"
// //                 strokeWidth="1.5"
// //               />
// //             </svg>
// //           </button>
// //         </nav>
// //       </div>
// //     </div>
// //   );
// // }

// 'use client';

// import { News } from '@/types';
// import Link from 'next/link';

// interface NewsTableProps {
//   newsList: News[];
//   onEdit: (news: News) => void;
//   onDelete: (id: string) => void;
// }

// const EyeIcon = () => (
//   <svg
//     aria-hidden="true"
//     fill="none"
//     height="16"
//     viewBox="0 0 16 16"
//     width="16"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M1.33301 8.00016C2.39967 5.3335 4.66634 4.00016 7.99967 4.00016C11.333 4.00016 13.5997 5.3335 14.6663 8.00016C13.5997 10.6668 11.333 12.0002 7.99967 12.0002C4.66634 12.0002 2.39967 10.6668 1.33301 8.00016Z"
//       stroke="#42493E"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="1.3"
//     />
//     <circle
//       cx="8"
//       cy="8"
//       r="2"
//       stroke="#42493E"
//       strokeWidth="1.3"
//     />
//   </svg>
// );

// const EditIcon = () => (
//   <svg
//     aria-hidden="true"
//     fill="none"
//     height="16"
//     viewBox="0 0 16 16"
//     width="16"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M8.66699 2.00016L14.0003 7.3335L6.00033 15.3335H0.666992V10.0002L8.66699 2.00016Z"
//       stroke="#E9A23B"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="1.3"
//     />
//     <path
//       d="M7.33301 3.3335L12.6663 8.66683"
//       stroke="#E9A23B"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="1.3"
//     />
//   </svg>
// );

// const TrashIcon = () => (
//   <svg
//     aria-hidden="true"
//     fill="none"
//     height="16"
//     viewBox="0 0 16 16"
//     width="16"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M2.66699 4.00016H13.3337"
//       stroke="#D05B5B"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="1.3"
//     />
//     <path
//       d="M6 6.6665V10.6665"
//       stroke="#D05B5B"
//       strokeLinecap="round"
//       strokeWidth="1.3"
//     />
//     <path
//       d="M10 6.6665V10.6665"
//       stroke="#D05B5B"
//       strokeLinecap="round"
//       strokeWidth="1.3"
//     />
//     <path
//       d="M4 4.00016L4.66667 12.0002C4.72228 12.6666 5.2791 13.1784 5.94766 13.1784H10.053C10.7215 13.1784 11.2784 12.6666 11.334 12.0002L12 4.00016"
//       stroke="#D05B5B"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="1.3"
//     />
//     <path
//       d="M6 4.00016V2.66683C6 2.29864 6.29848 2.00016 6.66667 2.00016H9.33333C9.70152 2.00016 10 2.29864 10 2.66683V4.00016"
//       stroke="#D05B5B"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//       strokeWidth="1.3"
//     />
//   </svg>
// );

// export function NewsTable({ newsList, onEdit, onDelete }: NewsTableProps) {
//   return (
//     <div className="overflow-hidden rounded-2xl border border-[#c2c9bb4c] bg-white shadow-[0px_4px_12px_#0000000d]">
//       <div className="flex items-center border-b border-[#c2c9bb] px-6 py-4 bg-gray-50/50">
//         <div className="w-[373.59px] text-xs font-bold uppercase tracking-wider text-[#72796e]">
//           ARTICLE TITLE
//         </div>
//         <div className="w-[155.72px] text-xs font-bold uppercase tracking-wider text-[#72796e]">
//           DATE PUBLISHED
//         </div>
//         <div className="flex-1 text-right text-xs font-bold uppercase tracking-wider text-[#72796e]">
//           ACTIONS
//         </div>
//       </div>

//       <div className="divide-y divide-[#c2c9bb]">
//         {newsList.map((article) => (
//           <div
//             key={article.id}
//             className="flex items-center px-6 py-4 hover:bg-gray-50/30 transition-colors"
//           >
//             <div className="w-[373.59px] text-base font-medium text-[#1a1c19] line-clamp-1">
//               {article.title}
//             </div>

//             <div className="w-[155.72px] text-sm text-[#42493e]">
//               {new Date(article.createdAt).toLocaleDateString('id-ID', {
//                 year: 'numeric',
//                 month: 'short',
//                 day: 'numeric'
//               })}
//             </div>

//             <div className="flex flex-1 items-center justify-end gap-3">
//               <button
//                 aria-label={`View ${article.title}`}
//                 className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
//                 type="button"
//               >
//                 <EyeIcon />
//               </button>

//               <Link
//                 href={`/admin/news/${article.id}/edit`}
//                 aria-label={`Edit ${article.title}`}
//                 className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
//                 title="Edit"
//               >
//                 <EditIcon />
//               </Link>

//               <button
//                 onClick={() => onDelete(article.id)}
//                 aria-label={`Delete ${article.title}`}
//                 className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
//                 type="button"
//               >
//                 <TrashIcon />
//               </button>
//             </div>
//           </div>
//         ))}
        
//         {newsList.length === 0 && (
//           <div className="py-20 text-center">
//             <p className="text-[#72796e]">Belum ada berita yang tersedia.</p>
//           </div>
//         )}
//       </div>

//       <div className="flex items-center justify-between border-t border-[#c2c9bb] bg-[#f3f4ef] px-6 py-4">
//         <p className="text-sm text-[#42493e]">
//           Showing 1 to {newsList.length} of {newsList.length} news
//         </p>

//         <nav
//           aria-label="Pagination"
//           className="inline-flex items-center gap-2"
//         >
//           <button
//             disabled
//             className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#c2c9bb80] text-[#c2c9bb]"
//           >
//             <svg
//               aria-hidden="true"
//               fill="none"
//               height="16"
//               viewBox="0 0 16 16"
//               width="16"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M9.5 4L5.5 8L9.5 12"
//                 stroke="#C2C9BB"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="1.5"
//               />
//             </svg>
//           </button>

//           <button
//             className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#154212]"
//             type="button"
//           >
//             <span className="text-sm font-bold text-white">1</span>
//           </button>

//           <button
//             disabled
//             className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#c2c9bb] text-[#42493e]"
//           >
//             <svg
//               aria-hidden="true"
//               fill="none"
//               height="16"
//               viewBox="0 0 16 16"
//               width="16"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 d="M6.5 4L10.5 8L6.5 12"
//                 stroke="#72796E"
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="1.5"
//               />
//             </svg>
//           </button>
//         </nav>
//       </div>
//     </div>
//   );
// }

'use client';

import { News } from '@/types';
import Link from 'next/link';

interface NewsTableProps {
  newsList: News[];
  onDelete: (id: string) => void;
}

const EyeIcon = () => (
  <svg
    aria-hidden="true"
    fill="none"
    height="16"
    viewBox="0 0 16 16"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.33301 8.00016C2.39967 5.3335 4.66634 4.00016 7.99967 4.00016C11.333 4.00016 13.5997 5.3335 14.6663 8.00016C13.5997 10.6668 11.333 12.0002 7.99967 12.0002C4.66634 12.0002 2.39967 10.6668 1.33301 8.00016Z"
      stroke="#42493E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.3"
    />
    <circle
      cx="8"
      cy="8"
      r="2"
      stroke="#42493E"
      strokeWidth="1.3"
    />
  </svg>
);

const EditIcon = () => (
  <svg
    aria-hidden="true"
    fill="none"
    height="16"
    viewBox="0 0 16 16"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M8.66699 2.00016L14.0003 7.3335L6.00033 15.3335H0.666992V10.0002L8.66699 2.00016Z"
      stroke="#E9A23B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.3"
    />
    <path
      d="M7.33301 3.3335L12.6663 8.66683"
      stroke="#E9A23B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.3"
    />
  </svg>
);

const TrashIcon = () => (
  <svg
    aria-hidden="true"
    fill="none"
    height="16"
    viewBox="0 0 16 16"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M2.66699 4.00016H13.3337"
      stroke="#D05B5B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.3"
    />
    <path
      d="M6 6.6665V10.6665"
      stroke="#D05B5B"
      strokeLinecap="round"
      strokeWidth="1.3"
    />
    <path
      d="M10 6.6665V10.6665"
      stroke="#D05B5B"
      strokeLinecap="round"
      strokeWidth="1.3"
    />
    <path
      d="M4 4.00016L4.66667 12.0002C4.72228 12.6666 5.2791 13.1784 5.94766 13.1784H10.053C10.7215 13.1784 11.2784 12.6666 11.334 12.0002L12 4.00016"
      stroke="#D05B5B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.3"
    />
    <path
      d="M6 4.00016V2.66683C6 2.29864 6.29848 2.00016 6.66667 2.00016H9.33333C9.70152 2.00016 10 2.29864 10 2.66683V4.00016"
      stroke="#D05B5B"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.3"
    />
  </svg>
);

export function NewsTable({ newsList, onDelete }: NewsTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#c2c9bb4c] bg-white shadow-[0px_4px_12px_#0000000d]">
      <div className="flex items-center border-b border-[#c2c9bb] px-6 py-4 bg-gray-50/50">
        <div className="w-[373.59px] text-xs font-bold uppercase tracking-wider text-[#72796e]">
          ARTICLE TITLE
        </div>
        <div className="w-[155.72px] text-xs font-bold uppercase tracking-wider text-[#72796e]">
          DATE PUBLISHED
        </div>
        <div className="flex-1 text-right text-xs font-bold uppercase tracking-wider text-[#72796e]">
          ACTIONS
        </div>
      </div>

      <div className="divide-y divide-[#c2c9bb]">
        {newsList.map((article) => (
          <div
            key={article.id}
            className="flex items-center px-6 py-4 hover:bg-gray-50/30 transition-colors"
          >
            <div className="w-[373.59px] text-base font-medium text-[#1a1c19] line-clamp-1">
              {article.title}
            </div>

            <div className="w-[155.72px] text-sm text-[#42493e]">
              {new Date(article.createdAt).toLocaleDateString('id-ID', {
                year: 'numeric',
                month: 'short',
                day: 'numeric'
              })}
            </div>

            <div className="flex flex-1 items-center justify-end gap-3">
              <button
                aria-label={`View ${article.title}`}
                className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
                type="button"
              >
                <EyeIcon />
              </button>

              <Link
                href={`/admin/news/${article.id}/edit`}
                aria-label={`Edit ${article.title}`}
                className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
                title="Edit"
              >
                <EditIcon />
              </Link>

              <button
                onClick={() => onDelete(article.id)}
                aria-label={`Delete ${article.title}`}
                className="flex h-8 w-8 items-center justify-center rounded-lg hover:bg-slate-100 transition-colors"
                type="button"
              >
                <TrashIcon />
              </button>
            </div>
          </div>
        ))}
        
        {newsList.length === 0 && (
          <div className="py-20 text-center">
            <p className="text-[#72796e]">Belum ada berita yang tersedia.</p>
          </div>
        )}
      </div>

      <div className="flex items-center justify-between border-t border-[#c2c9bb] bg-[#f3f4ef] px-6 py-4">
        <p className="text-sm text-[#42493e]">
          Showing 1 to {newsList.length} of {newsList.length} news
        </p>

        <nav
          aria-label="Pagination"
          className="inline-flex items-center gap-2"
        >
          <button
            disabled
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#c2c9bb80] text-[#c2c9bb]"
          >
            <svg
              aria-hidden="true"
              fill="none"
              height="16"
              viewBox="0 0 16 16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.5 4L5.5 8L9.5 12"
                stroke="#C2C9BB"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </button>

          <button
            className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#154212]"
            type="button"
          >
            <span className="text-sm font-bold text-white">1</span>
          </button>

          <button
            disabled
            className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#c2c9bb] text-[#42493e]"
          >
            <svg
              aria-hidden="true"
              fill="none"
              height="16"
              viewBox="0 0 16 16"
              width="16"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.5 4L10.5 8L6.5 12"
                stroke="#72796E"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="1.5"
              />
            </svg>
          </button>
        </nav>
      </div>
    </div>
  );
}

