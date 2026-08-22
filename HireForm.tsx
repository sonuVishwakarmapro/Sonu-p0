import React, { useState } from 'react';
import { 
  Send, 
  Mail, 
  CheckCircle2, 
  AlertCircle, 
  Sparkles, 
  Clock, 
  ArrowRight,
  RefreshCw,
  Info
} from 'lucide-react';
import { SiteConfig } from '../types';

interface HireFormProps {
  config: SiteConfig;
  prefilledService?: string;
}

export const HireForm: React.FC<HireFormProps> = ({ config, prefilledService }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    projectType: prefilledService || 'YouTube Video',
    description: '',
    videoLength: '',
    numberOfVideos: '1',
    platform: 'YouTube',
    deadline: '',
    budgetRange: '',
    referenceUrl: ''
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const projectTypes = [
    'YouTube Video',
    'Shorts / Reels',
    'Documentary',
    'Motion Graphics',
    'Brand Video',
    'Other'
  ];

  const budgetOptions = [
    'Not sure yet / Flexible',
    '$150 - $300 (Shorts/Reels)',
    '$300 - $600 (Single Long-Form)',
    '$600 - $1,200 (Multi-Video / Retainer)',
    '$1,200+ (High-End / Documentary)'
  ];

  const validate = () => {
    const newErrors: Record<string, string> = {};
    if (!formData.name.trim()) newErrors.name = 'Please provide your name';
    if (!formData.email.trim()) {
      newErrors.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    if (!formData.description.trim()) {
      newErrors.description = 'Please describe your project, footage, or goals';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);

    // Simulate clean submission / API hook integration
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const handleReset = () => {
    setFormData({
      name: '',
      email: '',
      projectType: 'YouTube Video',
      description: '',
      videoLength: '',
      numberOfVideos: '1',
      platform: 'YouTube',
      deadline: '',
      budgetRange: '',
      referenceUrl: ''
    });
    setIsSubmitted(false);
    setErrors({});
  };

  return (
    <section
      id="contact"
      className="relative py-16 md:py-24 bg-[#050505] overflow-hidden"
      aria-label="Project Inquiry Form"
    >
      {/* Ambient background glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[700px] h-[500px] bg-gradient-to-r from-[#2563FF]/10 via-[#FF8A5B]/10 to-[#2563FF]/10 blur-[150px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 md:mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono tracking-widest text-[#FF8A5B] uppercase mb-4">
            <span>08 / INQUIRY</span>
            <span className="text-zinc-600">•</span>
            <span className="text-white">HIRE ME</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 font-display">
            LET'S CREATE SOMETHING WORTH WATCHING.
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            Have a project in mind? Tell me what you're working on and I'll get back to you with a structured proposal.
          </p>
        </div>

        {/* Main Bento Form Container */}
        <div className="rounded-3xl bg-[#0D0D0F] border border-zinc-800 p-6 sm:p-10 md:p-12 shadow-2xl relative">
          
          {isSubmitted ? (
            /* Success State */
            <div className="py-12 text-center flex flex-col items-center justify-center animate-in fade-in zoom-in-95 duration-300">
              <div className="w-16 h-16 rounded-2xl bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 flex items-center justify-center mb-6 shadow-lg shadow-emerald-500/20">
                <CheckCircle2 className="w-8 h-8" />
              </div>

              <h3 className="text-2xl sm:text-3xl font-bold text-white mb-3 font-display">
                Inquiry Received!
              </h3>

              <p className="text-zinc-300 max-w-md text-sm sm:text-base leading-relaxed mb-8 font-normal">
                Thank you for sharing your project brief. I'll review your details and respond directly via email with timeline and next steps.
              </p>

              <button
                onClick={handleReset}
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-[#111114] hover:bg-zinc-800 text-white border border-zinc-800 text-xs font-mono tracking-wider uppercase transition-colors cursor-pointer"
              >
                <RefreshCw className="w-3.5 h-3.5" />
                <span>Submit Another Brief</span>
              </button>
            </div>
          ) : (
            /* Active Form */
            <form onSubmit={handleSubmit} noValidate className="space-y-6">
              
              {/* Row 1: Name & Email */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="inquiry-name" className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2 font-semibold">
                    Your Name <span className="text-[#FF8A5B]">*</span>
                  </label>
                  <input
                    id="inquiry-name"
                    type="text"
                    required
                    placeholder="e.g. Alex Rivera"
                    value={formData.name}
                    onChange={(e) => {
                      setFormData({ ...formData, name: e.target.value });
                      if (errors.name) setErrors({ ...errors, name: '' });
                    }}
                    className={`w-full px-4 py-3.5 rounded-2xl bg-[#111114] border text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#2563FF] transition-all ${
                      errors.name ? 'border-red-500/80 bg-red-950/10' : 'border-zinc-800 hover:border-zinc-700'
                    }`}
                  />
                  {errors.name && (
                    <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.name}
                    </p>
                  )}
                </div>

                <div>
                  <label htmlFor="inquiry-email" className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2 font-semibold">
                    Your Email <span className="text-[#FF8A5B]">*</span>
                  </label>
                  <input
                    id="inquiry-email"
                    type="email"
                    required
                    placeholder="e.g. alex@creatorchannel.com"
                    value={formData.email}
                    onChange={(e) => {
                      setFormData({ ...formData, email: e.target.value });
                      if (errors.email) setErrors({ ...errors, email: '' });
                    }}
                    className={`w-full px-4 py-3.5 rounded-2xl bg-[#111114] border text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#2563FF] transition-all ${
                      errors.email ? 'border-red-500/80 bg-red-950/10' : 'border-zinc-800 hover:border-zinc-700'
                    }`}
                  />
                  {errors.email && (
                    <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                      <AlertCircle className="w-3.5 h-3.5" /> {errors.email}
                    </p>
                  )}
                </div>
              </div>

              {/* Row 2: Project Type & Platform */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="inquiry-project-type" className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2 font-semibold">
                    Project Type <span className="text-[#FF8A5B]">*</span>
                  </label>
                  <select
                    id="inquiry-project-type"
                    value={formData.projectType}
                    onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#111114] border border-zinc-800 text-white text-sm focus:outline-none focus:ring-2 focus:ring-[#2563FF] transition-all cursor-pointer"
                  >
                    {projectTypes.map((type) => (
                      <option key={type} value={type} className="bg-[#111114] text-white">
                        {type}
                      </option>
                    ))}
                  </select>
                </div>

                <div>
                  <label htmlFor="inquiry-platform" className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2 font-semibold">
                    Primary Platform <span className="text-zinc-500 text-[10px] lowercase">(optional)</span>
                  </label>
                  <input
                    id="inquiry-platform"
                    type="text"
                    placeholder="e.g. YouTube, TikTok, Instagram, Web"
                    value={formData.platform}
                    onChange={(e) => setFormData({ ...formData, platform: e.target.value })}
                    className="w-full px-4 py-3.5 rounded-2xl bg-[#111114] border border-zinc-800 text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#2563FF] transition-all"
                  />
                </div>
              </div>

              {/* Row 3: Description */}
              <div>
                <label htmlFor="inquiry-description" className="block text-xs font-mono uppercase tracking-wider text-zinc-300 mb-2 font-semibold">
                  Project Description & Vision <span className="text-[#FF8A5B]">*</span>
                </label>
                <textarea
                  id="inquiry-description"
                  required
                  rows={4}
                  placeholder="Tell me about your raw footage, video concept, desired pacing, references, or key deliverables..."
                  value={formData.description}
                  onChange={(e) => {
                    setFormData({ ...formData, description: e.target.value });
                    if (errors.description) setErrors({ ...errors, description: '' });
                  }}
                  className={`w-full px-4 py-3.5 rounded-2xl bg-[#111114] border text-white text-sm placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#2563FF] transition-all resize-y ${
                    errors.description ? 'border-red-500/80 bg-red-950/10' : 'border-zinc-800 hover:border-zinc-700'
                  }`}
                />
                {errors.description && (
                  <p className="text-red-400 text-xs mt-1.5 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" /> {errors.description}
                  </p>
                )}
              </div>

              {/* Row 4: Optional Specs (Video Length, Target Deadline, Budget) */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-2 border-t border-zinc-800">
                <div>
                  <label htmlFor="inquiry-video-length" className="block text-xs font-mono text-zinc-400 mb-2">
                    Estimated Video Length
                  </label>
                  <input
                    id="inquiry-video-length"
                    type="text"
                    placeholder="e.g. 8-12 mins / 60s"
                    value={formData.videoLength}
                    onChange={(e) => setFormData({ ...formData, videoLength: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl bg-[#111114] border border-zinc-800 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#2563FF]"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry-deadline" className="block text-xs font-mono text-zinc-400 mb-2">
                    Target Deadline
                  </label>
                  <input
                    id="inquiry-deadline"
                    type="text"
                    placeholder="e.g. Within 1 week"
                    value={formData.deadline}
                    onChange={(e) => setFormData({ ...formData, deadline: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl bg-[#111114] border border-zinc-800 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#2563FF]"
                  />
                </div>

                <div>
                  <label htmlFor="inquiry-budget" className="block text-xs font-mono text-zinc-400 mb-2">
                    Budget Range (Optional)
                  </label>
                  <select
                    id="inquiry-budget"
                    value={formData.budgetRange}
                    onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                    className="w-full px-3.5 py-3 rounded-xl bg-[#111114] border border-zinc-800 text-white text-xs focus:outline-none focus:ring-2 focus:ring-[#2563FF] cursor-pointer"
                  >
                    <option value="">Select range...</option>
                    {budgetOptions.map((opt) => (
                      <option key={opt} value={opt} className="bg-[#111114]">
                        {opt}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              {/* Reference Link */}
              <div>
                <label htmlFor="inquiry-reference" className="block text-xs font-mono text-zinc-400 mb-2">
                  Reference Video or Channel Link (Optional)
                </label>
                <input
                  id="inquiry-reference"
                  type="url"
                  placeholder="https://youtube.com/watch?v=... or Google Drive link"
                  value={formData.referenceUrl}
                  onChange={(e) => setFormData({ ...formData, referenceUrl: e.target.value })}
                  className="w-full px-4 py-3 rounded-xl bg-[#111114] border border-zinc-800 text-white text-xs placeholder:text-zinc-600 focus:outline-none focus:ring-2 focus:ring-[#2563FF]"
                />
              </div>

              {/* Submit CTA Row */}
              <div className="pt-6 border-t border-zinc-800 flex flex-col sm:flex-row items-center justify-between gap-4">
                <button
                  type="submit"
                  id="inquiry-submit-btn"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-4 rounded-full bg-[#2563FF] hover:bg-[#1d4ed8] text-white font-bold text-xs uppercase tracking-wider shadow-xl shadow-blue-600/20 transition-all cursor-pointer disabled:opacity-50 group"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      <span>Processing Brief...</span>
                    </>
                  ) : (
                    <>
                      <span>Send Project Inquiry</span>
                      <ArrowRight className="w-4 h-4 text-[#FF8A5B] group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>

                {/* Email Direct Option */}
                <div className="text-xs text-zinc-400 text-center sm:text-right">
                  <span>Prefer direct email? </span>
                  <a
                    href={`mailto:${config.email}`}
                    className="text-white hover:text-[#2563FF] font-mono font-medium underline underline-offset-4 transition-colors"
                  >
                    {config.email}
                  </a>
                </div>
              </div>

            </form>
          )}

        </div>

      </div>
    </section>
  );
};
