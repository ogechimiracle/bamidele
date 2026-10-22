import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { ArrowUp, BarChart3, Terminal } from 'lucide-react';

// Component Imports
import GlowBackground from './components/GlowBackground';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Achievements from './components/Achievements';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import Projects from './components/Projects';
import CaseStudies from './components/CaseStudies';
import Timeline from './components/Timeline';
import Testimonials from './components/Testimonials';
import Blog from './components/Blog';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [bootText, setBootText] = useState('INGESTING_DATA_SCHEMAS...');
  const [showScrollTop, setShowScrollTop] = useState(false);

  // Loading animation sequence (Simulates a fast C-Suite diagnostic boot loader)
  useEffect(() => {
    const bootStates = [
      { delay: 300, text: 'AUDITING_MYSQL_REGISTRIES_0x223A...' },
      { delay: 600, text: 'COMPILING_DAX_METRIC_MODELS_98.4%...' },
      { delay: 900, text: 'ESTABLISHING_BI_VIEWPORT_CONN...' },
      { delay: 1200, text: 'SYSTEM_ACTIVE: PORTFOLIO_LIVE' }
    ];

    bootStates.forEach((state) => {
      setTimeout(() => {
        setBootText(state.text);
      }, state.delay);
    });

    const endLoader = setTimeout(() => {
      setLoading(false);
    }, 1500);

    return () => {
      clearTimeout(endLoader);
    };
  }, []);

  // Back-to-top floating button trigger
  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="relative min-h-screen bg-brand-bg text-white font-sans overflow-x-hidden selection:bg-brand-accent/30 select-text">
      
      {/* Floating Glow Mesh Backdrop */}
      <GlowBackground />

      {/* Boot Loading Animation */}
      <AnimatePresence>
        {loading && (
          <motion.div
            key="loader"
            className="fixed inset-0 bg-[#050816] z-50 flex flex-col items-center justify-center pointer-events-auto"
            exit={{ opacity: 0, scale: 1.05 }}
            transition={{ duration: 0.5, ease: 'easeOut' }}
          >
            {/* Pulsing analytics icon */}
            <div className="w-16 h-16 rounded-2xl bg-brand-accent/10 border border-brand-accent/30 flex items-center justify-center mb-6 animate-pulse">
              <BarChart3 className="w-8 h-8 text-brand-accent" />
            </div>

            {/* Diagnostic system logger console text */}
            <div className="flex items-center gap-2 text-xs font-mono text-brand-accent-secondary bg-white/[0.02] border border-white/5 py-2 px-4 rounded-xl shadow-lg">
              <Terminal className="w-4 h-4 text-brand-accent" />
              <span>{bootText}</span>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Primary Layout */}
      {!loading && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col min-h-screen relative w-full"
        >
          {/* Header Navigation */}
          <Navbar />

          {/* Core Content Views (Stacked) */}
          <main className="flex-1 w-full relative z-10">
            {/* 1. Hero Cover */}
            <Hero />

            {/* 2. Achievements & Trusted Client List */}
            <Achievements />

            {/* 3. Detailed Bio Story & Approach */}
            <About />

            {/* 4. Skills progress & custom tags */}
            <Skills />

            {/* 5. Core Business Consulting Services */}
            <Services />

            {/* 6. Featured Dashboard & Data Projects */}
            <Projects />

            {/* 7. Interactive storytelling Case Studies */}
            <CaseStudies />

            {/* 8. Experience, Education & Certifications */}
            <Timeline />

            {/* 9. Client reviews slider */}
            <Testimonials />

            {/* 10. Technical blog articles with reader dialogue */}
            <Blog />

            {/* 11. FAQ diagnostics accordions */}
            <FAQ />

            {/* 12. Complete contact form with state simulation */}
            <Contact />
          </main>

          {/* Unified Footer */}
          <Footer />

          {/* Floating Back-to-Top Button trigger (Lower right) */}
          <AnimatePresence>
            {showScrollTop && (
              <motion.button
                onClick={handleScrollTop}
                className="fixed bottom-6 right-6 p-3 rounded-full bg-brand-accent/90 backdrop-blur-md border border-brand-accent/20 text-white shadow-xl hover:bg-brand-accent transition-colors z-30 cursor-pointer active:scale-95"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2 }}
                aria-label="Scroll back to top"
              >
                <ArrowUp className="w-5 h-5" />
              </motion.button>
            )}
          </AnimatePresence>
        </motion.div>
      )}

    </div>
  );
}
