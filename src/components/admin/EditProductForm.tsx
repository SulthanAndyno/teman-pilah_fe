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
  CheckCircle2,
  Send
} from 'lucide-react';
import Link from 'next/link';
import { cn } from '@/lib/utils';

interface EditProductFormProps {
  initialData?: any;
  isEdit?: boolean;
  backPath?: string;
}

export function EditProductForm({ 
  initialData, 
  isEdit = true, 
  backPath = "/admin/products" 
}: EditProductFormProps) {
  const [formData, setFormData] = useState({
    name: initialData?.name || '',
    slug: initialData?.slug || '',
    description: initialData?.description || '',
    overview: initialData?.overview || '',
    category: initialData?.category || 'Organic Product',
    stockStatus: initialData?.stockStatus || 'Available',
    price: initialData?.price || '0',
  });

  const title = isEdit ? "Edit Product" : "Add New Product";

  return (
    <div className="min-h-screen bg-[#FDFDFB]">
      {/* HEADER */}
      <header className="px-10 py-6 border-b border-[#C2C9BB]/20">
        <Link 
          href={backPath}
          className="flex items-center gap-2 text-sm font-bold text-[#42493E] hover:text-[#1B361F] transition-colors group"
        >
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform" />
          Back to Product Management
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
            {/* PRODUCT NAME */}
            <section className="bg-white rounded-[24px] p-8 border border-[#C2C9BB]/30 shadow-sm space-y-4">
              <label className="text-[11px] font-bold text-[#72796E] tracking-widest uppercase ml-1">Product Name</label>
              <input 
                type="text" 
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
                className="w-full h-14 bg-[#F9FAF5] border border-[#C2C9BB]/30 rounded-2xl px-6 text-sm font-medium text-[#1B361F] outline-none focus:border-[#1B361F]/30 transition-all"
                placeholder="Enter product name..."
              />
            </section>

            {/* SLUG / URL */}
            <section className="bg-white rounded-[24px] p-8 border border-[#C2C9BB]/30 shadow-sm space-y-4">
              <label className="text-[11px] font-bold text-[#72796E] tracking-widest uppercase ml-1">Slug / URL</label>
              <div className="flex items-center">
                <div className="h-14 px-6 bg-[#E9EBE5] border border-r-0 border-[#C2C9BB]/30 rounded-l-2xl flex items-center text-xs font-bold text-[#72796E]">
                  temanpilah.com/product/
                </div>
                <input 
                  type="text" 
                  value={formData.slug}
                  onChange={(e) => setFormData({...formData, slug: e.target.value})}
                  className="flex-1 h-14 bg-[#F9FAF5] border border-[#C2C9BB]/30 rounded-r-2xl px-6 text-sm font-medium text-[#1B361F] outline-none focus:border-[#1B361F]/30 transition-all"
                  placeholder="new-product-slug"
                />
              </div>
            </section>

            {/* DESCRIPTION (EDITOR) */}
            <section className="bg-white rounded-[24px] p-8 border border-[#C2C9BB]/30 shadow-sm space-y-4">
              <label className="text-[11px] font-bold text-[#72796E] tracking-widest uppercase ml-1">Product Description</label>
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
                  <ToolbarButton icon={ImageIcon} />
                  <ToolbarButton icon={Code} />
                </div>
                {/* TEXTAREA */}
                <textarea 
                  value={formData.description}
                  onChange={(e) => setFormData({...formData, description: e.target.value})}
                  className="w-full min-h-[300px] p-6 bg-white text-sm font-medium text-[#42493E] leading-relaxed outline-none resize-none"
                  placeholder="Start writing your product description here..."
                />
              </div>
            </section>

            {/* OVERVIEW */}
            <section className="bg-white rounded-[24px] p-8 border border-[#C2C9BB]/30 shadow-sm space-y-4">
              <label className="text-[11px] font-bold text-[#72796E] tracking-widest uppercase ml-1">Product Overview</label>
              <textarea 
                value={formData.overview}
                onChange={(e) => setFormData({...formData, overview: e.target.value})}
                className="w-full h-32 p-6 bg-[#F9FAF5] border border-[#C2C9BB]/30 rounded-2xl text-sm font-medium text-[#42493E] outline-none focus:border-[#1B361F]/30 transition-all resize-none"
                placeholder="Write a short overview of the product..."
              />
            </section>
          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-8">
            {/* IMAGE */}
            <section className="bg-white rounded-[24px] p-8 border border-[#C2C9BB]/30 shadow-sm space-y-4">
              <label className="text-[11px] font-bold text-[#72796E] tracking-widest uppercase ml-1">Product Image</label>
              <div className="relative aspect-square bg-[#F9FAF5] rounded-2xl border-2 border-dashed border-[#C2C9BB]/30 flex flex-col items-center justify-center gap-3 group cursor-pointer hover:bg-[#F3F4ED] transition-colors">
                <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center text-[#C2C9BB] group-hover:text-[#1B361F] transition-colors">
                  <ImageIcon size={24} />
                </div>
                <div className="text-center">
                  <p className="text-sm font-bold text-[#1B361F]">Click to upload or drag and drop</p>
                  <p className="text-[10px] font-medium text-[#72796E] mt-1">SVG, PNG, JPG or GIF (max. 10MB)</p>
                </div>
              </div>
            </section>

            {/* SETTINGS CARD */}
            <section className="bg-white rounded-[24px] p-8 border border-[#C2C9BB]/30 shadow-sm space-y-6">
              {/* CATEGORY */}
              <div className="space-y-3">
                <label className="text-[11px] font-bold text-[#72796E] tracking-widest uppercase ml-1">Program Category</label>
                <div className="relative">
                  <select 
                    value={formData.category}
                    onChange={(e) => setFormData({...formData, category: e.target.value})}
                    className="w-full h-14 bg-[#F9FAF5] border border-[#C2C9BB]/30 rounded-2xl px-6 text-sm font-medium text-[#1B361F] outline-none appearance-none cursor-pointer focus:border-[#1B361F]/30"
                  >
                    <option>Organic Product</option>
                    <option>Upcycled Goods</option>
                    <option>Zero Waste Gear</option>
                  </select>
                  <ChevronDown size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-[#72796E] pointer-events-none" />
                </div>
              </div>

              {/* STOCK STATUS */}
              <div className="space-y-3">
                <label className="text-[11px] font-bold text-[#72796E] tracking-widest uppercase ml-1">Stock Status</label>
                <div className="relative">
                  <select 
                    value={formData.stockStatus}
                    onChange={(e) => setFormData({...formData, stockStatus: e.target.value})}
                    className="w-full h-14 bg-[#F9FAF5] border border-[#C2C9BB]/30 rounded-2xl px-6 text-sm font-medium text-[#1B361F] outline-none appearance-none cursor-pointer focus:border-[#1B361F]/30"
                  >
                    <option>Available</option>
                    <option>Out of Stock</option>
                    <option>Pre-order</option>
                  </select>
                  <ChevronDown size={18} className="absolute right-6 top-1/2 -translate-y-1/2 text-[#72796E] pointer-events-none" />
                </div>
              </div>

              {/* PRICE */}
              <div className="space-y-3">
                <label className="text-[11px] font-bold text-[#72796E] tracking-widest uppercase ml-1">Product Price</label>
                <div className="flex items-center">
                  <div className="h-14 px-6 bg-[#E9EBE5] border border-r-0 border-[#C2C9BB]/30 rounded-l-2xl flex items-center text-sm font-bold text-[#72796E]">
                    Rp
                  </div>
                  <input 
                    type="number" 
                    value={formData.price}
                    onChange={(e) => setFormData({...formData, price: e.target.value})}
                    className="flex-1 h-14 bg-[#F9FAF5] border border-[#C2C9BB]/30 rounded-r-2xl px-6 text-sm font-medium text-[#1B361F] outline-none focus:border-[#1B361F]/30 transition-all font-mono"
                    placeholder="0"
                  />
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
