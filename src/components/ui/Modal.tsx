'use client';

import React, { useEffect } from 'react';
import { X } from 'lucide-react';
import { Card } from './Card';
import { cn } from '@/lib/utils';

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  children: React.ReactNode;
  className?: string;
}

export function Modal({ isOpen, onClose, title, children, className }: ModalProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-6">
      <div 
        className="absolute inset-0 bg-primary/20 backdrop-blur-sm animate-in fade-in duration-200" 
        onClick={onClose} 
      />
      <Card 
        className={cn(
          "w-full max-w-lg relative z-10 animate-in zoom-in-95 duration-200 shadow-2xl overflow-hidden",
          className
        )}
        padding="none"
      >
        <div className="flex items-center justify-between p-6 border-b border-border bg-white">
          <h3 className="text-2xl font-bold text-primary">{title}</h3>
          <button 
            onClick={onClose}
            className="w-10 h-10 rounded-full hover:bg-bg flex items-center justify-center text-neutral transition-colors"
          >
            <X size={20} />
          </button>
        </div>
        <div className="p-6 bg-white overflow-y-auto max-h-[80vh]">
          {children}
        </div>
      </Card>
    </div>
  );
}
