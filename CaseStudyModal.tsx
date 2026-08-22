import React, { useEffect } from 'react';
import { X, CheckCircle2, Sparkles, Clock, Package, Play, ArrowRight } from 'lucide-react';
import { PortfolioProject } from '../types';
import { InteractiveVideoPlayer } from './InteractiveVideoPlayer';

interface CaseStudyModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onOpenHireForm: () => void;
}

export const CaseStudyModal: React.FC<CaseStudyModalProps> = ({
  project,
  onClose,
  onOpenHireForm
}) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };

    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project || !project.caseStudy) return null;

  const { caseStudy } = project;

  return (
    <div
      id="case-study-lightbox-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 md:p-8 bg-black/85 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative w-full max-w-4xl my-8 rounded-3xl bg-[#0D0D0F] border border-zinc-800 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Top Header Bar */}
        <div className="p-5 sm:p-6 border-b border-zinc-800 flex items-center justify-between bg-[#111114] sticky top-0 z-20">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-[10px] font-mono tracking-widest text-[#FF8A5B] uppercase font-bold">
                CASE STUDY
              </span>
              <span className="text-zinc-600">•</span>
              <span className="text-[10px] font-mono text-zinc-400 uppercase font-bold">
                {project.type}
              </span>
            </div>
            <h2 className="font-display font-bold text-white text-lg sm:text-2xl">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#0D0D0F] hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors cursor-pointer"
            aria-label="Close case study"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Content Scroll Area */}
        <div className="p-6 sm:p-8 md:p-10 space-y-8 max-h-[80vh] overflow-y-auto">
          
          {/* Integrated Video Player */}
          <div>
            <p className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 flex items-center gap-2 font-bold">
              <Play className="w-3.5 h-3.5 text-[#2563FF]" />
              <span>FINAL EDIT PREVIEW</span>
            </p>
            <InteractiveVideoPlayer
              videoUrl={project.videoUrl}
              thumbnail={project.thumbnail}
              title={project.title}
              durationLabel={project.duration || "3:00"}
              accentGlow={false}
            />
          </div>

          {/* Overview & Project Meta Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-5 rounded-2xl bg-[#111114] border border-zinc-800">
            <div>
              <span className="text-[11px] font-mono text-zinc-500 uppercase block mb-1">Category</span>
              <span className="text-sm font-semibold text-white font-mono">{project.category}</span>
            </div>

            {caseStudy.turnaround && (
              <div>
                <span className="text-[11px] font-mono text-zinc-500 uppercase block mb-1">Editing Turnaround</span>
                <span className="text-sm font-semibold text-[#FF8A5B] font-mono flex items-center gap-1.5">
                  <Clock className="w-3.5 h-3.5" /> {caseStudy.turnaround}
                </span>
              </div>
            )}

            <div>
              <span className="text-[11px] font-mono text-zinc-500 uppercase block mb-1">Software Used</span>
              <span className="text-sm font-semibold text-[#2563FF] font-mono">Premiere & AE</span>
            </div>
          </div>

          {/* Challenge & Approach Section */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            
            {/* Challenge Card */}
            <div className="p-6 rounded-2xl bg-[#111114] border border-zinc-800">
              <span className="text-xs font-mono uppercase tracking-wider text-red-400 font-bold mb-2 block">
                01 / THE CHALLENGE
              </span>
              <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-normal">
                "{caseStudy.challenge}"
              </p>
            </div>

            {/* Approach Card */}
            <div className="p-6 rounded-2xl bg-[#111114] border border-zinc-800">
              <span className="text-xs font-mono uppercase tracking-wider text-[#2563FF] font-bold mb-2 block">
                02 / MY APPROACH
              </span>
              <p className="text-sm sm:text-base text-zinc-200 leading-relaxed font-normal">
                "{caseStudy.approach}"
              </p>
            </div>

          </div>

          {/* Detailed Editing Breakdown */}
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-widest text-[#FF8A5B] font-bold block">
              03 / EDITING WORK & EXECUTION
            </span>

            <div className="grid grid-cols-1 gap-2.5">
              {caseStudy.editingWork.map((work, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-3 p-4 rounded-2xl bg-[#111114] border border-zinc-800 text-sm text-zinc-200 font-normal"
                >
                  <CheckCircle2 className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                  <span>{work}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Key Techniques & Deliverables */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <div>
              <p className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 font-bold">
                Key Techniques Used:
              </p>
              <div className="flex flex-wrap gap-2">
                {caseStudy.techniques.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 rounded-full bg-[#2563FF]/15 text-[#2563FF] border border-[#2563FF]/30 text-xs font-mono"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>

            {caseStudy.deliverables && (
              <div>
                <p className="text-xs font-mono uppercase tracking-wider text-zinc-400 mb-3 font-bold">
                  Final Deliverables:
                </p>
                <div className="space-y-1.5">
                  {caseStudy.deliverables.map((del, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-zinc-300">
                      <Package className="w-3.5 h-3.5 text-zinc-500" />
                      <span>{del}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>

          {/* Bottom Action Row inside Case Study */}
          <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <p className="text-sm font-display font-bold text-white">
                Interested in achieving a similar edit quality for your channel?
              </p>
              <p className="text-xs text-zinc-400 font-normal">
                Let's discuss footage scope, pacing preferences, and timeline.
              </p>
            </div>

            <button
              onClick={() => {
                onClose();
                onOpenHireForm();
              }}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-[#2563FF] hover:bg-[#1d4ed8] text-white text-xs font-bold uppercase font-mono tracking-wider shadow-md shadow-blue-600/20 transition-all cursor-pointer"
            >
              <span>Hire Me For Similar Project</span>
              <ArrowRight className="w-4 h-4 text-[#FF8A5B]" />
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};
