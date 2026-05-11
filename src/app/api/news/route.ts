import { NextResponse } from 'next/server';
import { news as initialNews } from '@/data/news';

// This is a temporary in-memory store. 
// When you connect PostgreSQL, you will replace these with database queries using Prisma.
let newsItems = [...initialNews];

export async function GET() {
  return NextResponse.json(newsItems);
}

export async function POST(request: Request) {
  try {
    const data = await request.json();
    const newNews = {
      ...data,
      id: Math.random().toString(36).substr(2, 9),
      date: new Date().toISOString().split('T')[0],
    };
    newsItems = [newNews, ...newsItems];
    return NextResponse.json(newNews, { status: 201 });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to create news' }, { status: 500 });
  }
}

export async function PUT(request: Request) {
  try {
    const data = await request.json();
    newsItems = newsItems.map(n => n.id === data.id ? { ...n, ...data } : n);
    return NextResponse.json(data);
  } catch (error) {
    return NextResponse.json({ error: 'Failed to update news' }, { status: 500 });
  }
}

export async function DELETE(request: Request) {
  try {
    const { searchParams } = new URL(request.url);
    const id = searchParams.get('id');
    newsItems = newsItems.filter(n => n.id !== id);
    return NextResponse.json({ success: true });
  } catch (error) {
    return NextResponse.json({ error: 'Failed to delete news' }, { status: 500 });
  }
}
