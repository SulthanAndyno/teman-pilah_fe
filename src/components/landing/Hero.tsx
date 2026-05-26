'use client';

import { motion } from 'motion/react';
import { ArrowRight, Play, Users, Leaf } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F8F6F1] pt-32 pb-16 lg:pt-40 lg:pb-24">

      {/* CONTAINER */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-16">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 flex flex-col items-start gap-6 lg:order-1 lg:gap-8"
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

            <h1 className="text-5xl font-extrabold leading-[1.1] tracking-[-1.5px] text-[#154212] sm:text-6xl">
              Bersama
            </h1>

            <h1 className="text-5xl font-extrabold leading-[1.1] tracking-[-1.5px] text-[#154212] sm:text-6xl">
              Membangun
            </h1>

            {/* HIGHLIGHT */}
            <div className="relative inline-block">

              <h1 className="relative z-10 text-5xl font-extrabold leading-[1.1] tracking-[-1.5px] text-[#FC9430] sm:text-6xl">
                Ekosistem Hijau
              </h1>

              <div className="absolute -bottom-1 left-0 z-0 h-[10px] w-full rounded-full bg-[#FC9430]/15 blur-[1px]" />

            </div>
          </div>

          {/* DESCRIPTION */}
          {/* <p className="max-w-[540px] text-lg font-medium leading-relaxed text-[#42493E] sm:text-xl"> */}
           <p className="max-w-[540px] text-justify text-lg font-medium leading-relaxed text-[#42493E] sm:text-xl">
            Mewujudkan lingkungan yang asri melalui aksi nyata,
            edukasi berkelanjutan, dan kolaborasi masyarakat
            dalam pengelolaan sampah yang bijak.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap items-center gap-4 pt-2 lg:pt-4">

            {/* PRIMARY BUTTON */}
            <button className="group inline-flex items-center gap-3 rounded-full bg-[linear-gradient(172deg,rgba(21,66,18,1)_0%,rgba(45,90,39,1)_100%)] px-8 py-4 shadow-[0px_12px_40px_#15421226] transition-all duration-300 hover:scale-[1.02] active:scale-95 sm:px-10 sm:py-5">

              <span className="text-lg font-bold leading-7 text-white">
                Hubungi Kami
              </span>

              <ArrowRight
                size={20}
                className="text-white transition-transform duration-300 group-hover:translate-x-1"
              />

            </button>

            {/* SECONDARY BUTTON */}
            <button className="group inline-flex items-center gap-3 rounded-full bg-[#E8E9E4] px-8 py-4 transition-all duration-300 hover:scale-[1.02] active:scale-95 sm:px-10 sm:py-5">

              {/* PLAY ICON */}
              <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-#E8E9E4 shadow-sm">

                <img
                  src="/play.png"
                  alt="Play"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';

                    if (e.currentTarget.nextElementSibling) {
                      (
                        e.currentTarget.nextElementSibling as HTMLElement
                      ).style.display = 'flex';
                    }
                  }}
                />

                <Play
                  size={18}
                  className="ml-1 hidden fill-[#154212] text-[#154212]"
                />

              </div>

              <span className="text-lg font-bold leading-7 text-[#154212]">
                Tonton Video
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
          <div className="relative h-[560px] w-full">

            {/* BLUR BACKGROUND */}
            <div className="absolute left-8 top-8 h-full w-full rounded-[64px] bg-[#FC9430]/10 blur-[32px]" />

            {/* IMAGE */}
            <div className="relative z-10 h-full overflow-hidden rounded-[48px] border-8 border-white/50 shadow-[0px_20px_60px_#1542121a]">

              <img
                src="/tb.png"
                alt="Eco Illustration"
                className="h-full w-full object-cover"
              />

            </div>

            {/* FLOATING CARD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute -bottom-8 -left-8 z-20 inline-flex items-center gap-5 rounded-[32px] border border-white/50 bg-white p-6 shadow-[0px_12px_40px_#15421214]"
            >

              {/* ICON */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FEF4E9]">

                <Users className="text-[#FC9430]" size={28} />

              </div>

              {/* TEXT */}
              <div className="flex flex-col">

                <h3 className="text-3xl font-extrabold leading-none text-[#154212]">
                  500+
                </h3>

                <p className="text-sm font-medium text-[#42493E]">
                  Relawan Aktif
                </p>

              </div>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}