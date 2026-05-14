'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Lightbulb, GitMerge, Code2 } from 'lucide-react';
const stats = [
  { value: '6+', label: 'Projects Built', color: 'from-emerald-400 to-teal-500' },
  { value: '2', label: 'Live Sites', color: 'from-indigo-400 to-purple-500' },
  { value: '10+', label: 'Technologies', color: 'from-pink-400 to-rose-500' },
];
const facts = [
  { icon: MapPin, text: 'Based in Lucknow, India', color: 'text-primary' },
  { icon: Code2, text: 'Self-taught developer', color: 'text-secondary' },
  { icon: GitMerge, text: 'Open Source contributor', color: 'text-emerald-500' },
  { icon: Lightbulb, text: 'AI enthusiast & explorer', color: 'text-indigo-500' },
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
export default function About() {
  return (
    <section id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">About Me</span>
            <h2 className="text-4xl md:text-5xl font-black mt-2">
              Crafting digital{' '}
              <span className="gradient-text">experiences</span>
            </h2>
          </div>
        </FadeIn>
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <FadeIn delay={0.1}>
            <div className="space-y-5">
              <p className="text-textMuted text-lg leading-relaxed">
                Hey there! I&apos;m <span className="font-bold text-textDark">Jainul Abdeen</span>, a passionate
                first-year B.Tech Computer Science student from Lucknow, India. I build full-stack web
                applications that are fast, beautiful, and user-centric.
              </p>
              <p className="text-textMuted text-lg leading-relaxed">
                I&apos;ve shipped real products including{' '}
                <span className="font-semibold text-primary">RepoRaft</span> (a community platform for
                students) and <span className="font-semibold text-secondary">TrendPilot</span> (an
                AI-powered social content factory). I love exploring the intersection of AI and web
                development.
              </p>
              <p className="text-textMuted text-lg leading-relaxed">
                When I&apos;m not coding, you&apos;ll find me exploring new technologies, contributing to open
                source, or dreaming up the next big project.
              </p>
              <div className="grid grid-cols-2 gap-3 mt-6">
                {facts.map(({ icon: Icon, text, color }) => (
                  <div key={text} className="glass-card p-3 rounded-2xl flex items-center gap-3">
                    <Icon size={18} className={color} />
                    <span className="text-sm text-textMuted">{text}</span>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
          <FadeIn delay={0.2}>
            <div className="space-y-6">
              {stats.map(({ value, label, color }, i) => (
                <div
                  key={label}
                  className="glass-card p-6 rounded-3xl flex items-center gap-6 hover:scale-[1.02] transition-transform duration-300"
                >
                  <div
                    className={`text-5xl font-black bg-gradient-to-br ${color} bg-clip-text text-transparent`}
                  >
                    {value}
                  </div>
                  <div>
                    <div className="font-semibold text-textDark text-lg">{label}</div>
                    <div className="text-textMuted text-sm">and growing</div>
                  </div>
                </div>
              ))}
              <div className="glass-card p-4 rounded-2xl flex items-center gap-3">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
                </span>
                <span className="text-sm font-medium text-textDark">
                  Open to internships & collaborations
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
