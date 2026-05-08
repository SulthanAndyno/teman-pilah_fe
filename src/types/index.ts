export interface Product {
  id: string;
  name: string;
  category: 'UPCYCLED_GOODS' | 'ORGANIC' | 'ZERO_WASTE';
  description: string;
  image: string;
  price: number;
  stock: number;
}

export interface News {
  id: string;
  title: string;
  category: string;
  content: string;
  date: string;
  image: string;
  status: 'published' | 'draft';
}

export interface User {
  id: string;
  email: string;
  name: string;
  role: 'admin';
}
