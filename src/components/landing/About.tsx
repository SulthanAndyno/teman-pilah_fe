'use client';

import { motion } from 'motion/react';
import { Card } from '@/components/ui/Card';
import { Eye, Flag, Heart } from 'lucide-react';

export function About() {
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 }
  };

  const stagger = {
    whileInView: { transition: { staggerChildren: 0.1 } }
  };

  return (
    <section id="tentang" className="py-24 bg-[#F9FAF5]">
      <div className="max-w-[1440px] 2xl:px-12 mx-auto px-6 text-center space-y-16">
        <motion.div {...fadeInUp} className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-[32px] md:text-[40px] lg:text-5xl font-bold text-[#1B3022]">Tentang Teman Pilah</h2>
          <p className="text-lg md:text-xl text-[#3D4F41] leading-relaxed font-medium">
            Kami adalah komunitas pejuang lingkungan yang berkomitmen untuk menciptakan ekosistem bersih dan bebas sampah melalui aksi kolektif.
          </p>
        </motion.div>

        <motion.div 
          variants={stagger}
          initial="initial"
          whileInView="whileInView"
          viewport={{ once: true }}
          className="grid md:grid-cols-3 gap-8"
        >
          {[
            { 
              icon: Eye, 
              title: 'Visi', 
              desc: 'Menjadi pelopor gerakan masyarakat sadar lingkungan untuk Indonesia yang bersih, hijau, dan lestari.',
              iconBg: 'bg-[#DDE5D7]',
              iconColor: 'text-[#2D5A27]'
            },
            { 
              icon: Flag, 
              title: 'Misi', 
              desc: 'Mengedukasi masyarakat, memfasilitasi pemilahan sampah, dan berkolaborasi dengan berbagai pihak dalam pengelolaan limbah.',
              iconBg: 'bg-[#FEF4E9]',
              iconColor: 'text-[#FC9430]'
            },
            { 
              icon: Heart, 
              title: 'Nilai', 
              desc: 'Kepedulian, gotong royong, keberlanjutan, dan inovasi dalam setiap langkah pelestarian lingkungan.',
              iconBg: 'bg-[#F2EDF0]',
              iconColor: 'text-[#8B5F77]'
            }
          ].map((item, idx) => (
            <motion.div key={idx} variants={fadeInUp}>
              <Card className="h-full bg-[#F1F3E9]/60 border-none rounded-[40px] p-10 flex flex-col items-center shadow-none transition-transform hover:scale-[1.02]">
                <div className={`${item.iconBg} ${item.iconColor} w-20 h-20 rounded-full flex items-center justify-center mb-8`}>
                  <item.icon size={36} />
                </div>
                <h3 className="text-2xl font-bold text-[#1B3022] mb-6">{item.title}</h3>
                <p className="text-[#3D4F41] leading-relaxed text-lg font-medium">
                  {item.desc}
                </p>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
