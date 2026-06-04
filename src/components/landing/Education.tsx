'use client';

import { getBaseUrl } from '../../lib/api-config';
import type { JSX } from 'react';
import Link from 'next/link';
import { BookOpen } from 'lucide-react';

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

const BASE_URL = getBaseUrl();

export const Education = ({ items }: EducationProps): JSX.Element => {
  const displayData = items && items.length > 0 ? items.map(item => ({
    id: item.id,
    title: item.title,
    description: item.overview || '',
    href: `/edukasi/${item.slug}`,
    thumbnail: item.thumbnail ? `${BASE_URL}/${item.thumbnail}` : null,
  })) : [];

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
        {displayData.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-16 px-6 bg-white rounded-[32px] border border-[#F0F2EB] text-center max-w-md mx-auto w-full shadow-[0_2px_15px_rgba(0,0,0,0.02)]">
            <div className="w-16 h-16 bg-[#F9FAF5] rounded-2xl flex items-center justify-center text-[#1B3022] mb-4">
              <BookOpen size={32} />
            </div>
            <h3 className="text-xl font-bold text-[#1B3022] mb-2">Edukasi Tidak Tersedia</h3>
            <p className="text-[#616b5a] text-sm leading-relaxed">
              Saat ini konten edukasi belum tersedia. Silakan kembali lagi nanti untuk membaca artikel edukasi terbaru dari kami.
            </p>
          </div>
        ) : (
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
        )}
      </div>
    </section>
  );
};