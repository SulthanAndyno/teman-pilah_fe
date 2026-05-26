// 'use client';

// import { Card } from '@/components/ui/Card';
// // import { Badge } from '@/components/ui/Badge';
// import { Trash2, RefreshCw, Recycle, CheckCircle2 } from 'lucide-react';
// import { cn } from '@/lib/utils';

// export function Education() {
//   return (
//     <section id="edukasi" className="py-24 bg-white overflow-hidden">
//       <div className="max-w-7xl mx-auto px-6 space-y-20">
//         <div className="text-center space-y-6 max-w-3xl mx-auto">
//           <h2 className="text-5xl font-bold text-[#1B3022]">Pusat Edukasi</h2>
//           <p className="text-xl text-[#3D4F41] leading-relaxed font-medium">
//             Pahami cara mengelola sampah dengan benar untuk masa depan yang lebih baik dan lingkungan yang asri.
//           </p>
//         </div>

//         <div className="grid lg:grid-cols-2 gap-16 items-center">
//           <div className="space-y-12">
//             <div className="space-y-8">
//               <h3 className="text-4xl font-bold text-[#1B3022] border-l-4 border-accent pl-6">Prinsip 3R</h3>
//               <div className="space-y-10">
//                 {[
//                   { icon: Trash2, title: 'Reduce (Kurangi)', desc: 'Meminimalisir penggunaan barang yang menghasilkan sampah, seperti plastik sekali pakai.', color: 'text-[#FC9430]', bg: 'bg-[#FEF4E9]' },
//                   { icon: RefreshCw, title: 'Reuse (Gunakan Kembali)', desc: 'Memakai kembali barang yang masih layak fungsi untuk mengurangi penumpukan sampah.', color: 'text-[#2D5A27]', bg: 'bg-[#F1F3E9]' },
//                   { icon: Recycle, title: 'Recycle (Daur Ulang)', desc: 'Mengolah sampah menjadi produk baru yang bernilai guna dan ekonomis.', color: 'text-[#8B5F77]', bg: 'bg-[#F2EDF0]' }
//                 ].map((item, idx) => (
//                   <div key={idx} className="flex gap-8 group">
//                     <div className={cn("shrink-0 w-16 h-16 rounded-[20px] flex items-center justify-center transition-transform group-hover:scale-110 duration-300", item.bg, item.color)}>
//                       <item.icon size={32} />
//                     </div>
//                     <div>
//                       <h4 className="text-2xl font-bold text-[#1B3022] mb-2">{item.title}</h4>
//                       <p className="text-[#3D4F41] text-lg font-medium leading-relaxed">{item.desc}</p>
//                     </div>
//                   </div>
//                 ))}
//               </div>
//             </div>
//           </div>

//           <div className="grid sm:grid-cols-2 gap-8">
//             <Card className="bg-[#F1F3E9]/50 border-none rounded-[40px] p-10 flex flex-col shadow-none">
//               <div className="inline-flex self-start px-4 py-1.5 bg-primary text-white rounded-full text-sm font-bold mb-6">Sampah Organik</div>
//               <ul className="space-y-4 text-lg text-[#3D4F41] font-medium">
//                 <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-primary" /> Sisa Makanan</li>
//                 <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-primary" /> Daun Kering</li>
//                 <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-primary" /> Kulit Buah</li>
//               </ul>
//             </Card>
//             <Card className="bg-[#FEF4E9]/50 border-none rounded-[40px] p-10 flex flex-col shadow-none">
//               <div className="inline-flex self-start px-4 py-1.5 bg-accent text-white rounded-full text-sm font-bold mb-6">Sampah Anorganik</div>
//               <ul className="space-y-4 text-lg text-[#3D4F41] font-medium">
//                 <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-accent" /> Botol Plastik</li>
//                 <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-accent" /> Kertas & Karton</li>
//                 <li className="flex items-center gap-3"><CheckCircle2 size={20} className="text-accent" /> Kaleng Logam</li>
//               </ul>
//             </Card>
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// }
'use client';

import type { JSX } from 'react';

const principles = [
  {
    id: 'reduce',

    title: 'Reduce (Kurangi)',

    description: (
      <>
        Meminimalisir penggunaan barang yang
        <br />
        menghasilkan sampah, seperti plastik sekali pakai.
      </>
    ),

    imageSrc: 'edu/reduce.png',
    imageAlt: 'Ikon Reduce',
  },

  {
    id: 'reuse',

    title: 'Reuse (Gunakan Kembali)',

    description: (
      <>
        Memakai kembali barang yang masih layak fungsi
        <br />
        untuk mengurangi penumpukan sampah.
      </>
    ),

    imageSrc: 'edu/reuse.png',
    imageAlt: 'Ikon Reuse',
  },

  {
    id: 'recycle',

    title: 'Recycle (Daur Ulang)',

    description: (
      <>
        Mengolah sampah menjadi produk baru yang
        <br />
        bernilai guna dan ekonomis.
      </>
    ),

    imageSrc: 'edu/recycle.png',
    imageAlt: 'Ikon Recycle',
  },
];

const wasteCategories = [
  {
    id: 'organic',

    title: 'Sampah Organik',

    description: (
      <>
        Sampah yang berasal dari sisa makhluk hidup dan mudah
        <br />
        membusuk secara alami.
      </>
    ),

    imageSrc: 'edu/organic.png',
    imageAlt: 'Sampah Organik',

    checkSrc: 'edu/tg.png',
    checkAlt: 'Check Hijau',

    cardClassName:
      'relative flex w-full items-start gap-6 rounded-[32px] border border-[#BBF7D0] bg-[#DCFCE7] p-8',

    titleClassName:
      "text-[32px] font-bold leading-none text-[#166534] [font-family:'Plus_Jakarta_Sans',Helvetica]",

    descriptionClassName:
      "pt-3 text-sm leading-6 text-[#15803DCC] [font-family:'Plus_Jakarta_Sans',Helvetica]",

    itemTextClassName:
      "text-sm leading-5 text-[#166534] [font-family:'Plus_Jakarta_Sans',Helvetica]",

    items: [
      'Sisa makanan',
      'Daun kering & ranting',
      'Kulit buah & sayur',
    ],
  },

  {
    id: 'inorganic',

    title: 'Sampah Anorganik',

    description: (
      <>
        Sampah yang sulit terurai secara alami dan membutuhkan waktu
        <br />
        lama untuk hancur.
      </>
    ),

    imageSrc: 'edu/bin.png',
    imageAlt: 'Sampah Anorganik',

    checkSrc: 'edu/tb.png',
    checkAlt: 'Check Biru',

    cardClassName:
      'relative flex w-full items-start gap-6 rounded-[32px] border border-[#BFDBFE] bg-[#DBEAFE] p-8',

    titleClassName:
      "text-[32px] font-bold leading-none text-[#1D4ED8] [font-family:'Plus_Jakarta_Sans',Helvetica]",

    descriptionClassName:
      "pt-3 text-sm leading-6 text-[#1D4ED8CC] [font-family:'Plus_Jakarta_Sans',Helvetica]",

    itemTextClassName:
      "text-sm leading-5 text-[#1D4ED8] [font-family:'Plus_Jakarta_Sans',Helvetica]",

    items: [
      'Botol plastik & kaca',
      'Kertas & kardus',
      'Kaleng & logam',
    ],
  },
];

export const Education = (): JSX.Element => {
  return (
    <section
      id="edukasi"
      // warna bg
      className="overflow-hidden bg-[#ffffff] py-24"
      aria-labelledby="section-education-title"
    >
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-14 px-6">

        {/* HEADER */}
        <header className="flex flex-col items-center gap-5">

          <h2
            id="section-education-title"
            className="text-center text-5xl font-extrabold leading-tight text-[#154212]"
          >
            Pusat Edukasi
          </h2>

          <p className="max-w-3xl text-center text-xl leading-relaxed text-[#42493E]">
            Pahami cara mengelola sampah dengan benar untuk masa depan
            yang lebih baik.
          </p>

        </header>

        {/* PRINCIPLES MAIN BOX */}
        <section className="rounded-[48px] border border-[#ECEDE7] bg-[#F7F7F4] px-8 py-14 shadow-[0_2px_10px_rgba(0,0,0,0.02)] lg:px-12">

          {/* TITLE */}
          <div className="mb-12 flex justify-center">

            <h3 className="text-center text-[40px] font-bold text-[#154212]">
              Prinsip 3R
            </h3>

          </div>

          {/* PRINCIPLES */}
          <div className="grid gap-10 lg:grid-cols-3">

            {principles.map((principle) => (
              <article
                key={principle.id}
                className="flex flex-col items-center text-center"
              >

                {/* ICON BACKGROUND */}
                <div className="flex h-20 w-20 items-center justify-center rounded-full border-4 border-white bg-[#E8E9E4] shadow-sm">

                  <img
                    src={principle.imageSrc}
                    alt={principle.imageAlt}
                    className="h-9 w-9 object-contain"
                  />

                </div>

                <h4 className="pt-5 text-[26px] font-bold leading-tight text-[#154212]">
                  {principle.title}
                </h4>

                <p className="pt-3 text-sm leading-6 text-[#42493E]">
                  {principle.description}
                </p>

              </article>
            ))}
          </div>
        </section>

        {/* CATEGORY CARDS */}
        <div className="grid gap-8 lg:grid-cols-2">

          {wasteCategories.map((category) => (
            <article
              key={category.id}
              className={category.cardClassName}
            >

              {/* ICON BOX */}
              <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl ${
                  category.id === 'organic'
                    ? 'bg-[#BBF7D0]'
                    : 'bg-[#BFDBFE]'
                }`}
              >

                <img
                  src={category.imageSrc}
                  alt={category.imageAlt}
                  className="h-8 w-8 object-contain"
                />

              </div>

              {/* CONTENT */}
              <div className="flex flex-col">

                {/* TITLE */}
                <h3 className={category.titleClassName}>
                  {category.title}
                </h3>

                {/* DESCRIPTION */}
                <p className={category.descriptionClassName}>
                  {category.description}
                </p>

                {/* LIST */}
                <ul className="flex flex-col gap-2 pt-5">

                  {category.items.map((item) => (
                    <li
                      key={item}
                      className="flex items-center gap-2"
                    >

                      <img
                        src={category.checkSrc}
                        alt={category.checkAlt}
                        className="h-4 w-4 object-contain"
                      />

                      <span className={category.itemTextClassName}>
                        {item}
                      </span>

                    </li>
                  ))}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};