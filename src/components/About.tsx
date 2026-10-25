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
    <section id="about" className="py-10 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionBorderFrame>
          {/* Section Header */}
          <div className="mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/40 text-xs font-mono text-emerald-800 dark:text-cyan-300 font-bold mb-3 shadow-xs">
              <Terminal className="w-3.5 h-3.5" />
              <span>01 // BACKGROUND & PHILOSOPHY</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-gradient-title">
              About Me & Engineering Journey
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 max-w-2xl font-normal">
              Engineering student at ASTU (2024 — 2028) cultivating deep expertise through continuous, hands-on full-stack and AI systems development.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
            
            {/* Bento Card 1: Personal Narrative & Philosophy (7 cols) */}
            <div className="lg:col-span-7 bento-card p-6 sm:p-7 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-emerald-400 font-bold mb-3">
                  <span>FOUNDATION & MINDSET</span>
                </div>
                <div className="space-y-4 text-zinc-800 dark:text-zinc-200 text-sm sm:text-base leading-relaxed font-normal">
                  <p className="p-4 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200/80 dark:border-zinc-800/80 text-zinc-800 dark:text-zinc-200 shadow-xs">
                    {PERSONAL_INFO.aboutText[0]}
                  </p>
                  <p>
                    {PERSONAL_INFO.aboutText[1]}
                  </p>
                  <p>
                    {PERSONAL_INFO.aboutText[3]}
                  </p>
                </div>
              </div>

              {/* Quick Competency Tags */}
              <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 flex flex-wrap gap-2">
                {[
                  'Multi-Agent Architectures',
                  'LangGraph Workflows',
                  'RAG & Vector Retrieval',
                  'FastAPI & React 19',
                  'Data Structures & Algorithms'
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-zinc-100 dark:bg-zinc-800/80 border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Bento Card 2: Academic Profile & University Credentials (5 cols) */}
            <div className="lg:col-span-5 bento-card p-6 sm:p-7 flex flex-col justify-between">
              <div>
                {/* Profile header */}
                <div className="flex items-center gap-3.5 pb-4 border-b border-zinc-200 dark:border-zinc-800">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-emerald-500/50 shadow-md shrink-0 bg-zinc-950">
                    <img
                      src="/biruk_photo.jpg"
                      alt={PERSONAL_INFO.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-zinc-950 dark:text-white">
                      {PERSONAL_INFO.name}
                    </h3>
                    <div className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-bold">
                      ASTU Engineering (2024 — 2028)
                    </div>
                  </div>
                </div>

                {/* Academic info */}
                <div className="py-4 space-y-3 border-b border-zinc-200 dark:border-zinc-800 text-xs">
                  <div className="flex items-start gap-2.5">
                    <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-zinc-950 dark:text-white">
                        Adama Science and Technology University (ASTU)
                      </div>
                      <div className="text-zinc-600 dark:text-zinc-400">
                        Bachelor of Science in Engineering (2024 — 2028)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0" />
                    <span className="text-zinc-700 dark:text-zinc-300">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>

                {/* Core Disciplines List */}
                <div className="py-4 space-y-2 text-xs">
                  <span className="text-[11px] font-mono uppercase text-emerald-800 dark:text-emerald-400 font-bold">
                    Primary Focus Disciplines
                  </span>
                  <div className="space-y-1.5">
                    <div className="p-2 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/60 flex items-center gap-2.5">
                      <Cpu className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span className="font-medium text-zinc-900 dark:text-zinc-200">AI Engineering & Agent Workflows</span>
                    </div>
                    <div className="p-2 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/60 flex items-center gap-2.5">
                      <Layers className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span className="font-medium text-zinc-900 dark:text-zinc-200">Production Full-Stack Web Systems</span>
                    </div>
                    <div className="p-2 rounded-lg bg-zinc-50 dark:bg-zinc-800/50 border border-zinc-200 dark:border-zinc-700/60 flex items-center gap-2.5">
                      <Target className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                      <span className="font-medium text-zinc-900 dark:text-zinc-200">Algorithmic Problem Solving (DSA)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Verified Contact Channels */}
              <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 space-y-2 text-xs font-medium">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center justify-between p-2 rounded-lg text-zinc-800 dark:text-zinc-200 hover:text-emerald-700 dark:hover:text-emerald-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-mono">{PERSONAL_INFO.email}</span>
                  </span>
                  <span className="text-[10px] text-zinc-500 font-mono">Email</span>
                </a>

                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center justify-between p-2 rounded-lg text-zinc-800 dark:text-zinc-200 hover:text-emerald-700 dark:hover:text-emerald-300 hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                    <span className="font-mono">{PERSONAL_INFO.phone}</span>
                  </span>
                  <span className="text-[10px] text-zinc-500 font-mono">Call</span>
                </a>
              </div>
            </div>

          </div>
        </SectionBorderFrame>
      </div>
    </section>
  );
}
