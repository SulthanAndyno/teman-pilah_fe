'use client';

import { motion } from 'motion/react';
import { Button } from '@/components/ui/Button';
import { ArrowRight, Play, Users, Leaf } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative py-24 lg:py-32 overflow-hidden bg-bg">
      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="space-y-12"
        >
          <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-[#E8EAE0] rounded-full text-[#3D4F41] text-sm font-bold">
            <Leaf size={18} className="text-accent" />
            <span>Pejuang lingkungan bersih & bebas sampah</span>
          </div>

          <div className="space-y-6">
            <h1 className="text-6xl lg:text-8xl font-bold relative leading-none text-[#1B3022]">
              Bersama <br />
              Membangun < br />
              <span className="text-accent relative inline-block whitespace-nowrap">
                Ekosistem Hijau
                <span className="absolute bottom-2 left-5 w-full h-full bg-accent/20 -z-10" />
              </span>
            </h1>
            <p className="text-2xl text-[#3D4F41] leading-relaxed max-w-xl font-medium opacity-80">
              Mewujudkan lingkungan yang asri melalui aksi nyata, edukasi berkelanjutan, dan kolaborasi masyarakat dalam pengelolaan sampah yang bijak.
            </p>
          </div>

          <div className="flex flex-wrap gap-6 pt-4">
            <Button className="rounded-full px-10 py-8 bg-[#234926] hover:bg-[#1B3022] text-white text-xl font-bold flex items-center gap-3 group shadow-lg shadow-[#234926]/20 transition-all">
              Hubungi Kami
              <ArrowRight className="group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="secondary" className="rounded-full px-10 py-8 bg-[#E6E8DE] hover:bg-[#DDE0D4] text-[#1B3022] text-xl font-bold flex items-center gap-3 shadow-sm transition-all border-none">
              <Play size={24} className="fill-[#1B3022] text-[#1B3022]" />
              Tonton Video
            </Button>
          </div>
        </motion.div>

        <motion.div 
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          className="relative flex justify-end"
        >
          <div className="relative z-10 rounded-[80px] overflow-hidden bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] p-4 max-w-160]">
            <img 
              src="/tb.png" 
              alt="Eco Illustration" 
              className="w-full h-full object-contain rounded-[50px]"
            />
          </div>

          {/* Stats Card */}
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="absolute -bottom-10 -left-10 z-20 bg-white p-8 rounded-[26px] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] flex items-center gap-6 min-w-[320px]"
          >
            <div className="w-16 h-16 bg-bg rounded-3xl flex items-center justify-center text-accent">
              <Users size={32} />
            </div>
            <div>
              <p className="text-4xl font-bold text-[#1B3022]">500+</p>
              <p className="text-xl text-[#3D4F41] font-semibold opacity-60">Relawan Aktif</p>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
