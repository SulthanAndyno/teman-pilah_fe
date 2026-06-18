'use client';

import React, { useState, useEffect, useMemo } from 'react';
import { Product } from '@/types';
import { toast } from 'sonner';
import { ProductTable } from '@/components/admin/ProductTable';
import { ProductModal } from '@/components/admin/ProductModal';
import { SuccessModal } from '@/components/admin/SuccessModal';
import { DeleteModal } from '@/components/admin/DeleteModal';
import { productApi } from '@/lib/api/Products';

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
  const [statusFilter, setStatusFilter] = useState('all');
  const [categoryFilter, setCategoryFilter] = useState('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingProduct, setEditingProduct] = useState<Product | null>(null);
  const [successModal, setSuccessModal] = useState<{
    isOpen: boolean;
    title: string;
    message: string;
  }>({ isOpen: false, title: '', message: '' });
  const [deleteModal, setDeleteModal] = useState<{
    isOpen: boolean;
    id: string;
    name: string;
  }>({ isOpen: false, id: '', name: '' });

  const fetchProducts = async () => {
    setIsLoading(true);
    try {
      const data = await productApi.getAll();
      setProducts(data);
    } catch (error) {
      toast.error('Gagal mengambil data produk dari server');
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = useMemo(() => {
    let result = [...products];

    if (searchTerm) {
      result = result.filter(item => 
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    if (categoryFilter !== 'all') {
      result = result.filter(item => item.category === categoryFilter);
    }

    if (statusFilter !== 'all') {
      result = result.filter(item => item.stockLabel === statusFilter);
    }

    return result;
  }, [products, searchTerm, categoryFilter, statusFilter]);

  const handleOpenModal = (product?: Product) => {
    setEditingProduct(product || null);
    setIsModalOpen(true);
  };

  const handleSubmit = async (data: FormData) => {
    try {
      if (editingProduct) {
        await productApi.update(editingProduct.id, data);
        setSuccessModal({
          isOpen: true,
          title: 'Berhasil Memperbarui',
          message: 'Produk berhasil diperbarui.'
        });
      } else {
        await productApi.create(data);
        setSuccessModal({
          isOpen: true,
          title: 'Berhasil Menambahkan',
          message: 'Produk berhasil ditambahkan.'
        });
      }
      fetchProducts();
      setIsModalOpen(false);
    } catch (error: unknown) {
      const err = error as Error;
      toast.error(err.message || 'Gagal menyimpan produk');
    }
  };

  const handleDeleteClick = (id: string) => {
    const product = products.find(p => p.id === id);
    setDeleteModal({
      isOpen: true,
      id,
      name: product?.name || 'this product'
    });
  };

  const confirmDelete = async () => {
    try {
      await productApi.delete(deleteModal.id, deleteModal.name);
      setSuccessModal({
        isOpen: true,
        title: 'Berhasil Menghapus',
        message: 'Produk berhasil dihapus.'
      });
      fetchProducts();
    } catch (error: unknown) {
      const err = error as Error;
      toast.error(err.message || 'Gagal menghapus produk');
    } finally {
      setDeleteModal({ isOpen: false, id: '', name: '' });
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
            Kelola Produk
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
          <span>Produk Baru</span>
        </button>
      </header>

      {/* FILTER SECTION */}
      <div className="rounded-[20px] border border-[#F0F2EB] bg-white p-2.5 shadow-sm">
        <div className="flex flex-col gap-2 lg:flex-row lg:items-center">
          {/* SEARCH */}
          <div className="relative flex-1">
            <label className="sr-only" htmlFor="product-search">
              Cari produk
            </label>
            <div className="flex h-11 items-center rounded-[14px] bg-[#F9FAF8] pl-10 pr-4">
              <input
                id="product-search"
                placeholder="Cari berdasarkan nama..."
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

          {/* FILTERS */}
          <div className="flex flex-col gap-2 sm:flex-row">
            <div className="relative w-full sm:w-[140px]">
              <select
                className="h-11 w-full appearance-none rounded-[14px] bg-[#F9FAF8] border border-[#F0F2EB] px-4 pr-10 text-[13px] font-medium text-[#72796E] outline-none cursor-pointer"
                value={statusFilter}
                onChange={(e) => setStatusFilter(e.target.value)}
              >
                <option value="all">Status: Semua</option>
                <option value="IN_STOCK">Tersedia</option>
                <option value="OUT_OF_STOCK">Habis</option>
              </select>
              <ChevronDownIcon />
            </div>

            <div className="relative w-full sm:w-[140px]">
              <select
                className="h-11 w-full appearance-none rounded-[14px] bg-[#F9FAF8] border border-[#F0F2EB] px-4 pr-10 text-[13px] font-medium text-[#72796E] outline-none cursor-pointer"
                value={categoryFilter}
                onChange={(e) => setCategoryFilter(e.target.value)}
              >
                <option value="all">Kategori: Semua</option>
                <option value="UPCYCLED_GOODS">Kerajinan</option>
                <option value="ORGANIC">Organik</option>
                <option value="ZERO_WASTE">Zero Waste</option>
              </select>
              <ChevronDownIcon />
            </div>

            <button
              type="button"
              className="inline-flex h-11 items-center justify-center gap-2 rounded-[14px] border border-[#F0F2EB] bg-white px-5 hover:bg-gray-50 transition-colors"
            >
              <SortIcon />
              <span className="text-[13px] font-medium text-[#72796E]">Urutkan</span>
            </button>
          </div>
        </div>
      </div>

      <ProductTable 
        products={filteredProducts} 
        onEdit={handleOpenModal} 
        onDelete={handleDeleteClick} 
      />

      <ProductModal 
        isOpen={isModalOpen} 
        product={editingProduct} 
        onClose={() => setIsModalOpen(false)} 
        onSubmit={handleSubmit} 
      />

      <SuccessModal
        isOpen={successModal.isOpen}
        onClose={() => setSuccessModal({ ...successModal, isOpen: false })}
        title={successModal.title}
        message={successModal.message}
      />

      <DeleteModal
        isOpen={deleteModal.isOpen}
        onClose={() => setDeleteModal({ ...deleteModal, isOpen: false })}
        onConfirm={confirmDelete}
        title="Hapus Produk?"
        itemName={deleteModal.name}
        confirmText="Hapus Produk"
      />
    </div>
  );
}
