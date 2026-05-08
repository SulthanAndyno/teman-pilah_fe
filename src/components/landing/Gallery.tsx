// 'use client';

// // import { motion } from 'motion/react';
// // import { cn } from '@/lib/utils';

// export function Gallery() {
//   const fadeInUp = {
//     initial: { opacity: 0, y: 20 },
//     whileInView: { opacity: 1, y: 0 },
//     viewport: { once: true },
//     transition: { duration: 0.6 }
//   };

//   return (
//     <section className="py-24 bg-bg">
//       <div className="max-w-7xl mx-auto px-6 space-y-16">
//         <div className="text-center space-y-6 max-w-3xl mx-auto">
//           <h2 className="text-5xl font-bold text-[#1B3022]">Galeri Aksi Nyata</h2>
//           <p className="text-xl text-[#3D4F41] leading-relaxed font-medium">
//             Jejak langkah kami bersama masyarakat dan mitra dalam melestarikan lingkungan melalui berbagai inisiatif.
//           </p>
//         </div>

//         <div className="grid grid-cols-2 gap-4">
//           <div className="grid grid-cols-1 gap-y-6">
//             <div className="flex items-center gap-x-6">
//               <div className="bg-red-500 w-full h-40">.</div>
//               <div className="bg-black w-full h-40">.</div>
//             </div>
//             <div className="bg-primary w-full h-20">.</div>
//           </div>
//           <div className="grid grid-cols-1 gap-y-6">
//             <div className="bg-primary w-full h-20">.</div>
//             <div className="flex items-center gap-x-6">
//               <div className="bg-red-500 w-full h-40">.</div>
//               <div className="bg-black w-full h-40">.</div>
//             </div>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }

'use client';

import Image from 'next/image';
import { motion } from 'motion/react';

const galleryImages = [
  {
    id: 1,
    src: '/gallery/gallery-1.jpg',
    alt: 'Kegiatan lingkungan 1',
    className: 'h-[280px]',
  },
  {
    id: 2,
    src: '/gallery/gallery-2.jpg',
    alt: 'Kegiatan lingkungan 2',
    className: 'h-[280px]',
  },
  {
    id: 3,
    src: '/gallery/gallery-3.jpg',
    alt: 'Kegiatan lingkungan 3',
    className: 'h-[180px]',
  },
  {
    id: 4,
    src: '/gallery/gallery-4.jpg',
    alt: 'Kegiatan lingkungan 4',
    className: 'h-[180px]',
  },
  {
    id: 5,
    src: '/gallery/gallery-5.jpg',
    alt: 'Kegiatan lingkungan 5',
    className: 'h-[280px]',
  },
  {
    id: 6,
    src: '/gallery/gallery-6.jpg',
    alt: 'Kegiatan lingkungan 6',
    className: 'h-[280px]',
  },
];

export function Gallery() {
  return (
    <section className="py-28 bg-bg overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-20">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-6 max-w-3xl mx-auto"
        >
          <h2 className="text-4xl lg:text-4xl font-bold text-[#1B3022] leading-tight">
            Galeri Aksi Nyata
          </h2>

          <p className="text-xl text-[#3D4F41] leading-relaxed font-medium opacity-80">
           Jejak langkah kami bersama masyarakat dan mitra dalam melestarikan
           lingkungan.
          </p>
        </motion.div>

        {/* Gallery */}
        <div className="grid lg:grid-cols-2 gap-8">

          {/* Left */}
          <div className="space-y-8">

            <div className="grid grid-cols-2 gap-8">

              <GalleryCard image={galleryImages[0]} />
              <GalleryCard image={galleryImages[1]} />

            </div>

            <GalleryCard image={galleryImages[2]} />

          </div>

          {/* Right */}
          <div className="space-y-8">

            <GalleryCard image={galleryImages[3]} />

            <div className="grid grid-cols-2 gap-8">

              <GalleryCard image={galleryImages[4]} />
              <GalleryCard image={galleryImages[5]} />

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}

type GalleryCardProps = {
  image: {
    src: string;
    alt: string;
    className: string;
  };
};

function GalleryCard({ image }: GalleryCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.7 }}
      className={`relative overflow-hidden rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,0,0,0.12)] group ${image.className}`}
    >
      <Image
        src={image.src}
        alt={image.alt}
        fill
        className="object-cover group-hover:scale-105 transition-transform duration-700"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}