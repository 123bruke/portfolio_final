import { useState } from 'react';
import { 
  Cpu, 
  Database, 
  ArrowDown, 
  Layers, 
  ShieldCheck, 
  RefreshCw, 
  Radio, 
  CheckCheck, 
  Sliders 
} from 'lucide-react';
import { Project } from '../types';

interface ProjectDiagramProps {
  project: Project;
}

export default function ProjectDiagram({ project }: ProjectDiagramProps) {
  const [activeStep, setActiveStep] = useState<number>(0);

  if (project.id === 'omegaclaw') {
    return (
      <div className="p-4 rounded-xl bg-white dark:bg-black/80 border border-black/15 dark:border-emerald-500/30 font-mono text-xs shadow-lg">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/10 dark:border-emerald-500/20 text-[11px]">
          <span className="flex items-center gap-1.5 text-emerald-800 dark:text-emerald-400 font-bold">
            <Cpu className="w-3.5 h-3.5" />
            LANGGRAPH MULTI-AGENT TOPOLOGY
          </span>
          <span className="text-emerald-900 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/10 px-2 py-0.5 rounded border border-emerald-300 dark:border-emerald-500/30 font-bold">
            Local Ollama Engine
          </span>
        </div>

        {/* Multi-agent visual diagram */}
        <div className="space-y-2">
          {/* User Query */}
          <div className="p-2 rounded bg-slate-50 dark:bg-black/60 border border-black/10 dark:border-emerald-500/20 text-center text-zinc-950 dark:text-slate-200 font-semibold">
            User Query Ingestion
          </div>
          <div className="flex justify-center">
            <ArrowDown className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          </div>

          {/* Supervisor Agent */}
          <div className="p-2.5 rounded bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/50 text-center">
            <div className="text-emerald-950 dark:text-emerald-300 font-bold text-xs flex items-center justify-center gap-1.5">
              <Cpu className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              Supervisor Agent (Planner & Router)
            </div>
            <div className="text-[10px] text-zinc-600 dark:text-slate-300 mt-0.5">Decomposes goals & coordinates specialized workers</div>
          </div>

          <div className="flex justify-center">
            <ArrowDown className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          </div>

          {/* Specialized Agents Row */}
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2 rounded bg-slate-50 dark:bg-black/60 border border-black/10 dark:border-emerald-500/20 text-center">
              <div className="text-emerald-800 dark:text-emerald-400 font-bold text-[11px]">Research</div>
              <div className="text-[9px] text-zinc-500 dark:text-slate-400">Search & Gather</div>
            </div>
            <div className="p-2 rounded bg-slate-50 dark:bg-black/60 border border-black/10 dark:border-emerald-500/20 text-center">
              <div className="text-zinc-950 dark:text-white font-bold text-[11px]">Writer</div>
              <div className="text-[9px] text-zinc-500 dark:text-slate-400">Synthesis</div>
            </div>
            <div className="p-2 rounded bg-slate-50 dark:bg-black/60 border border-black/10 dark:border-emerald-500/20 text-center">
              <div className="text-emerald-800 dark:text-emerald-300 font-bold text-[11px]">Reviewer</div>
              <div className="text-[9px] text-zinc-500 dark:text-slate-400">Audit & Verify</div>
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowDown className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          </div>

          {/* ChromaDB Vector Memory */}
          <div className="p-2 rounded bg-slate-50 dark:bg-black/60 border border-black/10 dark:border-emerald-500/30 flex items-center justify-between px-3">
            <div className="flex items-center gap-2">
              <Database className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span className="text-zinc-950 dark:text-slate-200 font-semibold text-[11px]">ChromaDB Vector & Long-Term Memory</span>
            </div>
            <span className="text-[10px] text-emerald-800 dark:text-emerald-400 font-bold">Semantic Recall</span>
          </div>

          <div className="flex justify-center">
            <ArrowDown className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
          </div>

          {/* Final Synthesized Response */}
          <div className="p-2 rounded bg-emerald-100 dark:bg-emerald-950/50 border border-emerald-400 dark:border-emerald-500/50 text-center text-emerald-950 dark:text-emerald-300 font-extrabold">
            Audited & Verified Final Response (FastAPI REST / Swagger)
          </div>
        </div>
      </div>
    );
  }

  if (project.id === 'icog-vendor-agent') {
    const steps = [
      { name: 'REASON', desc: 'Assess vendor policy constraints & risk category' },
      { name: 'ACT', desc: 'Query ChromaDB policy rules, tool invocations & safe math' },
      { name: 'OBSERVE', desc: 'Inspect tool outputs & evaluate evidence freshness' },
      { name: 'VALIDATE', desc: 'Run anti-injection protection & conflict detection' },
      { name: 'UPDATE STATE', desc: 'Record deterministic audit trail in SQLite/SQLAlchemy' },
      { name: 'DECISION', desc: 'Approve, Reject, or Escalate with justification' }
    ];

    return (
      <div className="p-4 rounded-xl bg-white dark:bg-black/80 border border-black/15 dark:border-emerald-500/30 font-mono text-xs shadow-lg">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/10 dark:border-emerald-500/20 text-[11px]">
          <span className="flex items-center gap-1.5 text-emerald-800 dark:text-emerald-400 font-bold">
            <RefreshCw className="w-3.5 h-3.5" />
            LANGGRAPH ReAct STATEGRAPH LOOP
          </span>
          <span className="text-emerald-950 dark:text-emerald-400 font-bold bg-emerald-100 dark:bg-emerald-500/20 px-2 py-0.5 rounded border border-emerald-300 dark:border-emerald-500/40">
            47 / 47 Tests 100% Passing
          </span>
        </div>

        {/* Interactive Step Selector */}
        <div className="grid grid-cols-3 sm:grid-cols-6 gap-1.5 mb-3">
          {steps.map((step, idx) => (
            <button
              key={step.name}
              onClick={() => setActiveStep(idx)}
              className={`p-1.5 rounded-lg text-[10px] font-bold transition-colors cursor-pointer ${
                activeStep === idx
                  ? 'btn-3d-gradient text-emerald-950 dark:text-white shadow-sm'
                  : 'btn-3d-transparent text-zinc-800 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400'
              }`}
            >
              {step.name}
            </button>
          ))}
        </div>

        {/* Selected Step Description */}
        <div className="p-3 rounded-xl bg-slate-50 dark:bg-black/60 border border-black/10 dark:border-emerald-500/30 text-left">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold text-emerald-900 dark:text-emerald-400">
              Phase {activeStep + 1}: {steps[activeStep].name}
            </span>
            <span className="text-[10px] text-zinc-500 dark:text-slate-400 font-mono">
              StateGraph Node
            </span>
          </div>
          <p className="text-xs text-zinc-700 dark:text-slate-200 font-sans font-normal">
            {steps[activeStep].desc}
          </p>
        </div>

        {/* Core Security & Test Callout */}
        <div className="mt-3 flex items-center justify-between text-[11px] text-zinc-700 dark:text-slate-300 pt-2 border-t border-black/10 dark:border-emerald-500/15">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            Prompt injection guardrails enabled
          </span>
          <span className="text-emerald-800 dark:text-emerald-400 font-bold">SSE Dashboard</span>
        </div>
      </div>
    );
  }

  if (project.id === 'biocypher-research') {
    return (
      <div className="p-4 rounded-xl bg-white dark:bg-black/80 border border-black/15 dark:border-emerald-500/30 font-mono text-xs shadow-lg">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/10 dark:border-emerald-500/20 text-[11px]">
          <span className="flex items-center gap-1.5 text-emerald-800 dark:text-emerald-400 font-bold">
            <Layers className="w-3.5 h-3.5" />
            BIOMEDICAL KNOWLEDGE GRAPH ONTOLOGY
          </span>
          <span className="text-emerald-950 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/15 px-2 py-0.5 rounded border border-emerald-300 dark:border-emerald-500/30 font-bold">
            BioCypher + Neo4j
          </span>
        </div>

        {/* Biomedical Knowledge Representation Flow */}
        <div className="space-y-2.5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center">
            <div className="p-2.5 rounded bg-slate-50 dark:bg-black/60 border border-black/10 dark:border-emerald-500/20">
              <div className="text-xs font-bold text-zinc-950 dark:text-white">Gene / Protein</div>
              <div className="text-[10px] text-zinc-500 dark:text-slate-400">UniProt / Ensembl</div>
            </div>
            <div className="p-2.5 rounded bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/40">
              <div className="text-xs font-bold text-emerald-950 dark:text-emerald-300">BioCypher Adapter</div>
              <div className="text-[10px] text-zinc-600 dark:text-slate-300">Ontology Alignment</div>
            </div>
            <div className="p-2.5 rounded bg-slate-50 dark:bg-black/60 border border-black/10 dark:border-emerald-500/20">
              <div className="text-xs font-bold text-zinc-950 dark:text-white">Disease / Drug</div>
              <div className="text-[10px] text-zinc-500 dark:text-slate-400">MONDO / ChEMBL</div>
            </div>
          </div>

          <div className="p-2.5 rounded bg-slate-50 dark:bg-black/60 border border-black/10 dark:border-emerald-500/20 flex items-center justify-between text-zinc-800 dark:text-slate-200">
            <span className="text-[11px] font-semibold">KGX Pipeline (Knowledge Graph Exchange)</span>
            <span className="text-[10px] text-emerald-800 dark:text-emerald-400 font-bold">Graph Relationships</span>
          </div>

          <div className="p-2 rounded bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/30 text-center text-emerald-950 dark:text-emerald-300 text-xs font-bold">
            Neo4j Multi-Hop Graph Traversal & Biological Discovery
          </div>
        </div>
      </div>
    );
  }

  if (project.id === '3d-chemistry-lab') {
    return (
      <div className="p-4 rounded-xl bg-white dark:bg-black/80 border border-black/15 dark:border-emerald-500/30 font-mono text-xs shadow-lg">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/10 dark:border-emerald-500/20 text-[11px]">
          <span className="flex items-center gap-1.5 text-emerald-800 dark:text-emerald-400 font-bold">
            <Sliders className="w-3.5 h-3.5" />
            3D APPARATUS & EXPERIMENT SIMULATOR
          </span>
          <span className="text-emerald-950 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/15 px-2 py-0.5 rounded border border-emerald-300 dark:border-emerald-500/30 font-bold">
            Three.js • R3F • Zustand
          </span>
        </div>

        {/* 3D Lab Simulation Modules */}
        <div className="grid grid-cols-2 gap-2 text-left mb-2">
          <div className="p-2.5 rounded bg-slate-50 dark:bg-black/60 border border-black/10 dark:border-emerald-500/20">
            <div className="text-xs font-bold text-zinc-950 dark:text-white">Digital Balance</div>
            <div className="text-[10px] text-zinc-500 dark:text-slate-400">Real-time tare & mass calculation</div>
          </div>
          <div className="p-2.5 rounded bg-slate-50 dark:bg-black/60 border border-black/10 dark:border-emerald-500/20">
            <div className="text-xs font-bold text-zinc-950 dark:text-white">Liquid Transfer</div>
            <div className="text-[10px] text-zinc-500 dark:text-slate-400">Meniscus reading & displacement</div>
          </div>
          <div className="p-2.5 rounded bg-slate-50 dark:bg-black/60 border border-black/10 dark:border-emerald-500/20">
            <div className="text-xs font-bold text-zinc-950 dark:text-white">Density Validation</div>
            <div className="text-[10px] text-zinc-500 dark:text-slate-400">Deterministic physics logic</div>
          </div>
          <div className="p-2.5 rounded bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/40">
            <div className="text-xs font-bold text-emerald-950 dark:text-emerald-300">AI Lab Assistant</div>
            <div className="text-[10px] text-zinc-600 dark:text-slate-300">Google GenAI SDK guidance</div>
          </div>
        </div>

        <div className="text-[11px] text-zinc-700 dark:text-slate-300 pt-2 border-t border-black/10 dark:border-emerald-500/15 flex items-center justify-between">
          <span>State: Zustand store</span>
          <span className="text-emerald-800 dark:text-emerald-400 font-bold">Interactive 3D camera controls</span>
        </div>
      </div>
    );
  }

  if (project.id === 'chatflow-app') {
    return (
      <div className="p-4 rounded-xl bg-white dark:bg-black/80 border border-black/15 dark:border-emerald-500/30 font-mono text-xs shadow-lg">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-black/10 dark:border-emerald-500/20 text-[11px]">
          <span className="flex items-center gap-1.5 text-emerald-800 dark:text-emerald-400 font-bold">
            <Radio className="w-3.5 h-3.5" />
            FIRESTORE REAL-TIME SYNCHRONIZATION
          </span>
          <span className="text-emerald-950 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/15 px-2 py-0.5 rounded border border-emerald-300 dark:border-emerald-500/30 font-bold">
            Sub-second Listeners
          </span>
        </div>

        {/* Messaging Preview Card */}
        <div className="space-y-2 text-left">
          <div className="p-2 rounded bg-slate-50 dark:bg-black/60 border border-black/10 dark:border-emerald-500/20 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-600 dark:bg-emerald-400 animate-pulse" />
              <span className="text-xs text-zinc-950 dark:text-white font-semibold">Presence: Online / Last Seen Active</span>
            </div>
            <span className="text-[10px] text-zinc-500 dark:text-slate-400">WebSocket / Snapshot</span>
          </div>

          <div className="p-2 rounded bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/30 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-emerald-950 dark:text-emerald-300 font-bold text-xs">
              <CheckCheck className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Read Receipts & Unread Counters</span>
            </div>
            <span className="text-[10px] text-emerald-800 dark:text-emerald-400 font-bold">Optimistic UI</span>
          </div>

          <div className="p-2 rounded bg-slate-50 dark:bg-black/60 border border-black/10 dark:border-emerald-500/20 text-[11px] text-zinc-700 dark:text-slate-300 flex items-center justify-between">
            <span>Security: Firestore Rules + Role Isolation</span>
            <span className="text-emerald-800 dark:text-emerald-400 font-bold">Hardened</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
