'use client';

import React from 'react';
import { useRouter } from 'next/navigation';

interface SuccessModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: string;
  message?: React.ReactNode;
  buttonText?: string;
}

export function SuccessModal({
  isOpen,
  onClose,
  title = "Berhasil!",
  message = "Tindakan Anda telah berhasil diselesaikan. Kerja Bagus!",
  buttonText = "Kembali ke Beranda"
}: SuccessModalProps) {
  const router = useRouter();

  if (!isOpen) return null;

  const handleButtonClick = () => {
    if (buttonText === 'Go Home' || buttonText === 'Kembali ke Beranda') {
      router.push('/admin');
    }
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[300] flex items-center justify-center bg-black/40 backdrop-blur-sm transition-all duration-300">
      <div className="animate-pop w-[400px] overflow-hidden rounded-[24px] bg-white shadow-xl flex flex-col">
        {/* CONTENT */}
        <div className="flex flex-col items-center px-8 pb-6 pt-10 text-center">
          <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-[#E5F0E5]">
            <svg
              width="28"
              height="28"
              viewBox="0 0 24 24"
              fill="none"
              stroke="#27532B"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
              <polyline points="22 4 12 14.01 9 11.01"></polyline>
            </svg>
          </div>
          <h3 className="mb-2 text-[20px] font-bold text-[#1a1c19]">{title}</h3>
          <p className="text-[14px] leading-relaxed text-[#72796E]">
            {message}
          </p>
        </div>

        {/* ACTIONS */}
        <div className="flex items-center justify-center bg-[#F9FAF8] px-8 py-6">
          <button
            onClick={handleButtonClick}
            type="button"
            className="w-full rounded-[14px] bg-[#B4D3A4] px-4 py-3 text-[14px] font-bold text-[#2A3426] transition-all duration-200 hover:bg-[#a2c291] active:scale-95"
          >
            {buttonText}
          </button>
        </div>
      </div>
    </div>
  );
}
