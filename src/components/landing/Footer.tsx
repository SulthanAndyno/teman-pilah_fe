import { Globe, Mail, Phone } from 'lucide-react';
// import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-bg text-[#3D4F41] py-24">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-12 gap-12 md:gap-8">
        {/* Branding Column */}
        <div className="md:col-span-5 space-y-10">
          <div className="flex items-center gap-3">
            <div className="w-14 h-14 bg-white rounded-full p-2 flex items-center justify-center shadow-sm">
              <img 
                src="-" 
                alt="Logo" 
                className="w-full h-full object-contain"
              />
            </div>
            <span className="font-bold text-3xl text-[#1B3022] tracking-tight">Teman Pilah</span>
          </div>
          <p className="text-xl leading-relaxed font-medium max-w-md">
            Mewujudkan lingkungan yang asri melalui aksi nyata, edukasi berkelanjutan, dan kolaborasi masyarakat dalam pengelolaan sampah yang bijak.
          </p>
          <div className="flex gap-4">
            <a href="#" className="w-14 h-14 rounded-full bg-[#EBECE1] flex items-center justify-center hover:bg-priamry hover:text-white transition-all duration-300">
              <Globe size={28} />
            </a>
            <a href="#" className="w-14 h-14 rounded-full bg-[#EBECE1] flex items-center justify-center hover:bg-priamry hover:text-white transition-all duration-300">
              <Mail size={28} />
            </a>
            <a href="#" className="w-14 h-14 rounded-full bg-[#EBECE1] flex items-center justify-center hover:bg-priamry hover:text-white transition-all duration-300">
              <Phone size={28} />
            </a>
          </div>
        </div>

        {/* Navigation Columns */}
        <div className="md:col-span-3">
          <h4 className="text-[#1B3022] text-2xl font-bold mb-10">Navigasi</h4>
          <ul className="space-y-6 text-xl font-medium">
            <li><a href="#" className="hover:text-primary transition-colors">Beranda</a></li>
            <li><a href="#tentang" className="hover:text-primary transition-colors">Tentang Kami</a></li>
            <li><a href="#program" className="hover:text-primary transition-colors">Program</a></li>
            <li><a href="#edukasi" className="hover:text-primary transition-colors">Edukasi</a></li>
          </ul>
        </div>

        <div className="md:col-span-3 md:col-start-10">
          <h4 className="text-[#1B3022] text-2xl font-bold mb-10">Lainnya</h4>
          <ul className="space-y-6 text-xl font-medium">
            <li><a href="#katalog" className="hover:text- transition-colors">Katalog</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Dokumentasi</a></li>
            <li><a href="#" className="hover:text-primary transition-colors">Kontak</a></li>
          </ul>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="max-w-7xl mx-auto px-6 mt-32 pt-12 border-t border-[#3D4F41]/10 flex flex-col md:flex-row justify-between items-center gap-8 text-[#3D4F41]/60 text-lg font-medium">
        <p>© 2026 Teman Pilah. Melestarikan Lingkungan Bersama Melalui Aksi Nyata.</p>
        <div className="flex gap-12">
          <a href="#" className="hover:text-[#1B3022] transition-colors">Kebijakan Privasi</a>
          <a href="#" className="hover:text-[#1B3022] transition-colors">Syarat & Ketentuan</a>
        </div>
      </div>
    </footer>
  );
}
