'use client';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Server, Code, Brain, Wrench, Database } from 'lucide-react';
const skillCategories = [
  {
    title: 'Frontend',
    icon: Globe,
    color: 'from-emerald-400 to-teal-500',
    bg: 'rgba(16,185,129,0.08)',
    border: 'rgba(16,185,129,0.25)',
    skills: ['HTML5', 'CSS3', 'Tailwind CSS', 'JavaScript ES6+', 'React.js', 'Next.js'],
  },
  {
    title: 'Backend',
    icon: Server,
    color: 'from-indigo-400 to-purple-500',
    bg: 'rgba(99,102,241,0.08)',
    border: 'rgba(99,102,241,0.25)',
    skills: ['Node.js', 'Next.js API Routes', 'REST APIs'],
  },
  {
    title: 'Python',
    icon: Code,
    color: 'from-yellow-400 to-orange-500',
    bg: 'rgba(234,179,8,0.08)',
    border: 'rgba(234,179,8,0.25)',
    skills: ['Python', 'NumPy', 'Pandas', 'Matplotlib'],
  },
  {
    title: 'AI / ML',
    icon: Brain,
    color: 'from-pink-400 to-rose-500',
    bg: 'rgba(236,72,153,0.08)',
    border: 'rgba(236,72,153,0.25)',
    skills: ['AI Fundamentals', 'Prompt Engineering', 'OpenAI API'],
  },
  {
    title: 'Databases',
    icon: Database,
    color: 'from-lime-400 to-green-500',
    bg: 'rgba(132,204,22,0.08)',
    border: 'rgba(132,204,22,0.25)',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    title: 'Tools & DevOps',
    icon: Wrench,
    color: 'from-cyan-400 to-sky-500',
    bg: 'rgba(6,182,212,0.08)',
    border: 'rgba(6,182,212,0.25)',
    skills: ['Git & GitHub', 'VS Code', 'Vercel', 'Linux CLI', 'LaTeX'],
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
export default function Skills() {
  return (
    <section id="skills" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Expertise
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-2">
              Tech <span className="gradient-text">Arsenal</span>
            </h2>
            <p className="text-textMuted mt-3 max-w-xl mx-auto">
              Tools and technologies I use to bring ideas to life
            </p>
          </div>
        </FadeIn>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {skillCategories.map(({ title, icon: Icon, color, bg, border, skills }, i) => (
            <FadeIn key={title} delay={i * 0.08}>
              <motion.div
                className="glass-card p-6 rounded-3xl h-full"
                style={{ background: bg, border: `1px solid ${border}` }}
                whileHover={{ y: -6, transition: { duration: 0.2 } }}
              >
                <div className="flex items-center gap-3 mb-5">
                  <div
                    className={`w-10 h-10 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-md`}
                  >
                    <Icon size={20} className="text-white" />
                  </div>
                  <h3 className="font-bold text-textDark text-lg">{title}</h3>
                </div>
                <div className="flex flex-wrap gap-2">
                  {skills.map((skill) => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
