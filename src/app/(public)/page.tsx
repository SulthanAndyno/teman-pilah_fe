'use client';

import React from 'react';
import { Hero } from '@/components/landing/Hero';
import { About } from '@/components/landing/About';
import { Programs } from '@/components/landing/Programs';
import { Education } from '@/components/landing/Education';
import { ProductCatalog } from '@/components/landing/ProductCatalog';
import { Gallery } from '@/components/landing/Gallery';
import { Partnerships } from '@/components/landing/Partnerships';
import { JoinCTA } from '@/components/landing/JoinCTA';

export default function LandingPage() {
  return (
    <div className="overflow-x-hidden pt-20">
      <Hero />
      <About />
      <Programs />
      <Education />
      <ProductCatalog />
      <Gallery />
      <Partnerships />
      <JoinCTA />
    </div>
  );
}
