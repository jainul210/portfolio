'use client';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X } from 'lucide-react';
const links = ['About', 'Skills', 'Projects', 'Timeline', 'Achievements', 'Contact'];
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <motion.nav
      initial={{ y: -80, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'glass-nav py-3' : 'py-5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a href="#" className="flex items-center gap-2 group">
          <div className="w-10 h-10 rounded-xl btn-gradient flex items-center justify-center font-bold text-white text-lg shadow-lg group-hover:scale-105 transition-transform">
            JA
          </div>
          <span className="font-bold text-textDark text-lg hidden sm:block">
            Jainul<span className="gradient-text"> Abdeen</span>
          </span>
        </a>
        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <a
              key={link}
              href={`#${link.toLowerCase()}`}
              className="text-sm font-medium text-textMuted hover:text-primary transition-colors relative group"
            >
              {link}
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-secondary rounded-full group-hover:w-full transition-all duration-300" />
            </a>
          ))}
        </div>
        <div className="hidden md:flex items-center gap-3">
          <a
            href="#contact"
            className="btn-gradient px-5 py-2 rounded-full text-sm font-semibold shadow-md"
          >
            Hire Me
          </a>
        </div>
        <button
          className="md:hidden p-2 glass-card rounded-xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden glass-nav border-t border-white/50 mt-2 overflow-hidden"
          >
            <div className="px-6 py-4 flex flex-col gap-4">
              {links.map((link) => (
                <a
                  key={link}
                  href={`#${link.toLowerCase()}`}
                  className="text-textDark font-medium hover:text-primary transition-colors"
                  onClick={() => setMenuOpen(false)}
                >
                  {link}
                </a>
              ))}
              <a
                href="#contact"
                className="btn-gradient px-5 py-2 rounded-full text-sm font-semibold text-center mt-2"
                onClick={() => setMenuOpen(false)}
              >
                Hire Me
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
