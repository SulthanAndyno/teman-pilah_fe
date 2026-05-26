import React from 'react';

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title?: string;
  itemName?: string;
}

export function DeleteModal({
  isOpen,
  onClose,
  onConfirm,
  title = "Delete Program?",
  itemName = "",
}: DeleteModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[200] flex items-center justify-center bg-black/50">
      <div className="w-[400px] overflow-hidden rounded-[24px] bg-white shadow-xl flex flex-col">
        {/* CONTENT */}
        <div className="flex flex-col items-center px-8 pb-6 pt-8 text-center">
          <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[#fef2f2]">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#dc2626"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path>
              <line x1="12" y1="9" x2="12" y2="13"></line>
              <line x1="12" y1="17" x2="12.01" y2="17"></line>
            </svg>
          </div>
          <h3 className="mb-2 text-[18px] font-bold text-[#1a1c19]">{title}</h3>
          <p className="text-[13px] leading-relaxed text-[#72796E]">
            Are you sure you want to delete "{itemName}"? This action cannot be undone.
          </p>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center justify-center gap-3 bg-[#F9FAF8] px-8 py-5">
          <button
            onClick={onClose}
            type="button"
            className="flex-1 rounded-xl border border-[#D6D9D2] bg-white px-4 py-2.5 text-[13px] font-medium text-[#72796E] transition-colors hover:bg-gray-50"
          >
            Cancel
          </button>
          <button
            onClick={onConfirm}
            type="button"
            className="flex-1 rounded-xl bg-[#c21c1c] px-4 py-2.5 text-[13px] font-medium text-white shadow-sm transition-colors hover:bg-red-700"
          >
            Delete Program
          </button>
        </div>
      </div>
    </div>
  );
}
