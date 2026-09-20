import { useEffect } from 'react';
import { 
  X, 
  Github, 
  ExternalLink, 
  Cpu, 
  CheckCircle2, 
  ShieldCheck 
} from 'lucide-react';
import { Project } from '../types';
import ProjectDiagram from './ProjectDiagram';

interface ProjectModalProps {
  project: Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (project) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [project, onClose]);

  if (!project) return null;

  return (
    <div
      id="project-detail-modal-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="project-detail-modal-content"
        className="relative w-full max-w-3xl rounded-2xl bg-white dark:bg-zinc-950 border border-black/15 dark:border-emerald-500/40 p-6 sm:p-8 shadow-2xl my-8 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top accent highlight */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-emerald-300 to-white" />

        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 pb-5 border-b border-black/10 dark:border-white/10">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-md bg-emerald-100 dark:bg-emerald-500/10 border border-emerald-300 dark:border-emerald-500/30 text-xs font-mono text-emerald-800 dark:text-emerald-400 font-bold mb-2">
              <Cpu className="w-3.5 h-3.5" />
              <span>{project.category}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="btn-3d-transparent p-2 rounded-xl text-zinc-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 shrink-0 cursor-pointer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="py-6 space-y-6 max-h-[70vh] overflow-y-auto pr-1">
          {/* Summary / Description */}
          <div>
            <h3 className="text-xs font-mono uppercase text-emerald-800 dark:text-emerald-400 font-bold tracking-wider mb-2">
              System Overview
            </h3>
            <p className="text-sm text-zinc-700 dark:text-slate-200 leading-relaxed font-normal">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Test Metric Highlight if available */}
          {project.testMetric && (
            <div className="p-3.5 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/40 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-emerald-900 dark:text-emerald-300">
                  {project.testMetric}
                </span>
              </div>
              <span className="text-[10px] font-mono uppercase text-emerald-800 dark:text-emerald-400 px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-900/40 font-bold">
                Verified
              </span>
            </div>
          )}

          {/* Architectural Diagram */}
          <div>
            <h3 className="text-xs font-mono uppercase text-emerald-800 dark:text-emerald-400 font-bold tracking-wider mb-2">
              System Architecture & Flow
            </h3>
            <ProjectDiagram project={project} />
          </div>

          {/* Key Engineering Features */}
          <div>
            <h3 className="text-xs font-mono uppercase text-emerald-800 dark:text-emerald-400 font-bold tracking-wider mb-2">
              Engineering Features & Capabilities
            </h3>
            <div className="space-y-2">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-700 dark:text-slate-300 font-normal">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-xs font-mono uppercase text-emerald-800 dark:text-emerald-400 font-bold tracking-wider mb-2">
              Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1 rounded-md text-xs font-mono bg-white dark:bg-black/60 border border-black/15 dark:border-emerald-500/30 text-zinc-800 dark:text-slate-200 font-semibold shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer / External Actions */}
        <div className="pt-5 border-t border-black/10 dark:border-white/10 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-3">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-3d-gradient inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-emerald-950 dark:text-white hover:text-white shadow-md transition-all cursor-pointer"
            >
              <Github className="w-4 h-4" />
              <span>Explore GitHub Repository</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d-transparent inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-semibold text-zinc-950 dark:text-slate-100 hover:text-emerald-600 dark:hover:text-emerald-300 transition-all"
              >
                <span>Live Application</span>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="btn-3d-transparent px-4 py-2 rounded-xl text-xs font-semibold text-zinc-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-emerald-400 transition-colors cursor-pointer"
          >
            Close Window
          </button>
        </div>

      </div>
    </div>
  );
}
