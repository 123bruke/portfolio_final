import { 
  GraduationCap, 
  Layers, 
  Brain, 
  Cpu, 
  Code, 
  Building2, 
  Terminal, 
  CheckCircle2, 
  Clock 
} from 'lucide-react';
import { TIMELINE_EVENTS } from '../data/experience';
import SectionBorderFrame from './SectionBorderFrame';

export default function JourneyTimeline() {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'GraduationCap':
        return <GraduationCap className="w-4 h-4 text-black" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-black" />;
      case 'Bot':
        return <Brain className="w-4 h-4 text-black" />;
      case 'Layout':
        return <Layers className="w-4 h-4 text-black" />;
      case 'Code':
        return <Code className="w-4 h-4 text-black" />;
      default:
        return <Building2 className="w-4 h-4 text-black" />;
    }
  };

  return (
    <section id="journey" className="py-10 scroll-mt-24 relative transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionBorderFrame>
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-10">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-100 border border-zinc-300 text-xs font-mono text-black font-bold mb-3 shadow-2xs">
              <Terminal className="w-3.5 h-3.5 text-black" />
              <span>02 // PROGRESSION</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-black">
              My Engineering Journey
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-700 font-normal">
              A structured progression from theoretical foundations to production-grade AI systems and full-stack software.
            </p>
          </div>

          {/* Vertical Timeline Structure */}
          <div className="relative pl-6 sm:pl-8 border-l-2 border-zinc-300 space-y-8 sm:space-y-10">
            {TIMELINE_EVENTS.map((event, index) => (
              <div
                key={index}
                id={`timeline-step-${index}`}
                className="relative group"
              >
                {/* Timeline Node Indicator */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-8 h-8 rounded-xl bg-white border border-zinc-300 flex items-center justify-center shadow-2xs">
                  {getIcon(event.iconName)}
                </div>

                {/* Event Content Box */}
                <div className="bento-card p-5 sm:p-6 ml-2 sm:ml-4">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-zinc-200 mb-3">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-black">
                        {event.title}
                      </h3>
                      <div className="text-xs font-mono text-zinc-700 font-bold">
                        {event.role} {event.organization && `• ${event.organization}`}
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-800 font-semibold px-2.5 py-1 rounded bg-zinc-100 border border-zinc-300 self-start sm:self-auto">
                      <Clock className="w-3.5 h-3.5 text-black" />
                      {event.period}
                    </span>
                  </div>

                  <p className="text-xs sm:text-sm text-zinc-800 mb-4 leading-relaxed font-normal">
                    {event.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                    {event.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-zinc-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {event.skills?.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-medium bg-zinc-100 text-zinc-950 border border-zinc-300"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SectionBorderFrame>
      </div>
    </section>
  );
}
