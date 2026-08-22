import React from 'react';
import { 
  Youtube, 
  Smartphone, 
  Layers, 
  Volume2, 
  Palette, 
  ArrowRight, 
  CheckCircle2,
  Sparkles
} from 'lucide-react';
import { SERVICES } from '../data/config';
import { ServiceItem } from '../types';

interface ServicesProps {
  onSelectService: (serviceName: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ onSelectService }) => {
  const getServiceIcon = (iconName: ServiceItem['iconName']) => {
    switch (iconName) {
      case 'Youtube':
        return <Youtube className="w-5 h-5 text-red-400" />;
      case 'Smartphone':
        return <Smartphone className="w-5 h-5 text-purple-400" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-blue-400" />;
      case 'Volume2':
        return <Volume2 className="w-5 h-5 text-emerald-400" />;
      case 'Palette':
        return <Palette className="w-5 h-5 text-[#FF8A5B]" />;
      default:
        return <Layers className="w-5 h-5 text-blue-400" />;
    }
  };

  return (
    <section
      id="services"
      className="relative py-16 md:py-24 bg-[#050505] overflow-hidden"
      aria-label="Services and Capabilities"
    >
      {/* Subtle ambient lighting accent */}
      <div className="absolute top-1/3 right-10 w-96 h-96 bg-[#2563FF]/5 blur-[120px] pointer-events-none -z-10" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#FF8A5B]/5 blur-[120px] pointer-events-none -z-10" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono tracking-widest text-[#FF8A5B] uppercase mb-4">
            <span>02 / SERVICES</span>
            <span className="text-zinc-600">•</span>
            <span className="text-white">WHAT I CAN DO FOR YOU</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 font-display">
            WHAT I CAN DO FOR YOU
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            From raw footage to a polished video — I handle the editing that brings your story to life.
          </p>
        </div>

        {/* Bento Grid for Services */}
        <div className="grid grid-cols-12 gap-4 lg:gap-5">
          {SERVICES.map((service, index) => {
            // Bento spans: 1st item (col-span-12 md:col-span-6 lg:col-span-7), 2nd item (col-span-12 md:col-span-6 lg:col-span-5), 3rd/4th/5th items (col-span-12 md:col-span-4)
            let colSpan = 'col-span-12 md:col-span-4';
            if (index === 0) colSpan = 'col-span-12 md:col-span-6 lg:col-span-7';
            if (index === 1) colSpan = 'col-span-12 md:col-span-6 lg:col-span-5';

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                onClick={() => onSelectService(service.name)}
                className={`group relative rounded-3xl bg-[#0D0D0F] border border-zinc-800 hover:border-zinc-700 hover:bg-[#111114] p-7 sm:p-8 transition-all duration-300 hover:-translate-y-1 cursor-pointer shadow-xl flex flex-col justify-between ${colSpan}`}
              >
                <div>
                  {/* Top Row: Number & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="font-mono text-2xl font-black italic text-zinc-700 group-hover:text-[#2563FF] transition-colors">
                      0{service.number}
                    </span>

                    <div className="w-10 h-10 rounded-2xl bg-[#111114] border border-zinc-800 group-hover:bg-[#2563FF]/20 group-hover:border-[#2563FF]/40 flex items-center justify-center transition-colors">
                      {getServiceIcon(service.iconName)}
                    </div>
                  </div>

                  {/* Service Title & Tagline */}
                  <h3 className="text-xl sm:text-2xl font-bold text-white mb-2 font-display group-hover:text-[#2563FF] transition-colors">
                    {service.name}
                  </h3>

                  <p className="text-xs font-mono text-zinc-400 mb-4 uppercase tracking-wider">
                    {service.tagline}
                  </p>

                  {/* Service Main Description */}
                  <p className="text-sm text-zinc-300 leading-relaxed mb-6 font-normal">
                    "{service.description}"
                  </p>

                  {/* Key Deliverables */}
                  <div className="space-y-2 pt-4 border-t border-zinc-800/80 mb-6">
                    {service.deliverables.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-zinc-400">
                        <span className="text-[#2563FF] mt-0.5">•</span>
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom Row: Inquire / Explore Arrow */}
                <div className="flex items-center justify-between pt-4 border-t border-zinc-800/80 text-xs font-medium text-zinc-400 group-hover:text-white transition-colors">
                  <span className="text-[11px] font-mono text-zinc-500 uppercase tracking-wider">Inquire for this service</span>
                  <div className="w-8 h-8 rounded-full bg-[#111114] border border-zinc-800 group-hover:bg-[#2563FF] text-zinc-400 group-hover:text-white flex items-center justify-center transition-all duration-200 group-hover:translate-x-1">
                    <ArrowRight className="w-3.5 h-3.5" />
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};
