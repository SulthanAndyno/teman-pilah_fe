'use client';

import { getBaseUrl } from '../../lib/api-config';
import { motion } from 'motion/react';
import { useState, type JSX } from 'react';
import { Program } from '@/types';
import { ClipboardList } from 'lucide-react';

type ProgramsProps = {
  programs: Program[];
};

const BASE_URL = getBaseUrl();

export function Programs({
  programs,
}: ProgramsProps): JSX.Element {
  const [showAll, setShowAll] = useState(false);
  const INITIAL_LIMIT = 3;
  const displayedPrograms = showAll ? programs : programs.slice(0, INITIAL_LIMIT);

  const fadeInUp = {
    initial: {
      opacity: 0,
      y: 20,
    },

    whileInView: {
      opacity: 1,
      y: 0,
    },

    viewport: {
      once: true,
    },

    transition: {
      duration: 0.6,
    },
  };

  // =========================
  // FIX IMAGE URL
  // =========================

  function getImageUrl(
    image?: string
  ) {

    if (!image) {
      return '/placeholder.jpg';
    }

    // kalau sudah full url
    if (
      image.startsWith('http://') ||
      image.startsWith('https://')
    ) {
      return image;
    }

    // backend local
    return `${BASE_URL}/${image}`;
  }

  return (
    <section
      id="program"
      className="bg-[#F3F4EF] py-24"
      aria-labelledby="section-programs-heading"
    >

      <div className="mx-auto flex max-w-[1440px] 2xl:px-12 flex-col gap-16 px-6">

        {/* HEADER */}
        <header className="flex flex-col items-center gap-4">

          <h2
            id="section-programs-heading"
            className="text-center text-[32px] md:text-[40px] lg:text-5xl font-extrabold leading-tight text-[#154212]"
          >
            Program Unggulan
          </h2>

          <p className="max-w-2xl text-center text-lg leading-7 text-[#42493E]">
            Berbagai inisiatif yang kami lakukan untuk menggerakkan
            masyarakat dalam menjaga kelestarian bumi.
          </p>

        </header>

        {/* PROGRAMS GRID */}
        {programs.length === 0 ? (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col items-center justify-center py-16 px-6 bg-[#F9FAF5] rounded-[32px] border border-[#E4E6DF] text-center max-w-md mx-auto w-full shadow-sm"
          >
            <div className="w-16 h-16 bg-[#E8EAE1] rounded-2xl flex items-center justify-center text-[#154212] mb-4">
              <ClipboardList size={32} />
            </div>
            <h3 className="text-xl font-bold text-[#154212] mb-2">Program Tidak Tersedia</h3>
            <p className="text-[#616B5A] text-sm leading-relaxed">
              Saat ini belum ada program unggulan yang aktif. Silakan kembali lagi nanti untuk melihat program terbaru kami.
            </p>
          </motion.div>
        ) : (
          <div className="flex flex-col gap-10">
            <div
              className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
              role="list"
              aria-label="Daftar program unggulan"
            >

              {displayedPrograms.map((program, index) => (

                <motion.article
                  key={program.id}
                  role="listitem"
                  {...fadeInUp}
                  className="flex flex-col h-full overflow-hidden rounded-[32px] bg-[#F9FAF5] shadow-[0px_1px_2px_#0000000d] transition-transform duration-300 hover:scale-[1.01]"
                >

                  {/* IMAGE */}
                  <div className="h-64 w-full flex-none overflow-hidden bg-[#F1F3F2]">

                    <img
                      src={getImageUrl(
                        program.imageUrl ||
                        program.image
                      )}
                      alt={program.title}
                      className="h-full w-full object-cover"
                    />

                  </div>

                  {/* CONTENT */}
                  <div className="flex flex-col flex-1 p-6 gap-4">

                    {/* TEXT CONTENT GROUP */}
                    <div className="flex flex-col gap-3">
                      {/* TITLE */}
                      <h3 className="text-2xl font-bold leading-7 text-[#154212]">
                        {program.title}
                      </h3>

                      {/* DESCRIPTION */}
                      <p className="line-clamp-3 text-sm leading-6 text-[#42493E]">
                        {program.description ? program.description.replace(/<[^>]*>/g, '') : ''}
                      </p>
                    </div>

                    {/* MITRA & BUTTON GROUP */}
                    <div className="flex flex-col gap-2.5 mt-auto">
                      {/* MITRA */}
                      {program.partnership && (
                        <div className="flex flex-col gap-0.5">
                          <span className="text-[11px] font-bold tracking-widest text-[#8F9A8A] uppercase">
                            MITRA
                          </span>
                          <div className="flex items-center gap-2 text-[15px] font-medium text-[#2A3426]">
                            <img 
                              src="/program/town.png" 
                              alt="Mitra Logo" 
                              className="w-[16px] h-[16px] object-contain flex-shrink-0" 
                            />
                            <span>{program.partnership}</span>
                          </div>
                        </div>
                      )}

                      {/* BUTTON */}
                      <a
                        href={`/program/${program.slug ?? program.id}`}
                        aria-label={`Pelajari lebih lanjut tentang ${program.title}`}
                        className={`inline-flex items-center text-base font-semibold text-[#FC9430] transition-opacity hover:opacity-80 ${
                          index === 2
                            ? 'gap-[4px]'
                            : 'gap-1'
                        }`}
                      >

                        <span>
                          Pelajari lebih lanjut
                        </span>

                        <span className="text-lg">
                          →
                        </span>

                      </a>
                    </div>

                  </div>

                </motion.article>

              ))}

            </div>

            {programs.length > INITIAL_LIMIT && (
              <div className="flex justify-center pt-2">
                <button
                  onClick={() => setShowAll(!showAll)}
                  className="rounded-full border-2 border-[#154212] px-8 py-3.5 text-[15px] font-bold text-[#154212] transition-colors hover:bg-[#154212] hover:text-white"
                >
                  {showAll ? 'Sembunyikan' : 'Tampilkan Semua'}
                </button>
              </div>
            )}
          </div>
        )}

      </div>

    </section>
  );
}