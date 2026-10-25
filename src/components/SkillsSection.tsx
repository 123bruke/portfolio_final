import { useState, useMemo } from 'react';
import { 
  Cpu, 
  Workflow, 
  Binary, 
  Code2, 
  Layers, 
  Terminal, 
  Database, 
  GitBranch, 
  Search, 
  X,
  Server,
  Boxes,
  Eye,
  EyeOff,
  ChevronDown,
  ChevronUp,
  Flame
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/skills';
import SectionBorderFrame from './SectionBorderFrame';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [isSectionHidden, setIsSectionHidden] = useState(false);

  // Professional developer icon mapping (No gimmick cartoon AI icons)
  const getCategoryIcon = (key: string) => {
    switch (key) {
      case 'ai-engineering':
        return <Workflow className="w-4 h-4 text-emerald-600" />;
      case 'ai-ml':
        return <Binary className="w-4 h-4 text-emerald-600" />;
      case 'fullstack':
        return <Layers className="w-4 h-4 text-emerald-600" />;
      case 'programming':
        return <Terminal className="w-4 h-4 text-emerald-600" />;
      case 'databases':
        return <Database className="w-4 h-4 text-emerald-600" />;
      case 'devops':
        return <GitBranch className="w-4 h-4 text-emerald-600" />;
      default:
        return <Code2 className="w-4 h-4 text-emerald-600" />;
    }
  };

  // Specific premium icon per technology
  const getTechIcon = (name: string) => {
    const lower = name.toLowerCase();
    if (lower.includes('python') || lower.includes('c++') || lower.includes('terminal')) {
      return <Terminal className="w-3 h-3 text-emerald-600 shrink-0" />;
    }
    if (lower.includes('react') || lower.includes('typescript') || lower.includes('javascript') || lower.includes('html')) {
      return <Code2 className="w-3 h-3 text-emerald-600 shrink-0" />;
    }
    if (lower.includes('data') || lower.includes('sql') || lower.includes('chroma') || lower.includes('neo4j') || lower.includes('postgres') || lower.includes('mongo')) {
      return <Database className="w-3 h-3 text-emerald-600 shrink-0" />;
    }
    if (lower.includes('fastapi') || lower.includes('node') || lower.includes('flask') || lower.includes('express')) {
      return <Server className="w-3 h-3 text-emerald-600 shrink-0" />;
    }
    if (lower.includes('docker') || lower.includes('linux') || lower.includes('git')) {
      return <Boxes className="w-3 h-3 text-emerald-600 shrink-0" />;
    }
    if (lower.includes('langgraph') || lower.includes('agent') || lower.includes('rag') || lower.includes('colpali')) {
      return <Workflow className="w-3 h-3 text-emerald-600 shrink-0" />;
    }
    return <Cpu className="w-3 h-3 text-emerald-600 shrink-0" />;
  };

  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case 'Current Focus':
        return 'bg-emerald-50 text-emerald-900 border-emerald-400 font-bold shadow-2xs';
      case 'Experienced':
        return 'bg-zinc-100 text-zinc-950 border-zinc-300 font-bold';
      case 'Hands-on':
        return 'bg-white text-zinc-900 border-zinc-300 font-semibold';
      case 'Working Knowledge':
        return 'bg-zinc-50 text-zinc-800 border-zinc-200 font-normal';
      default:
        return 'bg-white text-zinc-800 border-zinc-300 font-normal';
    }
  };

  // Filter categories and skills dynamically based on category tab & search query
  const filteredCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();

    return SKILL_CATEGORIES
      .filter((cat) => activeCategory === 'all' || cat.categoryKey === activeCategory)
      .map((cat) => {
        if (!query) return cat;
        const matchingSkills = cat.skills.filter((skill) =>
          skill.name.toLowerCase().includes(query) ||
          skill.level.toLowerCase().includes(query) ||
          cat.title.toLowerCase().includes(query)
        );
        return {
          ...cat,
          skills: matchingSkills
        };
      })
      .filter((cat) => cat.skills.length > 0);
  }, [activeCategory, searchQuery]);

  return (
    <section id="skills" className="py-10 scroll-mt-24 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionBorderFrame>
          {/* Section Header with Hide/Show Toggle */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <div>
              {/* Green highlight for Main Point */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-300 text-xs font-mono text-emerald-800 font-bold mb-3 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>TECHNICAL EXPERTISE & PROFICIENCY</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-black">
                Skills & Engineering Stack
              </h2>
              <p className="mt-2 text-sm sm:text-base text-zinc-700 max-w-xl font-normal">
                Structured by engineering discipline with <strong className="text-emerald-700 font-bold">active focus areas</strong> highlighted in green.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row sm:items-center gap-3 self-start md:self-end">
              {/* Level Legend */}
              <div className="flex flex-wrap items-center gap-2 text-xs">
                <span className="text-zinc-600 text-[11px] font-mono mr-1 font-bold">Key:</span>
                <span className="px-2 py-0.5 rounded border bg-emerald-50 text-emerald-800 border-emerald-300 font-mono text-[10px] font-bold flex items-center gap-1">
                  <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
                  Current Focus
                </span>
                <span className="px-2 py-0.5 rounded border bg-zinc-100 text-zinc-950 border-zinc-300 font-mono text-[10px] font-bold">
                  Experienced
                </span>
                <span className="px-2 py-0.5 rounded border bg-white text-zinc-900 border-zinc-300 font-mono text-[10px] font-medium">
                  Hands-on
                </span>
              </div>

              {/* Native Hide/Show Button */}
              <button
                onClick={() => setIsSectionHidden(!isSectionHidden)}
                className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold rounded-lg border border-zinc-300 bg-white hover:bg-zinc-100 text-black shadow-2xs transition-all duration-200 cursor-pointer shrink-0"
                title={isSectionHidden ? "Expand Skills" : "Collapse Skills"}
              >
                {isSectionHidden ? (
                  <>
                    <Eye className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Show Skills</span>
                    <ChevronDown className="w-3 h-3 text-zinc-500" />
                  </>
                ) : (
                  <>
                    <EyeOff className="w-3.5 h-3.5 text-zinc-600" />
                    <span>Hide Details</span>
                    <ChevronUp className="w-3 h-3 text-zinc-500" />
                  </>
                )}
              </button>
            </div>
          </div>

          {/* Smooth Collapsible Content Container */}
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              isSectionHidden ? 'max-h-0 opacity-0 pointer-events-none' : 'max-h-[3000px] opacity-100'
            }`}
          >
            {/* Interactive Live Search Bar & Category Filter Tabs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
              {/* Category Filter Tabs */}
              <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
                <button
                  onClick={() => setActiveCategory('all')}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap cursor-pointer transition-all ${
                    activeCategory === 'all'
                      ? 'btn-primary bg-black text-white'
                      : 'btn-secondary'
                  }`}
                >
                  All Domains
                </button>
                {SKILL_CATEGORIES.map((cat) => (
                  <button
                    key={cat.categoryKey}
                    onClick={() => setActiveCategory(cat.categoryKey)}
                    className={`px-3 py-1.5 rounded-xl text-xs font-semibold whitespace-nowrap cursor-pointer transition-all ${
                      activeCategory === cat.categoryKey
                        ? 'btn-primary bg-black text-white'
                        : 'btn-secondary'
                    }`}
                  >
                    {cat.title}
                  </button>
                ))}
              </div>

              {/* Instant Search Input */}
              <div className="relative min-w-[240px] sm:w-64">
                <Search className="w-4 h-4 text-zinc-500 absolute left-3 top-1/2 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Filter skills (e.g. PyTorch, React)..."
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

            {/* Grid Layout of Skill Category Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
              {filteredCategories.map((category) => (
                <div
                  key={category.categoryKey}
                  className="bento-card p-5 flex flex-col justify-between hover:border-emerald-300 transition-all duration-200"
                >
                  <div>
                    {/* Category Header with Premium Icon */}
                    <div className="flex items-center gap-2.5 pb-3 border-b border-zinc-200 mb-4">
                      <div className="p-2 rounded-xl bg-emerald-50 border border-emerald-200">
                        {getCategoryIcon(category.categoryKey)}
                      </div>
                      <div>
                        <h3 className="text-base font-bold text-black">
                          {category.title}
                        </h3>
                        <p className="text-[11px] text-zinc-600">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* Skills Pills in Grid / Flex with individual tech icons */}
                    <div className="flex flex-wrap gap-2">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className={`inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs border ${getLevelBadgeClass(skill.level)} transition-all hover:scale-[1.02]`}
                          title={`${skill.name} (${skill.level})`}
                        >
                          {getTechIcon(skill.name)}
                          <span>{skill.name}</span>
                          {skill.level === 'Current Focus' && (
                            <span className="text-[9px] font-mono uppercase bg-emerald-600 text-white px-1.5 py-0.2 rounded font-extrabold ml-0.5">
                              Focus
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-4 pt-3 border-t border-zinc-200 flex items-center justify-between text-[11px] text-zinc-600 font-mono">
                    <span>{category.skills.length} competencies</span>
                    <span className="text-emerald-700 font-bold flex items-center gap-1">
                      <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full" />
                      Active
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {filteredCategories.length === 0 && (
              <div className="text-center py-12 text-zinc-600 text-sm">
                No skills found matching "<span className="font-bold text-black">{searchQuery}</span>". Click clear to view all skills.
              </div>
            )}
          </div>
        </SectionBorderFrame>
      </div>
    </section>
  );
}
