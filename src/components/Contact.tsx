import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Mail, Phone, Landmark, Send, CheckCircle, Clock, Sparkles, Calendar, ChevronRight } from 'lucide-react';

export default function Contact() {
  // Form State
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    company: '',
    phone: '',
    projectType: 'Business Intelligence',
    budget: '$5,000 - $10,000',
    message: ''
  });

  // Validation state
  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  // Submission State
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitProgress, setSubmitProgress] = useState(0);
  const [isSuccess, setIsSuccess] = useState(false);

  // Field change handler
  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  // Selectors
  const projectTypes = [
    'Business Intelligence',
    'Dashboard Development',
    'Data Cleaning & ETL',
    'Reporting Automation',
    'Customer Analytics',
    'Custom Data Solution'
  ];

  const budgetRanges = [
    '< $5,000',
    '$5,000 - $10,000',
    '$10,000 - $25,000',
    '$25,000+'
  ];

  // Custom Form validation (simulates Zod)
  const validateForm = () => {
    const tempErrors: { [key: string]: string } = {};
    if (!formData.name.trim()) tempErrors.name = 'Full Name is required';
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email structure';
    }
    if (!formData.message.trim()) tempErrors.message = 'Please provide details about your analytics needs';
    
    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Trigger Submission Animation Telemetry
    setIsSubmitting(true);
    setSubmitProgress(10);

    const interval = setInterval(() => {
      setSubmitProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            setIsSubmitting(false);
            setIsSuccess(true);
          }, 300);
          return 100;
        }
        return prev + 15;
      });
    }, 150);
  };

  const handleBookCall = () => {
    alert("Bukunmi's Calendly Link Triggered! (In production, this opens a Scheduling modal or routes to Calendly)");
  };

  return (
    <section id="contact" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient(ellipse_at_center,_var(--tw-gradient-stops)) from-blue-900/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* Large Conversion CTA Block at top of section */}
        <div className="bg-gradient-to-r from-[#0F172A] to-[#0A0F1E] border border-white/5 rounded-3xl p-8 sm:p-12 mb-20 text-center relative overflow-hidden">
          {/* Abstract floating circles */}
          <div className="absolute -top-12 -left-12 w-48 h-48 rounded-full bg-brand-accent/5 blur-3xl pointer-events-none" />
          <div className="absolute -bottom-12 -right-12 w-48 h-48 rounded-full bg-brand-accent-secondary/5 blur-3xl pointer-events-none" />

          <span className="text-xs font-mono uppercase tracking-widest text-brand-accent-secondary leading-none mb-3 block">
            WORK WITH ME
          </span>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-display tracking-tight text-white mb-6">
            Let's Turn Your Data Into Business Value.
          </h2>
          <p className="text-sm sm:text-base text-gray-400 max-w-xl mx-auto mb-8 font-sans leading-relaxed">
            Ready to plug your profit leaks, automate reporting overhead, and deploy state-of-the-art interactive dashboards? Book a consultation today.
          </p>
          <button
            onClick={handleBookCall}
            className="px-6 py-3.5 rounded-xl bg-brand-accent hover:bg-blue-600 text-white font-medium text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-brand-accent/25 inline-flex items-center gap-2 cursor-pointer active:scale-95"
          >
            <Calendar className="w-4 h-4" />
            <span>Book a 1:1 Consultation Call</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>

        {/* 2-Column Contact Block */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start text-left">
          
          {/* Left Column: Context Card Info (5 columns) */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <span className="text-xs font-mono uppercase tracking-widest text-brand-accent mb-1 block">
              GET IN TOUCH
            </span>
            <h3 className="text-2xl sm:text-3xl font-bold font-display text-white">
              Request a Custom Pipeline Audit
            </h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-sans mb-4">
              Use the form to describe your current database schema or metrics requirements. I typically review details and follow up with a structured project timeline recommendation within 24 hours.
            </p>

            <div className="flex flex-col gap-4 border-t border-white/5 pt-6">
              {[
                { icon: Mail, label: 'EMAIL DIRECT', val: 'odedejiife@gmail.com', href: 'mailto:odedejiife@gmail.com' },
                { icon: Clock, label: 'TYPICAL RESPONSE', val: 'Under 24 business hours', href: null },
                { icon: Landmark, label: 'GLOBAL COVERAGE', val: 'Remote / US & European Timezones', href: null }
              ].map((item, idx) => {
                const Icon = item.icon;
                return (
                  <div key={idx} className="flex items-center gap-4">
                    <div className="w-10 h-10 rounded-xl bg-white/[0.02] border border-white/5 flex items-center justify-center text-gray-400">
                      <Icon className="w-4 h-4" />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[9px] font-mono text-gray-500 uppercase tracking-wider">{item.label}</span>
                      {item.href ? (
                        <a href={item.href} className="text-xs sm:text-sm font-medium text-white hover:text-brand-accent transition-colors">
                          {item.val}
                        </a>
                      ) : (
                        <span className="text-xs sm:text-sm font-medium text-gray-300">{item.val}</span>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Right Column: High-fidelity Contact Form Card (7 columns) */}
          <div className="lg:col-span-7 glass-panel p-6 sm:p-8 rounded-2xl border border-white/5">
            <AnimatePresence mode="wait">
              
              {/* Form success template */}
              {isSuccess ? (
                <motion.div
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  className="py-12 flex flex-col items-center text-center justify-center"
                >
                  {/* Glowing success circle indicator */}
                  <div className="w-16 h-16 rounded-full bg-brand-success/10 border border-brand-success/20 flex items-center justify-center text-brand-success mb-6 animate-bounce">
                    <CheckCircle className="w-8 h-8" />
                  </div>
                  
                  <h4 className="font-display font-bold text-xl text-white mb-2">Message Audited & Sent!</h4>
                  <p className="text-xs sm:text-sm text-gray-400 max-w-sm leading-relaxed mb-6">
                    Thank you, {formData.name}. I have successfully received your {formData.projectType} request. I am auditing these details and will reach out to you within 24 hours.
                  </p>

                  <button
                    onClick={() => {
                      setIsSuccess(false);
                      setFormData({
                        name: '',
                        email: '',
                        company: '',
                        phone: '',
                        projectType: 'Business Intelligence',
                        budget: '$5,000 - $10,000',
                        message: ''
                      });
                    }}
                    className="px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 border border-white/10 text-xs font-semibold text-white transition-all cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </motion.div>
              ) : isSubmitting ? (
                /* Submitting progress telemetry screen */
                <motion.div
                  key="submitting"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="py-16 flex flex-col items-center justify-center text-center"
                >
                  <div className="w-12 h-12 rounded-xl bg-brand-accent/5 border border-brand-accent/20 flex items-center justify-center text-brand-accent mb-6 animate-spin">
                    <Send className="w-5 h-5" />
                  </div>
                  <span className="text-[10px] font-mono text-brand-accent uppercase tracking-widest block mb-2">CONNECTING_SECURE_API_NODES</span>
                  <div className="w-48 h-1.5 bg-white/[0.04] rounded-full overflow-hidden mb-2">
                    <div className="h-full bg-brand-accent" style={{ width: `${submitProgress}%` }} />
                  </div>
                  <span className="text-[9px] font-mono text-gray-500">INGESTING: {submitProgress}% COMPLETE</span>
                </motion.div>
              ) : (
                /* Main form layout */
                <motion.form
                  key="form"
                  onSubmit={handleSubmit}
                  className="flex flex-col gap-5 text-left"
                  noValidate
                >
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="name" className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Full Name *</label>
                      <input
                        id="name"
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="John Doe"
                        className={`w-full bg-white/5 border rounded-xl py-3 px-4 text-xs font-medium text-white placeholder-gray-600 focus:outline-none focus:bg-white/[0.08] transition-all ${
                          errors.name ? 'border-rose-500' : 'border-white/5 focus:border-brand-accent'
                        }`}
                      />
                      {errors.name && <span className="text-[10px] font-mono text-rose-400 mt-0.5">{errors.name}</span>}
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="email" className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Email Address *</label>
                      <input
                        id="email"
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="john@company.com"
                        className={`w-full bg-white/5 border rounded-xl py-3 px-4 text-xs font-medium text-white placeholder-gray-600 focus:outline-none focus:bg-white/[0.08] transition-all ${
                          errors.email ? 'border-rose-500' : 'border-white/5 focus:border-brand-accent'
                        }`}
                      />
                      {errors.email && <span className="text-[10px] font-mono text-rose-400 mt-0.5">{errors.email}</span>}
                    </div>
                  </div>

                  {/* Company & Phone Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="company" className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Company / Organization</label>
                      <input
                        id="company"
                        type="text"
                        name="company"
                        value={formData.company}
                        onChange={handleChange}
                        placeholder="Enterprise Inc."
                        className="w-full bg-white/5 border border-white/5 rounded-xl py-3 px-4 text-xs font-medium text-white placeholder-gray-600 focus:outline-none focus:border-brand-accent focus:bg-white/[0.08] transition-all"
                      />
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="phone" className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Phone Number</label>
                      <input
                        id="phone"
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="+1 (555) 000-0000"
                        className="w-full bg-white/5 border border-white/5 rounded-xl py-3 px-4 text-xs font-medium text-white placeholder-gray-600 focus:outline-none focus:border-brand-accent focus:bg-white/[0.08] transition-all"
                      />
                    </div>
                  </div>

                  {/* Project Type & Budget selectors */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="projectType" className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Project Type</label>
                      <select
                        id="projectType"
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full bg-[#0F172A] border border-white/5 rounded-xl py-3 px-4 text-xs font-medium text-white focus:outline-none focus:border-brand-accent focus:bg-white/[0.08] transition-all appearance-none cursor-pointer"
                      >
                        {projectTypes.map((t) => (
                          <option key={t} value={t} className="bg-brand-card">{t}</option>
                        ))}
                      </select>
                    </div>

                    <div className="flex flex-col gap-1.5">
                      <label htmlFor="budget" className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Project Budget Range</label>
                      <select
                        id="budget"
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-[#0F172A] border border-white/5 rounded-xl py-3 px-4 text-xs font-medium text-white focus:outline-none focus:border-brand-accent focus:bg-white/[0.08] transition-all appearance-none cursor-pointer"
                      >
                        {budgetRanges.map((b) => (
                          <option key={b} value={b} className="bg-brand-card">{b}</option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message Detail */}
                  <div className="flex flex-col gap-1.5">
                    <label htmlFor="message" className="text-[10px] font-mono text-gray-400 uppercase tracking-wider">Project Requirements Description *</label>
                    <textarea
                      id="message"
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Describe your raw data formats, reporting platforms, or business logic questions..."
                      className={`w-full bg-white/5 border rounded-xl py-3 px-4 text-xs font-medium text-white placeholder-gray-600 focus:outline-none focus:bg-white/[0.08] transition-all resize-none ${
                        errors.message ? 'border-rose-500' : 'border-white/5 focus:border-brand-accent'
                      }`}
                    />
                    {errors.message && <span className="text-[10px] font-mono text-rose-400 mt-0.5">{errors.message}</span>}
                  </div>

                  {/* Submit Trigger Button */}
                  <button
                    type="submit"
                    className="w-full py-4 rounded-xl bg-brand-accent hover:bg-blue-600 text-white font-semibold text-xs sm:text-sm tracking-wide transition-all shadow-lg shadow-brand-accent/25 flex items-center justify-center gap-2 active:scale-[0.98] mt-2 cursor-pointer"
                  >
                    <Send className="w-4 h-4" />
                    <span>Deploy Message to Analyst</span>
                  </button>
                </motion.form>
              )}
            </AnimatePresence>
          </div>

        </div>

      </div>
    </section>
  );
}
