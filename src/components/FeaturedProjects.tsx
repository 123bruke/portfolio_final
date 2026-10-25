import { useState, useMemo } from 'react';
import {
  Github,
  ExternalLink,
  ArrowUpRight,
  Search,
  X,
  ChevronDown,
  ChevronUp,
  Terminal,
} from 'lucide-react';
import { FEATURED_PROJECTS, MORE_PROJECTS } from '../data/projects';
import { Project } from '../types';
import SectionBorderFrame from './SectionBorderFrame';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
}

export default function FeaturedProjects({ onSelectProject }: FeaturedProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<string>('All');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [showMore, setShowMore] = useState(false);
  const [isSectionHidden, setIsSectionHidden] = useState(false);

  const filters = [
    'All',
    'AI / ML & Agents',
    'Full-Stack Web',
    'Biomedical / Knowledge Graph',
    '3D / Interactive Web',
  ];

  const filteredFeatured = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return FEATURED_PROJECTS.filter((project) => {
      const matchesFilter =
        activeFilter === 'All' ||
        project.category === activeFilter ||
        project.secondaryCategories.includes(activeFilter);

      if (!query) return matchesFilter;

      const matchesQuery =
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((t) => t.toLowerCase().includes(query));

      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, searchQuery]);

  const filteredMore = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return MORE_PROJECTS.filter((project) => {
      const matchesFilter =
        activeFilter === 'All' ||
        project.category === activeFilter ||
        project.secondaryCategories.includes(activeFilter);

      if (!query) return matchesFilter;

      const matchesQuery =
        project.title.toLowerCase().includes(query) ||
        project.description.toLowerCase().includes(query) ||
        project.technologies.some((t) => t.toLowerCase().includes(query));

      return matchesFilter && matchesQuery;
    });
  }, [activeFilter, searchQuery]);

  return (
    <section id="projects" className="py-10 scroll-mt-24 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionBorderFrame>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-300 text-xs font-mono text-emerald-800 font-bold mb-3 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>SYSTEM IMPLEMENTATIONS & REPOSITORIES</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-black">
                Featured Engineering Projects
              </h2>
              <p className="mt-2 text-sm sm:text-base text-zinc-700 max-w-xl font-normal">
                Practical engineering work across AI systems, web platforms, and research-driven product builds.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 self-start md:self-end">
              <a
                href="https://github.com/123bruke"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-mono text-black hover:text-emerald-700 font-bold"
              >
                <span>Explore GitHub</span>
                <ArrowUpRight className="w-3.5 h-3.5 text-black" />
              </a>

              <button
                onClick={() => setIsSectionHidden(!isSectionHidden)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold rounded-lg border border-zinc-300 bg-white hover:bg-zinc-100 text-black shadow-2xs transition-all duration-200"
                title={isSectionHidden ? 'Expand Projects' : 'Collapse Projects'}
              >
                {isSectionHidden ? (
                  <>
                    <Terminal className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Show Projects</span>
                    <ChevronDown className="w-3 h-3 text-zinc-500" />
                  </>
                ) : (
                  <>
                    <Terminal className="w-3.5 h-3.5 text-zinc-600" />
                    <span>Hide Details</span>
                    <ChevronUp className="w-3 h-3 text-zinc-500" />
                  </>
                )}
              </button>
            </div>
          </div>

          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              isSectionHidden ? 'max-h-0 opacity-0 pointer-events-none' : 'max-h-[8000px] opacity-100'
            }`}
          >
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
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
                          ? 'btn-primary bg-black text-white'
                          : 'btn-secondary'
                      }`}
                    >
                      <span>{filter}</span>
                      <span className="ml-1.5 text-[10px] opacity-75 font-mono">({count})</span>
                    </button>
                  );
                })}
              </div>

              <div className="relative min-w-[240px] sm:w-64">
                <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search projects..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-8 py-1.5 text-xs rounded-xl bg-white border border-zinc-300 text-zinc-950 placeholder:text-zinc-500 focus:outline-none focus:ring-1 focus:ring-black"
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

            <div className="space-y-5">
              {filteredFeatured.map((project) => (
                <div
                  key={project.id}
                  className="bento-card p-5 sm:p-6 hover:border-emerald-300 transition-all duration-200"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-3">
                    <div>
                      <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-300">
                        {project.category}
                      </span>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black text-black tracking-tight mb-2">
                    {project.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-zinc-800 leading-relaxed mb-4 font-normal">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.slice(0, 4).map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-0.5 rounded text-[11px] font-mono bg-zinc-100 border border-zinc-300 text-black font-bold"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-200">
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-primary"
                    >
                      <Github className="w-3.5 h-3.5 text-white" />
                      <span>GitHub Repo</span>
                      <ArrowUpRight className="w-3 h-3 text-white" />
                    </a>

                    <button
                      onClick={() => onSelectProject(project)}
                      className="btn-secondary"
                    >
                      <span>View Details</span>
                      <ExternalLink className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            {filteredFeatured.length === 0 && (
              <div className="text-center py-12 text-zinc-600 text-sm">
                No projects found matching "<span className="font-bold text-black">{searchQuery}</span>". Click clear to view all projects.
              </div>
            )}

            <div className="mt-12 pt-8 border-t border-zinc-200">
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h3 className="text-lg sm:text-xl font-black text-black tracking-tight">
                    Additional Engineering Projects
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-700 mt-0.5">
                    Extra engineering work and experiments.
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
                      className="bento-card p-5 flex flex-col justify-between hover:border-emerald-300 transition-all"
                    >
                      <div>
                        <div className="flex items-center justify-between gap-2 mb-2.5">
                          <span className="text-[11px] font-mono text-emerald-800 px-2 py-0.5 rounded bg-emerald-50 border border-emerald-200 font-bold">
                            {project.category}
                          </span>
                          <a
                            href={project.githubUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-zinc-600 hover:text-black p-1"
                            aria-label="GitHub repo"
                          >
                            <Github className="w-4 h-4 text-black" />
                          </a>
                        </div>

                        <h4 className="text-base font-black text-black mb-2 tracking-tight">
                          {project.title}
                        </h4>

                        <p className="text-xs text-zinc-800 leading-relaxed mb-4 font-normal">
                          {project.description}
                        </p>

                        <div className="flex flex-wrap gap-1.5 mb-4">
                          {project.technologies.slice(0, 3).map((tech) => (
                            <span
                              key={tech}
                              className="px-2 py-0.5 rounded text-[10px] font-mono bg-zinc-100 border border-zinc-300 text-black font-semibold"
                            >
                              {tech}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-3 border-t border-zinc-200 flex items-center justify-between">
                        <button
                          onClick={() => onSelectProject(project)}
                          className="text-xs font-mono text-black hover:text-emerald-700 font-bold inline-flex items-center gap-1 cursor-pointer"
                        >
                          <span>Details</span>
                          <ArrowUpRight className="w-3 h-3 text-black" />
                        </button>

                        <a
                          href={project.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-xs text-zinc-700 hover:text-black font-bold"
                        >
                          Source Code
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </SectionBorderFrame>
      </div>
    </section>
  );
}
