'use client';

import React, { useState, useEffect } from 'react';
import { News } from '@/types';
import { Card } from '@/components/ui/Card';
import { Button } from '@/components/ui/Button';
import { Input } from '@/components/ui/Input';
import { X } from 'lucide-react';

interface NewsModalProps {
  news: News | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: Partial<News>) => void;
}

export function NewsModal({ news, isOpen, onClose, onSubmit }: NewsModalProps) {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('Edukasi');
  const [status, setStatus] = useState<'published' | 'draft'>('published');

  useEffect(() => {
    if (news) {
      setTitle(news.title);
      setCategory(news.category);
      setStatus(news.status);
    } else {
      setTitle('');
      setCategory('Edukasi');
      setStatus('published');
    }
  }, [news, isOpen]);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit({ title, category, status });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      <div className="absolute inset-0 bg-primary/20 backdrop-blur-sm" onClick={onClose} />
      <Card className="w-full max-w-lg relative z-10 animate-in zoom-in-95">
        <div className="flex items-center justify-between mb-8">
          <h3 className="text-2xl font-bold">{news ? 'Edit Berita' : 'Tulis Berita Baru'}</h3>
          <button onClick={onClose} className="w-10 h-10 rounded-full hover:bg-bg flex items-center justify-center">
            <X size={20} />
          </button>
        </div>
        <form onSubmit={handleSubmit} className="space-y-6">
          <Input label="Judul Berita" value={title} onChange={e => setTitle(e.target.value)} required />
          <div className="grid grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-primary-light block">Kategori</label>
              <select 
                className="w-full px-4 py-2.5 bg-white border border-border rounded-xl text-neutral"
                value={category}
                onChange={e => setCategory(e.target.value)}
              >
                <option value="Edukasi">Edukasi</option>
                <option value="Kampanye">Kampanye</option>
                <option value="Produk">Produk</option>
                <option value="Tips & Trick">Tips & Trick</option>
              </select>
            </div>
            <div className="space-y-1.5">
              <label className="text-sm font-medium text-primary-light block">Status</label>
              <select 
                className="w-full px-4 py-2.5 bg-white border border-border rounded-xl text-neutral"
                value={status}
                onChange={e => setStatus(e.target.value as any)}
              >
                <option value="published">Published</option>
                <option value="draft">Draft</option>
              </select>
            </div>
          </div>
          <div className="pt-4 flex gap-3">
            <Button variant="secondary" className="flex-grow" type="button" onClick={onClose}>Batal</Button>
            <Button type="submit" className="flex-[2]">Simpan Berita</Button>
          </div>
        </form>
      </Card>
    </div>
  );
}
