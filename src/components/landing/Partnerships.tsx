'use client';

import { motion } from 'motion/react';

export function Partnerships() {
  const fadeInUp = {
    initial: { opacity: 0, y: 10 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-12 bg-bg border-t border-[#1B3022]/5">
      <div className="max-w-7xl mx-auto px-6 space-y-10">
        <h3 className="text-center text-[#3D4F41] font-bold text-lg opacity-80">
          Berkolaborasi Dengan
        </h3>
        
        <div className="flex flex-wrap justify-center items-center gap-6 md:gap-12">
          {[1, 2, 3, 4].map((i) => (
            <motion.div 
              key={i}
              {...fadeInUp}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="w-32 h-12 md:w-40 md:h-16 bg-[#DCE0D9] rounded-2xl animate-pulse"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
