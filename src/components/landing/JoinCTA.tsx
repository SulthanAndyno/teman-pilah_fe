'use client';

import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';

export function JoinCTA() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="bg-[#ffffff] py-24">
      <div className="mx-auto max-w-7xl px-6">
        {/* CTA CARD */}
        <div className="relative overflow-hidden rounded-[48px] bg-[linear-gradient(168deg,rgba(21,66,18,1)_0%,rgba(45,90,39,1)_100%)] px-8 py-16 shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] md:px-14 lg:px-20 lg:py-24">

          {/* BLUR EFFECTS */}
          <div className="absolute -right-24 -top-24 h-64 w-64 rounded-full bg-[#ffffff1a] blur-[32px]" />
          <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-[#ffc94333] blur-[32px]" />

          {/* CONTENT */}
          <motion.div
            {...fadeInUp}
            className="relative z-10 flex flex-col items-center text-center"
          >

            {/* TITLE */}
            <div className="space-y-6">
              <h2 className="text-4xl font-extrabold leading-tight tracking-[-1.5px] text-white sm:text-5xl lg:text-6xl">
                Bergabung dengan Teman Pilah
              </h2>

              <p className="mx-auto max-w-3xl text-lg font-medium leading-relaxed text-[#BCF0AE] sm:text-xl">
                Mari bersama ciptakan lingkungan yang lebih baik. Jadilah bagian dari solusi,
              <br />
                bukan polusi.
              </p>

            </div>

            {/* BUTTONS */}
            <div className="mt-12 flex flex-col items-center gap-5">
              {/* WHATSAPP BUTTON */}
              <Button className="group inline-flex w-full min-w-[320px] items-center justify-center gap-3 rounded-full bg-white px-8 py-5 text-lg font-bold text-[#154212] shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a] transition-all duration-300 hover:scale-[1.02] hover:bg-white">
                <img
                  src="/wag.png"
                  alt="WhatsApp"
                  className="h-6 w-6 object-contain"
                />
                <span>Hubungi via WhatsApp</span>
              </Button>

              {/* INSTAGRAM BUTTON */}
              <Button className="group inline-flex w-full min-w-[320px] items-center justify-center gap-3 rounded-full bg-white px-8 py-5 text-lg font-bold text-[#154212] shadow-[0px_4px_6px_-4px_#0000001a,0px_10px_15px_-3px_#0000001a] transition-all duration-300 hover:scale-[1.02] hover:bg-white">
                <img
                  src="/igg.png"
                  alt="Instagram"
                  className="h-6 w-6 object-contain"
                />
                <span>Hubungi via Instagram</span>

              </Button>

            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}