'use client';
import { Mail, Heart } from 'lucide-react';
import { GitHubIcon, LinkedInIcon } from '@/components/BrandIcons';
const socials = [
  { icon: GitHubIcon, href: 'https://github.com/jainul210', label: 'GitHub' },
  { icon: LinkedInIcon, href: 'https://linkedin.com/in/jainul-abdeen-452645394', label: 'LinkedIn' },
  { icon: Mail, href: 'mailto:jainulabdeen210@gmail.com', label: 'Email' },
];
const links = ['About', 'Skills', 'Projects', 'Timeline', 'Contact'];
export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-white/50 py-10 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl btn-gradient flex items-center justify-center font-bold text-white text-sm shadow-md">
              JA
            </div>
            <div>
              <div className="font-bold text-textDark">Jainul Abdeen</div>
              <div className="text-xs text-textMuted">Full-Stack Developer</div>
            </div>
          </div>
          <div className="flex items-center gap-6">
            {links.map((l) => (
              <a
                key={l}
                href={`#${l.toLowerCase()}`}
                className="text-sm text-textMuted hover:text-primary transition-colors"
              >
                {l}
              </a>
            ))}
          </div>
          <div className="flex items-center gap-3">
            {socials.map(({ icon: Icon, href, label }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className="glass-card w-9 h-9 flex items-center justify-center rounded-xl text-textMuted hover:text-primary hover:scale-110 transition-all duration-300"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>
        <div className="mt-8 pt-6 border-t border-white/40 text-center text-xs text-textMuted flex items-center justify-center gap-1">
          <span>© {year} Jainul Abdeen. Built with</span>
          <Heart size={12} className="text-rose-400 fill-rose-400" />
          <span>using Next.js & Tailwind CSS.</span>
        </div>
      </div>
    </footer>
  );
}
