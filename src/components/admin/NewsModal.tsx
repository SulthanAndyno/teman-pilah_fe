// // /* eslint-disable react-hooks/set-state-in-effect */
// // 'use client';

// // import React, { useState, useEffect } from 'react';
// // import { News } from '@/types';
// // import { Card } from '@/components/ui/Card';
// // import { Button } from '@/components/ui/Button';
// // import { Input } from '@/components/ui/Input';
// // import { X } from 'lucide-react';
// // import { ImageUpload } from '@/components/ui/ImageUpload';

// // interface NewsModalProps {
// //   news: News | null;
// //   isOpen: boolean;
// //   onClose: () => void;
// //   onSubmit: (data: Partial<News>) => void;
// // }

// // export function NewsModal({ news, isOpen, onClose, onSubmit }: NewsModalProps) {
// //   const [formData, setFormData] = useState({
// //     title: '',
// //     category: 'Edukasi',
// //     status: 'published' as 'published' | 'draft',
// //     content: '',
// //     image: ''
// //   });

// //   useEffect(() => {
// //     if (isOpen) {
// //       if (news) {
// //         setFormData({
// //           title: news.title,
// //           category: news.category,
// //           status: news.status,
// //           content: news.content || '',
// //           image: news.image || '',
// //         });
// //       } else {
// //         setFormData({
// //           title: '',
// //           category: 'Edukasi',
// //           status: 'published',
// //           content: '',
// //           image: '',
// //         });
// //       }
// //     }
// //   }, [news, isOpen]);

// //   const handleSubmit = (e: React.FormEvent) => {
// //     e.preventDefault();
// //     onSubmit(formData);
// //   };

// //   if (!isOpen) return null;

// //   return (
// //     <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
// //       <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm" onClick={onClose} />
// //       <Card className="w-full max-w-lg relative z-10 animate-in zoom-in-95 max-h-[90vh] overflow-y-auto">
// //         <div className="flex items-center justify-between mb-8">
// //           <h3 className="text-2xl font-bold">{news ? 'Edit Berita' : 'Tulis Berita Baru'}</h3>
// //           <button onClick={onClose} className="w-10 h-10 rounded-full hover:bg-bg flex items-center justify-center">
// //             <X size={20} />
// //           </button>
// //         </div>
// //         <form onSubmit={handleSubmit} className="space-y-6 pb-4">
// //           <ImageUpload 
// //             label="Gambar Berita"
// //             value={formData.image}
// //             onChange={(val) => setFormData(prev => ({ ...prev, image: val }))}
// //           />
// //           <Input 
// //             label="Judul Berita" 
// //             value={formData.title} 
// //             onChange={e => setFormData(prev => ({ ...prev, title: e.target.value }))} 
// //             required 
// //           />
// //           <div className="space-y-1.5">
// //             <label className="text-sm font-medium text-primary-light block">Konten Berita</label>
// //             <textarea 
// //               className="w-full px-4 py-2.5 bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-neutral min-h-[120px]"
// //               value={formData.content}
// //               onChange={e => setFormData(prev => ({ ...prev, content: e.target.value }))}
// //               required
// //             />
// //           </div>
// //           <div className="grid grid-cols-2 gap-4">
// //             <div className="space-y-1.5">
// //               <label className="text-sm font-medium text-primary-light block">Kategori</label>
// //               <select 
// //                 className="w-full px-4 py-2.5 bg-white border border-border rounded-xl text-neutral"
// //                 value={formData.category}
// //                 onChange={e => setFormData(prev => ({ ...prev, category: e.target.value }))}
// //               >
// //                 <option value="Edukasi">Edukasi</option>
// //                 <option value="Kampanye">Kampanye</option>
// //                 <option value="Produk">Produk</option>
// //                 <option value="Tips & Trick">Tips & Trick</option>
// //               </select>
// //             </div>
// //             <div className="space-y-1.5">
// //               <label className="text-sm font-medium text-primary-light block">Status</label>
// //               <select 
// //                 className="w-full px-4 py-2.5 bg-white border border-border rounded-xl text-neutral"
// //                 value={formData.status}
// //                 onChange={e => setFormData(prev => ({ ...prev, status: e.target.value as 'published' | 'draft' }))}
// //               >
// //                 <option value="published">Published</option>
// //                 <option value="draft">Draft</option>
// //               </select>
// //             </div>
// //           </div>
// //           <div className="pt-4 flex gap-3">
// //             <Button variant="secondary" className="flex-grow" type="button" onClick={onClose}>Batal</Button>
// //             <Button type="submit" className="flex-[2]">Simpan Berita</Button>
// //           </div>
// //         </form>
// //       </Card>
// //     </div>
// //   );
// // }

// /* eslint-disable react-hooks/set-state-in-effect */
// 'use client';

// import React, { useState, useEffect } from 'react';
// import { News } from '@/types';
// import { Card } from '@/components/ui/Card';
// import { Button } from '@/components/ui/Button';
// import { Input } from '@/components/ui/Input';
// import { X } from 'lucide-react';
// import { ImageUpload } from '@/components/ui/ImageUpload';

// interface NewsModalProps {
//   news: News | null;
//   isOpen: boolean;
//   onClose: () => void;
//   onSubmit: (data: Partial<News>) => void;
// }

// export function NewsModal({
//   news,
//   isOpen,
//   onClose,
//   onSubmit,
// }: NewsModalProps) {

//   const [formData, setFormData] = useState({
//     title: '',
//     category: 'Edukasi',

//     // SESUAI ENUM BACKEND
//     status: 'PUBLISHED' as
//       | 'PUBLISHED'
//       | 'DRAFT'
//       | 'ARCHIVED',

//     content: '',
//     image: '',
//   });

//   useEffect(() => {

//     if (!isOpen) return;

//     if (news) {

//       setFormData({
//         title: news.title || '',

//         category: news.category || 'Edukasi',

//         // fallback agar aman
//         status:
//           (news.status as
//             | 'PUBLISHED'
//             | 'DRAFT'
//             | 'ARCHIVED') || 'PUBLISHED',

//         content: news.content || '',

//         image: news.image || '',
//       });

//     } else {

//       setFormData({
//         title: '',
//         category: 'Edukasi',

//         // DEFAULT ENUM BACKEND
//         status: 'PUBLISHED',

//         content: '',
//         image: '',
//       });

//     }

//   }, [news, isOpen]);

//   const handleSubmit = (
//     e: React.FormEvent
//   ) => {

//     e.preventDefault();

//     onSubmit(formData);

//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-6">

//       <div
//         className="absolute inset-0 bg-primary/20 backdrop-blur-sm"
//         onClick={onClose}
//       />

//       <Card className="w-full max-w-lg relative z-10 animate-in zoom-in-95 max-h-[90vh] overflow-y-auto">

//         {/* HEADER */}
//         <div className="flex items-center justify-between mb-8">

//           <h3 className="text-2xl font-bold">
//             {news
//               ? 'Edit Berita'
//               : 'Tulis Berita Baru'}
//           </h3>

//           <button
//             onClick={onClose}
//             className="w-10 h-10 rounded-full hover:bg-bg flex items-center justify-center"
//           >
//             <X size={20} />
//           </button>

//         </div>

//         {/* FORM */}
//         <form
//           onSubmit={handleSubmit}
//           className="space-y-6 pb-4"
//         >

//           {/* IMAGE */}
//           <ImageUpload
//             label="Gambar Berita"
//             value={formData.image}
//             onChange={(val) =>
//               setFormData((prev) => ({
//                 ...prev,
//                 image: val,
//               }))
//             }
//           />

//           {/* TITLE */}
//           <Input
//             label="Judul Berita"
//             value={formData.title}
//             onChange={(e) =>
//               setFormData((prev) => ({
//                 ...prev,
//                 title: e.target.value,
//               }))
//             }
//             required
//           />

//           {/* CONTENT */}
//           <div className="space-y-1.5">

//             <label className="text-sm font-medium text-primary-light block">
//               Konten Berita
//             </label>

//             <textarea
//               className="w-full px-4 py-2.5 bg-white border border-border rounded-xl focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all text-neutral min-h-[120px]"
//               value={formData.content}
//               onChange={(e) =>
//                 setFormData((prev) => ({
//                   ...prev,
//                   content: e.target.value,
//                 }))
//               }
//               required
//             />

//           </div>

//           {/* CATEGORY + STATUS */}
//           <div className="grid grid-cols-2 gap-4">

//             {/* CATEGORY */}
//             <div className="space-y-1.5">

//               <label className="text-sm font-medium text-primary-light block">
//                 Kategori
//               </label>

//               <select
//                 className="w-full px-4 py-2.5 bg-white border border-border rounded-xl text-neutral"
//                 value={formData.category}
//                 onChange={(e) =>
//                   setFormData((prev) => ({
//                     ...prev,
//                     category: e.target.value,
//                   }))
//                 }
//               >
//                 <option value="Edukasi">
//                   Edukasi
//                 </option>

//                 <option value="Kampanye">
//                   Kampanye
//                 </option>

//                 <option value="Produk">
//                   Produk
//                 </option>

//                 <option value="Tips & Trick">
//                   Tips & Trick
//                 </option>

//               </select>

//             </div>

//             {/* STATUS */}
//             <div className="space-y-1.5">

//               <label className="text-sm font-medium text-primary-light block">
//                 Status
//               </label>

//               <select
//                 className="w-full px-4 py-2.5 bg-white border border-border rounded-xl text-neutral"
//                 value={formData.status}
//                 onChange={(e) =>
//                   setFormData((prev) => ({
//                     ...prev,

//                     // ENUM BACKEND
//                     status: e.target.value as
//                       | 'PUBLISHED'
//                       | 'DRAFT'
//                       | 'ARCHIVED',
//                   }))
//                 }
//               >

//                 <option value="PUBLISHED">
//                   Published
//                 </option>

//                 <option value="DRAFT">
//                   Draft
//                 </option>

//                 <option value="ARCHIVED">
//                   Archived
//                 </option>

//               </select>

//             </div>

//           </div>

//           {/* BUTTON */}
//           <div className="pt-4 flex gap-3">

//             <Button
//               variant="secondary"
//               className="flex-grow"
//               type="button"
//               onClick={onClose}
//             >
//               Batal
//             </Button>

//             <Button
//               type="submit"
//               className="flex-[2]"
//             >
//               Simpan Berita
//             </Button>

//           </div>

//         </form>

//       </Card>

//     </div>
//   );
// }

// 'use client';

// import React, {
//   useState,
//   useEffect,
// } from 'react';

// import { News } from '@/types';

// import { Card } from '@/components/ui/Card';

// import { Button } from '@/components/ui/Button';

// import { Input } from '@/components/ui/Input';

// import { X } from 'lucide-react';

// interface NewsModalProps {
//   news: News | null;

//   isOpen: boolean;

//   onClose: () => void;

//   onSubmit: (data: any) => void;
// }

// export function NewsModal({
//   news,
//   isOpen,
//   onClose,
//   onSubmit,
// }: NewsModalProps) {

//   const [formData, setFormData] =
//     useState({
//       title: '',

//       category: 'Edukasi',

//       status:
//         'PUBLISHED' as
//           | 'PUBLISHED'
//           | 'DRAFT'
//           | 'ARCHIVED',

//       content: '',

//       imagePreview: '',

//       imageFile:
//         null as File | null,
//     });

//   useEffect(() => {

//     if (!isOpen) return;

//     if (news) {

//       setFormData({
//         title:
//           news.title || '',

//         category:
//           news.category ||
//           'Edukasi',

//         status:
//           (news.status as
//             | 'PUBLISHED'
//             | 'DRAFT'
//             | 'ARCHIVED') ||
//           'PUBLISHED',

//         content:
//           news.content || '',

//         imagePreview:
//           news.imageUrl || '',

//         imageFile: null,
//       });

//     } else {

//       setFormData({
//         title: '',

//         category: 'Edukasi',

//         status:
//           'PUBLISHED',

//         content: '',

//         imagePreview: '',

//         imageFile: null,
//       });

//     }

//   }, [news, isOpen]);

//   const handleImageChange = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {

//     const file =
//       e.target.files?.[0];

//     if (!file) return;

//     setFormData((prev) => ({
//       ...prev,

//       imageFile: file,

//       imagePreview:
//         URL.createObjectURL(file),
//     }));
//   };

//   const handleSubmit = (
//     e: React.FormEvent
//   ) => {

//     e.preventDefault();

//     onSubmit({
//       ...formData,
//     });
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-6">

//       <div
//         className="absolute inset-0 bg-black/30"
//         onClick={onClose}
//       />

//       <Card className="w-full max-w-lg relative z-10 max-h-[90vh] overflow-y-auto">

//         {/* HEADER */}
//         <div className="flex items-center justify-between mb-8">

//           <h3 className="text-2xl font-bold">
//             {news
//               ? 'Edit Berita'
//               : 'Tulis Berita Baru'}
//           </h3>

//           <button
//             onClick={onClose}
//             className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center"
//           >
//             <X size={20} />
//           </button>

//         </div>

//         {/* FORM */}
//         <form
//           onSubmit={handleSubmit}
//           className="space-y-6"
//         >

//           {/* IMAGE */}
//           <div className="space-y-2">

//             <label className="text-sm font-medium">
//               Gambar Berita
//             </label>

//             {formData.imagePreview && (
//               <img
//                 src={
//                   formData.imagePreview
//                 }
//                 alt="Preview"
//                 className="w-full h-56 object-cover rounded-xl border"
//               />
//             )}

//             <input
//               type="file"
//               accept="image/*"
//               onChange={
//                 handleImageChange
//               }
//               className="w-full border rounded-xl p-2"
//             />

//           </div>

//           {/* TITLE */}
//           <Input
//             label="Judul Berita"
//             value={formData.title}
//             onChange={(e) =>
//               setFormData((prev) => ({
//                 ...prev,
//                 title:
//                   e.target.value,
//               }))
//             }
//             required
//           />

//           {/* CONTENT */}
//           <div className="space-y-2">

//             <label className="text-sm font-medium">
//               Konten Berita
//             </label>

//             <textarea
//               value={
//                 formData.content
//               }
//               onChange={(e) =>
//                 setFormData((prev) => ({
//                   ...prev,
//                   content:
//                     e.target.value,
//                 }))
//               }
//               className="w-full min-h-[120px] border rounded-xl p-4"
//               required
//             />

//           </div>

//           {/* CATEGORY + STATUS */}
//           <div className="grid grid-cols-2 gap-4">

//             <div>

//               <label className="text-sm font-medium">
//                 Kategori
//               </label>

//               <select
//                 value={
//                   formData.category
//                 }
//                 onChange={(e) =>
//                   setFormData((prev) => ({
//                     ...prev,
//                     category:
//                       e.target.value,
//                   }))
//                 }
//                 className="w-full border rounded-xl p-3"
//               >
//                 <option value="Edukasi">
//                   Edukasi
//                 </option>

//                 <option value="Kampanye">
//                   Kampanye
//                 </option>

//                 <option value="Produk">
//                   Produk
//                 </option>

//                 <option value="Tips & Trick">
//                   Tips & Trick
//                 </option>

//               </select>

//             </div>

//             <div>

//               <label className="text-sm font-medium">
//                 Status
//               </label>

//               <select
//                 value={
//                   formData.status
//                 }
//                 onChange={(e) =>
//                   setFormData((prev) => ({
//                     ...prev,

//                     status:
//                       e.target
//                         .value as
//                         | 'PUBLISHED'
//                         | 'DRAFT'
//                         | 'ARCHIVED',
//                   }))
//                 }
//                 className="w-full border rounded-xl p-3"
//               >

//                 <option value="PUBLISHED">
//                   Published
//                 </option>

//                 <option value="DRAFT">
//                   Draft
//                 </option>

//                 <option value="ARCHIVED">
//                   Archived
//                 </option>

//               </select>

//             </div>

//           </div>

//           {/* BUTTON */}
//           <div className="flex gap-3 pt-4">

//             <Button
//               type="button"
//               variant="secondary"
//               className="flex-1"
//               onClick={onClose}
//             >
//               Batal
//             </Button>

//             <Button
//               type="submit"
//               className="flex-[2]"
//             >
//               Simpan Berita
//             </Button>

//           </div>

//         </form>

//       </Card>

//     </div>
//   );
// }

// 'use client';

// import React, {
//   useState,
//   useEffect,
// } from 'react';

// import { News } from '@/types';

// import { Card } from '@/components/ui/Card';

// import { Button } from '@/components/ui/Button';

// import { Input } from '@/components/ui/Input';

// import { X } from 'lucide-react';

// interface NewsModalProps {
//   news: News | null;

//   isOpen: boolean;

//   onClose: () => void;

//   onSubmit: (data: any) => void;
// }

// export function NewsModal({
//   news,
//   isOpen,
//   onClose,
//   onSubmit,
// }: NewsModalProps) {

//   const [formData, setFormData] =
//     useState({
//       title: '',

//       category: 'Edukasi',

//       status:
//         'PUBLISHED' as
//           | 'PUBLISHED'
//           | 'DRAFT'
//           | 'ARCHIVED',

//       content: '',

//       imagePreview: '',

//       imageFile:
//         null as File | null,
//     });

//   // =========================
//   // SET DATA EDIT
//   // =========================

//   useEffect(() => {

//     if (!isOpen) return;

//     if (news) {

//       setFormData({
//         title:
//           news.title || '',

//         category:
//           news.category ||
//           'Edukasi',

//         status:
//           (news.status as
//             | 'PUBLISHED'
//             | 'DRAFT'
//             | 'ARCHIVED') ||
//           'PUBLISHED',

//         content:
//           news.content || '',

//         // IMPORTANT
//         imagePreview:
//           news.imageUrl
//             ? `http://localhost:2000${news.imageUrl}`
//             : '',

//         imageFile: null,
//       });

//     } else {

//       setFormData({
//         title: '',

//         category: 'Edukasi',

//         status:
//           'PUBLISHED',

//         content: '',

//         imagePreview: '',

//         imageFile: null,
//       });

//     }

//   }, [news, isOpen]);

//   // =========================
//   // IMAGE CHANGE
//   // =========================

//   const handleImageChange = (
//     e: React.ChangeEvent<HTMLInputElement>
//   ) => {

//     const file =
//       e.target.files?.[0];

//     if (!file) return;

//     const previewUrl =
//       URL.createObjectURL(file);

//     setFormData((prev) => ({
//       ...prev,

//       imageFile: file,

//       imagePreview:
//         previewUrl,
//     }));
//   };

//   // =========================
//   // SUBMIT
//   // =========================

//   const handleSubmit = (
//     e: React.FormEvent
//   ) => {

//     e.preventDefault();

//     onSubmit({
//       title:
//         formData.title,

//       category:
//         formData.category,

//       status:
//         formData.status,

//       content:
//         formData.content,

//       imageFile:
//         formData.imageFile,
//     });
//   };

//   if (!isOpen) return null;

//   return (
//     <div className="fixed inset-0 z-50 flex items-center justify-center p-6">

//       {/* BACKDROP */}
//       <div
//         className="absolute inset-0 bg-black/40 backdrop-blur-sm"
//         onClick={onClose}
//       />

//       {/* MODAL */}
//       <Card className="w-full max-w-lg relative z-10 max-h-[90vh] overflow-y-auto rounded-3xl p-8">

//         {/* HEADER */}
//         <div className="flex items-center justify-between mb-8">

//           <h3 className="text-2xl font-black text-[#1B361F]">

//             {news
//               ? 'Edit Berita'
//               : 'Tulis Berita Baru'}

//           </h3>

//           <button
//             onClick={onClose}
//             className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition"
//           >
//             <X size={20} />
//           </button>

//         </div>

//         {/* FORM */}
//         <form
//           onSubmit={handleSubmit}
//           className="space-y-6"
//         >

//           {/* IMAGE */}
//           <div className="space-y-3">

//             <label className="text-sm font-semibold text-[#1B361F]">

//               Gambar Berita

//             </label>

//             {/* PREVIEW */}
//             <div className="w-full h-56 rounded-2xl overflow-hidden border bg-[#F3F4EF]">

//               {formData.imagePreview ? (

//                 <img
//                   src={
//                     formData.imagePreview
//                   }
//                   alt="Preview"
//                   className="w-full h-full object-cover"
//                 />

//               ) : (

//                 <div className="w-full h-full flex items-center justify-center text-sm text-[#72796E]">

//                   Belum ada gambar

//                 </div>

//               )}

//             </div>

//             {/* INPUT */}
//             <input
//               type="file"
//               accept="image/*"
//               onChange={
//                 handleImageChange
//               }
//               className="w-full border border-[#D6D9D2] rounded-xl p-3 text-sm"
//             />

//           </div>

//           {/* TITLE */}
//           <Input
//             label="Judul Berita"
//             value={formData.title}
//             onChange={(e) =>
//               setFormData((prev) => ({
//                 ...prev,
//                 title:
//                   e.target.value,
//               }))
//             }
//             required
//           />

//           {/* CONTENT */}
//           <div className="space-y-2">

//             <label className="text-sm font-semibold text-[#1B361F]">

//               Konten Berita

//             </label>

//             <textarea
//               value={
//                 formData.content
//               }
//               onChange={(e) =>
//                 setFormData((prev) => ({
//                   ...prev,
//                   content:
//                     e.target.value,
//                 }))
//               }
//               className="w-full min-h-[140px] border border-[#D6D9D2] rounded-2xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-[#1B361F]/20"
//               required
//             />

//           </div>

//           {/* CATEGORY + STATUS */}
//           <div className="grid grid-cols-2 gap-4">

//             {/* CATEGORY */}
//             <div className="space-y-2">

//               <label className="text-sm font-semibold text-[#1B361F]">

//                 Kategori

//               </label>

//               <select
//                 value={
//                   formData.category
//                 }
//                 onChange={(e) =>
//                   setFormData((prev) => ({
//                     ...prev,
//                     category:
//                       e.target.value,
//                   }))
//                 }
//                 className="w-full border border-[#D6D9D2] rounded-xl p-3"
//               >

//                 <option value="Edukasi">
//                   Edukasi
//                 </option>

//                 <option value="Kampanye">
//                   Kampanye
//                 </option>

//                 <option value="Produk">
//                   Produk
//                 </option>

//                 <option value="Tips & Trick">
//                   Tips & Trick
//                 </option>

//               </select>

//             </div>

//             {/* STATUS */}
//             <div className="space-y-2">

//               <label className="text-sm font-semibold text-[#1B361F]">

//                 Status

//               </label>

//               <select
//                 value={
//                   formData.status
//                 }
//                 onChange={(e) =>
//                   setFormData((prev) => ({
//                     ...prev,

//                     status:
//                       e.target
//                         .value as
//                         | 'PUBLISHED'
//                         | 'DRAFT'
//                         | 'ARCHIVED',
//                   }))
//                 }
//                 className="w-full border border-[#D6D9D2] rounded-xl p-3"
//               >

//                 <option value="PUBLISHED">
//                   Published
//                 </option>

//                 <option value="DRAFT">
//                   Draft
//                 </option>

//                 <option value="ARCHIVED">
//                   Archived
//                 </option>

//               </select>

//             </div>

//           </div>

//           {/* BUTTON */}
//           <div className="flex gap-3 pt-4">

//             <Button
//               type="button"
//               variant="secondary"
//               className="flex-1"
//               onClick={onClose}
//             >
//               Batal
//             </Button>

//             <Button
//               type="submit"
//               className="flex-[2]"
//             >
//               Simpan Berita
//             </Button>

//           </div>

//         </form>

//       </Card>

//     </div>
//   );
// }

'use client';

import React, {
  useState,
  useEffect,
} from 'react';

import { News } from '@/types';

import { Card } from '@/components/ui/Card';

import { Button } from '@/components/ui/Button';

import { Input } from '@/components/ui/Input';

import { X } from 'lucide-react';

interface NewsModalProps {
  news: News | null;

  isOpen: boolean;

  onClose: () => void;

  onSubmit: (data: any) => void;
}

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  'http://localhost:2000';

export function NewsModal({
  news,
  isOpen,
  onClose,
  onSubmit,
}: NewsModalProps) {

  const [title, setTitle] =
    useState('');

  const [category, setCategory] =
    useState('Edukasi');

  const [status, setStatus] =
    useState<
      | 'PUBLISHED'
      | 'DRAFT'
      | 'ARCHIVED'
    >('PUBLISHED');

  const [content, setContent] =
    useState('');

  const [imagePreview, setImagePreview] =
    useState('');

  const [imageFile, setImageFile] =
    useState<File | null>(
      null
    );

  // =========================
  // SET EDIT DATA
  // =========================

  useEffect(() => {

    if (!isOpen) return;

    if (news) {

      setTitle(
        news.title || ''
      );

      setCategory(
        news.category ||
          'Edukasi'
      );

      setStatus(
        (news.status as
          | 'PUBLISHED'
          | 'DRAFT'
          | 'ARCHIVED') ||
          'PUBLISHED'
      );

      setContent(
        news.content || ''
      );

      setImagePreview(

        news.imageUrl
          ? `${BASE_URL}/${news.imageUrl}`
          : ''

      );

      setImageFile(null);

    } else {

      setTitle('');

      setCategory(
        'Edukasi'
      );

      setStatus(
        'PUBLISHED'
      );

      setContent('');

      setImagePreview('');

      setImageFile(null);
    }

  }, [news, isOpen]);

  // =========================
  // IMAGE CHANGE
  // =========================

  const handleImageChange = (
    e: React.ChangeEvent<HTMLInputElement>
  ) => {

    const file =
      e.target.files?.[0];

    if (!file) return;

    console.log(
      'SELECTED FILE:',
      file
    );

    setImageFile(file);

    setImagePreview(
      URL.createObjectURL(
        file
      )
    );
  };

  // =========================
  // SUBMIT
  // =========================

  const handleSubmit = (
    e: React.FormEvent
  ) => {

    e.preventDefault();

    console.log(
      'SUBMIT IMAGE FILE:',
      imageFile
    );

    onSubmit({

      title,

      content,

      category,

      status,

      imageFile,

    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">

      {/* BACKDROP */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL */}
      <Card className="w-full max-w-lg relative z-10 max-h-[90vh] overflow-y-auto rounded-3xl p-8">

        {/* HEADER */}
        <div className="flex items-center justify-between mb-8">

          <h3 className="text-2xl font-black text-[#1B361F]">

            {news
              ? 'Edit Berita'
              : 'Tulis Berita Baru'}

          </h3>

          <button
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-gray-100 flex items-center justify-center transition"
          >
            <X size={20} />
          </button>

        </div>

        {/* FORM */}
        <form
          onSubmit={handleSubmit}
          className="space-y-6"
        >

          {/* IMAGE */}
          <div className="space-y-3">

            <label className="text-sm font-semibold text-[#1B361F]">

              Gambar Berita

            </label>

            {/* PREVIEW */}
            <div className="w-full h-56 rounded-2xl overflow-hidden border bg-[#F3F4EF]">

              {imagePreview ? (

                <img
                  src={imagePreview}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />

              ) : (

                <div className="w-full h-full flex items-center justify-center text-sm text-[#72796E]">

                  Belum ada gambar

                </div>

              )}

            </div>

            {/* INPUT */}
            <input
              type="file"
              accept="image/*"
              onChange={
                handleImageChange
              }
              className="w-full border border-[#D6D9D2] rounded-xl p-3 text-sm"
            />

          </div>

          {/* TITLE */}
          <Input
            label="Judul Berita"
            value={title}
            onChange={(e) =>
              setTitle(
                e.target.value
              )
            }
            required
          />

          {/* CONTENT */}
          <div className="space-y-2">

            <label className="text-sm font-semibold text-[#1B361F]">

              Konten Berita

            </label>

            <textarea
              value={content}
              onChange={(e) =>
                setContent(
                  e.target.value
                )
              }
              className="w-full min-h-[140px] border border-[#D6D9D2] rounded-2xl p-4 resize-none focus:outline-none focus:ring-2 focus:ring-[#1B361F]/20"
              required
            />

          </div>

          {/* CATEGORY + STATUS */}
          <div className="grid grid-cols-2 gap-4">

            {/* CATEGORY */}
            <div className="space-y-2">

              <label className="text-sm font-semibold text-[#1B361F]">

                Kategori

              </label>

              <select
                value={category}
                onChange={(e) =>
                  setCategory(
                    e.target.value
                  )
                }
                className="w-full border border-[#D6D9D2] rounded-xl p-3"
              >

                <option value="Edukasi">
                  Edukasi
                </option>

                <option value="Kampanye">
                  Kampanye
                </option>

                <option value="Produk">
                  Produk
                </option>

                <option value="Tips & Trick">
                  Tips & Trick
                </option>

              </select>

            </div>

            {/* STATUS */}
            <div className="space-y-2">

              <label className="text-sm font-semibold text-[#1B361F]">

                Status

              </label>

              <select
                value={status}
                onChange={(e) =>
                  setStatus(
                    e.target
                      .value as
                      | 'PUBLISHED'
                      | 'DRAFT'
                      | 'ARCHIVED'
                  )
                }
                className="w-full border border-[#D6D9D2] rounded-xl p-3"
              >

                <option value="PUBLISHED">
                  Published
                </option>

                <option value="DRAFT">
                  Draft
                </option>

                <option value="ARCHIVED">
                  Archived
                </option>

              </select>

            </div>

          </div>

          {/* BUTTON */}
          <div className="flex gap-3 pt-4">

            <Button
              type="button"
              variant="secondary"
              className="flex-1"
              onClick={onClose}
            >
              Batal
            </Button>

            <Button
              type="submit"
              className="flex-[2]"
            >
              Simpan Berita
            </Button>

          </div>

        </form>

      </Card>

    </div>
  );
}