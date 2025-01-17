'use client';

import BannerSection from '@/components/sections/BannerSection';
import DummySection from '@/components/sections/GiftSection';
import HeroSection from '@/components/sections/HeroSection';
import { useTheme } from '@/contex/ThemeContext';
import { useEffect } from 'react';

export default function Home() {
  const { setTheme } = useTheme();

  useEffect(() => {
    setTheme('light');
  }, [setTheme]);

  return (
    <div className='min-h-screen  bg-white'>
      <HeroSection />
      <BannerSection />
      <DummySection />
    </div>
  );
}
