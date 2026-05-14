'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Zap, BarChart2, MessageCircle, CheckSquare, Layers, Globe } from 'lucide-react';
import { GitHubIcon } from '@/components/BrandIcons';
const projects = [
  {
    title: 'RepoRaft',
    url: 'https://reporaft.vercel.app',
    urlLabel: 'reporaft.vercel.app',
    desc: 'Community platform for students to share tutorials and repositories with a Reddit-style upvoting system. Built for student-developer collaboration.',
    tech: ['Next.js', 'React', 'Tailwind', 'Node.js'],
    icon: Globe,
    color: 'from-emerald-400 to-teal-500',
    live: true,
  },
  {
    title: 'TrendPilot',
    url: 'https://h4g-ten.vercel.app',
    urlLabel: 'h4g-ten.vercel.app',
    desc: 'AI content factory that auto-generates viral scripts and schedules social media posts. Integrates OpenAI APIs for full automation.',
    tech: ['Next.js', 'React', 'AI APIs', 'Node.js'],
    icon: Zap,
    color: 'from-indigo-400 to-purple-500',
    live: true,
  },
  {
    title: 'Personal Portfolio',
    url: null,
    urlLabel: null,
    desc: 'This very portfolio — built for performance with a 95+ Lighthouse score, glassmorphism design, and smooth Framer Motion animations.',
    tech: ['Next.js', 'React', 'Tailwind', 'Framer Motion'],
    icon: Layers,
    color: 'from-pink-400 to-rose-500',
    live: false,
  },
  {
    title: 'Data Dashboard',
    url: null,
    urlLabel: null,
    desc: 'IPL dataset analysis project with comprehensive visualizations. Extracts insights from match data using Python data science stack.',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib'],
    icon: BarChart2,
    color: 'from-yellow-400 to-orange-500',
    live: false,
  },
  {
    title: 'To-Do App',
    url: null,
    urlLabel: null,
    desc: 'Full-stack CRUD application with JWT authentication, task management, priorities, and a clean responsive interface.',
    tech: ['React', 'Node.js', 'REST API'],
    icon: CheckSquare,
    color: 'from-cyan-400 to-sky-500',
    live: false,
  },
  {
    title: 'AI Chat',
    url: null,
    urlLabel: null,
    desc: 'ChatGPT-style conversational UI with streaming responses, conversation history, and a polished modern interface.',
    tech: ['React', 'Tailwind', 'OpenAI API'],
    icon: MessageCircle,
    color: 'from-violet-400 to-fuchsia-500',
    live: false,
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
export default function Projects() {
  return (
    <section id="projects" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Portfolio
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-2">
              Featured <span className="gradient-text">Projects</span>
            </h2>
            <p className="text-textMuted mt-3 max-w-xl mx-auto">
              Things I&apos;ve built — from community platforms to AI-powered tools
            </p>
          </div>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map(({ title, url, urlLabel, desc, tech, icon: Icon, color, live }, i) => (
            <FadeIn key={title} delay={i * 0.08}>
              <motion.div
                className="glass-card p-6 rounded-3xl h-full flex flex-col group"
                whileHover={{ y: -8, transition: { duration: 0.25 } }}
              >
                <div className="flex items-start justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-lg`}
                  >
                    <Icon size={22} className="text-white" />
                  </div>
                  {live && (
                    <span className="flex items-center gap-1.5 text-xs font-semibold text-primary bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                      Live
                    </span>
                  )}
                </div>
                <h3 className="font-bold text-textDark text-xl mb-2">{title}</h3>
                {urlLabel && (
                  <a
                    href={url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-xs text-primary font-medium mb-3 hover:underline flex items-center gap-1"
                  >
                    <ExternalLink size={12} />
                    {urlLabel}
                  </a>
                )}
                <p className="text-textMuted text-sm leading-relaxed flex-1 mb-4">{desc}</p>
                <div className="flex flex-wrap gap-1.5 mb-4">
                  {tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs px-2.5 py-1 rounded-full bg-white/60 border border-white/80 text-textMuted font-medium"
                    >
                      {t}
                    </span>
                  ))}
                </div>
                <div className="flex gap-3 mt-auto">
                  {url && (
                    <a
                      href={url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-gradient flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold"
                    >
                      <ExternalLink size={13} />
                      Live Demo
                    </a>
                  )}
                  <a
                    href="https://github.com/jainul210"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-glass flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold text-textDark"
                  >
                    <GitHubIcon size={13} />
                    Code
                  </a>
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
