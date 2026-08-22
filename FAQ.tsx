import React, { useState } from 'react';
import { ChevronDown, HelpCircle, ArrowRight } from 'lucide-react';
import { FAQ_ITEMS } from '../data/config';

interface FAQProps {
  onOpenHireForm: () => void;
}

export const FAQ: React.FC<FAQProps> = ({ onOpenHireForm }) => {
  const [openIds, setOpenIds] = useState<string[]>([FAQ_ITEMS[0].id]); // First item open by default

  const toggleFAQ = (id: string) => {
    setOpenIds((prev) => 
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section
      id="faq"
      className="relative py-16 md:py-24 bg-[#050505] border-t border-zinc-900 overflow-hidden"
      aria-label="Frequently Asked Questions"
    >
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-96 h-96 bg-[#FF8A5B]/5 blur-[140px] pointer-events-none -z-10" />

      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-900 border border-zinc-800 text-xs font-mono tracking-widest text-[#FF8A5B] uppercase mb-4">
            <span>07 / FAQ</span>
            <span className="text-zinc-600">•</span>
            <span className="text-white">QUESTIONS & ANSWERS</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-4 font-display">
            FREQUENTLY ASKED QUESTIONS
          </h2>

          <p className="text-base sm:text-lg text-zinc-400 leading-relaxed font-normal">
            Everything you need to know about working together, asset delivery, and the editing pipeline.
          </p>
        </div>

        {/* Bento Grid Accordion List */}
        <div className="space-y-3.5">
          {FAQ_ITEMS.map((item, index) => {
            const isOpen = openIds.includes(item.id);
            return (
              <div
                key={item.id}
                id={`faq-item-${item.id}`}
                className={`rounded-2xl sm:rounded-3xl transition-all duration-300 border ${
                  isOpen
                    ? 'bg-[#0D0D0F] border-[#2563FF] shadow-lg shadow-blue-500/10'
                    : 'bg-[#0D0D0F] border-zinc-800 hover:border-zinc-700'
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(item.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-[#2563FF] rounded-2xl sm:rounded-3xl"
                >
                  <div className="flex items-center gap-3.5">
                    <span className="text-xs font-mono text-zinc-500 font-bold">
                      0{index + 1}
                    </span>
                    <h3 className="text-base sm:text-lg font-bold text-white font-display">
                      {item.question}
                    </h3>
                  </div>

                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                    isOpen
                      ? 'bg-[#2563FF] text-white rotate-180'
                      : 'bg-[#111114] text-zinc-400 border border-zinc-800'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 text-sm text-zinc-300 leading-relaxed border-t border-zinc-800/80 pt-4 animate-in fade-in duration-200 font-normal">
                    <p>{item.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Bottom helper prompt */}
        <div className="mt-12 text-center">
          <p className="text-xs sm:text-sm text-zinc-400 mb-3">
            Have a specific technical question or unique project requirement?
          </p>
          <button
            onClick={onOpenHireForm}
            className="inline-flex items-center gap-2 text-xs font-bold font-mono tracking-wider uppercase text-[#2563FF] hover:text-blue-300 cursor-pointer transition-colors"
          >
            <span>Ask directly in your project brief</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#FF8A5B]" />
          </button>
        </div>

      </div>
    </section>
  );
};
