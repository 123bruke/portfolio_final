import { 
  Github, 
  Linkedin, 
  Code2, 
  Binary, 
  Terminal, 
  ArrowUp 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/personal';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-emerald-500/10 py-14 relative bg-slate-50 dark:bg-black transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-black/10 dark:border-white/10">
          
          {/* Left Brand info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-white dark:bg-black/80 border border-black/10 dark:border-emerald-500/30 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-md">
                <Terminal className="w-4 h-4" />
              </div>
              <span className="text-base font-extrabold text-zinc-950 dark:text-white tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-bold mt-1">
              {PERSONAL_INFO.headline}
            </p>
            <p className="text-xs text-zinc-600 dark:text-slate-400 mt-1 italic">
              "Building, learning, and solving."
            </p>
          </div>

          {/* Social Profiles with 3D Transparent Gradient buttons */}
          <div className="flex items-center gap-2.5">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d-transparent p-2.5 rounded-xl text-zinc-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all shadow-sm"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d-transparent p-2.5 rounded-xl text-zinc-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all shadow-sm"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.kaggle}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d-transparent p-2.5 rounded-xl text-zinc-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all shadow-sm"
              aria-label="Kaggle Profile"
            >
              <Binary className="w-4 h-4" />
            </a>

            <a
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d-transparent p-2.5 rounded-xl text-zinc-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all shadow-sm"
              aria-label="LeetCode Profile"
            >
              <Code2 className="w-4 h-4" />
            </a>

            <button
              onClick={scrollToTop}
              className="btn-3d-transparent p-2.5 rounded-xl text-zinc-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 transition-all shadow-sm ml-2 cursor-pointer"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Location */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-600 dark:text-slate-400">
          <div>
            © 2026 Biruk Ahmye. All rights reserved.
          </div>
          <div className="font-mono text-[11px] text-zinc-600 dark:text-slate-400">
            Adama Science and Technology University (ASTU) • Addis Ababa, Ethiopia
          </div>
        </div>
      </div>
    </footer>
  );
}
