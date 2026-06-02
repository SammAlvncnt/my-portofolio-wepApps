import { useEffect } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import Timeline from './components/Timeline';
import Contact from './components/Contact';
import Footer from './components/Footer';
import AnimatedBackground from './components/AnimatedBackground';
import { motion } from 'motion/react';
import Lenis from 'lenis';

export default function App() {
  // Initialize Lenis buttery-smooth inertial scroll engine
  useEffect(() => {
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)), // physics ease-out curve
      smoothWheel: true,
      wheelMultiplier: 1.1,
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <div className="min-h-screen bg-transparent text-ink font-sans selection:bg-black selection:text-white relative flex flex-col antialiased">
      {/* Dynamic Floating Ambient Lights and Glowing Constellations Particle Systems */}
      <AnimatedBackground />

      {/* Visual background noise overlay */}
      <div className="fixed inset-0 z-50 pointer-events-none noise-overlay opacity-[0.012]" />

      {/* Persistent global scroll indicator */}
      <Header />

      {/* Main Container */}
      <main className="flex-1">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Section 0: Home Hero Introduction on left with image on right */}
          <Hero />

          {/* Section 1: About Me and Interactive Skills draggable sandbox */}
          <About />

          {/* Section 2: Highly Immersive interactive Project Cards Catalog */}
          <Projects />

          {/* Section 3: Professional Journey Timeline */}
          <Timeline />

          {/* Section 4: Contact ide & proposal form */}
          <Contact />
        </motion.div>
      </main>

      {/* Persistant footer representation with real-time dial clock */}
      <Footer />
    </div>
  );
}
