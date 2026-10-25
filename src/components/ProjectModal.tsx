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
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm overflow-y-auto"
      onClick={onClose}
    >
      <div
        id="project-detail-modal-content"
        className="relative w-full max-w-3xl rounded-2xl bg-white border border-zinc-300 p-6 sm:p-8 shadow-2xl my-8 overflow-hidden text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Header */}
        <div className="flex items-start justify-between gap-4 pb-4 border-b border-zinc-200">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-0.5 rounded-md bg-emerald-50 border border-emerald-300 text-xs font-mono text-emerald-800 font-bold mb-2">
              <Cpu className="w-3.5 h-3.5 text-emerald-600" />
              <span>{project.category}</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-black text-black tracking-tight">
              {project.title}
            </h2>
          </div>

          <button
            onClick={onClose}
            aria-label="Close modal"
            className="btn-secondary p-2 rounded-xl shrink-0 cursor-pointer text-black hover:text-black"
          >
            <X className="w-4 h-4 text-black" />
          </button>
        </div>

        {/* Modal Body */}
        <div className="py-5 space-y-5 max-h-[70vh] overflow-y-auto pr-1">
          {/* Summary / Description */}
          <div>
            <h3 className="text-xs font-mono uppercase text-black font-extrabold tracking-wider mb-1.5">
              System Overview
            </h3>
            <p className="text-sm text-zinc-900 leading-relaxed font-normal">
              {project.longDescription || project.description}
            </p>
          </div>

          {/* Test Metric Highlight if available */}
          {project.testMetric && (
            <div className="p-3.5 rounded-xl bg-emerald-50/70 border border-emerald-300 flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
                <span className="text-xs sm:text-sm font-bold text-emerald-950">
                  {project.testMetric}
                </span>
              </div>
              <span className="text-[10px] font-mono uppercase text-white bg-emerald-600 px-2.5 py-0.5 rounded font-bold">
                Verified
              </span>
            </div>
          )}

          {/* Architectural Diagram */}
          <div>
            <h3 className="text-xs font-mono uppercase text-black font-extrabold tracking-wider mb-2">
              System Architecture & Flow
            </h3>
            <ProjectDiagram project={project} />
          </div>

          {/* Key Engineering Features */}
          <div>
            <h3 className="text-xs font-mono uppercase text-black font-extrabold tracking-wider mb-2">
              Engineering Features & Capabilities
            </h3>
            <div className="space-y-1.5">
              {project.features.map((feature, idx) => (
                <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-zinc-900 font-normal">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                  <span>{feature}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Technologies Used */}
          <div>
            <h3 className="text-xs font-mono uppercase text-black font-extrabold tracking-wider mb-2">
              Technologies & Frameworks
            </h3>
            <div className="flex flex-wrap gap-1.5">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-1 rounded-md text-xs font-mono bg-zinc-100 border border-zinc-300 text-black font-bold"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </div>

        {/* Modal Footer / External Actions */}
        <div className="pt-4 border-t border-zinc-200 flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2.5">
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-primary"
            >
              <Github className="w-4 h-4 text-white" />
              <span>Explore GitHub Repository</span>
              <ExternalLink className="w-3.5 h-3.5 text-white" />
            </a>

            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary"
              >
                <span>Live Application</span>
                <ExternalLink className="w-3.5 h-3.5 text-black" />
              </a>
            )}
          </div>

          <button
            onClick={onClose}
            className="btn-secondary"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
}
