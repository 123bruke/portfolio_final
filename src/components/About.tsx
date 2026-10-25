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
    <section id="about" className="py-10 scroll-mt-24 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionBorderFrame>
          {/* Section Header */}
          <div className="mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-100 border border-zinc-300 text-xs font-mono text-black font-bold mb-3 shadow-2xs">
              <Terminal className="w-3.5 h-3.5 text-black" />
              <span>01 // BACKGROUND & PHILOSOPHY</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-black">
              About Me & Engineering Journey
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-700 max-w-2xl font-normal">
              Engineering student at ASTU (2024 — 2028) cultivating deep expertise through continuous, hands-on full-stack and AI systems development.
            </p>
          </div>

          {/* Bento Grid Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
            
            {/* Bento Card 1: Personal Narrative & Philosophy (7 cols) */}
            <div className="lg:col-span-7 bento-card p-6 sm:p-7 flex flex-col justify-between space-y-4">
              <div>
                <div className="flex items-center gap-2 text-xs font-mono text-black font-bold mb-3">
                  <span>FOUNDATION & MINDSET</span>
                </div>
                <div className="space-y-4 text-zinc-900 text-sm sm:text-base leading-relaxed font-normal">
                  <p className="p-4 rounded-xl bg-zinc-50 border border-zinc-200 text-zinc-900 shadow-2xs">
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
              <div className="pt-4 border-t border-zinc-200 flex flex-wrap gap-2">
                {[
                  'Multi-Agent Architectures',
                  'LangGraph Workflows',
                  'RAG & Vector Retrieval',
                  'FastAPI & React 19',
                  'Data Structures & Algorithms'
                ].map((tag) => (
                  <span
                    key={tag}
                    className="inline-flex items-center gap-1.5 px-3 py-1 rounded-lg text-xs font-semibold bg-zinc-100 border border-zinc-300 text-zinc-950"
                  >
                    <CheckCircle className="w-3.5 h-3.5 text-black shrink-0" />
                    <span>{tag}</span>
                  </span>
                ))}
              </div>
            </div>

            {/* Bento Card 2: Academic Profile & University Credentials (5 cols) */}
            <div className="lg:col-span-5 bento-card p-6 sm:p-7 flex flex-col justify-between">
              <div>
                {/* Profile header */}
                <div className="flex items-center gap-3.5 pb-4 border-b border-zinc-200">
                  <div className="w-14 h-14 rounded-2xl overflow-hidden border-2 border-black shadow-md shrink-0 bg-zinc-950">
                    <img
                      src="/biruk_photo.jpg"
                      alt={PERSONAL_INFO.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-black">
                      {PERSONAL_INFO.name}
                    </h3>
                    <div className="text-xs font-mono text-zinc-700 font-bold">
                      ASTU Engineering (2024 — 2028)
                    </div>
                  </div>
                </div>

                {/* Academic info */}
                <div className="py-4 space-y-3 border-b border-zinc-200 text-xs">
                  <div className="flex items-start gap-2.5">
                    <GraduationCap className="w-4 h-4 text-black shrink-0 mt-0.5" />
                    <div>
                      <div className="font-bold text-black">
                        Adama Science and Technology University (ASTU)
                      </div>
                      <div className="text-zinc-600">
                        Bachelor of Science in Engineering (2024 — 2028)
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center gap-2.5">
                    <MapPin className="w-4 h-4 text-black shrink-0" />
                    <span className="text-zinc-800 font-medium">
                      {PERSONAL_INFO.location}
                    </span>
                  </div>
                </div>

                {/* Core Disciplines List */}
                <div className="py-4 space-y-2 text-xs">
                  <span className="text-[11px] font-mono uppercase text-black font-bold">
                    Primary Focus Disciplines
                  </span>
                  <div className="space-y-1.5">
                    <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center gap-2.5">
                      <Cpu className="w-3.5 h-3.5 text-black shrink-0" />
                      <span className="font-medium text-zinc-950">AI Engineering & Agent Workflows</span>
                    </div>
                    <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center gap-2.5">
                      <Layers className="w-3.5 h-3.5 text-black shrink-0" />
                      <span className="font-medium text-zinc-950">Production Full-Stack Web Systems</span>
                    </div>
                    <div className="p-2 rounded-lg bg-zinc-50 border border-zinc-200 flex items-center gap-2.5">
                      <Target className="w-3.5 h-3.5 text-black shrink-0" />
                      <span className="font-medium text-zinc-950">Algorithmic Problem Solving (DSA)</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Direct Verified Contact Channels */}
              <div className="pt-3 border-t border-zinc-200 space-y-2 text-xs font-medium">
                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center justify-between p-2 rounded-lg text-zinc-900 hover:text-black hover:bg-zinc-100 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Mail className="w-3.5 h-3.5 text-black" />
                    <span className="font-mono font-semibold">{PERSONAL_INFO.email}</span>
                  </span>
                  <span className="text-[10px] text-zinc-600 font-mono">Email</span>
                </a>

                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="flex items-center justify-between p-2 rounded-lg text-zinc-900 hover:text-black hover:bg-zinc-100 transition-colors"
                >
                  <span className="flex items-center gap-2">
                    <Phone className="w-3.5 h-3.5 text-black" />
                    <span className="font-mono font-semibold">{PERSONAL_INFO.phone}</span>
                  </span>
                  <span className="text-[10px] text-zinc-600 font-mono">Call</span>
                </a>
              </div>
            </div>

          </div>
        </SectionBorderFrame>
      </div>
    </section>
  );
}
