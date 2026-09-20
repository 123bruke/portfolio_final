import { useState } from 'react';
import { 
  Terminal, 
  Monitor, 
  Server, 
  Database, 
  Cpu, 
  Layers, 
  ArrowDown 
} from 'lucide-react';
import { FULL_STACK_LAYERS } from '../data/experience';
import SectionBorderFrame from './SectionBorderFrame';

export default function FullStackArchitecture() {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);

  const getLayerIcon = (iconName: string) => {
    switch (iconName) {
      case 'Monitor':
        return <Monitor className="w-5 h-5 text-emerald-600 dark:text-cyan-300" />;
      case 'Server':
        return <Server className="w-5 h-5 text-emerald-600 dark:text-cyan-300" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-600 dark:text-cyan-300" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-600 dark:text-cyan-300" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-emerald-600 dark:text-cyan-300" />;
      default:
        return <Layers className="w-5 h-5 text-emerald-600 dark:text-cyan-300" />;
    }
  };

  return (
    <section className="py-12 relative transition-colors duration-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">
        <SectionBorderFrame>
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/40 text-xs font-mono text-emerald-800 dark:text-cyan-300 font-bold mb-3 shadow-[0_0_10px_rgba(52,211,153,0.2)]">
              <Terminal className="w-3.5 h-3.5" />
              <span>06 // SYSTEM STACK</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gradient-title">
              Full-Stack Engineering Architecture
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-800 dark:text-emerald-100/90 leading-relaxed font-medium">
              Layered system design ensuring clean separation between presentation, scalable API backends, state persistence, autonomous AI logic, and infrastructure.
            </p>
          </div>

          {/* Stack Layers Architecture Diagram */}
          <div className="space-y-4">
            {FULL_STACK_LAYERS.map((layer, index) => {
              const isHovered = activeLayer === index;
              return (
                <div key={layer.layerName} className="space-y-2">
                  <div
                    onMouseEnter={() => setActiveLayer(index)}
                    onMouseLeave={() => setActiveLayer(null)}
                    className={`glass-card rounded-2xl p-6 transition-all duration-300 cursor-default shadow-lg group hover:scale-[1.01] ${
                      isHovered
                        ? 'border-emerald-500/80 shadow-[0_0_16px_rgba(52,211,153,0.25)] translate-x-1'
                        : 'hover:border-emerald-500/50'
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      
                      {/* Layer Name & Info */}
                      <div className="flex items-start gap-3.5 max-w-xl">
                        <div className="p-2.5 rounded-xl bg-white dark:bg-black/80 border border-black/10 dark:border-emerald-500/30 shrink-0 mt-0.5 group-hover:border-emerald-400/60 shadow-sm">
                          {getLayerIcon(layer.iconName)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-xs font-mono text-emerald-700 dark:text-cyan-300 font-bold">
                              Layer 0{index + 1}
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                            <h3 className="text-base sm:text-lg font-extrabold text-zinc-950 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-cyan-300 transition-colors">
                              {layer.layerName}
                            </h3>
                          </div>
                          <p className="text-xs sm:text-sm text-zinc-700 dark:text-slate-200 mt-1 leading-relaxed font-normal">
                            {layer.description}
                          </p>
                        </div>
                      </div>

                      {/* Technologies in this Layer */}
                      <div className="flex flex-wrap gap-1.5 md:max-w-md justify-start md:justify-end">
                        {layer.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-xs font-mono bg-white dark:bg-black/60 border border-black/15 dark:border-emerald-500/30 text-zinc-800 dark:text-slate-200 font-semibold shadow-sm"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                    </div>
                  </div>

                  {/* Connecting arrow indicator between layers (except after last) */}
                  {index < FULL_STACK_LAYERS.length - 1 && (
                    <div className="flex justify-center py-0.5">
                      <ArrowDown className="w-4 h-4 text-emerald-600 dark:text-cyan-300 animate-bounce" />
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </SectionBorderFrame>
      </div>
    </section>
  );
}
