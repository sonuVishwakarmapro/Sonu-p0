import React from 'react';
import { ArrowRight, CheckCircle2, ShieldCheck, Zap, Sparkles } from 'lucide-react';
import { WHY_ME_POINTS } from '../data/config';

interface WhyMeProps {
  onOpenHireForm: () => void;
}

export const WhyMe: React.FC<WhyMeProps> = ({ onOpenHireForm }) => {
  return (
    <section
      id="why-me"
      className="relative py-16 md:py-24 bg-[#050505] border-t border-zinc-900 overflow-hidden"
      aria-label="Value Proposition and Differentiators"
    >
      {/* Ambient background glows */}
      <div className="absolute top-1/3 left-10 w-96 h-96 bg-[#2563FF]/5 blur-[130px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 right-10 w-96 h-96 bg-[#FF8A5B]/5 blur-[130px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono tracking-widest text-[#FF8A5B] uppercase mb-4">
            <span>05 / WHY ME</span>
            <span className="text-zinc-600">•</span>
            <span className="text-white">STANDARDS & ETHOS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 font-display">
            WHY WORK WITH ME?
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            Great editing is more than cutting clips. It's about understanding the story, the audience and the goal behind every video.
          </p>
        </div>

        {/* Bento Grid Split Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-start">
          
          {/* Left Column: Bold Editorial Bento Statement Card */}
          <div className="lg:col-span-5 lg:sticky lg:top-28">
            <div className="rounded-3xl bg-[#0D0D0F] border border-zinc-800 p-8 sm:p-10 shadow-2xl relative overflow-hidden">
              <div className="w-10 h-10 rounded-2xl bg-[#2563FF]/20 border border-[#2563FF]/30 flex items-center justify-center text-[#2563FF] mb-6">
                <Sparkles className="w-5 h-5 text-[#FF8A5B]" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white leading-snug mb-6 font-display">
                "I don't just edit videos. I help turn your footage into a story worth watching."
              </h3>

              <p className="text-sm text-zinc-300 leading-relaxed mb-8 font-normal">
                From high-energy retention hooks to atmospheric documentary pacing, every cut is deliberate, audio is meticulously staged, and visual elements reinforce your narrative.
              </p>

              <div className="pt-6 border-t border-zinc-800">
                <button
                  onClick={onOpenHireForm}
                  className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-[#2563FF] hover:bg-[#1d4ed8] text-white font-bold text-xs uppercase tracking-wider shadow-lg shadow-blue-600/20 transition-all cursor-pointer group"
                >
                  <span>Work Together</span>
                  <ArrowRight className="w-4 h-4 text-[#FF8A5B] group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Bento Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {WHY_ME_POINTS.map((point) => (
              <div
                key={point.number}
                className="group rounded-3xl bg-[#0D0D0F] border border-zinc-800 hover:border-zinc-700 p-6 sm:p-7 transition-all duration-300 hover:bg-[#111114] flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-mono text-2xl font-black italic text-zinc-700 group-hover:text-[#2563FF] transition-colors">
                      0{point.number}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-[#2563FF]" />
                  </div>

                  <h4 className="text-lg sm:text-xl font-bold text-white mb-2 font-display group-hover:text-[#2563FF] transition-colors">
                    {point.title}
                  </h4>

                  <p className="text-zinc-200 text-sm leading-relaxed mb-3 font-medium">
                    "{point.description}"
                  </p>
                </div>

                <p className="text-xs text-zinc-400 leading-relaxed font-normal pt-3 border-t border-zinc-800/80">
                  {point.subtext}
                </p>
              </div>
            ))}
          </div>

        </div>

      </div>
    </section>
  );
};
