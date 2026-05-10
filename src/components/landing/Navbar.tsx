// // // 'use client';

// // // import { useState, useEffect } from 'react';
// // // import Link from 'next/link';
// // // import { Menu, X, MessageCircle } from 'lucide-react';
// // // import { motion } from 'motion/react';
// // // import { cn } from '@/lib/utils';
// // // import { Button } from '@/components/ui/Button';

// // // export function Navbar() {
// // //   const [isScrolled, setIsScrolled] = useState(false);
// // //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// // //   const [activeLink, setActiveLink] = useState('Beranda');

// // //   useEffect(() => {
// // //     const handleScroll = () => setIsScrolled(window.scrollY > 20);
// // //     window.addEventListener('scroll', handleScroll);
// // //     return () => window.removeEventListener('scroll', handleScroll);
// // //   }, []);

// // //   const navLinks = [
// // //     { name: 'Beranda', href: '#' },
// // //     { name: 'Tentang Kami', href: '#tentang' },
// // //     { name: 'Program', href: '#program' },
// // //     { name: 'Edukasi', href: '#edukasi' },
// // //     { name: 'Katalog', href: '#katalog' },
// // //     { name: 'Kontak', href: '#footer' },
// // //   ];

// // //   return (
// // //     <nav 
// // //       className={cn(
// // //         'fixed w-full z-50 transition-all duration-300 py-6 h-20 flex items-center',
        
// // //         isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
// // //       )}
// // //     >
// // //       {/* <div className="max-w-7xl mx-auto px-8 flex items-center justify-between"> */}
// // //       <div className="w-full max-w-360 mx-auto px-10 flex items-center justify-between">
// // //         <Link href="/" className="flex items-center gap-2">
// // //           <span className="font-bold text-2xl text-primary tracking-tight">Teman Pilah</span>
// // //         </Link>

// // //         <div className="hidden md:flex items-center gap-12">
// // //           {navLinks.map((link) => (
// // //             <a 
// // //               key={link.name} 
// // //               href={link.href}
// // //               onClick={() => setActiveLink(link.name)}
// // //               className={cn(
// // //                 "relative font-medium transition-colors py-1",
// // //                 activeLink === link.name ? "text-primary" : "text-neutral/70 hover:text-primary"
// // //               )}
// // //             >
// // //               {link.name}
// // //               {activeLink === link.name && (
// // //                 <motion.span 
// // //                   layoutId="active-underline"
// // //                   className="absolute -bottom-2.5 left-0 right-0 h-0.75 bg-orange-500 rounded-full"
// // //                   transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
// // //                 />
// // //               )}
// // //             </a>
// // //           ))}
// // //         </div>

// // //         <div className="hidden md:flex items-center gap-4">
// // //           <Button size="lg" className="rounded-full px-8 bg-primary hover:bg-primary/90 flex items-center gap-3">
// // //             <MessageCircle size={20} className="fill-white" />
// // //             <span className="font-medium">WhatsApp</span>
// // //           </Button>
// // //         </div>

// // //         <button 
// // //           className="md:hidden text-primary"
// // //           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// // //         >
// // //           {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
// // //         </button>
// // //       </div>

// // //       {/* Mobile Menu */}
// // //       {isMobileMenuOpen && (
// // //         <div className="md:hidden absolute top-full left-0 w-full bg-white shadow-xl animate-in slide-in-from-top duration-300">
// // //           <div className="flex flex-col p-6 gap-4">
// // //             {navLinks.map((link) => (
// // //               <a 
// // //                 key={link.name} 
// // //                 href={link.href}
// // //                 className="text-neutral font-medium py-2 border-b border-border/50"
// // //                 onClick={() => setIsMobileMenuOpen(false)}
// // //               >
// // //                 {link.name}
// // //               </a>
// // //             ))}
// // //             <div className="flex flex-col gap-3 mt-2">
// // //               <Link href="/login" onClick={() => setIsMobileMenuOpen(false)}>
// // //                 <Button variant="outline" className="w-full">Admin Login</Button>
// // //               </Link>
// // //               <Button className="w-full">WhatsApp Kami</Button>
// // //             </div>
// // //           </div>
// // //         </div>
// // //       )}
// // //     </nav>
// // //   );
// // // }
// // 'use client';

// // import { useState, useEffect } from 'react';
// // import Link from 'next/link';
// // import { Menu, X, MessageCircle } from 'lucide-react';
// // import { motion } from 'motion/react';
// // import { cn } from '@/lib/utils';
// // import { Button } from '@/components/ui/Button';

// // export function Navbar() {
// //   const [isScrolled, setIsScrolled] = useState(false);
// //   const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
// //   const [activeLink, setActiveLink] = useState('Beranda');

// //   useEffect(() => {
// //     const handleScroll = () => setIsScrolled(window.scrollY > 20);
// //     window.addEventListener('scroll', handleScroll);
// //     return () => window.removeEventListener('scroll', handleScroll);
// //   }, []);

// //   const navLinks = [
// //     { name: 'Beranda', href: '#' },
// //     { name: 'Tentang Kami', href: '#tentang' },
// //     { name: 'Program', href: '#program' },
// //     { name: 'Edukasi', href: '#edukasi' },
// //     { name: 'Katalog', href: '#katalog' },
// //     { name: 'Kontak', href: '#kontak' },
// //   ];

// //   return (
// //     <nav 
// //       className={cn(
// //         'fixed w-full z-50 transition-all duration-300 h-20 flex items-center',
// //         isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm' : 'bg-transparent'
// //       )}
// //     >
// //       <div className="w-full px-8 flex items-center justify-between">
// //         <Link href="/" className="flex items-center gap-2">
// //           <span className="font-bold text-3xl text-[#1B361F] tracking-tight whitespace-nowrap">Teman Pilah</span>
// //         </Link>

// //         <div className="hidden md:flex items-center justify-center flex-1 mx-8 lg:mx-12">
// //           <div className="flex items-center gap-6 lg:gap-12">
// //             {navLinks.map((link) => (
// //               <a 
// //                 key={link.name} 
// //                 href={link.href}
// //                 onClick={() => setActiveLink(link.name)}
// //                 className={cn(
// //                   "relative font-medium text-lg transition-all duration-300 py-1 whitespace-nowrap",
// //                   activeLink === link.name 
// //                     ? "text-[#1B361F] font-bold" 
// //                     : "text-[#3D4F41]/60 hover:text-[#1B361F]"
// //                 )}
// //               >
// //                 {link.name}
// //                 {activeLink === link.name && (
// //                   <motion.span 
// //                     layoutId="active-underline"
// //                     className="absolute -bottom-2 left-0 right-0 h-[3px] bg-[#FC9430] rounded-full"
// //                     transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
// //                   />
// //                 )}
// //               </a>
// //             ))}
// //           </div>
// //         </div>

// //         <div className="hidden md:flex items-center">
// //           <Button size="lg" className="rounded-full px-8 py-6 bg-[#1B361F] hover:bg-[#1B361F]/90 flex items-center gap-3 shadow-sm border-none text-white transition-all hover:scale-105 active:scale-95">
// //             <MessageCircle size={22} className="stroke-[2.5px]" />
// //             <span className="font-bold text-lg">WhatsApp</span>
// //           </Button>
// //         </div>

// //         <button 
// //           className="md:hidden text-[#1B361F]"
// //           onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
// //         >
// //           {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
// //         </button>
// //       </div>

// //       {/* Mobile Menu */}
// //       {isMobileMenuOpen && (
// //         <div className="md:hidden fixed top-[80px] left-0 w-full h-[calc(100vh-80px)] bg-[#F8F6F1] z-40 overflow-y-auto animate-in slide-in-from-top duration-300">
// //           <div className="flex flex-col p-6 gap-6 h-full">
// //             {navLinks.map((link) => (
// //               <a 
// //                 key={link.name} 
// //                 href={link.href}
// //                 className={cn(
// //                   "text-2xl font-bold py-4 border-b border-[#1B361F]/10 transition-colors",
// //                   activeLink === link.name ? "text-[#1B361F]" : "text-[#1B361F]/50"
// //                 )}
// //                 onClick={() => {
// //                   setActiveLink(link.name);
// //                   setIsMobileMenuOpen(false);
// //                 }}
// //               >
// //                 {link.name}
// //               </a>
// //             ))}
            
// //             <div className="mt-8">
// //               <Button className="w-full rounded-full py-8 bg-[#1B361F] text-white font-bold text-xl flex items-center justify-center gap-4 shadow-lg transition-transform active:scale-95">
// //                 <MessageCircle size={28} />
// //                 <span>Hubungi WhatsApp</span>
// //               </Button>
// //             </div>
            
// //             <div className="mt-auto pb-12 opacity-50">
// //               <p className="text-[#1B361F] font-medium text-center">© 2024 Teman Pilah</p>
// //             </div>
// //           </div>
// //         </div>
// //       )}
// //     </nav>
// //   );
// // }
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

//         {/* Desktop Button - Mirip Screenshot */}
//         <div className="hidden md:flex items-center">
//           <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
//             <Button 
//               className="rounded-full px-8 py-3 bg-[#1B361F] hover:bg-[#234926] flex items-center gap-4 shadow-sm border-none text-white transition-all duration-300 hover:scale-[1.03] active:scale-95 group h-[54px] min-w-[200px] justify-center"
//             >
//               <div className="flex items-center justify-center">
//                 <img 
//                   src="https://upload.wikimedia.org/wikipedia/commons/6/6b/WhatsApp.svg" 
//                   alt="WhatsApp" 
//                   className="w-6 h-6 invert" 
//                 />
//               </div>
//               <span className="font-bold text-lg tracking-wide">WhatsApp</span>
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
//             className="md:hidden fixed top-[80px] left-0 w-full h-[calc(100vh-80px)] bg-[#F8F6F1] z-40 overflow-y-auto"
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

  const whatsappLink = "https://wa.me/6281234567890"; // Ganti dengan nomor asli

  return (
    <nav 
      className={cn(
        'fixed w-full z-50 transition-all duration-300 h-20 flex items-center',
        isScrolled ? 'bg-white/90 backdrop-blur-md shadow-sm border-b border-neutral-100' : 'bg-transparent'
      )}
    >
      <div className="w-full px-8 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <span className="font-bold text-3xl text-[#1B361F] tracking-tight whitespace-nowrap">Teman Pilah</span>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center justify-center flex-1 mx-8 lg:mx-12">
          <div className="flex items-center gap-6 lg:gap-12">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setActiveLink(link.name)}
                className={cn(
                  "relative font-medium text-lg transition-all duration-300 py-1 whitespace-nowrap",
                  activeLink === link.name 
                    ? "text-[#1B361F] font-bold" 
                    : "text-[#3D4F41]/60 hover:text-[#1B361F]"
                )}
              >
                {link.name}
                {activeLink === link.name && (
                  <motion.span 
                    layoutId="active-underline"
                    className="absolute -bottom-2 left-0 right-0 h-[3px] bg-[#FC9430] rounded-full"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
              </a>
            ))}
          </div>
        </div>

        {/* Desktop Button - Exact Figma Spec (W: 240px, H: 48px, Gap: 8px) */}
        <div className="hidden md:flex items-center">
          <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
            <Button 
              className="rounded-full px-6 py-3 bg-[#1B361F] hover:bg-[#234926] flex items-center gap-2 shadow-sm border-none text-white transition-all duration-300 hover:scale-[1.03] active:scale-95 group h-[48px] w-[240px] justify-center"
            >
              <div className="flex items-center justify-center">
                <img  
                  src="/wa.png"
                  alt="WhatsApp"
                  className="w-5 h-5 object-contain"
                />
              </div>
              <span className="font-bold text-base tracking-wide">WhatsApp</span>
            </Button>
          </a>
        </div>

        <button 
          className="md:hidden text-[#1B361F] p-2"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden fixed top-20 left-0 w-full h-[calc(100vh-80px)] bg-bg z-40 overflow-y-auto"
          >
            <div className="flex flex-col p-6 gap-6 h-full">
              {navLinks.map((link) => (
                <a 
                  key={link.name} 
                  href={link.href}
                  className={cn(
                    "text-2xl font-bold py-4 border-b border-[#1B361F]/10 transition-colors",
                    activeLink === link.name ? "text-[#1B361F]" : "text-[#1B361F]/50"
                  )}
                  onClick={() => {
                    setActiveLink(link.name);
                    setIsMobileMenuOpen(false);
                  }}
                >
                  {link.name}
                </a>
              ))}
              
              <div className="mt-8">
                <a href={whatsappLink} target="_blank" rel="noopener noreferrer">
                  <Button className="w-full rounded-full py-8 bg-[#1B361F] text-white font-bold text-xl flex items-center justify-center gap-4 shadow-lg transition-transform active:scale-95 h-auto">
                    <img 
                      src="/wa.png" 
                      alt="WhatsApp" 
                      className="w-8 h-8 invert" 
                    />
                    <span>Hubungi WhatsApp</span>
                  </Button>
                </a>
              </div>
              
              <div className="mt-auto pb-12 opacity-50">
                <p className="text-[#1B361F] font-medium text-center">© 2024 Teman Pilah</p>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
