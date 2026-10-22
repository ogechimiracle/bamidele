import { motion } from 'motion/react';
import * as LucideIcons from 'lucide-react';
import { servicesData } from '../data';
import { Service } from '../types';

// Helper to map dynamic string name to Lucide Icon component
const IconResolver = ({ name, className }: { name: string; className: string }) => {
  const IconComponent = (LucideIcons as any)[name];
  if (!IconComponent) {
    return <LucideIcons.HelpCircle className={className} />;
  }
  return <IconComponent className={className} />;
};

export default function Services() {
  return (
    <section id="services" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops)) from-cyan-950/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-accent mb-2 block">
            HOW I ADD VALUE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-white mb-4">
            Professional Analytics Consulting Services
          </h2>
          <p className="text-sm text-gray-400 font-sans max-w-xl">
            Tailored, high-fidelity analytical services designed to increase organizational visibility, automate administrative waste, and extract actionable financial value.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-accent to-brand-accent-secondary mt-6" />
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {servicesData.map((service, index) => (
            <motion.div
              key={service.id}
              className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-brand-accent/30 hover:bg-brand-card/90 transition-all duration-300 flex flex-col justify-between group h-full"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
            >
              <div>
                {/* Icon Circle */}
                <div className="w-12 h-12 rounded-xl bg-brand-accent/5 border border-white/5 flex items-center justify-center mb-6 group-hover:bg-brand-accent/10 group-hover:border-brand-accent/20 transition-all">
                  <IconResolver name={service.iconName} className="w-5 h-5 text-brand-accent group-hover:scale-110 transition-transform" />
                </div>

                {/* Title */}
                <h3 className="font-display font-bold text-lg text-white mb-3 group-hover:text-brand-accent transition-colors">
                  {service.title}
                </h3>

                {/* Description */}
                <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed mb-6">
                  {service.description}
                </p>

                {/* Features List */}
                <ul className="flex flex-col gap-2.5 border-t border-white/5 pt-5 mb-4">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start gap-2.5">
                      <LucideIcons.CheckCircle2 className="w-4 h-4 text-brand-success shrink-0 mt-0.5" />
                      <span className="text-xs text-gray-300 font-sans">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Action trigger footer */}
              <div className="pt-4 flex items-center gap-1.5 text-xs font-mono font-medium text-brand-accent group-hover:text-white transition-colors cursor-pointer self-start"
                onClick={() => {
                  const el = document.getElementById('contact');
                  if (el) el.scrollIntoView({ behavior: 'smooth' });
                }}
              >
                <span>Request details</span>
                <LucideIcons.ChevronRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
