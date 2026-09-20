import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Github, 
  Mail, 
  FileText, 
  Cpu, 
  Sparkles, 
  ShieldCheck, 
  Layers, 
  ExternalLink,
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/personal';
import AmbientCanvas from './AmbientCanvas';
import portraitImage from '../assets/images/biruk_portrait_1789856194221.jpg';

interface HeroProps {
  onOpenResume: () => void;
}

export default function Hero({ onOpenResume }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(100);

  const roles = PERSONAL_INFO.roles; // ['Full-Stack Developer', 'AI/ML Engineer']

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentRole.length) {
          setTypingSpeed(1900);
          setIsDeleting(true);
        } else {
          setTypingSpeed(75);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(300);
        } else {
          setTypingSpeed(45);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, roles, typingSpeed]);

  return (
    <section
      id="home"
      className="relative min-h-screen pt-28 pb-20 flex items-center justify-center overflow-hidden transition-colors duration-300"
      style={{ perspective: '1200px' }}
    >
      {/* 3D Dynamic Background Network Canvas in Green, White & Black */}
      <AmbientCanvas />

      {/* 3D Atmospheric Depth Glow Orbs */}
      <div
        className="pointer-events-none absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[650px] h-[360px] bg-emerald-500/15 rounded-full blur-[130px] dark:opacity-80 opacity-40 animate-pulse-glow"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute bottom-1/4 right-10 w-[420px] h-[320px] bg-emerald-600/10 rounded-full blur-[110px] dark:opacity-70 opacity-30"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Core Positioning, Typography & Actions */}
          <div className="lg:col-span-7 flex flex-col items-start text-left">
            
            {/* Status & University Badge (2024 — 2028) with Continuous Animated Border */}
            <div
              id="hero-status-pill"
              className="continuous-gradient-border inline-flex items-center p-[1.5px] rounded-full shadow-lg mb-6 transition-all hover:scale-[1.02]"
            >
              <div className="continuous-gradient-spin-layer absolute -inset-[120%] pointer-events-none" />
              <div className="relative z-10 inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/95 dark:bg-black/90 backdrop-blur-md">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-400 shadow-[0_0_8px_rgba(52,211,153,0.9)]"></span>
                </span>
                <span className="text-xs font-semibold text-zinc-950 dark:text-emerald-100">
                  ASTU Engineering (2024 — 2028)
                </span>
                <span className="text-emerald-500/60">|</span>
                <span className="text-xs text-emerald-700 dark:text-cyan-300 font-mono font-bold">
                  Addis Ababa, Ethiopia
                </span>
              </div>
            </div>

            {/* Name with Gradient Look */}
            <h1
              id="hero-main-name"
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-gradient-title mb-3"
            >
              {PERSONAL_INFO.name}
            </h1>

            {/* Dynamic Role Cycler: Full-Stack Developer | AI/ML Engineer with Animated Flowing Gradient */}
            <div className="h-10 sm:h-12 flex items-center mb-6">
              <span className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-800 dark:text-slate-200 mr-2">
                I am a
              </span>
              <span
                id="hero-dynamic-role"
                className="text-xl sm:text-2xl md:text-3xl font-black text-gradient-animated font-mono tracking-tight"
              >
                {displayedText}
                <span className="inline-block w-0.5 h-6 bg-emerald-400 ml-1 animate-pulse align-middle shadow-[0_0_8px_rgba(52,211,153,0.8)]" />
              </span>
            </div>

            {/* Primary & Secondary Hero Descriptions */}
            <p
              id="hero-tagline"
              className="text-base sm:text-lg text-zinc-900 dark:text-slate-200 leading-relaxed max-w-2xl mb-4 font-normal"
            >
              {PERSONAL_INFO.heroTagline}
            </p>

            <p
              id="hero-subtagline"
              className="text-sm text-zinc-800 dark:text-emerald-200/90 leading-relaxed max-w-2xl mb-8 font-medium"
            >
              {PERSONAL_INFO.heroSubTagline}
            </p>

            {/* Action Buttons: 3D Transparent Gradient Styling */}
            <div className="flex flex-wrap items-center gap-3.5 mb-10">
              <a
                id="hero-btn-projects"
                href="#projects"
                className="btn-3d-gradient inline-flex items-center gap-2 px-5 py-3 rounded-xl text-sm font-bold text-emerald-950 dark:text-white hover:text-white transition-all cursor-pointer"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4 text-emerald-600 dark:text-emerald-300" />
              </a>

              <a
                id="hero-btn-github"
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d-transparent inline-flex items-center gap-2 px-4.5 py-3 rounded-xl text-sm font-semibold text-zinc-950 dark:text-slate-100 hover:text-emerald-600 dark:hover:text-emerald-300 transition-all"
              >
                <Github className="w-4 h-4 text-emerald-600 dark:text-emerald-300" />
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>

              <a
                id="hero-btn-contact"
                href="#contact"
                className="btn-3d-transparent inline-flex items-center gap-2 px-4.5 py-3 rounded-xl text-sm font-semibold text-zinc-950 dark:text-slate-100 hover:text-emerald-600 dark:hover:text-emerald-300 transition-all"
              >
                <Mail className="w-4 h-4 text-emerald-600 dark:text-emerald-300" />
                <span>Contact Me</span>
              </a>

              <button
                id="hero-btn-resume"
                type="button"
                onClick={onOpenResume}
                className="btn-3d-gradient inline-flex items-center gap-2 px-4.5 py-3 rounded-xl text-sm font-bold text-emerald-950 dark:text-emerald-200 hover:text-white transition-all cursor-pointer"
              >
                <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-300" />
                <span>View Resume</span>
              </button>
            </div>

            {/* Architectural Highlights Strip */}
            <div className="pt-6 border-t border-black/10 dark:border-emerald-500/20 w-full grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-300 shadow-[0_0_8px_rgba(52,211,153,0.3)]">
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-950 dark:text-white">AI/ML Engineering</div>
                  <div className="text-[11px] text-zinc-700 dark:text-slate-300 font-mono">PyTorch • LangGraph • RAG</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5">
                <div className="p-1.5 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-300 shadow-[0_0_8px_rgba(52,211,153,0.3)]">
                  <Layers className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-950 dark:text-white">Full-Stack Systems</div>
                  <div className="text-[11px] text-zinc-700 dark:text-slate-300 font-mono">React • FastAPI • Node • TS</div>
                </div>
              </div>

              <div className="flex items-center gap-2.5 col-span-2 sm:col-span-1">
                <div className="p-1.5 rounded-md bg-emerald-500/15 border border-emerald-500/30 text-emerald-600 dark:text-emerald-300 shadow-[0_0_8px_rgba(52,211,153,0.3)]">
                  <ShieldCheck className="w-4 h-4" />
                </div>
                <div>
                  <div className="text-xs font-bold text-zinc-950 dark:text-white">Production Systems</div>
                  <div className="text-[11px] text-zinc-700 dark:text-slate-300 font-mono">ASTU 2024 — 2028</div>
                </div>
              </div>
            </div>

          </div>

          {/* Right Column: Biruk Ahmye Official Portrait with Continuous Animated Gradient Halo */}
          <div className="lg:col-span-5 relative flex items-center justify-center">
            <div className="relative mx-auto w-full max-w-sm sm:max-w-md flex flex-col items-center">
              
              {/* Outer 3D ambient green glow ring */}
              <div 
                className="absolute -inset-4 bg-gradient-to-tr from-emerald-500/30 via-emerald-400/20 to-white/20 dark:from-emerald-500/30 dark:via-emerald-400/20 dark:to-transparent rounded-full blur-2xl opacity-75 animate-pulse-glow"
                aria-hidden="true" 
              />

              {/* Decorative 3D Rotating Orbit Lines in Green and White */}
              <div 
                className="absolute -inset-2 rounded-full border border-emerald-400/40 dark:border-emerald-400/50 border-emerald-500/50 animate-spin-slow pointer-events-none"
                aria-hidden="true" 
              />
              <div 
                className="absolute -inset-6 rounded-full border border-dashed border-emerald-500/30 dark:border-emerald-500/40 border-black/20 animate-spin-slow pointer-events-none"
                style={{ animationDirection: 'reverse', animationDuration: '28s' }}
                aria-hidden="true" 
              />

              {/* 3D Photo Container with Continuous Gradient Halo */}
              <div
                id="hero-portrait-card"
                className="continuous-gradient-border relative rounded-full p-[2.5px] shadow-2xl backdrop-blur-md transition-all duration-500 hover:scale-[1.03]"
                style={{ transformStyle: 'preserve-3d' }}
              >
                <div className="continuous-gradient-spin-layer absolute -inset-[120%] pointer-events-none" />

                {/* Circular Portrait Image */}
                <div className="relative z-10 w-64 h-64 sm:w-80 sm:h-80 rounded-full overflow-hidden border-2 border-emerald-400/60 shadow-inner bg-black">
                  <img
                      src={portraitImage}
                    alt="Biruk Ahmye - Full-Stack Developer & AI/ML Engineer"
                      className="w-full h-full object-cover object-center [image-rendering:auto] transition-transform duration-700 hover:scale-105"
                    loading="eager"
                  />
                </div>

              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
