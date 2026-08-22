import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowRight, Video } from 'lucide-react';
import { SiteConfig } from '../types';

interface NavbarProps {
  config: SiteConfig;
  onOpenHireForm: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ config, onOpenHireForm }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 40) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Check active section
      const sections = ['work', 'services', 'process', 'about', 'faq', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Work', href: '#work', id: 'work' },
    { label: 'Services', href: '#services', id: 'services' },
    { label: 'Process', href: '#process', id: 'process' },
    { label: 'About', href: '#about', id: 'about' },
    { label: 'FAQ', href: '#faq', id: 'faq' },
  ];

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.replace('#', '');
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#050505]/95 backdrop-blur-md border-b border-zinc-800 py-3.5 shadow-2xl'
          : 'bg-transparent py-5 border-b border-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand Name */}
          <a
            id="nav-logo"
            href="#hero"
            onClick={(e) => handleNavClick(e, '#hero')}
            className="flex items-center space-x-2.5 group cursor-pointer text-white focus:outline-none"
            aria-label="Scroll to top"
          >
            <div className="w-8 h-8 bg-[#2563FF] rounded-sm flex items-center justify-center font-bold text-xs italic text-white shadow-lg shadow-blue-500/20 group-hover:scale-105 transition-transform">
              {config.editorName ? config.editorName.charAt(0).toUpperCase() : 'V'}
            </div>
            <span className="text-xl font-bold tracking-tight text-white group-hover:text-[#2563FF] transition-colors">
              {config.editorName}
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center space-x-8 text-xs lg:text-sm font-medium text-zinc-400 uppercase tracking-widest" aria-label="Main Navigation">
            {navLinks.map((link) => {
              const isActive = activeSection === link.id;
              return (
                <a
                  key={link.id}
                  id={`nav-link-${link.id}`}
                  href={link.href}
                  onClick={(e) => handleNavClick(e, link.href)}
                  className={`transition-colors cursor-pointer ${
                    isActive
                      ? 'text-[#2563FF] font-bold'
                      : 'hover:text-[#2563FF]'
                  }`}
                >
                  {link.label}
                </a>
              );
            })}
          </nav>

          {/* Right Status + CTA Button */}
          <div className="hidden md:flex items-center space-x-6">
            {config.isAvailableForProjects && (
              <div className="flex items-center text-[10px] text-zinc-400 uppercase tracking-tight">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                <span>Available for Projects</span>
              </div>
            )}

            <button
              id="nav-hire-me-btn"
              onClick={onOpenHireForm}
              className="bg-[#2563FF] hover:bg-[#1d4ed8] text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all shadow-lg shadow-blue-600/20 cursor-pointer group flex items-center gap-1.5"
            >
              <span>Hire Me</span>
              <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
            </button>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden items-center gap-2">
            <button
              id="mobile-menu-toggle-btn"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-lg bg-zinc-900 border border-zinc-800 text-zinc-300 hover:text-white hover:bg-zinc-800 focus:outline-none"
              aria-label={mobileMenuOpen ? 'Close Menu' : 'Open Menu'}
              aria-expanded={mobileMenuOpen}
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Animated Dropdown Menu */}
      {mobileMenuOpen && (
        <div
          id="mobile-nav-menu"
          className="md:hidden fixed inset-x-0 top-[62px] bg-[#0D0D0F]/98 backdrop-blur-xl border-b border-zinc-800 px-6 py-6 shadow-2xl transition-all duration-300 animate-in fade-in slide-in-from-top-4"
        >
          <div className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={(e) => handleNavClick(e, link.href)}
                className="flex items-center justify-between py-3 px-4 rounded-xl text-xs font-bold uppercase tracking-widest text-zinc-300 hover:text-white hover:bg-zinc-800/60 transition-colors"
              >
                <span>{link.label}</span>
                <ArrowRight className="w-4 h-4 text-zinc-600" />
              </a>
            ))}

            <div className="pt-3 mt-2 border-t border-zinc-800">
              <button
                id="mobile-hire-me-btn"
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenHireForm();
                }}
                className="w-full flex items-center justify-center gap-2 py-3.5 px-4 rounded-full bg-[#2563FF] hover:bg-[#1d4ed8] text-white font-bold uppercase tracking-wider text-xs shadow-lg shadow-blue-600/30 transition-all cursor-pointer"
              >
                <span>Hire Me &rarr;</span>
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};
