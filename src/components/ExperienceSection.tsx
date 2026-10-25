import { 
  Building2, 
  GraduationCap, 
  Terminal, 
  CheckCircle2, 
  Calendar, 
  MapPin,
  ShieldCheck 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/personal';
import SectionBorderFrame from './SectionBorderFrame';

export default function ExperienceSection() {
  return (
    <section id="experience" className="py-10 scroll-mt-24 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionBorderFrame>
          {/* Section Header */}
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-100 border border-zinc-300 text-xs font-mono text-black font-bold mb-3 shadow-2xs">
              <Terminal className="w-3.5 h-3.5 text-black" />
              <span>08 // EXPERIENCE & EDUCATION</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-black">
              Experience & Academic Foundation
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
              Production AI engineering internship experience, biomedical knowledge graph research, and rigorous engineering coursework at ASTU.
            </p>
          </div>

          {/* Bento Grid: Experience + Academic Education */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
            
            {/* Experience Card (iCog Labs) (7 cols) */}
            <div className="lg:col-span-7 bento-card p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-zinc-200">
                  <div>
                    <div className="flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-black" />
                      <h3 className="text-lg sm:text-xl font-extrabold text-black tracking-tight">
                        iCog Labs
                      </h3>
                    </div>
                    <div className="text-xs font-mono text-zinc-700 font-bold mt-0.5">
                      AI Engineering & Research Intern
                    </div>
                  </div>

                  <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-zinc-100 border border-zinc-300 text-[11px] font-mono text-zinc-800 font-semibold self-start sm:self-auto">
                    <Calendar className="w-3.5 h-3.5 text-black" />
                    <span>Internship / Research</span>
                  </div>
                </div>

                <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed mb-4 font-normal">
                  Engaged in production-grade agentic AI system development, biomedical knowledge graph research, and deterministic evaluation frameworks.
                </p>

                {/* Verified technical accomplishments */}
                <div className="space-y-2.5 mb-5 text-xs text-zinc-800 font-normal">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                    <span>
                      Architected autonomous vendor evaluation workflows using LangGraph ReAct StateGraph, integrating ChromaDB vector retrieval and structured decision boundaries.
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                    <span>
                      Researched biomedical knowledge representation pipelines with BioCypher and Neo4j ontologies, harmonizing disparate gene and disease data schemas.
                    </span>
                  </div>

                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                    <span>
                      Built and executed automated pytest validation test suites, maintaining a 100% pass rate across 47 comprehensive validation and safety tests.
                    </span>
                  </div>
                </div>
              </div>

              {/* Technologies strip */}
              <div className="pt-4 border-t border-zinc-200 flex flex-wrap gap-1.5">
                {['LangGraph', 'ChromaDB', 'BioCypher', 'Neo4j', 'FastAPI', 'pytest', 'ReAct Agents'].map((tag) => (
                  <span
                    key={tag}
                    className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-zinc-100 border border-zinc-300 text-zinc-950 font-semibold"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>

            {/* Academic Education Card (ASTU) (5 cols) */}
            <div className="lg:col-span-5 bento-card p-6 sm:p-7 flex flex-col justify-between">
              <div>
                <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-200">
                  <div className="flex items-center gap-2">
                    <GraduationCap className="w-5 h-5 text-black" />
                    <div>
                      <h3 className="text-base sm:text-lg font-extrabold text-black tracking-tight">
                        ASTU Engineering
                      </h3>
                      <div className="text-xs font-mono text-zinc-700 font-bold">
                        Academic Program
                      </div>
                    </div>
                  </div>

                  <span className="text-xs font-mono text-zinc-700 font-bold">
                    2024 — 2028
                  </span>
                </div>

                <div className="space-y-3 mb-5 text-xs text-zinc-800">
                  <p className="font-bold text-black text-sm">
                    Adama Science and Technology University (ASTU)
                  </p>
                  <p className="leading-relaxed">
                    Undergraduate engineering program developing foundational disciplines in computational theory, advanced mathematics, physics, and software engineering.
                  </p>

                  <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1.5">
                    <div className="text-[11px] font-mono uppercase text-black font-bold">
                      Key Coursework Focus
                    </div>
                    <div className="text-xs text-zinc-800 space-y-1 font-medium">
                      <div>• Data Structures & Algorithms Analysis</div>
                      <div>• Computer Architecture & Systems</div>
                      <div>• Linear Algebra, Calculus & Discrete Math</div>
                      <div>• Object-Oriented Software Design</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-200 flex items-center justify-between text-xs font-mono">
                <span className="text-zinc-600 font-medium">Adama, Ethiopia</span>
                <span className="text-black font-bold">In Progress (B.Sc.)</span>
              </div>
            </div>

          </div>
        </SectionBorderFrame>
      </div>
    </section>
  );
}
