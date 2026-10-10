import React, { useEffect } from 'react';
import Lenis from 'lenis';
import { Navbar } from './components/layout/Navbar';
import { Footer } from './components/layout/Footer';
import { AmbientAtmosphere } from './components/ui/AmbientAtmosphere';
import { CustomCursor } from './components/ui/CustomCursor';
import { Hero } from './components/sections/Hero';
import { About } from './components/sections/About';
import { Skills } from './components/sections/Skills';
import { Projects } from './components/sections/Projects';
import { Education } from './components/sections/Education';
import { Leadership } from './components/sections/Leadership';
import { Achievements } from './components/sections/Achievements';
import { Certifications } from './components/sections/Certifications';
import { Contact } from './components/sections/Contact';

export const App: React.FC = () => {
  useEffect(() => {
    // Initialize Lenis smooth scroll with cinematic inertia
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
      touchMultiplier: 1.5,
    });

    let animationFrameId: number;

    function raf(time: number) {
      lenis.raf(time);
      animationFrameId = requestAnimationFrame(raf);
    }

    animationFrameId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(animationFrameId);
      lenis.destroy();
    };
  }, []);

  return (
    <div className="relative min-h-screen bg-background text-foreground selection:bg-accent/20 selection:text-white">
      {/* 3D Cinematic Ambient Atmosphere & Particles Canvas */}
      <AmbientAtmosphere />

      {/* Kinetic Custom Cursor with Spring Physics */}
      <CustomCursor />

      {/* Subtle architectural noise / grid overlay */}
      <div 
        className="fixed inset-0 pointer-events-none z-0 opacity-20 bg-[radial-gradient(#ffffff0a_1px,transparent_1px)] [background-size:24px_24px]" 
        aria-hidden="true" 
      />

      {/* Main Layout Pipeline */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Education />
          <Leadership />
          <Achievements />
          <Certifications />
          <Contact />
        </main>

        <Footer />
      </div>
    </div>
  );
};

export default App;
