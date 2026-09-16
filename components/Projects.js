'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { ExternalLink, Zap, BarChart2, MessageCircle, CheckSquare, Layers, Globe } from 'lucide-react';
import { GitHubIcon } from '@/components/BrandIcons';
const projects = [
  {
    title: 'RepoRaft — Community Resource Hub',
    url: 'https://reporaft.vercel.app',
    urlLabel: 'reporaft.vercel.app',
    year: '2025',
    desc: 'Full-stack community platform where students discover and share the best tutorials, GitHub repos, PDFs, and courses — organised by topic and ranked by upvotes. Includes NextAuth authentication, category filtering, and zero-downtime CI/CD on Vercel.',
    tech: ['Next.js', 'React.js', 'Tailwind CSS', 'Node.js', 'Vercel'],
    icon: Globe,
    color: 'from-emerald-400 to-teal-500',
    live: true,
  },
  {
    title: 'CalPrice Analytics — California Housing Price Predictor',
    url: 'https://calprice.vercel.app',
    urlLabel: 'calprice.vercel.app',
    year: '2026',
    desc: 'Full-stack ML web app predicting California median house prices via a Random Forest Regressor trained on 20,640 StatLib records (94.2% R² accuracy). Features a FastAPI /predict inference backend and Next.js UI with live confidence intervals & feature breakdown.',
    tech: ['Next.js', 'React.js', 'Python', 'FastAPI', 'scikit-learn', 'Pandas', 'NumPy'],
    icon: BarChart2,
    color: 'from-indigo-400 to-purple-500',
    live: true,
  },
  {
    title: 'Personal Portfolio',
    url: 'https://jainulabdeen.vercel.app',
    urlLabel: 'jainulabdeen.vercel.app',
    year: '2025',
    desc: 'Modern developer portfolio built with Next.js 14, Tailwind CSS, and Framer Motion. Engineered for visual excellence with glassmorphism aesthetics, responsive micro-animations, and 95+ Lighthouse performance.',
    tech: ['Next.js', 'React.js', 'Tailwind CSS', 'Framer Motion'],
    icon: Layers,
    color: 'from-pink-400 to-rose-500',
    live: true,
  },
  {
    title: 'Data Science & Visualizations',
    url: null,
    urlLabel: null,
    year: '2024',
    desc: 'Exploratory data analysis and visualization pipelines leveraging Python data science stack. Performs feature correlation, outlier treatment, and dynamic statistical charting on complex public datasets.',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'scikit-learn'],
    icon: Zap,
    color: 'from-yellow-400 to-orange-500',
    live: false,
  },
  {
    title: 'Full-Stack Task Manager',
    url: null,
    urlLabel: null,
    year: '2024',
    desc: 'Full-stack productivity web app featuring secure JWT authentication, RESTful APIs, MongoDB database storage, status tracking, and responsive UI.',
    tech: ['React.js', 'Node.js', 'MongoDB', 'REST APIs'],
    icon: CheckSquare,
    color: 'from-cyan-400 to-sky-500',
    live: false,
  },
  {
    title: 'AI Conversational Interface',
    url: null,
    urlLabel: null,
    year: '2024',
    desc: 'Interactive chat interface experimenting with modern prompt engineering, response streaming, context window caching, and clean modern styling.',
    tech: ['React.js', 'FastAPI', 'Prompt Engineering', 'Tailwind CSS'],
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
          {projects.map(({ title, url, urlLabel, year, desc, tech, icon: Icon, color, live }, i) => (
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
                  <div className="flex items-center gap-2">
                    {year && (
                      <span className="text-xs font-mono font-semibold text-textMuted bg-white/60 border border-white/80 px-2 py-0.5 rounded-full">
                        {year}
                      </span>
                    )}
                    {live && (
                      <span className="flex items-center gap-1.5 text-xs font-semibold text-primary bg-emerald-50 border border-emerald-200 px-2.5 py-1 rounded-full">
                        <span className="w-1.5 h-1.5 rounded-full bg-primary animate-ping" />
                        Live
                      </span>
                    )}
                  </div>
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
