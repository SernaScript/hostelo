'use client';

import React from 'react';
import HeroSection from '@/components/hero/HeroSection';
import FloorVisualizer from '@/components/rooms/FloorVisualizer';
import RoomsCatalog from '@/components/rooms/RoomsCatalog';
import AmenitiesSection from '@/components/experiences/AmenitiesSection';
import CartagenaGuide from '@/components/experiences/CartagenaGuide';
import ConciergeSection from '@/components/concierge/ConciergeSection';
import ReviewSection from '@/components/reviews/ReviewSection';
import FAQSection from '@/components/faq/FAQSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <FloorVisualizer />
      <RoomsCatalog />
      <AmenitiesSection />
      <CartagenaGuide />
      <ConciergeSection />
      <ReviewSection />
      <FAQSection />
    </>
  );
}
