'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { MapPin, Lightbulb, GitMerge, Code2 } from 'lucide-react';
const stats = [
  { value: '2', label: 'Live Deployed Apps', color: 'from-emerald-400 to-teal-500' },
  { value: '94.2%', label: 'ML Model Accuracy', color: 'from-indigo-400 to-purple-500' },
  { value: '15+', label: 'Technologies & Tools', color: 'from-pink-400 to-rose-500' },
];
const facts = [
  { icon: MapPin, text: 'Lucknow, Uttar Pradesh, India', color: 'text-primary' },
  { icon: Code2, text: 'Full-Stack & Python Dev', color: 'text-secondary' },
  { icon: GitMerge, text: 'Open Source contributor', color: 'text-emerald-500' },
  { icon: Lightbulb, text: 'Hindi (Native) • English (Proficient)', color: 'text-indigo-500' },
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
                Hey there! I&apos;m <span className="font-bold text-textDark">Jainul Abdeen</span>, an enthusiastic
                Computer Science and Engineering student at the{' '}
                <span className="font-semibold text-primary">University of Lucknow</span> with a strong foundation
                in full-stack web development, Python data science, and modern AI tooling.
              </p>
              <p className="text-textMuted text-lg leading-relaxed">
                I&apos;ve shipped real-world production projects including{' '}
                <span className="font-semibold text-primary">RepoRaft</span> (a community resource hub with topic
                ranking and upvoting) and{' '}
                <span className="font-semibold text-secondary">CalPrice Analytics</span> (a full-stack California housing
                price predictor driven by FastAPI and a Random Forest Regressor scoring 94.2% R² accuracy).
              </p>
              <p className="text-textMuted text-lg leading-relaxed">
                Passionate about building clean, efficient software and always eager to contribute to real-world
                challenges through internships, collaborative builds, and open-source contributions.
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
                  Eager to contribute through internships &amp; open source
                </span>
              </div>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
