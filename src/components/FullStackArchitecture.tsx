import { useState } from 'react';
import { 
  Monitor, 
  Server, 
  Database, 
  Workflow, 
  Layers, 
  Eye, 
  EyeOff, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';
import { FULL_STACK_LAYERS } from '../data/experience';
import SectionBorderFrame from './SectionBorderFrame';

export default function FullStackArchitecture() {
  const [activeLayer, setActiveLayer] = useState<number | null>(null);
  const [isSectionHidden, setIsSectionHidden] = useState(false);

  const getLayerIcon = (iconName: string) => {
    switch (iconName) {
      case 'Monitor':
        return <Monitor className="w-5 h-5 text-emerald-600" />;
      case 'Server':
        return <Server className="w-5 h-5 text-emerald-600" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-600" />;
      case 'Cpu':
        return <Workflow className="w-5 h-5 text-emerald-600" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-emerald-600" />;
      default:
        return <Layers className="w-5 h-5 text-emerald-600" />;
    }
  };

  return (
    <section id="architecture" className="py-10 scroll-mt-24 relative transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionBorderFrame>
          {/* Section Header with Hide/Show Toggle */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div className="max-w-3xl">
              {/* Green highlight for Main Point */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-300 text-xs font-mono text-emerald-800 font-bold mb-3 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>FULL-STACK SYSTEM ARCHITECTURE</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-black">
                Layered Engineering Architecture
              </h2>
              <p className="mt-2 text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
                Strict separation of concerns between reactive user interfaces, scalable API runtimes, vector persistence, and autonomous AI pipelines.
              </p>
            </div>

            {/* Native Hide/Show Button */}
            <button
              onClick={() => setIsSectionHidden(!isSectionHidden)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold rounded-lg border border-zinc-300 bg-white hover:bg-zinc-100 text-black shadow-2xs transition-all duration-200 cursor-pointer self-start sm:self-auto shrink-0"
              title={isSectionHidden ? "Expand Architecture" : "Collapse Architecture"}
            >
              {isSectionHidden ? (
                <>
                  <Eye className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Show Stack</span>
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
              isSectionHidden ? 'max-h-0 opacity-0 pointer-events-none' : 'max-h-[2500px] opacity-100'
            }`}
          >
            {/* Stack Layers Architecture Bento Stack (No numbers like 01, 02) */}
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
                        ? 'border-emerald-500 shadow-md translate-x-1 ring-1 ring-emerald-500/20'
                        : 'hover:border-zinc-400'
                    }`}
                  >
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                      
                      {/* Layer Name & Info (Removed numbers 01, 02) */}
                      <div className="flex items-start gap-3.5 max-w-xl">
                        <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-200 shrink-0 mt-0.5">
                          {getLayerIcon(layer.iconName)}
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <span className="text-[11px] font-mono uppercase text-emerald-800 font-bold bg-emerald-50 px-2 py-0.5 rounded border border-emerald-200">
                              Tier
                            </span>
                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                            <h3 className="text-base sm:text-lg font-black text-black tracking-tight">
                              {layer.layerName}
                            </h3>
                          </div>
                          <p className="text-xs sm:text-sm text-zinc-800 mt-1 leading-relaxed font-normal">
                            {layer.description}
                          </p>
                        </div>
                      </div>

                      {/* Technologies in this Layer */}
                      <div className="flex flex-wrap gap-1.5 md:max-w-md justify-start md:justify-end">
                        {layer.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-100 border border-zinc-300 text-black font-bold hover:border-emerald-400 transition-colors"
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
          </div>
        </SectionBorderFrame>
      </div>
    </section>
  );
}
