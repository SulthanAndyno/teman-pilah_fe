// // // export interface Product {
// // //   id: string;
// // //   name: string;
// // //   category: 'UPCYCLED_GOODS' | 'ORGANIC' | 'ZERO_WASTE';
// // //   description: string;
// // //   image: string;
// // //   price: number;
// // //   stock: number;
// // // }

// // // export interface News {
// // //   id: string;
// // //   title: string;
// // //   category: string;
// // //   content: string;
// // //   date: string;
// // //   image: string;
// // //   status: 'published' | 'draft';
// // // }

// // // export interface User {
// // //   id: string;
// // //   email: string;
// // //   name: string;
// // //   role: 'admin';
// // // }

// // export interface Product {
// //   id: string;
// //   name: string;
// //   category: 'UPCYCLED_GOODS' | 'ORGANIC' | 'ZERO_WASTE';
// //   description: string;
// //   image?: string;
// //   price: number;
// //   priceUnit: string;
// //   stock: number;
// //   stockLabel: 'IN_STOCK' | 'BULK_AVAILABLE' | 'OUT_OF_STOCK';
// //   whatsappLink: string;
// // }

// // export interface News {
// //   id: string;
// //   title: string;
// //   category: string;
// //   content: string;
// //   date: string;
// //   image: string;
// //   status: 'published' | 'draft';
// // }

// // export interface User {
// //   id: string;
// //   email: string;
// //   name: string;
// //   role: 'admin';
// // }


// export interface News {
//   id: string;

//   title: string;

//   slug?: string;

//   category: string;

//   content: string;

//   summary?: string;

//   imageUrl?: string;

//   image?: string;

//   authors: string[];

//   tags: string[];

//   status: 'PUBLISHED' | 'DRAFT' | 'ARCHIVED';

//   visibility?: 'PUBLIC' | 'PRIVATE';

//   publishDate?: string;

//   date?: string;

//   createdAt?: string;

//   updatedAt?: string;
// }

// src/types/index.ts

export interface Product {
  id: string;

  name: string;

  category:
    | 'UPCYCLED_GOODS'
    | 'ORGANIC'
    | 'ZERO_WASTE';

  description: string;

  image?: string;
  imageUrl?: string;

  price: number;

  priceUnit: string;

  stock: number;

  stockLabel:
    | 'IN_STOCK'
    | 'BULK_AVAILABLE'
    | 'OUT_OF_STOCK';

  whatsappLink: string;
}

export interface News {
  id: string;

  title: string;

  slug?: string;

  category: string;

  content: string;

  summary?: string;

  // DARI BACKEND
  imageUrl?: string;

  // UNTUK FRONTEND DISPLAY
  image?: string;

  authors: string[];

  tags: string[];

  status:
    | 'PUBLISHED'
    | 'DRAFT'
    | 'ARCHIVED';

  visibility?:
    | 'PUBLIC'
    | 'PRIVATE';

  publishDate?: string;

  date?: string;

  createdAt?: string;

  updatedAt?: string;
}

export interface User {
  id: string;

  email: string;

  name: string;

  role: 'ADMIN';
}