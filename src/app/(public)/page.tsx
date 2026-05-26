
// // // import React from 'react';
// // // import { Hero } from '@/components/landing/Hero';
// // // import { About } from '@/components/landing/About';
// // // import { Programs } from '@/components/landing/Programs';
// // // import { Education } from '@/components/landing/Education';
// // // import { ProductCatalog } from '@/components/landing/ProductCatalog';
// // // import { Gallery } from '@/components/landing/Gallery';
// // // import { Partnerships } from '@/components/landing/Partnerships';
// // // import { JoinCTA } from '@/components/landing/JoinCTA';
// // // // import { products } from '@/data/products';

// // // export default async function LandingPage() {
// // //   const res = await fetch ("http://localhost:2000/api/products")
// // //   const resJson = await res.json();
// // //   const products = resJson?.data;
// // //   return (
// // //     <div className="overflow-x-hidden pt-20">
// // //       <Hero />
// // //       <About />
// // //       <Programs />
// // //       <Education />
// // //       <ProductCatalog products={products}  />
// // //       <Gallery />
// // //       <Partnerships />
// // //       <JoinCTA />
// // //     </div>
// // //   );
// // // }

// // import React from 'react';
// // import { Hero } from '@/components/landing/Hero';
// // import { About } from '@/components/landing/About';
// // import { Programs } from '@/components/landing/Programs';
// // import { Education } from '@/components/landing/Education';
// // import { ProductCatalog } from '@/components/landing/ProductCatalog';
// // import { Gallery } from '@/components/landing/Gallery';
// // import { Partnerships } from '@/components/landing/Partnerships';
// // import { JoinCTA } from '@/components/landing/JoinCTA';

// // export default async function LandingPage() {

// //   // PRODUCTS
// //   const productsRes = await fetch(
// //     'http://localhost:2000/api/products',
// //     {
// //       cache: 'no-store',
// //     }
// //   );

// //   const productsJson = await productsRes.json();

// //   const products = productsJson?.data;

// //   // PROGRAMS
// //   const programsRes = await fetch(
// //     'http://localhost:2000/api/news',
// //     {
// //       cache: 'no-store',
// //     }
// //   );

// //   const programsJson = await programsRes.json();

// //   const programs = programsJson?.data;

// //   return (
// //     <div className="overflow-x-hidden pt-20">
// //       <Hero />

// //       <About />

// //       {/* PROGRAMS */}
// //       <Programs programs={programs} />

// //       <Education />

// //       {/* PRODUCTS */}
// //       <ProductCatalog products={products} />

// //       <Gallery />

// //       <Partnerships />

// //       <JoinCTA />
// //     </div>
// //   );
// // }

// import React from 'react';

// import { Hero } from '@/components/landing/Hero';
// import { About } from '@/components/landing/About';
// import { Programs } from '@/components/landing/Programs';
// import { Education } from '@/components/landing/Education';
// import { ProductCatalog } from '@/components/landing/ProductCatalog';
// import { Gallery } from '@/components/landing/Gallery';
// import { Partnerships } from '@/components/landing/Partnerships';
// import { JoinCTA } from '@/components/landing/JoinCTA';

// export default async function LandingPage() {

//   // =========================
//   // PRODUCTS
//   // =========================
//   const productsRes = await fetch(
//     'http://localhost:2000/api/products',
//     {
//       cache: 'no-store',
//     }
//   );

//   const productsJson = await productsRes.json();

//   const products = productsJson?.data;

//   // =========================
//   // PROGRAMS / NEWS
//   // =========================
//   const programsRes = await fetch(
//     'http://localhost:2000/api/news',
//     {
//       cache: 'no-store',
//     }
//   );

//   const programsJson = await programsRes.json();

//   // const programs = programsJson?.data.map((item) => ({
//   const programs = programsJson?.data.map((item: {
//   id: number;
//   title: string;
//   summary?: string;
//   content: string;
//   image?: string;
//   slug: string;
//           }) => ({
//     id: item.id,

//     title: item.title,

//     description:
//       item.summary || item.content,

//     image:
//       item.image ||
//       'https://picsum.photos/500/300',

//     slug: item.slug,
//   }));

//   return (
//     <div className="overflow-x-hidden pt-20">

//       <Hero />

//       <About />

//       <Programs programs={programs} />

//       <Education />

//       <ProductCatalog products={products} />

//       <Gallery />

//       <Partnerships />

//       <JoinCTA />

//     </div>
//   );
// }

import React from 'react';

import { Hero } from '@/components/landing/Hero';
import { About } from '@/components/landing/About';
import { Programs } from '@/components/landing/Programs';
import { Education } from '@/components/landing/Education';
import { ProductCatalog } from '@/components/landing/ProductCatalog';
import { Gallery } from '@/components/landing/Gallery';
import { Partnerships } from '@/components/landing/Partnerships';
import { JoinCTA } from '@/components/landing/JoinCTA';

type ProgramItem = {
  id: number;
  title: string;
  summary?: string;
  content: string;
  image?: string;
  imageUrl?: string;
  slug: string;
};

export default async function LandingPage() {

  // =========================
  // PRODUCTS
  // =========================
  let products = [];

  try {
    const productsRes = await fetch(
      'http://localhost:2000/api/products',
      {
        cache: 'no-store',
      }
    );

    const productsJson = await productsRes.json();

    products = productsJson?.data || [];
  } catch (error) {
    console.error('Failed to fetch products:', error);
    products = [];
  }

  // =========================
  // PROGRAMS / NEWS
  // =========================
  let programs = [];

  try {
    const programsRes = await fetch(
      'http://localhost:2000/api/news',
      {
        cache: 'no-store',
      }
    );

    const programsJson = await programsRes.json();

    programs = (programsJson?.data || []).map(
      (item: ProgramItem) => ({
        id: item.id,

        title: item.title,

        description:
          item.summary || item.content,

        image:
          item.imageUrl
            ? `http://localhost:2000/${item.imageUrl}`
            : item.image ||
              `https://picsum.photos/seed/${item.id}/500/300`,

        slug: item.slug,
      })
    );
  } catch (error) {
    console.error(
      'Failed to fetch programs:',
      error
    );

    programs = [];
  }

  return (
    <div className="overflow-x-hidden pt-20">

      <Hero />

      <About />

      <Programs programs={programs} />

      <Education />

      <ProductCatalog products={products} />

      <Gallery />

      <Partnerships />

      <JoinCTA />

    </div>
  );
}