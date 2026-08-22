import React, { useEffect } from 'react';
import { X, Clock, Sparkles, CheckCircle2, ArrowRight } from 'lucide-react';
import { PortfolioProject } from '../types';
import { InteractiveVideoPlayer } from './InteractiveVideoPlayer';

interface VideoModalProps {
  project: PortfolioProject | null;
  onClose: () => void;
  onOpenCaseStudy: (project: PortfolioProject) => void;
  onOpenHireForm: () => void;
}

export const VideoModal: React.FC<VideoModalProps> = ({
  project,
  onClose,
  onOpenCaseStudy,
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

  if (!project) return null;

  return (
    <div
      id="video-lightbox-modal"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-xl animate-in fade-in duration-200"
      onClick={onClose}
      aria-modal="true"
      role="dialog"
    >
      <div
        className="relative w-full max-w-4xl rounded-3xl bg-[#0D0D0F] border border-zinc-800 shadow-2xl overflow-hidden animate-in zoom-in-95 duration-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="p-4 sm:p-5 border-b border-zinc-800 flex items-center justify-between bg-[#111114]">
          <div className="flex items-center gap-3">
            <span className="px-3 py-1 rounded-full bg-[#2563FF]/20 text-[#2563FF] font-mono text-[11px] font-bold border border-[#2563FF]/30 uppercase">
              {project.category}
            </span>
            <h3 className="font-display font-bold text-white text-base sm:text-lg truncate max-w-xs sm:max-w-md">
              {project.title}
            </h3>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-full bg-[#0D0D0F] hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors cursor-pointer"
            aria-label="Close video player"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Video Player Box */}
        <div className="bg-black">
          <InteractiveVideoPlayer
            videoUrl={project.videoUrl}
            thumbnail={project.thumbnail}
            title={project.title}
            durationLabel={project.duration || "2:30"}
            aspectRatio={project.aspectRatio || '16:9'}
            autoPlay={true}
            accentGlow={false}
          />
        </div>

        {/* Modal Footer Info & Actions */}
        <div className="p-5 sm:p-6 bg-[#111114] border-t border-zinc-800">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
            <div>
              <p className="text-xs sm:text-sm text-zinc-300 mb-2 font-normal">
                {project.shortDescription}
              </p>
              <div className="flex flex-wrap gap-1.5">
                {project.skills.map((skill, idx) => (
                  <span
                    key={idx}
                    className="px-2.5 py-0.5 rounded-full bg-[#0D0D0F] text-[11px] font-mono text-zinc-400 border border-zinc-800"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            <div className="flex items-center gap-3 shrink-0 w-full sm:w-auto">
              {project.hasCaseStudy && (
                <button
                  onClick={() => {
                    onClose();
                    onOpenCaseStudy(project);
                  }}
                  className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-full bg-[#0D0D0F] hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-800 text-xs font-bold font-mono tracking-wide transition-colors cursor-pointer"
                >
                  <span>Case Study</span>
                  <ArrowRight className="w-3.5 h-3.5 text-[#FF8A5B]" />
                </button>
              )}

              <button
                onClick={() => {
                  onClose();
                  onOpenHireForm();
                }}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-1.5 px-5 py-2.5 rounded-full bg-[#2563FF] hover:bg-[#1d4ed8] text-white text-xs font-bold uppercase font-mono tracking-wider shadow-md shadow-blue-600/20 transition-all cursor-pointer"
              >
                <span>Hire For Project</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
