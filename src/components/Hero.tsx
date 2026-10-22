import { ArrowRight, FileText, Mail, BarChart2, LineChart, Cpu, Sparkles } from 'lucide-react';
import { motion } from 'motion/react';

export default function Hero() {
  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleDownloadResume = () => {
    alert("Oluwabukunmi Ife Bamidele-Alade's Resume download triggered! (Placeholder - In production, this links to a hosted PDF)");
  };

  return (
    <section 
      id="hero" 
      className="relative min-h-screen pt-32 pb-20 flex flex-col justify-center items-center overflow-hidden px-6"
    >
      {/* Glow Rings Backdrop */}
      <div className="absolute inset-0 z-0 pointer-events-none flex items-center justify-center">
        <div className="w-[600px] h-[600px] rounded-full border border-white/[0.02] absolute animate-pulse-slow" />
        <div className="w-[900px] h-[900px] rounded-full border border-white/[0.01] absolute" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10 w-full">
        
        {/* Left Side: Brand Text & CTA */}
        <motion.div 
          className="lg:col-span-7 flex flex-col text-left"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Tag */}
          <div className="inline-flex items-center gap-2 self-start px-3 py-1.5 rounded-full bg-brand-accent/10 border border-brand-accent/20 text-brand-accent text-xs font-mono font-medium tracking-wide mb-6">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Senior Data Analyst & BI Expert</span>
          </div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight font-display text-white leading-[1.1] mb-6">
            Transforming Raw <span className="text-gradient-accent">Data</span> Into Business <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-blue-500">Growth</span>
          </h1>

          <p className="text-base sm:text-lg text-gray-400 leading-relaxed max-w-2xl mb-8 font-sans">
            Data Analyst with 4+ years of experience helping organizations uncover critical operational insights, automate tedious reporting workloads, and make smarter, highly profitable business decisions through state-of-the-art analytics and interactive visualizations.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button
              onClick={() => scrollToSection('projects')}
              className="px-6 py-3.5 rounded-xl bg-brand-accent hover:bg-blue-600 text-white font-medium text-sm tracking-wide transition-all shadow-lg shadow-brand-accent/25 flex items-center justify-center gap-2 group active:scale-95 cursor-pointer"
            >
              <span>View Projects</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            
            <button
              onClick={() => scrollToSection('contact')}
              className="px-6 py-3.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-sm tracking-wide transition-all flex items-center justify-center gap-2 active:scale-95 cursor-pointer"
            >
              <Mail className="w-4 h-4" />
              <span>Contact Me</span>
            </button>

            <button
              onClick={handleDownloadResume}
              className="px-6 py-3.5 rounded-xl bg-transparent hover:bg-white/5 border border-dashed border-white/20 text-gray-300 hover:text-white font-medium text-sm tracking-wide transition-all flex items-center justify-center gap-2 cursor-pointer"
            >
              <FileText className="w-4 h-4" />
              <span>Download Resume</span>
            </button>
          </div>

          {/* Core Stats Embedded in Hero */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-white/5">
            {[
              { value: '4+', label: 'Years Experience' },
              { value: '30+', label: 'Projects Done' },
              { value: '20+', label: 'Clients Served' },
              { value: '100M+', label: 'Rows Processed' }
            ].map((stat, idx) => (
              <div key={idx} className="flex flex-col">
                <span className="text-2xl sm:text-3xl font-bold font-display text-gradient-accent leading-none mb-1">
                  {stat.value}
                </span>
                <span className="text-[11px] uppercase tracking-wider text-gray-500 font-mono">
                  {stat.label}
                </span>
              </div>
            ))}
          </div>

        </motion.div>

        {/* Right Side: Ultra-premium Interactive 3D CSS Dashboard Graphic */}
        <motion.div 
          className="lg:col-span-5 flex justify-center items-center relative"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 0.2 }}
        >
          {/* Abstract background blur */}
          <div className="absolute w-72 h-72 rounded-full bg-brand-accent/15 blur-[60px] top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 -z-10" />
          
          <div className="relative w-full max-w-[400px] h-[400px] flex items-center justify-center">
            {/* Hologram Circle */}
            <div className="absolute inset-0 border border-white/[0.04] rounded-full animate-pulse-slow flex items-center justify-center">
              <div className="w-[85%] h-[85%] border border-dashed border-white/[0.03] rounded-full flex items-center justify-center">
                <div className="w-[75%] h-[75%] border border-white/[0.02] rounded-full" />
              </div>
            </div>

            {/* Float Core Isometric Mesh */}
            <div className="absolute w-[280px] h-[340px] glass-panel rounded-2xl p-6 border border-white/10 shadow-2xl rotate-3 hover:rotate-0 transition-transform duration-500 flex flex-col justify-between">
              {/* Card Header */}
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-brand-success" />
                  <span className="text-[10px] font-mono tracking-widest text-gray-400">ANALYTICS_CORE</span>
                </div>
                <Cpu className="w-4 h-4 text-brand-accent-secondary animate-pulse" />
              </div>

              {/* Central Graphic: Mock SVG line charts & bars */}
              <div className="my-4 flex-1 flex flex-col justify-center gap-4">
                {/* Simulated bar chart */}
                <div className="flex items-end justify-between h-20 px-2 gap-1.5">
                  {[40, 65, 50, 85, 70, 95, 60, 75].map((height, i) => (
                    <motion.div 
                      key={i}
                      className="w-full rounded-t-[2px]"
                      style={{ 
                        height: `${height}%`,
                        background: i % 2 === 0 
                          ? 'linear-gradient(to top, #3B82F6, #06B6D4)' 
                          : 'linear-gradient(to top, #06B6D4, #10B981)' 
                      }}
                      initial={{ height: 0 }}
                      animate={{ height: `${height}%` }}
                      transition={{ duration: 1.5, delay: i * 0.1, ease: 'easeOut' }}
                    />
                  ))}
                </div>

                {/* Floating Metrics */}
                <div className="flex justify-between items-center bg-white/[0.02] border border-white/5 rounded-xl p-3">
                  <div className="flex items-center gap-2">
                    <LineChart className="w-4 h-4 text-brand-accent" />
                    <div>
                      <div className="text-[9px] font-mono text-gray-500 uppercase leading-none">FORECAST_ACCURACY</div>
                      <div className="text-xs font-bold text-white mt-0.5 font-display">97.8%</div>
                    </div>
                  </div>
                  <span className="text-[10px] font-mono text-brand-success bg-brand-success/10 px-1.5 py-0.5 rounded">
                    +4.2%
                  </span>
                </div>
              </div>

              {/* Card Footer */}
              <div className="border-t border-white/5 pt-3 flex items-center justify-between">
                <span className="text-[9px] font-mono text-gray-500">QUERY_TIME: 0.04ms</span>
                <span className="text-[9px] font-mono text-brand-accent-secondary">SYSTEM: ACTIVE</span>
              </div>
            </div>

            {/* Orbiting Element 1: Line Chart Icon */}
            <motion.div 
              className="absolute -top-4 -right-2 glass-panel p-3 rounded-xl border border-white/10 shadow-lg flex items-center gap-2.5"
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
            >
              <div className="p-1.5 bg-brand-accent/10 rounded-lg">
                <BarChart2 className="w-4 h-4 text-brand-accent" />
              </div>
              <div>
                <div className="text-[8px] font-mono text-gray-500">ROI_MULTIPLIER</div>
                <div className="text-xs font-bold font-display">3.4x</div>
              </div>
            </motion.div>

            {/* Orbiting Element 2: Query counter */}
            <motion.div 
              className="absolute -bottom-6 -left-6 glass-panel p-3 rounded-xl border border-white/10 shadow-lg flex items-center gap-2.5"
              animate={{ y: [0, 8, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
            >
              <div className="p-1.5 bg-brand-success/10 rounded-lg">
                <LineChart className="w-4 h-4 text-brand-success" />
              </div>
              <div>
                <div className="text-[8px] font-mono text-gray-500">INSIGHTS_STORED</div>
                <div className="text-xs font-bold font-display text-brand-success">1,248</div>
              </div>
            </motion.div>
          </div>

        </motion.div>

      </div>
    </section>
  );
}
