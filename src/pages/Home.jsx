import React from 'react';
import HeroSection from '../components/HeroSection';
import BrandSection from '../components/BrandSection';
import LayeredParallaxSections from '../components/LayeredParallaxSections';
import HorizontalScrollShowcase from '../components/HorizontalScrollShowcase';

export default function Home() {
  return (
    <div className="pt-16">
      <HeroSection />
      <BrandSection />
      <LayeredParallaxSections />
      <HorizontalScrollShowcase />
    </div>
  );
} 