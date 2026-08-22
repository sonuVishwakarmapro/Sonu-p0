import { 
  SiteConfig, 
  ServiceItem, 
  ProcessStep, 
  PortfolioProject, 
  WhyMePoint, 
  FAQItem 
} from '../types';

export const SITE_CONFIG: SiteConfig = {
  editorName: "[YOUR NAME]",
  roleTitle: "VIDEO EDITOR",
  tagline: "I Turn Raw Footage Into Videos People Want to Watch.",
  subheadline: "Video Editor for YouTubers, Creators & Brands — specializing in storytelling, motion graphics, sound design and engaging edits.",
  isAvailableForProjects: true,
  availabilityNote: "Available for New Projects",
  location: "[YOUR LOCATION]",
  email: "[YOUR EMAIL]",
  socialLinks: {
    youtube: "https://youtube.com/@yourchannel",
    instagram: "https://instagram.com/yourprofile",
    linkedin: "https://linkedin.com/in/yourprofile",
    xTwitter: "https://x.com/yourprofile",
  },
  showreel: {
    videoUrl: "https://youtu.be/zOUDz638RXU?si=KWgdJbyUPz8lVlUC",
    duration: "4:15",
    thumbnail: "https://img.youtube.com/vi/zOUDz638RXU/maxresdefault.jpg",
    skills: [
      "Storytelling",
      "Motion Graphics",
      "Sound Design",
      "Color Grading",
      "Dynamic Editing"
    ]
  }
};

export const SERVICES: ServiceItem[] = [
  {
    id: "service-1",
    number: "01",
    name: "YouTube Editing",
    tagline: "Long-form retention & storytelling",
    description: "Engaging long-form edits with strong pacing, storytelling, B-roll, captions, music and sound design.",
    deliverables: [
      "Narrative pacing & retention hooks",
      "B-roll curation & scene transitions",
      "Custom subtitles & kinetic text",
      "Balanced audio & soundtrack sync"
    ],
    idealFor: "Educational, commentary, vlog, documentary & gaming creators",
    iconName: "Youtube"
  },
  {
    id: "service-2",
    number: "02",
    name: "Shorts & Reels",
    tagline: "High-impact vertical retention",
    description: "Fast-paced short-form edits designed to grab attention and maintain viewer engagement.",
    deliverables: [
      "Dynamic 3-second hook construction",
      "Punchy kinetic subtitles with emphasis",
      "Fast cutaways, memes & zooms",
      "Optimized 9:16 framing & safe zones"
    ],
    idealFor: "TikTok, Instagram Reels & YouTube Shorts growth",
    iconName: "Smartphone"
  },
  {
    id: "service-3",
    number: "03",
    name: "Motion Graphics",
    tagline: "Visual explanations & branding",
    description: "Clean animations, titles, text effects, visual explanations and polished motion graphics.",
    deliverables: [
      "Custom lower-thirds & intro stings",
      "2D kinetic typography & callouts",
      "UI/App animations & chart graphics",
      "Branded transitions & lower thirds"
    ],
    idealFor: "Explainer videos, SaaS, podcasts & high-production channels",
    iconName: "Layers"
  },
  {
    id: "service-4",
    number: "04",
    name: "Sound Design",
    tagline: "Deep audio immersion",
    description: "Music, sound effects, dialogue cleanup and audio layering that make every scene more immersive.",
    deliverables: [
      "Vocal clarity EQ & noise reduction",
      "Layered foley, risers & whooshes",
      "Dynamic volume ducking around speech",
      "Curated non-generic music scoring"
    ],
    idealFor: "Elevating perceived production value instantly",
    iconName: "Volume2"
  },
  {
    id: "service-5",
    number: "05",
    name: "Color & Look",
    tagline: "Cinematic mood & consistency",
    description: "Clean color correction and cinematic grading to create the right mood and visual consistency.",
    deliverables: [
      "Log/RAW footage normalization",
      "Skin-tone accuracy & contrast balancing",
      "Multi-camera color matching",
      "Stylized cinematic creative looks"
    ],
    idealFor: "Documentaries, cinematic travel, commercial & brand videos",
    iconName: "Palette"
  }
];

export const PROCESS_STEPS: ProcessStep[] = [
  {
    stepNumber: "01",
    phase: "DISCOVER",
    title: "Tell Me About Your Project",
    description: "You share your footage, goals, references and vision. I understand what the video needs to achieve.",
    details: [
      "Footage review & media transfer",
      "Goal, target audience & tone discussion",
      "Reference videos & pacing preferences alignment"
    ]
  },
  {
    stepNumber: "02",
    phase: "PLAN",
    title: "Build the Story",
    description: "I organize the footage and build an editing direction around your story, audience and goals.",
    details: [
      "A-roll assembly & script trimming",
      "Story arc structuring & hook design",
      "Audio layout & pacing blueprints"
    ]
  },
  {
    stepNumber: "03",
    phase: "EDIT",
    title: "Bring It To Life",
    description: "I turn the raw footage into a polished edit with strong pacing, visuals, sound and storytelling.",
    details: [
      "Rough cut to fine cut refinement",
      "B-roll insertion & visual rhythm",
      "Motion graphics, sound effects & grading"
    ]
  },
  {
    stepNumber: "04",
    phase: "REVIEW",
    title: "Your Feedback, Refined",
    description: "You review the first cut and share your feedback. I refine the edit based on your direction.",
    details: [
      "Timestamped review link provided",
      "Clear, collaborative revision round",
      "Detail polishing & pacing adjustments"
    ]
  },
  {
    stepNumber: "05",
    phase: "DELIVER",
    title: "Ready To Publish",
    description: "Once everything is approved, I export and deliver your final video, ready to publish.",
    details: [
      "Full-resolution master export (4K / 1080p)",
      "Platform-optimized bitrates & audio levels",
      "Organized archive files & thumbnails if needed"
    ]
  }
];

export const PORTFOLIO_PROJECTS: PortfolioProject[] = [
  {
    id: "project-1",
    title: "The Architecture of Solitude",
    category: "DOCUMENTARY",
    type: "SPEC EDIT",
    thumbnail: "https://images.unsplash.com/photo-1518173946687-a4c8a383392e?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "",
    duration: "4:15",
    aspectRatio: "16:9",
    shortDescription: "A cinematic documentary exploring modern minimalist design through deliberate pacing, natural soundscapes, and atmospheric color grading.",
    skills: ["Storytelling", "Motion Graphics", "Sound Design", "Color Grading"],
    hasCaseStudy: true,
    caseStudy: {
      overview: "A narrative-driven documentary cut focused on mood, spatial acoustics, and structural cinematography.",
      challenge: "Raw footage lacked cohesive narration audio and needed a strong underlying emotional cadence through pacing and ambient soundscapes alone.",
      approach: "Story restructuring, deliberate B-roll selection, custom kinetic title design, deep multi-layered sound design, and soft filmic color treatment.",
      editingWork: [
        "A-roll narrative structuring from unscripted interview fragments",
        "Pacing calibration to let architectural frames breathe",
        "Layered atmospheric sound design with subtle spatial reverb",
        "Custom kinetic typography for chapter markers",
        "Film print emulation and contrast curve matching across three different camera profiles"
      ],
      techniques: [
        "J-cut & L-cut dialog transitions",
        "Natural reverb audio staging",
        "Custom 3D tracking title cards",
        "ACES color workflow"
      ],
      turnaround: "5 Days",
      deliverables: ["4K Master ProRes 422 HQ", "Web Optimized 1080p", "3x Promo Shorts"]
    }
  },
  {
    id: "project-2",
    title: "Deep Dive: How Algorithms Shape Modern Media",
    category: "YOUTUBE",
    type: "PERSONAL PROJECT",
    thumbnail: "https://images.unsplash.com/photo-1533750349088-cd871a92f312?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "",
    duration: "11:42",
    aspectRatio: "16:9",
    shortDescription: "High-retention YouTube essay featuring fluid vector animations, kinetic text explanations, fast B-roll matching, and voiceover synchronization.",
    skills: ["Retention Editing", "Motion Graphics", "Sound Effects", "YouTube Pacing"],
    hasCaseStudy: true,
    caseStudy: {
      overview: "Educational long-form YouTube essay designed to maintain high audience retention across an 11-minute runtime.",
      challenge: "Complex abstract technical concepts needed visual simplification without cluttering the screen or distracting from the narrator's voice.",
      approach: "Built animated infographic overlays, synchronized snappy sound design to visual cues, and used pattern interrupts every 15-20 seconds.",
      editingWork: [
        "Hook design with cold open animation teaser",
        "Custom vector chart & UI mockups in After Effects",
        "Carefully timed SFX risers, swooshes, and pop accents",
        "Subtle zoom punches and dynamic framing"
      ],
      techniques: [
        "Kinetic typography tracking",
        "Pattern interrupt cutting",
        "Adaptive background score ducking",
        "Color-coded section transitions"
      ],
      turnaround: "4 Days",
      deliverables: ["Full 1440p YouTube Master", "Custom Chapter Markers", "2x Vertical Teasers"]
    }
  },
  {
    id: "project-3",
    title: "Kinetic UI & Tech Product Teaser",
    category: "MOTION GRAPHICS",
    type: "SPEC EDIT",
    thumbnail: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "",
    duration: "0:45",
    aspectRatio: "16:9",
    shortDescription: "Fast, punchy 3D product motion graphics sequence showcasing dark mode interfaces, kinetic typography, and synchronized sound design.",
    skills: ["3D Camera Tracking", "After Effects", "Kinetic Typography", "Sound Design"],
    hasCaseStudy: true,
    caseStudy: {
      overview: "45-second commercial teaser spotlighting a modern software workflow.",
      challenge: "Transform static software UI mockups into an energetic visual sequence that feels fluid, physical, and premium.",
      approach: "Camera depth of field styling, isometric 2.5D perspective shifts, glow treatments, and synchronized rhythmic beat matching.",
      editingWork: [
        "Multi-layer UI element separation and animation",
        "Light sweep and reflection pass compositing",
        "Bass-heavy electronic score synchronization",
        "Seamless loop transition at end frame"
      ],
      techniques: [
        "Expressions-based inertia bounces",
        "Chromatic aberration accents",
        "Custom UI sound synthesizer FX"
      ],
      turnaround: "3 Days",
      deliverables: ["16:9 4K Commercial Master", "9:16 Vertical Cut", "1:1 Square Ad Cut"]
    }
  },
  {
    id: "project-4",
    title: "High-Energy Fitness & Lifestyle Reel",
    category: "SHORTS",
    type: "PERSONAL PROJECT",
    thumbnail: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "",
    duration: "0:30",
    aspectRatio: "9:16",
    shortDescription: "Vertical 9:16 short crafted with rapid frame cutting, speed ramps, beat synchronization, and glowing word-by-word subtitles.",
    skills: ["Speed Ramps", "Vertical Formatting", "Kinetic Subtitles", "Audio Sync"],
    hasCaseStudy: false
  },
  {
    id: "project-5",
    title: "Highland Expedition: Nordic Horizon",
    category: "CINEMATIC",
    type: "SPEC EDIT",
    thumbnail: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "",
    duration: "2:20",
    aspectRatio: "16:9",
    shortDescription: "Cinematic drone and ground camera travel visual with seamless speed transitions, organic film grain, and custom foley sound design.",
    skills: ["Color Grading", "Sound Design", "Speed Ramping", "Drone Cut Sequencing"],
    hasCaseStudy: true,
    caseStudy: {
      overview: "Atmospheric travel sequence shot across harsh Nordic landscapes.",
      challenge: "Footage from mixed cameras (GoPro, Drone 8-bit, Sony Log) required uniform contrast, sky tone coherence, and immersive spatial winds.",
      approach: "Detailed color calibration across all sensors, speed-ramp matching on horizon sweeps, and building rich foley layers for wind, water, and footsteps.",
      editingWork: [
        "Sensor match and sky recovery",
        "Dynamic speed ramp transitions into whip pans",
        "Full spatial audio mix with layered organic foley",
        "Cinematic letterboxing and halation bloom"
      ],
      techniques: [
        "Optical flow re-timing",
        "Color gamut remapping",
        "Ambisonic audio spatialization"
      ],
      turnaround: "4 Days",
      deliverables: ["4K Cinematic Master (2.39:1 Aspect)", "1080p Standard"]
    }
  },
  {
    id: "project-6",
    title: "30-Day Productivity System Breakdown",
    category: "YOUTUBE",
    type: "SPEC EDIT",
    thumbnail: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=1200&q=80",
    videoUrl: "",
    duration: "8:50",
    aspectRatio: "16:9",
    shortDescription: "Clean, fast-paced educational talking-head edit with animated text callouts, split-screen comparisons, and chapter transitions.",
    skills: ["Talking Head Pacing", "Split Screens", "Sound Sync", "B-Roll Cutaways"],
    hasCaseStudy: false
  }
];

export const WHY_ME_POINTS: WhyMePoint[] = [
  {
    number: "01",
    title: "STORY-FIRST EDITING",
    description: "I don't just cut footage. I focus on structure, pacing and storytelling to make every moment serve a purpose.",
    subtext: "Every frame, pause, and cut is calculated to keep viewers emotionally invested and engaged from start to finish."
  },
  {
    number: "02",
    title: "ATTENTION TO DETAIL",
    description: "Clean cuts, balanced audio, consistent colors and polished motion graphics.",
    subtext: "No clipped audio transients, no sloppy jump cuts, and no inconsistent color temperatures across camera angles."
  },
  {
    number: "03",
    title: "CLEAR COMMUNICATION",
    description: "Clear communication, organized feedback and regular project updates.",
    subtext: "You always know where your project stands, with structured revision workflows and responsive communication."
  },
  {
    number: "04",
    title: "RELIABLE DELIVERY",
    description: "I respect the agreed timeline and keep the project moving toward final delivery.",
    subtext: "Prompt deliveries without sacrificing the polish your audience expects."
  }
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    id: "faq-1",
    question: "What type of videos do you edit?",
    answer: "I specialize in YouTube long-form videos (educational, essay, commentary, storytelling), Shorts & Reels, documentary edits, commercial brand teasers, and motion graphics packages. Whether it is talking-head footage that needs dynamic pacing or multi-camera footage requiring narrative structure, I tailor the edit to your goals."
  },
  {
    id: "faq-2",
    question: "Do you edit YouTube long-form videos?",
    answer: "Yes. Long-form YouTube editing is one of my primary services. I focus on strong introductory hooks, storytelling pacing, B-roll integration, custom animations, clean captions, and curated sound design to keep audience retention high throughout the video."
  },
  {
    id: "faq-3",
    question: "Do you edit Shorts and Reels?",
    answer: "Yes. I edit fast-paced, high-engagement vertical (9:16) videos for YouTube Shorts, Instagram Reels, and TikTok. These include dynamic kinetic subtitles, pattern interrupts, sound effects, and attention-grabbing hooks optimized for mobile viewing."
  },
  {
    id: "faq-4",
    question: "How does the editing process work?",
    answer: "The process has 5 simple steps: (1) Discover: You share your footage, vision, and references. (2) Plan: I organize the assets and outline the story. (3) Edit: I craft the first cut with visuals, sound, and graphics. (4) Review: You review the timestamped cut and provide feedback. (5) Deliver: I deliver the finalized full-resolution export ready for publishing."
  },
  {
    id: "faq-5",
    question: "How do I send my footage?",
    answer: "You can upload your raw media, audio files, and assets via Google Drive, Dropbox, Frame.io, WeTransfer, or OneDrive. I recommend sharing organized folders with any scripts, voiceovers, or brand assets."
  },
  {
    id: "faq-6",
    question: "How many revisions are included?",
    answer: "Every project includes structured revision rounds (typically 2 detailed rounds) to refine pacing, text, music, and visuals until the cut aligns with your vision. Clear timestamped feedback ensures fast turnarounds."
  },
  {
    id: "faq-7",
    question: "How long does an edit take?",
    answer: "Turnaround time depends on the project scope, footage volume, and complexity. Typically, Shorts/Reels take 24–48 hours, while standard YouTube long-form edits take 3–5 business days. Exact delivery schedules are confirmed upfront before starting."
  },
  {
    id: "faq-8",
    question: "Can I send a reference video?",
    answer: "Absolutely! Reference videos, channels, or mood boards are encouraged. They help align on your preferred pacing, typography style, music mood, and overall visual tone right from the start."
  },
  {
    id: "faq-9",
    question: "Do you provide motion graphics and sound design?",
    answer: "Yes. Both motion graphics (kinetic text, title cards, callouts, lower thirds) and sound design (dialogue cleanup, foley, sound effects, music selection and mixing) are integral parts of every edit I deliver."
  },
  {
    id: "faq-10",
    question: "How can I start a project?",
    answer: "Simply scroll down to the 'Hire Me' section or click the button in the top navigation. Fill out the quick project inquiry form with details about your footage, timeline, and goals, and I will get back to you promptly with next steps."
  }
];

export const EDITING_SPECS = {
  primaryTools: [
    { name: "Adobe Premiere Pro", category: "Core Editing & Assembly" },
    { name: "Adobe After Effects", category: "Motion Graphics & VFX" },
    { name: "DaVinci Resolve Studio", category: "Color Grading & Finishing" },
    { name: "Adobe Audition / iZotope", category: "Audio Cleanup & Sound Mixing" }
  ],
  workflowStrengths: [
    "Strict Folder & Asset Organization",
    "Frame.io Timestamped Review Integration",
    "Color-Accurate Calibrated Display Workflow",
    "High-Speed Cloud Transfer Management"
  ]
};
