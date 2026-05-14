'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { GitMerge, Cpu, Users, Lightbulb, Star, Trophy } from 'lucide-react';
const achievements = [
  {
    icon: GitMerge,
    title: 'Open Source Contributor',
    desc: 'Actively contributes to open-source projects, improving community codebases and learning from real-world collaboration.',
    color: 'from-emerald-400 to-teal-500',
    bg: 'rgba(16,185,129,0.06)',
    border: 'rgba(16,185,129,0.3)',
  },
  {
    icon: Trophy,
    title: 'Hackathon Participant',
    desc: 'Competed in hackathons, building functional prototypes under tight deadlines and showcasing creative problem-solving.',
    color: 'from-indigo-400 to-purple-500',
    bg: 'rgba(99,102,241,0.06)',
    border: 'rgba(99,102,241,0.3)',
  },
  {
    icon: Users,
    title: 'CSE Tech Club Member',
    desc: 'Active member of the Computer Science & Engineering technology club at University of Lucknow, participating in events and workshops.',
    color: 'from-pink-400 to-rose-500',
    bg: 'rgba(236,72,153,0.06)',
    border: 'rgba(236,72,153,0.3)',
  },
  {
    icon: Lightbulb,
    title: 'Self-Taught Developer',
    desc: 'Built a full-stack skillset independently through online resources, documentation, and shipping real projects to production.',
    color: 'from-yellow-400 to-orange-500',
    bg: 'rgba(234,179,8,0.06)',
    border: 'rgba(234,179,8,0.3)',
  },
  {
    icon: Star,
    title: '2 Live Productions',
    desc: 'Deployed two live web applications — RepoRaft and TrendPilot — serving real users on the web via Vercel.',
    color: 'from-cyan-400 to-sky-500',
    bg: 'rgba(6,182,212,0.06)',
    border: 'rgba(6,182,212,0.3)',
  },
  {
    icon: Cpu,
    title: 'AI Integration Pioneer',
    desc: 'Integrated OpenAI APIs into production applications, building AI-driven content generation and chat interfaces.',
    color: 'from-violet-400 to-fuchsia-500',
    bg: 'rgba(139,92,246,0.06)',
    border: 'rgba(139,92,246,0.3)',
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
export default function Achievements() {
  return (
    <section id="achievements" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Milestones
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-2">
              Achievements & <span className="gradient-text">Recognition</span>
            </h2>
            <p className="text-textMuted mt-3 max-w-xl mx-auto">
              Highlights from my journey as a developer
            </p>
          </div>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {achievements.map(({ icon: Icon, title, desc, color, bg, border }, i) => (
            <FadeIn key={title} delay={i * 0.08}>
              <motion.div
                className="glass-card p-6 rounded-3xl h-full"
                style={{ background: bg, border: `1px solid ${border}` }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <div
                  className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${color} flex items-center justify-center shadow-md mb-4`}
                >
                  <Icon size={22} className="text-white" />
                </div>
                <h3 className="font-bold text-textDark text-lg mb-2">{title}</h3>
                <p className="text-textMuted text-sm leading-relaxed">{desc}</p>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
