'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { ProgramTable } from '@/components/admin/ProgramTable';
import { ProgramModal } from '@/components/admin/ProgramModal';
import { Program } from '@/types';
import { Button } from '@/components/ui/Button';
import { Plus, Search, ChevronDown } from 'lucide-react';
import { api } from '@/lib/api-client';
import { toast } from 'sonner';

export default function ProgramsAdminPage() {
  const [programs, setPrograms] = useState<Program[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProgram, setEditingProgram] = useState<Program | null>(null);

  useEffect(() => {
    fetchPrograms();
  }, []);

  const fetchPrograms = async () => {
    try {
      setIsLoading(true);
      const data = await api.get<Program[]>('/api/programs');
      setPrograms(data || []);
    } catch (error) {
      console.error('Failed to fetch programs:', error);
      // Fallback for UI visualization if backend not ready
      setPrograms([
        { id: '1', title: 'Bank Sampah', description: 'Mengubah sampah terpilah menjadi nilai ekonomis untuk kesejahteraan anggota komunitas.', image: '/program-1.png', createdAt: new Date().toISOString() },
        { id: '2', title: 'Workshop Edukasi', description: 'Pelatihan daur ulang dan komposting untuk sekolah, kampus, dan kelompok masyarakat.', image: '/program-2.png', createdAt: new Date().toISOString() },
        { id: '3', title: 'Kampanye Lingkungan', description: 'Aksi bersih-bersih pantai, taman, dan fasilitas umum bersama relawan dan mitra.', image: '/program-3.png', createdAt: new Date().toISOString() }
      ]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleOpenModal = (program?: Program) => {
    setEditingProgram(program || null);
    setIsModalOpen(true);
  };

  const handleSubmit = async (data: FormData) => {
    try {
      if (editingProgram) {
        await api.put(`/api/programs/${editingProgram.id}`, data);
        toast.success('Program berhasil diperbarui');
      } else {
        await api.post('/api/programs', data);
        toast.success('Program berhasil ditambahkan');
      }
      setIsModalOpen(false);
      fetchPrograms();
    } catch (error) {
      console.error('Submit error:', error);
      toast.error('Gagal menyimpan program. Pastikan backend mendukung endpoint /api/programs');
    }
  };

  const handleDelete = async (id: string) => {
    if (!confirm('Apakah Anda yakin ingin menghapus program ini?')) return;
    
    try {
      await api.delete(`/api/programs/${id}`);
      toast.success('Program berhasil dihapus');
      fetchPrograms();
    } catch (error) {
      console.error('Delete error:', error);
      toast.error('Gagal menghapus program');
    }
  };

  const filteredPrograms = programs.filter(p => 
    p.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    p.description.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="space-y-8 pb-20">
      {/* HEADER SECTION */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="text-3xl font-bold font-sans text-neutral">Program Management</h1>
          <p className="text-primary-light">Kelola program unggulan Teman Pilah</p>
        </div>
        <Link href="/admin/programs/new/edit">
          <Button 
            className="rounded-full px-6 py-6 shadow-lg shadow-primary/20"
          >
            <Plus size={20} className="mr-2" />
            <span>Tambah Program</span>
          </Button>
        </Link>
      </div>

      {/* FILTERS & SEARCH */}
      <div className="flex flex-wrap items-center gap-4">
        {/* SEARCH BAR */}
        <div className="relative flex-grow max-w-md">
          <div className="absolute left-4 top-1/2 -translate-y-1/2 text-primary-light">
            <Search size={20} />
          </div>
          <input
            type="text"
            placeholder="Search programs..."
            className="h-[46px] w-full rounded-xl border border-[#c2c9bb] bg-[#f3f4ef] pl-12 pr-4 text-sm text-[#1a1c19] outline-none transition-all focus:border-primary focus:ring-2 focus:ring-primary/10"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>

        {/* SORT DROPDOWN (UI ONLY) */}
        <div className="relative w-[180px]">
          <select
            className="h-[46px] w-full appearance-none rounded-xl border border-[#c2c9bb] bg-[#f3f4ef] px-4 pr-10 text-sm text-[#1a1c19] outline-none cursor-pointer"
          >
            <option value="newest">Sort: Newest</option>
            <option value="oldest">Sort: Oldest</option>
            <option value="az">Sort: A-Z</option>
          </select>
          <div className="pointer-events-none absolute right-4 top-1/2 -translate-y-1/2 text-primary-light">
            <ChevronDown size={18} />
          </div>
        </div>
      </div>

      {/* DATA TABLE */}
      {isLoading ? (
        <div className="flex flex-col items-center justify-center py-24 gap-4 text-primary-light">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-primary border-t-transparent" />
          <p>Memuat data...</p>
        </div>
      ) : (
        <ProgramTable 
          programs={filteredPrograms} 
          onDelete={handleDelete}
        />
      )}
    </div>
  );
}

// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { ProgramTable } from '@/components/admin/ProgramTable';
// import { Program } from '@/types';
// import { 
//   Plus, 
//   Search, 
//   ChevronDown, 
//   ChevronLeft, 
//   ChevronRight,
//   Filter
// } from 'lucide-react';
// import { api } from '@/lib/api-client';
// import { toast } from 'sonner';
// import { cn } from '@/lib/utils';

// export default function ProgramsAdminPage() {
//   const [programs, setPrograms] = useState<Program[]>([]);
//   const [isLoading, setIsLoading] = useState(true);
//   const [searchTerm, setSearchTerm] = useState('');

//   useEffect(() => {
//     fetchPrograms();
//   }, []);

//   const fetchPrograms = async () => {
//     try {
//       setIsLoading(true);
//       const data = await api.get<Program[]>('/api/programs');
//       if (data && data.length > 0) {
//         setPrograms(data);
//       } else {
//         // Fallback for UI visualization to match image data exactly
//         setPrograms([
//           { id: '1', title: 'Kegiatan Bank Sampah Desa', description: '', image: '', createdAt: '2023-10-12T00:00:00Z' },
//           { id: '2', title: 'Tips 3R di Rumah', description: '', image: '', createdAt: '2023-10-25T00:00:00Z' },
//           { id: '3', title: 'Program Edukasi Sekolah Dasar', description: '', image: '', createdAt: '2023-09-05T00:00:00Z' },
//           { id: '4', title: 'Event Bersih Pantai 2022', description: '', image: '', createdAt: '2022-12-12T00:00:00Z' },
//           { id: '5', title: 'Workshop Kompos Mandiri', description: '', image: '', createdAt: '2023-11-02T00:00:00Z' }
//         ]);
//       }
//     } catch (error) {
//       console.error('Failed to fetch programs:', error);
//       setPrograms([
//         { id: '1', title: 'Kegiatan Bank Sampah Desa', description: '', image: '', createdAt: '2023-10-12T00:00:00Z' },
//         { id: '2', title: 'Tips 3R di Rumah', description: '', image: '', createdAt: '2023-10-25T00:00:00Z' },
//         { id: '3', title: 'Program Edukasi Sekolah Dasar', description: '', image: '', createdAt: '2023-09-05T00:00:00Z' },
//         { id: '4', title: 'Event Bersih Pantai 2022', description: '', image: '', createdAt: '2022-12-12T00:00:00Z' }
//       ]);
//     } finally {
//       setIsLoading(false);
//     }
//   };

//   const handleDelete = async (id: string) => {
//     if (!confirm('Apakah Anda yakin ingin menghapus program ini?')) return;
    
//     try {
//       await api.delete(`/api/programs/${id}`);
//       toast.success('Program berhasil dihapus');
//       fetchPrograms();
//     } catch (error) {
//       console.error('Delete error:', error);
//       toast.error('Gagal menghapus program');
//     }
//   };

//   const filteredPrograms = programs.filter(p => 
//     p.title.toLowerCase().includes(searchTerm.toLowerCase())
//   );

//   return (
//     <div className="max-w-[1600px] mx-auto space-y-10 pb-20">
//       {/* PAGE HEADER */}
//       <div className="flex items-center justify-between">
//         <h1 className="text-[32px] font-extrabold text-[#1B361F] tracking-tight">
//           Programs Management
//         </h1>
//         <Link href="/admin/programs/new/edit">
//           <button className="h-14 px-8 bg-[#2D5A27] text-white rounded-2xl text-sm font-bold shadow-lg shadow-[#2D5A27]/20 hover:bg-[#23471E] transition-all flex items-center gap-2">
//             <Plus size={20} strokeWidth={2.5} />
//             New Program
//           </button>
//         </Link>
//       </div>

//       {/* FILTERS CARD */}
//       <div className="bg-white rounded-[24px] p-4 border border-[#c2c9bb]/30 shadow-sm flex flex-wrap items-center gap-4">
//         {/* SEARCH BAR */}
//         <div className="relative flex-1 min-w-[300px] group">
//           <div className="absolute left-4 top-1/2 -translate-y-1/2 text-[#72796E] group-focus-within:text-[#1B361F] transition-colors">
//             <Search size={18} />
//           </div>
//           <input
//             type="text"
//             placeholder="Search by title..."
//             className="h-[52px] w-full bg-[#F3F4ED] border border-transparent rounded-xl pl-12 pr-4 text-sm font-medium text-[#1B361F] outline-none focus:bg-white focus:border-[#C2C9BB]/50 transition-all"
//             value={searchTerm}
//             onChange={(e) => setSearchTerm(e.target.value)}
//           />
//         </div>

//         {/* STATUS FILTER */}
//         <div className="relative w-[180px]">
//           <select className="h-[52px] w-full appearance-none bg-[#F3F4ED] border border-transparent rounded-xl px-6 pr-12 text-sm font-bold text-[#1B361F] outline-none cursor-pointer focus:bg-white focus:border-[#C2C9BB]/50 transition-all">
//             <option>Status: All</option>
//             <option>Ongoing</option>
//             <option>Upcoming</option>
//             <option>Completed</option>
//           </select>
//           <ChevronDown size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-[#72796E] pointer-events-none" />
//         </div>

//         {/* DATE FILTER */}
//         <div className="relative w-[180px]">
//           <select className="h-[52px] w-full appearance-none bg-[#F3F4ED] border border-transparent rounded-xl px-6 pr-12 text-sm font-bold text-[#1B361F] outline-none cursor-pointer focus:bg-white focus:border-[#C2C9BB]/50 transition-all">
//             <option>Date: Newest</option>
//             <option>Date: Oldest</option>
//           </select>
//           <ChevronDown size={16} className="absolute right-5 top-1/2 -translate-y-1/2 text-[#72796E] pointer-events-none" />
//         </div>

//         {/* SORT BUTTON */}
//         <button className="h-[52px] px-6 bg-white border border-[#C2C9BB]/40 rounded-xl text-sm font-bold text-[#1B361F] hover:bg-[#F3F4ED] transition-colors flex items-center gap-2">
//           <Filter size={18} />
//           Sort
//         </button>
//       </div>

//       {/* MAIN DATA SECTION */}
//       <div className="space-y-6">
//         {/* DATA CONTAINER */}
//         <div className="bg-[#F9FAF5]/50 rounded-[32px] p-1 border border-[#c2c9bb]/20">
//           <div className="bg-white rounded-[30px] shadow-sm overflow-hidden">
//             <div className="flex items-center justify-between px-8 py-6 border-b border-[#F9FAF5]">
//               <h2 className="text-lg font-extrabold text-[#1B361F]">All Programs</h2>
//               <span className="text-[11px] font-bold text-[#72796E] tracking-widest uppercase">
//                 {programs.length} Items total
//               </span>
//             </div>

//             {isLoading ? (
//               <div className="flex flex-col items-center justify-center py-32 gap-4">
//                 <div className="w-10 h-10 border-4 border-[#2D5A27] border-t-transparent rounded-full animate-spin" />
//                 <p className="text-sm font-bold text-[#72796E]">Loading programs...</p>
//               </div>
//             ) : (
//               <ProgramTable 
//                 programs={filteredPrograms} 
//                 onDelete={handleDelete}
//               />
//             )}

//             {/* PAGINATION FOOTER */}
//             {!isLoading && programs.length > 0 && (
//               <div className="px-8 py-6 bg-white border-t border-[#F9FAF5] flex items-center justify-between">
//                 <span className="text-[13px] font-medium text-[#72796E]">
//                   Showing 1–{Math.min(4, filteredPrograms.length)} of {filteredPrograms.length} programs
//                 </span>
                
//                 <div className="flex items-center gap-2">
//                   <PaginationButton icon={ChevronLeft} disabled />
//                   <PaginationButton label="1" active />
//                   <PaginationButton label="2" />
//                   <PaginationButton label="3" />
//                   <PaginationButton label="4" />
//                   <PaginationButton icon={ChevronRight} />
//                 </div>
//               </div>
//             )}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// function PaginationButton({ 
//   label, 
//   icon: Icon, 
//   active, 
//   disabled 
// }: { 
//   label?: string; 
//   icon?: any; 
//   active?: boolean; 
//   disabled?: boolean;
// }) {
//   return (
//     <button 
//       disabled={disabled}
//       className={cn(
//         "w-10 h-10 flex items-center justify-center rounded-xl text-sm font-bold transition-all",
//         active 
//           ? "bg-[#2D5A27] text-white shadow-lg shadow-[#2D5A27]/20" 
//           : "bg-[#F3F4ED] text-[#1B361F] hover:bg-[#E9EBE2] disabled:opacity-40 disabled:cursor-not-allowed"
//       )}
//     >
//       {Icon ? <Icon size={18} /> : label}
//     </button>
//   );
// }
