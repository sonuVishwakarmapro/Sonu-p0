import React, { useState } from 'react';
import { 
  Compass, 
  FileCode, 
  Film, 
  MessageSquare, 
  Rocket, 
  ArrowRight,
  CheckCircle2
} from 'lucide-react';
import { PROCESS_STEPS } from '../data/config';
import { ProcessStep } from '../types';

interface ProcessProps {
  onOpenHireForm: () => void;
}

export const Process: React.FC<ProcessProps> = ({ onOpenHireForm }) => {
  const [activeStepIndex, setActiveStepIndex] = useState(0);

  const getStepIcon = (index: number) => {
    switch (index) {
      case 0:
        return <Compass className="w-5 h-5" />;
      case 1:
        return <FileCode className="w-5 h-5" />;
      case 2:
        return <Film className="w-5 h-5" />;
      case 3:
        return <MessageSquare className="w-5 h-5" />;
      case 4:
        return <Rocket className="w-5 h-5" />;
      default:
        return <Film className="w-5 h-5" />;
    }
  };

  const activeStep = PROCESS_STEPS[activeStepIndex] || PROCESS_STEPS[0];

  return (
    <section
      id="process"
      className="relative py-16 md:py-24 bg-[#050505] border-t border-zinc-900 overflow-hidden"
      aria-label="Workflow and Editing Process"
    >
      {/* Background soft ambient gradient */}
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[600px] bg-[#2563FF]/5 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono tracking-widest text-[#FF8A5B] uppercase mb-4">
            <span>03 / PROCESS</span>
            <span className="text-zinc-600">•</span>
            <span className="text-white">HOW WE WORK</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 font-display">
            A SIMPLE PROCESS. A BETTER FINAL VIDEO.
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            From your first brief to the final export, I keep the editing process simple, clear and focused on your vision.
          </p>
        </div>

        {/* Interactive Desktop Step Selector & Connected Flow */}
        <div className="mb-10">
          
          {/* Step Badges Row (Desktop) */}
          <div className="hidden lg:grid grid-cols-5 gap-3 relative">
            {PROCESS_STEPS.map((step, idx) => {
              const isSelected = activeStepIndex === idx;
              return (
                <button
                  key={step.stepNumber}
                  id={`process-step-btn-${idx}`}
                  onClick={() => setActiveStepIndex(idx)}
                  className={`p-4 rounded-2xl text-left transition-all duration-300 cursor-pointer border ${
                    isSelected
                      ? 'bg-[#0D0D0F] border-[#2563FF] shadow-lg shadow-blue-500/10 scale-102'
                      : 'bg-[#0D0D0F] border-zinc-800 hover:border-zinc-700 hover:bg-[#111114]'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className={`w-8 h-8 rounded-xl flex items-center justify-center text-xs font-mono font-bold ${
                      isSelected
                        ? 'bg-[#2563FF] text-white shadow-md shadow-blue-500/30'
                        : 'bg-zinc-800 text-zinc-400'
                    }`}>
                      0{step.stepNumber}
                    </span>
                    <span className={`text-[10px] font-mono tracking-widest uppercase ${
                      isSelected ? 'text-[#FF8A5B] font-bold' : 'text-zinc-500'
                    }`}>
                      {step.phase}
                    </span>
                  </div>

                  <h4 className={`text-sm font-semibold truncate font-display ${isSelected ? 'text-white' : 'text-zinc-400'}`}>
                    {step.title}
                  </h4>
                </button>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Card (Desktop Showcase) */}
          <div className="hidden lg:block mt-5 rounded-3xl bg-[#0D0D0F] border border-zinc-800 p-8 lg:p-10 shadow-2xl relative overflow-hidden">
            <div className="absolute right-0 bottom-0 w-96 h-96 bg-gradient-to-tl from-[#2563FF]/10 via-transparent to-transparent pointer-events-none rounded-br-3xl" />
            
            <div className="grid grid-cols-12 gap-8 items-center">
              <div className="col-span-7">
                <div className="flex items-center gap-3 mb-3">
                  <span className="px-3 py-1 rounded-full bg-[#2563FF]/20 text-[#2563FF] font-mono text-xs font-bold border border-[#2563FF]/30">
                    PHASE 0{activeStep.stepNumber} // {activeStep.phase}
                  </span>
                </div>

                <h3 className="text-2xl lg:text-3xl font-bold text-white mb-3 font-display">
                  {activeStep.title}
                </h3>

                <p className="text-zinc-300 text-base leading-relaxed mb-6 font-normal">
                  "{activeStep.description}"
                </p>

                <div className="space-y-2.5">
                  <p className="text-xs font-mono uppercase tracking-wider text-zinc-500 font-semibold">What happens in this phase:</p>
                  {activeStep.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-center gap-2.5 text-sm text-zinc-300">
                      <CheckCircle2 className="w-4 h-4 text-[#2563FF] shrink-0" />
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="col-span-5 flex flex-col justify-center items-center text-center p-7 rounded-2xl bg-[#111114] border border-zinc-800 shadow-inner">
                <div className="w-16 h-16 rounded-2xl bg-[#2563FF]/10 border border-[#2563FF]/30 flex items-center justify-center text-[#2563FF] mb-4 shadow-sm">
                  {getStepIcon(activeStepIndex)}
                </div>
                <p className="text-xs font-mono text-zinc-400 uppercase tracking-wider mb-1">Guaranteed Standard</p>
                <p className="font-display text-base font-bold text-white mb-4">Pacing, Clarity & Precision</p>
                <div className="w-full h-1.5 bg-zinc-800 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-gradient-to-r from-[#2563FF] to-[#FF8A5B] transition-all duration-500"
                    style={{ width: `${((activeStepIndex + 1) / PROCESS_STEPS.length) * 100}%` }}
                  />
                </div>
                <span className="text-[10px] font-mono text-zinc-500 mt-2">
                  Step {activeStepIndex + 1} of 5 in Editing Pipeline
                </span>
              </div>
            </div>
          </div>

          {/* Mobile & Tablet Vertical Timeline Layout */}
          <div className="lg:hidden space-y-4">
            {PROCESS_STEPS.map((step, idx) => (
              <div
                key={step.stepNumber}
                className="rounded-2xl bg-[#0D0D0F] border border-zinc-800 p-6 relative overflow-hidden"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2.5">
                    <span className="w-7 h-7 rounded-lg bg-[#2563FF]/20 text-[#2563FF] font-mono text-xs font-bold flex items-center justify-center border border-[#2563FF]/30">
                      0{step.stepNumber}
                    </span>
                    <span className="text-xs font-mono tracking-wider text-[#FF8A5B] uppercase font-bold">
                      {step.phase}
                    </span>
                  </div>
                </div>

                <h4 className="text-lg font-bold text-white mb-2 font-display">
                  {step.title}
                </h4>

                <p className="text-sm text-zinc-300 leading-relaxed mb-4">
                  "{step.description}"
                </p>

                <div className="space-y-2 pt-3 border-t border-zinc-800">
                  {step.details.map((detail, dIdx) => (
                    <div key={dIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                      <span className="text-[#2563FF] mt-0.5">•</span>
                      <span>{detail}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>

        </div>

        {/* Process Final Bento Guarantee Banner */}
        <div className="rounded-3xl bg-[#0D0D0F] border border-zinc-800 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-xl">
          <div>
            <p className="text-lg sm:text-xl font-bold text-white mb-1 font-display">
              "You focus on creating. I handle the edit."
            </p>
            <p className="text-xs sm:text-sm text-zinc-400 font-normal">
              Organized revisions, clear timestamps, and zero surprises on timeline.
            </p>
          </div>

          <button
            onClick={onOpenHireForm}
            className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2563FF] hover:bg-[#1d4ed8] text-white text-xs font-bold uppercase tracking-wider transition-all cursor-pointer group shrink-0 shadow-lg shadow-blue-600/20"
          >
            <span>Start a Project</span>
            <ArrowRight className="w-4 h-4 text-[#FF8A5B] group-hover:translate-x-1 transition-transform" />
          </button>
        </div>

      </div>
    </section>
  );
};
