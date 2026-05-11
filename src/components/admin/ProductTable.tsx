// // // 'use client';

// // // import { Product } from '@/types';
// // // import { Card } from '@/components/ui/Card';
// // // import { Badge } from '@/components/ui/Badge';
// // // import { Button } from '@/components/ui/Button';
// // // import { formatPrice, cn } from '@/lib/utils';
// // // import { Edit2, Trash2, ShoppingBag } from 'lucide-react';

// // // interface ProductTableProps {
// // //   products: Product[];
// // //   onEdit: (product: Product) => void;
// // //   onDelete: (id: string) => void;
// // // }

// // // export function ProductTable({ products, onEdit, onDelete }: ProductTableProps) {
// // //   return (
// // //     <Card padding="none" className="overflow-hidden">
// // //       <div className="overflow-x-auto">
// // //         <table className="w-full text-left">
// // //           <thead className="bg-bg/50 border-b border-border">
// // //             <tr>
// // //               <th className="px-6 py-4 font-bold text-primary">Info Produk</th>
// // //               <th className="px-6 py-4 font-bold text-primary">Kategori</th>
// // //               <th className="px-6 py-4 font-bold text-primary">Harga</th>
// // //               <th className="px-6 py-4 font-bold text-primary group">Stok <Badge className="ml-2">Live</Badge></th>
// // //               <th className="px-6 py-4 font-bold text-primary text-right">Aksi</th>
// // //             </tr>
// // //           </thead>
// // //           <tbody className="divide-y divide-border">
// // //             {products.map((product) => (
// // //               <tr key={product.id} className="hover:bg-bg/20 transition-colors">
// // //                 <td className="px-6 py-4">
// // //                   <div className="flex items-center gap-4">
// // //                     <img src={product.image} className="w-12 h-12 rounded-lg object-cover bg-bg" alt={product.name} />
// // //                     <span className="font-medium text-primary">{product.name}</span>
// // //                   </div>
// // //                 </td>
// // //                 <td className="px-6 py-4">
// // //                   <Badge variant="default" className="bg-primary/5 text-primary border-primary/10">
// // //                     {product.category}
// // //                   </Badge>
// // //                 </td>
// // //                 <td className="px-6 py-4 font-medium">{formatPrice(product.price)}</td>
// // //                 <td className="px-6 py-4">
// // //                   <div className="flex items-center gap-2">
// // //                     <div className={cn(
// // //                       'w-2 h-2 rounded-full',
// // //                       product.stock > 10 ? 'bg-green-500' : 'bg-red-500'
// // //                     )} />
// // //                     {product.stock} pcs
// // //                   </div>
// // //                 </td>
// // //                 <td className="px-6 py-4">
// // //                   <div className="flex justify-end gap-2">
// // //                     <Button 
// // //                       size="icon" 
// // //                       variant="ghost" 
// // //                       className="text-primary hover:bg-primary/10"
// // //                       onClick={() => onEdit(product)}
// // //                     >
// // //                       <Edit2 size={18} />
// // //                     </Button>
// // //                     <Button 
// // //                       size="icon" 
// // //                       variant="ghost" 
// // //                       className="text-red-500 hover:bg-red-50/50"
// // //                       onClick={() => onDelete(product.id)}
// // //                     >
// // //                       <Trash2 size={18} />
// // //                     </Button>
// // //                   </div>
// // //                 </td>
// // //               </tr>
// // //             ))}
// // //           </tbody>
// // //         </table>
// // //         {products.length === 0 && (
// // //           <div className="py-20 text-center space-y-4">
// // //             <div className="w-16 h-16 bg-bg rounded-full flex items-center justify-center mx-auto text-neutral">
// // //               <ShoppingBag size={32} />
// // //             </div>
// // //             <div>
// // //               <p className="font-bold text-primary">Produk tidak ditemukan</p>
// // //               <p className="text-sm text-neutral">Coba gunakan kata kunci pencarian lain.</p>
// // //             </div>
// // //           </div>
// // //         )}
// // //       </div>
// // //     </Card>
// // //   );
// // // }

// // 'use client';

// // import { Product } from '@/types';
// // import { formatPrice } from '@/lib/utils';

// // interface ProductTableProps {
// //   products: Product[];
// //   onEdit: (product: Product) => void;
// //   onDelete: (id: string) => void;
// // }

// // const getStatusStyles = (stock: number) => {
// //   if (stock > 0) {
// //     return {
// //       label: 'Active',
// //       widthClass: 'w-[85px]',
// //       bgClass: 'bg-[#bcf0ae]',
// //       dotClass: 'bg-[#154212]',
// //       textClass: 'text-[#23501e]',
// //     };
// //   }
// //   return {
// //     label: 'Out of Stock',
// //     widthClass: 'w-[120px]',
// //     bgClass: 'bg-[#ffd6d6]',
// //     dotClass: 'bg-[#ba1a1a]',
// //     textClass: 'text-[#93000a]',
// //   };
// // };

// // const EyeIcon = () => (
// //   <svg
// //     aria-hidden="true"
// //     width="18"
// //     height="18"
// //     viewBox="0 0 18 18"
// //     fill="none"
// //     xmlns="http://www.w3.org/2000/svg"
// //   >
// //     <path
// //       d="M1.5 9C2.74 5.86 5.63 3.75 9 3.75C12.37 3.75 15.26 5.86 16.5 9C15.26 12.14 12.37 14.25 9 14.25C5.63 14.25 2.74 12.14 1.5 9Z"
// //       stroke="#5E635A"
// //       strokeWidth="1.4"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //     />
// //     <circle cx="9" cy="9" r="2.25" stroke="#5E635A" strokeWidth="1.4" />
// //   </svg>
// // );

// // const PencilIcon = () => (
// //   <svg
// //     aria-hidden="true"
// //     width="18"
// //     height="18"
// //     viewBox="0 0 18 18"
// //     fill="none"
// //     xmlns="http://www.w3.org/2000/svg"
// //   >
// //     <path
// //       d="M10.875 4.125L13.875 7.125"
// //       stroke="#8C5A00"
// //       strokeWidth="1.4"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //     />
// //     <path
// //       d="M3.75 14.25L6.28754 13.7425C6.59016 13.682 6.86799 13.5338 7.08562 13.3162L13.875 6.52681C14.4963 5.90549 14.4963 4.89798 13.875 4.27665C13.2537 3.65533 12.2462 3.65533 11.6249 4.27665L4.83552 11.066C4.61789 11.2837 4.46973 11.5615 4.40921 11.8641L3.75 14.25Z"
// //       stroke="#8C5A00"
// //       strokeWidth="1.4"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //     />
// //   </svg>
// // );

// // const TrashIcon = () => (
// //   <svg
// //     aria-hidden="true"
// //     width="18"
// //     height="18"
// //     viewBox="0 0 18 18"
// //     fill="none"
// //     xmlns="http://www.w3.org/2000/svg"
// //   >
// //     <path
// //       d="M4.5 6H13.5"
// //       stroke="#B3261E"
// //       strokeWidth="1.4"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //     />
// //     <path
// //       d="M7.125 2.625H10.875"
// //       stroke="#B3261E"
// //       strokeWidth="1.4"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //     />
// //     <path
// //       d="M12.75 6V13.125C12.75 13.9534 12.0784 14.625 11.25 14.625H6.75C5.92157 14.625 5.25 13.9534 5.25 13.125V6"
// //       stroke="#B3261E"
// //       strokeWidth="1.4"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //     />
// //     <path
// //       d="M7.5 8.25V11.625"
// //       stroke="#B3261E"
// //       strokeWidth="1.4"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //     />
// //     <path
// //       d="M10.5 8.25V11.625"
// //       stroke="#B3261E"
// //       strokeWidth="1.4"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //     />
// //   </svg>
// // );

// // const PaginationPrevIcon = () => (
// //   <svg
// //     aria-hidden="true"
// //     width="16"
// //     height="16"
// //     viewBox="0 0 16 16"
// //     fill="none"
// //     xmlns="http://www.w3.org/2000/svg"
// //   >
// //     <path
// //       d="M9.5 4L5.5 8L9.5 12"
// //       stroke="#C2C9BB"
// //       strokeWidth="1.5"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //     />
// //   </svg>
// // );

// // const PaginationNextIcon = () => (
// //   <svg
// //     aria-hidden="true"
// //     width="16"
// //     height="16"
// //     viewBox="0 0 16 16"
// //     fill="none"
// //     xmlns="http://www.w3.org/2000/svg"
// //   >
// //     <path
// //       d="M6.5 4L10.5 8L6.5 12"
// //       stroke="#72796E"
// //       strokeWidth="1.5"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //     />
// //   </svg>
// // );

// // export function ProductTable({ products, onEdit, onDelete }: ProductTableProps) {
// //   return (
// //     <div className="overflow-hidden rounded-2xl border border-[#c2c9b4] bg-white shadow-[0px_4px_12px_#0000000d]">
// //       <div className="flex items-center justify-between border-b border-[#c2c9bb] px-6 py-4">
// //         <div>
// //           <h2 className="text-xl font-semibold text-[#1a1c19]">
// //             Product List
// //           </h2>
// //           <p className="mt-1 text-sm text-[#42493e]">
// //             {products.length} Items total
// //           </p>
// //         </div>
// //       </div>

// //       <div className="overflow-x-auto">
// //         <div className="min-w-[1000px]">
// //           {/* TABLE HEADER */}
// //           <div className="grid grid-cols-[142px_180px_1fr_170px_180px] border-b border-[#c2c9bb] bg-[#f3f4ef]">
// //             <div className="px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.65px] text-[#72796e]">
// //               Product ID
// //             </div>
// //             <div className="px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.65px] text-[#72796e]">
// //               Product Photo
// //             </div>
// //             <div className="px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.65px] text-[#72796e]">
// //               Product Name
// //             </div>
// //             <div className="px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.65px] text-[#72796e]">
// //               Status
// //             </div>
// //             <div className="px-6 py-4 text-right text-[13px] font-semibold uppercase tracking-[0.65px] text-[#72796e]">
// //               Actions
// //             </div>
// //           </div>

// //           {/* TABLE ROWS */}
// //           <div className="divide-y divide-[#c2c9bb]">
// //             {products.map((product) => {
// //               const statusStyles = getStatusStyles(product.stock);
// //               const displayId = product.id.substring(0, 6).toUpperCase();

// //               return (
// //                 <div
// //                   key={product.id}
// //                   className="grid grid-cols-[142px_180px_1fr_170px_180px] items-center hover:bg-gray-50/30 transition-colors"
// //                 >
// //                   <div className="px-6 py-6">
// //                     <span className="text-sm font-semibold text-[#72796e]">
// //                       TP-{displayId}
// //                     </span>
// //                   </div>

// //                   <div className="px-6 py-5">
// //                     <div className="h-14 w-14 rounded-lg border border-[#e0e3db] overflow-hidden bg-[#f3f4ef] shadow-[0px_1px_2px_#0000000d]">
// //                       <img
// //                         src={product.image}
// //                         alt={product.name}
// //                         className="h-full w-full object-cover"
// //                       />
// //                     </div>
// //                   </div>

// //                   <div className="px-6 py-6">
// //                     <div className="flex flex-col">
// //                       <span className="text-base font-bold text-[#1a1c19] line-clamp-1">
// //                         {product.name}
// //                       </span>
// //                       <span className="mt-1 text-xs text-[#42493e] line-clamp-1">
// //                         {product.description}
// //                       </span>
// //                     </div>
// //                   </div>

// //                   <div className="px-6 py-6">
// //                     <div
// //                       className={`flex h-[32px] items-center justify-center gap-2 rounded-full ${statusStyles.widthClass} ${statusStyles.bgClass}`}
// //                     >
// //                       <div
// //                         className={`h-2 w-2 rounded-full ${statusStyles.dotClass}`}
// //                       />
// //                       <span
// //                         className={`text-xs font-medium ${statusStyles.textClass}`}
// //                       >
// //                         {statusStyles.label}
// //                       </span>
// //                     </div>
// //                   </div>

// //                   <div className="flex items-center justify-end gap-3 px-6 py-6">
// //                     <button
// //                       type="button"
// //                       className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#d9ddd3] hover:bg-slate-50 transition-colors"
// //                     >
// //                       <EyeIcon />
// //                     </button>

// //                     <button
// //                       type="button"
// //                       onClick={() => onEdit(product)}
// //                       className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#f0d8aa] bg-[#fff8ec] hover:bg-[#fff0d1] transition-colors"
// //                     >
// //                       <PencilIcon />
// //                     </button>

// //                     <button
// //                       type="button"
// //                       onClick={() => onDelete(product.id)}
// //                       className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#f3c7c4] bg-[#fff1f0] hover:bg-[#ffe4e2] transition-colors"
// //                     >
// //                       <TrashIcon />
// //                     </button>
// //                   </div>
// //                 </div>
// //               );
// //             })}
            
// //             {products.length === 0 && (
// //               <div className="py-20 text-center">
// //                 <p className="text-[#72796e]">Belum ada produk yang tersedia.</p>
// //               </div>
// //             )}
// //           </div>
// //         </div>
// //       </div>

// //       {/* FOOTER */}
// //       <div className="flex flex-col gap-4 border-t border-[#c2c9bb] bg-white px-6 py-4 lg:flex-row lg:items-center lg:justify-between">
// //         <div className="flex items-center">
// //           <p className="text-sm text-[#42493e]">
// //             Showing 1 to {products.length} of {products.length} products
// //           </p>
// //         </div>

// //         <nav aria-label="Pagination" className="inline-flex items-center gap-2">
// //           {/* PREV */}
// //           <button
// //             type="button"
// //             className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#d8ddd2] bg-[#f6f7f2] cursor-default"
// //             disabled
// //           >
// //             <PaginationPrevIcon />
// //           </button>

// //           {/* PAGE */}
// //           <div className="inline-flex items-center gap-1">
// //             <button
// //               type="button"
// //               className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#154212] text-sm font-bold text-white"
// //             >
// //               1
// //             </button>
// //           </div>

// //           {/* NEXT */}
// //           <button
// //             type="button"
// //             className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#c2c9bb] bg-white transition hover:bg-[#f3f4ef]"
// //           >
// //             <PaginationNextIcon />
// //           </button>
// //         </nav>
// //       </div>
// //     </div>
// //   );
// // }


// 'use client';

// import { Product } from '@/types';
// import { formatPrice } from '@/lib/utils';

// interface ProductTableProps {
//   products: Product[];
//   onEdit: (product: Product) => void;
//   onDelete: (id: string) => void;
// }

// const getStatusStyles = (stock: number) => {
//   if (stock > 0) {
//     return {
//       label: 'Active',
//       widthClass: 'w-[85px]',
//       bgClass: 'bg-[#bcf0ae]',
//       dotClass: 'bg-[#154212]',
//       textClass: 'text-[#23501e]',
//     };
//   }
//   return {
//     label: 'Out of Stock',
//     widthClass: 'w-[120px]',
//     bgClass: 'bg-[#ffd6d6]',
//     dotClass: 'bg-[#ba1a1a]',
//     textClass: 'text-[#93000a]',
//   };
// };

// const EyeIcon = () => (
//   <svg
//     aria-hidden="true"
//     width="18"
//     height="18"
//     viewBox="0 0 18 18"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M1.5 9C2.74 5.86 5.63 3.75 9 3.75C12.37 3.75 15.26 5.86 16.5 9C15.26 12.14 12.37 14.25 9 14.25C5.63 14.25 2.74 12.14 1.5 9Z"
//       stroke="#5E635A"
//       strokeWidth="1.4"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <circle cx="9" cy="9" r="2.25" stroke="#5E635A" strokeWidth="1.4" />
//   </svg>
// );

// const PencilIcon = () => (
//   <svg
//     aria-hidden="true"
//     width="18"
//     height="18"
//     viewBox="0 0 18 18"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M10.875 4.125L13.875 7.125"
//       stroke="#8C5A00"
//       strokeWidth="1.4"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <path
//       d="M3.75 14.25L6.28754 13.7425C6.59016 13.682 6.86799 13.5338 7.08562 13.3162L13.875 6.52681C14.4963 5.90549 14.4963 4.89798 13.875 4.27665C13.2537 3.65533 12.2462 3.65533 11.6249 4.27665L4.83552 11.066C4.61789 11.2837 4.46973 11.5615 4.40921 11.8641L3.75 14.25Z"
//       stroke="#8C5A00"
//       strokeWidth="1.4"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const TrashIcon = () => (
//   <svg
//     aria-hidden="true"
//     width="18"
//     height="18"
//     viewBox="0 0 18 18"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M4.5 6H13.5"
//       stroke="#B3261E"
//       strokeWidth="1.4"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <path
//       d="M7.125 2.625H10.875"
//       stroke="#B3261E"
//       strokeWidth="1.4"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <path
//       d="M12.75 6V13.125C12.75 13.9534 12.0784 14.625 11.25 14.625H6.75C5.92157 14.625 5.25 13.9534 5.25 13.125V6"
//       stroke="#B3261E"
//       strokeWidth="1.4"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <path
//       d="M7.5 8.25V11.625"
//       stroke="#B3261E"
//       strokeWidth="1.4"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <path
//       d="M10.5 8.25V11.625"
//       stroke="#B3261E"
//       strokeWidth="1.4"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const PaginationPrevIcon = () => (
//   <svg
//     aria-hidden="true"
//     width="16"
//     height="16"
//     viewBox="0 0 16 16"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M9.5 4L5.5 8L9.5 12"
//       stroke="#C2C9BB"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const PaginationNextIcon = () => (
//   <svg
//     aria-hidden="true"
//     width="16"
//     height="16"
//     viewBox="0 0 16 16"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M6.5 4L10.5 8L6.5 12"
//       stroke="#72796E"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// export function ProductTable({ products, onEdit, onDelete }: ProductTableProps) {
//   return (
//     <div className="overflow-hidden rounded-2xl border border-[#c2c9b4] bg-white shadow-[0px_4px_12px_#0000000d]">
//       <div className="flex items-center justify-between border-b border-[#c2c9bb] px-6 py-4">
//         <div>
//           <h2 className="text-xl font-semibold text-[#1a1c19]">
//             Product List
//           </h2>
//           <p className="mt-1 text-sm text-[#42493e]">
//             {products.length} Items total
//           </p>
//         </div>
//       </div>

//       <div className="overflow-x-auto">
//         <div className="min-w-[1000px]">
//           {/* TABLE HEADER */}
//           <div className="grid grid-cols-[142px_180px_1fr_170px_180px] border-b border-[#c2c9bb] bg-[#f3f4ef]">
//             <div className="px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.65px] text-[#72796e]">
//               Product ID
//             </div>
//             <div className="px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.65px] text-[#72796e]">
//               Product Photo
//             </div>
//             <div className="px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.65px] text-[#72796e]">
//               Product Name
//             </div>
//             <div className="px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.65px] text-[#72796e]">
//               Status
//             </div>
//             <div className="px-6 py-4 text-right text-[13px] font-semibold uppercase tracking-[0.65px] text-[#72796e]">
//               Actions
//             </div>
//           </div>

//           {/* TABLE ROWS */}
//           <div className="divide-y divide-[#c2c9bb]">
//             {products.map((product) => {
//               const statusStyles = getStatusStyles(product.stock);
//               const displayId = product.id.substring(0, 6).toUpperCase();

//               return (
//                 <div
//                   key={product.id}
//                   className="grid grid-cols-[142px_180px_1fr_170px_180px] items-center hover:bg-gray-50/30 transition-colors"
//                 >
//                   <div className="px-6 py-6">
//                     <span className="text-sm font-semibold text-[#72796e]">
//                       TP-{displayId}
//                     </span>
//                   </div>

//                   <div className="px-6 py-5">
//                     <div className="h-14 w-14 rounded-lg border border-[#e0e3db] overflow-hidden bg-[#f3f4ef] shadow-[0px_1px_2px_#0000000d]">
//                       <img
//                         src={product.image}
//                         alt={product.name}
//                         className="h-full w-full object-cover"
//                       />
//                     </div>
//                   </div>

//                   <div className="px-6 py-6">
//                     <div className="flex flex-col">
//                       <span className="text-base font-bold text-[#1a1c19] line-clamp-1">
//                         {product.name}
//                       </span>
//                       <span className="mt-1 text-xs text-[#42493e] line-clamp-1">
//                         {product.description}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="px-6 py-6">
//                     <div
//                       className={`flex h-[32px] items-center justify-center gap-2 rounded-full ${statusStyles.widthClass} ${statusStyles.bgClass}`}
//                     >
//                       <div
//                         className={`h-2 w-2 rounded-full ${statusStyles.dotClass}`}
//                       />
//                       <span
//                         className={`text-xs font-medium ${statusStyles.textClass}`}
//                       >
//                         {statusStyles.label}
//                       </span>
//                     </div>
//                   </div>

//                   <div className="flex items-center justify-end gap-3 px-6 py-6">
//                     <button
//                       type="button"
//                       className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#d9ddd3] hover:bg-slate-50 transition-colors"
//                     >
//                       <EyeIcon />
//                     </button>

//                     <button
//                       type="button"
//                       onClick={() => onEdit(product)}
//                       className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#f0d8aa] bg-[#fff8ec] hover:bg-[#fff0d1] transition-colors"
//                     >
//                       <PencilIcon />
//                     </button>

//                     <button
//                       type="button"
//                       onClick={() => onDelete(product.id)}
//                       className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#f3c7c4] bg-[#fff1f0] hover:bg-[#ffe4e2] transition-colors"
//                     >
//                       <TrashIcon />
//                     </button>
//                   </div>
//                 </div>
//               );
//             })}
            
//             {products.length === 0 && (
//               <div className="py-20 text-center">
//                 <p className="text-[#72796e]">Belum ada produk yang tersedia.</p>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>

//       {/* FOOTER */}
//       <div className="flex flex-col gap-4 border-t border-[#c2c9bb] bg-white px-6 py-4 lg:flex-row lg:items-center lg:justify-between">
//         <div className="flex items-center">
//           <p className="text-sm text-[#42493e]">
//             Showing 1 to {products.length} of {products.length} products
//           </p>
//         </div>

//         <nav aria-label="Pagination" className="inline-flex items-center gap-2">
//           {/* PREV */}
//           <button
//             type="button"
//             className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#d8ddd2] bg-[#f6f7f2] cursor-default"
//             disabled
//           >
//             <PaginationPrevIcon />
//           </button>

//           {/* PAGE */}
//           <div className="inline-flex items-center gap-1">
//             <button
//               type="button"
//               className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#154212] text-sm font-bold text-white"
//             >
//               1
//             </button>
//           </div>

//           {/* NEXT */}
//           <button
//             type="button"
//             className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#c2c9bb] bg-white transition hover:bg-[#f3f4ef]"
//           >
//             <PaginationNextIcon />
//           </button>
//         </nav>
//       </div>
//     </div>
//   );
// }

'use client';

import { Product } from '@/types';
import { formatPrice } from '@/lib/utils';

interface ProductTableProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
}

const getStatusStyles = (label: Product['stockLabel']) => {
  switch (label) {
    case 'IN_STOCK':
      return {
        label: 'Active',
        widthClass: 'w-[85px]',
        bgClass: 'bg-[#bcf0ae]',
        dotClass: 'bg-[#154212]',
        textClass: 'text-[#23501e]',
      };
    case 'BULK_AVAILABLE':
      return {
        label: 'Bulk',
        widthClass: 'w-[85px]',
        bgClass: 'bg-[#ffdcc3]',
        dotClass: 'bg-[#904d00]',
        textClass: 'text-[#6e3900]',
      };
    case 'OUT_OF_STOCK':
      return {
        label: 'Empty',
        widthClass: 'w-[85px]',
        bgClass: 'bg-[#ffd6d6]',
        dotClass: 'bg-[#ba1a1a]',
        textClass: 'text-[#93000a]',
      };
    default:
      return {
        label: 'Active',
        widthClass: 'w-[85px]',
        bgClass: 'bg-[#bcf0ae]',
        dotClass: 'bg-[#154212]',
        textClass: 'text-[#23501e]',
      };
  }
};

const EyeIcon = () => (
  <svg
    aria-hidden="true"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M1.5 9C2.74 5.86 5.63 3.75 9 3.75C12.37 3.75 15.26 5.86 16.5 9C15.26 12.14 12.37 14.25 9 14.25C5.63 14.25 2.74 12.14 1.5 9Z"
      stroke="#5E635A"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle cx="9" cy="9" r="2.25" stroke="#5E635A" strokeWidth="1.4" />
  </svg>
);

const PencilIcon = () => (
  <svg
    aria-hidden="true"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.875 4.125L13.875 7.125"
      stroke="#8C5A00"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M3.75 14.25L6.28754 13.7425C6.59016 13.682 6.86799 13.5338 7.08562 13.3162L13.875 6.52681C14.4963 5.90549 14.4963 4.89798 13.875 4.27665C13.2537 3.65533 12.2462 3.65533 11.6249 4.27665L4.83552 11.066C4.61789 11.2837 4.46973 11.5615 4.40921 11.8641L3.75 14.25Z"
      stroke="#8C5A00"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const TrashIcon = () => (
  <svg
    aria-hidden="true"
    width="18"
    height="18"
    viewBox="0 0 18 18"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4.5 6H13.5"
      stroke="#B3261E"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.125 2.625H10.875"
      stroke="#B3261E"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M12.75 6V13.125C12.75 13.9534 12.0784 14.625 11.25 14.625H6.75C5.92157 14.625 5.25 13.9534 5.25 13.125V6"
      stroke="#B3261E"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M7.5 8.25V11.625"
      stroke="#B3261E"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 8.25V11.625"
      stroke="#B3261E"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PaginationPrevIcon = () => (
  <svg
    aria-hidden="true"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M9.5 4L5.5 8L9.5 12"
      stroke="#C2C9BB"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const PaginationNextIcon = () => (
  <svg
    aria-hidden="true"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.5 4L10.5 8L6.5 12"
      stroke="#72796E"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export function ProductTable({ products, onEdit, onDelete }: ProductTableProps) {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#c2c9b4] bg-white shadow-[0px_4px_12px_#0000000d]">
      <div className="flex items-center justify-between border-b border-[#c2c9bb] px-6 py-4">
        <div>
          <h2 className="text-xl font-semibold text-[#1a1c19]">
            Product List
          </h2>
          <p className="mt-1 text-sm text-[#42493e]">
            {products.length} Items total
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[1000px]">
          {/* TABLE HEADER */}
          <div className="grid grid-cols-[142px_180px_1fr_170px_180px] border-b border-[#c2c9bb] bg-[#f3f4ef]">
            <div className="px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.65px] text-[#72796e]">
              Product ID
            </div>
            <div className="px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.65px] text-[#72796e]">
              Product Photo
            </div>
            <div className="px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.65px] text-[#72796e]">
              Product Name
            </div>
            <div className="px-6 py-4 text-[13px] font-semibold uppercase tracking-[0.65px] text-[#72796e]">
              Status
            </div>
            <div className="px-6 py-4 text-right text-[13px] font-semibold uppercase tracking-[0.65px] text-[#72796e]">
              Actions
            </div>
          </div>

          {/* TABLE ROWS */}
          <div className="divide-y divide-[#c2c9bb]">
            {products.map((product) => {
              const statusStyles = getStatusStyles(product.stockLabel);
              const displayId = product.id.substring(0, 6).toUpperCase();

              return (
                <div
                  key={product.id}
                  className="grid grid-cols-[142px_180px_1fr_170px_180px] items-center hover:bg-gray-50/30 transition-colors"
                >
                  <div className="px-6 py-6">
                    <span className="text-sm font-semibold text-[#72796e]">
                      TP-{displayId}
                    </span>
                  </div>

                  <div className="px-6 py-5">
                    <div className="h-14 w-14 rounded-lg border border-[#e0e3db] overflow-hidden bg-[#f3f4ef] shadow-[0px_1px_2px_#0000000d]">
                      <img
                        src={product.image}
                        alt={product.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="px-6 py-6">
                    <div className="flex flex-col">
                      <span className="text-base font-bold text-[#1a1c19] line-clamp-1">
                        {product.name}
                      </span>
                      <span className="mt-1 text-xs text-[#42493e] line-clamp-1">
                        {product.description}
                      </span>
                    </div>
                  </div>

                  <div className="px-6 py-6">
                    <div
                      className={`flex h-[32px] items-center justify-center gap-2 rounded-full ${statusStyles.widthClass} ${statusStyles.bgClass}`}
                    >
                      <div
                        className={`h-2 w-2 rounded-full ${statusStyles.dotClass}`}
                      />
                      <span
                        className={`text-xs font-medium ${statusStyles.textClass}`}
                      >
                        {statusStyles.label}
                      </span>
                    </div>
                  </div>

                  <div className="flex items-center justify-end gap-3 px-6 py-6">
                    <button
                      type="button"
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#d9ddd3] hover:bg-slate-50 transition-colors"
                    >
                      <EyeIcon />
                    </button>

                    <button
                      type="button"
                      onClick={() => onEdit(product)}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#f0d8aa] bg-[#fff8ec] hover:bg-[#fff0d1] transition-colors"
                    >
                      <PencilIcon />
                    </button>

                    <button
                      type="button"
                      onClick={() => onDelete(product.id)}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#f3c7c4] bg-[#fff1f0] hover:bg-[#ffe4e2] transition-colors"
                    >
                      <TrashIcon />
                    </button>
                  </div>
                </div>
              );
            })}
            
            {products.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-[#72796e]">Belum ada produk yang tersedia.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <div className="flex flex-col gap-4 border-t border-[#c2c9bb] bg-white px-6 py-4 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center">
          <p className="text-sm text-[#42493e]">
            Showing 1 to {products.length} of {products.length} products
          </p>
        </div>

        <nav aria-label="Pagination" className="inline-flex items-center gap-2">
          {/* PREV */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#d8ddd2] bg-[#f6f7f2] cursor-default"
            disabled
          >
            <PaginationPrevIcon />
          </button>

          {/* PAGE */}
          <div className="inline-flex items-center gap-1">
            <button
              type="button"
              className="flex h-10 w-10 items-center justify-center rounded-lg bg-[#154212] text-sm font-bold text-white"
            >
              1
            </button>
          </div>

          {/* NEXT */}
          <button
            type="button"
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-[#c2c9bb] bg-white transition hover:bg-[#f3f4ef]"
          >
            <PaginationNextIcon />
          </button>
        </nav>
      </div>
    </div>
  );
}
