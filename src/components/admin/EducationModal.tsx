'use client';

import React, { useState, useEffect, useRef } from 'react';
import { Education } from '@/types';
import { getThumbnailUrl } from '@/lib/api/education';
import { ArrowLeft, Image as ImageIcon, Bold, Italic, Underline, List, ListOrdered, Quote, Link2, Code, X, AlignLeft, AlignCenter, AlignRight, AlignJustify } from 'lucide-react';
import { ConfirmModal } from '@/components/admin/ConfirmModal';

interface EducationModalProps {
  content: Education | null;
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: any) => void;
}

export function EducationModal({ content, isOpen, onClose, onSubmit }: EducationModalProps) {
  const [title, setTitle] = useState('');
  const [slug, setSlug] = useState('');
  const [description, setDescription] = useState('');
  const [overview, setOverview] = useState('');
  const [publishDate, setPublishDate] = useState('');
  
  const [tags, setTags] = useState<string[]>([]);
  const [tagInput, setTagInput] = useState('');

  const [imageFile, setImageFile] = useState<File | null>(null);
  const [imagePreview, setImagePreview] = useState<string>('');

  const [confirmModal, setConfirmModal] = useState<{
    isOpen: boolean;
    status: 'PUBLISHED' | 'DRAFT' | 'ERROR' | 'ERROR_FILE_SIZE' | null;
  }>({ isOpen: false, status: null });

  // Rich Text Editor State
  const editorRef = useRef<HTMLDivElement>(null);
  const [activeFormats, setActiveFormats] = useState<Record<string, boolean>>({});
  const [showLinkInput, setShowLinkInput] = useState(false);
  const [linkUrl, setLinkUrl] = useState('');
  const [savedRange, setSavedRange] = useState<Range | null>(null);

  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (!isOpen) return;

    if (content) {
      setTitle(content.title || '');
      setSlug(content.slug || '');
      setDescription(content.description || '');
      setOverview(content.overview || '');
      setTags(content.tags || []);
      setPublishDate(content.publishDate ? new Date(content.publishDate).toISOString().split('T')[0] : '');
      setImagePreview(content.thumbnail ? getThumbnailUrl(content.thumbnail) : '');
      setImageFile(null);
      
      if (editorRef.current) {
        editorRef.current.innerHTML = content.description || '';
      }
    } else {
      setTitle('');
      setSlug('');
      setDescription('');
      setOverview('');
      setTags([]);
      setPublishDate('');
      setImagePreview('');
      setImageFile(null);
      if (editorRef.current) {
        editorRef.current.innerHTML = '';
      }
    }
  }, [content, isOpen]);

  // Auto-generate slug from title if empty
  useEffect(() => {
    if (title && !content) {
      setSlug(title.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/(^-|-$)+/g, ''));
    }
  }, [title, content]);

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

  const updateActiveFormats = () => {
    const isJustifyCenter = document.queryCommandState('justifyCenter');
    const isJustifyRight = document.queryCommandState('justifyRight');
    const isJustifyFull = document.queryCommandState('justifyFull');
    const isJustifyLeft = document.queryCommandState('justifyLeft') || (!isJustifyCenter && !isJustifyRight && !isJustifyFull);

    setActiveFormats({
      bold: document.queryCommandState('bold'),
      italic: document.queryCommandState('italic'),
      underline: document.queryCommandState('underline'),
      insertUnorderedList: document.queryCommandState('insertUnorderedList'),
      insertOrderedList: document.queryCommandState('insertOrderedList'),
      formatBlock_BLOCKQUOTE: document.queryCommandValue('formatBlock') === 'blockquote',
      formatBlock_PRE: document.queryCommandValue('formatBlock') === 'pre',
      justifyLeft: isJustifyLeft,
      justifyCenter: isJustifyCenter,
      justifyRight: isJustifyRight,
      justifyFull: isJustifyFull,
    });
  };

  const handleFormat = (command: string, value?: string) => {
    document.execCommand(command, false, value);
    if (editorRef.current) {
      setDescription(editorRef.current.innerHTML);
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
        
        if (savedRange.collapsed) {
          document.execCommand('insertHTML', false, `<a href="${linkUrl}" target="_blank">${linkUrl}</a>`);
        } else {
          document.execCommand('createLink', false, linkUrl);
        }
      } else {
        document.execCommand('insertHTML', false, `<a href="${linkUrl}" target="_blank">${linkUrl}</a>`);
      }
      if (editorRef.current) setDescription(editorRef.current.innerHTML);
      updateActiveFormats();
    }
    setShowLinkInput(false);
    setSavedRange(null);
  };

  const handleInput = () => {
    if (editorRef.current) {
      setDescription(editorRef.current.innerHTML);
    }
    updateActiveFormats();
  };

  const handleTagKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter' || e.key === ',') {
      e.preventDefault();
      if (tagInput.trim() && !tags.includes(tagInput.trim())) {
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
    
    // Validation
    if (!title.trim() || !overview.trim() || !description.trim() || description.trim() === '<p><br></p>') {
      setConfirmModal({ isOpen: true, status: 'ERROR' });
      return;
    }

    setConfirmModal({ isOpen: true, status: submitStatus || 'PUBLISHED' });
  };

  const executeSubmit = () => {
    const finalTags = [...tags];
    if (tagInput.trim()) {
      const newTags = tagInput.split(' ').map(t => t.trim()).filter(Boolean);
      newTags.forEach(t => {
        if (!finalTags.includes(t)) finalTags.push(t);
      });
      setTagInput('');
    }

    const submitStatus = confirmModal.status;
    setConfirmModal({ isOpen: false, status: null });

    onSubmit({
      title,
      slug,
      description,
      overview,
      publishDate,
      tags: finalTags,
      imageFile,
      status: submitStatus === 'DRAFT' ? 'DRAFT' : 'PUBLISHED',
    });
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
          Back to Education Content
        </button>
        <h1 className="text-3xl font-serif font-bold text-[#2A3426] mt-6">
          {content ? 'Edit Content' : 'Add New Content'}
        </h1>
      </div>

      {/* SCROLLABLE CONTENT */}
      <div className="flex-1 overflow-y-auto px-12 pb-32">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* LEFT COLUMN */}
          <div className="lg:col-span-2 space-y-6">
            
            <div className="bg-white p-6 rounded-[20px] border border-[#F0F2EB] shadow-sm space-y-2">
              <label className="text-[13px] font-bold text-[#72796E]">Content Title</label>
              <input
                type="text"
                placeholder="Enter content title..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
                className="w-full h-12 px-4 rounded-[12px] bg-[#F9FAF8] border border-[#E5E7EB] text-[14px] text-[#2A3426] placeholder:text-[#A1A89A] focus:outline-none focus:border-[#27532B] focus:ring-1 focus:ring-[#27532B] transition-all"
              />
            </div>

            <div className="bg-white p-6 rounded-[20px] border border-[#F0F2EB] shadow-sm space-y-2">
              <label className="text-[13px] font-bold text-[#72796E]">Slug / URL</label>
              <div className="flex rounded-[12px] bg-[#F9FAF8] border border-[#E5E7EB] overflow-hidden focus-within:border-[#27532B] focus-within:ring-1 focus-within:ring-[#27532B] transition-all h-12">
                <div className="px-4 flex items-center bg-[#F0F2EB]/50 border-r border-[#E5E7EB] text-[#72796E] text-[14px]">
                  temanpilah.com/edukasi/
                </div>
                <input
                  type="text"
                  placeholder="new-content-slug"
                  value={slug}
                  onChange={(e) => {
                    const formatted = e.target.value
                      .toLowerCase()
                      .replace(/\s+/g, '-')
                      .replace(/[^a-z0-9-]/g, '')
                      .replace(/-+/g, '-'); // prevent consecutive hyphens
                    setSlug(formatted);
                  }}
                  className="flex-1 px-4 bg-transparent text-[14px] text-[#2A3426] placeholder:text-[#A1A89A] outline-none"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-[20px] border border-[#F0F2EB] shadow-sm space-y-2">
              <label className="text-[13px] font-bold text-[#72796E]">Content Description</label>
              <div className="border border-[#F0F2EB] rounded-[14px] overflow-hidden bg-[#F9FAF8] relative">
                <style>{`
                  .editor-content ul { list-style-type: disc !important; padding-left: 1.5rem !important; margin: 0.5rem 0 !important; }
                  .editor-content ol { list-style-type: decimal !important; padding-left: 1.5rem !important; margin: 0.5rem 0 !important; }
                  .editor-content blockquote { border-left: 3px solid #C2C9BB !important; padding-left: 1rem !important; color: #72796E !important; font-style: italic !important; margin: 0.5rem 0 !important; }
                  .editor-content a { color: #2D5A27 !important; text-decoration: underline !important; }
                  .editor-content[data-placeholder]:empty:before {
                    content: attr(data-placeholder);
                    color: #A1A89A;
                    pointer-events: none;
                    display: block;
                  }
                `}</style>
                <div className="flex items-center gap-1 border-b border-[#E5E7EB] px-3 py-2 bg-[#F3F4EF] relative">
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
                <div
                  ref={editorRef}
                  contentEditable
                  onInput={handleInput}
                  onKeyUp={updateActiveFormats}
                  onMouseUp={updateActiveFormats}
                  data-placeholder="Start writing your educational content here..."
                  className="editor-content w-full p-4 min-h-[300px] text-[14px] text-[#2A3426] focus:outline-none"
                />
              </div>
            </div>

            <div className="bg-white p-6 rounded-[20px] border border-[#F0F2EB] shadow-sm space-y-2">
              <label className="text-[13px] font-bold text-[#72796E]">Content Overview</label>
              <textarea
                placeholder="Write a short overview of the content..."
                value={overview}
                onChange={(e) => setOverview(e.target.value)}
                className="w-full p-4 rounded-[12px] bg-[#F9FAF8] border border-[#E5E7EB] text-[14px] text-[#2A3426] placeholder:text-[#A1A89A] focus:outline-none focus:border-[#27532B] focus:ring-1 focus:ring-[#27532B] transition-all resize-none min-h-[140px]"
              />
            </div>

          </div>

          {/* RIGHT COLUMN */}
          <div className="space-y-6">
            
            {/* Thumbnail */}
            <div className="bg-white p-6 rounded-[20px] border border-[#F0F2EB] shadow-sm space-y-2">
              <label className="text-[13px] font-bold text-[#72796E]">Content Thumbnail</label>
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
                      <span className="text-white text-[13px] font-medium">Change Image</span>
                    </div>
                  </>
                ) : (
                  <div className="text-center px-4">
                    <div className="mb-3 mx-auto flex h-12 w-12 items-center justify-center rounded-full bg-white shadow-sm border border-[#F0F2EB]">
                      <ImageIcon className="h-6 w-6 text-[#A1A89A]" />
                    </div>
                    <p className="text-[13px] font-bold text-[#2A3426] mb-1">
                      Click to upload or drag and drop
                    </p>
                    <p className="text-[11px] text-[#A1A89A]">
                      SVG, PNG, JPG or GIF (max. 2MB)
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Date & Tags */}
            <div className="bg-white p-6 rounded-[20px] border border-[#F0F2EB] shadow-sm space-y-6">
              
              <div className="space-y-2">
                <label className="text-[13px] font-bold text-[#72796E]">Publish Date</label>
                <input
                  type="date"
                  value={publishDate}
                  onChange={(e) => setPublishDate(e.target.value)}
                  className="w-full h-12 px-4 rounded-[12px] bg-[#F9FAF8] border border-[#E5E7EB] text-[14px] text-[#2A3426] placeholder:text-[#A1A89A] focus:outline-none focus:border-[#27532B] focus:ring-1 focus:ring-[#27532B] transition-all"
                />
              </div>

              <div className="space-y-2">
                <label className="text-[13px] font-bold text-[#72796E]">Tags</label>
                <input
                  type="text"
                  placeholder="Recycling, Education..."
                  value={tagInput}
                  onChange={(e) => setTagInput(e.target.value)}
                  onKeyDown={handleTagKeyDown}
                  className="w-full h-12 px-4 rounded-[12px] bg-[#F9FAF8] border border-[#E5E7EB] text-[14px] text-[#2A3426] placeholder:text-[#A1A89A] focus:outline-none focus:border-[#27532B] focus:ring-1 focus:ring-[#27532B] transition-all"
                />
                
                {/* Tags Badges */}
                <div className="flex flex-wrap gap-2 mt-3">
                  {tags.map((tag, index) => (
                    <span 
                      key={index} 
                      className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-[12px] font-bold ${
                        index % 2 === 0 ? 'bg-[#BBF7D0] text-[#166534]' : 'bg-[#FED7AA] text-[#9A3412]'
                      }`}
                    >
                      {tag}
                      <button 
                        type="button" 
                        onClick={() => removeTag(tag)}
                        className="hover:opacity-70 transition-opacity"
                      >
                        <X size={12} strokeWidth={3} />
                      </button>
                    </span>
                  ))}
                </div>
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
          {!content && (
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
            {content ? 'Save Changes' : 'Publish'}
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
            ? "Incomplete Data"
            : confirmModal.status === 'ERROR_FILE_SIZE'
            ? "File Too Large"
            : (content ? "Save Changes?" : "Add New Content?")
        }
        message={
          confirmModal.status === 'ERROR'
            ? "Please fill in all required fields (Title and Description) before saving."
            : confirmModal.status === 'ERROR_FILE_SIZE'
            ? "The uploaded file exceeds the 2MB size limit. Please upload an image smaller than 2MB."
            : content 
            ? `Are you sure you want to save changes to "${title || 'this content'}"?`
            : `Are you sure you want to Add "${title || 'this content'}"? This action cannot be undone.`
        }
        confirmText={
          confirmModal.status === 'ERROR' || confirmModal.status === 'ERROR_FILE_SIZE'
            ? "OK"
            : (content ? "Save Changes" : "Add New Content")
        }
      />
    </div>
  );
}
