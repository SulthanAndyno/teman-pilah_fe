'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Gallery } from '@/types';
import { getGalleryImageUrl } from '@/lib/api/gallery';
import { ArrowLeft, Image as ImageIcon } from 'lucide-react';
import { ConfirmModal } from '@/components/admin/ConfirmModal';

interface GalleryModalProps {
  item: Gallery | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: FormData) => void;
}

export function GalleryModal({ item, isOpen, onClose, onSubmit }: GalleryModalProps) {
  const [description, setDescription] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');

  const [confirmModal, setConfirmModal] = useState<{
    isOpen: boolean;
    status: 'PUBLISHED' | 'DRAFT' | 'ERROR' | 'ERROR_FILE_SIZE' | null;
  }>({ isOpen: false, status: null });

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    if (item) {
      setDescription(item.description || '');
      setImagePreview(getGalleryImageUrl(item.image));
      setImageFile(null);
    } else {
      setDescription('');
      setImagePreview('');
      setImageFile(null);
    }
  }, [item, isOpen]);

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

  const handlePreSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Check if new item has an image
    if (!item && !imageFile) {
      setConfirmModal({ isOpen: true, status: 'ERROR' });
      return;
    }

    setConfirmModal({ isOpen: true, status: 'PUBLISHED' });
  };

  const executeSubmit = () => {
    setConfirmModal({ isOpen: false, status: null });

    const data = new FormData();
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
          Kembali ke Kelola Galeri
        </button>
        <h1 className="text-3xl font-serif font-bold text-[#2A3426] mt-6">
          {item ? 'Edit Item Galeri' : 'Tambah Item Galeri Baru'}
        </h1>
      </div>

      {/* SCROLLABLE CONTENT */}
      <div className="flex-1 overflow-y-auto px-12 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* LEFT COLUMN (Forms) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Description */}
            <div className="bg-white p-6 rounded-[20px] border border-[#F0F2EB] shadow-sm space-y-2">
              <div className="flex justify-between items-center">
                <label className="text-[13px] font-bold text-[#72796E]">Deskripsi</label>
                <span className="text-[11px] text-[#A1A89A]">{description.length}/500</span>
              </div>
              <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value.slice(0, 500))}
                placeholder="Tulis deskripsi atau catatan singkat untuk aksi nyata ini..."
                rows={5}
                className="w-full border border-[#D6D9D2] rounded-xl p-4 text-[14px] text-[#2A3426] focus:outline-none focus:border-[#27532B] transition-all bg-[#F9FAF8] placeholder:text-[#A1A89A] resize-none"
              />
            </div>
            
          </div>

          {/* RIGHT COLUMN (Image Upload) */}
          <div className="space-y-6">
            
            <div className="bg-white p-6 rounded-[20px] border border-[#F0F2EB] shadow-sm space-y-4">
              <label className="text-[13px] font-bold text-[#72796E]">Foto Galeri</label>
              
              <div 
                onClick={() => fileInputRef.current?.click()}
                className={`border-2 border-dashed rounded-[20px] aspect-square flex flex-col items-center justify-center p-4 cursor-pointer transition-all duration-300 ${
                  imagePreview 
                    ? 'border-[#27532B]/30 bg-[#27532B]/5' 
                    : 'border-[#D6D9D2] hover:border-[#27532B]/50 hover:bg-gray-50'
                }`}
              >
                {imagePreview ? (
                  <div className="relative w-full h-full rounded-lg overflow-hidden">
                    <img 
                      src={imagePreview} 
                      alt="Preview" 
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/40 opacity-0 hover:opacity-100 transition-opacity flex items-center justify-center transition-opacity">
                      <span className="text-white text-[12px] font-semibold bg-[#27532B] px-3 py-1.5 rounded-full">
                        Ubah Gambar
                      </span>
                    </div>
                  </div>
                ) : (
                  <div className="text-center space-y-2.5">
                    <div className="inline-flex p-3 rounded-full bg-gray-50 text-gray-400">
                      <ImageIcon size={24} />
                    </div>
                    <div>
                      <p className="text-[13px] font-bold text-[#42493E]">Unggah Gambar</p>
                      <p className="text-[11px] text-[#A1A89A] mt-1">PNG, JPG, atau JPEG (Maks. 2MB)</p>
                    </div>
                  </div>
                )}
              </div>

              <input 
                ref={fileInputRef}
                type="file"
                accept="image/*"
                onChange={handleImageChange}
                className="hidden"
              />
            </div>

          </div>

        </div>
      </div>

      {/* FOOTER ACTION BAR */}
      <div className="absolute bottom-0 left-0 right-0 bg-[#F9FAF8] border-t border-[#F0F2EB] px-12 py-5 flex justify-end gap-3 z-10">
        <button
          onClick={onClose}
          type="button"
          className="rounded-xl border border-[#D6D9D2] bg-white px-6 py-3 text-[13px] font-bold text-[#72796E] hover:bg-gray-50 transition-colors active:scale-95"
        >
          Batal
        </button>
        <button
          onClick={handlePreSubmit}
          type="button"
          className="rounded-xl bg-[#27532B] px-6 py-3 text-[13px] font-bold text-white hover:brightness-110 transition-all active:scale-95"
        >
          {item ? 'Simpan Perubahan' : 'Unggah Item Galeri'}
        </button>
      </div>

      {/* MODAL DIALOGS */}
      <ConfirmModal
        isOpen={confirmModal.isOpen && confirmModal.status === 'ERROR'}
        onClose={() => setConfirmModal({ isOpen: false, status: null })}
        onConfirm={() => setConfirmModal({ isOpen: false, status: null })}
        title="Form Error"
        message="Mohon pilih gambar untuk item galeri baru."
        confirmText="OK"
        isAlert={true}
      />

      <ConfirmModal
        isOpen={confirmModal.isOpen && confirmModal.status === 'ERROR_FILE_SIZE'}
        onClose={() => setConfirmModal({ isOpen: false, status: null })}
        onConfirm={() => setConfirmModal({ isOpen: false, status: null })}
        title="File Terlalu Besar"
        message="Ukuran file gambar tidak boleh melebihi 2MB."
        confirmText="OK"
        isAlert={true}
      />

      <ConfirmModal
        isOpen={confirmModal.isOpen && (confirmModal.status === 'PUBLISHED')}
        onClose={() => setConfirmModal({ isOpen: false, status: null })}
        onConfirm={executeSubmit}
        title={item ? 'Perbarui Item Galeri?' : 'Upload Item Galeri?'}
        message={
          item
            ? 'Apakah Anda yakin ingin menyimpan perubahan pada item galeri ini?'
            : 'Apakah Anda yakin ingin mengupload gambar baru ke galeri aksi nyata?'
        }
        confirmText={item ? 'Ya, Perbarui' : 'Ya, Upload'}
        confirmColor="#27532B"
      />
    </div>
  );
}
