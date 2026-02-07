import React, { useEffect } from 'react';
import { ThemeProvider } from '@/app/context/ThemeContext';
import { Navigation } from '@/app/components/Navigation';
import { FloatingParticles } from '@/app/components/FloatingParticles';
import { Hero } from '@/app/components/Hero';
import { WhoWeAre } from '@/app/components/WhoWeAre';
import { WhatWeDo } from '@/app/components/WhatWeDo';
import { ProductEcosystem } from '@/app/components/ProductEcosystem';
import { WhyBeduni } from '@/app/components/WhyBeduni';
import { VisionImpact } from '@/app/components/VisionImpact';
import { TeamMessage } from '@/app/components/TeamMessage';
import { Contact } from '@/app/components/Contact';
import { Footer } from '@/app/components/Footer';

export default function App() {
  useEffect(() => {
    // Enable smooth scrolling
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <ThemeProvider>
      <div className="relative min-h-screen bg-gradient-to-br from-blue-50 via-gray-50 to-blue-100 dark:from-black dark:via-gray-900 dark:to-black text-black dark:text-white overflow-x-hidden">
        {/* Floating Particles Background */}
        <FloatingParticles />
        
        {/* Navigation - Now at the very top */}
        <Navigation />
        
        {/* Main Content */}
        <main className="relative z-10">
          <Hero />
          <WhoWeAre />
          <WhatWeDo />
          <ProductEcosystem />
          <WhyBeduni />
          <VisionImpact />
          <TeamMessage />
          <Contact />
        </main>
        
        {/* Footer */}
        <Footer />
      </div>
    </ThemeProvider>
  );
}