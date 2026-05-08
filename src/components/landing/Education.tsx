'use client';

import { Card } from '@/components/ui/Card';
// import { Badge } from '@/components/ui/Badge';
import { Trash2, RefreshCw, Recycle, CheckCircle2 } from 'lucide-react';
import { cn } from '@/lib/utils';

export function Education() {
  return (
    <section id="edukasi" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 space-y-20">
        <div className="text-center space-y-6 max-w-3xl mx-auto">
          <h2 className="text-5xl font-bold text-[#1B3022]">Pusat Edukasi</h2>
          <p className="text-xl text-[#3D4F41] leading-relaxed font-medium">
            Pahami cara mengelola sampah dengan benar untuk masa depan yang lebih baik dan lingkungan yang asri.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-12">
            <div className="space-y-8">
              <h3 className="text-4xl font-bold text-[#1B3022] border-l-4 border-accent pl-6">Prinsip 3R</h3>
              <div className="space-y-10">
                {[
                  { icon: Trash2, title: 'Reduce (Kurangi)', desc: 'Meminimalisir penggunaan barang yang menghasilkan sampah, seperti plastik sekali pakai.', color: 'text-[#FC9430]', bg: 'bg-[#FEF4E9]' },
                  { icon: RefreshCw, title: 'Reuse (Gunakan Kembali)', desc: 'Memakai kembali barang yang masih layak fungsi untuk mengurangi penumpukan sampah.', color: 'text-[#2D5A27]', bg: 'bg-[#F1F3E9]' },
                  { icon: Recycle, title: 'Recycle (Daur Ulang)', desc: 'Mengolah sampah menjadi produk baru yang bernilai guna dan ekonomis.', color: 'text-[#8B5F77]', bg: 'bg-[#F2EDF0]' }
                ].map((item, idx) => (
                  <div key={idx} className="flex gap-8 group">
                    <div className={cn("shrink-0 w-16 h-16 rounded-[20px] flex items-center justify-center transition-transform group-hover:scale-110 duration-300", item.bg, item.color)}>
                      <item.icon size={32} />
                    </div>
                    <div>
                      <h4 className="text-2xl font-bold text-[#1B3022] mb-2">{item.title}</h4>
                      <p className="text-[#3D4F41] text-lg font-medium leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid sm:grid-cols-2 gap-8">
            <Card className="bg-[#F1F3E9]/50 border-none rounded-[40px] p-10 flex flex-col shadow-none">
              <div className="inline-flex self-start px-4 py-1.5 bg-primary text-white rounded-full text-sm font-bold mb-6">Sampah Organik</div>
              <ul className="space-y-4 text-lg text-[#3D4F41] font-medium">
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-primary" /> Sisa Makanan</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-primary" /> Daun Kering</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-primary" /> Kulit Buah</li>
              </ul>
            </Card>
            <Card className="bg-[#FEF4E9]/50 border-none rounded-[40px] p-10 flex flex-col shadow-none">
              <div className="inline-flex self-start px-4 py-1.5 bg-accent text-white rounded-full text-sm font-bold mb-6">Sampah Anorganik</div>
              <ul className="space-y-4 text-lg text-[#3D4F41] font-medium">
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-accent" /> Botol Plastik</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-accent" /> Kertas & Karton</li>
                <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-accent" /> Kaleng Logam</li>
              </ul>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
