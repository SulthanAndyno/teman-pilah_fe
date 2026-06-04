'use client';

import type { JSX } from 'react';
import Link from 'next/link';

interface EducationItem {
  id: string;
  title: string;
  overview: string;
  slug: string;
  thumbnail?: string;
}

interface EducationProps {
  items?: EducationItem[];
}

const BASE_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:2000';

export const Education = ({ items }: EducationProps): JSX.Element => {
  const displayData = items && items.length > 0 ? items.map(item => ({
    id: item.id,
    title: item.title,
    description: item.overview || '',
    href: `/edukasi/${item.slug}`,
    thumbnail: item.thumbnail ? `${BASE_URL}/${item.thumbnail}` : null,
  })) : [
    {
      id: 'prinsip-3r',
      title: 'Prinsip 3R',
      description: 'Pelajari konsep Reduce, Reuse, dan Recycle untuk mengurangi sampah dalam kehidupan sehari-hari.',
      href: '/edukasi/prinsip-3r',
      thumbnail: null,
    },
    {
      id: 'sampah-organik',
      title: 'Sampah Organik',
      description: 'Memahami jenis, pengolahan, dan pemanfaatan sampah organik menjadi kompos yang bermanfaat.',
      href: '#',
      thumbnail: null,
    },
    {
      id: 'alur-bank',
      title: 'Alur Bank Sampah',
      description: 'Pelajari mekanisme penyetoran sampah, kategori sampah, dan manfaat bank sampah.',
      href: '#',
      thumbnail: null,
    },
    {
      id: 'pengelolaan',
      title: 'Pengelolaan Sampah',
      description: 'Panduan memilah sampah dan menjaga lingkungan melalui kebiasaan sederhana sehari-hari.',
      href: '#',
      thumbnail: null,
    },
  ];

  return (
    <section id="edukasi" className="py-24 bg-[#F9FAF5] overflow-hidden">
      <div className="max-w-[1440px] 2xl:px-12 mx-auto px-6 space-y-16">
        
        {/* HEADER */}
        <div className="text-center space-y-4 max-w-3xl mx-auto">
          <h2 className="text-[32px] md:text-[40px] font-bold text-[#1B3022]">
            Pusat Edukasi
          </h2>
          <p className="text-[17px] text-[#616b5a] leading-relaxed">
            Pahami cara mengelola sampah dengan benar untuk masa depan yang lebih baik.
          </p>
        </div>

        {/* CARDS GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {displayData.map((item) => (
            <div 
              key={item.id} 
              className="bg-white rounded-[32px] overflow-hidden shadow-[0_2px_15px_rgba(0,0,0,0.02)] border border-[#F0F2EB] flex flex-col transition-transform hover:-translate-y-1 duration-300"
            >
              {/* IMAGE PLACEHOLDER OR THUMBNAIL */}
              <div className="bg-[#f6f7f4] aspect-[4/3] flex items-center justify-center p-0 m-3 rounded-[24px] overflow-hidden">
                {item.thumbnail ? (
                  <img src={item.thumbnail} alt={item.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="p-8">
                    <svg width="100%" height="100%" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="max-w-[120px] text-black">
                      <path d="M12 24C12 17.3726 17.3726 12 24 12H76C82.6274 12 88 17.3726 88 24V76C88 82.6274 82.6274 88 76 88H24C17.3726 88 12 82.6274 12 76V24Z" stroke="currentColor" strokeWidth="8"/>
                      <circle cx="68" cy="36" r="8" fill="currentColor"/>
                      <path d="M22 78L42 48L58 66L68 54L84 78H22Z" fill="currentColor"/>
                    </svg>
                  </div>
                )}
              </div>

              {/* CONTENT */}
              <div className="p-6 pt-4 flex flex-col flex-1">
                <h3 className="text-[20px] font-bold text-[#1B3022] mb-3 line-clamp-2">
                  {item.title}
                </h3>
                <p className="text-[14px] text-[#616b5a] leading-relaxed mb-8 flex-1 line-clamp-4">
                  {item.description}
                </p>
                <Link 
                  href={item.href}
                  className="text-[#F39121] text-[15px] font-semibold flex items-center hover:opacity-80 transition-opacity mt-auto"
                >
                  Pelajari Selengkapnya 
                  <span className="ml-1">→</span>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};