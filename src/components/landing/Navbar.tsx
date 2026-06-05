'use client';

import { useState } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Beranda');

  const navLinks = [
    { name: 'Beranda', href: '/' },
    { name: 'Tentang Kami', href: '/#tentang' },
    { name: 'Program', href: '/#program' },
    { name: 'Edukasi', href: '/#edukasi' },
    { name: 'Katalog', href: '/#katalog' },
    { name: 'Kontak', href: '/#kontak' },
  ];

  const whatsappLink = 'https://wa.me/6281234567890';

  return (
    <nav
      className="fixed top-0 z-50 flex h-[88px] w-full items-center bg-[#FAFAF8] shadow-sm border-b border-[#F0F2EB]"
    >
      {/* CONTAINER */}
      <div className="mx-auto flex w-full max-w-[1440px] 2xl:px-12 items-center justify-between px-6 lg:px-8">
        
        {/* LOGO */}
        <Link href="/" className="flex items-center gap-3 hover:opacity-90 transition-opacity">
          <img 
            src="/logo.png" 
            alt="Logo Teman Pilah" 
            className="h-12 w-12 rounded-full object-cover border-2 border-transparent"
          />
          <span className="whitespace-nowrap text-[26px] font-extrabold tracking-tight text-[#1a2f1d]">
            Teman Pilah
          </span>
        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden flex-1 items-center justify-center md:flex">
          <div className="flex items-center gap-8 lg:gap-10">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={cn(
                  'relative py-2 text-[15px] transition-colors duration-200',
                  activeLink === link.name
                    ? 'font-bold text-[#1a2f1d]'
                    : 'font-medium text-[#616b5a] hover:text-[#1a2f1d]'
                )}
              >
                {link.name}
                {activeLink === link.name && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute bottom-0 left-0 right-0 h-[3px] rounded-t-sm bg-[#FC9430]"
                    transition={{
                      type: 'spring',
                      bounce: 0.2,
                      duration: 0.6,
                    }}
                  />
                )}
              </a>
            ))}
          </div>
        </div>

        {/* DESKTOP BUTTON */}
        <div className="hidden items-center md:flex">
          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button
              className="flex h-[46px] items-center justify-center gap-6 rounded-full bg-gradient-to-r from-[#154212] to-[#2D5A27] px-12 py-3 text-white transition-all duration-300 hover:scale-[1.03] hover:brightness-110 active:scale-95"
            >
              <img
                src="/wa.png"
                alt="WhatsApp"
                className="h-5 w-5 object-contain brightness-0 invert"
              />
              <span className="text-[15px] font-bold tracking-wide">
                WhatsApp
              </span>
            </Button>
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-[#1a2f1d] md:hidden"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed right-6 top-[88px] z-50 w-[280px] rounded-[24px] border border-[#F0F2EB] bg-[#FAFAF8] shadow-[0_20px_50px_rgba(21,66,18,0.15)] overflow-hidden md:hidden"
          >
            <div className="flex flex-col gap-4 p-6">
              {/* LINKS */}
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'border-b border-[#1a2f1d]/5 pb-2 text-[15px] font-semibold transition-colors',
                    activeLink === link.name
                      ? 'font-bold text-[#1a2f1d] border-[#1a2f1d]/20'
                      : 'text-[#616b5a] hover:text-[#1a2f1d]'
                  )}
                  onClick={() => {
                    setActiveLink(link.name);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {link.name}
                </a>
              ))}

              {/* BUTTON */}
              <div className="mt-2">
                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Button className="flex h-[46px] w-full items-center justify-center gap-2 rounded-full bg-gradient-to-r from-[#154212] to-[#2D5A27] text-sm font-bold text-white shadow-md transition-transform active:scale-95 hover:brightness-110">
                    <img
                      src="/wa.png"
                      alt="WhatsApp"
                      className="h-5 w-5 object-contain brightness-0 invert"
                    />
                    <span>WhatsApp</span>
                  </Button>
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}