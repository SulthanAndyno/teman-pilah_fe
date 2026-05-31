'use client';

import { motion } from 'motion/react';
import { ArrowRight, Play, Users, Leaf } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F3F4EF] pt-14 lg:pt-16 pb-12 lg:pb-14">

      {/* CONTAINER */}
      <div className="mx-auto grid w-full max-w-[1440px] 2xl:px-12 px-6 lg:px-8 grid-cols-1 lg:grid-cols-[1fr_1fr] items-center gap-10 lg:gap-12">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 flex flex-col items-start gap-6"
        >

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-[#E8E9E4] px-4 py-2 shadow-[0px_1px_2px_#0000000d]">
            <Leaf size={16} className="text-[#FC9430]" />
            <p className="text-xs font-semibold leading-5 text-[#154212] sm:text-sm">
              Pejuang lingkungan bersih & bebas sampah
            </p>
          </div>

          {/* HEADING */}
          <div className="flex flex-col items-start space-y-1">
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] leading-[1.05] font-extrabold tracking-[-1.5px] text-[#154212]">
              Bersama
            </h1>
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] leading-[1.05] font-extrabold tracking-[-1.5px] text-[#154212]">
              Membangun
            </h1>

            {/* HIGHLIGHT */}
            <div className="relative inline-block mt-1">
              <h1 className="relative z-10 text-3xl sm:text-4xl lg:text-5xl xl:text-[56px] leading-[1.05] font-extrabold tracking-[-1.5px] text-[#FC9430]">
                Ekosistem Hijau
              </h1>
              <div className="absolute -bottom-1 left-0 z-0 h-[10px] w-full rounded-full bg-[#FC9430]/15 blur-[1px]" />
            </div>
          </div>

          {/* DESCRIPTION */}
           <p className="max-w-[520px] text-left text-base lg:text-lg font-medium leading-relaxed text-[#42493E]">
            Mewujudkan lingkungan yang asri melalui aksi nyata,<br />
            edukasi berkelanjutan, dan kolaborasi masyarakat <br />
            dalam pengelolaan sampah yang bijak.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap items-center gap-4 pt-2">

            {/* PRIMARY BUTTON */}
            <button className="group inline-flex items-center gap-3 rounded-full bg-[linear-gradient(172deg,rgba(21,66,18,1)_0%,rgba(45,90,39,1)_100%)] px-7 py-4 shadow-[0px_12px_40px_#15421226] transition-all duration-300 hover:scale-[1.02] active:scale-95">
              <span className="text-sm font-bold leading-7 text-white">
                Hubungi Kami
              </span>
              <ArrowRight
                size={20}
                className="text-white transition-transform duration-300 group-hover:translate-x-1"
              />
            </button>

            {/* SECONDARY BUTTON */}
            <button className="group inline-flex items-center gap-3 rounded-full bg-[#E8E9E4] px-7 py-4 transition-all duration-300 hover:scale-[1.02] active:scale-95">
              <img src="/igg.png" alt="Instagram" className="h-5 w-5 object-contain" />
              <span className="text-sm font-bold leading-7 text-[#154212]">
                Jelajahi Kegiatan
              </span>
            </button>

          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 hidden justify-center lg:order-2 lg:flex lg:justify-end"
        >

          {/* IMAGE WRAPPER */}
          <div className="relative w-full max-w-[600px] xl:max-w-[680px]">

            {/* BLUR BACKGROUND */}
            <div className="absolute left-6 top-6 xl:left-8 xl:top-8 h-full w-full rounded-[40px] xl:rounded-[56px] bg-[#FC9430]/10 blur-[32px]" />

            {/* IMAGE */}
            <div className="relative z-10 w-full aspect-[1.4/1] overflow-hidden rounded-[32px] xl:rounded-[48px] border-[8px] xl:border-[10px] border-white/50 shadow-[0px_20px_60px_#1542121a]"> 
              <img
                src="/tb.png"
                alt="Eco Illustration"
                className="h-full w-full object-cover"
              />
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
}