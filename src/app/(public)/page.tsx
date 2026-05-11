
import React from 'react';
import { Hero } from '@/components/landing/Hero';
import { About } from '@/components/landing/About';
import { Programs } from '@/components/landing/Programs';
import { Education } from '@/components/landing/Education';
import { ProductCatalog } from '@/components/landing/ProductCatalog';
import { Gallery } from '@/components/landing/Gallery';
import { Partnerships } from '@/components/landing/Partnerships';
import { JoinCTA } from '@/components/landing/JoinCTA';
import { products } from '@/data/products';

export default async function LandingPage() {
  const res = await fetch ("http://localhost:2000/api/products")
  const resJson = await res.json();
  const products = resJson?.data;
  return (
    <div className="overflow-x-hidden pt-20">
      <Hero />
      <About />
      <Programs />
      <Education />
      <ProductCatalog products={products}  />
      <Gallery />
      <Partnerships />
      <JoinCTA />
    </div>
  );
}
