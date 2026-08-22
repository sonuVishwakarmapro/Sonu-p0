import React from 'react';
import { ArrowRight, Film, Sparkles, CheckCircle2 } from 'lucide-react';
import { SiteConfig } from '../types';
import { InteractiveVideoPlayer } from './InteractiveVideoPlayer';

interface ShowreelProps {
  config: SiteConfig;
  onOpenHireForm: () => void;
}

export const Showreel: React.FC<ShowreelProps> = ({ config, onOpenHireForm }) => {
  const showreelData = config.showreel;

  return (
    <section
      id="showreel"
      className="relative py-16 md:py-24 bg-[#050505] border-t border-zinc-900 overflow-hidden"
      aria-label="Showreel Presentation"
    >
      {/* Background ambient radial glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[400px] bg-[#2563FF]/10 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono tracking-widest text-[#FF8A5B] uppercase mb-4">
            <span>01 / SHOWREEL</span>
            <span className="text-zinc-600">•</span>
            <span className="text-white">SELECTED CUTS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 font-display">
            A Glimpse Into My Editing Style.
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            A fast-paced showcase of my editing style, storytelling, motion graphics, sound design and visual transitions.
          </p>
        </div>

        {/* Video Player Bento Enclosure */}
        <div className="mb-8 rounded-3xl bg-[#0D0D0F] border border-zinc-800 p-3 sm:p-4 shadow-2xl overflow-hidden">
          <InteractiveVideoPlayer
            videoUrl={showreelData.videoUrl}
            thumbnail={showreelData.thumbnail}
            title="Featured Showreel"
            durationLabel={showreelData.duration}
            accentGlow={true}
          />
        </div>

        {/* Below the video: Bento Breakdown & Quick CTA */}
        <div className="rounded-3xl bg-[#0D0D0F] border border-zinc-800 p-7 sm:p-10 shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            {/* Left: What You Just Watched & Skill Tags */}
            <div className="lg:col-span-7">
              <span className="text-xs font-mono uppercase tracking-widest text-[#FF8A5B] font-bold mb-2 block">
                WHAT YOU JUST WATCHED
              </span>
              
              <h3 className="text-xl sm:text-2xl font-bold text-white mb-3 font-display">
                MORE THAN JUST CUTTING CLIPS
              </h3>

              <p className="text-zinc-300 text-sm sm:text-base leading-relaxed mb-6">
                "I focus on pacing, storytelling and sound to turn raw footage into engaging videos."
              </p>

              {/* Skill Tags */}
              <div className="flex flex-wrap gap-2 sm:gap-2.5">
                {showreelData.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-[#111114] border border-zinc-800 text-xs font-medium text-zinc-200 hover:border-[#2563FF] hover:bg-[#2563FF]/10 transition-colors"
                  >
                    <CheckCircle2 className="w-3.5 h-3.5 text-[#2563FF]" />
                    <span>{skill}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Right: Quick CTA Bento Card */}
            <div className="lg:col-span-5 lg:border-l lg:border-zinc-800 lg:pl-8 flex flex-col justify-center">
              <div className="p-6 sm:p-7 rounded-2xl bg-[#111114] border border-zinc-800">
                <p className="text-xs font-mono uppercase tracking-wider text-[#2563FF] font-bold mb-1">
                  Like What You See?
                </p>
                <h4 className="text-lg sm:text-xl font-bold text-white mb-4 font-display">
                  Let's create something worth watching.
                </h4>
                <button
                  id="showreel-cta-hire-btn"
                  onClick={onOpenHireForm}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-[#2563FF] hover:bg-[#1d4ed8] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/20 hover:scale-[1.01] transition-all cursor-pointer group"
                >
                  <span>Hire Me</span>
                  <ArrowRight className="w-4 h-4 text-[#FF8A5B] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
