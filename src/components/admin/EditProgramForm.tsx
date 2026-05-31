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
  Image as ImageIcon, 
  Code,
  ChevronDown,
  X,
  Save,
  CheckCircle2,
  Send,
  AlignLeft,
  AlignCenter,
  AlignRight,
  AlignJustify
} from 'lucide-react';
import Link from 'next/link';
import { Button } from '@/components/ui/Button';
import { cn } from '@/lib/utils';
import { motion } from 'motion/react';

interface EditProgramFormProps {
  initialData?: any;
  isEdit?: boolean;
  backPath?: string;
}

export function EditProgramForm({ 
  initialData, 
  isEdit = true, 
  backPath = "/admin/programs" 
}: EditProgramFormProps) {
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    slug: initialData?.slug || '',
    description: initialData?.description || '',
    overview: initialData?.overview || '',
    status: initialData?.status || 'Upcoming',
    startDate: initialData?.startDate || '',
    endDate: initialData?.endDate || '',
    tags: initialData?.tags || ['Recycling', 'Community'],
  });

  const title = isEdit ? "Edit Program" : "Add New Program";

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

  const removeTag = (tagToRemove: string) => {
    setFormData({ ...formData, tags: formData.tags.filter(t => t !== tagToRemove) });
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
          Back to Programs Management
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
            {/* PROGRAM TITLE */}
            <section className="bg-white rounded-[24px] p-8 border border-[#C2C9BB]/30 shadow-sm space-y-4">
              <label className="text-[11px] font-bold text-[#72796E] tracking-widest uppercase ml-1">Program Title</label>
              <input 
                type="text" 
                value={formData.title}
                onChange={(e) => setFormData({...formData, title: e.target.value})}
                className="w-full h-14 bg-[#F9FAF5] border border-[#C2C9BB]/30 rounded-2xl px-6 text-sm font-medium text-[#1B361F] outline-none focus:border-[#1B361F]/30 transition-all"
                placeholder="Enter program title"
              />
            </section>

            {/* SLUG / URL */}
            <section className="bg-white rounded-[24px] p-8 border border-[#C2C9BB]/30 shadow-sm space-y-4">
              <label className="text-[11px] font-bold text-[#72796E] tracking-widest uppercase ml-1">Slug / URL</label>
              <div className="flex items-center">
                <div className="h-14 px-6 bg-[#E9EBE5] border border-r-0 border-[#C2C9BB]/30 rounded-l-2xl flex items-center text-xs font-bold text-[#72796E]">
                  temanpilah.com/programs/
                </div>
                <input 
                  type="text" 
                  value={formData.slug}
                  onChange={(e) => setFormData({...formData, slug: e.target.value})}
                  className="flex-1 h-14 bg-[#F9FAF5] border border-[#C2C9BB]/30 rounded-r-2xl px-6 text-sm font-medium text-[#1B361F] outline-none focus:border-[#1B361F]/30 transition-all"
                  placeholder="slug-url"
                />
              </div>
            </section>

            {/* DESCRIPTION (EDITOR) */}
            <section className="bg-white rounded-[24px] p-8 border border-[#C2C9BB]/30 shadow-sm space-y-4">
              <label className="text-[11px] font-bold text-[#72796E] tracking-widest uppercase ml-1">Program Description</label>
              <div className="border border-[#C2C9BB]/30 rounded-2xl overflow-hidden">
                {/* TOOLBAR */}
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
                {/* TEXTAREA */}
                <textarea 
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full min-h-[300px] p-6 bg-white text-sm font-medium text-[#42493E] leading-relaxed outline-none resize-none"
                  placeholder="Describe your program..."
                />
              </div>
            </section>

            {/* OVERVIEW */}
            <section className="bg-white rounded-[24px] p-8 border border-[#C2C9BB]/30 shadow-sm space-y-4">
              <label className="text-[11px] font-bold text-[#72796E] tracking-widest uppercase ml-1">Program Overview</label>
              <textarea 
                value={formData.overview}
                onChange={(e) => setFormData({...formData, overview: e.target.value})}
                className="w-full h-32 p-6 bg-[#F9FAF5] border border-[#C2C9BB]/30 rounded-2xl text-sm font-medium text-[#42493E] outline-none focus:border-[#1B361F]/30 transition-all resize-none"
                placeholder="Short summary..."
              />
            </section>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">
            {/* BANNER */}
            <section className="bg-white rounded-[24px] p-8 border border-[#C2C9BB]/30 shadow-sm space-y-4">
              <label className="text-[11px] font-bold text-[#72796E] tracking-widest uppercase ml-1">Program Banner</label>
              {isEdit ? (
                <div className="relative aspect-[16/9] bg-[#F9FAF5] rounded-2xl border-2 border-dashed border-[#C2C9BB]/30 overflow-hidden group cursor-pointer">
                  <img 
                    src="https://images.unsplash.com/photo-1532996122724-e3c354a0b15b?auto=format&fit=crop&q=80&w=600" 
                    alt="Banner"
                    className="w-full h-full object-cover transition-transform group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-[#1B361F]/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <div className="bg-white/90 backdrop-blur rounded-xl px-4 py-2 text-xs font-bold text-[#1B361F]">
                      Change Image
                    </div>
                  </div>
                </div>
              ) : (
                <div className="relative aspect-[16/9] bg-[#F9FAF5] rounded-2xl border-2 border-dashed border-[#C2C9BB]/30 flex flex-col items-center justify-center gap-3 group cursor-pointer hover:bg-[#F3F4ED] transition-colors">
                  <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#C2C9BB] group-hover:text-[#1B361F] transition-colors">
                    <ImageIcon size={24} />
                  </div>
                  <div className="text-center">
                    <p className="text-sm font-bold text-[#1B361F]">Click to upload or drag and drop</p>
                    <p className="text-[10px] font-medium text-[#72796E] mt-1">SVG, PNG, JPG or GIF (max. 10MB)</p>
                  </div>
                </div>
              )}
            </section>

            {/* SETTINGS CARD */}
            <section className="bg-white rounded-[24px] p-8 border border-[#C2C9BB]/30 shadow-sm space-y-6">
              {/* STATUS */}
              <div className="space-y-3">
                <label className="text-[11px] font-bold text-[#72796E] tracking-widest uppercase ml-1">Program Status</label>
                <div className="relative">
                  <select 
                    value={formData.status}
                    onChange={(e) => setFormData({...formData, status: e.target.value})}
                    className="w-full h-14 bg-[#F9FAF5] border border-[#C2C9BB]/30 rounded-2xl px-6 text-sm font-medium text-[#1B361F] outline-none appearance-none cursor-pointer focus:border-[#1B361F]/30"
                  >
                    <option>Upcoming</option>
                    <option>Active</option>
                    <option>Completed</option>
                  </select>
                  <ChevronDown size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-[#72796E] pointer-events-none" />
                </div>
              </div>

              {/* START DATE */}
              <div className="space-y-3">
                <label className="text-[11px] font-bold text-[#72796E] tracking-widest uppercase ml-1">Program Start Date</label>
                <input 
                  type="text" 
                  value={formData.startDate}
                  onChange={(e) => setFormData({...formData, startDate: e.target.value})}
                  className="w-full h-14 bg-[#F9FAF5] border border-[#C2C9BB]/30 rounded-2xl px-6 text-sm font-medium text-[#1B361F] outline-none focus:border-[#1B361F]/30"
                  placeholder="DD/MM/YYYY"
                />
              </div>

              {/* END DATE */}
              <div className="space-y-3">
                <label className="text-[11px] font-bold text-[#72796E] tracking-widest uppercase ml-1">Program End Date</label>
                <input 
                  type="text" 
                  value={formData.endDate}
                  onChange={(e) => setFormData({...formData, endDate: e.target.value})}
                  className="w-full h-14 bg-[#F9FAF5] border border-[#C2C9BB]/30 rounded-2xl px-6 text-sm font-medium text-[#1B361F] outline-none focus:border-[#1B361F]/30"
                  placeholder="DD/MM/YYYY"
                />
              </div>

              {/* TAGS */}
              <div className="space-y-3">
                <label className="text-[11px] font-bold text-[#72796E] tracking-widest uppercase ml-1">Tags</label>
                <input 
                  type="text"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={handleAddTag}
                  placeholder="Recycling, Education..."
                  className="w-full h-14 bg-[#F9FAF5] border border-[#C2C9BB]/30 rounded-2xl px-6 text-sm font-medium text-[#1B361F] outline-none focus:border-[#1B361F]/30"
                />
                <div className="flex flex-wrap gap-2 pt-2">
                  {formData.tags.map(tag => (
                    <span 
                      key={tag} 
                      className={cn(
                        "inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-bold",
                        tag === 'Recycling' ? "bg-[#DCFCE7] text-[#046C4E]" : "bg-[#FFEDD5] text-[#9A3412]"
                      )}
                    >
                      {tag}
                      <button onClick={() => removeTag(tag)} className="hover:opacity-60 transition-opacity">
                        <X size={14} />
                      </button>
                    </span>
                  ))}
                </div>
              </div>
            </section>
          </div>
        </div>
      </main>

      {/* FOOTER ACTIONS */}
      <footer className="sticky bottom-0 left-0 right-0 py-6 px-10 bg-white border-t border-[#C2C9BB]/20 flex items-center justify-between backdrop-blur-md bg-white/90 z-20">
        <button 
          onClick={() => window.history.back()}
          className="h-14 px-8 border border-[#C2C9BB]/50 rounded-2xl text-sm font-bold text-[#42493E] hover:bg-[#F9FAF5] transition-colors"
        >
          Cancel Changes
        </button>
        <div className="flex items-center gap-4">
          <button className="h-14 px-8 border border-[#C2C9BB]/50 rounded-2xl text-sm font-bold text-[#42493E] hover:bg-[#F9FAF5] transition-colors">
            Save Draft
          </button>
          <button className="h-14 px-10 bg-[#8B4513] text-white rounded-2xl text-sm font-bold shadow-xl shadow-[#8B4513]/20 hover:bg-[#72390F] transition-all flex items-center gap-2">
            {!isEdit && <Send size={18} className="rotate-[-20deg]" />}
            {isEdit && <CheckCircle2 size={18} />}
            {isEdit ? 'Update' : 'Publish'}
          </button>
        </div>
      </footer>
    </div>
  );
}

function ToolbarButton({ icon: Icon, active }: { icon: any, active?: boolean }) {
  return (
    <button className={cn(
      "w-9 h-9 flex items-center justify-center rounded-lg transition-colors",
      active ? "bg-white shadow-sm text-[#1B361F]" : "text-[#72796E] hover:bg-white/50 hover:text-[#1B361F]"
    )}>
      <Icon size={18} strokeWidth={2.5} />
    </button>
  );
}
