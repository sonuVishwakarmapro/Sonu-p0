import React, { useState } from 'react';
import { SITE_CONFIG } from './data/config';
import { SiteConfig, PortfolioProject } from './types';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { Showreel } from './components/Showreel';
import { Services } from './components/Services';
import { Process } from './components/Process';
import { Portfolio } from './components/Portfolio';
import { WhyMe } from './components/WhyMe';
import { About } from './components/About';
import { FAQ } from './components/FAQ';
import { HireForm } from './components/HireForm';
import { FinalCTA } from './components/FinalCTA';
import { Footer } from './components/Footer';
import { VideoModal } from './components/VideoModal';
import { CaseStudyModal } from './components/CaseStudyModal';
import { LiveConfigModal } from './components/LiveConfigModal';

export default function App() {
  const [config, setConfig] = useState<SiteConfig>(SITE_CONFIG);
  const [selectedVideoProject, setSelectedVideoProject] = useState<PortfolioProject | null>(null);
  const [selectedCaseStudyProject, setSelectedCaseStudyProject] = useState<PortfolioProject | null>(null);
  const [prefilledService, setPrefilledService] = useState<string>('');

  const scrollToHireForm = (serviceName?: string) => {
    if (serviceName) {
      setPrefilledService(serviceName);
    }
    const element = document.getElementById('contact');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToWork = () => {
    const element = document.getElementById('work');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const scrollToShowreel = () => {
    const element = document.getElementById('showreel');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#050507] text-[#E4E4E7] flex flex-col font-sans selection:bg-[#2563EB] selection:text-white">
      {/* Top Sticky Navbar */}
      <Navbar
        config={config}
        onOpenHireForm={() => scrollToHireForm()}
      />

      {/* Main Content Sections */}
      <main className="flex-1">
        {/* 1. Hero Section */}
        <Hero
          config={config}
          onOpenHireForm={() => scrollToHireForm()}
          onViewWork={scrollToWork}
          onViewShowreel={scrollToShowreel}
        />

        {/* 2. Showreel Section */}
        <Showreel
          config={config}
          onOpenHireForm={() => scrollToHireForm()}
        />

        {/* 3. Services / What I Can Do For You */}
        <Services
          onSelectService={(serviceName) => scrollToHireForm(serviceName)}
        />

        {/* 4. Editing Process */}
        <Process
          onOpenHireForm={() => scrollToHireForm()}
        />

        {/* 5. Selected Work / Portfolio */}
        <Portfolio
          onSelectProject={(project) => setSelectedVideoProject(project)}
          onOpenCaseStudy={(project) => setSelectedCaseStudyProject(project)}
          onOpenHireForm={() => scrollToHireForm()}
        />

        {/* 6. Why Work With Me? */}
        <WhyMe
          onOpenHireForm={() => scrollToHireForm()}
        />

        {/* 7. About Me */}
        <About
          config={config}
          onOpenHireForm={() => scrollToHireForm()}
        />

        {/* 8. Frequently Asked Questions */}
        <FAQ
          onOpenHireForm={() => scrollToHireForm()}
        />

        {/* 9. Hire Me / Project Inquiry Form */}
        <HireForm
          config={config}
          prefilledService={prefilledService}
        />

        {/* 10. Final Call to Action */}
        <FinalCTA
          onOpenHireForm={() => scrollToHireForm()}
          onViewWork={scrollToWork}
        />
      </main>

      {/* Footer */}
      <Footer
        config={config}
        onOpenHireForm={() => scrollToHireForm()}
      />

      {/* Lightbox Video Modal */}
      {selectedVideoProject && (
        <VideoModal
          project={selectedVideoProject}
          onClose={() => setSelectedVideoProject(null)}
          onOpenCaseStudy={(project) => {
            setSelectedVideoProject(null);
            setSelectedCaseStudyProject(project);
          }}
          onOpenHireForm={() => {
            setSelectedVideoProject(null);
            scrollToHireForm();
          }}
        />
      )}

      {/* Deep-Dive Case Study Modal */}
      {selectedCaseStudyProject && (
        <CaseStudyModal
          project={selectedCaseStudyProject}
          onClose={() => setSelectedCaseStudyProject(null)}
          onOpenHireForm={() => {
            setSelectedCaseStudyProject(null);
            scrollToHireForm();
          }}
        />
      )}

      {/* Live Customizer Drawer */}
      <LiveConfigModal
        config={config}
        onUpdateConfig={(newConfig) => setConfig(newConfig)}
        onResetConfig={() => setConfig(SITE_CONFIG)}
      />
    </div>
  );
}
