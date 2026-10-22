import { useState, useEffect } from 'react';
import { Menu, X, BarChart3, Linkedin, Github, Twitter, Mail } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: 'Hero', href: '#hero' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Services', href: '#services' },
  { label: 'Projects', href: '#projects' },
  { label: 'Case Studies', href: '#case-studies' },
  { label: 'Timeline', href: '#timeline' },
  { label: 'FAQ', href: '#faq' },
  { label: 'Contact', href: '#contact' }
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      // 1. Reading progress calculation
      const totalScroll = document.documentElement.scrollHeight - window.innerHeight;
      if (totalScroll > 0) {
        setScrollProgress((window.scrollY / totalScroll) * 100);
      }

      // 2. Scrolled state for visual feedback
      setScrolled(window.scrollY > 20);

      // 3. Scroll spy logic
      const scrollPos = window.scrollY + 120;
      for (const item of navItems) {
        const id = item.href.slice(1);
        const element = document.getElementById(id);
        if (element) {
          const top = element.offsetTop;
          const height = element.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveSection(id);
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href: string) => {
    setIsOpen(false);
    const element = document.getElementById(href.slice(1));
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      {/* Reading Progress Indicator */}
      <div 
        className="fixed top-0 left-0 h-[3px] bg-gradient-to-r from-brand-accent to-brand-accent-secondary z-50 transition-all duration-100" 
        style={{ width: `${scrollProgress}%` }}
      />

      <nav
        id="navbar"
        className={`fixed top-0 left-0 w-full z-40 transition-all duration-300 ${
          scrolled 
            ? 'py-3 bg-brand-bg/80 backdrop-blur-md border-b border-white/5 shadow-lg' 
            : 'py-5 bg-transparent'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <a 
            href="#hero" 
            onClick={(e) => { e.preventDefault(); handleNavClick('#hero'); }}
            className="flex items-center gap-2 group"
          >
            <div className="w-10 h-10 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center group-hover:border-brand-accent/50 transition-colors">
              <BarChart3 className="w-5 h-5 text-brand-accent animate-pulse-slow" />
            </div>
            <div className="flex flex-col">
              <span className="font-display font-bold text-base tracking-tight leading-none text-white group-hover:text-brand-accent transition-colors">
                Oluwabukunmi Bamidele-Alade
              </span>
              <span className="text-[10px] font-mono text-gray-400 mt-0.5">
                SENIOR DATA ANALYST
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-1 bg-white/5 border border-white/5 p-1 rounded-full backdrop-blur-sm">
            {navItems.map((item) => {
              const id = item.href.slice(1);
              const isActive = activeSection === id;
              return (
                <a
                  key={item.href}
                  href={item.href}
                  onClick={(e) => {
                    e.preventDefault();
                    handleNavClick(item.href);
                  }}
                  className={`relative px-4 py-1.5 rounded-full text-xs font-medium tracking-wide transition-colors ${
                    isActive ? 'text-white' : 'text-gray-400 hover:text-white'
                  }`}
                >
                  {isActive && (
                    <motion.span
                      layoutId="activeNav"
                      className="absolute inset-0 bg-brand-accent/20 border border-brand-accent/30 rounded-full"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  {item.label}
                </a>
              );
            })}
          </div>

          {/* Social Icons & Contact CTA */}
          <div className="hidden lg:flex items-center gap-4">
            <a 
              href="https://linkedin.com" 
              target="_blank" 
              referrerPolicy="no-referrer"
              className="text-gray-400 hover:text-brand-accent transition-colors"
            >
              <Linkedin className="w-4 h-4" />
            </a>
            <a 
              href="https://github.com" 
              target="_blank" 
              referrerPolicy="no-referrer"
              className="text-gray-400 hover:text-brand-accent transition-colors"
            >
              <Github className="w-4 h-4" />
            </a>
            <a 
              href="#contact" 
              onClick={(e) => { e.preventDefault(); handleNavClick('#contact'); }}
              className="px-4 py-2 rounded-lg bg-brand-accent hover:bg-blue-600 font-medium text-xs tracking-wide transition-all shadow-md shadow-brand-accent/20 active:scale-95"
            >
              Let's Talk Data
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-2 text-gray-400 hover:text-white lg:hidden rounded-lg hover:bg-white/5 transition-colors focus:outline-none"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

        {/* Mobile Navigation Drawer */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: 'auto' }}
              exit={{ opacity: 0, height: 0 }}
              className="absolute top-full left-0 w-full bg-brand-bg/95 backdrop-blur-lg border-b border-white/5 py-6 lg:hidden"
            >
              <div className="flex flex-col gap-2 px-6">
                {navItems.map((item) => {
                  const id = item.href.slice(1);
                  const isActive = activeSection === id;
                  return (
                    <a
                      key={item.href}
                      href={item.href}
                      onClick={(e) => {
                        e.preventDefault();
                        handleNavClick(item.href);
                      }}
                      className={`py-2 px-4 rounded-lg text-sm font-medium transition-colors ${
                        isActive 
                          ? 'bg-brand-accent/10 border border-brand-accent/20 text-brand-accent' 
                          : 'text-gray-400 hover:text-white hover:bg-white/5'
                      }`}
                    >
                      {item.label}
                    </a>
                  );
                })}
                <div className="h-px bg-white/5 my-3" />
                <div className="flex items-center gap-4 px-4 py-2 justify-between">
                  <span className="text-xs text-gray-500 font-mono">CONNECT:</span>
                  <div className="flex gap-4">
                    <a href="https://linkedin.com" target="_blank" className="text-gray-400 hover:text-brand-accent"><Linkedin className="w-5 h-5" /></a>
                    <a href="https://github.com" target="_blank" className="text-gray-400 hover:text-brand-accent"><Github className="w-5 h-5" /></a>
                    <a href="mailto:odedejiife@gmail.com" className="text-gray-400 hover:text-brand-accent"><Mail className="w-5 h-5" /></a>
                  </div>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </nav>
    </>
  );
}
