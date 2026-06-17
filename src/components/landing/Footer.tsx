'use client';

import type { JSX } from 'react';

const navigationLinks = [
  { label: 'Beranda', href: '/' },
  { label: 'Tentang Kami', href: '/#tentang' },
  { label: 'Program', href: '/#program' },
  { label: 'Edukasi', href: '/#edukasi' },
];

const otherLinks = [
  { label: 'Katalog', href: '/#katalog' },
  { label: 'Dokumentasi', href: '#' },
  { label: 'Kontak', href: '/#kontak' },
];
    const socialLinks = [
      {
        label: 'globe',
        href: '/',
        icon: (
          <img
            src="/globe.png"
            alt="globe"
            className="h-5 w-5 object-contain"
          />
        ),
      },

      {
        label: 'Email',
        href: 'mailto:info@temanpilah.com',
        icon: (
          <img
            src="/mail.png"
            alt="Email"
            className="h-5 w-5 object-contain"
          />
        ),
      },

      {
        label: 'Telepon',
        href: 'https://wa.me/6281234567890',
        icon: (
          <img
            src="/call.png"
            alt="Telepon"
            className="h-5 w-5 object-contain"
          />
        ),
      },
    ];

const legalLinks = [
  { label: 'Kebijakan Privasi', href: '#' },
  { label: 'Syarat & Ketentuan', href: '#' },
];

export const Footer = (): JSX.Element => {
  return (
    <footer id="kontak" className="w-full rounded-t-[48px] bg-[#F3F4EF] px-6 py-16">

      <div className="mx-auto flex max-w-[1440px] 2xl:px-12 flex-col gap-14">

        {/* TOP */}
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[1.6fr_0.7fr_0.7fr]">

          {/* BRAND */}
          <div className="flex flex-col gap-6">

            {/* LOGO */}
            <div className="flex items-center gap-4">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-14 w-14 rounded-full bg-cover bg-center"
              />

              <div className="text-2xl font-bold tracking-[0.35px] text-[#154212]">
                Teman Pilah
              </div>

            </div>

            {/* DESCRIPTION */}
            <p className="max-w-sm text-base leading-7 text-[#42493E]">
              Mewujudkan lingkungan yang asri melalui aksi nyata,
              edukasi berkelanjutan, dan kolaborasi masyarakat
              dalam pengelolaan sampah yang bijak.
            </p>

            {/* SOCIAL */}
            <div className="flex items-center gap-4">

              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  aria-label={link.label}
                  className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E7EBE1] transition-opacity hover:opacity-80"
                >
                  {link.icon}
                </a>
              ))}
            </div>
          </div>

          {/* NAVIGATION */}
          <nav className="flex flex-col gap-6">

            <h3 className="text-lg font-bold tracking-[0.35px] text-[#154212]">
              Navigasi
            </h3>

            <div className="flex flex-col gap-4">

              {navigationLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm tracking-[0.35px] text-[#42493E] transition-opacity hover:opacity-80"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>

          {/* OTHER */}
          <nav className="flex flex-col gap-6">

            <h3 className="text-lg font-bold tracking-[0.35px] text-[#154212]">
              Lainnya
            </h3>

            <div className="flex flex-col gap-4">

              {otherLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-sm tracking-[0.35px] text-[#42493E] transition-opacity hover:opacity-80"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </nav>
        </div>

        {/* BOTTOM */}
        <div className="flex flex-col items-center justify-between gap-4 border-t border-[#1542121A] pt-8 md:flex-row">

          <p className="text-sm tracking-[0.35px] text-[#42493E]">
            © 2024 Teman Pilah. Melestarikan Lingkungan Bersama
            Melalui Aksi Nyata.
          </p>

          <div className="flex items-center gap-6">

            {legalLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-sm tracking-[0.35px] text-[#42493E] transition-opacity hover:opacity-80"
              >
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};