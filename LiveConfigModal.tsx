import React, { useState } from 'react';
import { Sliders, X, Check, RefreshCw, Sparkles, User, Mail, MapPin, Video } from 'lucide-react';
import { SiteConfig } from '../types';

interface LiveConfigModalProps {
  config: SiteConfig;
  onUpdateConfig: (newConfig: SiteConfig) => void;
  onResetConfig: () => void;
}

export const LiveConfigModal: React.FC<LiveConfigModalProps> = ({
  config,
  onUpdateConfig,
  onResetConfig
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [tempConfig, setTempConfig] = useState<SiteConfig>(config);

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    onUpdateConfig(tempConfig);
    setIsOpen(false);
  };

  return (
    <>
      {/* Floating Trigger Button */}
      <button
        id="quick-customizer-toggle-btn"
        onClick={() => {
          setTempConfig(config);
          setIsOpen(true);
        }}
        className="fixed bottom-6 right-6 z-40 flex items-center gap-2 px-4 py-2.5 rounded-full bg-[#0D0D0F]/95 text-zinc-300 hover:text-white border border-zinc-800 shadow-2xl backdrop-blur-md hover:border-[#2563FF] hover:bg-[#111114] text-xs font-mono font-bold transition-all cursor-pointer group"
        title="Customize placeholders live"
      >
        <Sliders className="w-3.5 h-3.5 text-[#FF8A5B] group-hover:rotate-90 transition-transform duration-300" />
        <span className="hidden sm:inline">Live Customizer</span>
      </button>

      {/* Drawer / Modal */}
      {isOpen && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setIsOpen(false)}
        >
          <div
            className="relative w-full max-w-lg rounded-3xl bg-[#0D0D0F] border border-zinc-800 shadow-2xl p-6 sm:p-8 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between pb-4 border-b border-zinc-800 mb-6">
              <div className="flex items-center gap-2.5">
                <div className="w-8 h-8 rounded-xl bg-[#2563FF]/20 text-[#2563FF] border border-[#2563FF]/30 flex items-center justify-center">
                  <Sliders className="w-4 h-4" />
                </div>
                <div>
                  <h3 className="font-display font-bold text-white text-base">Quick Site Customizer</h3>
                  <p className="text-xs text-zinc-400 font-normal">Preview with your actual name, email & details</p>
                </div>
              </div>

              <button
                onClick={() => setIsOpen(false)}
                className="p-1.5 rounded-full bg-[#111114] hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <form onSubmit={handleSave} className="space-y-4 text-xs font-mono">
              <div>
                <label className="block text-zinc-400 mb-1 flex items-center gap-1.5 font-bold">
                  <User className="w-3.5 h-3.5 text-[#2563FF]" />
                  <span>Editor Name</span>
                </label>
                <input
                  type="text"
                  value={tempConfig.editorName}
                  onChange={(e) => setTempConfig({ ...tempConfig, editorName: e.target.value })}
                  placeholder="e.g. Alex Carter"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#111114] border border-zinc-800 text-white text-xs focus:outline-none focus:ring-1 focus:ring-[#2563FF]"
                />
              </div>

              <div>
                <label className="block text-zinc-400 mb-1 flex items-center gap-1.5 font-bold">
                  <Mail className="w-3.5 h-3.5 text-[#FF8A5B]" />
                  <span>Contact Email</span>
                </label>
                <input
                  type="email"
                  value={tempConfig.email}
                  onChange={(e) => setTempConfig({ ...tempConfig, email: e.target.value })}
                  placeholder="e.g. alex@editorstudio.com"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#111114] border border-zinc-800 text-white text-xs focus:outline-none focus:ring-1 focus:ring-[#2563FF]"
                />
              </div>

              <div>
                <label className="block text-zinc-400 mb-1 flex items-center gap-1.5 font-bold">
                  <MapPin className="w-3.5 h-3.5 text-emerald-400" />
                  <span>Location</span>
                </label>
                <input
                  type="text"
                  value={tempConfig.location}
                  onChange={(e) => setTempConfig({ ...tempConfig, location: e.target.value })}
                  placeholder="e.g. New York / Remote Worldwide"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#111114] border border-zinc-800 text-white text-xs focus:outline-none focus:ring-1 focus:ring-[#2563FF]"
                />
              </div>

              <div>
                <label className="block text-zinc-400 mb-1 flex items-center gap-1.5 font-bold">
                  <Video className="w-3.5 h-3.5 text-[#2563FF]" />
                  <span>Showreel Video URL (Optional MP4 / Stream)</span>
                </label>
                <input
                  type="text"
                  value={tempConfig.showreel.videoUrl}
                  onChange={(e) => setTempConfig({
                    ...tempConfig,
                    showreel: { ...tempConfig.showreel, videoUrl: e.target.value }
                  })}
                  placeholder="Leave empty to use built-in interactive showcase reel"
                  className="w-full px-3.5 py-2.5 rounded-xl bg-[#111114] border border-zinc-800 text-white text-xs focus:outline-none focus:ring-1 focus:ring-[#2563FF]"
                />
              </div>

              <div className="flex items-center justify-between p-3 rounded-2xl bg-[#111114] border border-zinc-800">
                <span className="text-zinc-300 font-normal">Accepting New Projects Badge</span>
                <input
                  type="checkbox"
                  checked={tempConfig.isAvailableForProjects}
                  onChange={(e) => setTempConfig({ ...tempConfig, isAvailableForProjects: e.target.checked })}
                  className="w-4 h-4 accent-[#2563FF] rounded cursor-pointer"
                />
              </div>

              <div className="pt-4 border-t border-zinc-800 flex items-center justify-between gap-3">
                <button
                  type="button"
                  onClick={() => {
                    onResetConfig();
                    setIsOpen(false);
                  }}
                  className="px-3.5 py-2.5 rounded-full bg-[#111114] hover:bg-zinc-800 text-zinc-400 hover:text-white border border-zinc-800 transition-colors cursor-pointer flex items-center gap-1.5"
                >
                  <RefreshCw className="w-3 h-3" />
                  <span>Reset Default</span>
                </button>

                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-full bg-[#2563FF] hover:bg-[#1d4ed8] text-white font-bold uppercase tracking-wider shadow-md shadow-blue-600/20 transition-all cursor-pointer flex items-center gap-1.5"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Apply Changes</span>
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </>
  );
};
