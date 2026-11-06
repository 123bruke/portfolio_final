import { useMemo, useState } from 'react';
import { ArrowUpRight, ChevronDown, ChevronUp, ExternalLink, Github, Search, X } from 'lucide-react';
import { FEATURED_PROJECTS, MORE_PROJECTS } from '../data/projects';
import type { Project } from '../types';
import SectionBorderFrame from './SectionBorderFrame';

interface FeaturedProjectsProps {
  onSelectProject: (project: Project) => void;
}

const filters = [
  'All',
  'AI / ML & Agents',
  'Full-Stack Web',
  'Biomedical / Knowledge Graph',
  '3D / Interactive Web',
] as const;

type ProjectFilter = (typeof filters)[number];

function matchesFilter(project: Project, filter: ProjectFilter) {
  if (filter === 'All') return true;
  if (filter === 'AI / ML & Agents') {
    return ['AI / ML', 'AI Agents', 'RAG'].some((category) =>
      project.category === category || project.secondaryCategories.includes(category as Project['category'])
    );
  }
  if (filter === 'Full-Stack Web') {
    return project.category === 'Full-Stack' || project.secondaryCategories.includes('Full-Stack');
  }
  if (filter === 'Biomedical / Knowledge Graph') {
    return project.category === 'Research' || project.secondaryCategories.includes('Research');
  }
  return project.category === '3D / Interactive' || project.secondaryCategories.includes('3D / Interactive');
}

function matchesSearch(project: Project, query: string) {
  if (!query) return true;
  return project.title.toLowerCase().includes(query)
    || project.description.toLowerCase().includes(query)
    || project.technologies.some((technology) => technology.toLowerCase().includes(query));
}

export default function FeaturedProjects({ onSelectProject }: FeaturedProjectsProps) {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All');
  const [searchQuery, setSearchQuery] = useState('');
  const [showMore, setShowMore] = useState(false);
  const query = searchQuery.trim().toLowerCase();

  // Pin Ethio Football Digitals to the first position, independent of data-file order.
  const featuredProjects = useMemo(() => {
    const ordered = [...FEATURED_PROJECTS].sort((a, b) => {
      if (a.id === 'ethio-football-digitals') return -1;
      if (b.id === 'ethio-football-digitals') return 1;
      return 0;
    });
    return ordered.filter((project) => matchesFilter(project, activeFilter) && matchesSearch(project, query));
  }, [activeFilter, query]);

  const additionalProjects = useMemo(
    () => MORE_PROJECTS.filter((project) => matchesFilter(project, activeFilter) && matchesSearch(project, query)),
    [activeFilter, query],
  );

  const allProjects = [...FEATURED_PROJECTS, ...MORE_PROJECTS];

  return (
    <section id="projects" className="py-10 scroll-mt-24 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionBorderFrame>
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-300 text-xs font-mono text-emerald-800 font-bold mb-3">
                <span className="w-2 h-2 rounded-full bg-emerald-500" />
                <span>SELECTED WORK & REPOSITORIES</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-black">
                Featured Engineering Projects
              </h2>
              <p className="mt-2 text-sm sm:text-base text-zinc-700 max-w-xl">
                Product-focused engineering across football, AI, full-stack platforms, and research.
              </p>
            </div>
            <a href="https://github.com/123bruke" target="_blank" rel="noopener noreferrer" className="inline-flex items-center gap-2 text-xs font-mono text-black hover:text-emerald-700 font-bold">
              Explore GitHub <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1">
              {filters.map((filter) => {
                const count = allProjects.filter((project) => matchesFilter(project, filter)).length;
                return (
                  <button
                    key={filter}
                    type="button"
                    onClick={() => setActiveFilter(filter)}
                    aria-pressed={activeFilter === filter}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap transition-all ${activeFilter === filter ? 'btn-primary bg-black text-white' : 'btn-secondary'}`}
                  >
                    {filter}<span className="ml-1.5 text-[10px] opacity-75 font-mono">({count})</span>
                  </button>
                );
              })}
            </div>
            <div className="relative min-w-[220px] sm:w-64">
              <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="search"
                placeholder="Search projects..."
                value={searchQuery}
                onChange={(event) => setSearchQuery(event.target.value)}
                className="w-full pl-9 pr-9 py-2 text-xs rounded-xl bg-white border border-zinc-300 text-zinc-950 placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-700"
              />
              {searchQuery && <button type="button" onClick={() => setSearchQuery('')} aria-label="Clear search" className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-500 hover:text-black"><X className="w-3.5 h-3.5" /></button>}
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
            {featuredProjects.map((project, index) => {
              const isFootballProject = project.id === 'ethio-football-digitals';
              return (
                <article key={project.id} className={`bento-card overflow-hidden p-5 sm:p-6 transition-all duration-200 hover:-translate-y-1 hover:shadow-lg ${isFootballProject ? 'border-emerald-400 ring-1 ring-emerald-200' : ''}`}>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <span className="inline-flex px-2.5 py-1 rounded-md text-[11px] font-mono font-bold bg-emerald-50 text-emerald-800 border border-emerald-200">{project.category}</span>
                    {isFootballProject && <span className="text-[10px] font-bold uppercase tracking-wider text-emerald-700">Featured · 01</span>}
                    {!isFootballProject && <span className="text-[10px] font-mono text-zinc-500">{String(index + 1).padStart(2, '0')}</span>}
                  </div>
                  <h3 className="text-lg sm:text-xl font-black text-black tracking-tight mb-2">{project.title}</h3>
                  <p className="text-sm text-zinc-700 leading-relaxed mb-4">{project.description}</p>
                  <div className="flex flex-wrap gap-1.5 mb-5">
                    {project.technologies.slice(0, 5).map((technology) => <span key={technology} className="px-2.5 py-1 rounded-md text-[11px] font-mono bg-zinc-50 border border-zinc-200 text-zinc-800">{technology}</span>)}
                  </div>
                  <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-zinc-200">
                    <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="btn-primary"><Github className="w-4 h-4" /><span>GitHub Repo</span><ArrowUpRight className="w-3.5 h-3.5" /></a>
                    <button type="button" onClick={() => onSelectProject(project)} className="btn-secondary"><span>View Details</span><ExternalLink className="w-3.5 h-3.5" /></button>
                  </div>
                </article>
              );
            })}
          </div>
          {featuredProjects.length === 0 && <p className="py-10 text-center text-sm text-zinc-600">No projects match “{searchQuery}”. Try another search or category.</p>}

          <div className="mt-12 pt-8 border-t border-zinc-200">
            <div className="flex items-center justify-between gap-4 mb-6">
              <div><h3 className="text-lg sm:text-xl font-black text-black tracking-tight">Additional Engineering Projects</h3><p className="text-sm text-zinc-600 mt-1">More experiments and product builds.</p></div>
              <button type="button" onClick={() => setShowMore((value) => !value)} className="btn-secondary"><span>{showMore ? 'Show less' : 'Show all'}</span>{showMore ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}</button>
            </div>
            {showMore && (
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                {additionalProjects.map((project) => (
                  <article key={project.id} className="bento-card p-5 flex flex-col justify-between">
                    <div><span className="text-[11px] font-mono text-emerald-800 px-2 py-1 rounded bg-emerald-50 border border-emerald-200">{project.category}</span><h4 className="text-base font-black text-black mt-3 mb-2">{project.title}</h4><p className="text-sm text-zinc-700 leading-relaxed mb-4">{project.description}</p><div className="flex flex-wrap gap-1.5 mb-4">{project.technologies.slice(0, 3).map((technology) => <span key={technology} className="px-2 py-1 rounded text-[10px] font-mono bg-zinc-50 border border-zinc-200">{technology}</span>)}</div></div>
                    <div className="flex items-center justify-between pt-3 border-t border-zinc-200"><button type="button" onClick={() => onSelectProject(project)} className="text-xs font-bold text-emerald-800 inline-flex items-center gap-1">Details <ArrowUpRight className="w-3 h-3" /></button><a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="text-xs font-bold text-zinc-700 hover:text-emerald-700">Source code</a></div>
                  </article>
                ))}
              </div>
            )}
          </div>
        </SectionBorderFrame>
      </div>
    </section>
  );
}
