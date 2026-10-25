import { useState, useMemo } from 'react';
import { 
  Github, 
  ExternalLink, 
  Terminal, 
  ChevronRight, 
  Maximize2, 
  ShieldCheck, 
  ChevronDown, 
  ChevronUp, 
  ArrowUpRight,
  Search,
  X
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
  const [searchQuery, setSearchQuery] = useState<string>('');
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

  // Combine and filter projects based on category and live search
  const filteredFeatured = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return FEATURED_PROJECTS.filter((project) => {
      const matchesCategory = activeFilter === 'All' ||
        project.category === activeFilter ||
        project.secondaryCategories.includes(activeFilter);
      if (!matchesCategory) return false;
      if (!q) return true;
      return (
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.technologies.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [activeFilter, searchQuery]);

  const filteredMore = useMemo(() => {
    const q = searchQuery.trim().toLowerCase();
    return MORE_PROJECTS.filter((project) => {
      const matchesCategory = activeFilter === 'All' ||
        project.category === activeFilter ||
        project.secondaryCategories.includes(activeFilter);
      if (!matchesCategory) return false;
      if (!q) return true;
      return (
        project.title.toLowerCase().includes(q) ||
        project.description.toLowerCase().includes(q) ||
        project.technologies.some((t) => t.toLowerCase().includes(q))
      );
    });
  }, [activeFilter, searchQuery]);

  return (
    <section id="projects" className="py-10 scroll-mt-24 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionBorderFrame>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-100 border border-zinc-300 text-xs font-mono text-black font-bold mb-3 shadow-2xs">
                <Terminal className="w-3.5 h-3.5 text-black" />
                <span>04 // SYSTEM IMPLEMENTATIONS</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-black">
                Featured Engineering Projects
              </h2>
              <p className="mt-2 text-sm sm:text-base text-zinc-700 max-w-xl font-normal">
                Autonomous AI agent workflows, multimodal vision RAG, biomedical knowledge graphs, and production systems.
              </p>
            </div>

            <a
              href="https://github.com/123bruke"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-mono text-black hover:underline font-bold self-start md:self-auto"
            >
              <span>Explore GitHub Repositories</span>
              <ArrowUpRight className="w-3.5 h-3.5 text-black" />
            </a>
          </div>

          {/* Interactive Live Search & Category Filter Toolbar */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
            {/* Category Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
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
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap cursor-pointer transition-all ${
                      activeFilter === filter
                        ? 'btn-primary'
                        : 'btn-secondary'
                    }`}
                  >
                    <span>{filter}</span>
                    <span className="ml-1.5 text-[10px] opacity-75 font-mono">({count})</span>
                  </button>
                );
              })}
            </div>

            {/* Instant Project Search Input */}
            <div className="relative min-w-[220px] sm:w-64">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Search projects by tech/title..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-1.5 text-xs rounded-xl bg-white border border-zinc-300 text-zinc-950 placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-black focus:border-black"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-black"
                >
                  <X className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>

          {/* Featured Projects List */}
          <div className="space-y-6 sm:space-y-8">
            {filteredFeatured.map((project, index) => (
              <div
                key={project.id}
                id={`project-card-${project.id}`}
                className="bento-card p-6 sm:p-8"
              >
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  
                  {/* Left Column: Project Details & Actions */}
                  <div className="lg:col-span-6 flex flex-col justify-between h-full">
                    <div>
                      {/* Category & Index Meta */}
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-xs font-mono text-black font-bold">
                          {String(index + 1).padStart(2, '0')}
                        </span>
                        <span className="w-1.5 h-1.5 rounded-full bg-black" />
                        <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-md bg-zinc-100 border border-zinc-300 text-[11px] font-mono text-zinc-950 font-bold">
                          {project.category}
                        </span>
                        {project.secondaryCategories.slice(0, 1).map((sec) => (
                          <span
                            key={sec}
                            className="text-[11px] font-mono text-zinc-800 px-2 py-0.5 rounded bg-zinc-100 border border-zinc-300 font-medium"
                          >
                            {sec}
                          </span>
                        ))}
                      </div>

                      {/* Title */}
                      <h3 className="text-xl sm:text-2xl font-extrabold text-black tracking-tight mb-2.5">
                        {project.title}
                      </h3>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed mb-4 font-normal">
                        {project.description}
                      </p>

                      {/* Test Metric Highlight if available */}
                      {project.testMetric && (
                        <div className="mb-4 p-2.5 rounded-lg bg-zinc-100 border border-zinc-300 flex items-center gap-2 text-xs text-zinc-950 font-semibold">
                          <ShieldCheck className="w-4 h-4 text-black shrink-0" />
                          <span>{project.testMetric}</span>
                        </div>
                      )}

                      {/* Key Features Bullet Points */}
                      <div className="space-y-1.5 mb-5">
                        {project.features.slice(0, 3).map((feature, fIdx) => (
                          <div key={fIdx} className="flex items-start gap-2 text-xs text-zinc-800 font-normal">
                            <ChevronRight className="w-3.5 h-3.5 text-black shrink-0 mt-0.5" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>

                      {/* Tech Stack Tags */}
                      <div className="flex flex-wrap gap-1.5 mb-6">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-zinc-100 border border-zinc-300 text-zinc-950 font-semibold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Action Buttons */}
                    <div className="pt-4 border-t border-zinc-200 flex flex-wrap items-center gap-3">
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="btn-primary"
                      >
                        <Github className="w-3.5 h-3.5" />
                        <span>Source Code</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </a>

                      <button
                        onClick={() => onSelectProject(project)}
                        className="btn-secondary"
                      >
                        <Maximize2 className="w-3.5 h-3.5 text-black" />
                        <span>Inspect Architecture</span>
                      </button>

                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="btn-secondary"
                        >
                          <span>Live Demo</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      )}
                    </div>
                  </div>

                  {/* Right Column: Live Visual Architecture Diagram */}
                  <div className="lg:col-span-6 w-full">
                    <ProjectDiagram project={project} />
                  </div>

                </div>
              </div>
            ))}
          </div>

          {filteredFeatured.length === 0 && (
            <div className="text-center py-12 text-zinc-600 text-sm">
              No projects found matching "<span className="font-bold text-black">{searchQuery}</span>". Click clear to view all projects.
            </div>
          )}

          {/* Expandable Additional Projects Section */}
          <div className="mt-12 pt-8 border-t border-zinc-200">
            <div className="flex items-center justify-between mb-6">
              <div>
                <h3 className="text-lg sm:text-xl font-extrabold text-black tracking-tight">
                  Additional Engineering Projects
                </h3>
                <p className="text-xs sm:text-sm text-zinc-700 mt-0.5">
                  Computer vision tools, student portals, and regional AI utilities.
                </p>
              </div>

              <button
                onClick={() => setShowMore(!showMore)}
                className="btn-secondary"
              >
                <span>{showMore ? 'Collapse' : 'Expand All'}</span>
                {showMore ? <ChevronUp className="w-3.5 h-3.5" /> : <ChevronDown className="w-3.5 h-3.5" />}
              </button>
            </div>

            {showMore && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
                {filteredMore.map((project) => (
                  <div
                    key={project.id}
                    className="bento-card p-5 flex flex-col justify-between"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2 mb-2.5">
                        <span className="text-[11px] font-mono text-zinc-950 px-2 py-0.5 rounded bg-zinc-100 border border-zinc-300 font-bold">
                          {project.category}
                        </span>
                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-zinc-600 hover:text-black p-1"
                          aria-label="GitHub repo"
                        >
                          <Github className="w-4 h-4" />
                        </a>
                      </div>

                      <h4 className="text-base font-extrabold text-black mb-2 tracking-tight">
                        {project.title}
                      </h4>

                      <p className="text-xs text-zinc-800 leading-relaxed mb-4 font-normal">
                        {project.description}
                      </p>

                      <div className="flex flex-wrap gap-1.5 mb-4">
                        {project.technologies.map((tech) => (
                          <span
                            key={tech}
                            className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-100 border border-zinc-300 text-zinc-900 font-semibold"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    <div className="pt-3 border-t border-zinc-200 flex items-center justify-between">
                      <button
                        onClick={() => onSelectProject(project)}
                        className="text-xs font-mono text-black hover:underline font-bold inline-flex items-center gap-1 cursor-pointer"
                      >
                        <span>Details</span>
                        <ArrowUpRight className="w-3 h-3" />
                      </button>

                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs text-zinc-700 hover:text-black font-semibold"
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
