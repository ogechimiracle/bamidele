import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Code, Layout, Database, FileSpreadsheet, Cloud, Library, HeartHandshake } from 'lucide-react';
import { skillsData } from '../data';
import { Skill } from '../types';

type Category = 'All' | 'Programming' | 'Visualization' | 'Databases' | 'Spreadsheet' | 'Cloud' | 'Libraries' | 'Soft Skills';

const categories: { label: string; value: Category; icon: any }[] = [
  { label: 'All Stack', value: 'All', icon: null },
  { label: 'Languages', value: 'Programming', icon: Code },
  { label: 'BI & viz', value: 'Visualization', icon: Layout },
  { label: 'Databases', value: 'Databases', icon: Database },
  { label: 'Spreadsheets', value: 'Spreadsheet', icon: FileSpreadsheet },
  { label: 'Cloud Infrastructure', value: 'Cloud', icon: Cloud },
  { label: 'Libraries', value: 'Libraries', icon: Library },
  { label: 'Soft Skills', value: 'Soft Skills', icon: HeartHandshake }
];

export default function Skills() {
  const [activeCategory, setActiveCategory] = useState<Category>('All');

  const filteredSkills = skillsData.filter(
    (skill) => activeCategory === 'All' || skill.category === activeCategory
  );

  // Helper to retrieve custom sub-tags for extra technical details
  const getSkillTag = (name: string): string => {
    switch (name) {
      case 'Python': return 'Scikit-Learn, Jupyter';
      case 'SQL (PostgreSQL, T-SQL)': return 'Window Functions, CTEs';
      case 'R': return 'ggplot2, tidyverse';
      case 'Power BI': return 'DAX, PowerQuery M';
      case 'Tableau': return 'LOD Expressions, Actions';
      case 'Looker Studio': return 'Blended Data, BigQuery';
      case 'PostgreSQL': return 'Relational Modeling';
      case 'MySQL': return 'Optimized Indexes';
      case 'SQL Server': return 'Stored Procedures';
      case 'Advanced Excel': return 'VBA, PowerPivot, Solver';
      case 'Google Sheets': return 'AppsScript, Query function';
      case 'Azure Data Factory': return 'Pipeline Triggers';
      case 'AWS (S3, Redshift)': return 'S3 Ingestions, COPY scripts';
      case 'Pandas & NumPy': return 'MultiIndex, Vectorization';
      case 'Matplotlib & Seaborn': return 'Statistical Visuals';
      case 'Plotly': return 'Interactive Charts';
      case 'Data Storytelling': return 'C-Suite Presentations';
      case 'Business Analysis': return 'Requirements mapping';
      case 'Stakeholder Communication': return 'Agile Syncs';
      case 'Problem Solving': return 'Analytical Root-cause';
      default: return 'Core Technology';
    }
  };

  return (
    <section id="skills" className="py-24 bg-white/[0.01] border-t border-b border-white/5 relative">
      <div className="absolute inset-0 bg-radial-gradient(ellipse_at_top,_var(--tw-gradient-stops)) from-blue-900/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-accent mb-2 block">
            ANALYTICAL TOOLBOX
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-white mb-4">
            Technical Stack & Core Methodologies
          </h2>
          <p className="text-sm text-gray-400 font-sans max-w-xl">
            A comprehensive mapping of my engineering, database, cloud, and statistical visualization tools. Filter by department using the tabs below.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-accent to-brand-accent-secondary mt-6" />
        </div>

        {/* Categories Tab Selector */}
        <div className="flex flex-wrap gap-2.5 mb-12">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeCategory === cat.value;
            return (
              <button
                key={cat.value}
                onClick={() => setActiveCategory(cat.value)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-medium tracking-wide transition-all duration-300 border cursor-pointer active:scale-95 ${
                  isActive 
                    ? 'bg-brand-accent border-brand-accent text-white shadow-lg shadow-brand-accent/20' 
                    : 'bg-white/5 border-white/5 text-gray-400 hover:text-white hover:bg-white/10'
                }`}
              >
                {Icon && <Icon className="w-3.5 h-3.5" />}
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Dynamic Skills Bento Grid */}
        <motion.div 
          layout 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          <AnimatePresence mode="popLayout">
            {filteredSkills.map((skill, index) => (
              <motion.div
                key={skill.name}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.3 }}
                className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-white/10 transition-colors flex flex-col justify-between group"
              >
                <div>
                  <div className="flex justify-between items-start mb-3">
                    <h3 className="font-display font-bold text-sm text-white group-hover:text-brand-accent transition-colors">
                      {skill.name}
                    </h3>
                    <span className="text-[10px] font-mono font-bold text-brand-accent-secondary bg-brand-accent/10 border border-brand-accent/20 px-2 py-0.5 rounded-full">
                      {skill.level}%
                    </span>
                  </div>

                  <p className="text-[10px] font-mono text-gray-500 mb-6 uppercase tracking-wider leading-none">
                    {getSkillTag(skill.name)}
                  </p>
                </div>

                {/* Animated Level Progress bar */}
                <div className="w-full">
                  <div className="h-1.5 w-full bg-white/[0.04] rounded-full overflow-hidden">
                    <motion.div 
                      className="h-full bg-gradient-to-r from-brand-accent to-brand-accent-secondary rounded-full"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.2, ease: 'easeOut', delay: index * 0.05 }}
                    />
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Stack Highlight footer */}
        <div className="mt-12 bg-white/[0.02] border border-white/5 rounded-2xl p-6 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="text-left">
            <h4 className="font-display font-bold text-sm text-white mb-1">Looking for a specific legacy or custom configuration?</h4>
            <p className="text-xs text-gray-400 font-sans">I am highly adaptive and regularly write custom plugins, query schedulers, and bespoke pipeline connectors.</p>
          </div>
          <button 
            onClick={() => {
              const el = document.getElementById('contact');
              if (el) el.scrollIntoView({ behavior: 'smooth' });
            }}
            className="px-5 py-2.5 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-white font-medium text-xs tracking-wide transition-all shrink-0 cursor-pointer"
          >
            Ask About Custom Tooling
          </button>
        </div>

      </div>
    </section>
  );
}
