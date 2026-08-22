import React, { useState } from 'react';
import { 
  Play, 
  ArrowRight, 
  Sparkles, 
  FileText, 
  Clock, 
  Layers, 
  Film,
  ExternalLink 
} from 'lucide-react';
import { PORTFOLIO_PROJECTS } from '../data/config';
import { PortfolioProject, ProjectCategory } from '../types';

interface PortfolioProps {
  onSelectProject: (project: PortfolioProject) => void;
  onOpenCaseStudy: (project: PortfolioProject) => void;
  onOpenHireForm: () => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ 
  onSelectProject, 
  onOpenCaseStudy,
  onOpenHireForm
}) => {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('ALL');

  const categories: ProjectCategory[] = [
    'ALL',
    'YOUTUBE',
    'SHORTS',
    'DOCUMENTARY',
    'MOTION GRAPHICS',
    'CINEMATIC'
  ];

  const filteredProjects = PORTFOLIO_PROJECTS.filter((p) => {
    if (activeFilter === 'ALL') return true;
    return p.category === activeFilter;
  });

  const featuredProject = PORTFOLIO_PROJECTS[0];
  const gridProjects = activeFilter === 'ALL' 
    ? filteredProjects.slice(1) 
    : filteredProjects;

  return (
    <section
      id="work"
      className="relative py-16 md:py-24 bg-[#050505] overflow-hidden"
      aria-label="Selected Work Portfolio"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/4 right-0 w-[500px] h-[500px] bg-[#2563FF]/5 blur-[150px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-0 w-[500px] h-[500px] bg-[#FF8A5B]/5 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono tracking-widest text-[#FF8A5B] uppercase mb-4">
            <span>04 / SELECTED WORK</span>
            <span className="text-zinc-600">•</span>
            <span className="text-white">PROJECT ARCHIVE</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 font-display">
            SELECTED WORK
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            A selection of edits crafted to tell stories, hold attention and make every frame count.
          </p>
        </div>

        {/* Category Filters Row */}
        <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 mb-10">
          {categories.map((cat) => {
            const isActive = activeFilter === cat;
            return (
              <button
                key={cat}
                id={`filter-btn-${cat.toLowerCase().replace(' ', '-')}`}
                onClick={() => setActiveFilter(cat)}
                className={`px-5 py-2 rounded-full text-xs font-mono tracking-wider transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-[#2563FF] text-white font-bold shadow-lg shadow-blue-600/25 scale-105'
                    : 'bg-[#0D0D0F] text-zinc-400 hover:text-white hover:bg-zinc-800/80 border border-zinc-800'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>

        {/* Featured Project Showcase (Shown when 'ALL' or 'DOCUMENTARY' is active) */}
        {activeFilter === 'ALL' && featuredProject && (
          <div className="mb-10">
            <div className="text-xs font-mono uppercase tracking-widest text-[#FF8A5B] font-bold mb-3 flex items-center gap-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>FEATURED FLAGSHIP SHOWCASE</span>
            </div>

            <div className="rounded-3xl bg-[#0D0D0F] border border-zinc-800 overflow-hidden group transition-all duration-300 shadow-2xl hover:border-zinc-700">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                
                {/* Left: Big Media Thumbnail with Play Overlay */}
                <div 
                  className="lg:col-span-7 relative aspect-video overflow-hidden bg-black cursor-pointer"
                  onClick={() => onSelectProject(featuredProject)}
                >
                  <img
                    src={featuredProject.thumbnail}
                    alt={featuredProject.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 brightness-90"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />

                  {/* Play Button Trigger */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-[#2563FF] text-white flex items-center justify-center shadow-2xl shadow-blue-500/50 group-hover:scale-110 transition-all duration-300 backdrop-blur-sm border border-white/20">
                      <Play className="w-6 h-6 fill-white ml-0.5" />
                    </div>
                  </div>

                  {/* Badges in preview */}
                  <div className="absolute top-4 left-4 flex gap-2">
                    <span className="px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md text-[10px] font-mono tracking-wider text-white border border-white/10 uppercase">
                      {featuredProject.category}
                    </span>
                    <span className="px-2.5 py-1 rounded-lg bg-[#2563FF]/30 backdrop-blur-md text-[10px] font-mono text-blue-200 border border-[#2563FF]/40 uppercase">
                      {featuredProject.type}
                    </span>
                  </div>

                  {featuredProject.duration && (
                    <div className="absolute bottom-4 right-4 px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md text-[11px] font-mono text-zinc-300 flex items-center gap-1.5 border border-white/10">
                      <Clock className="w-3 h-3 text-[#FF8A5B]" />
                      <span>{featuredProject.duration}</span>
                    </div>
                  )}
                </div>

                {/* Right: Featured Project Info & Case Study Action */}
                <div className="lg:col-span-5 p-7 sm:p-9 lg:p-10 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-mono uppercase tracking-widest text-zinc-500 block mb-2 font-bold">
                      FLAGSHIP EDIT
                    </span>

                    <h3 className="text-2xl sm:text-3xl font-bold text-white mb-4 font-display group-hover:text-[#2563FF] transition-colors">
                      {featuredProject.title}
                    </h3>

                    <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                      {featuredProject.shortDescription}
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-2 mb-8">
                      {featuredProject.skills.map((skill, sIdx) => (
                        <span
                          key={sIdx}
                          className="px-3 py-1 rounded-xl bg-[#111114] border border-zinc-800 text-xs font-mono text-zinc-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Row */}
                  <div className="flex flex-wrap items-center gap-3 pt-6 border-t border-zinc-800">
                    <button
                      onClick={() => onSelectProject(featuredProject)}
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#2563FF] hover:bg-[#1d4ed8] text-white text-xs font-bold uppercase tracking-wider transition-all shadow-md cursor-pointer"
                    >
                      <Play className="w-3.5 h-3.5 fill-white" />
                      <span>Watch Preview</span>
                    </button>

                    {featuredProject.hasCaseStudy && (
                      <button
                        onClick={() => onOpenCaseStudy(featuredProject)}
                        className="inline-flex items-center gap-1.5 px-5 py-3 rounded-full bg-zinc-900 hover:bg-zinc-800 text-zinc-200 hover:text-white border border-zinc-800 text-xs font-bold uppercase tracking-wider transition-all cursor-pointer"
                      >
                        <FileText className="w-3.5 h-3.5 text-[#FF8A5B]" />
                        <span>Case Study</span>
                        <ArrowRight className="w-3 h-3 text-zinc-400" />
                      </button>
                    )}
                  </div>

                </div>

              </div>
            </div>
          </div>
        )}

        {/* Portfolio Grid for remaining projects */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {gridProjects.map((project) => (
            <div
              key={project.id}
              id={`portfolio-card-${project.id}`}
              className="group rounded-3xl bg-[#0D0D0F] border border-zinc-800 hover:border-zinc-700 overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1 shadow-xl"
            >
              {/* Media Thumbnail Container */}
              <div 
                className="relative aspect-video overflow-hidden bg-black cursor-pointer"
                onClick={() => onSelectProject(project)}
              >
                <img
                  src={project.thumbnail}
                  alt={project.title}
                  referrerPolicy="no-referrer"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 brightness-90"
                />

                {/* Dark Vignette Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />

                {/* Play Trigger */}
                <div className="absolute inset-0 flex items-center justify-center opacity-80 group-hover:opacity-100 transition-opacity">
                  <div className="w-13 h-13 rounded-full bg-black/70 group-hover:bg-[#2563FF] text-white flex items-center justify-center backdrop-blur-sm border border-white/20 shadow-xl group-hover:scale-110 transition-all duration-200">
                    <Play className="w-5 h-5 fill-white ml-0.5" />
                  </div>
                </div>

                {/* Top Badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className="px-2.5 py-1 rounded-lg bg-black/80 backdrop-blur-md text-[10px] font-mono text-zinc-200 border border-white/10 uppercase">
                    {project.category}
                  </span>
                  <span className="px-2.5 py-1 rounded-lg bg-white/10 backdrop-blur-md text-[10px] font-mono text-[#FF8A5B] border border-white/10 uppercase font-bold">
                    {project.type}
                  </span>
                </div>

                {/* Duration Badge */}
                {project.duration && (
                  <div className="absolute bottom-3 right-3 px-2 py-0.5 rounded-lg bg-black/80 backdrop-blur-md text-[10px] font-mono text-zinc-300 flex items-center gap-1 border border-white/10">
                    <Clock className="w-3 h-3 text-zinc-400" />
                    <span>{project.duration}</span>
                  </div>
                )}
              </div>

              {/* Card Body */}
              <div className="p-7 flex flex-col flex-1 justify-between">
                <div>
                  <h4 className="text-xl font-bold text-white mb-2 font-display group-hover:text-[#2563FF] transition-colors">
                    {project.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-zinc-300 line-clamp-2 leading-relaxed mb-4 font-normal">
                    {project.shortDescription}
                  </p>

                  {/* Skills tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {project.skills.map((skill, sIdx) => (
                      <span
                        key={sIdx}
                        className="px-2.5 py-0.5 rounded-lg bg-[#111114] text-[11px] font-mono text-zinc-400 border border-zinc-800"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card Action Row */}
                <div className="flex items-center justify-between pt-4 border-t border-zinc-800/80 text-xs">
                  <button
                    onClick={() => onSelectProject(project)}
                    className="text-zinc-300 hover:text-white font-medium flex items-center gap-1.5 cursor-pointer uppercase font-mono tracking-wider text-[11px]"
                  >
                    <span>Play Video</span>
                    <Play className="w-3 h-3 fill-zinc-400 text-zinc-400" />
                  </button>

                  {project.hasCaseStudy ? (
                    <button
                      onClick={() => onOpenCaseStudy(project)}
                      className="text-[#FF8A5B] hover:text-[#ff9f77] font-bold flex items-center gap-1 cursor-pointer font-mono tracking-wider text-[11px] uppercase"
                    >
                      <span>Case Study</span>
                      <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 transition-transform" />
                    </button>
                  ) : (
                    <span className="text-[11px] font-mono text-zinc-600">Sample Cut</span>
                  )}
                </div>

              </div>
            </div>
          ))}
        </div>

        {/* Bottom Portfolio Bento CTA */}
        <div className="mt-14 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 p-5 sm:p-7 rounded-3xl bg-[#0D0D0F] border border-zinc-800 shadow-xl">
            <p className="text-sm text-zinc-300 font-normal">
              Need a custom editing style or specific format for your channel?
            </p>
            <button
              onClick={onOpenHireForm}
              className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-[#2563FF] hover:bg-[#1d4ed8] text-white font-bold text-xs uppercase tracking-wider shadow-md transition-all cursor-pointer"
            >
              <span>Discuss Your Project</span>
              <ArrowRight className="w-3.5 h-3.5 text-[#FF8A5B]" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
};
