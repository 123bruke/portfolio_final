import { useState, useMemo } from 'react';
import { 
  Cpu, 
  Brain, 
  Layout, 
  Terminal, 
  Database, 
  GitBranch, 
  Layers, 
  Search, 
  X,
  Sparkles 
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/skills';
import SectionBorderFrame from './SectionBorderFrame';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const getCategoryIcon = (key: string) => {
    switch (key) {
      case 'ai-engineering':
        return <Cpu className="w-4 h-4 text-emerald-600 dark:text-cyan-300" />;
      case 'ai-ml':
        return <Brain className="w-4 h-4 text-emerald-600 dark:text-cyan-300" />;
      case 'fullstack':
        return <Layout className="w-4 h-4 text-emerald-600 dark:text-cyan-300" />;
      case 'programming':
        return <Terminal className="w-4 h-4 text-emerald-600 dark:text-cyan-300" />;
      case 'databases':
        return <Database className="w-4 h-4 text-emerald-600 dark:text-cyan-300" />;
      case 'devops':
        return <GitBranch className="w-4 h-4 text-emerald-600 dark:text-cyan-300" />;
      default:
        return <Layers className="w-4 h-4 text-emerald-600 dark:text-cyan-300" />;
    }
  };

  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case 'Current Focus':
        return 'bg-emerald-100 dark:bg-emerald-950/70 text-emerald-900 dark:text-emerald-200 border-emerald-300 dark:border-emerald-500/40 font-bold';
      case 'Experienced':
        return 'bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border-zinc-300 dark:border-zinc-700 font-semibold';
      case 'Hands-on':
        return 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/30';
      case 'Working Knowledge':
        return 'bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800';
      default:
        return 'bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800';
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

  const totalMatchingSkills = useMemo(() => {
    return filteredCategories.reduce((acc, cat) => acc + cat.skills.length, 0);
  }, [filteredCategories]);

  return (
    <section id="skills" className="py-10 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionBorderFrame>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/40 text-xs font-mono text-emerald-800 dark:text-cyan-300 font-bold mb-3 shadow-xs">
                <Terminal className="w-3.5 h-3.5" />
                <span>03 // TECHNICAL STACK</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-gradient-title">
                Skills & Engineering Stack
              </h2>
              <p className="mt-2 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 max-w-xl font-normal">
                Structured by engineering discipline with authentic proficiency indicators.
              </p>
            </div>

            {/* Level Legend */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-zinc-500 text-[11px] font-mono mr-1">Legend:</span>
              <span className="px-2.5 py-1 rounded border bg-emerald-100 dark:bg-emerald-950/60 text-emerald-900 dark:text-emerald-200 border-emerald-300 dark:border-emerald-500/40 font-mono text-[10px] font-bold">
                Current Focus
              </span>
              <span className="px-2.5 py-1 rounded border bg-zinc-100 dark:bg-zinc-800 text-zinc-900 dark:text-zinc-100 border-zinc-300 dark:border-zinc-700 font-mono text-[10px] font-semibold">
                Experienced
              </span>
              <span className="px-2.5 py-1 rounded border bg-emerald-50 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/30 font-mono text-[10px] font-medium">
                Hands-on
              </span>
              <span className="px-2.5 py-1 rounded border bg-zinc-50 dark:bg-zinc-900 text-zinc-700 dark:text-zinc-300 border-zinc-200 dark:border-zinc-800 font-mono text-[10px] font-medium">
                Working Knowledge
              </span>
            </div>
          </div>

          {/* Interactive Live Search Bar (New Feature) & Category Filter Tabs */}
          <div className="flex flex-col sm:flex-row items-stretch sm:items-center justify-between gap-4 mb-8">
            {/* Category Filter Tabs */}
            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 scrollbar-none">
              <button
                onClick={() => setActiveCategory('all')}
                className={`px-3.5 py-1.5 rounded-xl text-xs font-bold whitespace-nowrap cursor-pointer transition-all ${
                  activeCategory === 'all'
                    ? 'btn-primary'
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
                      ? 'btn-primary'
                      : 'btn-secondary'
                  }`}
                >
                  {cat.title}
                </button>
              ))}
            </div>

            {/* Instant Search Input */}
            <div className="relative min-w-[240px] sm:w-64">
              <Search className="w-4 h-4 text-zinc-400 absolute left-3 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Filter skills (e.g. PyTorch, React)..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-9 pr-8 py-1.5 text-xs rounded-xl bg-white dark:bg-zinc-900 border border-zinc-200 dark:border-zinc-700 text-zinc-900 dark:text-white placeholder:text-zinc-400 focus:outline-none focus:ring-1 focus:ring-emerald-500"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery('')}
                  className="absolute right-2.5 top-1/2 -translate-y-1/2 text-zinc-400 hover:text-zinc-600 dark:hover:text-zinc-200"
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
                className="bento-card p-5 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-2.5 pb-3 border-b border-zinc-200 dark:border-zinc-800 mb-4">
                    <div className="p-2 rounded-lg bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700">
                      {getCategoryIcon(category.categoryKey)}
                    </div>
                    <div>
                      <h3 className="text-base font-bold text-zinc-950 dark:text-white">
                        {category.title}
                      </h3>
                      <p className="text-[11px] text-zinc-500 dark:text-zinc-400">
                        {category.description}
                      </p>
                    </div>
                  </div>

                  {/* Skills Pills in Grid / Flex */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-lg text-xs border ${getLevelBadgeClass(skill.level)}`}
                      >
                        {skill.highlight && (
                          <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shrink-0" />
                        )}
                        <span className="font-medium">{skill.name}</span>
                        <span className="text-[10px] opacity-70 font-mono">({skill.level})</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-100 dark:border-zinc-800/60 flex items-center justify-between text-[11px] text-zinc-500 dark:text-zinc-400 font-mono">
                  <span>{category.skills.length} competencies</span>
                  <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Active</span>
                </div>
              </div>
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <div className="text-center py-12 text-zinc-500 text-sm">
              No skills found matching "<span className="font-bold text-zinc-800 dark:text-zinc-200">{searchQuery}</span>". Click clear to view all skills.
            </div>
          )}
        </SectionBorderFrame>
      </div>
    </section>
  );
}
