import { NextResponse } from 'next/server';
import { products as initialProducts } from '@/data/products';

// This is a temporary in-memory store. 
// When you connect PostgreSQL, you will replace these with database queries using Prisma.
let products = [...initialProducts];

export async function GET() {
  return NextResponse.json(products);
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const newProduct = {
      ...data,
      id: Math.random().toString(36).substr(2, 9),
    };
    products = [newProduct, ...products];
    return NextResponse.json(newProduct, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create product' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    products = products.map(p => p.id === data.id ? { ...p, ...data } : p);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update product' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    products = products.filter(p => p.id !== id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete product' }, { status: 500 });
  }
}
