'use client';
import { useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'framer-motion';
import { Mail, Send, CheckCircle, AlertCircle } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/components/BrandIcons';

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

const contactLinks = [
  {
    icon: Mail,
    label: 'Email',
    value: 'jainulabdeen210@gmail.com',
    href: 'mailto:jainulabdeen210@gmail.com',
    color: 'from-emerald-400 to-teal-500',
  },
  {
    icon: LinkedInIcon,
    label: 'LinkedIn',
    value: 'jainul-abdeen-452645394',
    href: 'https://linkedin.com/in/jainul-abdeen-452645394',
    color: 'from-indigo-400 to-purple-500',
  },
  {
    icon: GitHubIcon,
    label: 'GitHub',
    value: 'github.com/jainul210',
    href: 'https://github.com/jainul210',
    color: 'from-pink-400 to-rose-500',
  },
];

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState(null); // null | 'success' | 'error'
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    // Simulate form submission
    await new Promise((r) => setTimeout(r, 1500));
    setLoading(false);
    setStatus('success');
    setForm({ name: '', email: '', message: '' });
    setTimeout(() => setStatus(null), 5000);
  };

  return (
    <section id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <FadeIn>
          <div className="text-center mb-16">
            <span className="text-sm font-semibold text-primary uppercase tracking-widest">
              Get In Touch
            </span>
            <h2 className="text-4xl md:text-5xl font-black mt-2">
              Let&apos;s <span className="gradient-text">Connect</span>
            </h2>
            <p className="text-textMuted mt-3 max-w-xl mx-auto">
              Have a project in mind or want to collaborate? I&apos;d love to hear from you.
            </p>
          </div>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-10">
          {/* Contact Links */}
          <FadeIn delay={0.1}>
            <div className="space-y-5">
              <h3 className="font-bold text-textDark text-xl mb-6">Reach me directly</h3>
              {contactLinks.map(({ icon: Icon, label, value, href, color }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="glass-card flex items-center gap-4 p-5 rounded-2xl hover:scale-[1.02] transition-transform duration-200 block"
                  whileHover={{ x: 4 }}
                >
                  <div
                    className={`w-12 h-12 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center shadow-md flex-shrink-0`}
                  >
                    <Icon size={20} className="text-white" />
                  </div>
                  <div>
                    <div className="text-xs text-textMuted font-medium uppercase tracking-wide">{label}</div>
                    <div className="font-semibold text-textDark text-sm mt-0.5">{value}</div>
                  </div>
                </motion.a>
              ))}

              {/* Response time */}
              <div className="glass-card p-4 rounded-2xl flex items-center gap-3 mt-4">
                <span className="relative flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-primary" />
                </span>
                <span className="text-sm text-textMuted">
                  Typically responds within <span className="font-semibold text-textDark">24 hours</span>
                </span>
              </div>
            </div>
          </FadeIn>

          {/* Form */}
          <FadeIn delay={0.2}>
            <div className="glass-card p-8 rounded-3xl">
              <h3 className="font-bold text-textDark text-xl mb-6">Send a message</h3>

              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-5 flex items-center gap-3 bg-emerald-50 border border-emerald-200 text-emerald-700 rounded-xl px-4 py-3 text-sm font-medium"
                >
                  <CheckCircle size={18} />
                  Message sent! I&apos;ll get back to you soon.
                </motion.div>
              )}

              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mb-5 flex items-center gap-3 bg-red-50 border border-red-200 text-red-600 rounded-xl px-4 py-3 text-sm font-medium"
                >
                  <AlertCircle size={18} />
                  Something went wrong. Please try again.
                </motion.div>
              )}

              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-xs font-semibold text-textMuted uppercase tracking-wide mb-1.5">
                    Your Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="contact-name"
                    value={form.name}
                    onChange={handleChange}
                    required
                    placeholder="John Doe"
                    className="input-glass"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-textMuted uppercase tracking-wide mb-1.5">
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="contact-email"
                    value={form.email}
                    onChange={handleChange}
                    required
                    placeholder="john@example.com"
                    className="input-glass"
                  />
                </div>
                <div>
                  <label className="block text-xs font-semibold text-textMuted uppercase tracking-wide mb-1.5">
                    Message
                  </label>
                  <textarea
                    name="message"
                    id="contact-message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    required
                    placeholder="Tell me about your project or opportunity..."
                    className="input-glass resize-none"
                  />
                </div>

                <motion.button
                  type="submit"
                  disabled={loading}
                  className="btn-gradient w-full py-3 rounded-xl font-semibold flex items-center justify-center gap-2 disabled:opacity-70"
                  whileHover={{ scale: 1.01 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {loading ? (
                    <>
                      <span className="w-4 h-4 border-2 border-white/40 border-t-white rounded-full animate-spin" />
                      Sending...
                    </>
                  ) : (
                    <>
                      <Send size={16} />
                      Send Message
                    </>
                  )}
                </motion.button>
              </form>
            </div>
          </FadeIn>
        </div>
      </div>
    </section>
  );
}
