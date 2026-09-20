import { 
  Code2, 
  Terminal, 
  ExternalLink, 
  Binary, 
  Bug, 
  TrendingUp, 
  Workflow, 
  CheckCircle2, 
  ArrowUpRight 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/personal';
import SectionBorderFrame from './SectionBorderFrame';

export default function ProblemSolver() {
  const domains = [
    {
      title: 'Data Structures & Algorithms',
      description: 'Arrays, Trees, Graphs, Hash Maps, Heaps, and Dynamic Programming with rigor on asymptotic time and space complexity.',
      icon: Binary,
      color: 'text-emerald-600 dark:text-cyan-300'
    },
    {
      title: 'Algorithmic Thinking',
      description: 'Systematic problem deconstruction, boundary case detection, inductive formulation, and recursive decomposition.',
      icon: Workflow,
      color: 'text-emerald-600 dark:text-cyan-300'
    },
    {
      title: 'Debugging & State Tracing',
      description: 'Isolating root causes through deterministic reproduction, invariant assertion, and systematic logging.',
      icon: Bug,
      color: 'text-emerald-600 dark:text-cyan-300'
    },
    {
      title: 'Performance Optimization',
      description: 'Minimizing algorithmic overhead, avoiding redundant computation, and optimizing resource bottlenecks.',
      icon: TrendingUp,
      color: 'text-emerald-600 dark:text-cyan-300'
    }
  ];

  return (
    <section id="problem-solving" className="py-12 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">
        <SectionBorderFrame>
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/40 text-xs font-mono text-emerald-800 dark:text-cyan-300 font-bold mb-3 shadow-[0_0_10px_rgba(52,211,153,0.2)]">
              <Terminal className="w-3.5 h-3.5" />
              <span>07 // PROBLEM SOLVING</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gradient-title">
              Problem Solver & Algorithmic Practice
            </h2>
            <p className="mt-3 text-base sm:text-lg text-emerald-900 dark:text-cyan-300 leading-relaxed font-semibold">
              "{PERSONAL_INFO.problemSolvingStatement}"
            </p>
            <p className="mt-2 text-xs sm:text-sm text-zinc-700 dark:text-slate-200 font-medium">
              More than just using frameworks — cultivating deep understanding of computational complexity, logic, and verified implementations.
            </p>
          </div>

          {/* Two Competitive & Practice Hub Cards: LeetCode + Kaggle */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            
            {/* LeetCode Profile Card */}
            <div className="glass-card rounded-2xl p-6 transition-all duration-300 hover:border-emerald-400/60 shadow-xl flex flex-col justify-between group hover:scale-[1.01]">
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-black/80 border border-black/10 dark:border-emerald-500/40 flex items-center justify-center text-emerald-600 dark:text-cyan-300 shadow-md group-hover:border-emerald-400/60">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-zinc-950 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-cyan-300 transition-colors">
                        LeetCode
                      </h3>
                      <div className="text-xs font-mono text-emerald-700 dark:text-cyan-300 font-bold">
                        Handle: @brobruk
                      </div>
                    </div>
                  </div>

                  <a
                    href={PERSONAL_INFO.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-zinc-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-cyan-300 bg-black/5 dark:bg-white/5 hover:bg-emerald-500/10 transition-colors"
                    aria-label="View LeetCode profile"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-zinc-700 dark:text-slate-200 mb-4 leading-relaxed font-normal">
                  Active practice solving challenges across Data Structures & Algorithms, including Two Pointers, Sliding Window, Trees, Binary Search, Graphs, and Dynamic Programming.
                </p>

                <div className="space-y-1.5 mb-6 text-xs text-zinc-800 dark:text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-cyan-300" />
                    <span>Time and space complexity profiling (Big-O)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-cyan-300" />
                    <span>Clean Python and C++ implementations</span>
                  </div>
                </div>
              </div>

              <a
                href={PERSONAL_INFO.leetcode}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d-gradient inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-emerald-950 dark:text-white hover:text-white transition-all cursor-pointer shadow-md"
              >
                <span>Visit LeetCode Profile (@brobruk)</span>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-700 dark:text-cyan-300" />
              </a>
            </div>

            {/* Kaggle Profile Card */}
            <div className="glass-card rounded-2xl p-6 transition-all duration-300 hover:border-emerald-400/60 shadow-xl flex flex-col justify-between group hover:scale-[1.01]">
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-black/80 border border-black/10 dark:border-emerald-500/40 flex items-center justify-center text-emerald-600 dark:text-cyan-300 shadow-md group-hover:border-emerald-400/60">
                      <Binary className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-zinc-950 dark:text-white tracking-tight group-hover:text-emerald-600 dark:group-hover:text-cyan-300 transition-colors">
                        Kaggle
                      </h3>
                      <div className="text-xs font-mono text-emerald-700 dark:text-cyan-300 font-bold">
                        Handle: @brukeahmye
                      </div>
                    </div>
                  </div>

                  <a
                    href={PERSONAL_INFO.kaggle}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-lg text-zinc-700 dark:text-slate-300 hover:text-emerald-600 dark:hover:text-cyan-300 bg-black/5 dark:bg-white/5 hover:bg-emerald-500/10 transition-colors"
                    aria-label="View Kaggle profile"
                  >
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-zinc-700 dark:text-slate-200 mb-4 leading-relaxed font-normal">
                  Hands-on machine learning experiments, exploratory data analysis (EDA), predictive modeling with Scikit-learn and XGBoost, and notebook workflows.
                </p>

                <div className="space-y-1.5 mb-6 text-xs text-zinc-800 dark:text-slate-200">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-cyan-300" />
                    <span>Data preprocessing, imputation, and feature engineering</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 dark:text-cyan-300" />
                    <span>Model evaluation metrics and cross-validation</span>
                  </div>
                </div>
              </div>

              <a
                href={PERSONAL_INFO.kaggle}
                target="_blank"
                rel="noopener noreferrer"
                className="btn-3d-gradient inline-flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-xs font-bold text-emerald-950 dark:text-white hover:text-white transition-all cursor-pointer shadow-md"
              >
                <span>Visit Kaggle Profile (@brukeahmye)</span>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-700 dark:text-cyan-300" />
              </a>
            </div>

          </div>

          {/* Algorithmic & Problem Solving Foundations Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {domains.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.title}
                  className="glass-card rounded-xl p-5 hover:border-emerald-400/60 transition-all shadow-md group hover:scale-[1.02]"
                >
                  <div className="p-2 rounded-lg bg-white dark:bg-black/80 border border-black/10 dark:border-emerald-500/30 w-fit mb-3 group-hover:border-emerald-400/60 shadow-sm">
                    <Icon className={`w-4 h-4 ${item.color}`} />
                  </div>
                  <h4 className="text-sm font-extrabold text-zinc-950 dark:text-white mb-2 tracking-tight group-hover:text-emerald-600 dark:group-hover:text-cyan-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-xs text-zinc-700 dark:text-slate-300 leading-relaxed font-normal">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </SectionBorderFrame>
      </div>
    </section>
  );
}
