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
    <section id="ai-architecture" className="py-10 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionBorderFrame>
          {/* Section Header */}
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/40 text-xs font-mono text-emerald-800 dark:text-cyan-300 font-bold mb-3 shadow-xs">
              <Terminal className="w-3.5 h-3.5" />
              <span>05 // METHODOLOGY</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-gradient-title">
              How I Build AI Systems
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
              A production-oriented pipeline transforming unstructured domain problems into robust, verified agentic architectures with local or cloud inference.
            </p>
          </div>

          {/* Horizontal Pipeline Steps Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 mb-6">
            {AI_BUILD_PROCESS.map((step, idx) => {
              const isSelected = selectedStep === idx;
              return (
                <button
                  key={step.stepNumber}
                  onClick={() => setSelectedStep(idx)}
                  className={`p-3 rounded-xl text-left transition-all relative flex flex-col justify-between h-22 cursor-pointer ${
                    isSelected
                      ? 'btn-primary'
                      : 'btn-secondary'
                  }`}
                >
                  <div className="flex items-center justify-between w-full">
                    <span className="text-[10px] font-mono font-bold">
                      {step.stepNumber}
                    </span>
                    {isSelected && (
                      <span className="w-1.5 h-1.5 rounded-full bg-white dark:bg-zinc-950" />
                    )}
                  </div>
                  <div className="text-xs font-bold tracking-tight line-clamp-2">
                    {step.title}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Detailed Interactive Focus Card in Bento Style */}
          <div className="bento-card p-6 sm:p-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              
              {/* Left Column: Stage Overview & Deep-Dive */}
              <div className="lg:col-span-7 space-y-4">
                <div className="flex items-center gap-2.5">
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/30 text-emerald-800 dark:text-emerald-300 font-bold">
                    STAGE {currentStep.stepNumber}
                  </span>
                  <span className="text-xs font-mono text-zinc-500">ENGINEERING PIPELINE</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
                  {currentStep.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
                  {currentStep.shortDesc}
                </p>

                {/* Key Details & Execution Phases */}
                <div className="pt-2 space-y-2">
                  <div className="text-xs font-mono uppercase text-emerald-800 dark:text-emerald-400 font-bold">
                    Key Execution Details
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {currentStep.details.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-zinc-300">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Technical Artifact & Stack Info */}
              <div className="lg:col-span-5 p-5 rounded-xl bg-zinc-50 dark:bg-zinc-900/60 border border-zinc-200 dark:border-zinc-800 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-200 dark:border-zinc-800">
                  <span className="text-xs font-mono text-zinc-500">METHODOLOGY STACK</span>
                  <div className="p-1.5 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-300">
                    {getStepIcon(currentStep.iconName)}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold text-zinc-950 dark:text-white mb-2">
                    Primary Tools & Frameworks
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {currentStep.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-white dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 text-zinc-800 dark:text-zinc-200 font-medium"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-200 dark:border-zinc-800 flex items-center justify-between text-xs">
                  <span className="text-zinc-500 font-mono">Next Phase</span>
                  <button
                    onClick={() => setSelectedStep((prev) => (prev + 1) % AI_BUILD_PROCESS.length)}
                    className="inline-flex items-center gap-1 font-bold text-emerald-700 dark:text-emerald-400 hover:underline cursor-pointer"
                  >
                    <span>Advance to Step {(selectedStep % AI_BUILD_PROCESS.length) + 1}</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>

            </div>
          </div>
        </SectionBorderFrame>
      </div>
    </section>
  );
}
