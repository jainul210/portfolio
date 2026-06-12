'use client';
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Download, ArrowUpRight, Terminal } from 'lucide-react';

const roles = [
  'Full-Stack Developer',
  'AI Enthusiast',
  'Next.js Developer',
  'Open Source Contributor',
];

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

  const fadeUp = (delay = 0) => ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] },
  });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden py-20"
    >
      {/* Subtle gradient wash */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      {/* Floating blobs — match Stitch positioning */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-full opacity-20 pointer-events-none">
        <div className="absolute top-1/4 left-0 w-64 h-64 bg-primary rounded-full blur-[120px]" />
        <div className="absolute bottom-1/4 right-0 w-64 h-64 bg-secondary rounded-full blur-[120px]" />
      </div>

      {/* ── Content ── */}
      <div className="relative z-10 max-w-6xl mx-auto px-6 w-full">
        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* ── LEFT ── */}
          <div className="text-left space-y-8">

            {/* Badge */}
            <motion.div {...fadeUp(0.05)}>
              <div className="inline-flex items-center gap-3 px-4 py-2 rounded-full glass-card shadow-sm">
                <span className="flex h-2 w-2 rounded-full bg-primary animate-pulse" />
                <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', fontWeight: 600, letterSpacing: '0.08em' }} className="uppercase text-primary">
                  Available for projects
                </span>
              </div>
            </motion.div>

            {/* Heading block */}
            <motion.div {...fadeUp(0.15)} className="space-y-4">
              <h1
                className="text-textDark leading-[1.1]"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: 'clamp(48px, 7vw, 80px)', fontWeight: 800, letterSpacing: '-0.02em' }}
              >
                Jainul <br />
                <span className="gradient-text">Abdeen</span>
              </h1>

              {/* Typewriter */}
              <div
                className="flex items-center gap-1 text-textMuted"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', fontWeight: 500, lineHeight: 1.6, minHeight: '29px' }}
              >
                <span>{displayed}</span>
                <span className="inline-block w-0.5 h-5 bg-secondary animate-pulse rounded-full" />
              </div>

              <p
                className="text-textMuted max-w-xl leading-relaxed"
                style={{ fontFamily: "'Inter', sans-serif", fontSize: '18px', fontWeight: 400, lineHeight: 1.6 }}
              >
                First-year B.Tech CSE student at{' '}
                <span className="font-bold text-secondary">University of Lucknow</span>.
                I architect modern web experiences and explore the frontiers of AI integration.
              </p>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div {...fadeUp(0.28)} className="flex flex-wrap gap-4 pt-4">
              <motion.a
                href="#projects"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="btn-gradient flex items-center gap-3 px-8 py-4 rounded-2xl text-white shadow-lg"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '18px', fontWeight: 700 }}
              >
                View My Work
                <ArrowUpRight size={20} />
              </motion.a>
              <motion.a
                href="/Resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.04 }}
                whileTap={{ scale: 0.97 }}
                className="glass-card flex items-center gap-3 px-8 py-4 rounded-2xl text-textDark hover:bg-white/80 transition-colors"
                style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '18px', fontWeight: 700 }}
              >
                <Download size={20} />
                Resume
              </motion.a>
            </motion.div>
          </div>

          {/* ── RIGHT: Glass Card — exact Stitch structure ── */}
          <motion.div
            initial={{ opacity: 0, x: 36 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="hidden lg:block relative"
          >
            {/* Decorative orbs behind card */}
            <div className="absolute -top-10 -right-10 w-64 h-64 bg-secondary/20 rounded-full blur-3xl -z-10" />
            <div className="absolute -bottom-10 -left-10 w-64 h-64 bg-primary/20 rounded-full blur-3xl -z-10" />

            <motion.div
              animate={{ y: [0, -14, 0] }}
              transition={{ duration: 5.5, repeat: Infinity, ease: 'easeInOut' }}
              className="glass-card p-10 rounded-[3rem] border-2 border-white/50 shadow-2xl relative z-20"
            >
              <div className="space-y-8">

                {/* Card header */}
                <div className="flex items-center gap-6">
                  <div className="w-20 h-20 rounded-3xl bg-gradient-to-br from-primary to-secondary flex items-center justify-center text-white shadow-xl flex-shrink-0">
                    <Terminal size={40} />
                  </div>
                  <div>
                    <h3
                      className="text-textDark"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontSize: '24px', fontWeight: 700, lineHeight: 1.3 }}
                    >
                      Full-Stack
                    </h3>
                    <p
                      className="text-textMuted"
                      style={{ fontFamily: "'Inter', sans-serif", fontSize: '16px', fontWeight: 400 }}
                    >
                      Developer &amp; Student
                    </p>
                  </div>
                </div>

                {/* Stats grid */}
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 rounded-2xl bg-white/40 border border-white/60">
                    <p
                      className="text-primary font-bold text-2xl"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
                    >6+</p>
                    <p
                      className="uppercase opacity-60 text-textMuted"
                      style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', fontWeight: 600, letterSpacing: '0.05em' }}
                    >Projects</p>
                  </div>
                  <div className="p-4 rounded-2xl bg-white/40 border border-white/60">
                    <p
                      className="text-secondary font-bold text-2xl"
                      style={{ fontFamily: "'Plus Jakarta Sans', sans-serif", fontWeight: 700 }}
                    >2</p>
                    <p
                      className="uppercase opacity-60 text-textMuted"
                      style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', fontWeight: 600, letterSpacing: '0.05em' }}
                    >Live Sites</p>
                  </div>
                </div>

                {/* Progress bars — exact Stitch layout */}
                <div className="flex gap-3">
                  <div className="h-2 flex-1 bg-primary/20 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-primary rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '85%' }}
                      transition={{ duration: 1.3, delay: 0.7, ease: 'easeOut' }}
                    />
                  </div>
                  <div className="h-2 flex-1 bg-secondary/20 rounded-full overflow-hidden">
                    <motion.div
                      className="h-full bg-secondary rounded-full"
                      initial={{ width: 0 }}
                      animate={{ width: '70%' }}
                      transition={{ duration: 1.3, delay: 0.9, ease: 'easeOut' }}
                    />
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator — exact Stitch */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-40">
        <span style={{ fontFamily: "'JetBrains Mono', monospace", fontSize: '12px', fontWeight: 600, letterSpacing: '-0.02em' }} className="uppercase">
          Scroll
        </span>
        <div className="w-px h-12 bg-gradient-to-b from-textMuted to-transparent" />
      </div>
    </section>
  );
}
