'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Gallery } from '@/types';
import { toast } from 'sonner';
import { GalleryTable } from '@/components/admin/GalleryTable';
import { GalleryModal } from '@/components/admin/GalleryModal';
import { SuccessModal } from '@/components/admin/SuccessModal';
import { DeleteModal } from '@/components/admin/DeleteModal';
import { galleryApi } from '@/lib/api/gallery';

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

export default function AdminGallery() {
  const [items, setItems] = useState<Gallery[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<Gallery | null>(null);

  const [successModal, setSuccessModal] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
  }>({ isOpen: false, title: '', message: '' });

  const [deleteModal, setDeleteModal] = useState<{
    isOpen: boolean;
    id: string;
    description: string;
  }>({ isOpen: false, id: '', description: '' });

  const fetchGallery = async () => {
    setIsLoading(true);
    try {
      const data = await galleryApi.getAll();
      setItems(data);
    } catch (error) {
      toast.error('Gagal mengambil data galeri dari server');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchGallery();
  }, []);

  const filteredItems = useMemo(() => {
    let result = [...items];

    if (searchTerm) {
      result = result.filter(item => 
        (item.description || '').toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    return result;
  }, [items, searchTerm]);

  const handleOpenModal = (item?: Gallery) => {
    setEditingItem(item || null);
    setIsModalOpen(true);
  };

  const handleSubmit = async (data: FormData) => {
    try {
      if (editingItem) {
        await galleryApi.update(editingItem.id, data);
        setSuccessModal({
          isOpen: true,
          title: 'Berhasil Memperbarui',
          message: 'Item galeri berhasil diperbarui.'
        });
      } else {
        await galleryApi.create(data);
        setSuccessModal({
          isOpen: true,
          title: 'Berhasil Menambahkan',
          message: 'Item galeri baru berhasil diupload.'
        });
      }
      fetchGallery();
      setIsModalOpen(false);
    } catch (error: unknown) {
      const err = error as Error;
      toast.error(err.message || 'Gagal menyimpan item galeri');
    }
  };

  const handleDeleteClick = (id: string) => {
    const item = items.find(i => i.id === id);
    setDeleteModal({
      isOpen: true,
      id,
      description: item?.description || 'Item galeri ini'
    });
  };

  const confirmDelete = async () => {
    try {
      await galleryApi.delete(deleteModal.id);
      setSuccessModal({
        isOpen: true,
        title: 'Berhasil Menghapus',
        message: 'Item galeri berhasil dihapus.'
      });
      fetchGallery();
    } catch (error: unknown) {
      const err = error as Error;
      toast.error(err.message || 'Gagal menghapus item galeri');
    } finally {
      setDeleteModal({ isOpen: false, id: '', description: '' });
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
          <h1 className="font-serif text-[32px] font-bold leading-[38.4px] text-[#2A3426] tracking-tight">
            Kelola Galeri
          </h1>
        </div>

        <button
          onClick={() => handleOpenModal()}
          className="inline-flex items-center gap-2 rounded-lg bg-[#27532B] px-5 py-2.5 hover:brightness-110 transition-all text-white font-medium text-[13px]"
          type="button"
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <line x1="12" y1="5" x2="12" y2="19"></line>
            <line x1="5" y1="12" x2="19" y2="12"></line>
          </svg>
          <span>Item Galeri Baru</span>
        </button>
      </header>

      {/* FILTER SECTION */}
      <div className="rounded-[20px] border border-[#F0F2EB] bg-white p-2.5 shadow-sm">
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
          {/* SEARCH */}
          <div className="relative flex-1">
            <label className="sr-only" htmlFor="gallery-search">
              Cari galeri
            </label>
            <div className="flex h-11 items-center rounded-[14px] bg-[#F9FAF8] pl-10 pr-4">
              <input
                id="gallery-search"
                placeholder="Cari berdasarkan deskripsi..."
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                autoComplete="off"
                className="w-full border-none bg-transparent text-[13px] text-[#42493e] outline-none placeholder:text-[#A1A89A]"
              />
            </div>
            <div className="absolute left-4 top-1/2 -translate-y-1/2 opacity-50">
              <SearchIcon />
            </div>
          </div>
        </div>
      </div>

      <GalleryTable 
        items={filteredItems} 
        onEdit={handleOpenModal} 
        onDelete={handleDeleteClick} 
      />

      <GalleryModal 
        isOpen={isModalOpen} 
        item={editingItem} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handleSubmit} 
      />

      <SuccessModal
        isOpen={successModal.isOpen}
        onClose={() => setSuccessModal({ ...successModal, isOpen: false })}
        title={successModal.title}
        message={successModal.message}
        buttonText="Tutup"
      />

      <DeleteModal
        isOpen={deleteModal.isOpen}
        onClose={() => setDeleteModal({ ...deleteModal, isOpen: false })}
        onConfirm={confirmDelete}
        title="Hapus Item Galeri?"
        itemName={deleteModal.description.length > 30 ? deleteModal.description.slice(0, 30) + '...' : deleteModal.description}
        confirmText="Hapus Item"
      />
    </div>
  );
}
