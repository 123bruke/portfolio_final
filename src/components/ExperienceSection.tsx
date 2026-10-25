import { useState } from 'react';
import { 
  Building2, 
  GraduationCap, 
  Terminal, 
  CheckCircle2, 
  Calendar, 
  MapPin,
  ShieldCheck,
  Eye,
  EyeOff,
  ChevronDown,
  ChevronUp
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/personal';
import SectionBorderFrame from './SectionBorderFrame';

export default function ExperienceSection() {
  const [isSectionHidden, setIsSectionHidden] = useState(false);
  const [showFullBullets, setShowFullBullets] = useState(true);

  return (
    <section id="experience" className="py-10 scroll-mt-24 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionBorderFrame>
          {/* Section Header with Hide/Show Toggle */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div className="max-w-3xl">
              {/* Green highlight for Main Point */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-300 text-xs font-mono text-emerald-800 font-bold mb-3 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>INDUSTRY EXPERIENCE & ACADEMIC CREDENTIALS</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-black">
                Experience & Education
              </h2>
              <p className="mt-2 text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
                Production AI engineering internship experience, biomedical knowledge graph research, and coursework at <strong className="text-emerald-700 font-bold">ASTU</strong>.
              </p>
            </div>

            {/* Native Hide/Show Button */}
            <button
              onClick={() => setIsSectionHidden(!isSectionHidden)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold rounded-lg border border-zinc-300 bg-white hover:bg-zinc-100 text-black shadow-2xs transition-all duration-200 cursor-pointer self-start sm:self-auto shrink-0"
              title={isSectionHidden ? "Expand Experience" : "Collapse Experience"}
            >
              {isSectionHidden ? (
                <>
                  <Eye className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Show Experience</span>
                  <ChevronDown className="w-3 h-3 text-zinc-500" />
                </>
              ) : (
                <>
                  <EyeOff className="w-3.5 h-3.5 text-zinc-600" />
                  <span>Hide Details</span>
                  <ChevronUp className="w-3 h-3 text-zinc-500" />
                </>
              )}
            </button>
          </div>

          {/* Smooth Collapsible Content Container */}
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              isSectionHidden ? 'max-h-0 opacity-0 pointer-events-none' : 'max-h-[3000px] opacity-100'
            }`}
          >
            {/* Bento Grid: Experience + Academic Education */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
              
              {/* Experience Card (iCog Labs) (7 cols) */}
              <div className="lg:col-span-7 bento-card p-6 sm:p-7 flex flex-col justify-between hover:border-emerald-300 transition-all duration-200">
                <div>
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-4 mb-4 border-b border-zinc-200">
                    <div>
                      <div className="flex items-center gap-2">
                        <Building2 className="w-4 h-4 text-emerald-600" />
                        <h3 className="text-lg sm:text-xl font-black text-black tracking-tight">
                          iCog Labs
                        </h3>
                      </div>
                      <div className="text-xs font-mono text-emerald-700 font-bold mt-0.5">
                        AI Engineering & Research Intern
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded bg-emerald-50 border border-emerald-200 text-[11px] font-mono text-emerald-800 font-bold self-start sm:self-auto">
                      <Calendar className="w-3.5 h-3.5 text-emerald-600" />
                      <span>Internship / Research</span>
                    </div>
                  </div>

                  <div className="flex items-center justify-between mb-3">
                    <p className="text-xs sm:text-sm text-zinc-800 font-normal">
                      Production-grade agentic AI systems, biomedical knowledge graphs, and test pipelines.
                    </p>
                    <button
                      onClick={() => setShowFullBullets(!showFullBullets)}
                      className="text-xs font-mono text-zinc-600 hover:text-black font-semibold ml-2 cursor-pointer shrink-0"
                    >
                      {showFullBullets ? 'Hide Details' : 'Show Details'}
                    </button>
                  </div>

                  {/* Verified technical accomplishments with collapsible container */}
                  <div
                    className={`space-y-2.5 transition-all duration-300 ease-in-out overflow-hidden ${
                      showFullBullets ? 'max-h-[400px] opacity-100 mb-5' : 'max-h-0 opacity-0 mb-1'
                    } text-xs text-zinc-800 font-normal`}
                  >
                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        Architected autonomous vendor evaluation workflows using LangGraph ReAct StateGraph, integrating ChromaDB vector retrieval and structured decision boundaries.
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>
                        Researched biomedical knowledge representation pipelines with BioCypher and Neo4j ontologies, harmonizing disparate gene and disease data schemas.
                      </span>
                    </div>

                    <div className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
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
                      className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-zinc-100 border border-zinc-300 text-black font-bold hover:border-emerald-400 transition-colors"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Academic Education Card (ASTU) (5 cols) */}
              <div className="lg:col-span-5 bento-card p-6 sm:p-7 flex flex-col justify-between hover:border-emerald-300 transition-all duration-200">
                <div>
                  <div className="flex items-center justify-between pb-4 mb-4 border-b border-zinc-200">
                    <div className="flex items-center gap-2">
                      <GraduationCap className="w-5 h-5 text-emerald-600" />
                      <div>
                        <h3 className="text-base sm:text-lg font-black text-black tracking-tight">
                          ASTU Engineering
                        </h3>
                        <div className="text-xs font-mono text-zinc-700 font-bold">
                          Academic Program
                        </div>
                      </div>
                    </div>

                    <span className="text-xs font-mono text-emerald-700 font-bold">
                      2024 — 2028
                    </span>
                  </div>

                  <div className="space-y-3 mb-5 text-xs text-zinc-800">
                    <p className="font-bold text-black text-sm">
                      Adama Science and Technology University (ASTU)
                    </p>
                    <p className="leading-relaxed font-normal">
                      Undergraduate engineering program developing foundational disciplines in computational theory, advanced mathematics, physics, and software engineering.
                    </p>

                    <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-200 space-y-1.5">
                      <div className="text-[11px] font-mono uppercase text-emerald-800 font-bold flex items-center gap-1.5">
                        <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
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
                  <span className="text-emerald-700 font-bold">In Progress (B.Sc.)</span>
                </div>
              </div>

            </div>
          </div>
        </SectionBorderFrame>
      </div>
    </section>
  );
}
