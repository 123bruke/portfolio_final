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
    <footer className="border-t border-zinc-200 py-12 relative bg-white transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6 pb-8 border-b border-zinc-200">
          
          {/* Left Brand Info */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-black">
                <Terminal className="w-4 h-4 text-black" />
              </div>
              <span className="text-base font-extrabold text-black tracking-tight">
                {PERSONAL_INFO.name}
              </span>
            </div>
            <p className="text-xs font-mono text-zinc-800 font-bold mt-1">
              {PERSONAL_INFO.headline}
            </p>
            <p className="text-xs text-zinc-600 mt-0.5 italic">
              "Building, learning, and solving."
            </p>
          </div>

          {/* Social Profiles */}
          <div className="flex items-center gap-2">
            <a
              href={PERSONAL_INFO.github}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary p-2.5 rounded-xl"
              aria-label="GitHub Profile"
            >
              <Github className="w-4 h-4 text-black" />
            </a>

            <a
              href={PERSONAL_INFO.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary p-2.5 rounded-xl"
              aria-label="LinkedIn Profile"
            >
              <Linkedin className="w-4 h-4 text-black" />
            </a>

            <a
              href={PERSONAL_INFO.kaggle}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary p-2.5 rounded-xl"
              aria-label="Kaggle Profile"
            >
              <Binary className="w-4 h-4 text-black" />
            </a>

            <a
              href={PERSONAL_INFO.leetcode}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-secondary p-2.5 rounded-xl"
              aria-label="LeetCode Profile"
            >
              <Code2 className="w-4 h-4 text-black" />
            </a>

            <button
              onClick={scrollToTop}
              className="btn-secondary p-2.5 rounded-xl ml-2 cursor-pointer"
              aria-label="Back to top"
              title="Back to top"
            >
              <ArrowUp className="w-4 h-4 text-black" />
            </button>
          </div>

        </div>

        {/* Bottom Copyright & Location */}
        <div className="pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-zinc-700">
          <div className="font-medium">
            © 2026 Biruk Ahmye. All rights reserved.
          </div>
          <div className="font-mono text-[11px] text-zinc-700 font-semibold">
            Adama Science and Technology University (ASTU) • Addis Ababa, Ethiopia
          </div>
        </div>
      </div>
    </footer>
  );
}
