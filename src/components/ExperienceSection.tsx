import { 
  Building2, 
  GraduationCap, 
  Terminal, 
  CheckCircle2, 
  Calendar, 
  MapPin 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/personal';
import SectionBorderFrame from './SectionBorderFrame';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-12 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">
        <SectionBorderFrame>
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/40 text-xs font-mono text-emerald-800 dark:text-cyan-300 font-bold mb-3 shadow-[0_0_10px_rgba(52,211,153,0.2)]">
              <Terminal className="w-3.5 h-3.5" />
              <span>08 // EXPERIENCE & EDUCATION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gradient-title">
              Experience & Academic Foundation
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-800 dark:text-emerald-100/90 leading-relaxed font-medium">
              Hands-on AI engineering experience, research-oriented development, and rigorous engineering student coursework at ASTU.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            
            {/* Experience Column (iCog Labs) */}
            <div className="lg:col-span-7 space-y-6">
              <div className="flex items-center gap-2 pb-2">
                <Building2 className="w-4 h-4 text-emerald-600 dark:text-cyan-300" />
                <h3 className="text-lg font-extrabold text-zinc-950 dark:text-white tracking-tight">
                  Engineering Experience
                </h3>
              </div>

              {/* iCog Labs Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:border-emerald-400/60 shadow-xl relative overflow-hidden group hover:scale-[1.01]">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-emerald-300 to-white" />

                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-black/10 dark:border-white/10">
                  <div>
                    <h4 className="text-lg font-extrabold text-zinc-950 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-cyan-300 transition-colors">
                      iCog Labs
                    </h4>
                    <div className="text-xs font-mono text-emerald-700 dark:text-cyan-300 font-bold mt-0.5">
                      AI Engineering & Research Intern
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-black/5 dark:bg-black/40 border border-emerald-500/20 text-[11px] font-mono text-zinc-800 dark:text-slate-200 font-semibold self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-emerald-600 dark:text-cyan-300" />
                    <span>Internship / Research</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-700 dark:text-slate-200 leading-relaxed mb-4 font-normal">
                  Engaged in production-style agentic AI system development, biomedical knowledge graph research, and deterministic evaluation frameworks.
                </p>

                {/* Verified technical accomplishments */}
                <div className="space-y-2.5 mb-5">
                  <div className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-slate-200 font-normal">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-cyan-300 shrink-0 mt-0.5" />
                    <span>
                      Architected autonomous vendor evaluation workflows using LangGraph ReAct StateGraph, integrating ChromaDB vector retrieval and structured decision boundaries.
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-slate-200 font-normal">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-cyan-300 shrink-0 mt-0.5" />
                    <span>
                      Researched biomedical knowledge representation pipelines with BioCypher and Neo4j ontologies, harmonizing disparate gene and disease data schemas.
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5 text-xs text-zinc-700 dark:text-slate-200 font-normal">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-cyan-300 shrink-0 mt-0.5" />
                    <span>
                      Built and maintained rigorous automated pytest suites, confirming a 100% pass rate across 47 comprehensive validation and safety tests.
                    </span>
                  </div>
                </div>

                {/* Stack tags */}
                <div className="pt-3 border-t border-black/10 dark:border-white/10 flex flex-wrap gap-1.5">
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white dark:bg-black/60 border border-black/15 dark:border-emerald-500/30 text-zinc-800 dark:text-slate-200 font-semibold shadow-sm">
                    LangGraph
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white dark:bg-black/60 border border-black/15 dark:border-emerald-500/30 text-zinc-800 dark:text-slate-200 font-semibold shadow-sm">
                    ChromaDB
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white dark:bg-black/60 border border-black/15 dark:border-emerald-500/30 text-zinc-800 dark:text-slate-200 font-semibold shadow-sm">
                    BioCypher
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white dark:bg-black/60 border border-black/15 dark:border-emerald-500/30 text-zinc-800 dark:text-slate-200 font-semibold shadow-sm">
                    Neo4j
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-white dark:bg-black/60 border border-black/15 dark:border-emerald-500/30 text-zinc-800 dark:text-slate-200 font-semibold shadow-sm">
                    FastAPI / Flask
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-mono bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/40 text-emerald-800 dark:text-cyan-300 font-bold">
                    Pytest (47/47 passing)
                  </span>
                </div>
              </div>
            </div>

            {/* Education Column (ASTU) */}
            <div className="lg:col-span-5 space-y-6">
              <div className="flex items-center gap-2 pb-2">
                <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-cyan-300" />
                <h3 className="text-lg font-extrabold text-zinc-950 dark:text-white tracking-tight">
                  Education
                </h3>
              </div>

              {/* ASTU Education Card */}
              <div className="glass-card rounded-2xl p-6 sm:p-7 transition-all duration-300 hover:border-emerald-400/60 shadow-xl relative overflow-hidden group hover:scale-[1.01]">
                <div className="flex items-start justify-between gap-3 pb-4 mb-4 border-b border-black/10 dark:border-white/10">
                  <div>
                    <h4 className="text-lg font-extrabold text-zinc-950 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-cyan-300 transition-colors">
                      Adama Science and Technology University (ASTU)
                    </h4>
                    <div className="text-xs font-mono text-emerald-700 dark:text-cyan-300 font-bold mt-0.5">
                      Engineering Student
                    </div>
                  </div>
                  <div className="p-2 rounded-lg bg-white dark:bg-black/80 border border-black/10 dark:border-emerald-500/30 text-emerald-600 dark:text-cyan-300 shadow-md">
                    <GraduationCap className="w-5 h-5" />
                  </div>
                </div>

                <div className="space-y-3 mb-5">
                  <div className="flex items-center gap-2 text-xs text-zinc-700 dark:text-slate-200 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-emerald-600 dark:text-cyan-300" />
                    <span>{PERSONAL_INFO.location}</span>
                  </div>

                  {/* Expected Graduation Badge */}
                  <div className="p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/40 flex items-center justify-between">
                    <span className="text-xs font-mono text-zinc-700 dark:text-slate-200">Expected Graduation:</span>
                    <span className="text-xs font-mono text-emerald-800 dark:text-cyan-300 font-extrabold">2024 - 2028</span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-700 dark:text-slate-200 leading-relaxed font-normal">
                    Rigorous engineering curriculum combining computational science, mathematics, electronics, algorithms, and applied software engineering.
                  </p>
                </div>

                {/* Core Academic Focus */}
                <div className="space-y-2 pt-2 border-t border-black/10 dark:border-white/10">
                  <span className="text-[11px] font-mono uppercase text-emerald-800 dark:text-cyan-300 font-bold tracking-wider block">
                    Core Academic Focus:
                  </span>
                  <div className="flex flex-wrap gap-1.5">
                    <span className="px-2.5 py-1 rounded text-xs bg-white dark:bg-black/60 border border-black/10 dark:border-emerald-500/20 text-zinc-800 dark:text-slate-200 font-semibold shadow-sm">
                      Engineering Fundamentals
                    </span>
                    <span className="px-2.5 py-1 rounded text-xs bg-white dark:bg-black/60 border border-black/10 dark:border-emerald-500/20 text-zinc-800 dark:text-slate-200 font-semibold shadow-sm">
                      Artificial Intelligence
                    </span>
                    <span className="px-2.5 py-1 rounded text-xs bg-white dark:bg-black/60 border border-black/10 dark:border-emerald-500/20 text-zinc-800 dark:text-slate-200 font-semibold shadow-sm">
                      Machine Learning
                    </span>
                    <span className="px-2.5 py-1 rounded text-xs bg-white dark:bg-black/60 border border-black/10 dark:border-emerald-500/20 text-zinc-800 dark:text-slate-200 font-semibold shadow-sm">
                      Software Systems
                    </span>
                    <span className="px-2.5 py-1 rounded text-xs bg-white dark:bg-black/60 border border-black/10 dark:border-emerald-500/20 text-zinc-800 dark:text-slate-200 font-semibold shadow-sm">
                      Algorithmic Problem Solving
                    </span>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </SectionBorderFrame>
      </div>
    </section>
  );
}
