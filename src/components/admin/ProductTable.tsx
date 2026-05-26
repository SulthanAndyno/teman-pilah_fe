'use client';

import { Product } from '@/types';

interface ProductTableProps {
  products: Product[];
  onEdit: (product: Product) => void;
  onDelete: (id: string) => void;
}

const getStatusStyles = (label: Product['stockLabel']) => {
  switch (label) {
    case 'IN_STOCK':
      return {
        label: 'In Stock',
        bgClass: 'bg-[#e2f5eb]',
        dotClass: 'bg-[#21c55d]',
        textClass: 'text-[#166534]',
      };
    case 'BULK_AVAILABLE':
      return {
        label: 'Bulk',
        bgClass: 'bg-[#fff3e0]',
        dotClass: 'bg-[#f97316]',
        textClass: 'text-[#c2410c]',
      };
    case 'OUT_OF_STOCK':
      return {
        label: 'Empty',
        bgClass: 'bg-[#f1f5f9]',
        dotClass: 'bg-[#94a3b8]',
        textClass: 'text-[#475569]',
      };
    default:
      return {
        label: 'In Stock',
        bgClass: 'bg-[#e2f5eb]',
        dotClass: 'bg-[#21c55d]',
        textClass: 'text-[#166534]',
      };
  }
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

export function ProductTable({ products, onEdit, onDelete }: ProductTableProps) {
  // Format category to title case
  const formatCategory = (cat: string) => {
    return cat.replace(/_/g, ' ').replace(/\w\S*/g, (txt) => {
      return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
    });
  };

  return (
    <div className="overflow-hidden rounded-[24px] border border-[#F0F2EB] bg-white shadow-sm mt-6">
      {/* HEADER */}
      <div className="flex items-center justify-between px-8 py-7 border-b border-[#F0F2EB]">
        <h2 className="text-xl font-serif font-bold text-[#2A3426]">
          All Products
        </h2>
        <p className="text-[11px] font-bold uppercase tracking-[1.5px] text-[#8F9A8A]">
          {products.length} ITEMS TOTAL
        </p>
      </div>

      <div className="overflow-x-auto">
        <div className="min-w-[800px]">
          {/* TABLE HEADER */}
          <div className="flex items-center border-b border-[#F0F2EB] px-8 py-5">
            <div className="w-12"></div> {/* Space for dot */}
            <div className="w-[350px] text-[11px] font-bold uppercase tracking-[1px] text-[#A1A89A]">
              PRODUCT TITLE
            </div>
            <div className="w-[180px] text-[11px] font-bold uppercase tracking-[1px] text-[#A1A89A]">
              STATUS
            </div>
            <div className="w-[180px] text-[11px] font-bold uppercase tracking-[1px] text-[#A1A89A]">
              CATEGORY
            </div>
            <div className="flex-1 text-right text-[11px] font-bold uppercase tracking-[1px] text-[#A1A89A]">
              ACTIONS
            </div>
          </div>

          {/* TABLE ROWS */}
          <div className="divide-y divide-[#F0F2EB]">
            {products.map((product) => {
              const statusStyles = getStatusStyles(product.stockLabel);

              return (
                <div
                  key={product.id}
                  className="flex items-center px-8 py-6 hover:bg-gray-50/50 transition-colors"
                >
                  {/* Dot */}
                  <div className="w-12 flex items-center">
                    <div className={`h-2 w-2 rounded-full ${statusStyles.dotClass}`} />
                  </div>

                  {/* Title */}
                  <div className="w-[350px] pr-4">
                    <span className="text-[13.5px] font-bold text-[#2A3426] line-clamp-1">
                      {product.name}
                    </span>
                  </div>

                  {/* Status Badge */}
                  <div className="w-[180px]">
                    <div
                      className={`inline-flex h-[26px] items-center justify-center rounded-full px-3 ${statusStyles.bgClass}`}
                    >
                      <span className={`text-[11px] font-bold ${statusStyles.textClass}`}>
                        {statusStyles.label}
                      </span>
                    </div>
                  </div>

                  {/* Category */}
                  <div className="w-[180px]">
                    <span className="text-[13.5px] text-[#72796E]">
                      {formatCategory(product.category)}
                    </span>
                  </div>

                  {/* Actions */}
                  <div className="flex flex-1 items-center justify-end gap-5">
                    <button
                      type="button"
                      className="hover:opacity-70 transition-opacity"
                    >
                      <EyeIcon />
                    </button>

                    <button
                      type="button"
                      onClick={() => onEdit(product)}
                      className="hover:opacity-70 transition-opacity"
                    >
                      <PencilIcon />
                    </button>

                    <button
                      type="button"
                      onClick={() => onDelete(product.id)}
                      className="hover:opacity-70 transition-opacity"
                    >
                      <TrashIcon />
                    </button>
                  </div>
                </div>
              );
            })}
            
            {products.length === 0 && (
              <div className="py-20 text-center">
                <p className="text-[#72796e]">No products found.</p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FOOTER PAGINATION */}
      <div className="flex flex-col gap-4 border-t border-[#F0F2EB] bg-white px-8 py-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex items-center">
          <p className="text-[13px] text-[#8F9A8A]">
            Showing 1-{products.length} of {products.length} products
          </p>
        </div>

        <nav aria-label="Pagination" className="inline-flex items-center gap-2">
          {/* PREV */}
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F9FAF8] text-[#C2C9BB] cursor-not-allowed"
            disabled
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>

          {/* PAGE NUMBERS */}
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#154212] text-[13px] font-bold text-white shadow-sm"
          >
            1
          </button>
          
          {/* NEXT */}
          <button
            type="button"
            className="flex h-8 w-8 items-center justify-center rounded-lg bg-[#F9FAF8] text-[#72796E] hover:bg-gray-100"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </nav>
      </div>
    </div>
  );
}
