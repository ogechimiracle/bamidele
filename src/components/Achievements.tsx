import { motion } from 'motion/react';
import { Database, ShieldCheck, Landmark, Compass, Award, Percent } from 'lucide-react';

const trustCompanies = [
  { name: 'Google Cloud Partner', logo: 'Google Cloud' },
  { name: 'Microsoft Enterprise', logo: 'Microsoft' },
  { name: 'Amazon Web Services', logo: 'AWS' },
  { name: 'Apex Logistics', logo: 'Apex Corp' },
  { name: 'Fintech Spark Group', logo: 'Spark Fin' },
  { name: 'Stellar Tech Corp', logo: 'Stellar Co' }
];

const mainAchievements = [
  {
    icon: Database,
    value: '100M+',
    title: 'Rows of Data Analyzed',
    desc: 'Processing complex, high-throughput BigQuery and PostgreSQL clusters.',
    color: 'text-blue-500',
    bg: 'bg-blue-500/10'
  },
  {
    icon: ShieldCheck,
    value: '10+',
    title: 'Custom Dashboards Built',
    desc: 'Robust, enterprise-level dashboards used weekly by executive C-suites.',
    color: 'text-cyan-400',
    bg: 'bg-cyan-500/10'
  },
  {
    icon: Percent,
    value: '95%',
    title: 'Client Satisfaction Score',
    desc: 'Consistently rated 5 stars for clarity, timeline, and actionable impact.',
    color: 'text-brand-success',
    bg: 'bg-emerald-500/10'
  },
  {
    icon: Award,
    value: '5+',
    title: 'Core Professional Certs',
    desc: 'Issued by industry leaders: Microsoft, Google, and IBM.',
    color: 'text-purple-400',
    bg: 'bg-purple-500/10'
  }
];

export default function Achievements() {
  return (
    <section className="py-20 border-t border-b border-white/5 bg-brand-bg relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-blue-900/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Trusted By Section (Banner style) */}
        <div className="mb-20 text-center">
          <motion.p 
            className="text-xs font-mono uppercase tracking-widest text-gray-500 mb-6"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
          >
            TRUSTED BY LEADERS AT
          </motion.p>
          
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 items-center justify-items-center opacity-60">
            {trustCompanies.map((company, index) => (
              <motion.div
                key={index}
                className="flex items-center gap-2 group cursor-pointer"
                whileHover={{ scale: 1.05, opacity: 1 }}
                transition={{ duration: 0.2 }}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 0.6, y: 0 }}
                viewport={{ once: true }}
                transition-delay={`${index * 100}ms`}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-brand-accent/40 group-hover:bg-brand-accent transition-colors" />
                <span className="font-display font-medium text-xs tracking-wider text-gray-300">
                  {company.name}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Core Achievement Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {mainAchievements.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-brand-accent/25 transition-all duration-300 flex flex-col group"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                whileHover={{ y: -5 }}
              >
                <div className={`w-12 h-12 rounded-xl ${item.bg} flex items-center justify-center mb-6 border border-white/5 group-hover:scale-110 transition-transform duration-300`}>
                  <Icon className={`w-5 h-5 ${item.color}`} />
                </div>

                <div className="flex items-baseline gap-1.5 mb-2">
                  <span className="text-3xl font-display font-bold text-white group-hover:text-brand-accent transition-colors">
                    {item.value}
                  </span>
                </div>

                <h3 className="font-display font-bold text-sm tracking-tight text-gray-100 mb-2">
                  {item.title}
                </h3>

                <p className="text-xs text-gray-400 font-sans leading-relaxed">
                  {item.desc}
                </p>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
