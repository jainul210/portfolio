'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Mail, ArrowDown, Download, Briefcase } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/components/BrandIcons';

const roles = ['Full-Stack Developer', 'AI Enthusiast', 'Next.js Developer', 'Open Source Contributor'];

export default function Hero() {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayed, setDisplayed] = useState('');
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    let timeout;
    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), 80);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), 2000);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), 40);
    } else if (deleting && displayed.length === 0) {
      setDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
    }
    return () => clearTimeout(timeout);
  }, [displayed, deleting, roleIndex]);

  const container = {
    hidden: { opacity: 0 },
    show: { opacity: 1, transition: { staggerChildren: 0.15 } },
  };
  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-24 pb-16"
    >
      <motion.div variants={container} initial="hidden" animate="show" className="max-w-3xl mx-auto">
        {/* Badge */}
        <motion.div variants={item} className="inline-flex items-center gap-2 mb-6">
          <div className="glass-card px-5 py-2 rounded-full text-sm font-medium text-textMuted flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-primary animate-ping inline-block" />
            👋 Hello, I&apos;m
          </div>
        </motion.div>

        {/* Name */}
        <motion.h1
          variants={item}
          className="text-5xl sm:text-6xl md:text-7xl font-black mb-4 leading-tight"
        >
          <span className="gradient-text">Jainul Abdeen</span>
        </motion.h1>

        {/* Typing role */}
        <motion.div
          variants={item}
          className="text-xl sm:text-2xl font-semibold text-textMuted mb-4 h-9 flex items-center justify-center gap-1"
        >
          <span className="text-secondary">{displayed}</span>
          <span className="w-0.5 h-6 bg-secondary animate-pulse inline-block rounded-full" />
        </motion.div>

        {/* Subtitle */}
        <motion.p variants={item} className="text-textMuted text-lg mb-10 max-w-xl mx-auto leading-relaxed">
          First-year B.Tech CSE student at{' '}
          <span className="font-semibold text-textDark">University of Lucknow</span>, building modern
          web experiences and exploring AI frontiers.
        </motion.p>

        {/* CTA Buttons */}
        <motion.div variants={item} className="flex flex-wrap items-center justify-center gap-4 mb-12">
          <a
            href="#projects"
            className="btn-gradient flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-base shadow-lg"
          >
            <Briefcase size={18} />
            View Work
          </a>
          <a
            href="/resume.pdf"
            download
            className="btn-glass flex items-center gap-2 px-7 py-3 rounded-full font-semibold text-base text-textDark border border-white/70"
          >
            <Download size={18} />
            Download Resume
          </a>
        </motion.div>

        {/* Social links */}
        <motion.div variants={item} className="flex items-center justify-center gap-4 mb-16">
          {[
            { href: 'https://github.com/jainul210', icon: GitHubIcon, label: 'GitHub' },
            { href: 'https://linkedin.com/in/jainul-abdeen-452645394', icon: LinkedInIcon, label: 'LinkedIn' },
            { href: 'mailto:jainulabdeen210@gmail.com', icon: Mail, label: 'Email' },
          ].map(({ href, icon: Icon, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="glass-card w-11 h-11 flex items-center justify-center rounded-xl text-textMuted hover:text-primary hover:scale-110 transition-all duration-300"
            >
              <Icon size={20} />
            </a>
          ))}
        </motion.div>

        {/* Scroll indicator */}
        <motion.div
          variants={item}
          className="flex flex-col items-center gap-2 text-textMuted text-xs"
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <span>Scroll down</span>
          <ArrowDown size={16} />
        </motion.div>
      </motion.div>
    </section>
  );
}
