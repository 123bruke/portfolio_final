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
        return <Target className="w-5 h-5 text-black" />;
      case 'Database':
        return <Database className="w-5 h-5 text-black" />;
      case 'Cpu':
        return <Cpu className="w-5 h-5 text-black" />;
      case 'Wrench':
        return <Wrench className="w-5 h-5 text-black" />;
      case 'GitMerge':
        return <GitMerge className="w-5 h-5 text-black" />;
      case 'Server':
        return <Server className="w-5 h-5 text-black" />;
      case 'Layout':
        return <Layout className="w-5 h-5 text-black" />;
      case 'Boxes':
        return <Boxes className="w-5 h-5 text-black" />;
      default:
        return <Cpu className="w-5 h-5 text-black" />;
    }
  };

  const currentStep = AI_BUILD_PROCESS[selectedStep];

  return (
    <section id="ai-architecture" className="py-10 scroll-mt-24 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionBorderFrame>
          {/* Section Header */}
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-100 border border-zinc-300 text-xs font-mono text-black font-bold mb-3 shadow-2xs">
              <Terminal className="w-3.5 h-3.5 text-black" />
              <span>05 // METHODOLOGY</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-black">
              How I Build AI Systems
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
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
                      <span className="w-1.5 h-1.5 rounded-full bg-white" />
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
                  <span className="text-xs font-mono px-2.5 py-0.5 rounded bg-zinc-100 border border-zinc-300 text-black font-bold">
                    STAGE {currentStep.stepNumber}
                  </span>
                  <span className="text-xs font-mono text-zinc-600 font-semibold">ENGINEERING PIPELINE</span>
                </div>

                <h3 className="text-xl sm:text-2xl font-extrabold text-black tracking-tight">
                  {currentStep.title}
                </h3>

                <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed font-normal">
                  {currentStep.shortDesc}
                </p>

                {/* Key Details & Execution Phases */}
                <div className="pt-2 space-y-2">
                  <div className="text-xs font-mono uppercase text-black font-bold">
                    Key Execution Details
                  </div>
                  <div className="grid grid-cols-1 gap-2">
                    {currentStep.details.map((item, dIdx) => (
                      <div key={dIdx} className="flex items-start gap-2 text-xs text-zinc-800">
                        <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                        <span>{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Right Column: Technical Artifact & Stack Info */}
              <div className="lg:col-span-5 p-5 rounded-xl bg-zinc-50 border border-zinc-200 space-y-4">
                <div className="flex items-center justify-between pb-3 border-b border-zinc-200">
                  <span className="text-xs font-mono text-zinc-600 font-semibold">METHODOLOGY STACK</span>
                  <div className="p-1.5 rounded-lg bg-zinc-100 border border-zinc-300 text-black">
                    {getStepIcon(currentStep.iconName)}
                  </div>
                </div>

                <div>
                  <div className="text-xs font-bold text-black mb-2">
                    Primary Tools & Frameworks
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {currentStep.tools.map((tool) => (
                      <span
                        key={tool}
                        className="px-2.5 py-1 rounded-md text-xs font-mono bg-white border border-zinc-300 text-zinc-950 font-semibold"
                      >
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="pt-3 border-t border-zinc-200 flex items-center justify-between text-xs">
                  <span className="text-zinc-600 font-mono font-medium">Next Phase</span>
                  <button
                    onClick={() => setSelectedStep((prev) => (prev + 1) % AI_BUILD_PROCESS.length)}
                    className="inline-flex items-center gap-1 font-bold text-black hover:underline cursor-pointer"
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
