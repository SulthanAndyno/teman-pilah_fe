// // // 'use client';

// // // import React, { useState, useEffect } from 'react';
// // // import { Button } from '@/components/ui/Button';
// // // import { Input } from '@/components/ui/Input';
// // // import { Product } from '@/types';
// // // import { Plus, Search } from 'lucide-react';
// // // import { toast } from 'sonner';
// // // import { ProductTable } from '@/components/admin/ProductTable';
// // // import { ProductModal } from '@/components/admin/ProductModal';

// // // import { api } from '@/lib/api-client';

// // // export default function AdminProducts() {
// // //   const [products, setProducts] = useState<Product[]>([]);
// // //   const [isLoading, setIsLoading] = useState(true);
// // //   const [searchTerm, setSearchTerm] = useState('');
// // //   const [isModalOpen, setIsModalOpen] = useState(false);
// // //   const [editingProduct, setEditingProduct] = useState<Product | null>(null);

// // //   const fetchProducts = async () => {
// // //     try {
// // //       const data = await api.get<Product[]>('/api/products');
// // //       setProducts(data);
// // //     } catch (error) {
// // //       toast.error('Gagal mengambil data produk dari server');
// // //     } finally {
// // //       setIsLoading(false);
// // //     }
// // //   };

// // //   useEffect(() => {
// // //     fetchProducts();
// // //   }, []);

// // //   const filteredProducts = products.filter(p => 
// // //     p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
// // //     p.category.toLowerCase().includes(searchTerm.toLowerCase())
// // //   );

// // //   const handleOpenModal = (product?: Product) => {
// // //     setEditingProduct(product || null);
// // //     setIsModalOpen(true);
// // //   };

// // //   const handleSubmit = async (data: Partial<Product>) => {
// // //     try {
// // //       if (editingProduct) {
// // //         await api.patch(`/api/products/${editingProduct.id}`, data);
// // //         toast.success('Produk berhasil diperbarui');
// // //       } else {
// // //         await api.post('/api/products', data);
// // //         toast.success('Produk berhasil ditambahkan');
// // //       }
// // //       fetchProducts();
// // //     } catch (error: unknown) {
// // //       const err = error as Error;
// // //       toast.error(err.message || 'Gagal menyimpan produk');
// // //     }
// // //     setIsModalOpen(false);
// // //   };

// // //   const handleDelete = async (id: string) => {
// // //     if (window.confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
// // //       try {
// // //         await api.delete(`/api/products/${id}`);
// // //         toast.success('Produk berhasil dihapus');
// // //         fetchProducts();
// // //       } catch (error: unknown) {
// // //         const err = error as Error;
// // //         toast.error(err.message || 'Gagal menghapus produk');
// // //       }
// // //     }
// // //   };

// // //   if (isLoading) {
// // //     return <div className="flex items-center justify-center h-64">Memuat produk...</div>;
// // //   }

// // //   return (
// // //     <div className="space-y-6">
// // //       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
// // //         <div className="relative w-full sm:w-96">
// // //           <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral" size={18} />
// // //           <Input 
// // //             placeholder="Cari produk atau kategori..." 
// // //             className="pl-10"
// // //             value={searchTerm}
// // //             onChange={(e) => setSearchTerm(e.target.value)}
// // //           />
// // //         </div>
// // //         <Button onClick={() => handleOpenModal()} className="w-full sm:w-auto flex items-center gap-2">
// // //           <Plus size={20} />
// // //           Tambah Produk
// // //         </Button>
// // //       </div>

// // //       <ProductTable 
// // //         products={filteredProducts} 
// // //         onEdit={handleOpenModal} 
// // //         onDelete={handleDelete} 
// // //       />

// // //       <ProductModal 
// // //         isOpen={isModalOpen} 
// // //         product={editingProduct} 
// // //         onClose={() => setIsModalOpen(false)} 
// // //         onSubmit={handleSubmit} 
// // //       />
// // //     </div>
// // //   );
// // // }

// // 'use client';

// // import React, { useState, useEffect, useMemo } from 'react';
// // import { Product } from '@/types';
// // import { toast } from 'sonner';
// // import { ProductTable } from '@/components/admin/ProductTable';
// // import { ProductModal } from '@/components/admin/ProductModal';
// // import { api } from '@/lib/api-client';

// // const SearchIcon = () => (
// //   <svg
// //     aria-hidden="true"
// //     className="h-[15px] w-[15px]"
// //     viewBox="0 0 15 15"
// //     fill="none"
// //     xmlns="http://www.w3.org/2000/svg"
// //   >
// //     <path
// //       d="M10.9375 10.9375L14 14"
// //       stroke="#72796E"
// //       strokeWidth="1.4"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //     />
// //     <circle
// //       cx="6.5625"
// //       cy="6.5625"
// //       r="5.5625"
// //       stroke="#72796E"
// //       strokeWidth="1.4"
// //     />
// //   </svg>
// // );

// // const PlusCircleIcon = () => (
// //   <svg
// //     aria-hidden="true"
// //     width="20"
// //     height="20"
// //     viewBox="0 0 20 20"
// //     fill="none"
// //     xmlns="http://www.w3.org/2000/svg"
// //   >
// //     <circle cx="10" cy="10" r="7.5" stroke="white" strokeWidth="1.5" />
// //     <path
// //       d="M10 7V13"
// //       stroke="white"
// //       strokeWidth="1.5"
// //       strokeLinecap="round"
// //     />
// //     <path
// //       d="M7 10H13"
// //       stroke="white"
// //       strokeWidth="1.5"
// //       strokeLinecap="round"
// //     />
// //   </svg>
// // );

// // const ChevronDownIcon = () => (
// //   <svg
// //     aria-hidden="true"
// //     className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
// //     width="16"
// //     height="16"
// //     viewBox="0 0 16 16"
// //     fill="none"
// //     xmlns="http://www.w3.org/2000/svg"
// //   >
// //     <path
// //       d="M4 6L8 10L12 6"
// //       stroke="#72796E"
// //       strokeWidth="1.5"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //     />
// //   </svg>
// // );

// // const SortIcon = () => (
// //   <svg
// //     aria-hidden="true"
// //     width="20"
// //     height="20"
// //     viewBox="0 0 20 20"
// //     fill="none"
// //     xmlns="http://www.w3.org/2000/svg"
// //   >
// //     <path
// //       d="M7 4V16"
// //       stroke="#42493E"
// //       strokeWidth="1.5"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //     />
// //     <path
// //       d="M4.5 6.5L7 4L9.5 6.5"
// //       stroke="#42493E"
// //       strokeWidth="1.5"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //     />
// //     <path
// //       d="M13 16V4"
// //       stroke="#42493E"
// //       strokeWidth="1.5"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //     />
// //     <path
// //       d="M10.5 13.5L13 16L15.5 13.5"
// //       stroke="#42493E"
// //       strokeWidth="1.5"
// //       strokeLinecap="round"
// //       strokeLinejoin="round"
// //     />
// //   </svg>
// // );

// // export default function AdminProducts() {
// //   const [products, setProducts] = useState<Product[]>([]);
// //   const [isLoading, setIsLoading] = useState(true);
// //   const [searchTerm, setSearchTerm] = useState('');
// //   const [categoryFilter, setCategoryFilter] = useState('all');
// //   const [sortFilter, setSortFilter] = useState('newest');
// //   const [isModalOpen, setIsModalOpen] = useState(false);
// //   const [editingProduct, setEditingProduct] = useState<Product | null>(null);

// //   const fetchProducts = async () => {
// //     try {
// //       const data = await api.get<Product[]>('/api/products');
// //       setProducts(data);
// //     } catch (error) {
// //       toast.error('Gagal mengambil data produk dari server');
// //     } finally {
// //       setIsLoading(false);
// //     }
// //   };

// //   useEffect(() => {
// //     fetchProducts();
// //   }, []);

// //   const filteredProducts = useMemo(() => {
// //     let result = products.filter(p => 
// //       p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
// //       p.category.toLowerCase().includes(searchTerm.toLowerCase())
// //     );

// //     if (categoryFilter !== 'all') {
// //       result = result.filter(p => p.category === categoryFilter);
// //     }

// //     // Since we don't have createdAt in types, newest is just default order for now
// //     // If we had it, we would sort here
// //     if (sortFilter === 'price_asc') {
// //       result = [...result].sort((a, b) => a.price - b.price);
// //     } else if (sortFilter === 'price_desc') {
// //       result = [...result].sort((a, b) => b.price - a.price);
// //     }

// //     return result;
// //   }, [products, searchTerm, categoryFilter, sortFilter]);

// //   const handleOpenModal = (product?: Product) => {
// //     setEditingProduct(product || null);
// //     setIsModalOpen(true);
// //   };

// //   const handleSubmit = async (data: Partial<Product>) => {
// //     try {
// //       if (editingProduct) {
// //         await api.patch(`/api/products/${editingProduct.id}`, data);
// //         toast.success('Produk berhasil diperbarui');
// //       } else {
// //         await api.post('/api/products', data);
// //         toast.success('Produk berhasil ditambahkan');
// //       }
// //       fetchProducts();
// //     } catch (error: unknown) {
// //       const err = error as Error;
// //       toast.error(err.message || 'Gagal menyimpan produk');
// //     }
// //     setIsModalOpen(false);
// //   };

// //   const handleDelete = async (id: string) => {
// //     if (window.confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
// //       try {
// //         await api.delete(`/api/products/${id}`);
// //         toast.success('Produk berhasil dihapus');
// //         fetchProducts();
// //       } catch (error: unknown) {
// //         const err = error as Error;
// //         toast.error(err.message || 'Gagal menghapus produk');
// //       }
// //     }
// //   };

// //   if (isLoading) {
// //     return (
// //       <div className="flex items-center justify-center min-h-[400px]">
// //         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#154212]"></div>
// //       </div>
// //     );
// //   }

// //   return (
// //     <div className="flex flex-col gap-8">
// //       {/* HEADER */}
// //       <header className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
// //         <div>
// //           <h1 className="text-[32px] font-bold leading-[38.4px] text-[#154212]">
// //             Product Management
// //           </h1>
// //         </div>

// //         <button
// //           onClick={() => handleOpenModal()}
// //           className="inline-flex items-center gap-2 rounded-lg bg-[#154212] px-6 py-3 shadow-[0px_4px_12px_#0000000d] hover:brightness-110 transition-all text-white font-medium"
// //           type="button"
// //         >
// //           <PlusCircleIcon />
// //           <span>Add Product</span>
// //         </button>
// //       </header>

// //       {/* FILTER SECTION */}
// //       <div className="rounded-2xl border border-[#c2c9b4] bg-white p-4 shadow-[0px_4px_12px_#0000000d]">
// //         <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
// //           {/* SEARCH */}
// //           <div className="relative flex-1">
// //             <label className="sr-only" htmlFor="product-search">
// //               Search product
// //             </label>
// //             <div className="flex h-[42px] items-center rounded-lg border border-[#c2c9b8] bg-[#f3f4ef] pl-10 pr-4">
// //               <input
// //                 id="product-search"
// //                 placeholder="Search product"
// //                 type="text"
// //                 value={searchTerm}
// //                 onChange={(e) => setSearchTerm(e.target.value)}
// //                 autoComplete="off"
// //                 className="w-full border-none bg-transparent text-sm text-[#42493e] outline-none placeholder:text-[#72796e]"
// //               />
// //             </div>
// //             <div className="absolute left-3 top-1/2 -translate-y-1/2">
// //               <SearchIcon />
// //             </div>
// //           </div>

// //           {/* FILTERS */}
// //           <div className="flex flex-col gap-4 sm:flex-row">
// //             <div className="relative w-full sm:w-[165px]">
// //               <select
// //                 className="h-[42px] w-full appearance-none rounded-lg border border-[#c2c9b8] bg-[#f3f4ef] px-4 pr-10 text-sm text-[#1a1c19] outline-none cursor-pointer"
// //                 value={categoryFilter}
// //                 onChange={(e) => setCategoryFilter(e.target.value)}
// //               >
// //                 <option value="all">Category: All</option>
// //                 <option value="UPCYCLED_GOODS">Upcycled</option>
// //                 <option value="ORGANIC">Organic</option>
// //                 <option value="ZERO_WASTE">Zero Waste</option>
// //               </select>
// //               <ChevronDownIcon />
// //             </div>

// //             <div className="relative w-full sm:w-[165px]">
// //               <select
// //                 className="h-[42px] w-full appearance-none rounded-lg border border-[#c2c9b8] bg-[#f3f4ef] px-4 pr-10 text-sm text-[#1a1c19] outline-none cursor-pointer"
// //                 value={sortFilter}
// //                 onChange={(e) => setSortFilter(e.target.value)}
// //               >
// //                 <option value="newest">Date: Newest</option>
// //                 <option value="price_asc">Price: Low to High</option>
// //                 <option value="price_desc">Price: High to Low</option>
// //               </select>
// //               <ChevronDownIcon />
// //             </div>

// //             <button
// //               type="button"
// //               className="inline-flex h-[42px] items-center justify-center gap-2 rounded-lg border border-[#c2c9bb] bg-white px-4 hover:bg-slate-50 transition-colors"
// //             >
// //               <SortIcon />
// //               <span className="text-base text-[#42493e]">Sort</span>
// //             </button>
// //           </div>
// //         </div>
// //       </div>

// //       <ProductTable 
// //         products={filteredProducts} 
// //         onEdit={handleOpenModal} 
// //         onDelete={handleDelete} 
// //       />

// //       <ProductModal 
// //         isOpen={isModalOpen} 
// //         product={editingProduct} 
// //         onClose={() => setIsModalOpen(false)} 
// //         onSubmit={handleSubmit} 
// //       />
// //     </div>
// //   );
// // }

// 'use client';

// import React, { useState, useEffect, useMemo } from 'react';
// import { Product } from '@/types';
// import { toast } from 'sonner';
// import { ProductTable } from '@/components/admin/ProductTable';
// import { ProductModal } from '@/components/admin/ProductModal';
// import { api } from '@/lib/api-client';

// const SearchIcon = () => (
//   <svg
//     aria-hidden="true"
//     className="h-[15px] w-[15px]"
//     viewBox="0 0 15 15"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M10.9375 10.9375L14 14"
//       stroke="#72796E"
//       strokeWidth="1.4"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <circle
//       cx="6.5625"
//       cy="6.5625"
//       r="5.5625"
//       stroke="#72796E"
//       strokeWidth="1.4"
//     />
//   </svg>
// );

// const PlusCircleIcon = () => (
//   <svg
//     aria-hidden="true"
//     width="20"
//     height="20"
//     viewBox="0 0 20 20"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <circle cx="10" cy="10" r="7.5" stroke="white" strokeWidth="1.5" />
//     <path
//       d="M10 7V13"
//       stroke="white"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//     />
//     <path
//       d="M7 10H13"
//       stroke="white"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//     />
//   </svg>
// );

// const ChevronDownIcon = () => (
//   <svg
//     aria-hidden="true"
//     className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
//     width="16"
//     height="16"
//     viewBox="0 0 16 16"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M4 6L8 10L12 6"
//       stroke="#72796E"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// const SortIcon = () => (
//   <svg
//     aria-hidden="true"
//     width="20"
//     height="20"
//     viewBox="0 0 20 20"
//     fill="none"
//     xmlns="http://www.w3.org/2000/svg"
//   >
//     <path
//       d="M7 4V16"
//       stroke="#42493E"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <path
//       d="M4.5 6.5L7 4L9.5 6.5"
//       stroke="#42493E"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <path
//       d="M13 16V4"
//       stroke="#42493E"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//     <path
//       d="M10.5 13.5L13 16L15.5 13.5"
//       stroke="#42493E"
//       strokeWidth="1.5"
//       strokeLinecap="round"
//       strokeLinejoin="round"
//     />
//   </svg>
// );

// export default function AdminProducts() {
//   const [products, setProducts] = useState<Product[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [categoryFilter, setCategoryFilter] = useState('all');
//   const [sortFilter, setSortFilter] = useState('newest');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingProduct, setEditingProduct] = useState<Product | null>(null);

//   const fetchProducts = async () => {
//     try {
//       const data = await api.get<Product[]>('/api/products');
//       setProducts(data);
//     } catch (error) {
//       toast.error('Gagal mengambil data produk dari server');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchProducts();
//   }, []);

//   const filteredProducts = useMemo(() => {
//     let result = products.filter(p => 
//       p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
//       p.category.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     if (categoryFilter !== 'all') {
//       result = result.filter(p => p.category === categoryFilter);
//     }

//     // Since we don't have createdAt in types, newest is just default order for now
//     // If we had it, we would sort here
//     if (sortFilter === 'price_asc') {
//       result = [...result].sort((a, b) => a.price - b.price);
//     } else if (sortFilter === 'price_desc') {
//       result = [...result].sort((a, b) => b.price - a.price);
//     }

//     return result;
//   }, [products, searchTerm, categoryFilter, sortFilter]);

//   const handleOpenModal = (product?: Product) => {
//     setEditingProduct(product || null);
//     setIsModalOpen(true);
//   };

//   const handleSubmit = async (data: Partial<Product>) => {
//     try {
//       if (editingProduct) {
//         await api.patch(`/api/products/${editingProduct.id}`, data);
//         toast.success('Produk berhasil diperbarui');
//       } else {
//         await api.post('/api/products', data);
//         toast.success('Produk berhasil ditambahkan');
//       }
//       fetchProducts();
//     } catch (error: unknown) {
//       const err = error as Error;
//       toast.error(err.message || 'Gagal menyimpan produk');
//     }
//     setIsModalOpen(false);
//   };

//   const handleDelete = async (id: string) => {
//     if (window.confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
//       try {
//         await api.delete(`/api/products/${id}`);
//         toast.success('Produk berhasil dihapus');
//         fetchProducts();
//       } catch (error: unknown) {
//         const err = error as Error;
//         toast.error(err.message || 'Gagal menghapus produk');
//       }
//     }
//   };

//   if (isLoading) {
//     return (
//       <div className="flex items-center justify-center min-h-[400px]">
//         <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#154212]"></div>
//       </div>
//     );
//   }

//   return (
//     <div className="flex flex-col gap-8">
//       {/* HEADER */}
//       <header className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
//         <div>
//           <h1 className="text-[32px] font-bold leading-[38.4px] text-[#154212]">
//             Product Management
//           </h1>
//         </div>

//         <button
//           onClick={() => handleOpenModal()}
//           className="inline-flex items-center gap-2 rounded-lg bg-[#154212] px-6 py-3 shadow-[0px_4px_12px_#0000000d] hover:brightness-110 transition-all text-white font-medium"
//           type="button"
//         >
//           <PlusCircleIcon />
//           <span>Add Product</span>
//         </button>
//       </header>

//       {/* FILTER SECTION */}
//       <div className="rounded-2xl border border-[#c2c9b4] bg-white p-4 shadow-[0px_4px_12px_#0000000d]">
//         <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
//           {/* SEARCH */}
//           <div className="relative flex-1">
//             <label className="sr-only" htmlFor="product-search">
//               Search product
//             </label>
//             <div className="flex h-[42px] items-center rounded-lg border border-[#c2c9b8] bg-[#f3f4ef] pl-10 pr-4">
//               <input
//                 id="product-search"
//                 placeholder="Search product"
//                 type="text"
//                 value={searchTerm}
//                 onChange={(e) => setSearchTerm(e.target.value)}
//                 autoComplete="off"
//                 className="w-full border-none bg-transparent text-sm text-[#42493e] outline-none placeholder:text-[#72796e]"
//               />
//             </div>
//             <div className="absolute left-3 top-1/2 -translate-y-1/2">
//               <SearchIcon />
//             </div>
//           </div>

//           {/* FILTERS */}
//           <div className="flex flex-col gap-4 sm:flex-row">
//             <div className="relative w-full sm:w-[165px]">
//               <select
//                 className="h-[42px] w-full appearance-none rounded-lg border border-[#c2c9b8] bg-[#f3f4ef] px-4 pr-10 text-sm text-[#1a1c19] outline-none cursor-pointer"
//                 value={categoryFilter}
//                 onChange={(e) => setCategoryFilter(e.target.value)}
//               >
//                 <option value="all">Category: All</option>
//                 <option value="UPCYCLED_GOODS">Upcycled</option>
//                 <option value="ORGANIC">Organic</option>
//                 <option value="ZERO_WASTE">Zero Waste</option>
//               </select>
//               <ChevronDownIcon />
//             </div>

//             <div className="relative w-full sm:w-[165px]">
//               <select
//                 className="h-[42px] w-full appearance-none rounded-lg border border-[#c2c9b8] bg-[#f3f4ef] px-4 pr-10 text-sm text-[#1a1c19] outline-none cursor-pointer"
//                 value={sortFilter}
//                 onChange={(e) => setSortFilter(e.target.value)}
//               >
//                 <option value="newest">Date: Newest</option>
//                 <option value="price_asc">Price: Low to High</option>
//                 <option value="price_desc">Price: High to Low</option>
//               </select>
//               <ChevronDownIcon />
//             </div>

//             <button
//               type="button"
//               className="inline-flex h-[42px] items-center justify-center gap-2 rounded-lg border border-[#c2c9bb] bg-white px-4 hover:bg-slate-50 transition-colors"
//             >
//               <SortIcon />
//               <span className="text-base text-[#42493e]">Sort</span>
//             </button>
//           </div>
//         </div>
//       </div>

//       <ProductTable 
//         products={filteredProducts} 
//         onEdit={handleOpenModal} 
//         onDelete={handleDelete} 
//       />

//       <ProductModal 
//         isOpen={isModalOpen} 
//         product={editingProduct} 
//         onClose={() => setIsModalOpen(false)} 
//         onSubmit={handleSubmit} 
//       />
//     </div>
//   );
// }

'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Product } from '@/types';
import { toast } from 'sonner';
import { ProductTable } from '@/components/admin/ProductTable';
import { ProductModal } from '@/components/admin/ProductModal';

const SearchIcon = () => (
  <svg
    aria-hidden="true"
    className="h-[15px] w-[15px]"
    viewBox="0 0 15 15"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10.9375 10.9375L14 14"
      stroke="#72796E"
      strokeWidth="1.4"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <circle
      cx="6.5625"
      cy="6.5625"
      r="5.5625"
      stroke="#72796E"
      strokeWidth="1.4"
    />
  </svg>
);

const PlusCircleIcon = () => (
  <svg
    aria-hidden="true"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle cx="10" cy="10" r="7.5" stroke="white" strokeWidth="1.5" />
    <path
      d="M10 7V13"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
    <path
      d="M7 10H13"
      stroke="white"
      strokeWidth="1.5"
      strokeLinecap="round"
    />
  </svg>
);

const ChevronDownIcon = () => (
  <svg
    aria-hidden="true"
    className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 6L8 10L12 6"
      stroke="#72796E"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

const SortIcon = () => (
  <svg
    aria-hidden="true"
    width="20"
    height="20"
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7 4V16"
      stroke="#42493E"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M4.5 6.5L7 4L9.5 6.5"
      stroke="#42493E"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M13 16V4"
      stroke="#42493E"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <path
      d="M10.5 13.5L13 16L15.5 13.5"
      stroke="#42493E"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default function AdminProducts() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [sortFilter, setSortFilter] = useState('newest');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);

  const fetchProducts = async () => {
    try {
      const params: Record<string, string> = {};
      if (searchTerm) params.search = searchTerm;
      if (categoryFilter !== 'all') params.category = categoryFilter;
      // You can also add page and limit if needed
      
      const data = await api.get<Product[]>('/api/products', params);
      setProducts(data);
    } catch (error) {
      toast.error('Gagal mengambil data produk dari server');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, [searchTerm, categoryFilter]);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    // Client side sorting as typical APIs might not handle all sort types precisely as requested
    if (sortFilter === 'price_asc') {
      result.sort((a, b) => a.price - b.price);
    } else if (sortFilter === 'price_desc') {
      result.sort((a, b) => b.price - a.price);
    }

    return result;
  }, [products, sortFilter]);

  const handleOpenModal = (product?: Product) => {
    setEditingProduct(product || null);
    setIsModalOpen(true);
  };

  const handleSubmit = async (data: FormData) => {
    try {
      if (editingProduct) {
        await api.patch(`/api/products/${editingProduct.id}`, data);
        toast.success('Produk berhasil diperbarui');
      } else {
        await api.post('/api/products', data);
        toast.success('Produk berhasil ditambahkan');
      }
      fetchProducts();
      setIsModalOpen(false);
    } catch (error: unknown) {
      const err = error as Error;
      toast.error(err.message || 'Gagal menyimpan produk');
    }
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Apakah Anda yakin ingin menghapus produk ini?')) {
      try {
        await api.delete(`/api/products/${id}`);
        toast.success('Produk berhasil dihapus');
        fetchProducts();
      } catch (error: unknown) {
        const err = error as Error;
        toast.error(err.message || 'Gagal menghapus produk');
      }
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-[400px]">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#154212]"></div>
      </div>
    );
  }

  return (
    <div className="flex flex-col gap-8">
      {/* HEADER */}
      <header className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
        <div>
          <h1 className="text-[32px] font-bold leading-[38.4px] text-[#154212]">
            Product Management
          </h1>
        </div>

        <button
          onClick={() => handleOpenModal()}
          className="inline-flex items-center gap-2 rounded-lg bg-[#154212] px-6 py-3 shadow-[0px_4px_12px_#0000000d] hover:brightness-110 transition-all text-white font-medium"
          type="button"
        >
          <PlusCircleIcon />
          <span>Add Product</span>
        </button>
      </header>

      {/* FILTER SECTION */}
      <div className="rounded-2xl border border-[#c2c9b4] bg-white p-4 shadow-[0px_4px_12px_#0000000d]">
        <div className="flex flex-col gap-4 lg:flex-row lg:items-center">
          {/* SEARCH */}
          <div className="relative flex-1">
            <label className="sr-only" htmlFor="product-search">
              Search product
            </label>
            <div className="flex h-[42px] items-center rounded-lg border border-[#c2c9b8] bg-[#f3f4ef] pl-10 pr-4">
              <input
                id="product-search"
                placeholder="Search product"
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                autoComplete="off"
                className="w-full border-none bg-transparent text-sm text-[#42493e] outline-none placeholder:text-[#72796e]"
              />
            </div>
            <div className="absolute left-3 top-1/2 -translate-y-1/2">
              <SearchIcon />
            </div>
          </div>

          {/* FILTERS */}
          <div className="flex flex-col gap-4 sm:flex-row">
            <div className="relative w-full sm:w-[165px]">
              <select
                className="h-[42px] w-full appearance-none rounded-lg border border-[#c2c9b8] bg-[#f3f4ef] px-4 pr-10 text-sm text-[#1a1c19] outline-none cursor-pointer"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="all">Category: All</option>
                <option value="UPCYCLED_GOODS">Upcycled</option>
                <option value="ORGANIC">Organic</option>
                <option value="ZERO_WASTE">Zero Waste</option>
              </select>
              <ChevronDownIcon />
            </div>

            <div className="relative w-full sm:w-[165px]">
              <select
                className="h-[42px] w-full appearance-none rounded-lg border border-[#c2c9b8] bg-[#f3f4ef] px-4 pr-10 text-sm text-[#1a1c19] outline-none cursor-pointer"
                value={sortFilter}
                onChange={(e) => setSortFilter(e.target.value)}
              >
                <option value="newest">Date: Newest</option>
                <option value="price_asc">Price: Low to High</option>
                <option value="price_desc">Price: High to Low</option>
              </select>
              <ChevronDownIcon />
            </div>

            <button
              type="button"
              className="inline-flex h-[42px] items-center justify-center gap-2 rounded-lg border border-[#c2c9bb] bg-white px-4 hover:bg-slate-50 transition-colors"
            >
              <SortIcon />
              <span className="text-base text-[#42493e]">Sort</span>
            </button>
          </div>
        </div>
      </div>

      <ProductTable 
        products={filteredProducts} 
        onEdit={handleOpenModal} 
        onDelete={handleDelete} 
      />

      <ProductModal 
        isOpen={isModalOpen} 
        product={editingProduct} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handleSubmit} 
      />
    </div>
  );
}
