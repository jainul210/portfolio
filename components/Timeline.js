'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GraduationCap, School, BookOpen } from 'lucide-react';

const events = [
  {
    year: '2025 – 2029',
    title: 'B.Tech Computer Science & Engineering',
    org: 'University of Lucknow',
    detail: 'Currently pursuing full-stack development, data structures, algorithms, and AI fundamentals.',
    icon: GraduationCap,
    color: 'from-emerald-400 to-teal-500',
    current: true,
  },
  {
    year: '2024',
    title: 'Class XII — Science',
    org: 'Heritage International School',
    detail: 'Achieved 84.6% — Physics, Chemistry, Mathematics & Computer Science.',
    icon: School,
    color: 'from-indigo-400 to-purple-500',
    current: false,
  },
  {
    year: '2022',
    title: 'Class X — Secondary Education',
    org: 'Heritage International School',
    detail: 'Achieved 86% — Developed early interest in programming and technology.',
    icon: BookOpen,
    color: 'from-pink-400 to-rose-500',
    current: false,
  },
];

function FadeIn({ children, delay = 0 }) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-80px' });
  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 40 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
    >
      {children}
    </motion.div>
  );
}

export default function Timeline() {
  return (
    <section id="timeline" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Education
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-2">
              My <span className="gradient-text">Journey</span>
            </h2>
            <p className="text-textMuted mt-3 max-w-xl mx-auto">
              Academic milestones that shaped my technical foundation
            </p>
          </div>
        </FadeIn>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary via-secondary to-pink-400 rounded-full" />

          <div className="space-y-8">
            {events.map(({ year, title, org, detail, icon: Icon, color, current }, i) => (
              <FadeIn key={title} delay={i * 0.15}>
                <div className="flex gap-6 items-start">
                  {/* Icon dot */}
                  <div className="relative flex-shrink-0">
                    <div
                      className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg z-10 relative`}
                    >
                      <Icon size={24} className="text-white" />
                    </div>
                    {current && (
                      <span className="absolute -top-1 -right-1 w-4 h-4 rounded-full bg-primary border-2 border-white">
                        <span className="absolute inset-0 rounded-full bg-primary animate-ping opacity-75" />
                      </span>
                    )}
                  </div>

                  {/* Card */}
                  <motion.div
                    className="glass-card p-5 rounded-2xl flex-1"
                    whileHover={{ x: 4, transition: { duration: 0.2 } }}
                  >
                    <div className="flex items-start justify-between flex-wrap gap-2 mb-1">
                      <h3 className="font-bold text-textDark text-lg">{title}</h3>
                      <span
                        className={`text-xs font-bold px-3 py-1 rounded-full bg-gradient-to-r ${color} text-white`}
                      >
                        {year}
                      </span>
                    </div>
                    <p className="text-primary font-semibold text-sm mb-2">{org}</p>
                    <p className="text-textMuted text-sm leading-relaxed">{detail}</p>
                    {current && (
                      <div className="mt-3 flex items-center gap-2 text-xs text-primary font-semibold">
                        <span className="w-2 h-2 rounded-full bg-primary animate-ping" />
                        Currently Enrolled
                      </div>
                    )}
                  </motion.div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
