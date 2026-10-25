import { useState } from 'react';
import { 
  GraduationCap, 
  Layers, 
  Workflow, 
  Cpu, 
  Code2, 
  Building2, 
  Terminal, 
  CheckCircle2, 
  Clock, 
  Eye, 
  EyeOff, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';
import { TIMELINE_EVENTS } from '../data/experience';
import SectionBorderFrame from './SectionBorderFrame';

export default function JourneyTimeline() {
  const [isSectionHidden, setIsSectionHidden] = useState(false);
  const [expandedIndex, setExpandedIndex] = useState<number | null>(0); // latest open by default

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-4 h-4 text-emerald-600" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-emerald-600" />;
      case 'Bot':
        return <Workflow className="w-4 h-4 text-emerald-600" />;
      case 'Layout':
        return <Layers className="w-4 h-4 text-emerald-600" />;
      case 'Code':
        return <Code2 className="w-4 h-4 text-emerald-600" />;
      default:
        return <Building2 className="w-4 h-4 text-emerald-600" />;
    }
  };

  return (
    <section id="journey" className="py-10 scroll-mt-24 relative transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionBorderFrame>
          {/* Section Heading with Hide/Show Toggle */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10">
            <div>
              {/* Green highlight for Main Point */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-300 text-xs font-mono text-emerald-800 font-bold mb-3 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>CAREER & ACADEMIC PROGRESSION</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-black">
                My Engineering Journey
              </h2>
              <p className="mt-2 text-sm sm:text-base text-zinc-700 font-normal">
                Structured technical evolution from algorithmic foundations at <strong className="text-emerald-700 font-bold">ASTU</strong> to enterprise AI systems.
              </p>
            </div>

            {/* Native Hide/Show Button */}
            <button
              onClick={() => setIsSectionHidden(!isSectionHidden)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold rounded-lg border border-zinc-300 bg-white hover:bg-zinc-100 text-black shadow-2xs transition-all duration-200 cursor-pointer self-start sm:self-auto shrink-0"
              title={isSectionHidden ? "Expand Section" : "Collapse Section"}
            >
              {isSectionHidden ? (
                <>
                  <Eye className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Show Journey</span>
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
            {/* Vertical Timeline Structure */}
            <div className="relative pl-6 sm:pl-8 border-l-2 border-zinc-300 space-y-8 sm:space-y-10">
              {TIMELINE_EVENTS.map((event, index) => {
                const isExpanded = expandedIndex === index;
                const isCurrent = index === 0;

                return (
                  <div
                    key={index}
                    id={`timeline-step-${index}`}
                    className="relative group"
                  >
                    {/* Timeline Node Indicator with Green Border for current milestone */}
                    <div className={`absolute -left-[31px] sm:-left-[39px] top-1.5 w-8 h-8 rounded-xl bg-white border flex items-center justify-center shadow-2xs transition-colors ${
                      isCurrent ? 'border-emerald-500 ring-2 ring-emerald-500/20' : 'border-zinc-300'
                    }`}>
                      {getIcon(event.iconName)}
                    </div>

                    {/* Event Content Box */}
                    <div className={`bento-card p-5 sm:p-6 ml-2 sm:ml-4 transition-all duration-200 ${
                      isCurrent ? 'border-emerald-300 bg-emerald-50/15' : ''
                    }`}>
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-zinc-200 mb-3">
                        <div>
                          <div className="flex items-center gap-2">
                            <h3 className="text-base sm:text-lg font-black text-black">
                              {event.title}
                            </h3>
                            {isCurrent && (
                              <span className="text-[10px] font-mono uppercase bg-emerald-600 text-white px-2 py-0.5 rounded font-bold">
                                Current
                              </span>
                            )}
                          </div>
                          <div className="text-xs font-mono text-zinc-800 font-bold">
                            {event.role} {event.organization && `• ${event.organization}`}
                          </div>
                        </div>

                        <div className="flex items-center gap-2 self-start sm:self-auto">
                          <span className={`inline-flex items-center gap-1 text-[11px] font-mono font-bold px-2.5 py-1 rounded border ${
                            isCurrent 
                              ? 'bg-emerald-50 text-emerald-800 border-emerald-300' 
                              : 'bg-zinc-100 text-zinc-900 border-zinc-300'
                          }`}>
                            <Clock className={`w-3.5 h-3.5 ${isCurrent ? 'text-emerald-600' : 'text-zinc-700'}`} />
                            {event.period}
                          </span>

                          <button
                            onClick={() => setExpandedIndex(isExpanded ? null : index)}
                            className="text-xs font-mono text-zinc-600 hover:text-black px-2 py-1 rounded bg-zinc-100 hover:bg-zinc-200 cursor-pointer"
                            title={isExpanded ? "Collapse highlights" : "Expand highlights"}
                          >
                            {isExpanded ? 'Hide' : 'Details'}
                          </button>
                        </div>
                      </div>

                      <p className="text-xs sm:text-sm text-zinc-900 mb-3 leading-relaxed font-normal">
                        {event.description}
                      </p>

                      {/* Smooth Collapsible Highlights */}
                      <div
                        className={`transition-all duration-300 ease-in-out overflow-hidden ${
                          isExpanded ? 'max-h-[300px] opacity-100 mb-4' : 'max-h-0 opacity-0 mb-0'
                        }`}
                      >
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2 border-t border-zinc-200">
                          {event.highlights.map((item, hIdx) => (
                            <div key={hIdx} className="flex items-start gap-2 text-xs text-zinc-900">
                              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                              <span>{item}</span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Skill Pills */}
                      <div className="flex flex-wrap gap-1.5 pt-1">
                        {event.skills?.map((skill) => (
                          <span
                            key={skill}
                            className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold bg-white text-black border border-zinc-300 hover:border-emerald-500 transition-colors"
                          >
                            {skill}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </SectionBorderFrame>
      </div>
    </section>
  );
}
