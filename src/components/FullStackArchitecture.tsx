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
        return <Monitor className="w-5 h-5 text-black" />;
      case 'Server':
        return <Server className="w-5 h-5 text-black" />;
      case 'Database':
        return <Database className="w-5 h-5 text-black" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-black" />;
      case 'Layers':
        return <Layers className="w-5 h-5 text-black" />;
      default:
        return <Layers className="w-5 h-5 text-black" />;
    }
  };

  return (
    <section id="architecture" className="py-10 scroll-mt-24 relative transition-colors duration-200">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionBorderFrame>
          {/* Section Header */}
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-100 border border-zinc-300 text-xs font-mono text-black font-bold mb-3 shadow-2xs">
              <Terminal className="w-3.5 h-3.5 text-black" />
              <span>06 // SYSTEM STACK</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-black">
              Full-Stack Engineering Architecture
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
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
                      ? 'border-black shadow-md translate-x-1'
                      : ''
                  }`}
                >
                  <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
                    
                    {/* Layer Name & Info */}
                    <div className="flex items-start gap-3.5 max-w-xl">
                      <div className="p-2.5 rounded-xl bg-zinc-100 border border-zinc-200 shrink-0 mt-0.5">
                        {getLayerIcon(layer.iconName)}
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono text-black font-bold">
                            Layer 0{index + 1}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-black" />
                          <h3 className="text-base sm:text-lg font-extrabold text-black tracking-tight">
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
                          className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-100 border border-zinc-300 text-zinc-950 font-semibold"
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
