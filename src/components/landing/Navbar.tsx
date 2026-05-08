// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { Menu, X, MessageCircle } from 'lucide-react';
// import { cn } from '@/lib/utils';
// import { Button } from '@/components/ui/Button';

// export function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => setIsScrolled(window.scrollY > 20);
//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   const navLinks = [
//     { name: 'Beranda', href: '#' },
//     { name: 'Tentang Kami', href: '#tentang' },
//     { name: 'Program', href: '#program' },
//     { name: 'Edukasi', href: '#edukasi' },
//     { name: 'Katalog', href: '#katalog' },
//   ];

//   return (
//     <nav 
//       className={cn(
//         'fixed w-full z-50 transition-all duration-300 py-4',
//         isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
//       )}
//     >
//       <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
//         <Link href="/" className="flex items-center gap-2">
//           <div className="w-10 h-10 bg-primary rounded-xl flex items-center justify-center text-white font-serif font-bold text-xl uppercase tracking-tighter">
//             TP
//           </div>
//           <span className="font-serif font-bold text-2xl text-primary hidden sm:block">Teman Pilah</span>
//         </Link>

//         <div className="hidden md:flex items-center gap-8">
//           {navLinks.map((link) => (
//             <a 
//               key={link.name} 
//               href={link.href}
//               className="text-neutral hover:text-primary font-medium transition-colors"
//             >
//               {link.name}
//             </a>
//           ))}
//           <Link href="/login">
//             <Button size="sm" variant="outline">Admin Login</Button>
//           </Link>
//           <Button size="sm" className="hidden lg:flex items-center gap-2">
//             <MessageCircle size={18} />
//             WhatsApp
//           </Button>
//         </div>

//         <button 
//           className="md:hidden text-primary"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       {isMobileMenuOpen && (
//         <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl animate-in slide-in-from-top duration-300">
//           <div className="flex flex-col p-6 gap-4">
//             {navLinks.map((link) => (
//               <a 
//                 key={link.name} 
//                 href={link.href}
//                 className="text-neutral font-medium py-2 border-b border-border/50"
//                 onClick={() => setIsMobileMenuOpen(false)}
//               >
//                 {link.name}
//               </a>
//             ))}
//             <div className="flex flex-col gap-3 mt-2">
//               <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
//                 <Button variant="outline" className="w-full">Admin Login</Button>
//               </Link>
//               <Button className="w-full">WhatsApp Kami</Button>
//             </div>
//           </div>
//         </div>
//       )}
//     </nav>
//   );
// }


'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, MessageCircle } from 'lucide-react';
import { motion } from 'motion/react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Beranda');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#' },
    { name: 'Tentang Kami', href: '#tentang' },
    { name: 'Program', href: '#program' },
    { name: 'Edukasi', href: '#edukasi' },
    { name: 'Katalog', href: '#katalog' },
    { name: 'Kontak', href: '#kontak' },
  ];

  return (
    <nav 
      className={cn(
        'fixed w-full z-50 transition-all duration-300 py-6',
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      )}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-2xl text-primary tracking-tight">Teman Pilah</span>
        </Link>

        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link) => (
            <a 
              key={link.name} 
              href={link.href}
              onClick={() => setActiveLink(link.name)}
              className={cn(
                "relative font-medium transition-colors py-1",
                activeLink === link.name ? "text-primary" : "text-neutral/70 hover:text-primary"
              )}
            >
              {link.name}
              {activeLink === link.name && (
                <motion.span 
                  layoutId="active-underline"
                  className="absolute -bottom-2.5 left-0 right-0 h-0.75 bg-orange-500 rounded-full"
                  transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                />
              )}
            </a>
          ))}
        </div>

        <div className="hidden md:flex items-center gap-4">
          <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 flex items-center gap-3">
            <MessageCircle size={20} className="fill-white" />
            <span className="font-medium">WhatsApp</span>
          </Button>
        </div>

        <button 
          className="md:hidden text-primary"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isMobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl animate-in slide-in-from-top duration-300">
          <div className="flex flex-col p-6 gap-4">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-neutral font-medium py-2 border-b border-border/50"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                {link.name}
              </a>
            ))}
            <div className="flex flex-col gap-3 mt-2">
              <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
                <Button variant="outline" className="w-full">Admin Login</Button>
              </Link>
              <Button className="w-full">WhatsApp Kami</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
