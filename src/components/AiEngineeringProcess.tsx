import { useState } from 'react';
import { 
  Terminal, 
  Target, 
  Database, 
  Cpu, 
  Wrench, 
  GitMerge, 
  Server, 
  Layout, 
  Boxes, 
  CheckCircle2, 
  ArrowRight 
} from 'lucide-react';
import { AI_BUILD_PROCESS } from '../data/experience';
import SectionBorderFrame from './SectionBorderFrame';

export default function AiEngineeringProcess() {
  const [selectedStep, setSelectedStep] = useState<number>(0);

  const getStepIcon = (iconName: string) => {
    switch (iconName) {
      case 'Target':
        return <Target className="w-5 h-5 text-emerald-600 dark:text-cyan-300" />;
      case 'Database':
        return <Database className="w-5 h-5 text-emerald-600 dark:text-cyan-300" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-emerald-600 dark:text-cyan-300" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-emerald-600 dark:text-cyan-300" />;
      case 'GitMerge':
        return <GitMerge className="w-5 h-5 text-emerald-600 dark:text-cyan-300" />;
      case 'Server':
        return <Server className="w-5 h-5 text-emerald-600 dark:text-cyan-300" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-emerald-600 dark:text-cyan-300" />;
      case 'Boxes':
        return <Boxes className="w-5 h-5 text-emerald-600 dark:text-cyan-300" />;
      default:
        return <Cpu className="w-5 h-5 text-emerald-600 dark:text-cyan-300" />;
    }
  };

  const currentStep = AI_BUILD_PROCESS[selectedStep];

  return (
    <section id="ai-architecture" className="py-12 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">
        <SectionBorderFrame>
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/40 text-xs font-mono text-emerald-800 dark:text-cyan-300 font-bold mb-3 shadow-[0_0_10px_rgba(52,211,153,0.2)]">
              <Terminal className="w-3.5 h-3.5" />
              <span>05 // METHODOLOGY</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gradient-title">
              How I Build AI Systems
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-800 dark:text-emerald-100/90 leading-relaxed font-medium">
              A production-oriented pipeline transforming unstructured domain problems into robust, verified agentic architectures with local or cloud inference.
            </p>
          </div>

          {/* Horizontal Pipeline Steps Bar with 3D buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2 mb-8">
            {AI_BUILD_PROCESS.map((step, idx) => {
              const isSelected = selectedStep === idx;
              return (
                <button
                  key={step.stepNumber}
                  onClick={() => setSelectedStep(idx)}
                  className={`p-3 rounded-xl text-left transition-all relative flex flex-col justify-between h-24 cursor-pointer ${
                    isSelected
                      ? 'btn-3d-gradient text-emerald-950 dark:text-white shadow-md'
                      : 'btn-3d-transparent text-zinc-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className={`text-[10px] font-mono font-bold ${isSelected ? 'text-emerald-950 dark:text-cyan-200' : 'text-emerald-700 dark:text-cyan-400'}`}>
                      {step.stepNumber}
                    </span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-600 dark:bg-cyan-300 animate-ping shadow-[0_0_6px_rgba(52,211,153,0.9)]" />
                    )}
                  </div>
                  <div className={`text-xs font-bold tracking-tight line-clamp-2 ${isSelected ? 'text-emerald-950 dark:text-white' : 'text-zinc-950 dark:text-white'}`}>
                    {step.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Interactive Focus Card with Continuous Gradient Border */}
          <div className="continuous-gradient-border rounded-2xl p-[1.5px] shadow-2xl">
            <div className="continuous-gradient-spin-layer absolute -inset-[120%] pointer-events-none" />

            <div className="relative z-10 rounded-[calc(1rem-1.5px)] bg-white/95 dark:bg-black/90 backdrop-blur-xl p-6 sm:p-8">
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
                
                {/* Left side: Step narrative */}
                <div className="lg:col-span-7 space-y-4">
                  <div className="flex items-center gap-3">
                    <div className="p-2.5 rounded-xl bg-white dark:bg-black/80 border border-black/10 dark:border-emerald-500/30 shadow-sm">
                      {getStepIcon(currentStep.iconName)}
                    </div>
                    <div>
                      <span className="text-xs font-mono text-emerald-700 dark:text-cyan-300 font-bold">
                        Stage {currentStep.stepNumber} of 08
                      </span>
                      <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
                        {currentStep.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-sm sm:text-base text-zinc-700 dark:text-slate-200 font-medium leading-relaxed">
                    {currentStep.shortDesc}
                  </p>

                  <div className="space-y-2 pt-2">
                    {currentStep.details.map((detail, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-slate-200 font-normal">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-cyan-300 shrink-0 mt-0.5" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>

                  {/* Technologies / Tools in this phase */}
                  <div className="pt-4 border-t border-black/10 dark:border-white/10">
                    <span className="text-xs font-mono text-emerald-800 dark:text-cyan-300 font-bold block mb-2">
                      Primary Tools & Architectural Concepts:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {currentStep.tools.map((tool) => (
                        <span
                          key={tool}
                          className="px-2.5 py-1 rounded text-xs font-mono bg-white dark:bg-black/60 border border-black/15 dark:border-emerald-500/30 text-zinc-800 dark:text-slate-200 font-semibold shadow-sm"
                        >
                          {tool}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Right side: Architectural Diagram Preview Box */}
                <div className="lg:col-span-5 bg-white dark:bg-black/80 rounded-xl p-5 border border-black/15 dark:border-emerald-500/30 font-mono text-xs shadow-lg">
                  <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/10 dark:border-emerald-500/20">
                    <span className="text-emerald-800 dark:text-cyan-300 text-[11px] font-bold flex items-center gap-1.5">
                      <Terminal className="w-3.5 h-3.5" />
                      RUNTIME STATE VALIDATION
                    </span>
                    <span className="text-[10px] text-zinc-500 dark:text-slate-400">Node Execution</span>
                  </div>

                  <div className="space-y-3">
                    <div className="p-2.5 rounded bg-slate-50 dark:bg-black/60 border border-black/10 dark:border-emerald-500/20 flex items-center justify-between">
                      <span className="text-zinc-800 dark:text-slate-200">Input Ingestion</span>
                      <span className="text-emerald-700 dark:text-cyan-300 font-bold">Validated</span>
                    </div>
                    <div className="flex justify-center">
                      <ArrowRight className="w-3.5 h-3.5 text-emerald-600 dark:text-cyan-300 rotate-90" />
                    </div>
                    <div className="p-2.5 rounded bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/40 text-center">
                      <div className="text-emerald-950 dark:text-emerald-200 font-bold">{currentStep.title}</div>
                      <div className="text-[10px] text-zinc-600 dark:text-slate-300 mt-0.5">Execution Step #{currentStep.stepNumber}</div>
                    </div>
                    <div className="flex justify-center">
                      <ArrowRight className="w-3.5 h-3.5 text-emerald-600 dark:text-cyan-300 rotate-90" />
                    </div>
                    <div className="p-2.5 rounded bg-slate-50 dark:bg-black/60 border border-black/10 dark:border-emerald-500/20 flex items-center justify-between">
                      <span className="text-zinc-800 dark:text-slate-200">Downstream Node Delivery</span>
                      <span className="text-emerald-700 dark:text-cyan-300 font-bold">Deterministic</span>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </SectionBorderFrame>
      </div>
    </section>
  );
}
