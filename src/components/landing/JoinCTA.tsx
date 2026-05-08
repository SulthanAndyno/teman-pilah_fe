// // 'use client';

// // import { motion } from 'motion/react';
// // import { Button } from '@/components/ui/Button';

// // export function JoinCTA() {
// //   const fadeInUp = {
// //     initial: { opacity: 0, y: 20 },
// //     whileInView: { opacity: 1, y: 0 },
// //     viewport: { once: true },
// //     transition: { duration: 0.6 }
// //   };

// //   return (
// //     <section className="py-24">
// //       <div className="max-w-7xl mx-auto px-6">
// //         <div className="bg-primary rounded-[60px] p-12 lg:p-24 text-center text-white space-y-12 relative overflow-hidden">
// //           <div className="absolute top-0 right-0 w-96 h-96 bg-accent opacity-10 rounded-full blur-[100px] -mr-48 -mt-48" />
// //           <div className="absolute bottom-0 left-0 w-96 h-96 bg-accent opacity-10 rounded-full blur-[100px] -ml-48 -mb-48" />
          
// //           <motion.div {...fadeInUp} className="max-w-2xl mx-auto space-y-8 relative z-10">
// //             <h2 className="text-4xl lg:text-6xl font-bold leading-tight">Bergabung dengan Teman Pilah</h2>
// //             <p className="text-xl text-white/80">
// //               Mari bersama ciptakan lingkungan yang lebih baik. Jadilah bagian dari solusi, bukan polusi.
// //             </p>
// //             <div className="flex flex-wrap justify-center gap-6">
// //               <Button size="lg" className="bg-white text-primary hover:bg-neutral hover:text-white border-2 border-white">
// //                 Hubungi via WhatsApp
// //               </Button>
// //               <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-primary">
// //                 Hubungi via Instagram
// //               </Button>
// //             </div>
// //           </motion.div>
// //         </div>
// //       </div>
// //     </section>
// //   );
// // }


// 'use client';

// import { motion } from 'motion/react';
// import { Button } from '@/components/ui/Button';

// export function JoinCTA() {
//   const fadeInUp = {
//     initial: { opacity: 0, y: 20 },
//     whileInView: { opacity: 1, y: 0 },
//     viewport: { once: true },
//     transition: { duration: 0.6 }
//   };

//   return (
//     <section className="py-24 bg-[#F8F6F1]">
//       <div className="max-w-7xl mx-auto px-6">
//         <div className="bg-[#234926] rounded-[80px] p-12 lg:p-24 text-center text-white space-y-12 relative overflow-hidden">
//           <div className="absolute top-0 right-0 w-96 h-96 bg-[#FC9430] opacity-10 rounded-full blur-[100px] -mr-48 -mt-48" />
//           <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FC9430] opacity-10 rounded-full blur-[100px] -ml-48 -mb-48" />
          
//           <motion.div {...fadeInUp} className="max-w-3xl mx-auto space-y-10 relative z-10">
//             <h2 className="text-5xl lg:text-7xl font-bold leading-tight">Bergabung dengan Teman Pilah</h2>
//             <p className="text-2xl text-white/80 font-medium">
//               Mari bersama ciptakan lingkungan yang lebih baik. Jadilah bagian dari solusi, bukan polusi.
//             </p>
//             <div className="flex flex-wrap justify-center gap-6">
//               <Button className="rounded-full px-10 py-8 bg-white text-[#234926] hover:bg-white/90 text-xl font-bold shadow-xl transition-transform hover:scale-105 border-none">
//                 Hubungi via WhatsApp
//               </Button>
//               <Button variant="outline" className="rounded-full px-10 py-8 border-2 border-white text-white hover:bg-white hover:text-[#234926] text-xl font-bold transition-all">
//                 Ikuti Instagram Kami
//               </Button>
//             </div>
//           </motion.div>
//         </div>
//       </div>
//     </section>
//   );
// }


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
