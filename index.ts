export type ProjectCategory = 
  | 'ALL'
  | 'YOUTUBE'
  | 'SHORTS'
  | 'DOCUMENTARY'
  | 'MOTION GRAPHICS'
  | 'CINEMATIC';

export type ProjectTypeTag = 'PERSONAL PROJECT' | 'SPEC EDIT' | 'CLIENT PROJECT';

export interface PortfolioProject {
  id: string;
  title: string;
  category: Exclude<ProjectCategory, 'ALL'>;
  type: ProjectTypeTag;
  thumbnail: string;
  videoUrl?: string;
  shortDescription: string;
  skills: string[];
  duration?: string;
  aspectRatio?: '16:9' | '9:16';
  hasCaseStudy: boolean;
  caseStudy?: {
    overview: string;
    challenge: string;
    approach: string;
    editingWork: string[];
    techniques: string[];
    turnaround?: string;
    deliverables?: string[];
  };
}

export interface ServiceItem {
  id: string;
  number: string;
  name: string;
  tagline: string;
  description: string;
  deliverables: string[];
  idealFor: string;
  iconName: 'Youtube' | 'Smartphone' | 'Layers' | 'Volume2' | 'Palette';
}

export interface ProcessStep {
  stepNumber: string;
  phase: string;
  title: string;
  description: string;
  details: string[];
}

export interface WhyMePoint {
  number: string;
  title: string;
  description: string;
  subtext: string;
}

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category?: string;
}

export interface SiteConfig {
  editorName: string;
  roleTitle: string;
  tagline: string;
  subheadline: string;
  isAvailableForProjects: boolean;
  availabilityNote: string;
  location: string;
  email: string;
  socialLinks: {
    youtube?: string;
    instagram?: string;
    linkedin?: string;
    xTwitter?: string;
  };
  showreel: {
    videoUrl: string;
    duration: string;
    thumbnail: string;
    skills: string[];
  };
}
