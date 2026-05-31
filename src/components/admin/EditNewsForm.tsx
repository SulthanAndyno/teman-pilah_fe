'use client';

import React, { useState } from 'react';
import { 
  ArrowLeft, 
  Bold, 
  Italic, 
  Underline, 
  List, 
  ListOrdered, 
  Quote, 
  Link as LinkIcon, 
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify,
  ChevronDown,
  X,
  CheckCircle2
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface EditNewsFormProps {
  initialData?: any;
  title?: string;
  backPath?: string;
}

export function EditNewsForm({ 
  initialData, 
  title = "Edit News", 
  backPath = "/admin/news" 
}: EditNewsFormProps) {
  const [formData, setFormData] = useState({
    title: initialData?.title || 'Edukasi Pengelolaan Sampah di Desa',
    slug: initialData?.slug || 'edukasi-pengelolaan-sampah',
    content: initialData?.content || 'Pemerintah desa bersama Teman Pilah mengadakan edukasi intensif...',
    status: initialData?.status || 'Published',
    publishDate: initialData?.publishDate || '2026-05-16',
    category: initialData?.category || 'Education',
    tags: initialData?.tags || ['Recycling', 'Village'],
  });

  const [tagInput, setTagInput] = useState('');

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      if (!formData.tags.includes(tagInput.trim())) {
        setFormData({ ...formData, tags: [...formData.tags, tagInput.trim()] });
      }
      setTagInput('');
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFDFB]">
      {/* HEADER */}
      <header className="px-10 py-6 border-b border-[#C2C9BB]/20">
        <Link 
          href={backPath}
          className="flex items-center gap-2 text-sm font-bold text-[#42493E] hover:text-[#1B361F] transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to News Management
        </Link>
        <h1 className="text-[32px] font-extrabold text-[#1B361F] mt-6 tracking-tight">
          {title}
        </h1>
      </header>

      {/* MAIN CONTENT */}
      <main className="px-10 py-10 max-w-[1400px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] gap-8">
          {/* LEFT COLUMN */}
          <div className="space-y-8">
            <section className="bg-white rounded-[24px] p-8 border border-[#C2C9BB]/30 shadow-sm space-y-4">
              <label className="text-[11px] font-bold text-[#72796E] tracking-widest uppercase ml-1">Article Title</label>
              <input 
                type="text" 
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full h-14 bg-[#F9FAF5] border border-[#C2C9BB]/30 rounded-2xl px-6 text-sm font-medium text-[#1B361F] outline-none focus:border-[#1B361F]/30 transition-all"
                placeholder="Enter article title"
              />
            </section>

            <section className="bg-white rounded-[24px] p-8 border border-[#C2C9BB]/30 shadow-sm space-y-4">
              <label className="text-[11px] font-bold text-[#72796E] tracking-widest uppercase ml-1">Slug / URL</label>
              <div className="flex items-center">
                <div className="h-14 px-6 bg-[#E9EBE5] border border-r-0 border-[#C2C9BB]/30 rounded-l-2xl flex items-center text-xs font-bold text-[#72796E]">
                  temanpilah.com/news/
                </div>
                <input 
                  type="text" 
                  value={formData.slug}
                  onChange={(e) => setFormData({...formData, slug: e.target.value})}
                  className="flex-1 h-14 bg-[#F9FAF5] border border-[#C2C9BB]/30 rounded-r-2xl px-6 text-sm font-medium text-[#1B361F] outline-none focus:border-[#1B361F]/30 transition-all"
                />
              </div>
            </section>

            <section className="bg-white rounded-[24px] p-8 border border-[#C2C9BB]/30 shadow-sm space-y-4">
              <label className="text-[11px] font-bold text-[#72796E] tracking-widest uppercase ml-1">Article Content</label>
              <div className="border border-[#C2C9BB]/30 rounded-2xl overflow-hidden">
                <div className="flex items-center gap-1 p-3 bg-[#F9FAF5] border-b border-[#C2C9BB]/30">
                  <ToolbarButton icon={Bold} />
                  <ToolbarButton icon={Italic} />
                  <ToolbarButton icon={Underline} />
                  <div className="w-px h-6 bg-[#C2C9BB]/30 mx-1" />
                  <ToolbarButton icon={List} />
                  <ToolbarButton icon={ListOrdered} />
                  <ToolbarButton icon={Quote} />
                  <div className="w-px h-6 bg-[#C2C9BB]/30 mx-1" />
                  <ToolbarButton icon={LinkIcon} />
                  <div className="w-px h-6 bg-[#C2C9BB]/30 mx-1" />
                  <ToolbarButton icon={AlignLeft} />
                  <ToolbarButton icon={AlignCenter} />
                  <ToolbarButton icon={AlignRight} />
                  <ToolbarButton icon={AlignJustify} />
                </div>
                <textarea 
                  value={formData.content}
                  onChange={(e) => setFormData({...formData, content: e.target.value})}
                  className="w-full min-h-[400px] p-6 bg-white text-sm font-medium text-[#42493E] leading-relaxed outline-none resize-none"
                  placeholder="Insert article content here..."
                />
              </div>
            </section>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">
            <section className="bg-white rounded-[24px] p-8 border border-[#C2C9BB]/30 shadow-sm space-y-4">
              <label className="text-[11px] font-bold text-[#72796E] tracking-widest uppercase ml-1">Featured Image</label>
              <div className="relative aspect-[4/3] bg-[#F9FAF5] rounded-2xl border-2 border-dashed border-[#C2C9BB]/30 overflow-hidden group cursor-pointer">
                <img 
                  src="https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?auto=format&fit=crop&q=80&w=600" 
                  alt="Feature"
                  className="w-full h-full object-cover transition-transform group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-[#1B361F]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                  <span className="bg-white/90 backdrop-blur rounded-xl px-4 py-2 text-xs font-bold text-[#1B361F]">Change Header</span>
                </div>
              </div>
            </section>

            <section className="bg-white rounded-[24px] p-8 border border-[#C2C9BB]/30 shadow-sm space-y-6">
              <div className="space-y-3">
                <label className="text-[11px] font-bold text-[#72796E] tracking-widest uppercase ml-1">Status</label>
                <div className="relative">
                  <select 
                    value={formData.status}
                    onChange={(e) => setFormData({...formData, status: e.target.value})}
                    className="w-full h-14 bg-[#F9FAF5] border border-[#C2C9BB]/30 rounded-2xl px-6 text-sm font-medium text-[#1B361F] outline-none appearance-none cursor-pointer"
                  >
                    <option>Published</option>
                    <option>Draft</option>
                    <option>Archived</option>
                  </select>
                  <ChevronDown size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-[#72796E] pointer-events-none" />
                </div>
              </div>

              <div className="space-y-3">
                <label className="text-[11px] font-bold text-[#72796E] tracking-widest uppercase ml-1">Publish Date</label>
                <input 
                  type="text" 
                  value={formData.publishDate}
                  onChange={(e) => setFormData({...formData, publishDate: e.target.value})}
                  className="w-full h-14 bg-[#F9FAF5] border border-[#C2C9BB]/30 rounded-2xl px-6 text-sm font-medium text-[#1B361F] outline-none"
                  placeholder="DD/MM/YYYY"
                />
              </div>

              <div className="space-y-3">
                <label className="text-[11px] font-bold text-[#72796E] tracking-widest uppercase ml-1">Tags</label>
                <input 
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={handleAddTag}
                  placeholder="Add tags..."
                  className="w-full h-14 bg-[#F9FAF5] border border-[#C2C9BB]/30 rounded-2xl px-6 text-sm font-medium text-[#1B361F] outline-none"
                />
                <div className="flex flex-wrap gap-2 pt-2">
                  {formData.tags.map(tag => (
                    <span key={tag} className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold bg-[#DCFCE7] text-[#046C4E]">
                      {tag}
                      <X size={14} className="cursor-pointer" />
                    </span>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      <footer className="sticky bottom-0 left-0 right-0 py-6 px-10 bg-white border-t border-[#C2C9BB]/20 flex items-center justify-between backdrop-blur-md bg-white/90 z-20">
        <button onClick={() => window.history.back()} className="h-14 px-8 border border-[#C2C9BB]/50 rounded-2xl text-sm font-bold text-[#42493E] hover:bg-[#F9FAF5] transition-colors">
          Cancel Changes
        </button>
        <div className="flex items-center gap-4">
          <button className="h-14 px-8 border border-[#C2C9BB]/50 rounded-2xl text-sm font-bold text-[#42493E] hover:bg-[#F9FAF5] transition-colors">
            Save Draft
          </button>
          <button className="h-14 px-10 bg-[#8B4513] text-white rounded-2xl text-sm font-bold shadow-xl shadow-[#8B4513]/20 hover:bg-[#72390F] transition-all flex items-center gap-2">
            <CheckCircle2 size={18} />
            Publish Update
          </button>
        </div>
      </footer>
    </div>
  );
}

function ToolbarButton({ icon: Icon }: { icon: any }) {
  return (
    <button className="w-9 h-9 flex items-center justify-center rounded-lg text-[#72796E] hover:bg-white/50 hover:text-[#1B361F] transition-colors">
      <Icon size={18} strokeWidth={2.5} />
    </button>
  );
}
