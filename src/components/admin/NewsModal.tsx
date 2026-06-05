'use client';

import { getBaseUrl } from '../../lib/api-config';
import React, { useState, useEffect } from 'react';
import { News } from '@/types';
import { X, ArrowLeft, Bold, Italic, Underline, List, ListOrdered, Quote, Link2, Image as ImageIcon, AlignLeft, AlignCenter, AlignRight, AlignJustify } from 'lucide-react';
import { ConfirmModal } from './ConfirmModal';

interface NewsModalProps {
  news: News | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

const BASE_URL = getBaseUrl();

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
  const [partnership, setPartnership] = useState('');
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [savedRange, setSavedRange] = useState<Range | null>(null);
  const [activeFormats, setActiveFormats] = useState<Record<string, boolean>>({});
  const [confirmModal, setConfirmModal] = useState<{
    isOpen: boolean;
    status: 'PUBLISHED' | 'DRAFT' | 'ERROR' | 'ERROR_FILE_SIZE' | null;
  }>({ isOpen: false, status: null });
  
  const editorRef = React.useRef<HTMLDivElement>(null);

  const updateActiveFormats = () => {
    if (!editorRef.current) return;
    const formats = {
      bold: document.queryCommandState('bold'),
      italic: document.queryCommandState('italic'),
      underline: document.queryCommandState('underline'),
      insertUnorderedList: document.queryCommandState('insertUnorderedList'),
      insertOrderedList: document.queryCommandState('insertOrderedList'),
    };
    
    // Check for blockquote and pre (Code block) using queryCommandValue or by checking parent node
    let isBlockquote = false;
    let isPre = false;
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      let node = selection.anchorNode;
      while (node && node !== editorRef.current) {
        if (node.nodeName === 'BLOCKQUOTE') isBlockquote = true;
        if (node.nodeName === 'PRE') isPre = true;
        node = node.parentNode;
      }
    }
    
    const isJustifyCenter = document.queryCommandState('justifyCenter');
    const isJustifyRight = document.queryCommandState('justifyRight');
    const isJustifyFull = document.queryCommandState('justifyFull');
    const isJustifyLeft = document.queryCommandState('justifyLeft') || (!isJustifyCenter && !isJustifyRight && !isJustifyFull);

    setActiveFormats({
      ...formats,
      formatBlock_BLOCKQUOTE: isBlockquote,
      formatBlock_PRE: isPre,
      justifyLeft: isJustifyLeft,
      justifyCenter: isJustifyCenter,
      justifyRight: isJustifyRight,
      justifyFull: isJustifyFull,
    });
  };

  useEffect(() => {
    if (!isOpen) return;

    if (news) {
      setTitle(news.title || '');
      setSlug(news.slug || '');
      setSummary(news.summary || '');
      setContent(news.content || '');
      setCategory(news.category || 'Edukasi');
      setPartnership(news.partnership || '');
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
      setPartnership('');
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

  // Sync editor content when modal opens or news changes
  useEffect(() => {
    if (editorRef.current) {
      if (editorRef.current.innerHTML !== content) {
        editorRef.current.innerHTML = content;
      }
    }
  }, [isOpen, news]);

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (file.size > 2 * 1024 * 1024) {
      setConfirmModal({ isOpen: true, status: 'ERROR_FILE_SIZE' });
      e.target.value = ''; // Clear selection
      return;
    }

    setImageFile(file);
    setImagePreview(URL.createObjectURL(file));
  };

  const handleTagInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    if (value.includes(' ')) {
      const newTags = value.split(' ').map(t => t.trim()).filter(Boolean);
      const updatedTags = [...tags];
      let added = false;
      newTags.forEach(t => {
        if (!updatedTags.includes(t)) {
          updatedTags.push(t);
          added = true;
        }
      });
      if (added) setTags(updatedTags);
      setTagInput('');
    } else {
      setTagInput(value);
    }
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

  const handlePreSubmit = (e: React.FormEvent, submitStatus?: 'PUBLISHED' | 'DRAFT') => {
    e.preventDefault();
    
    // Basic validation for required fields
    if (!title.trim() || !slug.trim() || !content.trim() || content.trim() === '<p><br></p>') {
      setConfirmModal({ isOpen: true, status: 'ERROR' });
      return;
    }

    setConfirmModal({ isOpen: true, status: submitStatus || status as 'PUBLISHED' | 'DRAFT' });
  };

  const executeSubmit = (submitStatus: 'PUBLISHED' | 'DRAFT') => {
    // Process any remaining text in tagInput as space-separated tags
    const finalTags = [...tags];
    if (tagInput.trim()) {
      const newTags = tagInput.split(' ').map(t => t.trim()).filter(Boolean);
      newTags.forEach(t => {
        if (!finalTags.includes(t)) finalTags.push(t);
      });
      // Optionally reset it, though modal will close
      setTagInput('');
    }

    setConfirmModal({ isOpen: false, status: null });

    onSubmit({
      title,
      slug,
      summary,
      content,
      category,
      status: submitStatus,
      tags: finalTags,
      publishDate: startDate,
      endDate: endDate || undefined,
      partnership: partnership || undefined,
      imageFile,
    });
  };

  const handleFormat = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    if (editorRef.current) {
      setContent(editorRef.current.innerHTML);
    }
    updateActiveFormats();
  };

  const handleLinkClick = () => {
    const selection = window.getSelection();
    if (selection && selection.rangeCount > 0) {
      setSavedRange(selection.getRangeAt(0));
    }
    setShowLinkInput(!showLinkInput);
    setLinkUrl('');
  };

  const handleLinkSubmit = () => {
    if (linkUrl) {
      editorRef.current?.focus();
      if (savedRange) {
        const selection = window.getSelection();
        selection?.removeAllRanges();
        selection?.addRange(savedRange);
        
        // If selection is collapsed (no text selected), insert the URL as text
        if (savedRange.collapsed) {
          document.execCommand('insertHTML', false, `<a href="${linkUrl}" target="_blank">${linkUrl}</a>`);
        } else {
          document.execCommand('createLink', false, linkUrl);
        }
      } else {
        // Fallback if no range was saved
        document.execCommand('insertHTML', false, `<a href="${linkUrl}" target="_blank">${linkUrl}</a>`);
      }
      if (editorRef.current) setContent(editorRef.current.innerHTML);
      updateActiveFormats();
    }
    setShowLinkInput(false);
    setSavedRange(null);
  };

  const handleInput = () => {
    if (editorRef.current) {
      setContent(editorRef.current.innerHTML);
    }
    updateActiveFormats();
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
                    <span className="text-[13px] font-medium text-[#72796E]">temanpilah.com/program/</span>
                  </div>
                  <input
                    type="text"
                    placeholder="new-program-slug"
                    className="flex-1 px-4 py-3 bg-[#F9FAF8] text-[14px] text-[#2A3426] focus:outline-none"
                    value={slug}
                    onChange={(e) => {
                      const formatted = e.target.value
                        .toLowerCase()
                        .replace(/\s+/g, '-')
                        .replace(/[^a-z0-9-]/g, '')
                        .replace(/-+/g, '-'); // prevent consecutive hyphens
                      setSlug(formatted);
                    }}
                  />
                </div>
              </div>
            </div>

            {/* Program Description */}
            <div className="bg-white p-6 rounded-[20px] border border-[#F0F2EB] shadow-sm space-y-2">
              <label className="text-[13px] font-bold text-[#72796E]">Program Description</label>
              
              <div className="border border-[#F0F2EB] rounded-[14px] overflow-hidden bg-[#F9FAF8] relative">
                <style>{`
                  .editor-content ul { list-style-type: disc !important; padding-left: 1.5rem !important; margin: 0.5rem 0 !important; }
                  .editor-content ol { list-style-type: decimal !important; padding-left: 1.5rem !important; margin: 0.5rem 0 !important; }
                  .editor-content blockquote { border-left: 3px solid #C2C9BB !important; padding-left: 1rem !important; color: #72796E !important; font-style: italic !important; margin: 0.5rem 0 !important; }
                  .editor-content a { color: #2D5A27 !important; text-decoration: underline !important; }
                `}</style>
                {/* Editor Toolbar */}
                <div className="flex items-center gap-1 border-b border-[#F0F2EB] px-3 py-2 bg-[#F3F4EF] relative">
                  <button type="button" onClick={() => handleFormat('bold')} className={`p-1.5 rounded transition-colors ${activeFormats.bold ? 'bg-[#2D5A27] text-white' : 'text-[#42493E] hover:bg-white'}`}><Bold size={16} strokeWidth={2.5} /></button>
                  <button type="button" onClick={() => handleFormat('italic')} className={`p-1.5 rounded transition-colors ${activeFormats.italic ? 'bg-[#2D5A27] text-white' : 'text-[#42493E] hover:bg-white'}`}><Italic size={16} strokeWidth={2.5} /></button>
                  <button type="button" onClick={() => handleFormat('underline')} className={`p-1.5 rounded transition-colors ${activeFormats.underline ? 'bg-[#2D5A27] text-white' : 'text-[#42493E] hover:bg-white'}`}><Underline size={16} strokeWidth={2.5} /></button>
                  <div className="w-px h-4 bg-[#D6D9D2] mx-1"></div>
                  <button type="button" onClick={() => handleFormat('insertUnorderedList')} className={`p-1.5 rounded transition-colors ${activeFormats.insertUnorderedList ? 'bg-[#2D5A27] text-white' : 'text-[#42493E] hover:bg-white'}`}><List size={16} strokeWidth={2.5} /></button>
                  <button type="button" onClick={() => handleFormat('insertOrderedList')} className={`p-1.5 rounded transition-colors ${activeFormats.insertOrderedList ? 'bg-[#2D5A27] text-white' : 'text-[#42493E] hover:bg-white'}`}><ListOrdered size={16} strokeWidth={2.5} /></button>
                  <button type="button" onClick={() => handleFormat('formatBlock', 'BLOCKQUOTE')} className={`p-1.5 rounded transition-colors ${activeFormats.formatBlock_BLOCKQUOTE ? 'bg-[#2D5A27] text-white' : 'text-[#42493E] hover:bg-white'}`}><Quote size={16} strokeWidth={2.5} /></button>
                  <div className="w-px h-4 bg-[#D6D9D2] mx-1"></div>
                  
                  <div className="relative">
                    <button type="button" onClick={handleLinkClick} className="p-1.5 text-[#42493E] hover:bg-white rounded"><Link2 size={16} strokeWidth={2.5} /></button>
                    {showLinkInput && (
                      <div className="absolute top-full left-0 mt-2 w-96 bg-white border border-[#F0F2EB] rounded-xl shadow-lg p-3 z-50 flex gap-2">
                        <input
                          type="url"
                          placeholder="https://..."
                          className="flex-1 bg-[#F9FAF8] border border-[#F0F2EB] rounded-lg px-3 py-1.5 text-[13px] text-[#2A3426] focus:outline-none"
                          value={linkUrl}
                          onChange={(e) => setLinkUrl(e.target.value)}
                          autoFocus
                          onKeyDown={(e) => e.key === 'Enter' && handleLinkSubmit()}
                        />
                        <button type="button" onClick={handleLinkSubmit} className="bg-[#2D5A27] text-white px-3 rounded-lg text-[12px] font-bold hover:brightness-110">Add</button>
                      </div>
                    )}
                  </div>

                  <button type="button" onClick={() => handleFormat('justifyLeft')} className={`p-1.5 rounded transition-colors ${activeFormats.justifyLeft ? 'bg-[#2D5A27] text-white' : 'text-[#42493E] hover:bg-white'}`} title="Rata Kiri"><AlignLeft size={16} strokeWidth={2.5} /></button>
                  <button type="button" onClick={() => handleFormat('justifyCenter')} className={`p-1.5 rounded transition-colors ${activeFormats.justifyCenter ? 'bg-[#2D5A27] text-white' : 'text-[#42493E] hover:bg-white'}`} title="Rata Tengah"><AlignCenter size={16} strokeWidth={2.5} /></button>
                  <button type="button" onClick={() => handleFormat('justifyRight')} className={`p-1.5 rounded transition-colors ${activeFormats.justifyRight ? 'bg-[#2D5A27] text-white' : 'text-[#42493E] hover:bg-white'}`} title="Rata Kanan"><AlignRight size={16} strokeWidth={2.5} /></button>
                  <button type="button" onClick={() => handleFormat('justifyFull')} className={`p-1.5 rounded transition-colors ${activeFormats.justifyFull ? 'bg-[#2D5A27] text-white' : 'text-[#42493E] hover:bg-white'}`} title="Justify"><AlignJustify size={16} strokeWidth={2.5} /></button>
                </div>
                {/* Editor Content */}
                <div
                  ref={editorRef}
                  className="w-full min-h-[300px] p-4 bg-transparent text-[14px] text-[#2A3426] focus:outline-none overflow-y-auto editor-content"
                  contentEditable
                  suppressContentEditableWarning
                  onInput={handleInput}
                  onMouseUp={updateActiveFormats}
                  onKeyUp={updateActiveFormats}
                  style={{ minHeight: '300px' }}
                />
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
                    <p className="text-[11px] text-[#8F9A8A] mt-1">SVG, PNG, JPG or GIF (max. 2MB)</p>
                  </>
                )}
              </div>
            </div>

            {/* Details */}
            <div className="bg-white p-6 rounded-[20px] border border-[#F0F2EB] shadow-sm space-y-5">
              
              <div className="space-y-2">
                <label className="text-[13px] font-bold text-[#72796E]">Partnership</label>
                <input
                  type="text"
                  placeholder="Input the partner collaborating in the program."
                  className="w-full h-11 px-4 bg-[#F9FAF8] border border-[#F0F2EB] rounded-[14px] text-[14px] text-[#2A3426] focus:outline-none focus:border-[#c2c9bb]"
                  value={partnership}
                  onChange={(e) => setPartnership(e.target.value)}
                />
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
                  placeholder="Recycling Education..."
                  className="w-full h-11 px-4 bg-[#F9FAF8] border border-[#F0F2EB] rounded-[14px] text-[14px] text-[#2A3426] focus:outline-none"
                  value={tagInput}
                  onChange={handleTagInput}
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
          className="px-6 py-2.5 rounded-[12px] border border-[#F0F2EB] text-[#D05B5B] font-bold text-[13px] hover:bg-red-50 transition-all duration-200 active:scale-95"
        >
          Cancel Changes
        </button>

        <div className="flex items-center gap-4">
          {!news && (
            <button
              type="button"
              onClick={(e) => handlePreSubmit(e, 'DRAFT')}
              className="px-6 py-2.5 rounded-[12px] border border-[#F0F2EB] text-[#2A3426] font-bold text-[13px] hover:bg-gray-50 transition-all duration-200 active:scale-95"
            >
              Save Draft
            </button>
          )}
          <button
            type="button"
            onClick={(e) => handlePreSubmit(e, 'PUBLISHED')}
            className="px-8 py-2.5 rounded-[12px] bg-[#8C5A00] text-white font-bold text-[13px] hover:brightness-110 transition-all duration-200 shadow-sm active:scale-95"
          >
            {news ? 'Save Changes' : 'Publish'}
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
          } else if (confirmModal.status) {
            executeSubmit(confirmModal.status as 'PUBLISHED' | 'DRAFT');
          }
        }}
        title={
          confirmModal.status === 'ERROR'
            ? "Incomplete Data"
            : confirmModal.status === 'ERROR_FILE_SIZE'
            ? "File Too Large"
            : (news ? "Save Changes?" : "Add New Program?")
        }
        message={
          confirmModal.status === 'ERROR'
            ? "Please fill in all required fields (Program Title, Slug, and Description) before saving."
            : confirmModal.status === 'ERROR_FILE_SIZE'
            ? "The uploaded file exceeds the 2MB size limit. Please upload an image smaller than 2MB."
            : news 
            ? `Are you sure you want to save changes to "${title || 'this program'}"?`
            : `Are you sure you want to Add "${title || 'this program'}"? This action cannot be undone.`
        }
        confirmText={
          confirmModal.status === 'ERROR' || confirmModal.status === 'ERROR_FILE_SIZE'
            ? "OK"
            : (news ? "Save Changes" : "Add New Program")
        }
      />
    </div>
  );
}