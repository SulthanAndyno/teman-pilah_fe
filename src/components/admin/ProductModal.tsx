'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Product } from '@/types';
import { getImageUrl } from '@/lib/api/Products';
import { ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { ConfirmModal } from '@/components/admin/ConfirmModal';

interface ProductModalProps {
  product: Product | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: FormData) => void;
}

export function ProductModal({ product, isOpen, onClose, onSubmit }: ProductModalProps) {
  const [name, setName] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [category, setCategory] = useState<Product['category']>('ORGANIC');
  const [price, setPrice] = useState('');
  const [whatsappLink, setWhatsappLink] = useState('');
  
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');

  const [confirmModal, setConfirmModal] = useState<{
    isOpen: boolean;
    status: 'PUBLISHED' | 'DRAFT' | 'ERROR' | 'ERROR_FILE_SIZE' | null;
  }>({ isOpen: false, status: null });

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    if (product) {
      setName(product.name || '');
      setSlug(product.name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''));
      setDescription(product.description || '');
      setCategory(product.category || 'ORGANIC');
      setPrice(product.price?.toString() || '');
      setWhatsappLink(product.whatsappLink || '');
      
      setImagePreview(getImageUrl(product.image));
      setImageFile(null);
    } else {
      setName('');
      setSlug('');
      setDescription('');
      setCategory('ORGANIC');
      setPrice('');
      setWhatsappLink('');
      setImagePreview('');
      setImageFile(null);
    }
  }, [product, isOpen]);

  // Sync Slug automatically from Name for new products
  useEffect(() => {
    if (name && !product) {
      setSlug(name.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''));
    }
  }, [name, product]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      if (file.size > 2 * 1024 * 1024) {
        setConfirmModal({ isOpen: true, status: 'ERROR_FILE_SIZE' });
        e.target.value = ''; // Clear selection
        return;
      }
      setImageFile(file);
      const reader = new FileReader();
      reader.onloadend = () => {
        setImagePreview(reader.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handlePreSubmit = (e: React.FormEvent, submitStatus?: 'PUBLISHED' | 'DRAFT') => {
    e.preventDefault();
    
    // Validation
    if (!name.trim() || !description.trim() || !price.trim() || !whatsappLink.trim()) {
      setConfirmModal({ isOpen: true, status: 'ERROR' });
      return;
    }

    setConfirmModal({ isOpen: true, status: submitStatus || 'PUBLISHED' });
  };

  const executeSubmit = () => {
    setConfirmModal({ isOpen: false, status: null });

    let formattedWa = '';
    if (whatsappLink.trim()) {
      const trimmed = whatsappLink.trim();
      if (trimmed.startsWith('http://') || trimmed.startsWith('https://')) {
        formattedWa = trimmed;
      } else {
        let cleanNumber = trimmed.replace(/\D/g, '');
        if (cleanNumber.startsWith('08')) {
          cleanNumber = '62' + cleanNumber.substring(1);
        } else if (cleanNumber.startsWith('8') && cleanNumber.length >= 9 && cleanNumber.length <= 13) {
          cleanNumber = '62' + cleanNumber;
        }
        formattedWa = `https://wa.me/${cleanNumber}`;
      }
    }

    const data = new FormData();
    data.append('name', name);
    data.append('category', category);
    data.append('price', price);
    data.append('whatsappLink', formattedWa);
    // Add required hidden fields to pass backend validation seamlessly
    data.append('priceUnit', '/pcs');
    data.append('stock', '100');
    data.append('stockLabel', 'IN_STOCK');
    data.append('description', description);
    
    if (imageFile) {
      data.append('image', imageFile);
    }

    onSubmit(data);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-[#F9FAF8] overflow-hidden animate-slide-up">
      {/* HEADER BAR */}
      <div className="flex-none px-12 py-6">
        <button 
          onClick={onClose}
          className="flex items-center text-[13px] font-medium text-[#72796E] hover:text-[#2A3426] transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Kembali ke Kelola Produk
        </button>
        <h1 className="text-3xl font-serif font-bold text-[#2A3426] mt-6">
          {product ? 'Edit Product' : 'Tambah Produk Baru'}
        </h1>
      </div>

      {/* SCROLLABLE CONTENT */}
      <div className="flex-1 overflow-y-auto px-12 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* LEFT COLUMN (Forms) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Title */}
            <div className="bg-white p-6 rounded-[20px] border border-[#F0F2EB] shadow-sm space-y-2">
              <label className="text-[13px] font-bold text-[#72796E]">Nama Produk</label>
              <input
                type="text"
                placeholder="Masukkan nama produk..."
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full h-12 px-4 rounded-[12px] bg-[#F9FAF8] border border-[#E5E7EB] text-[14px] text-[#2A3426] placeholder:text-[#A1A89A] focus:outline-none focus:border-[#27532B] focus:ring-1 focus:ring-[#27532B] transition-all"
              />
            </div>

            {/* Slug */}
            <div className="bg-white p-6 rounded-[20px] border border-[#F0F2EB] shadow-sm space-y-2">
              <label className="text-[13px] font-bold text-[#72796E]">Slug / URL</label>
              <div className="flex rounded-[12px] bg-[#F9FAF8] border border-[#E5E7EB] overflow-hidden focus-within:border-[#27532B] focus-within:ring-1 focus-within:ring-[#27532B] transition-all h-12">
                <div className="px-4 flex items-center bg-[#F0F2EB]/50 border-r border-[#E5E7EB] text-[#72796E] text-[14px]">
                  temanpilah.com/product/
                </div>
                <input
                  type="text"
                  placeholder="new-product-slug"
                  value={slug}
                  onChange={(e) => setSlug(e.target.value)}
                  className="flex-1 px-4 bg-transparent text-[14px] text-[#2A3426] placeholder:text-[#A1A89A] outline-none"
                />
              </div>
            </div>

            {/* Description */}
            <div className="bg-white p-6 rounded-[20px] border border-[#F0F2EB] shadow-sm space-y-2">
              <label className="text-[13px] font-bold text-[#72796E]">Ringkasan Produk</label>
              <textarea
                placeholder="Tulis ringkasan singkat produk..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full p-4 rounded-[12px] bg-[#F9FAF8] border border-[#E5E7EB] text-[14px] text-[#2A3426] placeholder:text-[#A1A89A] focus:outline-none focus:border-[#27532B] focus:ring-1 focus:ring-[#27532B] transition-all resize-none min-h-[140px]"
              />
            </div>

          </div>

          {/* RIGHT COLUMN (Image, Category, Price) */}
          <div className="space-y-6">
            
            {/* Banner / Image */}
            <div className="bg-white p-6 rounded-[20px] border border-[#F0F2EB] shadow-sm space-y-2">
              <label className="text-[13px] font-bold text-[#72796E]">Foto Produk</label>
              <div 
                onClick={() => fileInputRef.current?.click()}
                className={`relative h-[200px] rounded-[16px] flex flex-col items-center justify-center cursor-pointer overflow-hidden group ${
                  imagePreview ? 'border-none' : 'border-2 border-dashed border-[#E5E7EB] bg-[#F9FAF8] hover:bg-gray-50 transition-colors'
                }`}
              >
                <input
                  type="file"
                  ref={fileInputRef}
                  className="hidden"
                  accept="image/*"
                  onChange={handleImageChange}
                />
                
                {imagePreview ? (
                  <>
                    <img src={imagePreview} alt="Preview" className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-opacity">
                      <span className="text-white text-[13px] font-medium">Ubah Gambar</span>
                    </div>
                  </>
                ) : (
                  <div className="text-center px-4">
                    <div className="mb-3 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm border border-[#F0F2EB]">
                      <ImageIcon className="h-6 w-6 text-[#A1A89A]" />
                    </div>
                    <p className="text-[13px] font-bold text-[#2A3426] mb-1">
                      Klik untuk mengunggah atau seret dan lepas
                    </p>
                    <p className="text-[11px] text-[#A1A89A]">
                      SVG, PNG, JPG atau GIF (maks. 2MB)
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Category & Price */}
            <div className="bg-white p-6 rounded-[20px] border border-[#F0F2EB] shadow-sm space-y-6">
              
              <div className="space-y-2">
                <label className="text-[13px] font-bold text-[#72796E]">Kategori Produk</label>
                <div className="relative">
                  <select
                    value={category}
                    onChange={(e) => setCategory(e.target.value as any)}
                    className="w-full h-12 px-4 pr-10 appearance-none rounded-[12px] bg-[#F9FAF8] border border-[#E5E7EB] text-[14px] text-[#2A3426] focus:outline-none focus:border-[#27532B] focus:ring-1 focus:ring-[#27532B] transition-all cursor-pointer"
                  >
                    <option value="ORGANIC">Produk Organik</option>
                    <option value="UPCYCLED_GOODS">Kerajinan</option>
                    <option value="ZERO_WASTE">Zero Waste</option>
                  </select>
                  <div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-[#A1A89A]">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"><path d="M6 9l6 6 6-6"/></svg>
                  </div>
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-bold text-[#72796E]">Harga Produk</label>
                <div className="flex rounded-[12px] bg-[#F9FAF8] border border-[#E5E7EB] overflow-hidden focus-within:border-[#27532B] focus-within:ring-1 focus-within:ring-[#27532B] transition-all h-12">
                  <div className="px-4 flex items-center bg-[#F0F2EB]/50 border-r border-[#E5E7EB] text-[#72796E] text-[14px] font-medium">
                    Rp
                  </div>
                  <input
                    type="number"
                    placeholder="45000"
                    value={price}
                    onChange={(e) => setPrice(e.target.value)}
                    className="flex-1 px-4 bg-transparent text-[14px] text-[#2A3426] placeholder:text-[#A1A89A] outline-none"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-bold text-[#72796E]">Nomor WhatsApp / Link <span className="text-red-500">*</span></label>
                <input
                  type="text"
                  placeholder="misal 08123456789 atau https://wa.me/..."
                  value={whatsappLink}
                  onChange={(e) => setWhatsappLink(e.target.value)}
                  className="w-full h-12 px-4 rounded-[12px] bg-[#F9FAF8] border border-[#E5E7EB] text-[14px] text-[#2A3426] placeholder:text-[#A1A89A] focus:outline-none focus:border-[#27532B] focus:ring-1 focus:ring-[#27532B] transition-all"
                />
              </div>

            </div>
          </div>

        </div>
      </div>

      {/* FIXED FOOTER */}
      <div className="flex-none bg-white border-t border-[#F0F2EB] px-12 py-5 flex items-center justify-between shadow-[0_-4px_12px_rgba(0,0,0,0.02)]">
        <button
          type="button"
          onClick={onClose}
          className="px-6 py-2.5 rounded-[12px] border border-[#F0F2EB] text-[#D05B5B] font-bold text-[13px] hover:bg-red-50 transition-all duration-200 active:scale-95"
        >
          Batal
        </button>

        <div className="flex items-center gap-4">
          {!product && (
            <button
              type="button"
              onClick={(e) => handlePreSubmit(e, 'DRAFT')}
              className="px-6 py-2.5 rounded-[12px] border border-[#F0F2EB] text-[#2A3426] font-bold text-[13px] hover:bg-gray-50 transition-all duration-200 active:scale-95"
            >
              Simpan Draft
            </button>
          )}
          <button
            type="button"
            onClick={(e) => handlePreSubmit(e, 'PUBLISHED')}
            className="px-8 py-2.5 rounded-[12px] bg-[#8C5A00] text-white font-bold text-[13px] hover:brightness-110 transition-all duration-200 shadow-sm active:scale-95"
          >
            {product ? 'Simpan Perubahan' : 'Terbitkan'}
          </button>
        </div>
      </div>

      <ConfirmModal
        isOpen={confirmModal.isOpen}
        isAlert={confirmModal.status === 'ERROR' || confirmModal.status === 'ERROR_FILE_SIZE'}
        onClose={() => setConfirmModal({ isOpen: false, status: null })}
        onConfirm={() => {
          if (confirmModal.status === 'ERROR' || confirmModal.status === 'ERROR_FILE_SIZE') {
            setConfirmModal({ isOpen: false, status: null });
          } else {
            executeSubmit();
          }
        }}
        title={
          confirmModal.status === 'ERROR'
            ? "Data Belum Lengkap"
            : confirmModal.status === 'ERROR_FILE_SIZE'
            ? "Ukuran File Terlalu Besar"
            : (product ? "Simpan Perubahan?" : "Tambah Produk Baru?")
        }
        message={
          confirmModal.status === 'ERROR'
            ? "Silakan lengkapi semua bidang yang wajib diisi (Nama, Deskripsi, Harga, dan Nomor WhatsApp) sebelum menyimpan."
            : confirmModal.status === 'ERROR_FILE_SIZE'
            ? "File yang diunggah melebihi batas ukuran 2MB. Silakan unggah gambar yang lebih kecil dari 2MB."
            : product 
            ? `Apakah Anda yakin ingin menyimpan perubahan pada "${name || 'produk ini'}"?`
            : `Apakah Anda yakin ingin menambahkan "${name || 'produk ini'}"? Tindakan ini tidak dapat dibatalkan.`
        }
        confirmText={
          confirmModal.status === 'ERROR' || confirmModal.status === 'ERROR_FILE_SIZE'
            ? "OK"
            : (product ? "Simpan Perubahan" : "Tambah Produk Baru")
        }
      />
    </div>
  );
}
