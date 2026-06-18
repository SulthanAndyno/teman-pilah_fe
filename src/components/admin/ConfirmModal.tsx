import React from 'react';

interface ConfirmModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  title: string;
  message: React.ReactNode;
  confirmText: string;
  confirmColor?: string;
  isAlert?: boolean;
}

export function ConfirmModal({
  isOpen,
  onClose,
  onConfirm,
  title,
  message,
  confirmText,
  confirmColor = '#c21c1c',
  isAlert = false,
}: ConfirmModalProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[250] flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all duration-300">
      <div className="animate-pop w-[400px] overflow-hidden rounded-[24px] bg-white shadow-xl flex flex-col">
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
            {message}
          </p>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center justify-center gap-3 bg-[#F9FAF8] px-8 py-5">
          {!isAlert && (
            <button
              onClick={onClose}
              type="button"
              className="flex-1 rounded-xl border border-[#D6D9D2] bg-white px-4 py-2.5 text-[13px] font-medium text-[#72796E] transition-all duration-200 hover:bg-gray-50 active:scale-95"
            >
              Batal
            </button>
          )}
          <button
            onClick={onConfirm}
            type="button"
            className={`flex-1 rounded-xl px-4 py-2.5 text-[13px] font-medium text-white shadow-sm transition-all duration-200 hover:brightness-90 active:scale-95`}
            style={{ backgroundColor: confirmColor }}
          >
            {confirmText}
          </button>
        </div>
      </div>
    </div>
  );
}
