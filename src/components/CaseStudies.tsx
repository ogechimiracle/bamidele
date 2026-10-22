import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, AlertTriangle, Database, HelpCircle, Code, ShieldAlert, CheckCircle, TrendingUp, TrendingDown, ArrowUpRight } from 'lucide-react';
import { caseStudiesData } from '../data';
import { CaseStudy } from '../types';

export default function CaseStudies() {
  const [activeId, setActiveId] = useState('retail-diagnostic');
  const activeStudy = caseStudiesData.find((study) => study.id === activeId) || caseStudiesData[0];

  const [hoveredPoint, setHoveredPoint] = useState<number | null>(null);

  // Custom helper to calculate SVG coordinates for the charts (before vs after)
  const chartHeight = 160;
  const chartWidth = 500;
  const padding = 30;

  const getCoordinates = (index: number, value: number, isPercentage: boolean) => {
    const x = padding + (index * (chartWidth - padding * 2)) / (activeStudy.chartData.length - 1);
    // Find absolute max to scale height proportionally
    const values = activeStudy.chartData.flatMap(d => [d.before, d.after]);
    const maxVal = Math.max(...values) * 1.1;
    const y = chartHeight - padding - (value * (chartHeight - padding * 2)) / maxVal;
    return { x, y };
  };

  const getPathString = (dataKey: 'before' | 'after') => {
    return activeStudy.chartData.map((d, index) => {
      const { x, y } = getCoordinates(index, d[dataKey], activeId === 'saas-retention');
      return `${index === 0 ? 'M' : 'L'} ${x} ${y}`;
    }).join(' ');
  };

  return (
    <section id="case-studies" className="py-24 bg-white/[0.01] border-t border-b border-white/5 relative">
      <div className="absolute inset-0 bg-radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops)) from-brand-accent/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-accent mb-2 block">
            ANALYTICAL DEPTH
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-white mb-4">
            Interactive Analytical Case Studies
          </h2>
          <p className="text-sm text-gray-400 font-sans max-w-xl">
            Go beyond simple dashboard metrics. Explore end-to-end data narratives detailing source processing, SQL/Python auditing pipelines, and executive outcomes.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-accent to-brand-accent-secondary mt-6" />
        </div>

        {/* Case Study Switch Selector */}
        <div className="flex gap-4 mb-12 border-b border-white/5 pb-1">
          {caseStudiesData.map((study) => (
            <button
              key={study.id}
              onClick={() => {
                setActiveId(study.id);
                setHoveredPoint(null);
              }}
              className={`pb-4 px-2 text-sm font-semibold tracking-wide border-b-2 transition-all relative cursor-pointer ${
                activeId === study.id 
                  ? 'border-brand-accent text-white font-bold' 
                  : 'border-transparent text-gray-400 hover:text-white'
              }`}
            >
              {study.title}
              {activeId === study.id && (
                <motion.span 
                  layoutId="activeCaseStudyTab"
                  className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-brand-accent"
                />
              )}
            </button>
          ))}
        </div>

        {/* Dynamic Storyboard Layout */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeStudy.id}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.4 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start"
          >
            {/* Left Column: Narrative Storytelling (8 Columns) */}
            <div className="lg:col-span-7 flex flex-col gap-8">
              
              {/* Context Block */}
              <div>
                <h3 className="font-display font-bold text-xl text-white mb-3">
                  {activeStudy.subtitle}
                </h3>
                
                <div className="bg-white/[0.02] border border-white/5 rounded-xl p-5 mb-6">
                  <div className="flex items-start gap-3">
                    <AlertTriangle className="w-5 h-5 text-rose-400 shrink-0 mt-0.5" />
                    <div>
                      <strong className="text-xs font-mono text-gray-400 uppercase tracking-wider block mb-1">THE BUSINESS CHALLENGE:</strong>
                      <p className="text-xs sm:text-sm text-gray-300 leading-relaxed font-sans">{activeStudy.businessProblem}</p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-3 bg-white/[0.01] border border-white/5 rounded-xl p-4">
                  <Database className="w-4 h-4 text-cyan-400 shrink-0" />
                  <span className="text-xs text-gray-400 font-sans">
                    <strong className="text-white font-medium">Data Streams:</strong> {activeStudy.dataSource}
                  </span>
                </div>
              </div>

              {/* Cleansing, Methodology, Analysis Grid */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                
                {/* Cleanse Column */}
                <div className="bg-white/[0.02] border border-white/5 rounded-xl p-5 hover:border-brand-accent/25 transition-colors">
                  <h4 className="font-display font-bold text-xs text-brand-accent uppercase tracking-wider mb-4 flex items-center gap-2">
                    <Code className="w-4 h-4" />
                    <span>01. ETL & CLEANSE</span>
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {activeStudy.cleaningProcess.map((item, i) => (
                      <li key={i} className="text-xs text-gray-400 leading-relaxed flex items-start gap-1.5 font-sans">
                        <span className="text-brand-accent mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Methodology Column */}
                <div className="bg-white/[0.02] border border-white/5 rounded-xl p-5 hover:border-brand-accent/25 transition-colors">
                  <h4 className="font-display font-bold text-xs text-brand-accent-secondary uppercase tracking-wider mb-4 flex items-center gap-2">
                    <BookOpen className="w-4 h-4" />
                    <span>02. METHODOLOGY</span>
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {activeStudy.methodology.map((item, i) => (
                      <li key={i} className="text-xs text-gray-400 leading-relaxed flex items-start gap-1.5 font-sans">
                        <span className="text-brand-accent-secondary mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Analysis Column */}
                <div className="bg-white/[0.02] border border-white/5 rounded-xl p-5 hover:border-brand-accent/25 transition-colors">
                  <h4 className="font-display font-bold text-xs text-purple-400 uppercase tracking-wider mb-4 flex items-center gap-2">
                    <TrendingUp className="w-4 h-4" />
                    <span>03. DISCOVERY</span>
                  </h4>
                  <ul className="flex flex-col gap-2">
                    {activeStudy.analysisDetails.map((item, i) => (
                      <li key={i} className="text-xs text-gray-400 leading-relaxed flex items-start gap-1.5 font-sans">
                        <span className="text-purple-400 mt-1">•</span>
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

              </div>

              {/* Insights & Outcomes */}
              <div className="bg-white/[0.01] border border-white/5 rounded-xl p-5">
                <h4 className="font-display font-bold text-xs text-brand-success uppercase tracking-wider mb-4 flex items-center gap-2">
                  <CheckCircle className="w-4 h-4" />
                  <span>04. CRITICAL DISCOVERIES</span>
                </h4>
                <ul className="flex flex-col gap-3">
                  {activeStudy.insights.map((insight, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-brand-success/10 flex items-center justify-center text-[10px] font-mono text-brand-success shrink-0 mt-0.5">
                        {i + 1}
                      </div>
                      <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed">{insight}</p>
                    </li>
                  ))}
                </ul>
              </div>

            </div>

            {/* Right Column: Interactive Charts Preview & Business Impact (5 Columns) */}
            <div className="lg:col-span-5 flex flex-col gap-8">
              
              {/* Business Impact Counter */}
              <div className="bg-gradient-to-br from-brand-card to-brand-bg border border-brand-accent/20 rounded-2xl p-6 sm:p-8 relative overflow-hidden">
                <div className="absolute top-0 right-0 w-24 h-24 bg-brand-accent/10 rounded-full blur-2xl pointer-events-none" />
                
                <span className="text-[10px] font-mono uppercase tracking-widest text-brand-accent-secondary leading-none block mb-2">
                  C-SUITE RESULT DELIVERED
                </span>

                <div className="flex items-baseline gap-3 mb-4">
                  <span className="text-4xl sm:text-5xl font-display font-bold text-white tracking-tight leading-none">
                    {activeStudy.metricValue}
                  </span>
                  <span className="flex items-center gap-0.5 text-xs font-mono font-bold text-brand-success bg-brand-success/10 px-2 py-0.5 rounded-md">
                    {activeStudy.id === 'saas-retention' ? <TrendingDown className="w-3.5 h-3.5" /> : <TrendingUp className="w-3.5 h-3.5" />}
                    <span>{activeStudy.metricImprovement}</span>
                  </span>
                </div>

                <p className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed mb-6">
                  {activeStudy.businessImpact}
                </p>

                <div className="h-[1px] bg-white/5 my-4" />
                <span className="text-[10px] font-mono text-gray-500 uppercase tracking-wider">
                  METRIC MEASURED: {activeStudy.metricLabel}
                </span>
              </div>

              {/* Interactive SVG Chart Preview */}
              <div className="glass-panel p-6 rounded-2xl border border-white/5 flex flex-col">
                <div className="flex justify-between items-center mb-6">
                  <div className="text-left">
                    <h4 className="font-display font-bold text-sm text-white">KPI Diagnostics over Time</h4>
                    <span className="text-[10px] font-mono text-gray-500 uppercase">Interactive data trend preview</span>
                  </div>
                  {/* Legend */}
                  <div className="flex items-center gap-3 text-[10px] font-mono">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded bg-rose-500" />
                      <span className="text-gray-400">Before</span>
                    </div>
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 rounded bg-brand-success" />
                      <span className="text-gray-400">After</span>
                    </div>
                  </div>
                </div>

                {/* SVG Line Chart Canvas */}
                <div className="relative w-full aspect-[2.5/1]">
                  <svg 
                    viewBox={`0 0 ${chartWidth} ${chartHeight}`} 
                    className="w-full h-full overflow-visible"
                  >
                    {/* Grid Lines */}
                    {[0, 1, 2, 3].map((g, i) => {
                      const y = padding + (i * (chartHeight - padding * 2)) / 3;
                      return (
                        <line 
                          key={i} 
                          x1={padding} 
                          y1={y} 
                          x2={chartWidth - padding} 
                          y2={y} 
                          stroke="rgba(255,255,255,0.03)" 
                          strokeWidth="1" 
                        />
                      );
                    })}

                    {/* BEFORE Trend Line */}
                    <path 
                      d={getPathString('before')} 
                      fill="none" 
                      stroke="#EF4444" 
                      strokeWidth="2.5" 
                      strokeDasharray="4,4" 
                    />

                    {/* AFTER Trend Line */}
                    <motion.path 
                      d={getPathString('after')} 
                      fill="none" 
                      stroke="#10B981" 
                      strokeWidth="3"
                      initial={{ pathLength: 0 }}
                      whileInView={{ pathLength: 1 }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.5 }}
                    />

                    {/* Data Points Nodes */}
                    {activeStudy.chartData.map((d, index) => {
                      const ptBefore = getCoordinates(index, d.before, activeId === 'saas-retention');
                      const ptAfter = getCoordinates(index, d.after, activeId === 'saas-retention');
                      const isHovered = hoveredPoint === index;
                      
                      return (
                        <g key={index} className="cursor-pointer">
                          {/* Invisible Trigger Column */}
                          <rect
                            x={ptBefore.x - 15}
                            y={0}
                            width="30"
                            height={chartHeight}
                            fill="transparent"
                            onMouseEnter={() => setHoveredPoint(index)}
                            onMouseLeave={() => setHoveredPoint(null)}
                          />

                          {/* Before Node circle */}
                          <circle 
                            cx={ptBefore.x} 
                            cy={ptBefore.y} 
                            r={isHovered ? 5 : 3.5} 
                            fill="#EF4444" 
                          />

                          {/* After Node circle */}
                          <circle 
                            cx={ptAfter.x} 
                            cy={ptAfter.y} 
                            r={isHovered ? 6 : 4} 
                            fill="#10B981" 
                          />
                        </g>
                      );
                    })}
                  </svg>
                </div>

                {/* Bottom X-Axis Labels */}
                <div className="flex justify-between items-center text-[9px] font-mono text-gray-500 mt-3 px-3 border-t border-white/5 pt-3">
                  {activeStudy.chartData.map((d, idx) => (
                    <span key={idx} className={hoveredPoint === idx ? 'text-white' : ''}>{d.label}</span>
                  ))}
                </div>

                {/* Interactive Tooltip values */}
                <div className="mt-4 min-h-[40px] bg-white/[0.01] border border-white/5 rounded-xl p-3 flex justify-between items-center transition-all">
                  {hoveredPoint !== null ? (
                    <>
                      <div className="text-[10px] font-mono text-gray-400">
                        STAGE: <span className="text-white font-bold">{activeStudy.chartData[hoveredPoint].label}</span>
                      </div>
                      <div className="flex gap-4">
                        <div className="text-[10px] font-mono text-rose-400">
                          BEFORE: <span className="font-bold">{activeStudy.chartData[hoveredPoint].before}</span>
                        </div>
                        <div className="text-[10px] font-mono text-brand-success">
                          AFTER: <span className="font-bold">{activeStudy.chartData[hoveredPoint].after}</span>
                        </div>
                      </div>
                    </>
                  ) : (
                    <span className="text-[10px] font-mono text-gray-500 mx-auto">Hover over points on the trend plot to inspect numeric deltas</span>
                  )}
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
