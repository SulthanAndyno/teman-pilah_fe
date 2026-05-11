// 'use client';

// import { motion } from 'motion/react';
// import { Card } from '@/components/ui/Card';

// export function Programs() {
//   const fadeInUp = {
//     initial: { opacity: 0, y: 20 },
//     whileInView: { opacity: 1, y: 0 },
//     viewport: { once: true },
//     transition: { duration: 0.6 }
//   };

//   const programs = [
//     { 
//       title: 'Bank Sampah', 
//       desc: 'Mengubah sampah terpilah menjadi nilai ekonomis untuk kesejahteraan anggota komunitas.' 
//     },
//     { 
//       title: 'Workshop Edukasi', 
//       desc: 'Pelatihan daur ulang dan komposting untuk sekolah, kampus, dan kelompok masyarakat.' 
//     },
//     { 
//       title: 'Kampanye Lingkungan', 
//       desc: 'Aksi bersih-bersih pantai, taman, dan fasilitas umum bersama relawan dan mitra.' 
//     }
//   ];

//   return (
//     <section id="program" className="py-24 bg-bg">
//       <div className="max-w-7xl mx-auto px-6 space-y-20">
//         <div className="text-center space-y-6 max-w-3xl mx-auto">
//           <h2 className="text-5xl md:text-6xl font-bold text-[#42493E] tracking-tight">Program Unggulan</h2>
//           <p className="text-xl text-[#42493E] leading-relaxed font-medium opacity-80">
//             Berbagai inisiatif yang kami lakukan untuk menggerakkan masyarakat dalam menjaga kelestarian bumi.
//           </p>
//         </div>

//         <div className="grid md:grid-cols-3 gap-8">
//           {programs.map((program, idx) => (
//             <motion.div key={idx} {...fadeInUp}>
//               <Card padding="none" className="h-full border-none rounded-[40px] bg-white shadow-none overflow-hidden flex flex-col group transition-transform hover:scale-[1.01]">
//                 {/* Image Placeholder Section */}
//                 <div className="aspect-1.5/1 bg-[#F1F3F2] flex items-center justify-center p-8">
//                   <div className="w-full h-full flex items-center justify-center text-black">
//                     <svg className="w-2/3 h-auto opacity-90" viewBox="0 0 100 80" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round">
//                       <rect x="5" y="5" width="90" height="70" rx="8" />
//                       <circle cx="70" cy="27" r="8" />
//                       <path d="M5 65 L35 35 L55 55 L75 30 L95 60 L95 75 L5 75 Z" fill="currentColor" />
//                     </svg>
//                   </div>
//                 </div>

//                 {/* Content Section */}
//                 <div className="p-10 grow flex flex-col items-start text-left">
//                   <h3 className="text-2xl font-bold text-[#1B3022] mb-4 tracking-tight">
//                     {program.title}
//                   </h3>
//                   <p className="text-[#3D4F41] text-lg font-medium leading-relaxed mb-8 opacity-90 line-clamp-3 text-justify">
//                     {program.desc}
//                   </p>
//                   <a 
//                     href="#" 
//                     className="mt-auto inline-flex items-center gap-2 text-accent font-bold text-lg hover:mr-2 transition-all"
//                   >
//                     Pelajari lebih lanjut →
//                   </a>
//                 </div>
//               </Card>
//             </motion.div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import { motion } from 'motion/react';
import type { JSX } from 'react';

const programs = [
  {
    id: 1,

    title: 'Bank Sampah',

    description: [
      'Mengubah sampah terpilah menjadi nilai',
      'ekonomis untuk kesejahteraan anggota komunitas',
      'komunitas.',
    ],

    image: '/program-1.png',
  },

  {
    id: 2,

    title: 'Workshop Edukasi',

    description: [
      'Pelatihan daur ulang dan komposting untuk',
      'sekolah, kampus, dan kelompok masyarakat.',
    ],

    image: '/program-2.png',
  },

  {
    id: 3,

    title: 'Kampanye Lingkungan',

    description: [
      'Aksi bersih-bersih pantai, taman, dan fasilitas',
      'umum bersama relawan dan mitra.',
    ],

    image: '/program-3.png',
  },
];

export function Programs(): JSX.Element {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },

    whileInView: { opacity: 1, y: 0 },

    viewport: { once: true },

    transition: { duration: 0.6 },
  };

  return (
    <section
      id="program"
      className="bg-[#F3F4EF] py-24"
      aria-labelledby="section-programs-heading"
    >
      <div className="mx-auto flex max-w-7xl flex-col gap-16 px-6">

        {/* HEADER */}
        <header className="flex flex-col items-center gap-4">

          <h2
            id="section-programs-heading"
            className="text-center text-5xl font-extrabold leading-tight text-[#154212]"
          >
            Program Unggulan
          </h2>

          <p className="max-w-2xl text-center text-lg leading-7 text-[#42493E]">
            Berbagai inisiatif yang kami lakukan untuk menggerakkan
            masyarakat dalam menjaga kelestarian bumi.
          </p>

        </header>

        {/* CARDS */}
        <div
          className="grid gap-8 md:grid-cols-2 xl:grid-cols-3"
          role="list"
          aria-label="Daftar program unggulan"
        >

          {programs.map((program, index) => (
            <motion.article
              key={program.id}
              role="listitem"
              {...fadeInUp}
              className="overflow-hidden rounded-[32px] bg-[#F9FAF5] shadow-[0px_1px_2px_#0000000d] transition-transform duration-300 hover:scale-[1.01]"
            >

              {/* IMAGE */}
              <div className="h-64 w-full overflow-hidden bg-[#F1F3F2]">

                <img
                  src={program.image}
                  alt={program.title}
                  className="h-full w-full object-cover"
                />

              </div>

              {/* CONTENT */}
              <div className="flex flex-col gap-6 p-6">

                {/* TITLE */}
                <div>

                  <h3 className="text-2xl font-bold leading-7 text-[#154212]">
                    {program.title}
                  </h3>

                </div>

                {/* DESCRIPTION */}
                <div>

                  <p className="text-sm leading-6 text-[#42493E]">

                    {program.description.map((line, lineIndex) => (
                      <span key={`${program.id}-${lineIndex}`}>
                        {line}

                        {lineIndex <
                          program.description.length - 1 && <br />}
                      </span>
                    ))}

                  </p>

                </div>

                {/* BUTTON */}
                <a
                  href="#"
                  aria-label={`Pelajari lebih lanjut tentang ${program.title}`}
                  className={`inline-flex items-center pt-2 text-base font-semibold text-[#FC9430] transition-opacity hover:opacity-80 ${
                    index === 2 ? 'gap-[4px]' : 'gap-1'
                  }`}
                >

                  <span>Pelajari lebih lanjut</span>

                  <span className="text-lg">→</span>

                </a>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}