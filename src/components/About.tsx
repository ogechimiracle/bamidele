import { motion } from 'motion/react';
import { Target, Shield, Compass, ChevronRight, CheckCircle2 } from 'lucide-react';

const coreExpertise = [
  'Data Analytics',
  'Business Intelligence',
  'Dashboard Development',
  'SQL Databases',
  'Python Scripting',
  'Excel Engineering',
  'Power BI Solutions',
  'Tableau dashboards',
  'Data Visualization',
  'ETL Pipeline Design',
  'Data Cleaning',
  'Statistical Analysis'
];

const methodologySteps = [
  {
    num: '01',
    title: 'KPI Definition & Business Discovery',
    desc: 'Deep alignment with product leads and C-suite executives to translate loose business questions into rigid mathematical targets.'
  },
  {
    num: '02',
    title: 'ETL Pipelines & Ingestion',
    desc: 'Connecting to production databases, clearing duplications, and standardizing structural schemas using Python and SQL.'
  },
  {
    num: '03',
    title: 'Statistical Modeling & Discovery',
    desc: 'Unearthing hidden correlations, user cohorts, and sales affinity patterns via statistical scripts.'
  },
  {
    num: '04',
    title: 'BI Visualization & Action Triggers',
    desc: 'Deploying high-performance dashboards with interactive filters, and configuring real-time Slack/Email alerts for anomalies.'
  }
];

export default function About() {
  return (
    <section id="about" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-accent mb-2 block">
            ABOUT THE ANALYST
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-white mb-4">
            Helping Organizations Navigate Complexity with Data
          </h2>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-accent to-brand-accent-secondary" />
        </div>

        {/* 2-Column Story & Philosophy */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-20">
          
          {/* Left Column: Mission, Bio & Work Philosophy */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <h3 className="font-display font-bold text-xl text-gray-100">
              My Mission & Brand Promise
            </h3>
            <p className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed">
              I am <strong className="text-white font-medium">Oluwabukunmi Ife Bamidele-Alade</strong>. My primary mission is to help growing enterprises transform unrefined, messy databases into dynamic, executive-ready insights that guide smart operations and generate measurable margin expansion.
            </p>
            <p className="text-sm sm:text-base text-gray-400 font-sans leading-relaxed">
              With over 4 years of dedicated experience across E-commerce, FinTech, and SaaS startups, I specialize in building robust data warehouses, auditing tracking scripts, and publishing ultra-clear visual reporting portals. I believe that a great dashboard should not require explanation—it should make the next commercial decision immediately obvious.
            </p>

            {/* Philosophy Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-5 hover:border-brand-accent/20 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Target className="w-5 h-5 text-brand-accent-secondary" />
                  <h4 className="font-display font-semibold text-sm text-white">Action-Driven Metrics</h4>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  I don't track metrics for vanity. I capture indices that map directly to operational efficiency, churn mitigation, and gross revenues.
                </p>
              </div>

              <div className="bg-white/[0.02] border border-white/5 rounded-xl p-5 hover:border-brand-accent/20 transition-colors">
                <div className="flex items-center gap-3 mb-3">
                  <Shield className="w-5 h-5 text-brand-success" />
                  <h4 className="font-display font-semibold text-sm text-white">Data Governance First</h4>
                </div>
                <p className="text-xs text-gray-400 leading-relaxed">
                  Speed is useless without reliability. I construct rigid validation queries, automated ETL testing scripts, and secure row-level access permissions.
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Expertise & Technologies Grid */}
          <div className="lg:col-span-5 glass-panel p-6 sm:p-8 rounded-2xl border border-white/5 flex flex-col">
            <h3 className="font-display font-bold text-lg text-white mb-6 flex items-center gap-2">
              <Compass className="w-5 h-5 text-brand-accent" />
              <span>Core Expertise</span>
            </h3>
            
            <div className="flex flex-wrap gap-2.5 mb-8">
              {coreExpertise.map((item, index) => (
                <span 
                  key={index}
                  className="px-3.5 py-1.5 rounded-lg bg-white/[0.03] border border-white/5 text-xs text-gray-300 hover:border-brand-accent/30 hover:bg-brand-accent/5 transition-all duration-200 cursor-default"
                >
                  {item}
                </span>
              ))}
            </div>

            <div className="bg-brand-accent/5 border border-brand-accent/10 rounded-xl p-4">
              <h4 className="font-display font-semibold text-xs text-brand-accent uppercase tracking-wider mb-2">
                Business Problem Solving Philosophy:
              </h4>
              <p className="text-[11px] text-gray-400 font-sans leading-relaxed">
                "We don't solve problems by coding queries immediately. We solve problems by isolating the human bottlenecks, understanding how the underlying operations work, and writing queries that reflect physical reality."
              </p>
            </div>
          </div>

        </div>

        {/* Dynamic Methodology Framework */}
        <div className="mt-16">
          <h3 className="font-display font-bold text-xl text-gray-100 text-center mb-12">
            My End-to-End Analytical Framework
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {methodologySteps.map((step, index) => (
              <motion.div
                key={index}
                className="relative bg-white/[0.02] border border-white/5 p-6 rounded-xl flex flex-col hover:bg-white/[0.04] hover:border-white/10 transition-all group"
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                {/* Connector Line */}
                {index < 3 && (
                  <div className="hidden lg:block absolute top-1/2 -right-3 w-6 h-[1px] bg-white/10 z-20 group-hover:bg-brand-accent transition-colors" />
                )}

                <div className="text-3xl font-display font-bold text-brand-accent/20 mb-4 group-hover:text-brand-accent transition-colors leading-none">
                  {step.num}
                </div>

                <h4 className="font-display font-bold text-sm text-gray-100 mb-2 leading-tight">
                  {step.title}
                </h4>

                <p className="text-xs text-gray-400 font-sans leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
