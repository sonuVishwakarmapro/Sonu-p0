import React from 'react';
import { Video, Youtube, Instagram, Linkedin, ArrowUp, ArrowRight } from 'lucide-react';
import { SiteConfig } from '../types';

interface FooterProps {
  config: SiteConfig;
  onOpenHireForm: () => void;
}

export const Footer: React.FC<FooterProps> = ({ config, onOpenHireForm }) => {
  const currentYear = new Date().getFullYear();

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { label: 'Work', href: '#work' },
    { label: 'Services', href: '#services' },
    { label: 'Process', href: '#process' },
    { label: 'About', href: '#about' },
    { label: 'FAQ', href: '#faq' },
  ];

  return (
    <footer className="bg-[#050505] border-t border-zinc-800 text-zinc-400 text-xs sm:text-sm relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 lg:py-16">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 lg:gap-8 pb-10 border-b border-zinc-800">
          
          {/* Col 1: Brand & Bio */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-[#2563FF] flex items-center justify-center text-white shadow-md shadow-blue-600/30">
                <Video className="w-4 h-4 text-white" />
              </div>
              <span className="font-display font-extrabold text-lg text-white tracking-tight">
                {config.editorName}
              </span>
            </div>

            <p className="text-zinc-400 text-sm leading-relaxed max-w-sm font-normal">
              Video editor focused on storytelling, motion graphics, sound design and polished visual experiences.
            </p>

            <div className="pt-1">
              <a
                href={`mailto:${config.email}`}
                className="text-xs font-mono text-zinc-300 hover:text-[#2563FF] transition-colors underline underline-offset-4"
              >
                {config.email}
              </a>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-4 space-y-3">
            <p className="font-mono text-xs uppercase tracking-widest text-zinc-300 font-bold mb-4">
              Navigation
            </p>
            <div className="grid grid-cols-2 gap-2.5 text-sm">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="text-zinc-400 hover:text-white transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={onOpenHireForm}
                className="text-left text-[#FF8A5B] hover:text-[#ff9f77] font-bold cursor-pointer"
              >
                Hire Me →
              </button>
            </div>
          </div>

          {/* Col 3: Social Links */}
          <div className="md:col-span-3 space-y-4">
            <p className="font-mono text-xs uppercase tracking-widest text-zinc-300 font-bold mb-4">
              Connect & Channels
            </p>

            <div className="flex flex-wrap gap-2.5">
              {config.socialLinks.youtube && (
                <a
                  href={config.socialLinks.youtube}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="YouTube Channel"
                  className="w-10 h-10 rounded-2xl bg-[#0D0D0F] border border-zinc-800 hover:bg-red-600/20 hover:border-red-500/40 hover:text-red-400 flex items-center justify-center text-zinc-400 transition-colors"
                >
                  <Youtube className="w-4 h-4" />
                </a>
              )}

              {config.socialLinks.instagram && (
                <a
                  href={config.socialLinks.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="Instagram Profile"
                  className="w-10 h-10 rounded-2xl bg-[#0D0D0F] border border-zinc-800 hover:bg-pink-600/20 hover:border-pink-500/40 hover:text-pink-400 flex items-center justify-center text-zinc-400 transition-colors"
                >
                  <Instagram className="w-4 h-4" />
                </a>
              )}

              {config.socialLinks.linkedin && (
                <a
                  href={config.socialLinks.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn Profile"
                  className="w-10 h-10 rounded-2xl bg-[#0D0D0F] border border-zinc-800 hover:bg-blue-600/20 hover:border-blue-500/40 hover:text-blue-400 flex items-center justify-center text-zinc-400 transition-colors"
                >
                  <Linkedin className="w-4 h-4" />
                </a>
              )}
            </div>

            <p className="text-[11px] font-mono text-zinc-500">
              Open for remote collaborations worldwide.
            </p>
          </div>

        </div>

        {/* Bottom copyright row */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-zinc-500">
          <p>
            © {currentYear} {config.editorName}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 hover:text-white transition-colors cursor-pointer font-mono"
          >
            <span>Back to top</span>
            <ArrowUp className="w-3.5 h-3.5 text-[#FF8A5B]" />
          </button>
        </div>

      </div>
    </footer>
  );
};
