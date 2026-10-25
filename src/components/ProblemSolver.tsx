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
      icon: Binary
    },
    {
      title: 'Algorithmic Thinking',
      description: 'Systematic problem deconstruction, boundary case detection, inductive formulation, and recursive decomposition.',
      icon: Workflow
    },
    {
      title: 'Debugging & State Tracing',
      description: 'Isolating root causes through deterministic reproduction, invariant assertion, and systematic logging.',
      icon: Bug
    },
    {
      title: 'Performance Optimization',
      description: 'Minimizing algorithmic overhead, avoiding redundant computation, and optimizing resource bottlenecks.',
      icon: TrendingUp
    }
  ];

  return (
    <section id="problem-solving" className="py-10 scroll-mt-24 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionBorderFrame>
          {/* Section Header */}
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-zinc-100 border border-zinc-300 text-xs font-mono text-black font-bold mb-3 shadow-2xs">
              <Terminal className="w-3.5 h-3.5 text-black" />
              <span>07 // PROBLEM SOLVING</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-black">
              Problem Solver & Algorithmic Practice
            </h2>
            <p className="mt-2 text-base sm:text-lg text-black leading-relaxed font-bold">
              "{PERSONAL_INFO.problemSolvingStatement}"
            </p>
            <p className="mt-1 text-xs sm:text-sm text-zinc-700 font-normal">
              More than just utilizing pre-built packages — cultivating deep understanding of computational complexity, logic, and verified implementations.
            </p>
          </div>

          {/* Two Competitive Practice Cards: LeetCode + Kaggle */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mb-8">
            
            {/* LeetCode Profile Card */}
            <div className="bento-card p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-black">
                      <Code2 className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-black tracking-tight">
                        LeetCode Practice
                      </h3>
                      <div className="text-xs font-mono text-zinc-700 font-bold">
                        Handle: @brobruk
                      </div>
                    </div>
                  </div>

                  <a
                    href={PERSONAL_INFO.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary p-2 rounded-lg"
                    aria-label="View LeetCode profile"
                  >
                    <ArrowUpRight className="w-4 h-4 text-black" />
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-zinc-800 mb-4 leading-relaxed font-normal">
                  Active algorithmic problem solving across Arrays, Two Pointers, Sliding Window, Trees, Graphs, Binary Search, and Dynamic Programming.
                </p>

                <div className="space-y-1.5 mb-6 text-xs text-zinc-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0" />
                    <span>Focus on time & space complexity optimization (Big-O analysis)</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0" />
                    <span>Systematic edge case validation and inductive proof checks</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-200 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-600 font-semibold">DSA Engineering Focus</span>
                <a
                  href={PERSONAL_INFO.leetcode}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-black hover:underline"
                >
                  <span>Open LeetCode Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

            {/* Kaggle Profile Card */}
            <div className="bento-card p-6 flex flex-col justify-between">
              <div>
                <div className="flex items-start justify-between gap-4 mb-4">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-zinc-100 border border-zinc-200 flex items-center justify-center text-black">
                      <Binary className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-extrabold text-black tracking-tight">
                        Kaggle & Machine Learning
                      </h3>
                      <div className="text-xs font-mono text-zinc-700 font-bold">
                        Handle: @brukeahmye
                      </div>
                    </div>
                  </div>

                  <a
                    href={PERSONAL_INFO.kaggle}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary p-2 rounded-lg"
                    aria-label="View Kaggle profile"
                  >
                    <ArrowUpRight className="w-4 h-4 text-black" />
                  </a>
                </div>

                <p className="text-xs sm:text-sm text-zinc-800 mb-4 leading-relaxed font-normal">
                  Hands-on machine learning experimentation: Exploratory Data Analysis (EDA), feature engineering, classification, regression, and model evaluation metrics.
                </p>

                <div className="space-y-1.5 mb-6 text-xs text-zinc-800">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0" />
                    <span>Applied ML with Scikit-learn, PyTorch, and Pandas</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-black shrink-0" />
                    <span>Real-world datasets, metric tuning & model validation</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 border-t border-zinc-200 flex items-center justify-between">
                <span className="text-xs font-mono text-zinc-600 font-semibold">Data & ML Experiments</span>
                <a
                  href={PERSONAL_INFO.kaggle}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-black hover:underline"
                >
                  <span>Open Kaggle Profile</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>
            </div>

          </div>

          {/* 4-Column Bento Grid for Problem Solving Methodology */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {domains.map((dom) => {
              const Icon = dom.icon;
              return (
                <div
                  key={dom.title}
                  className="bento-card p-4.5 flex flex-col justify-between"
                >
                  <div>
                    <div className="p-2 rounded-lg bg-zinc-100 border border-zinc-200 w-fit mb-3 text-black">
                      <Icon className="w-4 h-4" />
                    </div>
                    <h4 className="text-sm font-bold text-black mb-1.5">
                      {dom.title}
                    </h4>
                    <p className="text-xs text-zinc-700 leading-relaxed font-normal">
                      {dom.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </SectionBorderFrame>
      </div>
    </section>
  );
}
