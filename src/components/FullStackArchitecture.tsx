import { useState } from 'react';
import { 
  Terminal, 
  Monitor, 
  Server, 
  Database, 
  Cpu, 
  Layers 
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
    <section className="py-10 relative transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionBorderFrame>
          {/* Section Header */}
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/40 text-xs font-mono text-emerald-800 dark:text-cyan-300 font-bold mb-3 shadow-xs">
              <Terminal className="w-3.5 h-3.5" />
              <span>06 // SYSTEM STACK</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-gradient-title">
              Full-Stack Engineering Architecture
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
              Layered system design ensuring clean separation between presentation, scalable API backends, state persistence, autonomous AI logic, and infrastructure.
            </p>
          </div>

          {/* Stack Layers Architecture Bento Stack */}
          <div className="space-y-3.5">
            {FULL_STACK_LAYERS.map((layer, index) => {
              const isHovered = activeLayer === index;
              return (
                <div
                  key={layer.layerName}
                  onMouseEnter={() => setActiveLayer(index)}
                  onMouseLeave={() => setActiveLayer(null)}
                  className={`bento-card p-5 sm:p-6 transition-all duration-200 cursor-default ${
                    isHovered
                      ? 'border-emerald-500/70 shadow-md translate-x-1'
                      : ''
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    
                    {/* Layer Name & Info */}
                    <div className="flex items-start gap-3.5 max-w-xl">
                      <div className="p-2.5 rounded-xl bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 shrink-0 mt-0.5">
                        {getLayerIcon(layer.iconName)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-bold">
                            Layer 0{index + 1}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                          <h3 className="text-base sm:text-lg font-extrabold text-zinc-950 dark:text-white tracking-tight">
                            {layer.layerName}
                          </h3>
                        </div>
                        <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 mt-1 leading-relaxed font-normal">
                          {layer.description}
                        </p>
                      </div>
                    </div>

                    {/* Technologies in this Layer */}
                    <div className="flex flex-wrap gap-1.5 md:max-w-md justify-start md:justify-end">
                      {layer.technologies.map((tech) => (
                        <span
                          key={tech}
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 font-semibold"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>

                  </div>
                </div>
              );
            })}
          </div>
        </SectionBorderFrame>
      </div>
    </section>
  );
}
