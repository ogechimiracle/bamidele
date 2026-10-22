import { BarChart3, Linkedin, Github, Twitter, Mail, ArrowUp } from 'lucide-react';

export default function Footer() {
  
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="border-t border-white/5 bg-[#050816] py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
        
        {/* Main top footer layout */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 items-start mb-12">
          
          {/* Logo & Slogan (5 Columns) */}
          <div className="md:col-span-5 flex flex-col items-start text-left">
            <div className="flex items-center gap-2 mb-4 group cursor-default">
              <div className="w-9 h-9 rounded-lg bg-brand-accent/10 border border-brand-accent/20 flex items-center justify-center">
                <BarChart3 className="w-4.5 h-4.5 text-brand-accent" />
              </div>
              <div className="flex flex-col">
                <span className="font-display font-bold text-sm tracking-tight leading-none text-white">
                  Oluwabukunmi Bamidele-Alade
                </span>
                <span className="text-[9px] font-mono text-gray-500 mt-0.5 tracking-wider">
                  SENIOR DATA ANALYST
                </span>
              </div>
            </div>
            
            <p className="text-xs sm:text-sm text-gray-500 leading-relaxed font-sans max-w-sm">
              Helping businesses and enterprises transform chaotic unrefined databases into clean, structured, high-performance dashboards that reveal hidden revenue opportunities.
            </p>
          </div>

          {/* Navigation link blocks (4 Columns) */}
          <div className="md:col-span-4 grid grid-cols-2 gap-6 text-left">
            <div>
              <h4 className="font-mono text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-4">PORTAL SECTIONS</h4>
              <ul className="flex flex-col gap-2.5 text-xs font-semibold text-gray-500 font-sans">
                {['#about', '#skills', '#services', '#projects'].map((id) => (
                  <li key={id}>
                    <a 
                      href={id} 
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(id.slice(1))?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="hover:text-white transition-colors"
                    >
                      {id.slice(1).charAt(0).toUpperCase() + id.slice(2)}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-mono text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-4">ADDITIONAL CREDENTIALS</h4>
              <ul className="flex flex-col gap-2.5 text-xs font-semibold text-gray-500 font-sans">
                {['#case-studies', '#timeline', '#faq', '#contact'].map((id) => (
                  <li key={id}>
                    <a 
                      href={id} 
                      onClick={(e) => {
                        e.preventDefault();
                        document.getElementById(id.slice(1))?.scrollIntoView({ behavior: 'smooth' });
                      }}
                      className="hover:text-white transition-colors"
                    >
                      {id.slice(1).split('-').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Social connections & Back-to-top (3 Columns) */}
          <div className="md:col-span-3 flex flex-col md:items-end items-start gap-6">
            <div className="flex flex-col items-start md:items-end">
              <h4 className="font-mono text-[9px] font-bold text-gray-400 uppercase tracking-widest mb-4">SOCIAL NETWORKS</h4>
              <div className="flex gap-4">
                {[
                  { icon: Linkedin, href: 'https://linkedin.com' },
                  { icon: Github, href: 'https://github.com' },
                  { icon: Twitter, href: 'https://twitter.com' },
                  { icon: Mail, href: 'mailto:odedejiife@gmail.com' }
                ].map((social, sIdx) => {
                  const Icon = social.icon;
                  return (
                    <a 
                      key={sIdx}
                      href={social.href}
                      target="_blank"
                      referrerPolicy="no-referrer"
                      className="w-8 h-8 rounded-lg bg-white/[0.02] border border-white/5 flex items-center justify-center text-gray-400 hover:text-white hover:border-brand-accent/20 hover:bg-brand-accent/10 transition-all"
                    >
                      <Icon className="w-4 h-4" />
                    </a>
                  );
                })}
              </div>
            </div>

            {/* Back to top scroll widget */}
            <button
              onClick={handleScrollTop}
              className="px-3 py-1.5 rounded-lg bg-white/[0.02] border border-white/5 hover:border-brand-accent/20 text-xs text-gray-400 hover:text-white transition-all flex items-center gap-1.5 cursor-pointer active:scale-95"
            >
              <ArrowUp className="w-3.5 h-3.5" />
              <span className="font-mono text-[10px]">BACK_TO_TOP</span>
            </button>
          </div>

        </div>

        {/* Separator line */}
        <div className="h-[1px] bg-white/5 mb-8" />

        {/* Copyright, disclaimer and diagnostic system footer block */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-[10px] font-mono text-gray-600">
          <span>&copy; {currentYear} Oluwabukunmi Ife Bamidele-Alade. All Rights Reserved.</span>
          <div className="flex items-center gap-3">
            <span>ENVIRONMENT: PRODUCTION_SECURE</span>
            <span className="text-brand-accent-secondary">•</span>
            <span>BUILD_REVISION: v4.1.2</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
