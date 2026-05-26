// /* eslint-disable @next/next/no-img-element */
// 'use client';

// import { useState, useEffect } from 'react';
// import Link from 'next/link';
// import { Menu, X } from 'lucide-react';
// import { motion, AnimatePresence } from 'motion/react';
// import { cn } from '@/lib/utils';
// import { Button } from '@/components/ui/Button';

// export function Navbar() {
//   const [isScrolled, setIsScrolled] = useState(false);
//   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
//   const [activeLink, setActiveLink] = useState('Beranda');

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
//     { name: 'Kontak', href: '#kontak' },
//   ];

//   const whatsappLink = "https://wa.me/6281234567890"; // Ganti dengan nomor asli

//   return (
//     <nav 
//       className={cn(
//         'fixed w-full z-50 transition-all duration-300 h-20 flex items-center',
//         isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-neutral-100' : 'bg-transparent'
//       )}
//     >
//       <div className="w-full px-8 flex items-center justify-between">
//         <Link href="/" className="flex items-center gap-2">
//           <span className="font-bold text-3xl text-[#1B361F] tracking-tight whitespace-nowrap">Teman Pilah</span>
//         </Link>

//         {/* Desktop Navigation */}
//         <div className="hidden md:flex items-center justify-center flex-1 mx-8 lg:mx-12">
//           <div className="flex items-center gap-6 lg:gap-12">
//             {navLinks.map((link) => (
//               <a 
//                 key={link.name} 
//                 href={link.href}
//                 onClick={() => setActiveLink(link.name)}
//                 className={cn(
//                   "relative font-medium text-lg transition-all duration-300 py-1 whitespace-nowrap",
//                   activeLink === link.name 
//                     ? "text-[#1B361F] font-bold" 
//                     : "text-[#3D4F41]/60 hover:text-[#1B361F]"
//                 )}
//               >
//                 {link.name}
//                 {activeLink === link.name && (
//                   <motion.span 
//                     layoutId="active-underline"
//                     className="absolute -bottom-2 left-0 right-0 h-[3px] bg-[#FC9430] rounded-full"
//                     transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
//                   />
//                 )}
//               </a>
//             ))}
//           </div>
//         </div>

//         {/* Desktop Button - Exact Figma Spec (W: 240px, H: 48px, Gap: 8px) */}
//         <div className="hidden md:flex items-center">
//           <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
//             <Button 
//               className="rounded-full px-6 py-3 bg-[#1B361F] hover:bg-[#234926] flex items-center gap-2 shadow-sm border-none text-white transition-all duration-300 hover:scale-[1.03] active:scale-95 group h-[48px] w-[240px] justify-center"
//             >
//               <div className="flex items-center justify-center">
//                 <img  
//                   src="/wa.png"
//                   alt="WhatsApp"
//                   className="w-5 h-5 object-contain"
//                 />
//               </div>
//               <span className="font-bold text-base tracking-wide">WhatsApp</span>
//             </Button>
//           </a>
//         </div>

//         <button 
//           className="md:hidden text-[#1B361F] p-2"
//           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
//         >
//           {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
//         </button>
//       </div>

//       {/* Mobile Menu */}
//       <AnimatePresence>
//         {isMobileMenuOpen && (
//           <motion.div 
//             initial={{ opacity: 0, y: -20 }}
//             animate={{ opacity: 1, y: 0 }}
//             exit={{ opacity: 0, y: -20 }}
//             transition={{ duration: 0.3 }}
//             className="md:hidden fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-bg z-40 overflow-y-auto"
//           >
//             <div className="flex flex-col p-6 gap-6 h-full">
//               {navLinks.map((link) => (
//                 <a 
//                   key={link.name} 
//                   href={link.href}
//                   className={cn(
//                     "text-2xl font-bold py-4 border-b border-[#1B361F]/10 transition-colors",
//                     activeLink === link.name ? "text-[#1B361F]" : "text-[#1B361F]/50"
//                   )}
//                   onClick={() => {
//                     setActiveLink(link.name);
//                     setIsMobileMenuOpen(false);
//                   }}
//                 >
//                   {link.name}
//                 </a>
//               ))}
              
//               <div className="mt-8">
//                 <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
//                   <Button className="w-full rounded-full py-8 bg-[#1B361F] text-white font-bold text-xl flex items-center justify-center gap-4 shadow-lg transition-transform active:scale-95 h-auto">
//                     <img 
//                       src="/wa.png" 
//                       alt="WhatsApp" 
//                       className="w-8 h-8 invert" 
//                     />
//                     <span>Hubungi WhatsApp</span>
//                   </Button>
//                 </a>
//               </div>
              
//               <div className="mt-auto pb-12 opacity-50">
//                 <p className="text-[#1B361F] font-medium text-center">© 2024 Teman Pilah</p>
//               </div>
//             </div>
//           </motion.div>
//         )}
//       </AnimatePresence>
//     </nav>
//   );
// }

/* eslint-disable @next/next/no-img-element */
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/Button';

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeLink, setActiveLink] = useState('Beranda');

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20);

    window.addEventListener('scroll', handleScroll);

    return () =>
      window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'Beranda', href: '#' },
    { name: 'Tentang Kami', href: '#tentang' },
    { name: 'Program', href: '#program' },
    { name: 'Edukasi', href: '#edukasi' },
    { name: 'Katalog', href: '#katalog' },
    { name: 'Kontak', href: '#kontak' },
  ];

  const whatsappLink = 'https://wa.me/6281234567890';

  return (
    <nav
      className={cn(
        'fixed top-0 z-50 flex h-[80px] w-full items-center transition-all duration-300',
        isScrolled
          ? 'border-b border-neutral-100 bg-white/90 backdrop-blur-md shadow-sm'
          : 'bg-transparent'
      )}
    >

      {/* CONTAINER */}
      <div className="mx-auto flex w-full max-w-[1280px] items-center justify-between px-6 lg:px-8">

        {/* LOGO */}
        <Link
          href="/"
          className="flex items-center gap-2"
        >

          <span className="whitespace-nowrap text-[32px] font-bold tracking-tight text-[#1B361F]">
            Teman Pilah
          </span>

        </Link>

        {/* DESKTOP NAVIGATION */}
        <div className="hidden flex-1 items-center justify-center md:flex">

          <div className="flex items-center gap-8 lg:gap-10">

            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={cn(
                  'relative whitespace-nowrap py-1 text-[15px] font-medium transition-all duration-300',
                  activeLink === link.name
                    ? 'font-bold text-[#1B361F]'
                    : 'text-[#3D4F41]/60 hover:text-[#1B361F]'
                )}
              >

                {link.name}

                {activeLink === link.name && (
                  <motion.span
                    layoutId="active-underline"
                    className="absolute -bottom-[10px] left-0 right-0 h-[2px] rounded-full bg-[#FC9430]"
                    transition={{
                      type: 'spring',
                      bounce: 0.2,
                      duration: 0.6,
                    }}
                  />
                )}
              </a>
            ))}
          </div>
        </div>

        {/* DESKTOP BUTTON */}
        <div className="hidden items-center md:flex">

          <a
            href={whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
          >

            <Button
              className="flex h-[48px] w-[240px] items-center justify-center gap-2 rounded-full border-none bg-[#1B361F] px-6 py-3 text-white shadow-sm transition-all duration-300 hover:scale-[1.03] hover:bg-[#234926] active:scale-95"
            >

              <img
                src="/wa.png"
                alt="WhatsApp"
                className="h-5 w-5 object-contain"
              />

              <span className="text-base font-bold tracking-wide">
                WhatsApp
              </span>

            </Button>
          </a>
        </div>

        {/* MOBILE BUTTON */}
        <button
          className="flex h-10 w-10 items-center justify-center rounded-full text-[#1B361F] md:hidden"
          onClick={() =>
            setIsMobileMenuOpen(!isMobileMenuOpen)
          }
        >

          {isMobileMenuOpen ? (
            <X size={22} />
          ) : (
            <Menu size={22} />
          )}

        </button>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>

        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}

            animate={{ opacity: 1, y: 0 }}

            exit={{ opacity: 0, y: -20 }}

            transition={{ duration: 0.3 }}

            className="fixed left-0 top-[80px] z-40 h-[calc(100vh-80px)] w-full overflow-y-auto bg-[#F8F6F1] md:hidden"
          >

            <div className="flex h-full flex-col gap-6 px-6 py-8">

              {/* LINKS */}
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className={cn(
                    'border-b border-[#1B361F]/10 py-4 text-xl font-bold transition-colors',
                    activeLink === link.name
                      ? 'text-[#1B361F]'
                      : 'text-[#1B361F]/50'
                  )}
                  onClick={() => {
                    setActiveLink(link.name);
                    setIsMobileMenuOpen(false);
                  }}
                >

                  {link.name}

                </a>
              ))}

              {/* BUTTON */}
              <div className="mt-4">

                <a
                  href={whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >

                  <Button className="flex h-[58px] w-full items-center justify-center gap-3 rounded-full bg-[#1B361F] text-lg font-bold text-white shadow-lg transition-transform active:scale-95">

                    <img
                      src="/wa.png"
                      alt="WhatsApp"
                      className="h-6 w-6 object-contain"
                    />

                    <span>Hubungi WhatsApp</span>

                  </Button>
                </a>
              </div>

              {/* COPYRIGHT */}
              <div className="mt-auto pb-10 opacity-50">

                <p className="text-center font-medium text-[#1B361F]">
                  © 2024 Teman Pilah
                </p>

              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}