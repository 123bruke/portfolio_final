import { useState } from 'react';
import { 
  Cpu, 
  Brain, 
  Layout, 
  Terminal, 
  Database, 
  GitBranch, 
  Layers, 
  Check, 
  Sparkles 
} from 'lucide-react';
import { SKILL_CATEGORIES } from '../data/skills';
import SectionBorderFrame from './SectionBorderFrame';

export default function SkillsSection() {
  const [activeCategory, setActiveCategory] = useState<string>('all');

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
        return 'bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-cyan-200 border-emerald-300 dark:border-emerald-400/50 font-bold';
      case 'Experienced':
        return 'bg-zinc-200 dark:bg-zinc-800 text-zinc-950 dark:text-white border-zinc-300 dark:border-zinc-700 font-bold';
      case 'Hands-on':
        return 'bg-emerald-50 dark:bg-emerald-950/40 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/30';
      case 'Working Knowledge':
        return 'bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-slate-200 border-zinc-300 dark:border-zinc-700';
      default:
        return 'bg-zinc-100 dark:bg-zinc-900 text-zinc-700 dark:text-slate-400 border-zinc-300 dark:border-zinc-800';
    }
  };

  const filteredCategories = activeCategory === 'all'
    ? SKILL_CATEGORIES
    : SKILL_CATEGORIES.filter(c => c.categoryKey === activeCategory);

  return (
    <section id="skills" className="py-12 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">
        <SectionBorderFrame>
          {/* Section Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/40 text-xs font-mono text-emerald-800 dark:text-cyan-300 font-bold mb-3 shadow-[0_0_10px_rgba(52,211,153,0.2)]">
                <Terminal className="w-3.5 h-3.5" />
                <span>03 // TECHNICAL STACK</span>
              </div>
              <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gradient-title">
                Skills & Engineering Stack
              </h2>
              <p className="mt-2 text-sm sm:text-base text-zinc-800 dark:text-emerald-100/90 max-w-xl font-medium">
                Categorized by engineering discipline with authentic proficiency indicators instead of arbitrary percentage bars.
              </p>
            </div>

            {/* Level Legend */}
            <div className="flex flex-wrap items-center gap-2 text-xs">
              <span className="text-zinc-700 dark:text-slate-300 text-[11px] font-mono mr-1">Legend:</span>
              <span className="px-2.5 py-1 rounded border bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-cyan-300 border-emerald-300 dark:border-emerald-500/40 font-mono text-[10px] font-bold">
                Current Focus
              </span>
              <span className="px-2.5 py-1 rounded border bg-zinc-200 dark:bg-zinc-800 text-zinc-950 dark:text-white border-zinc-300 dark:border-zinc-700 font-mono text-[10px] font-medium">
                Experienced
              </span>
              <span className="px-2.5 py-1 rounded border bg-emerald-50 dark:bg-emerald-950/30 text-emerald-700 dark:text-emerald-300 border-emerald-200 dark:border-emerald-500/30 font-mono text-[10px] font-medium">
                Hands-on
              </span>
              <span className="px-2.5 py-1 rounded border bg-zinc-100 dark:bg-zinc-900 text-zinc-800 dark:text-slate-300 border-zinc-300 dark:border-zinc-700 font-mono text-[10px] font-medium">
                Working Knowledge
              </span>
            </div>
          </div>

          {/* Category Filter Tabs with 3D Transparent Gradient look */}
          <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 scrollbar-none">
            <button
              onClick={() => setActiveCategory('all')}
              className={`px-4 py-2 rounded-xl text-xs font-bold whitespace-nowrap cursor-pointer transition-all ${
                activeCategory === 'all'
                  ? 'btn-3d-gradient text-emerald-950 dark:text-white shadow-md'
                  : 'btn-3d-transparent text-zinc-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400'
              }`}
            >
              All Disciplines ({SKILL_CATEGORIES.length})
            </button>

            {SKILL_CATEGORIES.map((cat) => (
              <button
                key={cat.categoryKey}
                onClick={() => setActiveCategory(cat.categoryKey)}
                className={`inline-flex items-center gap-2 px-3.5 py-2 rounded-xl text-xs font-bold whitespace-nowrap cursor-pointer transition-all ${
                  activeCategory === cat.categoryKey
                    ? 'btn-3d-gradient text-emerald-950 dark:text-white shadow-md'
                    : 'btn-3d-transparent text-zinc-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400'
                }`}
              >
                {getCategoryIcon(cat.categoryKey)}
                <span>{cat.title}</span>
              </button>
            ))}
          </div>

          {/* Category Cards Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredCategories.map((cat) => (
              <div
                key={cat.categoryKey}
                id={`skill-card-${cat.categoryKey}`}
                className="glass-card rounded-2xl p-6 transition-all duration-300 hover:border-emerald-400/60 shadow-xl flex flex-col justify-between group hover:scale-[1.01]"
              >
                <div>
                  {/* Header */}
                  <div className="flex items-start justify-between gap-3 mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-white dark:bg-black/80 border border-black/10 dark:border-emerald-500/30 group-hover:border-emerald-400/50 shadow-sm">
                        {getCategoryIcon(cat.categoryKey)}
                      </div>
                      <h3 className="text-base font-extrabold text-zinc-950 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-cyan-300 transition-colors">
                        {cat.title}
                      </h3>
                    </div>
                  </div>

                  <p className="text-xs text-zinc-700 dark:text-slate-300 mb-5 leading-relaxed font-normal">
                    {cat.description}
                  </p>

                  {/* Skills Pills */}
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill) => (
                      <div
                        key={skill.name}
                        className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-semibold border transition-colors ${
                          skill.highlight
                            ? 'bg-white dark:bg-black/80 border-emerald-500/50 text-zinc-950 dark:text-white shadow-sm'
                            : 'bg-slate-50 dark:bg-black/40 border-black/10 dark:border-emerald-500/20 text-zinc-800 dark:text-slate-200'
                        }`}
                      >
                        {skill.highlight && (
                          <Sparkles className="w-3 h-3 text-emerald-600 dark:text-cyan-300 shrink-0" />
                        )}
                        <span>{skill.name}</span>
                        <span className={`ml-1 text-[9px] font-mono px-1.5 py-0.5 rounded border ${getLevelBadgeClass(skill.level)}`}>
                          {skill.level}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Bottom stats footnote */}
                <div className="mt-6 pt-3 border-t border-black/10 dark:border-white/10 flex items-center justify-between text-[11px] font-mono text-zinc-600 dark:text-slate-400">
                  <span>{cat.skills.length} competencies listed</span>
                  <span className="flex items-center gap-1 text-emerald-700 dark:text-cyan-300 font-bold">
                    <Check className="w-3 h-3 text-emerald-600 dark:text-cyan-300" />
                    Verified in projects
                  </span>
                </div>
              </div>
            ))}
          </div>
        </SectionBorderFrame>
      </div>
    </section>
  );
}
