import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Star, ChevronLeft, ChevronRight, Quote } from 'lucide-react';
import { testimonialsData } from '../data';

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? testimonialsData.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === testimonialsData.length - 1 ? 0 : prev + 1));
  };

  const activeReview = testimonialsData[currentIndex];

  return (
    <section id="testimonials" className="py-24 bg-white/[0.01] border-t border-b border-white/5 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient(ellipse_at_top,_var(--tw-gradient-stops)) from-blue-950/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left mx-auto text-center flex flex-col items-center">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-accent mb-2 block">
            STAKEHOLDER REVIEWS
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-white mb-4">
            What Clients Say About My Work
          </h2>
          <p className="text-sm text-gray-400 font-sans max-w-xl">
            Read professional reviews from business executives, tech co-founders, and operations leads whose reporting portals I engineered.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-accent to-brand-accent-secondary mt-6" />
        </div>

        {/* Sliding card layout */}
        <div className="max-w-4xl mx-auto relative">
          
          <div className="absolute top-1/2 -left-4 sm:-left-12 -translate-y-1/2 z-20">
            <button
              onClick={handlePrev}
              className="p-3 rounded-full bg-white/5 border border-white/5 hover:border-brand-accent/30 text-gray-400 hover:text-white transition-all cursor-pointer active:scale-95"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>
          </div>

          <div className="absolute top-1/2 -right-4 sm:-right-12 -translate-y-1/2 z-20">
            <button
              onClick={handleNext}
              className="p-3 rounded-full bg-white/5 border border-white/5 hover:border-brand-accent/30 text-gray-400 hover:text-white transition-all cursor-pointer active:scale-95"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              transition={{ duration: 0.4 }}
              className="glass-panel p-8 sm:p-12 rounded-3xl border border-white/5 relative text-left"
            >
              {/* Giant watermark Quote icon */}
              <Quote className="absolute right-8 top-8 w-24 h-24 text-white/[0.01] pointer-events-none" />

              {/* Five star rating loop */}
              <div className="flex items-center gap-1.5 mb-6">
                {Array.from({ length: activeReview.rating }).map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-amber-500 text-amber-500" />
                ))}
              </div>

              {/* Comment text */}
              <p className="text-base sm:text-lg text-gray-300 font-sans italic leading-relaxed mb-8">
                "{activeReview.comment}"
              </p>

              {/* Client Info Row */}
              <div className="flex items-center gap-4 pt-6 border-t border-white/5">
                <img
                  src={activeReview.avatarUrl}
                  alt={activeReview.name}
                  referrerPolicy="no-referrer"
                  className="w-12 h-12 rounded-full border border-white/10 object-cover"
                />
                <div>
                  <h4 className="font-display font-bold text-sm text-white">
                    {activeReview.name}
                  </h4>
                  <p className="text-xs text-gray-400 font-sans mt-0.5">
                    {activeReview.role} at <span className="text-brand-accent-secondary font-semibold">{activeReview.company}</span>
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Indicator Dot pills */}
          <div className="flex justify-center gap-2 mt-8">
            {testimonialsData.map((_, idx) => (
              <button
                key={idx}
                onClick={() => setCurrentIndex(idx)}
                className={`h-1.5 rounded-full transition-all cursor-pointer ${
                  currentIndex === idx ? 'w-6 bg-brand-accent' : 'w-2 bg-white/10'
                }`}
                aria-label={`Go to slide ${idx + 1}`}
              />
            ))}
          </div>

        </div>

      </div>
    </section>
  );
}
