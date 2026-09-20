import { useState } from 'react';
import { 
  Github, 
  ExternalLink, 
  Terminal, 
  ChevronRight, 
  Maximize2, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  ArrowUpRight 
} from 'lucide-react';
import { FEATURED_PROJECTS, MORE_PROJECTS } from '../data/projects';
import { Project, ProjectCategory } from '../types';
import ProjectDiagram from './ProjectDiagram';
import SectionBorderFrame from './SectionBorderFrame';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function FeaturedProjects({ onSelectProject }: FeaturedProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectCategory>('All');
  const [showMore, setShowMore] = useState<boolean>(false);

  const filters: ProjectCategory[] = [
    'All',
    'AI Agents',
    'AI / ML',
    'RAG',
    'Full-Stack',
    'Computer Vision',
    '3D / Interactive',
    'Research',
    'Backend'
  ];

  const filteredFeatured = FEATURED_PROJECTS.filter((project) => {
    if (activeFilter === 'All') return true;
    return (
      project.category === activeFilter ||
      project.secondaryCategories.includes(activeFilter)
    );
  });

  const filteredMore = MORE_PROJECTS.filter((project) => {
    if (activeFilter === 'All') return true;
    return (
      project.category === activeFilter ||
      project.secondaryCategories.includes(activeFilter)
    );
  });

  return (
    <section id="projects" className="py-12 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">
        <SectionBorderFrame>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/40 text-xs font-mono text-emerald-800 dark:text-cyan-300 font-bold mb-3 shadow-[0_0_10px_rgba(52,211,153,0.2)]">
                <Terminal className="w-3.5 h-3.5" />
                <span>04 // SYSTEM IMPLEMENTATIONS</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gradient-title">
                Featured Engineering Projects
              </h2>
              <p className="mt-2 text-sm sm:text-base text-zinc-800 dark:text-emerald-100/90 max-w-xl font-medium">
                Production-oriented AI agent systems, graph research, real-time web applications, and interactive 3D simulations.
              </p>
            </div>

            <a
              href="https://github.com/123bruke"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-emerald-700 dark:text-cyan-300 hover:underline font-bold self-start md:self-auto"
            >
              <span>Explore All Repositories on GitHub</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Filter Tabs with 3D Transparent Gradient buttons */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 scrollbar-none">
            {filters.map((filter) => {
              const count = FEATURED_PROJECTS.concat(MORE_PROJECTS).filter((p) =>
                filter === 'All'
                  ? true
                  : p.category === filter || p.secondaryCategories.includes(filter)
              ).length;

              return (
                <button
                  key={filter}
                  id={`filter-${filter.toLowerCase().replace(/[^a-z0-9]/g, '-')}`}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap cursor-pointer transition-all ${
                    activeFilter === filter
                      ? 'btn-3d-gradient text-emerald-950 dark:text-white shadow-md'
                      : 'btn-3d-transparent text-zinc-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400'
                  }`}
                >
                  <span>{filter}</span>
                  <span className="ml-1.5 text-[10px] opacity-80 font-mono">({count})</span>
                </button>
              );
            })}
          </div>

          {/* Featured Projects Grid with Continuous Gradient Card Borders */}
          <div className="space-y-10">
            {filteredFeatured.map((project, index) => (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="continuous-gradient-border rounded-2xl p-[1.5px] shadow-xl group transition-all duration-300 hover:scale-[1.008]"
              >
                <div className="continuous-gradient-spin-layer absolute -inset-[120%] pointer-events-none" />

                <div className="relative z-10 rounded-[calc(1rem-1.5px)] bg-white/95 dark:bg-black/90 backdrop-blur-xl p-6 sm:p-8">
                  <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                    
                    {/* Left side: Project Details & Features */}
                    <div className="lg:col-span-6 flex flex-col justify-between h-full">
                      <div>
                        {/* Category & Project Index */}
                        <div className="flex items-center gap-2.5 mb-3">
                          <span className="text-xs font-mono text-emerald-700 dark:text-cyan-300 font-bold">
                            {String(index + 1).padStart(2, '0')}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                          <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/40 text-[11px] font-mono text-emerald-800 dark:text-cyan-300 font-bold">
                            {project.category}
                          </span>
                          {project.secondaryCategories.slice(0, 1).map((sec) => (
                            <span
                              key={sec}
                              className="text-[11px] font-mono text-zinc-800 dark:text-slate-200 px-2 py-0.5 rounded bg-slate-100 dark:bg-black/40 border border-black/15 dark:border-emerald-500/30 font-semibold"
                            >
                              {sec}
                            </span>
                          ))}
                        </div>

                        {/* Title with Gradient Accent */}
                        <h3 className="text-xl sm:text-2xl font-extrabold text-zinc-950 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-cyan-300 transition-colors mb-3">
                          {project.title}
                        </h3>

                        {/* Description */}
                        <p className="text-xs sm:text-sm text-zinc-700 dark:text-slate-200 leading-relaxed mb-4 font-normal">
                          {project.description}
                        </p>

                        {/* Test metric callout if present */}
                        {project.testMetric && (
                          <div className="mb-4 p-2.5 rounded-lg bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/40 flex items-center gap-2 text-xs text-emerald-800 dark:text-cyan-300 font-semibold shadow-sm">
                            <ShieldCheck className="w-4 h-4 text-emerald-600 dark:text-cyan-300 shrink-0" />
                            <span>{project.testMetric}</span>
                          </div>
                        )}

                        {/* Key Engineering Features Bullet Points */}
                        <div className="space-y-1.5 mb-6">
                          {project.features.slice(0, 3).map((feature, fIdx) => (
                            <div key={fIdx} className="flex items-start gap-2 text-xs text-zinc-700 dark:text-slate-200 font-normal">
                              <ChevronRight className="w-3.5 h-3.5 text-emerald-600 dark:text-cyan-300 shrink-0 mt-0.5" />
                              <span>{feature}</span>
                            </div>
                          ))}
                        </div>

                        {/* Technologies Pills */}
                        <div className="flex flex-wrap gap-1.5 mb-6">
                          {project.technologies.map((tech) => (
                            <span
                              key={tech}
                              className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-white dark:bg-black/60 border border-black/15 dark:border-emerald-500/30 text-zinc-800 dark:text-slate-200 font-semibold shadow-sm"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Actions: 3D Transparent Gradient Buttons */}
                      <div className="pt-4 border-t border-black/10 dark:border-white/10 flex flex-wrap items-center gap-3">
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-3d-gradient inline-flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs font-bold text-emerald-950 dark:text-white hover:text-white transition-all shadow-md cursor-pointer"
                        >
                          <Github className="w-3.5 h-3.5 text-emerald-600 dark:text-cyan-300" />
                          <span>View GitHub</span>
                          <ArrowUpRight className="w-3 h-3 text-emerald-600 dark:text-cyan-300" />
                        </a>

                        <button
                          onClick={() => onSelectProject(project)}
                          className="btn-3d-transparent inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-zinc-950 dark:text-slate-100 hover:text-emerald-600 dark:hover:text-cyan-300 transition-all cursor-pointer shadow-sm"
                        >
                          <Maximize2 className="w-3.5 h-3.5 text-emerald-600 dark:text-cyan-300" />
                          <span>Architecture Details</span>
                        </button>

                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="btn-3d-transparent inline-flex items-center gap-1.5 px-3.5 py-2.5 rounded-xl text-xs font-semibold text-zinc-950 dark:text-slate-100 hover:text-emerald-600 dark:hover:text-cyan-300 transition-all"
                          >
                            <span>Live Demo</span>
                            <ExternalLink className="w-3.5 h-3.5 text-emerald-600 dark:text-cyan-300" />
                          </a>
                        )}
                      </div>
                    </div>

                    {/* Right side: Live Architecture Visual Diagram */}
                    <div className="lg:col-span-6 w-full">
                      <ProjectDiagram project={project} />
                    </div>

                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Expandable "More Projects" Section */}
          <div className="mt-14 pt-8 border-t border-black/10 dark:border-white/10">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-xl font-extrabold text-zinc-950 dark:text-white tracking-tight">
                  Additional Projects & Experiments
                </h3>
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-slate-300 mt-1 font-normal">
                  Computer vision models, campus AI tools, NLP utilities, and academic portals.
                </p>
              </div>

              <button
                onClick={() => setShowMore(!showMore)}
                className="btn-3d-transparent inline-flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold text-zinc-950 dark:text-slate-100 hover:text-emerald-600 dark:hover:text-cyan-300 transition-colors shadow-sm cursor-pointer"
              >
                <span>{showMore ? 'Collapse' : 'Expand All'}</span>
                {showMore ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>

            {showMore && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-2">
                {filteredMore.map((project) => (
                  <div
                    key={project.id}
                    className="glass-card rounded-xl p-5 hover:border-emerald-400/60 transition-all flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="text-[11px] font-mono text-emerald-800 dark:text-cyan-300 px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/30 font-bold">
                          {project.category}
                        </span>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-500 hover:text-emerald-600 dark:hover:text-cyan-300 p-1"
                          aria-label="GitHub repo"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </div>

                      <h4 className="text-base font-extrabold text-zinc-950 dark:text-white mb-2 tracking-tight">
                        {project.title}
                      </h4>

                      <p className="text-xs text-zinc-700 dark:text-slate-300 leading-relaxed mb-4 font-normal">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-white dark:bg-black/60 border border-black/15 dark:border-emerald-500/20 text-zinc-800 dark:text-slate-200 font-semibold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-black/10 dark:border-white/10 flex items-center justify-between">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="text-xs font-mono text-emerald-700 dark:text-cyan-300 hover:underline font-bold inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>Inspect Details</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-zinc-600 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-cyan-300 font-medium"
                      >
                        Source Code
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>
        </SectionBorderFrame>
      </div>
    </section>
  );
}
