import React from 'react';
import { ArrowRight, Play, Sparkles } from 'lucide-react';

interface FinalCTAProps {
  onOpenHireForm: () => void;
  onViewWork: () => void;
}

export const FinalCTA: React.FC<FinalCTAProps> = ({ onOpenHireForm, onViewWork }) => {
  return (
    <section
      id="final-cta"
      className="relative py-20 md:py-32 bg-[#050505] border-t border-zinc-900 overflow-hidden"
      aria-label="Final Call to Action"
    >
      {/* Bento style subtle ambient glow backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] sm:w-[900px] h-[350px] bg-gradient-to-r from-[#2563FF]/10 via-[#FF8A5B]/10 to-[#2563FF]/10 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
        
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono tracking-widest text-[#FF8A5B] uppercase mb-6 shadow-inner font-bold">
          <Sparkles className="w-3.5 h-3.5" />
          <span>READY TO COLLABORATE</span>
        </div>

        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white mb-6 leading-tight max-w-3xl mx-auto font-display">
          READY TO TURN YOUR FOOTAGE INTO SOMETHING <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-100 to-zinc-400">WORTH WATCHING?</span>
        </h2>

        <p className="text-base sm:text-lg text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed font-normal">
          Let's talk about your next project. Share your footage, goals, or reference styles and get a clear production plan.
        </p>

        {/* CTA Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4">
          <button
            id="final-cta-hire-btn"
            onClick={onOpenHireForm}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#2563FF] hover:bg-[#1d4ed8] text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-blue-600/25 hover:shadow-orange-500/20 hover:scale-[1.02] transition-all cursor-pointer group"
          >
            <span>Hire Me</span>
            <ArrowRight className="w-4 h-4 text-[#FF8A5B] group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            id="final-cta-work-btn"
            onClick={onViewWork}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-full bg-[#0D0D0F] hover:bg-[#15151F] text-zinc-200 hover:text-white font-bold text-xs uppercase tracking-wider border border-zinc-800 hover:border-zinc-700 transition-all cursor-pointer"
          >
            <Play className="w-3.5 h-3.5 fill-zinc-400 text-zinc-400" />
            <span>View My Work</span>
          </button>
        </div>

      </div>
    </section>
  );
};
