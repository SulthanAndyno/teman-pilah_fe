export interface Program {
  id: string;
  title: string;
  slug?: string;
  description: string;
  overview?: string;
  image?: string;
  imageUrl?: string;
  status?: string;
  startDate?: string;
  endDate?: string;
  tags?: string[];
  createdAt?: string;
  updatedAt?: string;
  partnership?: string;
}

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

  authors?: string[];

  tags?: string[];

  status:
    | 'PUBLISHED'
    | 'DRAFT'
    | 'ARCHIVED';

  visibility?:
    | 'PUBLIC'
    | 'PRIVATE';

  publishDate?: string;
  endDate?: string;
  date?: string;

  createdAt?: string;

  updatedAt?: string;
  partnership?: string;
}

export interface User {
  id: string;

  email: string;

  name: string;

  role: 'ADMIN';
}

export interface Education {
  id: string;
  title: string;
  slug: string;
  overview: string;
  description: string;
  thumbnail?: string;
  tags: string[];
  publishDate?: string;
  status: 'DRAFT' | 'PUBLISHED';
  createdAt?: string;
  updatedAt?: string;
}