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
        return <GraduationCap className="w-4 h-4 text-emerald-600 dark:text-cyan-300" />;
      case 'Cpu':
        return <Cpu className="w-4 h-4 text-emerald-600 dark:text-cyan-300" />;
      case 'Bot':
        return <Brain className="w-4 h-4 text-emerald-600 dark:text-cyan-300" />;
      case 'Layout':
        return <Layers className="w-4 h-4 text-emerald-600 dark:text-cyan-300" />;
      case 'Code':
        return <Code className="w-4 h-4 text-emerald-600 dark:text-cyan-300" />;
      default:
        return <Building2 className="w-4 h-4 text-emerald-600 dark:text-cyan-300" />;
    }
  };

  return (
    <section id="journey" className="py-12 relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">
        <SectionBorderFrame>
          {/* Section Heading */}
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/40 text-xs font-mono text-emerald-800 dark:text-cyan-300 font-bold mb-3 shadow-[0_0_10px_rgba(52,211,153,0.2)]">
              <Terminal className="w-3.5 h-3.5" />
              <span>02 // PROGRESSION</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gradient-title">
              My Engineering Journey
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-800 dark:text-emerald-100/90 font-medium">
              A structured progression from theoretical engineering foundations to production-grade AI systems and full-stack software.
            </p>
          </div>

          {/* Vertical Timeline Structure */}
          <div className="relative pl-6 sm:pl-8 border-l-2 border-emerald-500/30 dark:border-emerald-400/40 space-y-12">
            {TIMELINE_EVENTS.map((event, index) => (
              <div
                key={index}
                id={`timeline-step-${index}`}
                className="relative group"
              >
                {/* Timeline Node Indicator */}
                <div className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-8 h-8 rounded-xl bg-white dark:bg-black border border-black/15 dark:border-emerald-500/60 flex items-center justify-center shadow-md group-hover:scale-110 transition-all group-hover:shadow-[0_0_12px_rgba(52,211,153,0.5)]">
                  {getIcon(event.iconName)}
                </div>

                {/* Event Content Box */}
                <div className="glass-card rounded-xl p-5 sm:p-6 ml-2 sm:ml-4 transition-all duration-300 hover:border-emerald-500/60 shadow-lg group-hover:translate-x-1">
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 pb-3 border-b border-black/10 dark:border-white/10 mb-3">
                    <div>
                      <h3 className="text-base sm:text-lg font-bold text-zinc-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-cyan-300 transition-colors">
                        {event.title}
                      </h3>
                      <div className="text-xs font-mono text-emerald-700 dark:text-cyan-300 font-bold">
                        {event.role} {event.organization && `• ${event.organization}`}
                      </div>
                    </div>

                    <span className="inline-flex items-center gap-1 text-[11px] font-mono text-zinc-800 dark:text-slate-200 font-semibold px-2.5 py-1 rounded bg-slate-100 dark:bg-black/60 border border-black/10 dark:border-emerald-500/30 self-start sm:self-auto">
                      <Clock className="w-3.5 h-3.5 text-emerald-600 dark:text-cyan-300" />
                      {event.period}
                    </span>
                  </div>

                  <p className="text-sm text-zinc-800 dark:text-slate-200 mb-4 leading-relaxed font-normal">
                    {event.description}
                  </p>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
                    {event.highlights.map((item, hIdx) => (
                      <div key={hIdx} className="flex items-start gap-2 text-xs text-zinc-800 dark:text-slate-200">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-300 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>

                  <div className="flex flex-wrap gap-1.5 pt-2">
                    {event.skills?.map((skill) => (
                      <span
                        key={skill}
                        className="px-2.5 py-1 rounded-md text-[11px] font-mono font-medium bg-emerald-50 dark:bg-emerald-950/50 text-emerald-800 dark:text-cyan-200 border border-emerald-300 dark:border-emerald-500/30"
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
