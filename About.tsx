import React from 'react';
import { 
  User, 
  MapPin, 
  Layers, 
  Cpu, 
  Sparkles, 
  Check, 
  ArrowRight,
  Sliders
} from 'lucide-react';
import { SiteConfig } from '../types';
import { EDITING_SPECS } from '../data/config';

interface AboutProps {
  config: SiteConfig;
  onOpenHireForm: () => void;
}

export const About: React.FC<AboutProps> = ({ config, onOpenHireForm }) => {
  return (
    <section
      id="about"
      className="relative py-16 md:py-24 bg-[#050505] overflow-hidden"
      aria-label="About the Video Editor"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-96 h-96 bg-[#2563FF]/5 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono tracking-widest text-[#FF8A5B] uppercase mb-4">
            <span>06 / ABOUT</span>
            <span className="text-zinc-600">•</span>
            <span className="text-white">BEHIND THE TIMELINE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 font-display">
            ABOUT ME
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            Crafting deliberate edits with a focus on audience connection, visual clarity, and audio precision.
          </p>
        </div>

        {/* Bento Grid Content */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5">
          
          {/* Main Story Bento Card */}
          <div className="lg:col-span-7 rounded-3xl bg-[#0D0D0F] border border-zinc-800 p-8 sm:p-10 shadow-2xl flex flex-col justify-between">
            <div className="space-y-6">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#2563FF]/15 text-[#2563FF] text-xs font-mono border border-[#2563FF]/30">
                <Sparkles className="w-3.5 h-3.5 text-[#FF8A5B]" />
                <span>FREELANCE POST-PRODUCTION EDITOR</span>
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-tight font-display">
                "Hi, I'm <span className="text-[#2563FF]">{config.editorName}</span>, a video editor focused on turning raw footage into clear, engaging and polished visual stories."
              </h3>

              <p className="text-zinc-300 text-base leading-relaxed font-normal">
                "I work with creators, YouTubers and brands to shape footage into videos that are easier to watch, understand and remember."
              </p>

              <p className="text-zinc-400 text-sm leading-relaxed font-normal">
                My approach combines narrative pacing with kinetic visual design. Every cut has intent — whether it is tightening dialog to maintain flow, accentuating jokes with rhythmic timing, or scoring emotional beats with layered audio textures.
              </p>
            </div>

            {/* Workflow Strengths Grid */}
            <div className="pt-8 mt-6 border-t border-zinc-800 space-y-3">
              <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-bold">
                Standard Editing Workflow Features:
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                {EDITING_SPECS.workflowStrengths.map((strength, idx) => (
                  <div key={idx} className="flex items-center gap-2 text-xs sm:text-sm text-zinc-300">
                    <div className="w-4 h-4 rounded-full bg-[#2563FF]/20 text-[#2563FF] flex items-center justify-center shrink-0">
                      <Check className="w-2.5 h-2.5" />
                    </div>
                    <span>{strength}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Bento Column: Technical Spec & Production Suite */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Meta Bento Card */}
            <div className="rounded-3xl bg-[#0D0D0F] border border-zinc-800 p-6 shadow-xl space-y-3">
              <div className="p-3.5 rounded-2xl bg-[#111114] border border-zinc-800 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400">Editor</span>
                <span className="text-xs font-semibold text-white font-mono">{config.editorName}</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#111114] border border-zinc-800 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400">Location</span>
                <span className="text-xs font-semibold text-white font-mono">{config.location}</span>
              </div>

              <div className="p-3.5 rounded-2xl bg-[#111114] border border-zinc-800 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-400">Specialization</span>
                <span className="text-xs font-bold text-[#FF8A5B] font-mono">YouTube & Short-Form</span>
              </div>
            </div>

            {/* Software Suite Bento Card */}
            <div className="rounded-3xl bg-[#0D0D0F] border border-zinc-800 p-6 shadow-xl space-y-4">
              <p className="text-xs font-mono uppercase tracking-wider text-zinc-400 flex items-center gap-2 font-bold">
                <Cpu className="w-4 h-4 text-[#2563FF]" />
                <span>Production Software Suite</span>
              </p>

              <div className="space-y-2">
                {EDITING_SPECS.primaryTools.map((tool, idx) => (
                  <div
                    key={idx}
                    className="p-3 rounded-2xl bg-[#111114] border border-zinc-800 flex items-center justify-between"
                  >
                    <span className="text-xs font-medium text-white">{tool.name}</span>
                    <span className="text-[10px] font-mono text-zinc-400">{tool.category}</span>
                  </div>
                ))}
              </div>

              <button
                onClick={onOpenHireForm}
                className="w-full inline-flex items-center justify-center gap-2 py-3 px-4 rounded-full bg-[#111114] hover:bg-[#2563FF] border border-zinc-800 hover:border-[#2563FF] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer group"
              >
                <span>Inquire About Availability</span>
                <ArrowRight className="w-4 h-4 text-[#FF8A5B] group-hover:text-white group-hover:translate-x-1 transition-transform" />
              </button>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
};
