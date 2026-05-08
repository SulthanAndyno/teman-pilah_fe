'use client';

import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { MessageCircle,} from 'lucide-react';

export function JoinCTA() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  return (
    <section className="py-24 bg-bg">
      <div className="max-w-7xl mx-auto px-6">
        <div className="bg-[#2D4D2F] rounded-[80px] p-16 lg:p-28 text-center text-white space-y-12 relative overflow-hidden shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)]">
          {/* Subtle glow effect like in the photo */}
          <div className="absolute -bottom-1/4 -left-1/4 w-150 h-150 bg-accent opacity-[0.08] rounded-full blur-[120px] pointer-events-none" />
          
          <motion.div {...fadeInUp} className="max-w-4xl mx-auto space-y-12 relative z-10">
            <div className="space-y-6">
              <h2 className="text-6xl md:text-8xl font-bold tracking-tight">Bergabung dengan Teman Pilah</h2>
              <p className="text-xl md:text-2xl text-white/90 font-medium max-w-2xl mx-auto leading-relaxed">
                Mari bersama ciptakan lingkungan yang lebih baik. Jadilah bagian dari solusi, bukan polusi.
              </p>
            </div>

            <div className="flex flex-col items-center gap-6 pt-4">
              <Button className="w-full max-w-105 rounded-full py-8 bg-white text-[#1B3022] hover:bg-white/95 text-2xl font-bold flex items-center justify-center gap-3 border-none shadow-none transition-transform hover:scale-[1.02]">
                <MessageCircle size={28} className="text-[#25D366] fill-[#25D366] fill-opacity-0" />
                <span>Hubungi via WhatsApp</span>
              </Button>
              
              <Button className="w-full max-w-105 rounded-full py-8 bg-white text-[#1B3022] hover:bg-white/95 text-2xl font-bold flex items-center justify-center gap-3 border-none shadow-none transition-transform hover:scale-[1.02]">
                {/* < size={28} className="text-[#E4405F]" /> */}
                <span>Hubungi via Instagram</span>
              </Button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
