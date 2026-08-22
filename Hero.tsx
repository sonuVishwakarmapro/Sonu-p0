import React from 'react';
import { ArrowRight, Play, CheckCircle2, Film, Sparkles, Volume2, TrendingUp } from 'lucide-react';
import { SiteConfig } from '../types';

interface HeroProps {
  config: SiteConfig;
  onOpenHireForm: () => void;
  onViewWork: () => void;
  onViewShowreel?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ config, onOpenHireForm, onViewWork, onViewShowreel }) => {
  const handleShowreelClick = onViewShowreel || onViewWork;
  return (
    <section
      id="hero"
      className="relative pt-28 pb-12 md:pt-32 md:pb-16 overflow-hidden select-none"
      aria-label="Introduction and Bento Overview"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[500px] bg-[#2563FF]/10 blur-[140px] pointer-events-none -z-10 rounded-full" />
      <div className="absolute inset-0 bg-grid-subtle opacity-40 pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Bento Grid Layout Container */}
        <div className="grid grid-cols-12 gap-4 lg:gap-5">
          
          {/* Main Headline Hero Bento Card */}
          <div className="col-span-12 lg:col-span-7 bg-[#0D0D0F] border border-zinc-800 rounded-3xl p-8 sm:p-10 md:p-12 flex flex-col justify-center relative overflow-hidden group shadow-2xl">
            <div className="absolute top-0 right-0 w-72 h-72 bg-[#2563FF] opacity-10 blur-[100px] pointer-events-none" />
            <div className="absolute bottom-0 left-0 w-48 h-48 bg-[#FF8A5B] opacity-5 blur-[80px] pointer-events-none" />

            <div className="flex items-center gap-3 mb-4">
              <span className="text-[#FF8A5B] text-xs font-bold uppercase tracking-[0.3em]">
                {config.roleTitle || 'Video Editor'}
              </span>
              {config.isAvailableForProjects && (
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-green-500/10 border border-green-500/20 text-[10px] font-mono text-green-400 uppercase tracking-wider">
                  <span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-pulse" />
                  <span>Available</span>
                </span>
              )}
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold leading-[1.0] tracking-tighter mb-6 text-white font-display">
              I Turn Raw Footage<br />
              Into Videos People<br />
              <span className="text-zinc-500 italic">Want to Watch.</span>
            </h1>

            <p className="text-zinc-400 max-w-lg text-base sm:text-lg leading-relaxed mb-8 font-normal">
              {config.subheadline}
            </p>

            <div className="flex flex-wrap items-center gap-3.5">
              <button
                id="hero-view-work-btn"
                onClick={onViewWork}
                className="px-7 py-3.5 bg-white hover:bg-zinc-200 text-black font-bold rounded-xl text-xs sm:text-sm uppercase tracking-wider transition-all cursor-pointer shadow-lg shadow-white/5 flex items-center gap-2"
              >
                <span>View My Work</span>
                <Play className="w-3.5 h-3.5 fill-black" />
              </button>

              <button
                id="hero-hire-me-btn"
                onClick={onOpenHireForm}
                className="px-7 py-3.5 border border-zinc-700 hover:border-zinc-500 font-bold rounded-xl text-xs sm:text-sm text-white hover:bg-zinc-800/80 transition-all cursor-pointer flex items-center gap-2"
              >
                <span>Hire Me</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#FF8A5B]" />
              </button>
            </div>
          </div>

          {/* Top-Right Showreel Bento Card */}
          <div 
            onClick={handleShowreelClick}
            className="col-span-12 lg:col-span-5 bg-[#111114] border border-zinc-800 rounded-3xl relative overflow-hidden group min-h-[300px] flex flex-col justify-end p-7 sm:p-8 cursor-pointer shadow-2xl hover:border-zinc-700 transition-all"
          >
            <img
              src={config.showreel.thumbnail || "https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&w=1200&q=80"}
              alt="Showreel Preview"
              referrerPolicy="no-referrer"
              className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-75 contrast-110"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/10 z-10" />

            {/* Play Button Icon */}
            <div className="absolute inset-0 flex items-center justify-center z-20">
              <div className="w-16 h-16 bg-white/10 backdrop-blur-md rounded-full flex items-center justify-center border border-white/25 group-hover:scale-110 group-hover:bg-[#2563FF] transition-all shadow-2xl">
                <Play className="w-6 h-6 fill-white ml-0.5" />
              </div>
            </div>

            <div className="relative z-20">
              <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded bg-black/60 backdrop-blur-md border border-white/10 text-[10px] text-zinc-300 font-mono uppercase tracking-widest mb-2">
                <Sparkles className="w-3 h-3 text-[#FF8A5B]" />
                <span>Showreel 2024 • {config.showreel.duration}</span>
              </div>
              <p className="text-lg sm:text-xl font-bold text-white font-display">A Glimpse Into My Style</p>
            </div>
          </div>

          {/* Bento Card: YouTube Editing (Accent Blue) */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 bg-[#2563FF] rounded-3xl p-6 sm:p-7 flex flex-col justify-between text-white shadow-xl min-h-[190px] relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/10 rounded-bl-full pointer-events-none" />
            <div className="text-4xl font-bold italic opacity-30 font-display">01</div>
            <div>
              <h3 className="text-base font-bold mb-1.5 uppercase tracking-wide">YouTube Editing</h3>
              <p className="text-xs leading-relaxed text-blue-100 font-normal">
                Pacing, dynamic B-roll, retention hooks & sound design crafted for audience growth.
              </p>
            </div>
          </div>

          {/* Bento Card: Views Generated Stat Tile */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-3 bg-[#111114] border border-zinc-800 rounded-3xl p-6 sm:p-7 flex items-center justify-between shadow-xl">
            <div>
              <p className="text-3xl sm:text-4xl font-extrabold mb-1 tracking-tighter text-white font-display">50M+</p>
              <p className="text-[10px] text-zinc-400 uppercase tracking-widest font-mono">Total Views Generated</p>
            </div>
            <div className="w-12 h-12 bg-zinc-800/90 rounded-full flex items-center justify-center border border-zinc-700 shadow-inner shrink-0">
              <TrendingUp className="w-5 h-5 text-[#2563FF]" />
            </div>
          </div>

          {/* Bento Card: Creator Testimonial & Portrait */}
          <div className="col-span-12 sm:col-span-12 lg:col-span-6 bg-[#0D0D0F] border border-zinc-800 rounded-3xl p-6 sm:p-7 flex items-center space-x-5 shadow-xl">
            <div className="w-16 h-16 sm:w-20 sm:h-20 rounded-2xl bg-zinc-800 overflow-hidden shrink-0 border border-zinc-700 relative">
              <img
                src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=300&q=80"
                alt="Featured Creator Portrait"
                referrerPolicy="no-referrer"
                className="w-full h-full object-cover grayscale-[10%]"
              />
            </div>
            <div>
              <p className="text-xs sm:text-sm text-zinc-300 mb-1.5 italic font-normal leading-relaxed">
                "He doesn't just cut clips, he builds stories that actually keep people watching until the end."
              </p>
              <p className="text-[10px] font-bold text-[#FF8A5B] uppercase tracking-wider font-mono">
                — Featured YouTube Creator
              </p>
            </div>
          </div>

          {/* Bento Card: Shorts & Reels (Accent Peach) */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-4 bg-[#FF8A5B] rounded-3xl p-6 sm:p-7 text-black flex flex-col justify-between shadow-xl min-h-[170px] relative overflow-hidden">
            <div className="text-4xl font-bold italic opacity-30 font-display">02</div>
            <div>
              <h3 className="text-base font-bold mb-1 uppercase tracking-wide text-black">Shorts & Reels</h3>
              <p className="text-xs font-medium text-black/85 leading-relaxed">
                Retention-focused short-form kinetic edits for TikTok, YouTube Shorts & IG Reels.
              </p>
            </div>
          </div>

          {/* Bento Pro Tools Strip */}
          <div className="col-span-12 sm:col-span-6 lg:col-span-8 bg-[#111114] border border-zinc-800 rounded-3xl px-6 sm:px-8 py-5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 shadow-xl">
            <div className="flex flex-wrap items-center gap-4 sm:gap-6">
              <span className="text-[11px] font-bold uppercase tracking-widest text-[#2563FF] font-mono">Premiere Pro</span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 font-mono">After Effects</span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 font-mono">DaVinci Resolve</span>
              <span className="text-[11px] font-bold uppercase tracking-widest text-zinc-400 font-mono">Adobe Audition</span>
            </div>
            <div className="text-[10px] text-zinc-500 font-mono uppercase tracking-widest">
              PRO EDITING SUITE
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

