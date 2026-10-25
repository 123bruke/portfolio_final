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
      <div className="p-4 rounded-xl bg-white border border-zinc-300 font-mono text-xs shadow-sm">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-200 text-[11px]">
          <span className="flex items-center gap-1.5 text-black font-bold">
            <Cpu className="w-3.5 h-3.5 text-black" />
            LANGGRAPH MULTI-AGENT TOPOLOGY
          </span>
          <span className="text-black bg-zinc-100 px-2 py-0.5 rounded border border-zinc-300 font-bold">
            Local Ollama Engine
          </span>
        </div>

        {/* Multi-agent visual diagram */}
        <div className="space-y-2">
          {/* User Query */}
          <div className="p-2 rounded bg-zinc-50 border border-zinc-300 text-center text-black font-bold">
            User Query Ingestion
          </div>
          <div className="flex justify-center">
            <ArrowDown className="w-3.5 h-3.5 text-black" />
          </div>

          {/* Supervisor Agent */}
          <div className="p-2.5 rounded bg-black text-white border border-black text-center shadow-xs">
            <div className="font-bold text-xs flex items-center justify-center gap-1.5 text-white">
              <Cpu className="w-3.5 h-3.5 text-white" />
              Supervisor Agent (Planner & Router)
            </div>
            <div className="text-[10px] text-zinc-300 mt-0.5">Decomposes goals & coordinates specialized workers</div>
          </div>

          <div className="flex justify-center">
            <ArrowDown className="w-3.5 h-3.5 text-black" />
          </div>

          {/* Specialized Agents Row */}
          <div className="grid grid-cols-3 gap-2">
            <div className="p-2 rounded bg-zinc-50 border border-zinc-300 text-center">
              <div className="text-black font-bold text-[11px]">Research</div>
              <div className="text-[9px] text-zinc-600 font-semibold">Search & Gather</div>
            </div>
            <div className="p-2 rounded bg-zinc-50 border border-zinc-300 text-center">
              <div className="text-black font-bold text-[11px]">Writer</div>
              <div className="text-[9px] text-zinc-600 font-semibold">Synthesis</div>
            </div>
            <div className="p-2 rounded bg-zinc-50 border border-zinc-300 text-center">
              <div className="text-black font-bold text-[11px]">Reviewer</div>
              <div className="text-[9px] text-zinc-600 font-semibold">Audit & Verify</div>
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowDown className="w-3.5 h-3.5 text-black" />
          </div>

          {/* ChromaDB Vector Memory */}
          <div className="p-2 rounded bg-zinc-50 border border-zinc-300 flex items-center justify-between px-3">
            <div className="flex items-center gap-2">
              <Database className="w-3.5 h-3.5 text-black" />
              <span className="text-black font-bold text-[11px]">ChromaDB Vector & Long-Term Memory</span>
            </div>
            <span className="text-[10px] text-black font-bold bg-zinc-100 px-1.5 py-0.5 rounded border border-zinc-300">Semantic Recall</span>
          </div>

          <div className="flex justify-center">
            <ArrowDown className="w-3.5 h-3.5 text-black" />
          </div>

          {/* Final Synthesized Response */}
          <div className="p-2.5 rounded bg-zinc-100 border border-zinc-400 text-center text-black font-extrabold">
            Audited & Verified Final Response (FastAPI REST / Swagger)
          </div>
        </div>
      </div>
    );
  }

  if (project.id === 'visionrag') {
    return (
      <div className="p-4 rounded-xl bg-white border border-zinc-300 font-mono text-xs shadow-sm">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-200 text-[11px]">
          <span className="flex items-center gap-1.5 text-black font-bold">
            <Layers className="w-3.5 h-3.5 text-black" />
            MULTIMODAL VISION-LANGUAGE RAG PIPELINE
          </span>
          <span className="text-black font-bold bg-zinc-100 px-2 py-0.5 rounded border border-zinc-300">
            ColPali + Vision LLMs
          </span>
        </div>

        {/* Multimodal Architecture Visual Flow */}
        <div className="space-y-2">
          {/* Inputs Row */}
          <div className="grid grid-cols-3 gap-2 text-center">
            <div className="p-2 rounded bg-zinc-50 border border-zinc-300">
              <div className="text-[11px] font-bold text-black">Technical PDFs</div>
              <div className="text-[9px] text-zinc-600 font-semibold">Multi-column & Tables</div>
            </div>
            <div className="p-2 rounded bg-zinc-50 border border-zinc-300">
              <div className="text-[11px] font-bold text-black">Diagrams & Images</div>
              <div className="text-[9px] text-zinc-600 font-semibold">Schematics & Charts</div>
            </div>
            <div className="p-2 rounded bg-zinc-50 border border-zinc-300">
              <div className="text-[11px] font-bold text-black">Live Camera / Video</div>
              <div className="text-[9px] text-zinc-600 font-semibold">Real-time Frames</div>
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowDown className="w-3.5 h-3.5 text-black" />
          </div>

          {/* ColPali Segmentation */}
          <div className="p-2.5 rounded bg-black text-white border border-black text-center shadow-xs">
            <div className="font-bold text-xs flex items-center justify-center gap-1.5 text-white">
              <Cpu className="w-3.5 h-3.5 text-white" />
              ColPali Visual Segmentation & Vector Embeddings
            </div>
            <div className="text-[10px] text-zinc-300 mt-0.5">Generates cross-modal embeddings with bounding-box coordinate tracking</div>
          </div>

          <div className="flex justify-center">
            <ArrowDown className="w-3.5 h-3.5 text-black" />
          </div>

          {/* Vector Retrieval & Visual Grounding */}
          <div className="grid grid-cols-2 gap-2">
            <div className="p-2 rounded bg-zinc-50 border border-zinc-300 flex items-center gap-2">
              <Database className="w-3.5 h-3.5 text-black shrink-0" />
              <div>
                <div className="text-[10px] font-bold text-black">ChromaDB Store</div>
                <div className="text-[9px] text-zinc-600 font-semibold">Top-K Multimodal Recall</div>
              </div>
            </div>
            <div className="p-2 rounded bg-zinc-100 border border-zinc-300 flex items-center gap-2">
              <ShieldCheck className="w-3.5 h-3.5 text-black shrink-0" />
              <div>
                <div className="text-[10px] font-bold text-black">Visual Grounding</div>
                <div className="text-[9px] text-zinc-700 font-bold">Citation Pills (96% Match)</div>
              </div>
            </div>
          </div>

          <div className="flex justify-center">
            <ArrowDown className="w-3.5 h-3.5 text-black" />
          </div>

          {/* Synthesized Response */}
          <div className="p-2.5 rounded bg-zinc-100 border border-zinc-400 text-center text-black font-extrabold text-xs">
            Vision LLM Grounded Answer + Real-Time Voice Synthesis (TTS)
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
      <div className="p-4 rounded-xl bg-white border border-zinc-300 font-mono text-xs shadow-sm">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-200 text-[11px]">
          <span className="flex items-center gap-1.5 text-black font-bold">
            <RefreshCw className="w-3.5 h-3.5 text-black" />
            LANGGRAPH ReAct STATEGRAPH LOOP
          </span>
          <span className="text-black font-bold bg-zinc-100 px-2 py-0.5 rounded border border-zinc-300">
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
                  ? 'bg-black text-white border border-black shadow-xs'
                  : 'bg-white text-zinc-800 border border-zinc-300 hover:bg-zinc-100'
              }`}
            >
              {step.name}
            </button>
          ))}
        </div>

        {/* Selected Step Description */}
        <div className="p-3 rounded-xl bg-zinc-50 border border-zinc-300 text-left">
          <div className="flex items-center justify-between mb-1">
            <span className="text-xs font-bold text-black">
              Phase {activeStep + 1}: {steps[activeStep].name}
            </span>
            <span className="text-[10px] text-zinc-600 font-mono font-semibold">
              StateGraph Node
            </span>
          </div>
          <p className="text-xs text-zinc-800 font-sans font-medium">
            {steps[activeStep].desc}
          </p>
        </div>

        {/* Core Security & Test Callout */}
        <div className="mt-3 flex items-center justify-between text-[11px] text-zinc-800 pt-2 border-t border-zinc-200 font-medium">
          <span className="flex items-center gap-1">
            <ShieldCheck className="w-3.5 h-3.5 text-black" />
            Prompt injection guardrails enabled
          </span>
          <span className="text-black font-bold">SSE Dashboard</span>
        </div>
      </div>
    );
  }

  if (project.id === 'biocypher-research') {
    return (
      <div className="p-4 rounded-xl bg-white border border-zinc-300 font-mono text-xs shadow-sm">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-200 text-[11px]">
          <span className="flex items-center gap-1.5 text-black font-bold">
            <Layers className="w-3.5 h-3.5 text-black" />
            BIOMEDICAL KNOWLEDGE GRAPH ONTOLOGY
          </span>
          <span className="text-black bg-zinc-100 px-2 py-0.5 rounded border border-zinc-300 font-bold">
            BioCypher + Neo4j
          </span>
        </div>

        {/* Biomedical Knowledge Representation Flow */}
        <div className="space-y-2.5">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-center">
            <div className="p-2.5 rounded bg-zinc-50 border border-zinc-300">
              <div className="text-xs font-bold text-black">Gene / Protein</div>
              <div className="text-[10px] text-zinc-600 font-semibold">UniProt / Ensembl</div>
            </div>
            <div className="p-2.5 rounded bg-black text-white border border-black shadow-xs">
              <div className="text-xs font-bold text-white">BioCypher Adapter</div>
              <div className="text-[10px] text-zinc-300">Ontology Alignment</div>
            </div>
            <div className="p-2.5 rounded bg-zinc-50 border border-zinc-300">
              <div className="text-xs font-bold text-black">Disease / Drug</div>
              <div className="text-[10px] text-zinc-600 font-semibold">MONDO / ChEMBL</div>
            </div>
          </div>

          <div className="p-2.5 rounded bg-zinc-50 border border-zinc-300 flex items-center justify-between text-zinc-900">
            <span className="text-[11px] font-bold">KGX Pipeline (Knowledge Graph Exchange)</span>
            <span className="text-[10px] text-black font-bold bg-zinc-100 px-1.5 py-0.5 rounded border border-zinc-300">Graph Relationships</span>
          </div>

          <div className="p-2.5 rounded bg-zinc-100 border border-zinc-400 text-center text-black text-xs font-extrabold">
            Neo4j Multi-Hop Graph Traversal & Biological Discovery
          </div>
        </div>
      </div>
    );
  }

  if (project.id === '3d-chemistry-lab') {
    return (
      <div className="p-4 rounded-xl bg-white border border-zinc-300 font-mono text-xs shadow-sm">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-200 text-[11px]">
          <span className="flex items-center gap-1.5 text-black font-bold">
            <Sliders className="w-3.5 h-3.5 text-black" />
            3D APPARATUS & EXPERIMENT SIMULATOR
          </span>
          <span className="text-black bg-zinc-100 px-2 py-0.5 rounded border border-zinc-300 font-bold">
            Three.js • R3F • Zustand
          </span>
        </div>

        {/* 3D Lab Simulation Modules */}
        <div className="grid grid-cols-2 gap-2 text-left mb-2">
          <div className="p-2.5 rounded bg-zinc-50 border border-zinc-300">
            <div className="text-xs font-bold text-black">Digital Balance</div>
            <div className="text-[10px] text-zinc-600 font-semibold">Real-time tare & mass calculation</div>
          </div>
          <div className="p-2.5 rounded bg-zinc-50 border border-zinc-300">
            <div className="text-xs font-bold text-black">Liquid Transfer</div>
            <div className="text-[10px] text-zinc-600 font-semibold">Meniscus reading & displacement</div>
          </div>
          <div className="p-2.5 rounded bg-zinc-50 border border-zinc-300">
            <div className="text-xs font-bold text-black">Density Validation</div>
            <div className="text-[10px] text-zinc-600 font-semibold">Deterministic physics logic</div>
          </div>
          <div className="p-2.5 rounded bg-black text-white border border-black shadow-xs">
            <div className="text-xs font-bold text-white">AI Lab Assistant</div>
            <div className="text-[10px] text-zinc-300">Google GenAI SDK guidance</div>
          </div>
        </div>

        <div className="text-[11px] text-zinc-800 pt-2 border-t border-zinc-200 flex items-center justify-between font-medium">
          <span>State: Zustand store</span>
          <span className="text-black font-bold">Interactive 3D camera controls</span>
        </div>
      </div>
    );
  }

  if (project.id === 'chatflow-app') {
    return (
      <div className="p-4 rounded-xl bg-white border border-zinc-300 font-mono text-xs shadow-sm">
        <div className="flex items-center justify-between pb-3 mb-3 border-b border-zinc-200 text-[11px]">
          <span className="flex items-center gap-1.5 text-black font-bold">
            <Radio className="w-3.5 h-3.5 text-black" />
            FIRESTORE REAL-TIME SYNCHRONIZATION
          </span>
          <span className="text-black bg-zinc-100 px-2 py-0.5 rounded border border-zinc-300 font-bold">
            Sub-second Listeners
          </span>
        </div>

        {/* Messaging Preview Card */}
        <div className="space-y-2 text-left">
          <div className="p-2 rounded bg-zinc-50 border border-zinc-300 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-black animate-pulse" />
              <span className="text-xs text-black font-bold">Presence: Online / Last Seen Active</span>
            </div>
            <span className="text-[10px] text-zinc-600 font-semibold">WebSocket / Snapshot</span>
          </div>

          <div className="p-2 rounded bg-zinc-100 border border-zinc-300 flex items-center justify-between">
            <div className="flex items-center gap-1.5 text-black font-bold text-xs">
              <CheckCheck className="w-3.5 h-3.5 text-black" />
              <span>Read Receipts & Unread Counters</span>
            </div>
            <span className="text-[10px] text-black font-bold bg-white px-1.5 py-0.5 rounded border border-zinc-300">Optimistic UI</span>
          </div>

          <div className="p-2 rounded bg-zinc-50 border border-zinc-300 text-[11px] text-zinc-800 flex items-center justify-between">
            <span>Security: Firestore Rules + Role Isolation</span>
            <span className="text-black font-bold">Hardened</span>
          </div>
        </div>
      </div>
    );
  }

  return null;
}
