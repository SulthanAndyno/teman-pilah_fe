'use client';

import React, { useState, useEffect } from 'react';
import { News } from '@/types';
import { X, ArrowLeft, Bold, Italic, Underline, List, ListOrdered, Quote, Link2, Image as ImageIcon, Code } from 'lucide-react';

interface NewsModalProps {
  news: News | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:2000';

export function NewsModal({ news, isOpen, onClose, onSubmit }: NewsModalProps) {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [summary, setSummary] = useState('');
  const [content, setContent] = useState('');
  const [category, setCategory] = useState('Edukasi');
  const [status, setStatus] = useState<'PUBLISHED' | 'DRAFT' | 'ARCHIVED'>('PUBLISHED');
  const [startDate, setStartDate] = useState('');
  const [endDate, setEndDate] = useState('');
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');
  const [imagePreview, setImagePreview] = useState('');
  const [imageFile, setImageFile] = useState<File | null>(null);

  useEffect(() => {
    if (!isOpen) return;

    if (news) {
      setTitle(news.title || '');
      setSlug(news.slug || '');
      setSummary(news.summary || '');
      setContent(news.content || '');
      setCategory(news.category || 'Edukasi');
      setStatus((news.status as 'PUBLISHED' | 'DRAFT' | 'ARCHIVED') || 'PUBLISHED');
      setStartDate(news.publishDate ? news.publishDate.substring(0, 10) : '');
      setTags(news.tags || []);
      setImagePreview(news.imageUrl ? `${BASE_URL}/${news.imageUrl}` : '');
      setImageFile(null);
    } else {
      setTitle('');
      setSlug('');
      setSummary('');
      setContent('');
      setCategory('Edukasi');
      setStatus('PUBLISHED');
      setStartDate('');
      setEndDate('');
      setTags([]);
      setImagePreview('');
      setImageFile(null);
    }
  }, [news, isOpen]);

  // Auto-generate slug from title if empty
  useEffect(() => {
    if (title && !news) {
      setSlug(title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''));
    }
  }, [title, news]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleAddTag = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' && tagInput.trim()) {
      e.preventDefault();
      if (!tags.includes(tagInput.trim())) {
        setTags([...tags, tagInput.trim()]);
      }
      setTagInput('');
    }
  };

  const removeTag = (tagToRemove: string) => {
    setTags(tags.filter(tag => tag !== tagToRemove));
  };

  const handleSubmit = (e: React.FormEvent, submitStatus?: 'PUBLISHED' | 'DRAFT') => {
    e.preventDefault();
    
    // Use the explicit status if provided (by Save Draft / Publish buttons), otherwise use state
    const finalStatus = submitStatus || status;

    onSubmit({
      title,
      slug,
      summary,
      content,
      category,
      status: finalStatus,
      tags,
      publishDate: startDate,
      imageFile,
    });
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col bg-[#F9FAF8] overflow-hidden">
      {/* HEADER BAR */}
      <div className="flex-none px-12 py-6">
        <button 
          onClick={onClose}
          className="flex items-center text-[13px] font-medium text-[#72796E] hover:text-[#2A3426] transition-colors"
        >
          <ArrowLeft size={16} className="mr-2" />
          Back to Programs Management
        </button>
        <h1 className="text-3xl font-serif font-bold text-[#2A3426] mt-6">
          {news ? 'Edit Program' : 'Add New Program'}
        </h1>
      </div>

      {/* SCROLLABLE CONTENT */}
      <div className="flex-1 overflow-y-auto px-12 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* LEFT COLUMN (Forms) */}
          <div className="lg:col-span-2 space-y-6">
            
            {/* Title & Slug */}
            <div className="bg-white p-6 rounded-[20px] border border-[#F0F2EB] shadow-sm space-y-6">
              <div className="space-y-2">
                <label className="text-[13px] font-bold text-[#72796E]">Program Title</label>
                <input
                  type="text"
                  placeholder="Enter program title..."
                  className="w-full px-4 py-3 bg-[#F9FAF8] border border-[#F0F2EB] rounded-[14px] text-[14px] text-[#2A3426] focus:outline-none focus:border-[#c2c9bb]"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-bold text-[#72796E]">Slug / URL</label>
                <div className="flex w-full overflow-hidden rounded-[14px] border border-[#F0F2EB]">
                  <div className="bg-[#F3F4EF] px-4 py-3 flex items-center justify-center border-r border-[#F0F2EB]">
                    <span className="text-[13px] font-medium text-[#72796E]">temanpilah.com/programs/</span>
                  </div>
                  <input
                    type="text"
                    placeholder="new-program-slug"
                    className="flex-1 px-4 py-3 bg-[#F9FAF8] text-[14px] text-[#2A3426] focus:outline-none"
                    value={slug}
                    onChange={(e) => setSlug(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Program Description */}
            <div className="bg-white p-6 rounded-[20px] border border-[#F0F2EB] shadow-sm space-y-2">
              <label className="text-[13px] font-bold text-[#72796E]">Program Description</label>
              
              <div className="border border-[#F0F2EB] rounded-[14px] overflow-hidden bg-[#F9FAF8]">
                {/* Editor Toolbar Mock */}
                <div className="flex items-center gap-1 border-b border-[#F0F2EB] px-3 py-2 bg-[#F3F4EF]">
                  <button type="button" className="p-1.5 text-[#42493E] hover:bg-white rounded"><Bold size={16} strokeWidth={2.5} /></button>
                  <button type="button" className="p-1.5 text-[#42493E] hover:bg-white rounded"><Italic size={16} strokeWidth={2.5} /></button>
                  <button type="button" className="p-1.5 text-[#42493E] hover:bg-white rounded"><Underline size={16} strokeWidth={2.5} /></button>
                  <div className="w-px h-4 bg-[#D6D9D2] mx-1"></div>
                  <button type="button" className="p-1.5 text-[#42493E] hover:bg-white rounded"><List size={16} strokeWidth={2.5} /></button>
                  <button type="button" className="p-1.5 text-[#42493E] hover:bg-white rounded"><ListOrdered size={16} strokeWidth={2.5} /></button>
                  <button type="button" className="p-1.5 text-[#42493E] hover:bg-white rounded"><Quote size={16} strokeWidth={2.5} /></button>
                  <div className="w-px h-4 bg-[#D6D9D2] mx-1"></div>
                  <button type="button" className="p-1.5 text-[#42493E] hover:bg-white rounded"><Link2 size={16} strokeWidth={2.5} /></button>
                  <button type="button" className="p-1.5 text-[#42493E] hover:bg-white rounded"><ImageIcon size={16} strokeWidth={2.5} /></button>
                  <button type="button" className="p-1.5 text-[#42493E] hover:bg-white rounded"><Code size={16} strokeWidth={2.5} /></button>
                </div>
                {/* Editor Content */}
                <textarea
                  placeholder="Start writing your program content here..."
                  className="w-full min-h-[300px] p-4 bg-transparent resize-none text-[14px] text-[#2A3426] focus:outline-none"
                  value={content}
                  onChange={(e) => setContent(e.target.value)}
                ></textarea>
              </div>
            </div>

            {/* Program Overview */}
            <div className="bg-white p-6 rounded-[20px] border border-[#F0F2EB] shadow-sm space-y-2">
              <label className="text-[13px] font-bold text-[#72796E]">Program Overview</label>
              <textarea
                placeholder="Write a short overview of the program..."
                className="w-full min-h-[100px] px-4 py-3 bg-[#F9FAF8] border border-[#F0F2EB] rounded-[14px] resize-none text-[14px] text-[#2A3426] focus:outline-none focus:border-[#c2c9bb]"
                value={summary}
                onChange={(e) => setSummary(e.target.value)}
              ></textarea>
            </div>

          </div>

          {/* RIGHT COLUMN (Settings) */}
          <div className="lg:col-span-1 space-y-6">
            
            {/* Image Upload */}
            <div className="bg-white p-6 rounded-[20px] border border-[#F0F2EB] shadow-sm space-y-4">
              <label className="text-[13px] font-bold text-[#72796E]">Program Banner</label>
              
              <div className="relative border-2 border-dashed border-[#D6D9D2] rounded-[16px] p-8 flex flex-col items-center justify-center text-center hover:bg-gray-50 transition-colors group overflow-hidden">
                <input
                  type="file"
                  accept="image/*"
                  onChange={handleImageChange}
                  className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                />
                
                {imagePreview ? (
                  <img src={imagePreview} alt="Preview" className="absolute inset-0 w-full h-full object-cover" />
                ) : (
                  <>
                    <div className="w-12 h-12 bg-[#F3F4EF] rounded-full flex items-center justify-center mb-3 text-[#8F9A8A] group-hover:scale-110 transition-transform">
                      <ImageIcon size={24} />
                    </div>
                    <p className="text-[13px] font-bold text-[#2A3426]">Click to upload or drag and drop</p>
                    <p className="text-[11px] text-[#8F9A8A] mt-1">SVG, PNG, JPG or GIF (max. 10MB)</p>
                  </>
                )}
              </div>
            </div>

            {/* Details */}
            <div className="bg-white p-6 rounded-[20px] border border-[#F0F2EB] shadow-sm space-y-5">
              
              <div className="space-y-2">
                <label className="text-[13px] font-bold text-[#72796E]">Program Status</label>
                <select
                  className="w-full h-11 px-4 bg-[#F9FAF8] border border-[#F0F2EB] rounded-[14px] text-[14px] text-[#2A3426] focus:outline-none appearance-none"
                  value={status}
                  onChange={(e) => setStatus(e.target.value as 'PUBLISHED' | 'DRAFT' | 'ARCHIVED')}
                >
                  <option value="PUBLISHED">Published</option>
                  <option value="DRAFT">Draft / Upcoming</option>
                  <option value="ARCHIVED">Completed / Archived</option>
                </select>
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-bold text-[#72796E]">Program Start Date</label>
                <input
                  type="date"
                  className="w-full h-11 px-4 bg-[#F9FAF8] border border-[#F0F2EB] rounded-[14px] text-[14px] text-[#2A3426] focus:outline-none"
                  value={startDate}
                  onChange={(e) => setStartDate(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-bold text-[#72796E]">Program End Date</label>
                <input
                  type="date"
                  className="w-full h-11 px-4 bg-[#F9FAF8] border border-[#F0F2EB] rounded-[14px] text-[14px] text-[#2A3426] focus:outline-none"
                  value={endDate}
                  onChange={(e) => setEndDate(e.target.value)}
                />
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-bold text-[#72796E]">Tags</label>
                <input
                  type="text"
                  placeholder="Recycling, Education..."
                  className="w-full h-11 px-4 bg-[#F9FAF8] border border-[#F0F2EB] rounded-[14px] text-[14px] text-[#2A3426] focus:outline-none"
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={handleAddTag}
                />
                {tags.length > 0 && (
                  <div className="flex flex-wrap gap-2 mt-3">
                    {tags.map((tag, idx) => (
                      <div key={idx} className="flex items-center gap-1.5 bg-[#E2F5EB] text-[#166534] px-3 py-1 rounded-full text-[12px] font-medium">
                        {tag}
                        <button type="button" onClick={() => removeTag(tag)} className="hover:text-red-600">
                          <X size={12} />
                        </button>
                      </div>
                    ))}
                  </div>
                )}
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
          className="px-6 py-2.5 rounded-[12px] border border-[#F0F2EB] text-[#D05B5B] font-bold text-[13px] hover:bg-red-50 transition-colors"
        >
          Cancel Changes
        </button>

        <div className="flex items-center gap-4">
          <button
            type="button"
            onClick={(e) => handleSubmit(e, 'DRAFT')}
            className="px-6 py-2.5 rounded-[12px] border border-[#F0F2EB] text-[#2A3426] font-bold text-[13px] hover:bg-gray-50 transition-colors"
          >
            Save Draft
          </button>
          <button
            type="button"
            onClick={(e) => handleSubmit(e, 'PUBLISHED')}
            className="px-8 py-2.5 rounded-[12px] bg-[#8C5A00] text-white font-bold text-[13px] hover:brightness-110 transition-colors shadow-sm"
          >
            Publish
          </button>
        </div>
      </div>
    </div>
  );
}