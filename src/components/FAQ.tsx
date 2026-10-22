import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { HelpCircle, ChevronDown, ChevronUp } from 'lucide-react';
import { faqData } from '../data';

export default function FAQ() {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-24 relative overflow-hidden bg-white/[0.01] border-t border-b border-white/5">
      <div className="absolute inset-0 bg-radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops)) from-indigo-950/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-center flex flex-col items-center">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-accent mb-2 block">
            COMMON INQUIRIES
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-white mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-sm text-gray-400 font-sans max-w-xl text-center">
            A selection of answers mapping out my engagement terms, billing models, integration parameters, and technical bounds.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-accent to-brand-accent-secondary mt-6" />
        </div>

        {/* Accordions */}
        <div className="flex flex-col gap-4 text-left">
          {faqData.map((item, idx) => {
            const isExpanded = expandedId === item.id;
            return (
              <motion.div
                key={item.id}
                className="bg-white/[0.02] border border-white/5 rounded-2xl overflow-hidden hover:border-brand-accent/20 transition-all duration-300"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
              >
                {/* Accordion Trigger */}
                <button
                  onClick={() => toggleExpand(item.id)}
                  className="w-full py-5 px-6 flex items-center justify-between gap-4 text-left font-display font-bold text-sm sm:text-base text-gray-100 hover:text-white transition-colors cursor-pointer"
                >
                  <div className="flex items-center gap-3.5">
                    <HelpCircle className="w-5 h-5 text-brand-accent shrink-0" />
                    <span>{item.question}</span>
                  </div>
                  <div>
                    {isExpanded ? (
                      <ChevronUp className="w-4 h-4 text-brand-accent-secondary" />
                    ) : (
                      <ChevronDown className="w-4 h-4 text-gray-500" />
                    )}
                  </div>
                </button>

                {/* Expanded content panel */}
                <AnimatePresence initial={false}>
                  {isExpanded && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="border-t border-white/5"
                    >
                      <div className="p-6 text-xs sm:text-sm text-gray-400 font-sans leading-relaxed bg-white/[0.01]">
                        {item.answer.split('\n').map((line, lIdx) => (
                          <p key={lIdx} className={lIdx > 0 ? 'mt-3' : ''}>
                            {line}
                          </p>
                        ))}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
