import { useState, useEffect } from 'react';
import { 
  ArrowRight, 
  Github, 
  Mail, 
  FileText, 
  Cpu, 
  Layers, 
  GraduationCap, 
  Terminal, 
  ExternalLink,
  ShieldCheck,
  CheckCircle2
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/personal';
import portraitImage from '../assets/images/biruk_portrait_1789856194221.jpg';

interface HeroProps {
  onOpenResume: () => void;
  onOpenConsole?: () => void;
}

export default function Hero({ onOpenResume, onOpenConsole }: HeroProps) {
  const [roleIndex, setRoleIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const [typingSpeed, setTypingSpeed] = useState(90);

  const roles = PERSONAL_INFO.roles;

  useEffect(() => {
    const currentRole = roles[roleIndex];

    const timer = setTimeout(() => {
      if (!isDeleting) {
        setDisplayedText(currentRole.substring(0, displayedText.length + 1));
        if (displayedText.length + 1 === currentRole.length) {
          setTypingSpeed(1800);
          setIsDeleting(true);
        } else {
          setTypingSpeed(75);
        }
      } else {
        setDisplayedText(currentRole.substring(0, displayedText.length - 1));
        if (displayedText.length === 0) {
          setIsDeleting(false);
          setRoleIndex((prev) => (prev + 1) % roles.length);
          setTypingSpeed(250);
        } else {
          setTypingSpeed(40);
        }
      }
    }, typingSpeed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, roleIndex, roles, typingSpeed]);

  return (
    <section
      id="home"
      className="relative pt-24 sm:pt-28 pb-12 sm:pb-16 flex items-center justify-center transition-colors duration-200"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        
        {/* Main Hero Bento Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
          
          {/* Bento Cell 1: Core Identity & Dynamic Positioning (8 cols) */}
          <div className="lg:col-span-8 bento-card p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              {/* Status & University Pill */}
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-500/30 text-xs font-mono mb-5 shadow-xs">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="font-semibold text-emerald-900 dark:text-emerald-200">
                  ASTU Engineering (2024 — 2028)
                </span>
                <span className="text-zinc-300 dark:text-zinc-600">•</span>
                <span className="text-emerald-700 dark:text-cyan-300 font-bold">
                  Addis Ababa, Ethiopia
                </span>
              </div>

              {/* Main Name */}
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-zinc-950 dark:text-white mb-3">
                {PERSONAL_INFO.name}
              </h1>

              {/* Dynamic Role Cycler */}
              <div className="h-9 sm:h-11 flex items-center mb-5">
                <span className="text-lg sm:text-2xl font-bold text-zinc-700 dark:text-zinc-300 mr-2">
                  I am a
                </span>
                <span className="text-lg sm:text-2xl md:text-3xl font-black text-gradient-animated font-mono tracking-tight">
                  {displayedText}
                  <span className="inline-block w-0.5 h-5 sm:h-6 bg-emerald-500 ml-1 animate-pulse align-middle" />
                </span>
              </div>

              {/* Taglines with High-Contrast Typography */}
              <p className="text-sm sm:text-base text-zinc-800 dark:text-zinc-300 leading-relaxed max-w-2xl mb-3 font-normal">
                {PERSONAL_INFO.heroTagline}
              </p>

              <p className="text-xs sm:text-sm text-zinc-600 dark:text-emerald-300/90 leading-relaxed max-w-2xl mb-6 font-medium">
                {PERSONAL_INFO.heroSubTagline}
              </p>
            </div>

            {/* Actions Button Strip */}
            <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-200/80 dark:border-zinc-800/80">
              <a
                href="#projects"
                className="btn-primary"
              >
                <span>View Projects</span>
                <ArrowRight className="w-4 h-4" />
              </a>

              <button
                type="button"
                onClick={onOpenResume}
                className="btn-secondary"
              >
                <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                <span>Resume (PDF)</span>
              </button>

              {onOpenConsole && (
                <button
                  type="button"
                  onClick={onOpenConsole}
                  className="btn-secondary"
                >
                  <Terminal className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <span>Dev Terminal</span>
                </button>
              )}

              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <Github className="w-4 h-4" />
                <span>GitHub</span>
                <ExternalLink className="w-3.5 h-3.5 opacity-60" />
              </a>

              <a
                href="#contact"
                className="btn-secondary"
              >
                <Mail className="w-4 h-4" />
                <span>Contact</span>
              </a>
            </div>
          </div>

          {/* Bento Cell 2: Portrait & Availability (4 cols) */}
          <div className="lg:col-span-4 bento-card p-6 flex flex-col items-center justify-between text-center">
            {/* Portrait Frame */}
            <div className="relative w-44 h-44 sm:w-52 sm:h-52 rounded-2xl overflow-hidden border-2 border-emerald-500/40 shadow-lg bg-zinc-950 mb-4 mt-2">
              <img
                src={portraitImage}
                alt="Biruk Ahmye - Full-Stack Developer & AI/ML Engineer"
                className="w-full h-full object-cover object-center"
                loading="eager"
              />
            </div>

            {/* Quick Profile Meta */}
            <div className="w-full">
              <div className="text-base font-bold text-zinc-950 dark:text-white">
                Biruk Ahmye
              </div>
              <div className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-bold mb-3">
                Full-Stack Developer • AI/ML Engineer
              </div>

              {/* Status Pill */}
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-500/30 text-xs text-emerald-800 dark:text-emerald-300 font-medium mb-3">
                <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span>Available for AI & Full-Stack Projects</span>
              </div>

              {/* Verified Links */}
              <div className="grid grid-cols-2 gap-2 text-xs font-mono font-medium pt-2 border-t border-zinc-200 dark:border-zinc-800">
                <a
                  href={PERSONAL_INFO.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-zinc-50 dark:bg-zinc-800/60 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-zinc-700 dark:text-zinc-300 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                >
                  LinkedIn
                </a>
                <a
                  href={PERSONAL_INFO.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-1.5 rounded-lg bg-zinc-50 dark:bg-zinc-800/60 hover:bg-emerald-50 dark:hover:bg-emerald-950/40 text-zinc-700 dark:text-zinc-300 hover:text-emerald-700 dark:hover:text-emerald-300 transition-colors"
                >
                  LeetCode
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bento Quick Highlights Grid Row (3 Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 mt-5 sm:mt-6">
          
          <div className="bento-card p-5 flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 shrink-0">
              <Cpu className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-zinc-950 dark:text-white">
                AI/ML & Agent Systems
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                LangGraph, ChromaDB, PyTorch, RAG, BioCypher & Ollama local multi-agent workflows.
              </p>
            </div>
          </div>

          <div className="bento-card p-5 flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 shrink-0">
              <Layers className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-zinc-950 dark:text-white">
                Full-Stack Systems
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                React 19, TypeScript, FastAPI, Node.js, PostgreSQL, Tailwind CSS & REST APIs.
              </p>
            </div>
          </div>

          <div className="bento-card p-5 flex items-start gap-3.5">
            <div className="p-2.5 rounded-xl bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-200 dark:border-emerald-500/30 text-emerald-700 dark:text-emerald-400 shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div>
              <div className="text-sm font-bold text-zinc-950 dark:text-white">
                ASTU Engineering (2024 — 2028)
              </div>
              <p className="text-xs text-zinc-600 dark:text-zinc-400 mt-1">
                Adama Science and Technology University B.Sc. candidate with hands-on systems rigor.
              </p>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
