import React from 'react';

import { Hero } from '@/components/landing/Hero';
import { About } from '@/components/landing/About';
import { Programs } from '@/components/landing/Programs';
import { Education } from '@/components/landing/Education';
import { ProductCatalog } from '@/components/landing/ProductCatalog';
import { Gallery } from '@/components/landing/Gallery';

type ProgramItem = {
  id: number;
  title: string;
  summary?: string;
  content: string;
  image?: string;
  imageUrl?: string;
  slug: string;
  status?: string;
  publishDate?: string;
  endDate?: string;
  partnership?: string;
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
    const now = new Date();
    const wibTime = new Date(now.getTime() + (7 * 60 * 60 * 1000));
    const todayStr = wibTime.toISOString().split('T')[0]; // "2026-05-28"

    programs = (programsJson?.data || [])
      .filter((item: ProgramItem) => {
        // Only show PUBLISHED programs
        if (item.status && item.status !== 'PUBLISHED') return false;
        
        // Check Start Date
        if (item.publishDate) {
          const startStr = item.publishDate.split('T')[0];
          if (todayStr < startStr) return false;
        }
        
        // Check End Date
        if (item.endDate) {
          const endStr = item.endDate.split('T')[0];
          if (todayStr > endStr) return false;
        }
        
        return true;
      })
      .map((item: ProgramItem) => ({
        id: item.id,
        title: item.title,
        description: item.summary || item.content,
        image: item.imageUrl
          ? `http://localhost:2000/${item.imageUrl}`
          : item.image || `https://picsum.photos/seed/${item.id}/500/300`,
        slug: item.slug,
        partnership: item.partnership,
      }));
  } catch (error) {
    console.error(
      'Failed to fetch programs:',
      error
    );

    programs = [];
  }

  // =========================
  // EDUCATION
  // =========================
  let education = [];

  try {
    const educationRes = await fetch(
      'http://localhost:2000/api/education',
      {
        cache: 'no-store',
      }
    );

    const educationJson = await educationRes.json();
    education = (educationJson?.data || [])
      .filter((item: any) => item.status === 'PUBLISHED')
      .slice(0, 4); // Display at most 4 items on the landing page
  } catch (error) {
    console.error('Failed to fetch education:', error);
    education = [];
  }

  return (
    <div className="overflow-x-hidden pt-[88px]">

      <Hero />

      <About />

      <Programs programs={programs} />

      <Education items={education} />

      <ProductCatalog products={products} />

      <Gallery />

    </div>
  );
}