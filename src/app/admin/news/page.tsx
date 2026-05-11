// 'use client';

// import React, { useState, useEffect } from 'react';
// import { Button } from '@/components/ui/Button';
// import { Input } from '@/components/ui/Input';
// import { News } from '@/types';
// import { Search, Plus } from 'lucide-react';
// import { toast } from 'sonner';
// import { NewsTable } from '@/components/admin/NewsTable';
// import { NewsModal } from '@/components/admin/NewsModal';

// import { api } from '@/lib/api-client';

// export default function AdminNews() {
//   const [newsList, setNewsList] = useState<News[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');
//   const [isModalOpen, setIsModalOpen] = useState(false);
//   const [editingNews, setEditingNews] = useState<News | null>(null);

//   const fetchNews = async () => {
//     try {
//       const data = await api.get<News[]>('/api/news');
//       setNewsList(data);
//     } catch (error) {
//       toast.error('Gagal mengambil data berita dari server');
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   useEffect(() => {
//     fetchNews();
//   }, []);

//   const filteredNews = newsList.filter(n => 
//     n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
//     n.category.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   const handleOpenModal = (news?: News) => {
//     setEditingNews(news || null);
//     setIsModalOpen(true);
//   };

//   const handleSubmit = async (data: Partial<News>) => {
//     try {
//       if (editingNews) {
//         await api.patch(`/api/news/${editingNews.id}`, data);
//         toast.success('Berita berhasil diperbarui');
//       } else {
//         await api.post('/api/news', data);
//         toast.success('Berita berhasil ditambahkan');
//       }
//       fetchNews();
//     } catch (error: unknown) {
//       const err = error as Error;
//       toast.error(err.message || 'Gagal menyimpan berita');
//     }
//     setIsModalOpen(false);
//   };

//   const handleDelete = async (id: string) => {
//     if (window.confirm('Hapus berita ini?')) {
//       try {
//         await api.delete(`/api/news/${id}`);
//         toast.success('Berita dihapus');
//         fetchNews();
//       } catch (error: unknown) {
//         const err = error as Error;
//         toast.error(err.message || 'Gagal menghapus berita');
//       }
//     }
//   };

//   if (isLoading) {
//     return <div className="flex items-center justify-center h-64">Memuat berita...</div>;
//   }

//   return (
//     <div className="space-y-6">
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
//         <div className="relative w-full sm:w-96">
//           <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-neutral" size={18} />
//           <Input 
//             placeholder="Cari berita atau kategori..." 
//             className="pl-10"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>
//         <Button onClick={() => handleOpenModal()} className="flex items-center gap-2">
//           <Plus size={20} />
//           Tulis Berita
//         </Button>
//       </div>

//       <NewsTable 
//         newsList={filteredNews} 
//         onEdit={handleOpenModal} 
//         onDelete={handleDelete} 
//       />

//       <NewsModal 
//         isOpen={isModalOpen} 
//         news={editingNews} 
//         onClose={() => setIsModalOpen(false)} 
//         onSubmit={handleSubmit} 
//       />
//     </div>
//   );
// }

'use client';

import React, { useState, useEffect } from 'react';
import { News } from '@/types';
import { toast } from 'sonner';
import { NewsTable } from '@/components/admin/NewsTable';
import { NewsModal } from '@/components/admin/NewsModal';

const SearchIcon = () => (
  <svg
    aria-hidden="true"
    className="h-[15px] w-[15px]"
    fill="none"
    viewBox="0 0 15 15"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M6.875 11.25C9.29125 11.25 11.25 9.29125 11.25 6.875C11.25 4.45875 9.29125 2.5 6.875 2.5C4.45875 2.5 2.5 4.45875 2.5 6.875C2.5 9.29125 4.45875 11.25 6.875 11.25Z"
      stroke="#72796E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.4"
    />
    <path
      d="M12.5 12.5L10.1562 10.1562"
      stroke="#72796E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.4"
    />
  </svg>
);

const AddIcon = () => (
  <svg
    aria-hidden="true"
    fill="none"
    height="20"
    viewBox="0 0 20 20"
    width="20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <circle
      cx="10"
      cy="10"
      r="7"
      stroke="white"
      strokeWidth="1.5"
    />
    <path
      d="M10 6.66699V13.3337"
      stroke="white"
      strokeLinecap="round"
      strokeWidth="1.5"
    />
    <path
      d="M6.66699 10H13.3337"
      stroke="white"
      strokeLinecap="round"
      strokeWidth="1.5"
    />
  </svg>
);

const ChevronDownIcon = () => (
  <svg
    aria-hidden="true"
    className="absolute right-4 top-1/2 -translate-y-1/2"
    fill="none"
    height="16"
    viewBox="0 0 16 16"
    width="16"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M4 6L8 10L12 6"
      stroke="#72796E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);

const SortIcon = () => (
  <svg
    aria-hidden="true"
    fill="none"
    height="20"
    viewBox="0 0 20 20"
    width="20"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M7.5 4.16699V15.8337"
      stroke="#42493E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <path
      d="M4.16699 7.5L7.50033 4.16667L10.8337 7.5"
      stroke="#42493E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <path
      d="M12.5 15.8333V4.16634"
      stroke="#42493E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <path
      d="M15.8337 12.4997L12.5003 15.833L9.16699 12.4997"
      stroke="#42493E"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);

export default function AdminNews() {
  const [newsList, setNewsList] = useState<News[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingNews, setEditingNews] = useState<News | null>(null);

  const fetchNews = async () => {
    try {
      const data = await api.get<News[]>('/api/news');
      setNewsList(data);
    } catch (error) {
      toast.error('Gagal mengambil data berita dari server');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  const filteredNews = newsList.filter(n => 
    n.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    n.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const handleOpenModal = (news?: News) => {
    setEditingNews(news || null);
    setIsModalOpen(true);
  };

  const handleSubmit = async (data: Partial<News>) => {
    try {
      if (editingNews) {
        await api.patch(`/api/news/${editingNews.id}`, data);
        toast.success('Berita berhasil diperbarui');
      } else {
        await api.post('/api/news', data);
        toast.success('Berita berhasil ditambahkan');
      }
      fetchNews();
    } catch (error: unknown) {
      const err = error as Error;
      toast.error(err.message || 'Gagal menyimpan berita');
    }
    setIsModalOpen(false);
  };

  const handleDelete = async (id: string) => {
    if (window.confirm('Hapus berita ini?')) {
      try {
        await api.delete(`/api/news/${id}`);
        toast.success('Berita dihapus');
        fetchNews();
      } catch (error: unknown) {
        const err = error as Error;
        toast.error(err.message || 'Gagal menghapus berita');
      }
    }
  };

  if (isLoading) {
    return <div className="flex items-center justify-center h-64">Memuat berita...</div>;
  }

  return (
    <div className="flex flex-col gap-8">
      <header className="flex items-center justify-between">
        <div>
          <h1 className="text-[32px] font-bold leading-[38.4px] text-[#154212]">
            News Management
          </h1>
        </div>

        <button
          onClick={() => handleOpenModal()}
          className="inline-flex items-center gap-2 rounded-xl bg-[#154212] px-6 py-3 shadow-[0px_4px_12px_#0000000d] hover:bg-[#1a4d16] transition-colors"
          type="button"
        >
          <AddIcon />
          <span className="text-base text-white font-medium">Add News</span>
        </button>
      </header>

      {/* FILTER SECTION */}
      <div className="rounded-2xl border border-[#c2c9bb4c] bg-white p-4 shadow-[0px_4px_12px_#0000000d]">
        <div className="flex flex-wrap items-center gap-4">
          <div className="relative flex-1 min-w-[300px]">
            <label className="sr-only" htmlFor="news-search">
              Search by title
            </label>
            <input
              id="news-search"
              placeholder="Search by title..."
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="h-[42px] w-full rounded-lg border border-[#c2c9bb80] bg-[#f3f4ef] pl-10 pr-4 text-sm text-[#1a1c19] outline-none focus:ring-1 focus:ring-[#154212]/30 transition-all"
            />
            <div className="pointer-events-none absolute left-3 top-1/2 -translate-y-1/2 opacity-60">
              <SearchIcon />
            </div>
          </div>

          <div className="relative w-[165px]">
            <select
              className="h-[42px] w-full appearance-none rounded-lg border border-[#c2c9bb80] bg-[#f3f4ef] px-4 pr-10 text-sm text-[#1a1c19] outline-none cursor-pointer"
              defaultValue="all"
            >
              <option value="all">Status: All</option>
              <option value="published">Published</option>
              <option value="draft">Draft</option>
            </select>
            <ChevronDownIcon />
          </div>

          <div className="relative w-[165px]">
            <select
              className="h-[42px] w-full appearance-none rounded-lg border border-[#c2c9bb80] bg-[#f3f4ef] px-4 pr-10 text-sm text-[#1a1c19] outline-none cursor-pointer"
              defaultValue="newest"
            >
              <option value="newest">Date: Newest</option>
              <option value="oldest">Date: Oldest</option>
            </select>
            <ChevronDownIcon />
          </div>

          <button
            className="inline-flex h-[42px] items-center gap-2 rounded-lg border border-[#c2c9bb] px-4 hover:bg-slate-50 transition-colors"
            type="button"
          >
            <SortIcon />
            <span className="text-base text-[#42493e] font-medium">Sort</span>
          </button>
        </div>
      </div>

      {/* TABLE HEADER */}
      <div className="flex items-center justify-between px-2">
        <h2 className="text-xl font-bold text-[#1a1c19]">All Articles</h2>
        <span className="text-sm text-[#72796e]">{newsList.length} items total</span>
      </div>

      <NewsTable 
        newsList={filteredNews} 
        onEdit={handleOpenModal} 
        onDelete={handleDelete} 
      />

      <NewsModal 
        isOpen={isModalOpen} 
        news={editingNews} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handleSubmit} 
      />
    </div>
  );
}
