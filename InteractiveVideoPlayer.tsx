import React, { useState, useRef, useEffect } from 'react';
import { 
  Play, 
  Pause, 
  Volume2, 
  VolumeX, 
  Maximize, 
  Minimize, 
  RotateCcw,
  Sparkles,
  ExternalLink
} from 'lucide-react';

interface VideoPlayerProps {
  videoUrl?: string;
  thumbnail?: string;
  title?: string;
  durationLabel?: string;
  accentGlow?: boolean;
  aspectRatio?: '16:9' | '9:16';
  autoPlay?: boolean;
}

export function getYouTubeVideoId(url?: string): string | null {
  if (!url) return null;
  const regExp = /(?:youtube\.com\/(?:[^\/]+\/.+\/|(?:v|e(?:mbed)?)\/|.*[?&]v=)|youtu\.be\/)([^"&?\/\s]{11})/i;
  const match = url.match(regExp);
  return match ? match[1] : null;
}

export const InteractiveVideoPlayer: React.FC<VideoPlayerProps> = ({
  videoUrl = '',
  thumbnail,
  title = "Showreel 2026",
  durationLabel = "0:30",
  accentGlow = true,
  aspectRatio = '16:9',
  autoPlay = false
}) => {
  const [isPlaying, setIsPlaying] = useState(autoPlay);
  const [currentTime, setCurrentTime] = useState(0);
  const [totalDuration, setTotalDuration] = useState(30); // 30s default showreel
  const [isMuted, setIsMuted] = useState(false);
  const [volume, setVolume] = useState(0.8);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const [activePlaybackSpeed, setActivePlaybackSpeed] = useState(1);
  const [hasStarted, setHasStarted] = useState(autoPlay);
  const [simulatedSceneIndex, setSimulatedSceneIndex] = useState(0);

  const containerRef = useRef<HTMLDivElement>(null);
  const videoRef = useRef<HTMLVideoElement>(null);
  const hideControlsTimeout = useRef<NodeJS.Timeout | null>(null);

  const youtubeId = getYouTubeVideoId(videoUrl);
  const effectiveThumbnail = thumbnail || (youtubeId ? `https://img.youtube.com/vi/${youtubeId}/maxresdefault.jpg` : undefined);

  // Simulated scenes for showreel showcase if no direct mp4/youtube is provided
  const simulatedScenes = [
    { title: "Story Structure & Hook", tag: "Narrative Arc", color: "from-blue-600/30 to-zinc-900" },
    { title: "Kinetic Motion Graphics & Title 3D", tag: "Visual VFX", color: "from-orange-500/30 to-zinc-900" },
    { title: "Dynamic Sound Design & Dialogue Pacing", tag: "Audio Immersion", color: "from-cyan-600/30 to-zinc-900" },
    { title: "Cinematic Color Grade & Contrast Curves", tag: "Color Grading", color: "from-amber-600/30 to-zinc-900" },
    { title: "High-Retention Pattern Interrupts", tag: "Audience Retention", color: "from-indigo-600/30 to-zinc-900" },
  ];

  // Parse duration label like "0:30" or "4:15"
  useEffect(() => {
    if (durationLabel) {
      const parts = durationLabel.split(':').map(Number);
      if (parts.length === 2 && !isNaN(parts[0]) && !isNaN(parts[1])) {
        setTotalDuration(parts[0] * 60 + parts[1]);
      }
    }
  }, [durationLabel]);

  // Simulation timer when playing fallback mode without videoUrl
  useEffect(() => {
    let interval: NodeJS.Timeout;
    if (isPlaying && !videoUrl && !youtubeId) {
      interval = setInterval(() => {
        setCurrentTime((prev) => {
          if (prev >= totalDuration) {
            setIsPlaying(false);
            return 0;
          }
          const nextTime = prev + 0.25 * activePlaybackSpeed;
          const sceneIdx = Math.floor((nextTime / totalDuration) * simulatedScenes.length) % simulatedScenes.length;
          setSimulatedSceneIndex(sceneIdx);
          return nextTime;
        });
      }, 250);
    }
    return () => clearInterval(interval);
  }, [isPlaying, totalDuration, activePlaybackSpeed, videoUrl, youtubeId]);

  // Handle native video timeupdate
  const handleTimeUpdate = () => {
    if (videoRef.current) {
      setCurrentTime(videoRef.current.currentTime);
      setTotalDuration(videoRef.current.duration || 30);
    }
  };

  const togglePlay = () => {
    if (!hasStarted) setHasStarted(true);
    if (videoRef.current && videoUrl && !youtubeId) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play().catch(() => {});
      }
    }
    setIsPlaying(!isPlaying);
  };

  const handleSeek = (e: React.ChangeEvent<HTMLInputElement>) => {
    const time = parseFloat(e.target.value);
    setCurrentTime(time);
    if (videoRef.current && videoUrl && !youtubeId) {
      videoRef.current.currentTime = time;
    }
  };

  const toggleMute = () => {
    if (videoRef.current && videoUrl && !youtubeId) {
      videoRef.current.muted = !isMuted;
    }
    setIsMuted(!isMuted);
  };

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const val = parseFloat(e.target.value);
    setVolume(val);
    if (videoRef.current && videoUrl && !youtubeId) {
      videoRef.current.volume = val;
      videoRef.current.muted = val === 0;
    }
    setIsMuted(val === 0);
  };

  const toggleFullscreen = () => {
    if (!containerRef.current) return;
    if (!document.fullscreenElement) {
      containerRef.current.requestFullscreen().then(() => setIsFullscreen(true)).catch(() => {});
    } else {
      document.exitFullscreen().then(() => setIsFullscreen(false)).catch(() => {});
    }
  };

  // Keyboard accessibility
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (youtubeId && isPlaying) return; // let iframe handle its own hotkeys
    if (e.key === ' ' || e.key === 'k') {
      e.preventDefault();
      togglePlay();
    } else if (e.key === 'm') {
      e.preventDefault();
      toggleMute();
    } else if (e.key === 'f') {
      e.preventDefault();
      toggleFullscreen();
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      const newTime = Math.min(totalDuration, currentTime + 5);
      setCurrentTime(newTime);
      if (videoRef.current) videoRef.current.currentTime = newTime;
    } else if (e.key === 'ArrowLeft') {
      e.preventDefault();
      const newTime = Math.max(0, currentTime - 5);
      setCurrentTime(newTime);
      if (videoRef.current) videoRef.current.currentTime = newTime;
    }
  };

  const formatTime = (secs: number) => {
    const mins = Math.floor(secs / 60);
    const remainderSecs = Math.floor(secs % 60);
    return `${mins}:${remainderSecs < 10 ? '0' : ''}${remainderSecs}`;
  };

  const handleMouseMove = () => {
    setShowControls(true);
    if (hideControlsTimeout.current) clearTimeout(hideControlsTimeout.current);
    if (isPlaying) {
      hideControlsTimeout.current = setTimeout(() => {
        setShowControls(false);
      }, 2500);
    }
  };

  const progressPercent = totalDuration > 0 ? (currentTime / totalDuration) * 100 : 0;
  const currentScene = simulatedScenes[simulatedSceneIndex] || simulatedScenes[0];

  return (
    <div
      ref={containerRef}
      id="interactive-video-player"
      tabIndex={0}
      onKeyDown={handleKeyDown}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => isPlaying && setShowControls(false)}
      className={`relative group rounded-2xl md:rounded-3xl overflow-hidden bg-[#0A0A0E] border border-zinc-800 select-none transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#2563FF]/50 ${
        aspectRatio === '9:16' ? 'aspect-[9/16] max-w-sm mx-auto' : 'aspect-video w-full'
      } ${accentGlow ? 'shadow-[0_0_50px_-15px_rgba(37,99,255,0.25)] hover:shadow-[0_0_60px_-10px_rgba(255,138,91,0.2)]' : 'shadow-2xl'}`}
    >
      {/* Ambient gradient lighting glow behind player frame */}
      <div className="absolute -inset-1 bg-gradient-to-r from-[#2563FF]/10 via-[#FF8A5B]/10 to-[#2563FF]/10 opacity-70 blur-xl pointer-events-none -z-10" />

      {/* 1. YouTube Video Case */}
      {youtubeId ? (
        isPlaying ? (
          <div className="relative w-full h-full bg-black">
            <iframe
              src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1&rel=0&modestbranding=1`}
              title={title}
              className="w-full h-full border-0 absolute inset-0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            />
          </div>
        ) : (
          <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-[#09090D] cursor-pointer" onClick={togglePlay}>
            {effectiveThumbnail && (
              <img
                src={effectiveThumbnail}
                alt={title}
                onError={(e) => {
                  // Fallback to hqdefault if maxresdefault fails
                  (e.target as HTMLImageElement).src = `https://img.youtube.com/vi/${youtubeId}/hqdefault.jpg`;
                }}
                referrerPolicy="no-referrer"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 brightness-75 group-hover:scale-105 group-hover:brightness-90"
              />
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/20 pointer-events-none" />

            {/* Centered Play Button */}
            <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 max-w-md">
              <button
                onClick={(e) => {
                  e.stopPropagation();
                  togglePlay();
                }}
                id="showreel-youtube-play-btn"
                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-[#2563FF] hover:bg-[#1d4ed8] text-white flex items-center justify-center shadow-2xl shadow-blue-500/50 hover:scale-110 hover:shadow-orange-500/40 transition-all duration-300 group cursor-pointer border border-white/25"
                aria-label="Play showreel video"
              >
                <Play className="w-8 h-8 md:w-10 md:h-10 fill-white text-white ml-1 group-hover:scale-105 transition-transform" />
              </button>
              <div className="mt-4 inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-black/80 border border-zinc-700 backdrop-blur-md text-[11px] font-mono tracking-widest text-zinc-200 uppercase">
                <span className="w-2 h-2 rounded-full bg-[#FF8A5B] animate-pulse" />
                <span>PLAY SHOWREEL • 4K ULTRA HD</span>
              </div>
            </div>

            {/* Direct YouTube Link Badge */}
            <a
              href={videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={(e) => e.stopPropagation()}
              className="absolute top-4 right-4 z-20 inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-black/70 hover:bg-black text-zinc-300 hover:text-white text-xs font-mono border border-zinc-700 backdrop-blur-md transition-colors"
            >
              <span>Watch on YouTube</span>
              <ExternalLink className="w-3 h-3 text-[#FF8A5B]" />
            </a>
          </div>
        )
      ) : videoUrl ? (
        /* 2. Direct MP4 / HTML5 Video Case */
        <video
          ref={videoRef}
          src={videoUrl}
          poster={effectiveThumbnail}
          onTimeUpdate={handleTimeUpdate}
          onEnded={() => setIsPlaying(false)}
          className="w-full h-full object-cover"
          playsInline
        />
      ) : (
        /* 3. High-end Cinematic Simulation Reel Preview Canvas (Fallback) */
        <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden bg-[#09090D]">
          {effectiveThumbnail && (
            <img
              src={effectiveThumbnail}
              alt="Video Poster"
              referrerPolicy="no-referrer"
              className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
                isPlaying ? 'scale-105 filter brightness-40 blur-[1px]' : 'brightness-75 group-hover:scale-102'
              }`}
            />
          )}

          <div className={`absolute inset-0 bg-gradient-to-t ${currentScene.color} transition-colors duration-1000 opacity-60 mix-blend-screen pointer-events-none`} />
          <div className="absolute inset-0 bg-black/40 pointer-events-none" />

          {!isPlaying && !hasStarted && (
            <div className="relative z-10 flex flex-col items-center justify-center text-center p-6 max-w-md">
              <button
                onClick={togglePlay}
                id="showreel-main-play-btn"
                className="w-20 h-20 md:w-24 md:h-24 rounded-full bg-gradient-to-tr from-[#2563FF] to-blue-500 text-white flex items-center justify-center shadow-2xl shadow-blue-500/40 hover:scale-110 hover:shadow-orange-500/30 transition-all duration-300 group cursor-pointer border border-white/20"
                aria-label="Play showreel video"
              >
                <Play className="w-8 h-8 md:w-10 md:h-10 fill-white text-white ml-1 group-hover:scale-105 transition-transform" />
              </button>
              <div className="mt-4 px-3 py-1 rounded-full bg-black/70 border border-white/10 backdrop-blur-sm text-[11px] font-mono tracking-widest text-zinc-300 uppercase">
                SHOWREEL • {durationLabel} 4K
              </div>
            </div>
          )}

          {isPlaying && (
            <div className="relative z-10 w-full h-full flex flex-col justify-between p-6 sm:p-8 pointer-events-none">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md">
                  <div className="w-2 h-2 rounded-full bg-red-500 animate-pulse" />
                  <span className="text-xs font-mono font-medium tracking-wider text-white">REEL PLAYBACK • 24 FPS</span>
                </div>
                <div className="px-3 py-1 rounded-full bg-black/60 border border-white/10 backdrop-blur-md text-xs font-medium text-[#FF8A5B] flex items-center gap-1.5 font-mono">
                  <Sparkles className="w-3.5 h-3.5" />
                  <span>{currentScene.tag}</span>
                </div>
              </div>

              <div className="text-center my-auto transition-all duration-500 transform">
                <p className="text-xs uppercase tracking-widest text-[#2563FF] font-mono mb-1 font-bold">Highlight Demo</p>
                <h4 className="text-xl sm:text-2xl md:text-3xl font-display font-extrabold text-white drop-shadow-md">
                  {currentScene.title}
                </h4>
                <div className="flex items-center justify-center gap-2 mt-3">
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-white/10 text-zinc-300 font-mono">100% TIMELINE EDIT</span>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#2563FF]/20 text-[#2563FF] font-mono">COLOR GRADED</span>
                  <span className="text-[10px] px-2.5 py-0.5 rounded-full bg-[#FF8A5B]/20 text-[#FF8A5B] font-mono">AUDIO BALANCED</span>
                </div>
              </div>

              <div className="text-right">
                <span className="text-[11px] font-mono text-zinc-400 bg-black/50 px-2 py-0.5 rounded">
                  FRAME {Math.floor(currentTime * 24)}
                </span>
              </div>
            </div>
          )}
        </div>
      )}

      {/* Control Bar Overlay for Native HTML5 Video & Simulation */}
      {!youtubeId && (
        <div
          className={`absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/95 via-black/70 to-transparent p-3 sm:p-4 pt-12 transition-opacity duration-300 z-20 ${
            showControls || !isPlaying ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
        >
          {/* Scrubber */}
          <div className="relative mb-3 flex items-center group/scrubber cursor-pointer">
            <input
              type="range"
              min={0}
              max={totalDuration}
              step={0.1}
              value={currentTime}
              onChange={handleSeek}
              className="w-full h-1.5 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#2563FF] hover:h-2 transition-all focus:outline-none"
              aria-label="Video scrubber timeline"
            />
            <div
              className="absolute left-0 top-0 h-1.5 rounded-lg bg-gradient-to-r from-[#2563FF] to-[#FF8A5B] pointer-events-none group-hover/scrubber:h-2 transition-all"
              style={{ width: `${progressPercent}%` }}
            />
          </div>

          {/* Lower Controls Row */}
          <div className="flex items-center justify-between text-white text-xs sm:text-sm">
            <div className="flex items-center gap-2 sm:gap-4">
              <button
                onClick={togglePlay}
                className="p-1.5 rounded-lg hover:bg-white/10 text-white transition-colors focus:outline-none focus:ring-1 focus:ring-[#2563FF] cursor-pointer"
                aria-label={isPlaying ? "Pause" : "Play"}
              >
                {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5 fill-white" />}
              </button>

              <button
                onClick={() => {
                  setCurrentTime(0);
                  if (videoRef.current) videoRef.current.currentTime = 0;
                }}
                className="p-1.5 rounded-lg hover:bg-white/10 text-zinc-400 hover:text-white transition-colors focus:outline-none cursor-pointer hidden xs:block"
                aria-label="Restart Video"
              >
                <RotateCcw className="w-4 h-4" />
              </button>

              <div className="font-mono text-xs text-zinc-300 tabular-nums">
                <span>{formatTime(currentTime)}</span>
                <span className="text-zinc-500 mx-1">/</span>
                <span className="text-zinc-400">{formatTime(totalDuration)}</span>
              </div>
            </div>

            <div className="flex items-center gap-2 sm:gap-3">
              <div className="flex items-center gap-1.5 group/vol">
                <button
                  onClick={toggleMute}
                  className="p-1.5 rounded-lg hover:bg-white/10 text-zinc-300 hover:text-white transition-colors focus:outline-none cursor-pointer"
                  aria-label={isMuted ? "Unmute" : "Mute"}
                >
                  {isMuted || volume === 0 ? <VolumeX className="w-4 h-4 text-red-400" /> : <Volume2 className="w-4 h-4" />}
                </button>
                <input
                  type="range"
                  min={0}
                  max={1}
                  step={0.05}
                  value={isMuted ? 0 : volume}
                  onChange={handleVolumeChange}
                  className="w-14 sm:w-18 h-1 bg-white/20 rounded-lg appearance-none cursor-pointer accent-[#2563FF] hidden sm:block"
                  aria-label="Volume slider"
                />
              </div>

              <button
                onClick={() => {
                  const speeds = [1, 1.25, 1.5, 2];
                  const nextIdx = (speeds.indexOf(activePlaybackSpeed) + 1) % speeds.length;
                  setActivePlaybackSpeed(speeds[nextIdx]);
                  if (videoRef.current) videoRef.current.playbackRate = speeds[nextIdx];
                }}
                className="px-2 py-1 rounded-full bg-zinc-800 hover:bg-zinc-700 text-[11px] font-mono text-zinc-300 hover:text-white transition-colors cursor-pointer"
                title="Change playback speed"
              >
                {activePlaybackSpeed}x
              </button>

              <span className="hidden md:inline-block text-[10px] font-mono px-2 py-0.5 rounded-full bg-[#2563FF]/20 text-[#2563FF] border border-[#2563FF]/30">
                4K 60FPS
              </span>

              <button
                onClick={toggleFullscreen}
                className="p-1.5 rounded-lg hover:bg-white/10 text-zinc-300 hover:text-white transition-colors focus:outline-none cursor-pointer"
                aria-label={isFullscreen ? "Exit Fullscreen" : "Enter Fullscreen"}
              >
                {isFullscreen ? <Minimize className="w-4 h-4" /> : <Maximize className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

