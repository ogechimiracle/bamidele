import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Briefcase, GraduationCap, Award, Calendar, MapPin, CheckCircle2, Star } from 'lucide-react';
import { timelineData, certificationsData } from '../data';
import { TimelineItem } from '../types';

export default function Timeline() {
  const [activeTab, setActiveTab] = useState<'career' | 'academic' | 'certifications'>('career');

  const careerItems = timelineData.filter((item) => item.type === 'experience');
  const academicItems = timelineData.filter((item) => item.type === 'education');

  return (
    <section id="timeline" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops)) from-indigo-950/10 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-accent mb-2 block">
            PROFESSIONAL BACKGROUND
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-white mb-4">
            Experience, Education & Certifications
          </h2>
          <p className="text-sm text-gray-400 font-sans max-w-xl">
            A comprehensive record of my full-time analytical deployments, master's level research credentials, and professional software certifications.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-accent to-brand-accent-secondary mt-6" />
        </div>

        {/* Tab Buttons */}
        <div className="flex gap-4 mb-12 border-b border-white/5 pb-1 max-w-md">
          {[
            { id: 'career', label: 'Career History', icon: Briefcase },
            { id: 'academic', label: 'Academic Studies', icon: GraduationCap },
            { id: 'certifications', label: 'Certifications', icon: Award }
          ].map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`flex items-center gap-2 pb-4 px-2 text-xs sm:text-sm font-semibold tracking-wide border-b-2 transition-all relative cursor-pointer ${
                  isActive 
                    ? 'border-brand-accent text-white font-bold' 
                    : 'border-transparent text-gray-400 hover:text-white'
                }`}
              >
                <Icon className="w-4 h-4" />
                <span>{tab.label}</span>
                {isActive && (
                  <motion.span 
                    layoutId="activeTimelineTab"
                    className="absolute bottom-[-2px] left-0 right-0 h-[2px] bg-brand-accent"
                  />
                )}
              </button>
            );
          })}
        </div>

        {/* Dynamic Display */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeTab}
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -15 }}
            transition={{ duration: 0.3 }}
            className="w-full"
          >
            {/* Career Timeline */}
            {activeTab === 'career' && (
              <div className="relative pl-6 sm:pl-8 border-l border-white/5 max-w-4xl mx-auto text-left">
                {careerItems.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    className="mb-12 relative group"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    {/* Timeline Node Point */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-brand-bg border-[3px] border-brand-accent group-hover:bg-brand-accent group-hover:scale-110 transition-all z-10" />

                    {/* Meta info row */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-gray-500 mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    {/* Role & Company Header */}
                    <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-brand-accent transition-colors">
                      {item.role}
                    </h3>
                    <h4 className="text-sm font-semibold text-brand-accent-secondary mb-4">
                      {item.company}
                    </h4>

                    {/* Achievements List */}
                    <ul className="flex flex-col gap-3">
                      {item.achievements.map((achievement, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-brand-success shrink-0 mt-0.5" />
                          <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed">{achievement}</p>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Academic Timeline */}
            {activeTab === 'academic' && (
              <div className="relative pl-6 sm:pl-8 border-l border-white/5 max-w-4xl mx-auto text-left">
                {academicItems.map((item, idx) => (
                  <motion.div
                    key={item.id}
                    className="mb-12 relative group"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.1 }}
                  >
                    {/* Timeline Node Point */}
                    <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-4 h-4 rounded-full bg-brand-bg border-[3px] border-brand-accent group-hover:bg-brand-accent group-hover:scale-110 transition-all z-10" />

                    {/* Meta info row */}
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-1 text-xs font-mono text-gray-500 mb-2">
                      <div className="flex items-center gap-1">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{item.duration}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <MapPin className="w-3.5 h-3.5" />
                        <span>{item.location}</span>
                      </div>
                    </div>

                    {/* Degree & School Header */}
                    <h3 className="text-lg sm:text-xl font-display font-bold text-white group-hover:text-brand-accent transition-colors">
                      {item.role}
                    </h3>
                    <h4 className="text-sm font-semibold text-brand-accent-secondary mb-4">
                      {item.company}
                    </h4>

                    {/* Achievements List */}
                    <ul className="flex flex-col gap-3">
                      {item.achievements.map((achievement, aIdx) => (
                        <li key={aIdx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-brand-success shrink-0 mt-0.5" />
                          <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed">{achievement}</p>
                        </li>
                      ))}
                    </ul>
                  </motion.div>
                ))}
              </div>
            )}

            {/* Certifications Card Grid */}
            {activeTab === 'certifications' && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto text-left">
                {certificationsData.map((cert, idx) => (
                  <motion.div
                    key={cert.id}
                    className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-brand-accent/20 transition-all duration-300 flex flex-col justify-between group"
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: idx * 0.05 }}
                    whileHover={{ y: -4 }}
                  >
                    <div>
                      {/* Badge Header */}
                      <div className="flex justify-between items-start mb-4">
                        <div className="p-2 bg-brand-accent/10 rounded-xl border border-brand-accent/20 text-brand-accent group-hover:scale-110 transition-transform">
                          <Award className="w-5 h-5" />
                        </div>
                        <span className="text-[10px] font-mono text-gray-500 font-bold bg-white/[0.02] border border-white/5 px-2.5 py-0.5 rounded-full">
                          {cert.date}
                        </span>
                      </div>

                      {/* Title & Issuer */}
                      <h3 className="font-display font-bold text-sm sm:text-base text-white group-hover:text-brand-accent transition-colors mb-1.5 leading-tight">
                        {cert.title}
                      </h3>
                      <h4 className="text-xs font-semibold text-brand-accent-secondary mb-4">
                        {cert.issuer}
                      </h4>
                    </div>

                    {/* Highlighted Skills */}
                    <div className="border-t border-white/5 pt-4">
                      <span className="text-[9px] font-mono text-gray-500 uppercase tracking-widest leading-none block mb-2">VERIFIED_SKILLS:</span>
                      <p className="text-[10px] font-sans text-gray-400 leading-relaxed font-medium">
                        {cert.skills}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            )}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
}
