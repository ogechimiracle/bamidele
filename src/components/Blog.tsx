import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { BookOpen, Calendar, Clock, X, ArrowRight, ArrowLeft } from 'lucide-react';
import { blogPostsData } from '../data';
import { BlogPost } from '../types';

export default function Blog() {
  const [selectedPost, setSelectedPost] = useState<BlogPost | null>(null);

  return (
    <section id="blog" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops)) from-cyan-950/5 via-transparent to-transparent pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 text-left">
          <span className="text-xs font-mono uppercase tracking-widest text-brand-accent mb-2 block">
            TECHNICAL KNOWLEDGE
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold font-display tracking-tight text-white mb-4">
            Recent Analytics Handbook Articles
          </h2>
          <p className="text-sm text-gray-400 font-sans max-w-xl">
            A selection of my public engineering guides on tuning complex databases, writing custom statistical scripts, and resolving attribution errors.
          </p>
          <div className="w-12 h-1 bg-gradient-to-r from-brand-accent to-brand-accent-secondary mt-6" />
        </div>

        {/* Blog Post Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-5xl mx-auto text-left">
          {blogPostsData.map((post, idx) => (
            <motion.div
              key={post.id}
              className="glass-panel p-6 rounded-2xl border border-white/5 hover:border-brand-accent/25 transition-all duration-300 flex flex-col justify-between group cursor-pointer"
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              onClick={() => setSelectedPost(post)}
            >
              <div>
                {/* Meta row */}
                <div className="flex items-center gap-4 text-[10px] font-mono text-gray-500 mb-4">
                  <div className="flex items-center gap-1">
                    <Calendar className="w-3.5 h-3.5" />
                    <span>{post.publishedAt}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                <span className="inline-block px-2.5 py-0.5 rounded bg-brand-accent/10 border border-brand-accent/25 text-[9px] font-mono font-bold text-brand-accent uppercase tracking-wider mb-3 leading-none">
                  {post.category}
                </span>

                <h3 className="font-display font-bold text-base sm:text-lg text-white group-hover:text-brand-accent transition-colors mb-3 leading-snug">
                  {post.title}
                </h3>

                <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed mb-6">
                  {post.excerpt}
                </p>
              </div>

              {/* Read button */}
              <div className="flex items-center gap-2 text-xs font-mono font-semibold text-brand-accent group-hover:text-white transition-colors">
                <span>Read Full Article</span>
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </div>
            </motion.div>
          ))}
        </div>

        {/* Article Reader Modal Overlay */}
        <AnimatePresence>
          {selectedPost && (
            <motion.div
              className="fixed inset-0 bg-brand-bg/90 backdrop-blur-md z-50 flex items-center justify-center p-4 sm:p-6"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              <motion.div
                className="w-full max-w-3xl bg-brand-card border border-white/10 rounded-2xl p-6 sm:p-8 shadow-2xl relative max-h-[85vh] overflow-y-auto flex flex-col text-left"
                initial={{ scale: 0.95, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.95, y: 15 }}
                transition={{ type: 'spring', duration: 0.5 }}
              >
                {/* Close Button */}
                <button
                  onClick={() => setSelectedPost(null)}
                  className="absolute right-4 top-4 p-2 rounded-lg bg-white/5 border border-white/5 text-gray-400 hover:text-white transition-all hover:bg-white/10 cursor-pointer"
                  aria-label="Close article"
                >
                  <X className="w-5 h-5" />
                </button>

                {/* Article Header */}
                <div className="mb-6 border-b border-white/5 pb-6">
                  <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-gray-400 mb-3">
                    <span>Published: {selectedPost.publishedAt}</span>
                    <span>•</span>
                    <span>{selectedPost.readTime}</span>
                    <span>•</span>
                    <span className="text-brand-accent font-semibold">{selectedPost.category}</span>
                  </div>
                  <h3 className="font-display font-bold text-xl sm:text-2xl text-white">
                    {selectedPost.title}
                  </h3>
                </div>

                {/* Article Content Body */}
                <div className="flex-1 overflow-y-auto pr-2">
                  <p className="text-xs sm:text-sm text-gray-400 font-sans leading-relaxed mb-6 italic border-l-2 border-brand-accent pl-4">
                    {selectedPost.excerpt}
                  </p>
                  
                  {/* Render content lines split by paragraphs or lists */}
                  <div className="text-xs sm:text-sm text-gray-300 font-sans leading-relaxed flex flex-col gap-4">
                    {selectedPost.content.split('\n\n').map((para, i) => (
                      <p key={i}>{para}</p>
                    ))}
                  </div>

                  {/* Mock Interactive Sandbox Code trigger */}
                  <div className="mt-8 bg-white/[0.02] border border-white/5 rounded-xl p-4 flex flex-col sm:flex-row items-center justify-between gap-4">
                    <div className="text-left">
                      <span className="text-[10px] font-mono text-brand-accent-secondary uppercase block mb-1">DATA_SANDBOX_READY</span>
                      <p className="text-xs text-gray-400">Want to inspect the SQL schema or raw Python workbook for this exact article?</p>
                    </div>
                    <button
                      onClick={() => alert(`Launching Python/SQL execution sandbox folder for: ${selectedPost.title}`)}
                      className="px-4 py-2 rounded-lg bg-brand-accent hover:bg-blue-600 text-white font-medium text-xs tracking-wide transition-all cursor-pointer shrink-0"
                    >
                      Inspect Source Code
                    </button>
                  </div>
                </div>

                {/* Article Footer Return */}
                <div className="mt-6 border-t border-white/5 pt-4 flex items-center justify-between">
                  <button
                    onClick={() => setSelectedPost(null)}
                    className="flex items-center gap-1.5 text-xs font-mono text-gray-400 hover:text-white transition-colors cursor-pointer"
                  >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Handbooks</span>
                  </button>
                  <span className="text-[10px] font-mono text-gray-500">AUTHOR: O.I. Bamidele-Alade</span>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </section>
  );
}
