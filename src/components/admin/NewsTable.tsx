'use client';

import { News } from '@/types';
import { Eye, Edit2, Trash2, ChevronLeft, ChevronRight } from 'lucide-react';

interface NewsTableProps {
  newsList: News[];
  onEdit: (news: News) => void;
  onDelete: (news: News) => void;
}

const getStatusStyles = (status: string) => {
  switch (status) {
    case 'PUBLISHED':
      return {
        label: 'Ongoing',
        bgClass: 'bg-[#e2f5eb]',
        dotClass: 'bg-[#21c55d]',
        textClass: 'text-[#166534]',
      };
    case 'DRAFT':
      return {
        label: 'Upcoming',
        bgClass: 'bg-[#fff3e0]',
        dotClass: 'bg-[#f97316]',
        textClass: 'text-[#c2410c]',
      };
    case 'ARCHIVED':
      return {
        label: 'Completed',
        bgClass: 'bg-[#f1f5f9]',
        dotClass: 'bg-[#94a3b8]',
        textClass: 'text-[#475569]',
      };
    default:
      return {
        label: 'Ongoing',
        bgClass: 'bg-[#e2f5eb]',
        dotClass: 'bg-[#21c55d]',
        textClass: 'text-[#166534]',
      };
  }
};

const formatDate = (dateString: string | undefined) => {
  if (!dateString) return '-';
  const date = new Date(dateString);
  return date.toLocaleDateString('en-GB', {
    day: '2-digit',
    month: 'short',
    year: 'numeric'
  }).replace(/ /g, ' ').replace(',', ','); // Example: 12 Oct, 2023
};

const EyeIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"></path>
    <circle cx="12" cy="12" r="3"></circle>
  </svg>
);

const PencilIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M12 20h9"></path>
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"></path>
  </svg>
);

const TrashIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#9ca3af" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polyline points="3 6 5 6 21 6"></polyline>
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
  </svg>
);

import { useState } from 'react';

export function NewsTable({ newsList, onEdit, onDelete }: NewsTableProps) {
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 4;
  
  const totalPages = Math.ceil(newsList.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const paginatedList = newsList.slice(startIndex, startIndex + itemsPerPage);

  const startItem = startIndex + 1;
  const endItem = Math.min(startIndex + itemsPerPage, newsList.length);

  return (
    <div className="overflow-hidden rounded-[24px] border border-[#F0F2EB] bg-white shadow-sm mt-6">
      {/* HEADER */}
      <div className="flex items-center justify-between px-8 py-7 border-b border-[#F0F2EB]">
        <h2 className="text-lg font-bold text-[#2A3426]">
          All Programs
        </h2>
        <p className="text-[11px] font-medium text-[#8F9A8A]">
          {newsList.length} items total
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[800px]">
          {/* TABLE HEADER */}
          <div className="flex items-center border-b border-[#F0F2EB] bg-[#F4F5F2] px-8 py-5">
            <div className="w-[400px] text-[11px] font-bold uppercase tracking-[1px] text-[#A1A89A]">
              PROGRAM TITLE
            </div>
            <div className="w-[200px] text-[11px] font-bold uppercase tracking-[1px] text-[#A1A89A]">
              DATE
            </div>
            <div className="flex-1 text-right text-[11px] font-bold uppercase tracking-[1px] text-[#A1A89A]">
              ACTIONS
            </div>
          </div>

          {/* TABLE ROWS */}
          <div className="divide-y divide-[#F0F2EB]">
            {paginatedList.map((article) => {
              const statusStyles = getStatusStyles(article.status);

              return (
                <div
                  key={article.id}
                  className="flex items-center px-8 py-6 hover:bg-gray-50/50 transition-colors"
                >
                  {/* Title & Dot */}
                  <div className="w-[400px] pr-4 flex items-center gap-4">
                    <div className={`h-2.5 w-2.5 rounded-full ${statusStyles.dotClass}`} />
                    <span className="text-[13.5px] font-bold text-[#2A3426] line-clamp-1">
                      {article.title}
                    </span>
                  </div>

                  {/* Date */}
                  <div className="w-[200px]">
                    <span className="text-[13.5px] text-[#72796E]">
                      {formatDate(article.publishDate || article.createdAt)}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-1 items-center justify-end gap-4">
                    <button
                      type="button"
                      className="hover:opacity-70 transition-opacity"
                    >
                      <EyeIcon />
                    </button>

                    <button
                      type="button"
                      onClick={() => onEdit(article)}
                      className="hover:opacity-70 transition-opacity"
                    >
                      <PencilIcon />
                    </button>

                    <button
                      type="button"
                      onClick={() => onDelete(article)}
                      className="hover:opacity-70 transition-opacity"
                    >
                      <TrashIcon />
                    </button>
                  </div>
                </div>
              );
            })}
            
            {newsList.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-[#72796e]">No programs found.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FOOTER PAGINATION */}
      {newsList.length > 0 && (
        <div className="flex flex-col gap-4 border-t border-[#F0F2EB] bg-[#F9FAF5] px-8 py-5 lg:flex-row lg:items-center lg:justify-between">
          <div className="flex items-center">
            <p className="text-[13px] text-[#8F9A8A] font-medium">
              Showing {startItem}–{endItem} of {newsList.length} programs
            </p>
          </div>

          <nav aria-label="Pagination" className="inline-flex items-center gap-1.5">
            <button
              onClick={() => setCurrentPage(p => Math.max(1, p - 1))}
              disabled={currentPage === 1}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E5E7EB] bg-white text-[#72796E] hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={16} />
            </button>

            {Array.from({ length: totalPages }, (_, i) => i + 1).map((page) => (
              <button
                key={page}
                onClick={() => setCurrentPage(page)}
                className={`flex h-8 w-8 items-center justify-center rounded-lg text-[13px] font-bold ${
                  currentPage === page 
                    ? 'bg-[#154212] text-white' 
                    : 'bg-white border border-[#E5E7EB] text-[#72796E] hover:bg-gray-50'
                }`}
              >
                {page}
              </button>
            ))}

            <button
              onClick={() => setCurrentPage(p => Math.min(totalPages, p + 1))}
              disabled={currentPage === totalPages}
              className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#E5E7EB] bg-white text-[#72796E] hover:bg-gray-50 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <ChevronRight size={16} />
            </button>
          </nav>
        </div>
      )}
    </div>
  );
}
