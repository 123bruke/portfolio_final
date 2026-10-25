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
        return <Cpu className="w-4 h-4 text-black" />;
      case 'ai-ml':
        return <Brain className="w-4 h-4 text-black" />;
      case 'fullstack':
        return <Layout className="w-4 h-4 text-black" />;
      case 'programming':
        return <Terminal className="w-4 h-4 text-black" />;
      case 'databases':
        return <Database className="w-4 h-4 text-black" />;
      case 'devops':
        return <GitBranch className="w-4 h-4 text-black" />;
      default:
        return <Layers className="w-4 h-4 text-black" />;
    }
  };

  const getLevelBadgeClass = (level: string) => {
    switch (level) {
      case 'Current Focus':
        return 'bg-black text-white border-black font-bold shadow-2xs';
      case 'Experienced':
        return 'bg-zinc-100 text-zinc-950 border-zinc-300 font-semibold';
      case 'Hands-on':
        return 'bg-white text-zinc-900 border-zinc-300 font-medium';
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
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-100 border border-zinc-300 text-xs font-mono text-black font-bold mb-3 shadow-2xs">
                <Terminal className="w-3.5 h-3.5 text-black" />
                <span>03 // TECHNICAL STACK</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-black">
                Skills & Engineering Stack
              </h2>
              <p className="mt-2 text-sm sm:text-base text-zinc-700 max-w-xl font-normal">
                Structured by engineering discipline with authentic proficiency indicators.
              </p>
            </div>

            {/* Level Legend */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-zinc-600 text-[11px] font-mono mr-1 font-bold">Legend:</span>
              <span className="px-2.5 py-1 rounded border bg-black text-white border-black font-mono text-[10px] font-bold">
                Current Focus
              </span>
              <span className="px-2.5 py-1 rounded border bg-zinc-100 text-zinc-950 border-zinc-300 font-mono text-[10px] font-semibold">
                Experienced
              </span>
              <span className="px-2.5 py-1 rounded border bg-white text-zinc-900 border-zinc-300 font-mono text-[10px] font-medium">
                Hands-on
              </span>
              <span className="px-2.5 py-1 rounded border bg-zinc-50 text-zinc-800 border-zinc-200 font-mono text-[10px] font-medium">
                Working Knowledge
              </span>
            </div>
          </div>

          {/* Interactive Live Search Bar & Category Filter Tabs */}
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
                className="bento-card p-5 flex flex-col justify-between"
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center gap-2.5 pb-3 border-b border-zinc-200 mb-4">
                    <div className="p-2 rounded-lg bg-zinc-100 border border-zinc-200">
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

                  {/* Skills Pills in Grid / Flex */}
                  <div className="flex flex-wrap gap-2">
                    {category.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-xs border ${getLevelBadgeClass(skill.level)}`}
                        title={`${skill.name} (${skill.level})`}
                      >
                        {skill.highlight && (
                          <span className={`w-1.5 h-1.5 rounded-full shrink-0 ${skill.level === 'Current Focus' ? 'bg-white' : 'bg-black'}`} />
                        )}
                        <span className="font-semibold">{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="mt-4 pt-3 border-t border-zinc-200 flex items-center justify-between text-[11px] text-zinc-600 font-mono">
                  <span>{category.skills.length} competencies</span>
                  <span className="text-black font-bold">Active</span>
                </div>
              </div>
            ))}
          </div>

          {filteredCategories.length === 0 && (
            <div className="text-center py-12 text-zinc-600 text-sm">
              No skills found matching "<span className="font-bold text-black">{searchQuery}</span>". Click clear to view all skills.
            </div>
          )}
        </SectionBorderFrame>
      </div>
    </section>
  );
}
