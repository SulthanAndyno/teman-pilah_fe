// // 'use client';

// // import { useEffect, useState } from 'react';

// // import { News } from '@/types';

// // import { newsApi } from '@/lib/api/news';

// // import { NewsTable } from '@/components/admin/NewsTable';

// // import { NewsModal } from '@/components/admin/NewsModal';

// // export default function AdminNewsPage() {

// //   const [newsList, setNewsList] =
// //     useState<News[]>([]);

// //   const [loading, setLoading] =
// //     useState(true);

// //   const [selectedNews, setSelectedNews] =
// //     useState<News | null>(null);

// //   const [isModalOpen, setIsModalOpen] =
// //     useState(false);

// //   // =========================
// //   // FETCH NEWS
// //   // =========================

// //   async function fetchNews() {

// //     try {

// //       setLoading(true);

// //       const data =
// //         await newsApi.getAll();

// //       setNewsList(data);

// //     } catch (error) {

// //       console.error(
// //         'Fetch News Error:',
// //         error
// //       );

// //     } finally {

// //       setLoading(false);

// //     }
// //   }

// //   useEffect(() => {

// //     fetchNews();

// //   }, []);

// //   // =========================
// //   // CREATE / UPDATE
// //   // =========================

// //   async function handleSubmit(
// //     data: Partial<News>
// //   ) {

// //     try {

// //       // =========================
// //       // FIX PAYLOAD BACKEND
// //       // =========================

// //       const payload = {

// //         title: data.title,

// //         content: data.content,

// //         category:
// //           data.category || 'Edukasi',

// //         // ENUM BACKEND
// //         status:
// //           data.status || 'PUBLISHED',

// //         // REQUIRED BACKEND
// //         slug: data.title
// //           ?.toLowerCase()
// //           .replace(/\s+/g, '-'),

// //         summary:
// //           data.content?.slice(0, 120),

// //         authors:
// //           Array.isArray(data.authors)
// //             ? data.authors
// //             : ['Admin'],

// //         tags:
// //           Array.isArray(data.tags)
// //             ? data.tags
// //             : ['news'],

// //         visibility: 'PUBLIC',

// //         imageUrl:
// //           data.image || '',

// //       };

// //       console.log(
// //         'NEWS PAYLOAD:',
// //         payload
// //       );

// //       // =========================
// //       // UPDATE
// //       // =========================

// //       if (selectedNews) {

// //         const updated =
// //           await newsApi.update(
// //             selectedNews.id,
// //             payload
// //           );

// //         setNewsList((prev) =>
// //           prev.map((item) =>
// //             item.id === updated.id
// //               ? updated
// //               : item
// //           )
// //         );

// //       } else {

// //         // =========================
// //         // CREATE
// //         // =========================

// //         const created =
// //           await newsApi.create(
// //             payload
// //           );

// //         setNewsList((prev) => [
// //           created,
// //           ...prev,
// //         ]);
// //       }

// //       // =========================
// //       // CLOSE MODAL
// //       // =========================

// //       setIsModalOpen(false);

// //       setSelectedNews(null);

// //     } catch (error) {

// //       console.error(
// //         'Submit News Error:',
// //         error
// //       );

// //       alert(
// //         error instanceof Error
// //           ? error.message
// //           : 'Gagal menyimpan news'
// //       );
// //     }
// //   }

// //   // =========================
// //   // DELETE
// //   // =========================

// //   async function handleDelete(
// //     id: string
// //   ) {

// //     const confirmDelete =
// //       window.confirm(
// //         'Hapus berita ini?'
// //       );

// //     if (!confirmDelete) return;

// //     try {

// //       await newsApi.delete(id);

// //       setNewsList((prev) =>
// //         prev.filter(
// //           (item) => item.id !== id
// //         )
// //       );

// //     } catch (error) {

// //       console.error(
// //         'Delete News Error:',
// //         error
// //       );

// //       alert(
// //         error instanceof Error
// //           ? error.message
// //           : 'Gagal menghapus news'
// //       );
// //     }
// //   }

// //   // =========================
// //   // EDIT
// //   // =========================

// //   function handleEdit(news: News) {

// //     setSelectedNews(news);

// //     setIsModalOpen(true);
// //   }

// //   return (
// //     <div className="space-y-8">

// //       {/* HEADER */}
// //       <div className="flex items-center justify-between">

// //         <div>

// //           <h1 className="text-3xl font-black text-[#1B361F]">
// //             News Management
// //           </h1>

// //           <p className="text-[#72796E] mt-2">
// //             Kelola berita Teman Pilah
// //           </p>

// //         </div>

// //         <button
// //           onClick={() => {

// //             setSelectedNews(null);

// //             setIsModalOpen(true);

// //           }}
// //           className="bg-[#154212] hover:bg-[#1f5a1a] text-white px-5 py-3 rounded-2xl font-bold transition-all"
// //         >
// //           + Tambah News
// //         </button>

// //       </div>

// //       {/* LOADING */}
// //       {loading ? (

// //         <div className="py-20 text-center">
// //           Loading...
// //         </div>

// //       ) : (

// //         <NewsTable
// //           newsList={newsList}
// //           onEdit={handleEdit}
// //           onDelete={handleDelete}
// //         />

// //       )}

// //       {/* MODAL */}
// //       <NewsModal
// //         news={selectedNews}
// //         isOpen={isModalOpen}
// //         onClose={() => {

// //           setIsModalOpen(false);

// //           setSelectedNews(null);

// //         }}
// //         onSubmit={handleSubmit}
// //       />

// //     </div>
// //   );
// // }

// 'use client';

// import { useEffect, useState } from 'react';

// import { News } from '@/types';

// import { newsApi } from '@/lib/api/news';

// import { NewsTable } from '@/components/admin/NewsTable';

// import { NewsModal } from '@/components/admin/NewsModal';

// const BASE_URL =
//   process.env.NEXT_PUBLIC_API_URL ||
//   'http://localhost:2000';

// export default function AdminNewsPage() {

//   const [newsList, setNewsList] =
//     useState<News[]>([]);

//   const [loading, setLoading] =
//     useState(true);

//   const [selectedNews, setSelectedNews] =
//     useState<News | null>(null);

//   const [isModalOpen, setIsModalOpen] =
//     useState(false);

//   // =========================
//   // NORMALIZE IMAGE URL
//   // =========================

//   function normalizeNews(
//     item: News
//   ): News {

//     return {

//       ...item,

//       image:
//         item.imageUrl
//           ? `${BASE_URL}/${item.imageUrl}`
//           : item.image || '',

//     };
//   }

//   // =========================
//   // FETCH NEWS
//   // =========================

//   async function fetchNews() {

//     try {

//       setLoading(true);

//       const data =
//         await newsApi.getAll();

//       setNewsList(
//         data.map(normalizeNews)
//       );

//     } catch (error) {

//       console.error(
//         'Fetch News Error:',
//         error
//       );

//     } finally {

//       setLoading(false);

//     }
//   }

//   useEffect(() => {

//     fetchNews();

//   }, []);

//   // =========================
//   // CREATE / UPDATE
//   // =========================

//   async function handleSubmit(
//     data: Partial<News>
//   ) {

//     try {

//       // =========================
//       // FIX PAYLOAD BACKEND
//       // =========================

//       const payload = {

//         title: data.title,

//         content: data.content,

//         category:
//           data.category || 'Edukasi',

//         status:
//           data.status || 'PUBLISHED',

//         slug: data.title
//           ?.toLowerCase()
//           .replace(/\s+/g, '-'),

//         summary:
//           data.content?.slice(0, 120),

//         authors:
//           Array.isArray(data.authors)
//             ? data.authors
//             : ['Admin'],

//         tags:
//           Array.isArray(data.tags)
//             ? data.tags
//             : ['news'],

//         visibility: 'PUBLIC',

//         imageUrl:
//           data.imageUrl || '',

//       };

//       console.log(
//         'NEWS PAYLOAD:',
//         payload
//       );

//       // =========================
//       // UPDATE
//       // =========================

//       if (selectedNews) {

//         const updated =
//           await newsApi.update(
//             selectedNews.id,
//             payload
//           );

//         setNewsList((prev) =>
//           prev.map((item) =>
//             item.id === updated.id
//               ? normalizeNews(updated)
//               : item
//           )
//         );

//       } else {

//         // =========================
//         // CREATE
//         // =========================

//         const created =
//           await newsApi.create(
//             payload
//           );

//         setNewsList((prev) => [

//           normalizeNews(created),

//           ...prev,

//         ]);
//       }

//       // =========================
//       // CLOSE MODAL
//       // =========================

//       setIsModalOpen(false);

//       setSelectedNews(null);

//     } catch (error) {

//       console.error(
//         'Submit News Error:',
//         error
//       );

//       alert(
//         error instanceof Error
//           ? error.message
//           : 'Gagal menyimpan news'
//       );
//     }
//   }

//   // =========================
//   // DELETE
//   // =========================

//   async function handleDelete(
//     id: string
//   ) {

//     const confirmDelete =
//       window.confirm(
//         'Hapus berita ini?'
//       );

//     if (!confirmDelete) return;

//     try {

//       await newsApi.delete(id);

//       setNewsList((prev) =>
//         prev.filter(
//           (item) => item.id !== id
//         )
//       );

//     } catch (error) {

//       console.error(
//         'Delete News Error:',
//         error
//       );

//       alert(
//         error instanceof Error
//           ? error.message
//           : 'Gagal menghapus news'
//       );
//     }
//   }

//   // =========================
//   // EDIT
//   // =========================

//   function handleEdit(news: News) {

//     setSelectedNews(news);

//     setIsModalOpen(true);
//   }

//   return (
//     <div className="space-y-8">

//       {/* HEADER */}
//       <div className="flex items-center justify-between">

//         <div>

//           <h1 className="text-3xl font-black text-[#1B361F]">
//             News Management
//           </h1>

//           <p className="text-[#72796E] mt-2">
//             Kelola berita Teman Pilah
//           </p>

//         </div>

//         <button
//           onClick={() => {

//             setSelectedNews(null);

//             setIsModalOpen(true);

//           }}
//           className="bg-[#154212] hover:bg-[#1f5a1a] text-white px-5 py-3 rounded-2xl font-bold transition-all"
//         >
//           + Tambah News
//         </button>

//       </div>

//       {/* LOADING */}
//       {loading ? (

//         <div className="py-20 text-center">
//           Loading...
//         </div>

//       ) : (

//         <NewsTable
//           newsList={newsList}
//           onEdit={handleEdit}
//           onDelete={handleDelete}
//         />

//       )}

//       {/* MODAL */}
//       <NewsModal
//         news={selectedNews}
//         isOpen={isModalOpen}
//         onClose={() => {

//           setIsModalOpen(false);

//           setSelectedNews(null);

//         }}
//         onSubmit={handleSubmit}
//       />

//     </div>
//   );
// }

'use client';

import { useEffect, useState } from 'react';

import { News } from '@/types';

import { newsApi } from '@/lib/api/news';

import { NewsTable } from '@/components/admin/NewsTable';

import { NewsModal } from '@/components/admin/NewsModal';

import { DeleteModal } from '@/components/admin/DeleteModal';

const BASE_URL =
  process.env.NEXT_PUBLIC_API_URL ||
  'http://localhost:2000';

export default function AdminNewsPage() {

  const [newsList, setNewsList] =
    useState<News[]>([]);

  const [loading, setLoading] =
    useState(true);

  const [selectedNews, setSelectedNews] =
    useState<News | null>(null);

  const [isModalOpen, setIsModalOpen] =
    useState(false);

  const [deletingNews, setDeletingNews] =
    useState<News | null>(null);

  // =========================
  // NORMALIZE IMAGE URL
  // =========================

  function normalizeNews(
    item: News
  ): News {

    return {

      ...item,

      image:
        item.imageUrl
          ? `${BASE_URL}/${item.imageUrl}`
          : '',

    };
  }

  // =========================
  // FETCH NEWS
  // =========================

  async function fetchNews() {

    try {

      setLoading(true);

      const data =
        await newsApi.getAll();

      setNewsList(
        data.map(normalizeNews)
      );

    } catch (error) {

      console.error(
        'Fetch News Error:',
        error
      );

    } finally {

      setLoading(false);

    }
  }

  useEffect(() => {

    fetchNews();

  }, []);

  // =========================
  // CREATE / UPDATE
  // =========================

  async function handleSubmit(
    data: any
  ) {

    try {

      const payload = {

        title:
          data.title,

        content:
          data.content,

        category:
          data.category ||
          'Edukasi',

        status:
          data.status ||
          'PUBLISHED',

        slug:
          data.slug ||
          data.title
            ?.toLowerCase()
            .replace(/\s+/g, '-'),

        summary:
          data.summary ||
          data.content?.slice(
            0,
            120
          ),

        authors:
          Array.isArray(
            data.authors
          )
            ? data.authors
            : ['Admin'],

        tags:
          Array.isArray(
            data.tags
          )
            ? data.tags
            : ['news'],

        visibility:
          'PUBLIC',

        // =========================
        // IMPORTANT
        // =========================

        imageFile:
          data.imageFile ||
          null,
      };

      console.log(
        'FINAL PAYLOAD:',
        payload
      );

      console.log(
        'IMAGE FILE:',
        payload.imageFile
      );

      // =========================
      // UPDATE
      // =========================

      if (selectedNews) {

        const updated =
          await newsApi.update(
            selectedNews.id,
            payload
          );

        setNewsList((prev) =>
          prev.map((item) =>
            item.id === updated.id
              ? normalizeNews(
                  updated
                )
              : item
          )
        );

      } else {

        // =========================
        // CREATE
        // =========================

        const created =
          await newsApi.create(
            payload
          );

        setNewsList((prev) => [

          normalizeNews(
            created
          ),

          ...prev,

        ]);
      }

      // =========================
      // CLOSE MODAL
      // =========================

      setIsModalOpen(false);

      setSelectedNews(null);

    } catch (error) {

      console.error(
        'Submit News Error:',
        error
      );

      alert(
        error instanceof Error
          ? error.message
          : 'Gagal menyimpan news'
      );
    }
  }

  // =========================
  // DELETE
  // =========================

  function handleDeleteClick(news: News) {
    setDeletingNews(news);
  }

  async function confirmDelete() {
    if (!deletingNews) return;
    try {
      await newsApi.delete(deletingNews.id);
      setNewsList((prev) => prev.filter((item) => item.id !== deletingNews.id));
      setDeletingNews(null);
    } catch (error) {
      console.error('Delete News Error:', error);
      alert(error instanceof Error ? error.message : 'Gagal menghapus news');
    }
  }

  // =========================
  // EDIT
  // =========================

  function handleEdit(
    news: News
  ) {

    setSelectedNews(news);

    setIsModalOpen(true);
  }

  return (
    <div className="space-y-8">

      {/* HEADER */}
      <header className="flex flex-col justify-between gap-5 lg:flex-row lg:items-center">
        <div>
          <h1 className="font-serif text-[32px] font-bold leading-[38.4px] text-[#2A3426] tracking-tight">
            Programs Management
          </h1>
        </div>

        <button
          onClick={() => {
            setSelectedNews(null);
            setIsModalOpen(true);
          }}
          className="inline-flex items-center gap-2 rounded-lg bg-[#27532B] px-5 py-2.5 hover:brightness-110 transition-all text-white font-medium text-[13px]"
          type="button"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <span>New Program</span>
        </button>
      </header>

      {/* FILTER SECTION */}
      <div className="rounded-[20px] border border-[#F0F2EB] bg-white p-2.5 shadow-sm">
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
          {/* SEARCH */}
          <div className="relative flex-1">
            <label className="sr-only" htmlFor="program-search">
              Search by title...
            </label>
            <div className="flex h-11 items-center rounded-[14px] bg-[#F9FAF8] pl-10 pr-4">
              <input
                id="program-search"
                placeholder="Search by title..."
                type="text"
                autoComplete="off"
                className="w-full border-none bg-transparent text-[13px] text-[#42493e] outline-none placeholder:text-[#A1A89A]"
              />
            </div>
            <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-50">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
            </div>
          </div>

          {/* FILTERS */}
          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="relative w-full sm:w-[150px]">
              <select
                className="h-11 w-full appearance-none rounded-[14px] bg-[#F9FAF8] px-4 pr-10 text-[13px] font-medium text-[#2A3426] outline-none cursor-pointer"
              >
                <option value="all">Status: All</option>
                <option value="ongoing">Ongoing</option>
                <option value="upcoming">Upcoming</option>
                <option value="completed">Completed</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-50 pointer-events-none">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </div>

            <div className="relative w-full sm:w-[150px]">
              <select
                className="h-11 w-full appearance-none rounded-[14px] bg-[#F9FAF8] px-4 pr-10 text-[13px] font-medium text-[#2A3426] outline-none cursor-pointer"
              >
                <option value="newest">Date: Newest</option>
                <option value="oldest">Date: Oldest</option>
              </select>
              <div className="absolute right-4 top-1/2 -translate-y-1/2 opacity-50 pointer-events-none">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polyline points="6 9 12 15 18 9"></polyline></svg>
              </div>
            </div>

            <button
              type="button"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-[14px] border border-[#F0F2EB] bg-white px-5 hover:bg-gray-50 transition-colors"
            >
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="opacity-50"><line x1="12" y1="5" x2="12" y2="19"></line><polyline points="19 12 12 19 5 12"></polyline></svg>
              <span className="text-[13px] font-medium text-[#2A3426]">Sort</span>
            </button>
          </div>
        </div>
      </div>

      {/* LOADING */}
      {loading ? (
        <div className="py-20 text-center">
          Loading...
        </div>
      ) : (

        <NewsTable
          newsList={
            newsList
          }
          onEdit={
            handleEdit
          }
          onDelete={
            handleDeleteClick
          }
        />

      )}

      {/* MODAL */}
      <NewsModal
        news={
          selectedNews
        }
        isOpen={
          isModalOpen
        }
        onClose={() => {

          setIsModalOpen(
            false
          );

          setSelectedNews(
            null
          );

        }}
        onSubmit={
          handleSubmit
        }
      />

      {/* DELETE CONFIRMATION MODAL */}
      <DeleteModal
        isOpen={deletingNews !== null}
        onClose={() => setDeletingNews(null)}
        onConfirm={confirmDelete}
        itemName={deletingNews?.title}
      />

    </div>
  );
}