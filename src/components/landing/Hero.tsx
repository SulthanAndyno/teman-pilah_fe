// // // // // 'use client';

// // // // // import { motion } from 'motion/react';
// // // // // import { Button } from '@/components/ui/Button';
// // // // // import { ArrowRight, Play, Users, Leaf } from 'lucide-react';

// // // // // export function Hero() {
// // // // //   return (
// // // // //     <section className="relative py-24 lg:py-32 overflow-hidden bg-bg">
// // // // //       <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
// // // // //         <motion.div 
// // // // //           initial={{ opacity: 0, x: -50 }}
// // // // //           animate={{ opacity: 1, x: 0 }}
// // // // //           transition={{ duration: 0.8 }}
// // // // //           className="space-y-12"
// // // // //         >
// // // // //           <div className="inline-flex items-center gap-3 px-6 py-2.5 bg-[#E8EAE0] rounded-full text-[#3D4F41] text-sm font-bold">
// // // // //             <Leaf size={18} className="text-accent" />
// // // // //             <span>Pejuang lingkungan bersih & bebas sampah</span>
// // // // //           </div>

// // // // //           <div className="space-y-6">
// // // // //             <h1 className="text-6xl lg:text-8xl font-bold relative leading-none text-[#1B3022]">
// // // // //               Bersama <br />
// // // // //               Membangun < br />
// // // // //               <span className="text-accent relative inline-block whitespace-nowrap">
// // // // //                 Ekosistem Hijau
// // // // //                 <span className="absolute bottom-2 left-5 w-full h-full bg-accent/20 -z-10" />
// // // // //               </span>
// // // // //             </h1>
// // // // //             <p className="text-2xl text-[#3D4F41] leading-relaxed max-w-xl font-medium opacity-80">
// // // // //               Mewujudkan lingkungan yang asri melalui aksi nyata, edukasi berkelanjutan, dan kolaborasi masyarakat dalam pengelolaan sampah yang bijak.
// // // // //             </p>
// // // // //           </div>

// // // // //           <div className="flex flex-wrap gap-6 pt-4">
// // // // //             <Button className="rounded-full px-10 py-8 bg-[#234926] hover:bg-[#1B3022] text-white text-xl font-bold flex items-center gap-3 group shadow-lg shadow-[#234926]/20 transition-all">
// // // // //               Hubungi Kami
// // // // //               <ArrowRight className="group-hover:translate-x-1 transition-transform" />
// // // // //             </Button>
// // // // //             <Button variant="secondary" className="rounded-full px-10 py-8 bg-[#E6E8DE] hover:bg-[#DDE0D4] text-[#1B3022] text-xl font-bold flex items-center gap-3 shadow-sm transition-all border-none">
// // // // //               <Play size={24} className="fill-[#1B3022] text-[#1B3022]" />
// // // // //               Tonton Video
// // // // //             </Button>
// // // // //           </div>
// // // // //         </motion.div>

// // // // //         <motion.div 
// // // // //           initial={{ opacity: 0, scale: 0.9 }}
// // // // //           animate={{ opacity: 1, scale: 1 }}
// // // // //           transition={{ duration: 0.8 }}
// // // // //           className="relative flex justify-end"
// // // // //         >
// // // // //           <div className="relative z-10 rounded-[80px] overflow-hidden bg-white shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)] p-4 max-w-160]">
// // // // //             <img 
// // // // //               src="/tb.png" 
// // // // //               alt="Eco Illustration" 
// // // // //               className="w-full h-full object-contain rounded-[50px]"
// // // // //             />
// // // // //           </div>

// // // // //           {/* Stats Card */}
// // // // //           <motion.div 
// // // // //             initial={{ y: 20, opacity: 0 }}
// // // // //             animate={{ y: 0, opacity: 1 }}
// // // // //             transition={{ delay: 0.5, duration: 0.6 }}
// // // // //             className="absolute -bottom-10 -left-10 z-20 bg-white p-8 rounded-[26px] shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] flex items-center gap-6 min-w-[320px]"
// // // // //           >
// // // // //             <div className="w-16 h-16 bg-bg rounded-3xl flex items-center justify-center text-accent">
// // // // //               <Users size={32} />
// // // // //             </div>
// // // // //             <div>
// // // // //               <p className="text-4xl font-bold text-[#1B3022]">500+</p>
// // // // //               <p className="text-xl text-[#3D4F41] font-semibold opacity-60">Relawan Aktif</p>
// // // // //             </div>
// // // // //           </motion.div>
// // // // //         </motion.div>
// // // // //       </div>
// // // // //     </section>
// // // // //   );
// // // // // }


// // // // 'use client';

// // // // import { motion } from 'motion/react';
// // // // import { ArrowRight, Play, Users, Leaf } from 'lucide-react';

// // // // import { Button } from '@/components/ui/Button';

// // // // export function Hero() {
// // // //   return (
// // // //     <section className="relative min-h-[644px] bg-bg overflow-hidden flex items-center">

// // // //       {/* Container */}
// // // //       <div className="w-full max-w-[1288px] mx-auto px-8 lg:px-10 grid lg:grid-cols-2 gap-20 items-center">

// // // //         {/* Left Content */}
// // // //         <motion.div
// // // //           initial={{ opacity: 0, x: -40 }}
// // // //           animate={{ opacity: 1, x: 0 }}
// // // //           transition={{ duration: 0.8 }}
// // // //           className="space-y-12"
// // // //         >

// // // //           {/* Badge */}
// // // //           <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#E8EAE0] text-[#3D4F41] text-sm font-semibold">
// // // //             <Leaf size={18} className="text-accent" />

// // // //             <span>
// // // //               Pejuang lingkungan bersih & bebas sampah
// // // //             </span>
// // // //           </div>

// // // //           {/* Heading */}
// // // //           <div className="space-y-8">

// // // //             <h1 className="text-[72px] leading-[0.95] font-bold tracking-[-2px] text-[#1B3022]">

// // // //               Bersama <br />
// // // //               Membangun <br />

// // // //               <span className="relative inline-block whitespace-nowrap text-accent">

// // // //                 Ekosistem Hijau

// // // //                 {/* Underline */}
// // // //                 <span className="absolute left-0 bottom-3 w-full h-5 bg-accent/20 -z-10 rounded-md" />

// // // //               </span>

// // // //             </h1>

// // // //             {/* Description */}
// // // //             <p className="max-w-[580px] text-[20px] leading-[1.8] text-[#3D4F41] font-medium opacity-80">

// // // //               Mewujudkan lingkungan yang asri melalui aksi nyata,
// // // //               edukasi berkelanjutan, dan kolaborasi masyarakat
// // // //               dalam pengelolaan sampah yang bijak.

// // // //             </p>

// // // //           </div>

// // // //           {/* Buttons */}
// // // //           <div className="flex flex-wrap items-center gap-5 pt-2">

// // // //             {/* Primary Button */}
// // // //             <Button
// // // //               className="
// // // //                 h-16
// // // //                 rounded-full
// // // //                 px-9
// // // //                 bg-[#234926]
// // // //                 hover:bg-[#1B3022]
// // // //                 text-white
// // // //                 text-lg
// // // //                 font-semibold
// // // //                 flex
// // // //                 items-center
// // // //                 gap-3
// // // //                 shadow-lg
// // // //                 shadow-[#234926]/20
// // // //                 transition-all
// // // //                 group
// // // //               "
// // // //             >
// // // //               Hubungi Kami

// // // //               <ArrowRight
// // // //                 size={20}
// // // //                 className="transition-transform group-hover:translate-x-1"
// // // //               />
// // // //             </Button>

// // // //             {/* Secondary Button */}
// // // //             <Button
// // // //               variant="secondary"
// // // //               className="
// // // //                 h-16
// // // //                 rounded-full
// // // //                 px-9
// // // //                 bg-[#E6E8DE]
// // // //                 hover:bg-[#DDE0D4]
// // // //                 text-[#1B3022]
// // // //                 text-lg
// // // //                 font-semibold
// // // //                 flex
// // // //                 items-center
// // // //                 gap-3
// // // //                 border-none
// // // //                 shadow-sm
// // // //                 transition-all
// // // //               "
// // // //             >
// // // //               <Play
// // // //                 size={22}
// // // //                 className="fill-[#1B3022] text-[#1B3022]"
// // // //               />

// // // //               Tonton Video
// // // //             </Button>

// // // //           </div>

// // // //         </motion.div>

// // // //         {/* Right Content */}
// // // //         <motion.div
// // // //           initial={{ opacity: 0, scale: 0.92 }}
// // // //           animate={{ opacity: 1, scale: 1 }}
// // // //           transition={{ duration: 0.8 }}
// // // //           className="relative flex justify-end"
// // // //         >

// // // //           {/* Main Image */}
// // // //           <div
// // // //             className="
// // // //               relative
// // // //               z-10
// // // //               w-[640px]
// // // //               rounded-[72px]
// // // //               overflow-hidden
// // // //               bg-white
// // // //               p-4
// // // //               shadow-[0_40px_100px_-20px_rgba(0,0,0,0.1)]
// // // //             "
// // // //           >

// // // //             <img
// // // //               src="/tb.png"
// // // //               alt="Eco Illustration"
// // // //               className="
// // // //                 w-full
// // // //                 h-auto
// // // //                 object-cover
// // // //                 rounded-[56px]
// // // //               "
// // // //             />

// // // //           </div>

// // // //           {/* Floating Stats Card */}
// // // //           <motion.div
// // // //             initial={{ opacity: 0, y: 20 }}
// // // //             animate={{ opacity: 1, y: 0 }}
// // // //             transition={{
// // // //               delay: 0.5,
// // // //               duration: 0.6,
// // // //             }}
// // // //             className="
// // // //               absolute
// // // //               left-0
// // // //               bottom-6
// // // //               z-20
// // // //               flex
// // // //               items-center
// // // //               gap-5
// // // //               min-w-[300px]
// // // //               rounded-[32px]
// // // //               bg-white
// // // //               px-7
// // // //               py-6
// // // //               shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)]
// // // //             "
// // // //           >

// // // //             {/* Icon */}
// // // //             <div
// // // //               className="
// // // //                 flex
// // // //                 items-center
// // // //                 justify-center
// // // //                 w-14
// // // //                 h-14
// // // //                 rounded-[20px]
// // // //                 bg-[#FEF4E9]
// // // //                 text-accent
// // // //               "
// // // //             >
// // // //               <Users size={28} />
// // // //             </div>

// // // //             {/* Text */}
// // // //             <div className="space-y-1">

// // // //               <p className="text-4xl font-bold leading-none text-[#1B3022]">
// // // //                 500+
// // // //               </p>

// // // //               <p className="text-lg font-medium text-[#3D4F41] opacity-60">
// // // //                 Relawan Aktif
// // // //               </p>

// // // //             </div>

// // // //           </motion.div>

// // // //         </motion.div>

// // // //       </div>

// // // //     </section>
// // // //   );
// // // // }

// // 'use client';

// // import { motion } from 'motion/react';
// // import { ArrowRight, Play, Users, Leaf } from 'lucide-react';
// // import { Button } from '@/components/ui/Button';

// // export function Hero() {
// //   return (
// //     <section className="relative min-h-screen bg-[#F8F6F1] overflow-hidden flex items-center pt-24 pb-12 lg:pt-32 lg:pb-20">
// //       {/* Container - Ultra-wide 1720px for the 'full' feel */}
// //       <div className="w-full max-w-[1720px] mx-auto px-6 md:px-12 lg:px-16 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        
// //         {/* Left Content */}
// //         <motion.div
// //           initial={{ opacity: 0, x: -40 }}
// //           animate={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 0.8 }}
// //           className="space-y-12"
// //         >
// //           {/* Badge */}
// //           <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#E8EAE0] text-[#1B3022] text-base font-bold shadow-sm">
// //             <Leaf size={22} className="text-[#FC9430]" />
// //             <span>Pejuang lingkungan bersih & bebas sampah</span>
// //           </div>

// //           {/* Heading */}
// //           <div className="space-y-8">
// //             <h1 className="text-[64px] md:text-[90px] lg:text-[110px] leading-[0.88] font-bold tracking-[-5px] text-[#1B3022]">
// //               Bersama <br />
// //               <span className="text-[#234926]">Membangun</span> <br />
// //               <span className="relative inline-block text-[#FC9430]">
// //                 Ekosistem Hijau
// //                 {/* Underline */}
// //                 <span className="absolute left-0 bottom-4 w-full h-8 bg-[#FC9430]/20 -z-10 rounded-sm" />
// //               </span>
// //             </h1>

// //             {/* Description */}
// //             <p className="max-w-[720px] text-[20px] md:text-[26px] leading-[1.5] text-[#3D4F41] font-medium opacity-80">
// //               Mewujudkan lingkungan yang asri melalui aksi nyata, 
// //               edukasi berkelanjutan, dan kolaborasi masyarakat 
// //               dalam pengelolaan sampah yang bijak.
// //             </p>
// //           </div>

// //           {/* Buttons */}
// //           <div className="flex flex-wrap items-center gap-6 pt-4">
// //             <Button
// //               className="h-16 md:h-20 rounded-full px-12 bg-[#234926] hover:bg-[#1B3022] text-white text-xl font-extrabold flex items-center gap-4 shadow-2xl shadow-[#234926]/25 transition-all group border-none"
// //             >
// //               Hubungi Kami
// //               <ArrowRight size={28} className="transition-transform group-hover:translate-x-1" />
// //             </Button>

// //             <Button
// //               variant="outline"
// //               className="h-16 md:h-20 rounded-full px-12 bg-[#E6E8DE] hover:bg-[#DDE0D4] text-[#1B3022] text-xl font-extrabold flex items-center gap-4 border-none shadow-sm transition-all"
// //             >
// //               <div className="flex items-center justify-center w-12 h-12 rounded-full bg-white/70">
// //                 <Play size={24} className="fill-[#1B3022] text-[#1B3022] ml-1.5" />
// //               </div>
// //               Tonton Video
// //             </Button>
// //           </div>
// //         </motion.div>

// //         {/* Right Content */}
// //         <motion.div
// //           initial={{ opacity: 0, scale: 0.95 }}
// //           animate={{ opacity: 1, scale: 1 }}
// //           transition={{ duration: 0.8, delay: 0.2 }}
// //           className="relative flex justify-end items-center h-full"
// //         >
// // //           {/* Main Image Illustration */}
// // //           <div className="relative z-10 w-full lg:min-w-[720px] lg:max-w-[840px] rounded-[80px] lg:rounded-[100px] overflow-hidden bg-white p-5 shadow-[0_60px_130px_-30px_rgba(0,0,0,0.18)]">
// // //             <img
// // //               src="/tb.png"
// // //               alt="Eco Illustration"
// // //               className="w-full h-auto object-cover rounded-[60px] lg:rounded-[80px]"
// // //             />
// // //           </div>

// // //           {/* Floating Stats Card */}
// // //           <motion.div
// // //             initial={{ opacity: 0, y: 30 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ delay: 0.7, duration: 0.6 }}
// // //             className="absolute left-[-30px] md:left-[-80px] bottom-20 z-20 flex items-center gap-8 min-w-[360px] rounded-[48px] bg-white px-12 py-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] border border-neutral-50"
// // //           >
// // //             {/* User Icon Background */}
// // //             <div className="flex items-center justify-center w-20 h-20 rounded-[28px] bg-[#FEF4E9] text-[#FC9430]">
// // //               <Users size={40} />
// // //             </div>

// // //             {/* Text Stats */}
// // //             <div className="space-y-1">
// // //               <p className="text-6xl font-black leading-none text-[#1B3022]">
// // //                 500+
// // //               </p>
// // //               <p className="text-xl font-bold text-[#3D4F41] opacity-40 uppercase tracking-[0.15em]">
// // //                 Relawan Aktif
// // //               </p>
// // //             </div>
// // //           </motion.div>
// // //         </motion.div>
// // //       </div>
// // //     </section>
// // //   );
// // // }


// // 'use client';

// // import { motion } from 'motion/react';
// // import { ArrowRight, Play, Users, Leaf } from 'lucide-react';
// // import { Button } from '@/components/ui/Button';

// // export function Hero() {
// //   return (
// //     <section className="relative min-h-[85vh] lg:min-h-screen bg-[#F8F6F1] overflow-hidden flex items-center pt-24 pb-12 lg:pt-32 lg:pb-20">
// //       {/* Container - Ultra-wide layout that scales gracefully */}
// //       <div className="w-full max-w-[1720px] mx-auto px-6 md:px-12 lg:px-16 grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">
        
// //         {/* Left Content */}
// //         <motion.div
// //           initial={{ opacity: 0, x: -40 }}
// //           animate={{ opacity: 1, x: 0 }}
// //           transition={{ duration: 0.8 }}
// //           className="space-y-10 lg:space-y-16 z-10"
// //         >
// //           {/* Badge */}
// //           <div className="inline-flex items-center gap-3 px-6 py-3 rounded-full bg-[#E8EAE0] text-[#1B3022] text-sm md:text-lg font-bold shadow-sm self-start">
// //             <Leaf size={24} className="text-[#FC9430]" />
// //             <span>Pejuang lingkungan bersih & bebas sampah</span>
// //           </div>

// //           {/* Heading */}
// //           <div className="space-y-6 lg:space-y-10">
// //             <h1 className="text-[44px] sm:text-[64px] md:text-[90px] xl:text-[110px] leading-[1] md:leading-[0.88] font-black tracking-[-3px] md:tracking-[-5px] text-[#1B3022]">
// //               Bersama <br />
// //               <span className="text-[#234926]">Membangun</span> <br />
// //               <span className="relative inline-block text-[#FC9430]">
// //                 Ekosistem Hijau
// //                 {/* Underline */}
// //                 <span className="absolute left-0 bottom-2 md:bottom-4 w-full h-4 md:h-8 bg-[#FC9430]/20 -z-10 rounded-sm" />
// //               </span>
// //             </h1>

// //             {/* Description */}
// //             <p className="max-w-[720px] text-[18px] md:text-[24px] lg:text-[28px] leading-[1.6] md:leading-[1.5] text-[#3D4F41] font-medium opacity-80">
// //               Mewujudkan lingkungan yang asri melalui aksi nyata, 
// //               edukasi berkelanjutan, dan kolaborasi masyarakat 
// //               dalam pengelolaan sampah yang bijak.
// //             </p>
// //           </div>

// //           {/* Buttons */}
// //           <div className="flex flex-wrap items-center gap-5 lg:gap-8 pt-4">
// //             <Button
// //               className="h-14 md:h-18 lg:h-22 rounded-full px-8 md:px-12 bg-[#234926] hover:bg-[#1B3022] text-white text-lg md:text-2xl font-black flex items-center gap-4 shadow-2xl shadow-[#234926]/25 transition-all group border-none"
// //             >
// //               Hubungi Kami
// //               <ArrowRight size={28} className="transition-transform group-hover:translate-x-1" />
// //             </Button>

// //             <Button
// //               variant="outline"
// //               className="h-14 md:h-18 lg:h-22 rounded-full px-8 md:px-12 bg-[#E6E8DE] hover:bg-[#DDE0D4] text-[#1B3022] text-lg md:text-2xl font-black flex items-center gap-4 border-none shadow-sm transition-all"
// //             >
// //               <div className="flex items-center justify-center w-10 h-10 md:w-14 md:h-14 rounded-full bg-white/70">
// //                 <Play size={24} className="fill-[#1B3022] text-[#1B3022] ml-1.5" />
// //               </div>
// //               Tonton Video
// //             </Button>
// //           </div>
// //         </motion.div>

// //         {/* Right Content */}
// //         <motion.div
// //           initial={{ opacity: 0, scale: 0.95 }}
// //           animate={{ opacity: 1, scale: 1 }}
// //           transition={{ duration: 0.8, delay: 0.2 }}
// //           className="relative flex justify-center lg:justify-end items-center"
// //         >
// //           {/* Main Image Illustration */}
// //           <div className="relative z-10 w-full max-w-[540px] lg:max-w-none lg:min-w-[720px] border-8 border-white rounded-[48px] md:rounded-[72px] lg:rounded-[100px] overflow-hidden bg-white shadow-[0_60px_130px_-30px_rgba(0,0,0,0.18)]">
// //             <img
// //               src="/tb.png"
// //               alt="Eco Illustration"
// //               className="w-full h-auto object-cover rounded-[32px] md:rounded-[56px] lg:rounded-[80px]"
// //             />
// //           </div>

// //           {/* Floating Stats Card - Optimized for mobile */}
// //           <motion.div
// // //             initial={{ opacity: 0, y: 30 }}
// // //             animate={{ opacity: 1, y: 0 }}
// // //             transition={{ delay: 0.7, duration: 0.6 }}
// // //             className="absolute -left-4 md:-left-12 bottom-6 lg:bottom-20 z-20 flex items-center gap-5 lg:gap-8 min-w-[240px] md:min-w-[360px] rounded-[32px] md:rounded-[48px] bg-white px-6 md:px-12 py-5 md:py-10 shadow-[0_50px_100px_-20px_rgba(0,0,0,0.25)] border border-neutral-50"
// // //           >
// // //             {/* User Icon Background */}
// // //             <div className="flex items-center justify-center w-12 h-12 md:w-20 md:h-20 rounded-[18px] md:rounded-[28px] bg-[#FEF4E9] text-[#FC9430]">
// // //               <Users className="w-6 h-6 md:w-10 md:h-10" />
// // //             </div>

// // //             {/* Text Stats */}
// // //             <div className="space-y-0.5 lg:space-y-1">
// // //               <p className="text-3xl md:text-6xl font-black leading-none text-[#1B3022]">
// // //                 500+
// // //               </p>
// // //               <p className="text-sm md:text-xl font-bold text-[#3D4F41] opacity-40 uppercase tracking-[0.1em] md:tracking-[0.15em]">
// // //                 Relawan Aktif
// // //               </p>
// // //             </div>
// // //           </motion.div>
// // //         </motion.div>
// // //       </div>
// // //     </section>
// // //   );
// // // }


// 'use client';

// import { motion } from 'motion/react';
// import { ArrowRight, Play, Users, Leaf } from 'lucide-react';

// export function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-[#F8F6F1] py-24">
//       <div className="mx-auto grid w-full max-w-[1280px] grid-cols-1 items-center gap-16 px-12 lg:grid-cols-2">

//         {/* LEFT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="flex flex-col items-start gap-6"
//         >

//           {/* BADGE */}
//           <div className="inline-flex items-center gap-2 rounded-full bg-[#E8E9E4] px-4 py-2 shadow-[0px_1px_2px_#0000000d]">
//             <Leaf size={18} className="text-[#FC9430]" />

//             <p className="font-semibold text-[#154212] text-sm leading-5">
//               Pejuang lingkungan bersih &amp; bebas sampah
//             </p>
//           </div>

//           {/* HEADING */}
//           <div className="flex flex-col items-start">

//             <h1 className="font-extrabold text-[#154212] text-6xl tracking-[-1.5px] leading-[60px]">
//               Bersama
//             </h1>

//             <h1 className="font-extrabold text-[#154212] text-6xl tracking-[-1.5px] leading-[60px]">
//               Membangun
//             </h1>

//             <div className="relative inline-block">
//               <h1 className="font-extrabold text-[#FC9430] text-6xl tracking-[-1.5px] leading-[60px] relative z-10">
//                 Ekosistem Hijau
//               </h1>

//               <div className="absolute left-0 bottom-1 h-3 w-full rounded-full bg-[#FC9430]/20" />
//             </div>

//           </div>

//           {/* DESCRIPTION */}
//           <p className="max-w-[512px] text-xl leading-[32.5px] text-[#42493E]">
//             Mewujudkan lingkungan yang asri melalui aksi nyata,
//             edukasi berkelanjutan, dan kolaborasi masyarakat
//             dalam pengelolaan sampah yang bijak.
//           </p>

//           {/* BUTTONS */}
//           <div className="flex items-center gap-4 pt-4">

//             {/* PRIMARY BUTTON */}
//             <button className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(172deg,rgba(21,66,18,1)_0%,rgba(45,90,39,1)_100%)] px-8 py-4 shadow-[0px_12px_40px_#15421226] transition-all hover:scale-[1.02]">

//               <span className="text-lg font-bold text-white leading-7">
//                 Hubungi Kami
//               </span>

//               <ArrowRight size={20} className="text-white" />
//             </button>

//             {/* SECONDARY BUTTON */}
//             <button className="inline-flex items-center gap-2 rounded-full bg-[#E8E9E4] px-8 py-4 transition-all hover:scale-[1.02]">

//               <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white">
//                 <Play size={18} className="fill-[#154212] text-[#154212] ml-1" />
//               </div>

//               <span className="text-lg font-bold text-[#154212] leading-7">
//                 Tonton Video
//               </span>

//             </button>

//           </div>
//         </motion.div>

//         {/* RIGHT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="relative flex justify-end"
//         >

//           {/* BLUR BACKGROUND */}
//           <div className="absolute left-8 top-8 h-full w-full rounded-[64px] bg-[#C943033] blur-[32px]" />

//           {/* IMAGE */}
//           <div className="relative h-[500px] w-full overflow-hidden rounded-[48px] border-8 border-white/50 shadow-[0px_20px_60px_#1542121a]">

//             <img
//               src="/tb.png"
//               alt="Eco Illustration"
//               className="h-full w-full object-cover"
//             />

//           </div>

//           {/* FLOATING CARD */}
//           <motion.div
//             initial={{ opacity: 0, y: 30 }}
//             animate={{ opacity: 1, y: 0 }}
//             transition={{ delay: 0.7, duration: 0.6 }}
//             className="absolute -bottom-6 -left-6 inline-flex max-w-[250px] items-center gap-4 rounded-3xl bg-white p-6 shadow-[0px_12px_40px_#15421214]"
//           >

//             {/* ICON */}
//             <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-[#FEF4E9]">
//               <Users className="text-[#FC9430]" size={28} />
//             </div>

//             {/* TEXT */}
//             <div className="flex flex-col">
//               <h3 className="text-2xl font-extrabold text-[#154212]">
//                 500+
//               </h3>

//               <p className="text-sm font-medium text-[#42493E]">
//                 Relawan Aktif
//               </p>
//             </div>

//           </motion.div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }


// 'use client';

// import { motion } from 'motion/react';
// import { ArrowRight, Play, Users, Leaf } from 'lucide-react';

// export function Hero() {
//   return (
//     <section className="relative overflow-hidden bg-[#F8F6F1] pt-32 pb-16 lg:pt-40 lg:pb-24">

//       {/* CONTAINER */}
//       <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-16">

//         {/* LEFT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, x: -40 }}
//           animate={{ opacity: 1, x: 0 }}
//           transition={{ duration: 0.8 }}
//           className="order-2 flex flex-col items-start gap-6 lg:order-1 lg:gap-8"
//         >

//           {/* BADGE */}
//           <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-[#E8E9E4] px-4 py-2 shadow-[0px_1px_2px_#0000000d]">

//             <Leaf size={16} className="text-[#FC9430]" />

//             <p className="text-xs font-semibold leading-5 text-[#154212] sm:text-sm">
//               Pejuang lingkungan bersih & bebas sampah
//             </p>

//           </div>

//           {/* HEADING */}
//           <div className="flex flex-col items-start space-y-1">

//             <h1 className="text-5xl font-extrabold leading-[1.1] tracking-[-1.5px] text-[#154212] sm:text-6xl">
//               Bersama
//             </h1>

//             <h1 className="text-5xl font-extrabold leading-[1.1] tracking-[-1.5px] text-[#154212] sm:text-6xl">
//               Membangun
//             </h1>

//             {/* HIGHLIGHT */}
//             <div className="relative inline-block">

//               <h1 className="relative z-10 text-5xl font-extrabold leading-[1.1] tracking-[-1.5px] text-[#FC9430] sm:text-6xl">
//                 Ekosistem Hijau
//               </h1>

//               {/* <div className="absolute bottom-0 left-0 z-0 h-2 w-full rounded-full bg-[#FC9430]/20 sm:bottom-1 sm:h-4" /> */}
// <div className="absolute -bottom-1 left-0 z-0 h-[10px] w-full rounded-full bg-[#FC9430]/15 blur-[1px]" />
//             </div>
//           </div>

//           {/* DESCRIPTION */}
//           <p className="max-w-[540px] text-lg font-medium leading-relaxed text-[#42493E] sm:text-xl">
//             Mewujudkan lingkungan yang asri melalui aksi nyata,
//             edukasi berkelanjutan, dan kolaborasi masyarakat
//             dalam pengelolaan sampah yang bijak.
//           </p>

//           {/* BUTTONS */}
//           <div className="flex flex-wrap items-center gap-4 pt-2 lg:pt-4">

//             {/* PRIMARY BUTTON */}
//             <button className="group inline-flex items-center gap-3 rounded-full bg-[linear-gradient(172deg,rgba(21,66,18,1)_0%,rgba(45,90,39,1)_100%)] px-8 py-4 shadow-[0px_12px_40px_#15421226] transition-all duration-300 hover:scale-[1.02] active:scale-95 sm:px-10 sm:py-5">

//               <span className="text-lg font-bold leading-7 text-white">
//                 Hubungi Kami
//               </span>

//               <ArrowRight
//                 size={20}
//                 className="text-white transition-transform duration-300 group-hover:translate-x-1"
//               />

//             </button>

//             {/* SECONDARY BUTTON */}
//             <button className="group inline-flex items-center gap-3 rounded-full bg-[#E8E9E4] px-8 py-4 transition-all duration-300 hover:scale-[1.02] active:scale-95 sm:px-10 sm:py-5">

//               {/* PLAY ICON */}
//               <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-white shadow-sm">

//                 <img
//                   src="/play.png"
//                   alt="Play"
//                   className="h-full w-full object-cover"
//                   onError={(e) => {
//                     e.currentTarget.style.display = 'none';

//                     if (e.currentTarget.nextElementSibling) {
//                       (
//                         e.currentTarget.nextElementSibling as HTMLElement
//                       ).style.display = 'flex';
//                     }
//                   }}
//                 />

//                 <Play
//                   size={18}
//                   className="ml-1 hidden fill-[#154212] text-[#154212]"
//                 />

//               </div>

//               <span className="text-lg font-bold leading-7 text-[#154212]">
//                 Tonton Video
//               </span>

//             </button>

//           </div>
//         </motion.div>

//         {/* RIGHT CONTENT */}
//         <motion.div
//           initial={{ opacity: 0, scale: 0.95 }}
//           animate={{ opacity: 1, scale: 1 }}
//           transition={{ duration: 0.8, delay: 0.2 }}
//           className="order-1 hidden justify-center lg:order-2 lg:flex lg:justify-end"
//         >

//           <div className="relative w-full max-w-[580px]">

//             {/* BLUR BACKGROUND */}
//             <div className="absolute left-8 top-8 h-full w-full rounded-[64px] bg-[#FC9430]/10 blur-[32px]" />

//             {/* IMAGE */}
//             <div className="relative z-10 overflow-hidden rounded-[48px] border-8 border-white/50 shadow-[0px_20px_60px_#1542121a]">

//               <img
//                 src="/tb.png"
//                 alt="Eco Illustration"
//                 className="h-full w-full object-cover"
//               />

//             </div>

//             {/* FLOATING CARD */}
//             <motion.div
//               initial={{ opacity: 0, y: 30 }}
//               animate={{ opacity: 1, y: 0 }}
//               transition={{ delay: 0.7, duration: 0.6 }}
//               className="absolute -bottom-8 -left-8 z-20 inline-flex items-center gap-5 rounded-[32px] border border-white/50 bg-white p-6 shadow-[0px_12px_40px_#15421214]"
//             >

//               {/* ICON */}
//               <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FEF4E9]">

//                 <Users className="text-[#FC9430]" size={28} />

//               </div>

//               {/* TEXT */}
//               <div className="flex flex-col">

//                 <h3 className="text-3xl font-extrabold leading-none text-[#154212]">
//                   500+
//                 </h3>

//                 <p className="text-sm font-medium text-[#42493E]">
//                   Relawan Aktif
//                 </p>

//               </div>

//             </motion.div>
//           </div>
//         </motion.div>
//       </div>
//     </section>
//   );
// }

'use client';

import { motion } from 'motion/react';
import { ArrowRight, Play, Users, Leaf } from 'lucide-react';

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-[#F8F6F1] pt-32 pb-16 lg:pt-40 lg:pb-24">

      {/* CONTAINER */}
      <div className="mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-14 px-6 lg:grid-cols-2 lg:gap-16">

        {/* LEFT CONTENT */}
        <motion.div
          initial={{ opacity: 0, x: -40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          className="order-2 flex flex-col items-start gap-6 lg:order-1 lg:gap-8"
        >

          {/* BADGE */}
          <div className="inline-flex items-center gap-2 rounded-full border border-black/5 bg-[#E8E9E4] px-4 py-2 shadow-[0px_1px_2px_#0000000d]">

            <Leaf size={16} className="text-[#FC9430]" />

            <p className="text-xs font-semibold leading-5 text-[#154212] sm:text-sm">
              Pejuang lingkungan bersih & bebas sampah
            </p>

          </div>

          {/* HEADING */}
          <div className="flex flex-col items-start space-y-1">

            <h1 className="text-5xl font-extrabold leading-[1.1] tracking-[-1.5px] text-[#154212] sm:text-6xl">
              Bersama
            </h1>

            <h1 className="text-5xl font-extrabold leading-[1.1] tracking-[-1.5px] text-[#154212] sm:text-6xl">
              Membangun
            </h1>

            {/* HIGHLIGHT */}
            <div className="relative inline-block">

              <h1 className="relative z-10 text-5xl font-extrabold leading-[1.1] tracking-[-1.5px] text-[#FC9430] sm:text-6xl">
                Ekosistem Hijau
              </h1>

              <div className="absolute -bottom-1 left-0 z-0 h-[10px] w-full rounded-full bg-[#FC9430]/15 blur-[1px]" />

            </div>
          </div>

          {/* DESCRIPTION */}
          {/* <p className="max-w-[540px] text-lg font-medium leading-relaxed text-[#42493E] sm:text-xl"> */}
           <p className="max-w-[540px] text-justify text-lg font-medium leading-relaxed text-[#42493E] sm:text-xl">
            Mewujudkan lingkungan yang asri melalui aksi nyata,
            edukasi berkelanjutan, dan kolaborasi masyarakat
            dalam pengelolaan sampah yang bijak.
          </p>

          {/* BUTTONS */}
          <div className="flex flex-wrap items-center gap-4 pt-2 lg:pt-4">

            {/* PRIMARY BUTTON */}
            <button className="group inline-flex items-center gap-3 rounded-full bg-[linear-gradient(172deg,rgba(21,66,18,1)_0%,rgba(45,90,39,1)_100%)] px-8 py-4 shadow-[0px_12px_40px_#15421226] transition-all duration-300 hover:scale-[1.02] active:scale-95 sm:px-10 sm:py-5">

              <span className="text-lg font-bold leading-7 text-white">
                Hubungi Kami
              </span>

              <ArrowRight
                size={20}
                className="text-white transition-transform duration-300 group-hover:translate-x-1"
              />

            </button>

            {/* SECONDARY BUTTON */}
            <button className="group inline-flex items-center gap-3 rounded-full bg-[#E8E9E4] px-8 py-4 transition-all duration-300 hover:scale-[1.02] active:scale-95 sm:px-10 sm:py-5">

              {/* PLAY ICON */}
              <div className="flex h-8 w-8 items-center justify-center overflow-hidden rounded-full bg-#E8E9E4 shadow-sm">

                <img
                  src="/play.png"
                  alt="Play"
                  className="h-full w-full object-cover"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none';

                    if (e.currentTarget.nextElementSibling) {
                      (
                        e.currentTarget.nextElementSibling as HTMLElement
                      ).style.display = 'flex';
                    }
                  }}
                />

                <Play
                  size={18}
                  className="ml-1 hidden fill-[#154212] text-[#154212]"
                />

              </div>

              <span className="text-lg font-bold leading-7 text-[#154212]">
                Tonton Video
              </span>

            </button>

          </div>
        </motion.div>

        {/* RIGHT CONTENT */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="order-1 hidden justify-center lg:order-2 lg:flex lg:justify-end"
        >

          {/* IMAGE WRAPPER */}
          <div className="relative h-[560px] w-full">

            {/* BLUR BACKGROUND */}
            <div className="absolute left-8 top-8 h-full w-full rounded-[64px] bg-[#FC9430]/10 blur-[32px]" />

            {/* IMAGE */}
            <div className="relative z-10 h-full overflow-hidden rounded-[48px] border-8 border-white/50 shadow-[0px_20px_60px_#1542121a]">

              <img
                src="/tb.png"
                alt="Eco Illustration"
                className="h-full w-full object-cover"
              />

            </div>

            {/* FLOATING CARD */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute -bottom-8 -left-8 z-20 inline-flex items-center gap-5 rounded-[32px] border border-white/50 bg-white p-6 shadow-[0px_12px_40px_#15421214]"
            >

              {/* ICON */}
              <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-[#FEF4E9]">

                <Users className="text-[#FC9430]" size={28} />

              </div>

              {/* TEXT */}
              <div className="flex flex-col">

                <h3 className="text-3xl font-extrabold leading-none text-[#154212]">
                  500+
                </h3>

                <p className="text-sm font-medium text-[#42493E]">
                  Relawan Aktif
                </p>

              </div>

            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}