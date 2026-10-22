import { useState, useMemo } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Search, Github, ExternalLink, BarChart3, TrendingUp, DollarSign, Target, UserCheck, Eye, Sparkles } from 'lucide-react';
import { projectsData } from '../data';
import { Project } from '../types';

// Component to render high-contrast illustrative SVG data graphics for each project type
const ProjectVisualizer = ({ id }: { id: string }) => {
  switch (id) {
    case 'sales-dash':
      return (
        <div className="w-full h-full bg-[#0F172A] p-4 flex flex-col justify-between select-none">
          {/* Mock KPI Row */}
          <div className="grid grid-cols-3 gap-2">
            {[
              { val: '$1.6M', label: 'ARR ADDED', color: 'text-brand-success' },
              { val: '+14%', label: 'NET REVENUE', color: 'text-cyan-400' },
              { val: '-22%', label: 'OVERSTOCK', color: 'text-rose-400' }
            ].map((kpi, i) => (
              <div key={i} className="bg-white/[0.02] border border-white/5 rounded-lg p-2 flex flex-col justify-center">
                <span className={`text-xs sm:text-sm font-bold font-display ${kpi.color} leading-none`}>{kpi.val}</span>
                <span className="text-[7px] font-mono text-gray-500 mt-1 uppercase tracking-wider">{kpi.label}</span>
              </div>
            ))}
          </div>
          {/* Main Chart Area */}
          <div className="flex-1 min-h-[80px] mt-3 bg-white/[0.01] border border-white/5 rounded-lg p-2 flex flex-col justify-end gap-1.5 relative overflow-hidden">
            <div className="absolute top-2 left-2 flex items-center gap-1.5">
              <div className="w-1.5 h-1.5 rounded-full bg-brand-accent animate-ping" />
              <span className="text-[8px] font-mono text-gray-400">SALES_VELOCITY_MATRIX</span>
            </div>
            {/* SVG Area */}
            <svg viewBox="0 0 100 40" className="w-full h-16 stroke-brand-accent stroke-[1.5] fill-none overflow-visible">
              <motion.path 
                d="M 0,35 Q 15,10 30,25 T 60,10 T 90,5 T 100,2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: 'easeOut' }}
              />
              <motion.path 
                d="M 0,35 Q 15,10 30,25 T 60,10 T 90,5 T 100,2 L 100,40 L 0,40 Z"
                fill="url(#salesGrad)"
                stroke="none"
              />
              <defs>
                <linearGradient id="salesGrad" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#3B82F6" stopOpacity="0.15" />
                  <stop offset="100%" stopColor="#3B82F6" stopOpacity="0" />
                </linearGradient>
              </defs>
            </svg>
          </div>
        </div>
      );
    case 'churn-predict':
      return (
        <div className="w-full h-full bg-[#0B132B] p-4 flex flex-col justify-between select-none">
          {/* Correlation Matrix style mockup */}
          <div className="flex-1 flex flex-col">
            <div className="flex items-center justify-between border-b border-white/5 pb-2 mb-2">
              <span className="text-[8px] font-mono text-gray-400">CHURN_CORRELATION_WEIGHTS</span>
              <span className="text-[8px] font-mono text-rose-400">SIG_T_TEST</span>
            </div>
            {/* Visual Heatmap bars */}
            <div className="flex flex-col gap-2 justify-center flex-1">
              {[
                { feature: 'Feature Login Drops', weight: 88, color: 'bg-rose-500' },
                { feature: 'Unresolved Tickets', weight: 65, color: 'bg-amber-500' },
                { feature: 'API Access Spikes', weight: -42, color: 'bg-emerald-500' },
                { feature: 'Contract Length', weight: -78, color: 'bg-cyan-500' }
              ].map((row, i) => (
                <div key={i} className="flex items-center justify-between text-[8px] font-mono">
                  <span className="text-gray-400 w-1/3 truncate">{row.feature}</span>
                  <div className="flex-1 mx-2 h-1.5 bg-white/[0.04] rounded overflow-hidden">
                    <motion.div 
                      className={`h-full ${row.color}`}
                      initial={{ width: 0 }}
                      whileInView={{ width: `${Math.abs(row.weight)}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, delay: i * 0.1 }}
                    />
                  </div>
                  <span className={row.weight > 0 ? 'text-rose-400' : 'text-emerald-400'}>
                    {row.weight > 0 ? '+' : ''}{row.weight}%
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      );
    case 'fin-analytics':
      return (
        <div className="w-full h-full bg-[#111827] p-4 flex flex-col justify-between select-none">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[8px] font-mono text-gray-500">CASH_FLOW_FORECAST</span>
            <div className="flex gap-1.5">
              <span className="w-2 h-2 rounded bg-brand-accent" />
              <span className="w-2 h-2 rounded bg-indigo-500" />
            </div>
          </div>
          {/* Double trend line graph */}
          <div className="flex-1 flex items-end justify-center h-20 min-h-[90px] relative overflow-hidden">
            <svg viewBox="0 0 100 40" className="w-full h-20 stroke-[1.5] fill-none overflow-visible">
              {/* Projected Line */}
              <motion.path 
                d="M 0,30 Q 20,20 40,25 T 80,15 T 100,8"
                stroke="#06B6D4"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5 }}
              />
              {/* Actual Line */}
              <motion.path 
                d="M 0,32 Q 20,18 40,26 T 80,14 T 100,5"
                stroke="#10B981"
                strokeDasharray="2,2"
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, delay: 0.2 }}
              />
            </svg>
            <div className="absolute bottom-1 right-2 bg-white/[0.02] border border-white/5 rounded px-1.5 py-0.5 text-[8px] font-mono text-gray-400">
              Error Variance: 2.5%
            </div>
          </div>
        </div>
      );
    case 'retail-kpi':
      return (
        <div className="w-full h-full bg-[#050B14] p-4 flex flex-col justify-between select-none">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[8px] font-mono text-gray-400">REGIONAL_VELOCITY_INDEX</span>
            <span className="text-[8px] font-mono text-brand-success bg-brand-success/10 px-1 py-0.2 rounded">OPTIMAL</span>
          </div>
          {/* Bento-style dashboard blocks */}
          <div className="grid grid-cols-2 gap-2 flex-1 mt-1">
            <div className="bg-white/[0.02] border border-white/5 rounded-lg p-2 flex flex-col justify-between">
              <span className="text-[7px] font-mono text-gray-500 uppercase leading-none">GMROI</span>
              <span className="text-sm font-bold font-display text-white mt-1">+18.5%</span>
            </div>
            <div className="bg-white/[0.02] border border-white/5 rounded-lg p-2 flex flex-col justify-between">
              <span className="text-[7px] font-mono text-gray-500 uppercase leading-none">STOCK_OUTS</span>
              <span className="text-sm font-bold font-display text-rose-400 mt-1">-34%</span>
            </div>
          </div>
        </div>
      );
    case 'hr-analytics':
      return (
        <div className="w-full h-full bg-[#180F2A] p-4 flex flex-col justify-between select-none">
          <div className="flex justify-between items-center mb-2 border-b border-white/5 pb-2">
            <span className="text-[8px] font-mono text-purple-300">RETENTION_COHORT_PROFILES</span>
            <span className="text-[8px] font-mono text-gray-400">N=4,200</span>
          </div>
          {/* Interactive structured scatter node plot */}
          <div className="flex-1 flex items-center justify-center relative overflow-hidden h-20">
            <div className="absolute inset-0 bg-radial-gradient(circle,_var(--tw-gradient-stops)) from-purple-500/5 via-transparent to-transparent" />
            <svg viewBox="0 0 100 40" className="w-full h-16 fill-purple-400 overflow-visible">
              <motion.circle cx="10" cy="30" r="2.5" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} />
              <motion.circle cx="30" cy="28" r="3" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.1 }} />
              <motion.circle cx="50" cy="18" r="4.5" fill="#3B82F6" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.2 }} />
              <motion.circle cx="70" cy="10" r="3.5" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.3 }} />
              <motion.circle cx="90" cy="5" r="5" fill="#10B981" initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }} transition={{ delay: 0.4 }} />
              {/* Trendline */}
              <motion.line x1="10" y1="30" x2="90" y2="5" stroke="#A78BFA" strokeWidth="1" strokeDasharray="2,2" initial={{ pathLength: 0 }} whileInView={{ pathLength: 1 }} viewport={{ once: true }} />
            </svg>
          </div>
        </div>
      );
    case 'marketing-perf':
      return (
        <div className="w-full h-full bg-[#051412] p-4 flex flex-col justify-between select-none">
          <div className="flex justify-between items-center mb-2">
            <span className="text-[8px] font-mono text-teal-400">MARKOV_CHAIN_ATTRIBUTION</span>
            <span className="text-[8px] font-mono text-gray-500">CAC: -21%</span>
          </div>
          {/* Horizontal multi-stage conversion funnel lines */}
          <div className="flex-1 flex flex-col gap-2 justify-center">
            {[
              { label: 'TikTok (Awareness)', val: 92, bg: 'bg-teal-500' },
              { label: 'Google Search (Intent)', val: 65, bg: 'bg-teal-600' },
              { label: 'Retargeting Ad (Convert)', val: 34, bg: 'bg-emerald-500' }
            ].map((stage, idx) => (
              <div key={idx} className="flex flex-col gap-1">
                <div className="flex justify-between text-[7px] font-mono text-gray-400">
                  <span>{stage.label}</span>
                  <span>{stage.val}% share</span>
                </div>
                <div className="w-full h-1 bg-white/[0.04] rounded overflow-hidden">
                  <motion.div 
                    className={`h-full ${stage.bg}`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${stage.val}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2, delay: idx * 0.1 }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      );
    default:
      return <div className="w-full h-full bg-brand-card flex items-center justify-center text-xs text-gray-500">Dashboard Visualizer</div>;
  }
};

export default function Projects() {
  const [filterCategory, setFilterCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  // Extract unique categories dynamically
  const availableCategories = useMemo(() => {
    const list = new Set(projectsData.map((p) => p.category));
    return ['All', ...Array.from(list)];
  }, []);

  // Filter & search implementation
  const filteredProjects = useMemo(() => {
    return projectsData.filter((project) => {
      const matchesCategory = filterCategory === 'All' || project.category === filterCategory;
      const matchesSearch = 
        project.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.problem.toLowerCase().includes(searchQuery.toLowerCase()) ||
        project.tools.some((t) => t.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [filterCategory, searchQuery]);

  return (
    <section id="projects" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
          <div className="max-w-xl text-left">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-accent mb-2 block">
              PORTFOLIO HIGHLIGHTS
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-white mb-4">
              Featured Case Projects
            </h2>
            <p className="text-sm text-gray-400 font-sans leading-relaxed">
              Real world solutions designed to unify operational streams, build predictive warnings, and drive measurable enterprise growth.
            </p>
            <div className="w-12 h-1 bg-gradient-to-r from-brand-accent to-brand-accent-secondary mt-6" />
          </div>

          {/* Real-time Search Box */}
          <div className="relative w-full max-w-xs shrink-0">
            <input
              type="text"
              placeholder="Search by tool or keyword..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-white/5 border border-white/5 rounded-xl py-3 pl-11 pr-4 text-xs font-medium text-white placeholder-gray-500 focus:outline-none focus:border-brand-accent focus:bg-white/[0.08] transition-all"
            />
            <Search className="w-4 h-4 text-gray-500 absolute left-4 top-1/2 -translate-y-1/2" />
          </div>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap gap-2 mb-12">
          {availableCategories.map((category) => (
            <button
              key={category}
              onClick={() => setFilterCategory(category)}
              className={`px-4 py-2 rounded-xl text-xs font-medium tracking-wide transition-all duration-300 border cursor-pointer active:scale-95 ${
                filterCategory === category 
                  ? 'bg-brand-accent/15 border-brand-accent/30 text-brand-accent' 
                  : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid Container */}
        <motion.div 
          layout
          className="grid grid-cols-1 lg:grid-cols-2 gap-8"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 30 }}
                transition={{ duration: 0.5 }}
                className="glass-panel rounded-2xl border border-white/5 overflow-hidden flex flex-col group hover:border-brand-accent/20 hover:bg-brand-card/90 transition-all duration-300 shadow-2xl h-full"
              >
                {/* Visual Header Grid Mockup */}
                <div className="relative aspect-video w-full border-b border-white/5 overflow-hidden group-hover:scale-[1.02] transition-transform duration-500">
                  <ProjectVisualizer id={project.id} />
                  
                  {/* Category overlay Tag */}
                  <div className="absolute top-4 right-4 px-2.5 py-1 rounded bg-black/60 border border-white/10 text-[9px] font-mono tracking-wider uppercase text-gray-300">
                    {project.category}
                  </div>
                </div>

                {/* Card Content details */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <h3 className="font-display font-bold text-lg sm:text-xl text-white group-hover:text-brand-accent transition-colors mb-4 flex items-center gap-2">
                      <span>{project.title}</span>
                    </h3>

                    {/* Problem / Solution layout */}
                    <div className="flex flex-col gap-4 text-xs font-sans text-gray-400 mb-6 leading-relaxed">
                      <div>
                        <strong className="text-rose-400/90 font-mono text-[10px] uppercase tracking-wider block mb-1">THE PROBLEM:</strong>
                        <p>{project.problem}</p>
                      </div>
                      <div>
                        <strong className="text-brand-accent-secondary font-mono text-[10px] uppercase tracking-wider block mb-1">THE SOLUTION:</strong>
                        <p>{project.solution}</p>
                      </div>
                    </div>
                  </div>

                  {/* Tech stack, impact metrics and Action buttons */}
                  <div>
                    {/* Business Impact Box */}
                    <div className="bg-brand-success/5 border border-brand-success/20 rounded-xl p-4 mb-5 flex items-start gap-3">
                      <Sparkles className="w-5 h-5 text-brand-success shrink-0 mt-0.5" />
                      <div>
                        <span className="text-[9px] font-mono font-bold text-brand-success uppercase tracking-widest leading-none block mb-1">MEASURABLE IMPACT:</span>
                        <p className="text-xs text-gray-200 font-sans font-medium leading-relaxed">{project.impact}</p>
                      </div>
                    </div>

                    {/* Tech list */}
                    <div className="flex flex-wrap gap-1.5 mb-6">
                      {project.tools.map((tool) => (
                        <span 
                          key={tool}
                          className="px-2.5 py-1 rounded bg-white/[0.02] border border-white/5 text-[10px] font-mono text-gray-400 hover:text-white hover:border-brand-accent/20 transition-all cursor-default"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>

                    {/* Form Action CTAs */}
                    <div className="flex items-center gap-4 pt-4 border-t border-white/5 text-xs font-semibold">
                      <button 
                        onClick={() => alert(`Launching live dashboard mockup for: ${project.title}`)}
                        className="px-4 py-2.5 rounded-lg bg-brand-accent hover:bg-blue-600 text-white transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
                      >
                        <ExternalLink className="w-4 h-4" />
                        <span>Interactive Dashboard</span>
                      </button>
                      <button 
                        onClick={() => alert(`Accessing Github query codes for: ${project.title}`)}
                        className="px-4 py-2.5 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 text-gray-300 hover:text-white transition-all flex items-center gap-2 active:scale-95 cursor-pointer"
                      >
                        <Github className="w-4 h-4" />
                        <span>SQL & Python Code</span>
                      </button>
                    </div>
                  </div>

                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Empty Search state */}
        {filteredProjects.length === 0 && (
          <div className="text-center py-20 bg-white/[0.01] border border-dashed border-white/5 rounded-2xl">
            <p className="text-sm text-gray-500 font-sans">No projects match your exact query tools.</p>
            <button 
              onClick={() => { setFilterCategory('All'); setSearchQuery(''); }}
              className="mt-4 text-xs font-mono text-brand-accent hover:underline cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        )}

      </div>
    </section>
  );
}
