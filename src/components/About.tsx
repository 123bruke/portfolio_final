import { 
  GraduationCap, 
  Cpu, 
  Layers, 
  Target, 
  MapPin, 
  Mail, 
  Phone, 
  CheckCircle, 
  Terminal, 
  Sparkles 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/personal';
import SectionBorderFrame from './SectionBorderFrame';

export default function About() {
  return (
    <section id="about" className="py-12 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">
        <SectionBorderFrame>
          {/* Section Header */}
          <div className="mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/40 text-xs font-mono text-emerald-800 dark:text-cyan-300 font-bold mb-3 shadow-[0_0_10px_rgba(52,211,153,0.2)]">
              <Terminal className="w-3.5 h-3.5 text-emerald-600 dark:text-cyan-300" />
              <span>01 // BACKGROUND & PHILOSOPHY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gradient-title">
              About Me
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-800 dark:text-emerald-100/90 max-w-xl font-medium">
              Engineering student at ASTU (2024 — 2028) learning through continuous, hands-on full-stack and AI system building.
            </p>
          </div>

          {/* Content Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
            
            {/* Left Column: Personal Narrative & Philosophy */}
            <div className="lg:col-span-7 space-y-6 text-zinc-900 dark:text-slate-200 leading-relaxed text-base">
              <p className="p-4 rounded-xl bg-white/90 dark:bg-black/60 border border-black/10 dark:border-emerald-500/30 text-zinc-900 dark:text-slate-200 shadow-sm font-normal">
                {PERSONAL_INFO.aboutText[0]}
              </p>

              <p className="font-normal text-zinc-800 dark:text-slate-200">
                {PERSONAL_INFO.aboutText[1]}
              </p>

              {/* Core Principle Highlight Card */}
              <div className="p-5 rounded-xl bg-emerald-50 dark:bg-gradient-to-r dark:from-emerald-950/40 dark:via-black/70 dark:to-emerald-950/30 border border-emerald-300 dark:border-emerald-500/40 my-4 shadow-sm backdrop-blur-md">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-500/15 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-emerald-300 shrink-0 mt-0.5 shadow-[0_0_8px_rgba(52,211,153,0.4)]">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-zinc-950 dark:text-white mb-1">
                      Learning by Building Real Systems
                    </h3>
                    <p className="text-xs sm:text-sm text-zinc-800 dark:text-slate-200 font-normal">
                      {PERSONAL_INFO.aboutText[2]}
                    </p>
                  </div>
                </div>
              </div>

              <p className="font-normal text-zinc-800 dark:text-slate-200">
                {PERSONAL_INFO.aboutText[3]}
              </p>

              {/* Quick Competency Tags */}
              <div className="pt-4 flex flex-wrap gap-2.5">
                {[
                  'Multi-Agent Architectures',
                  'LangGraph ReAct Workflows',
                  'RAG & Vector Retrieval',
                  'Production FastAPI & React',
                  'Data Structures & Algorithms'
                ].map((tag) => (
                  <span key={tag} className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs font-semibold bg-white dark:bg-black/70 border border-black/15 dark:border-emerald-500/30 text-zinc-900 dark:text-slate-200 shadow-sm">
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-300 shrink-0" />
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Right Column: 3D Refined Glass Profile Card */}
            <div className="lg:col-span-5">
              <div
                id="about-profile-card"
                className="glass-card rounded-2xl p-6 sm:p-7 shadow-2xl relative overflow-hidden transition-transform duration-500 hover:scale-[1.02]"
                style={{ perspective: '1000px' }}
              >
                {/* Top accent line */}
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-emerald-300 to-white" />

                {/* Profile Card Header */}
                <div className="flex items-center justify-between pb-5 border-b border-black/10 dark:border-white/10">
                  <div className="flex items-center gap-3.5">
                    <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-emerald-400 shadow-lg shadow-emerald-950/40 shrink-0">
                      <img
                        src="/biruk_photo.jpg"
                        alt={PERSONAL_INFO.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold text-gradient-title tracking-tight">
                        {PERSONAL_INFO.name}
                      </h3>
                      <div className="text-xs font-mono text-emerald-700 dark:text-cyan-300 mt-0.5 font-bold">
                        ASTU Engineering (2024 — 2028)
                      </div>
                    </div>
                  </div>
                  <div className="w-11 h-11 rounded-xl bg-emerald-100 dark:bg-emerald-500/15 border border-emerald-300 dark:border-emerald-500/40 flex items-center justify-center text-emerald-800 dark:text-emerald-300 shrink-0 shadow-[0_0_10px_rgba(52,211,153,0.3)]">
                    <GraduationCap className="w-6 h-6" />
                  </div>
                </div>

                {/* University & Academic Credentials */}
                <div className="py-4 space-y-3 border-b border-black/10 dark:border-white/10">
                  <div className="flex items-start gap-3">
                    <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-300 shrink-0 mt-1" />
                    <div>
                      <div className="text-xs font-bold text-zinc-950 dark:text-white">
                        Adama Science and Technology University (ASTU)
                      </div>
                      <div className="text-xs text-zinc-700 dark:text-slate-300">
                        Bachelor of Science in Engineering (2024 — 2028)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-300 shrink-0" />
                    <div className="text-xs text-zinc-800 dark:text-slate-200">
                      {PERSONAL_INFO.location}
                    </div>
                  </div>
                </div>

                {/* Core Engineering Disciplines */}
                <div className="py-4 space-y-3 border-b border-black/10 dark:border-white/10">
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-800 dark:text-cyan-300 font-bold">
                    Core Engineering Focus
                  </span>
                  <div className="grid grid-cols-1 gap-2.5">
                    <div className="p-2.5 rounded-lg bg-white dark:bg-black/60 border border-black/10 dark:border-emerald-500/20 flex items-center gap-3">
                      <Cpu className="w-4 h-4 text-emerald-600 dark:text-emerald-300 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-zinc-950 dark:text-white">AI Engineering & Agents</div>
                        <div className="text-[11px] text-zinc-700 dark:text-slate-300">LangGraph, Multi-Agent systems, ChromaDB, Ollama</div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-white dark:bg-black/60 border border-black/10 dark:border-emerald-500/20 flex items-center gap-3">
                      <Layers className="w-4 h-4 text-emerald-600 dark:text-emerald-300 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-zinc-950 dark:text-white">Full-Stack Software</div>
                        <div className="text-[11px] text-zinc-700 dark:text-slate-300">React 19, TypeScript, Node.js, FastAPI, Databases</div>
                      </div>
                    </div>

                    <div className="p-2.5 rounded-lg bg-white dark:bg-black/60 border border-black/10 dark:border-emerald-500/20 flex items-center gap-3">
                      <Target className="w-4 h-4 text-emerald-600 dark:text-emerald-300 shrink-0" />
                      <div>
                        <div className="text-xs font-bold text-zinc-950 dark:text-white">Problem Solving</div>
                        <div className="text-[11px] text-zinc-700 dark:text-slate-300">Algorithmic thinking, LeetCode, DSA, Optimization</div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Direct Verified Contact Channels */}
                <div className="pt-4 space-y-2">
                  <a
                    href={`mailto:${PERSONAL_INFO.email}`}
                    className="flex items-center justify-between p-2 rounded-lg text-xs text-zinc-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-300 hover:bg-black/5 dark:hover:bg-white/5 transition-colors font-medium"
                  >
                    <span className="flex items-center gap-2">
                      <Mail className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-300" />
                      <span className="font-mono">{PERSONAL_INFO.email}</span>
                    </span>
                    <span className="text-[10px] text-zinc-500 dark:text-slate-400 font-mono">Send Email</span>
                  </a>

                  <a
                    href={`tel:${PERSONAL_INFO.phone}`}
                    className="flex items-center justify-between p-2 rounded-lg text-xs text-zinc-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-300 hover:bg-black/5 dark:hover:bg-white/5 transition-colors font-medium"
                  >
                    <span className="flex items-center gap-2">
                      <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-300" />
                      <span className="font-mono">{PERSONAL_INFO.phone}</span>
                    </span>
                    <span className="text-[10px] text-zinc-500 dark:text-slate-400 font-mono">Direct Call</span>
                  </a>
                </div>

              </div>
            </div>

          </div>
        </SectionBorderFrame>
      </div>
    </section>
  );
}
