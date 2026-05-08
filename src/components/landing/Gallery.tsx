'use client';

// import { motion } from 'motion/react';
// import { cn } from '@/lib/utils';

export function Gallery() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6 space-y-16">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold text-[#1B3022]">Galeri Aksi Nyata</h2>
          <p className="text-xl text-[#3D4F41] leading-relaxed font-medium">
            Jejak langkah kami bersama masyarakat dan mitra dalam melestarikan lingkungan melalui berbagai inisiatif.
          </p>
        </div>

        <div className="grid grid-cols-2 gap-4">
          <div className="grid grid-cols-1 gap-y-6">
            <div className="flex items-center gap-x-6">
              <div className="bg-red-500 w-full h-40">.</div>
              <div className="bg-black w-full h-40">.</div>
            </div>
            <div className="bg-primary w-full h-20">.</div>
          </div>
          <div className="grid grid-cols-1 gap-y-6">
            <div className="bg-primary w-full h-20">.</div>
            <div className="flex items-center gap-x-6">
              <div className="bg-red-500 w-full h-40">.</div>
              <div className="bg-black w-full h-40">.</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
