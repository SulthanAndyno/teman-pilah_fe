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
          data.title
            ?.toLowerCase()
            .replace(/\s+/g, '-'),

        summary:
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

  async function handleDelete(
    id: string
  ) {

    const confirmDelete =
      window.confirm(
        'Hapus berita ini?'
      );

    if (!confirmDelete)
      return;

    try {

      await newsApi.delete(
        id
      );

      setNewsList((prev) =>
        prev.filter(
          (item) =>
            item.id !== id
        )
      );

    } catch (error) {

      console.error(
        'Delete News Error:',
        error
      );

      alert(
        error instanceof Error
          ? error.message
          : 'Gagal menghapus news'
      );
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
      <div className="flex items-center justify-between">

        <div>

          <h1 className="text-3xl font-black text-[#1B361F]">

            News Management

          </h1>

          <p className="text-[#72796E] mt-2">

            Kelola berita Teman Pilah

          </p>

        </div>

        <button
          onClick={() => {

            setSelectedNews(
              null
            );

            setIsModalOpen(
              true
            );

          }}
          className="bg-[#154212] hover:bg-[#1f5a1a] text-white px-5 py-3 rounded-2xl font-bold transition-all"
        >

          + Tambah News

        </button>

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
            handleDelete
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

    </div>
  );
}