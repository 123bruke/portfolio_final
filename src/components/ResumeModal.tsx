import { useEffect, useState } from 'react';
import { 
  X, 
  Printer, 
  Download, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  FileText,
  Github, 
  Linkedin, 
  GraduationCap
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/personal';

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  const [zoomLevel, setZoomLevel] = useState(100);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    if (isOpen) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 15, 145));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 15, 75));
  };

  const handleResetZoom = () => {
    setZoomLevel(100);
  };

  return (
    <div
      id="resume-modal-overlay"
      className="fixed inset-0 z-50 flex flex-col items-center bg-black/90 backdrop-blur-md overflow-hidden text-black transition-opacity duration-300"
      onClick={onClose}
    >
      {/* Realistic PDF Reader Toolbar */}
      <div
        id="resume-modal-toolbar"
        className="w-full bg-zinc-950 border-b border-white/10 px-4 sm:px-6 py-2.5 flex items-center justify-between z-10 shadow-lg text-slate-200"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Left: Document Info */}
        <div className="flex items-center gap-3">
          <div className="p-1.5 rounded bg-emerald-500/20 text-emerald-400">
            <FileText className="w-4 h-4" />
          </div>
          <div>
            <div className="text-xs sm:text-sm font-medium text-white flex items-center gap-2">
              <span>Biruk_Ahmye_Resume.pdf</span>
              <span className="hidden sm:inline-block px-1.5 py-0.5 rounded text-[10px] bg-zinc-800 text-slate-300 font-mono">
                1 / 1
              </span>
            </div>
            <div className="text-[10px] text-slate-400 font-mono hidden sm:block">
              PDF Document • Standard A4 Format
            </div>
          </div>
        </div>

        {/* Center: PDF Zoom Controls */}
        <div className="hidden md:flex items-center gap-1.5 bg-zinc-900 px-2 py-1 rounded-lg border border-zinc-700">
          <button
            type="button"
            onClick={handleZoomOut}
            className="p-1 text-slate-300 hover:text-white hover:bg-zinc-800 rounded transition-colors"
            title="Zoom Out"
          >
            <ZoomOut className="w-3.5 h-3.5" />
          </button>
          <span className="text-xs font-mono text-emerald-400 px-2 min-w-[3rem] text-center">
            {zoomLevel}%
          </span>
          <button
            type="button"
            onClick={handleZoomIn}
            className="p-1 text-slate-300 hover:text-white hover:bg-zinc-800 rounded transition-colors"
            title="Zoom In"
          >
            <ZoomIn className="w-3.5 h-3.5" />
          </button>
          <button
            type="button"
            onClick={handleResetZoom}
            className="p-1 text-slate-400 hover:text-slate-200 rounded transition-colors ml-1"
            title="Reset Zoom"
          >
            <RotateCcw className="w-3 h-3" />
          </button>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={handlePrint}
            className="btn-3d-gradient inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-bold text-emerald-950 hover:text-white shadow-md transition-colors cursor-pointer"
            title="Print or Save as PDF"
          >
            <Printer className="w-3.5 h-3.5" />
            <span className="hidden sm:inline">Print / Save PDF</span>
            <span className="sm:hidden">Print</span>
          </button>

          <button
            type="button"
            onClick={handlePrint}
            className="btn-3d-transparent inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-medium text-slate-200 hover:text-emerald-400 transition-colors cursor-pointer"
            title="Download PDF"
          >
            <Download className="w-3.5 h-3.5 text-emerald-400" />
            <span className="hidden sm:inline">Download</span>
          </button>

          <button
            type="button"
            onClick={onClose}
            className="btn-3d-transparent p-1.5 ml-1 rounded-xl text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close resume modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* PDF Viewport Scroll Area */}
      <div 
        className="w-full flex-1 overflow-y-auto overflow-x-hidden p-4 sm:p-8 flex justify-center items-start"
        onClick={onClose}
      >
        {/* Authentic White Papered PDF Sheet */}
        <div
          id="resume-white-paper"
          className="relative w-full max-w-3xl bg-white text-black rounded-sm shadow-2xl p-8 sm:p-14 my-4 font-sans text-left transition-transform duration-200 origin-top ring-1 ring-black/10"
          style={{ transform: `scale(${zoomLevel / 100})` }}
          onClick={(e) => e.stopPropagation()}
        >
          {/* Top Decorative Emerald/Green Strip */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-600 via-emerald-500 to-black" />

          {/* Header Section */}
          <div className="border-b-2 border-black pb-5 mb-6">
            <div className="flex flex-col sm:flex-row sm:items-baseline sm:justify-between gap-2">
              <div>
                <h1 className="text-3xl sm:text-4xl font-black text-black tracking-tight font-serif uppercase">
                  {PERSONAL_INFO.name}
                </h1>
                <p className="text-xs sm:text-sm font-bold text-emerald-700 tracking-wider uppercase mt-1">
                  Full-Stack Developer • AI/ML Engineer
                </p>
              </div>
              <div className="text-[11px] text-black text-left sm:text-right font-medium space-y-0.5">
                <div>Addis Ababa / Adama, Ethiopia</div>
                <div className="font-mono text-emerald-700 font-semibold">{PERSONAL_INFO.email}</div>
                <div>{PERSONAL_INFO.phone}</div>
              </div>
            </div>

            {/* Links line */}
            <div className="flex flex-wrap items-center gap-4 mt-3 text-[11px] text-black font-mono pt-2 border-t border-black/20">
              <a
                href={PERSONAL_INFO.github}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-emerald-700"
              >
                <Github className="w-3 h-3 text-black" />
                github.com/123bruke
              </a>
              <a
                href={PERSONAL_INFO.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1 hover:text-emerald-700"
              >
                <Linkedin className="w-3 h-3 text-emerald-700" />
                linkedin.com/in/biruk-ahmye
              </a>
              <span className="flex items-center gap-1 text-black">
                <GraduationCap className="w-3 h-3 text-black" />
                ASTU Engineering (2024 — 2028)
              </span>
            </div>
          </div>

          {/* Professional Summary */}
          <div className="mb-6">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-black pb-1 border-b border-black/20 mb-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
              Professional Summary
            </h2>
            <p className="text-xs leading-relaxed text-black">
              Results-driven Engineering student at <strong>Adama Science and Technology University (ASTU, 2024 — 2028)</strong> specializing in full-stack web architectures, practical machine learning systems, and intelligent AI agents. Proven expertise in multi-agent orchestration, vector databases, and production-grade AI workflows. Combining academic rigor with hands-on engineering to solve complex problems.
            </p>
          </div>

          {/* Education */}
          <div className="mb-6">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-black pb-1 border-b border-black/20 mb-2.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
              Education
            </h2>
            <div className="flex justify-between items-baseline">
              <div>
                <h3 className="text-sm font-bold text-black">
                  Adama Science and Technology University (ASTU)
                </h3>
                <p className="text-xs text-black font-medium">
                  Bachelor of Science in Engineering / Computer Software
                </p>
              </div>
              <div className="text-right">
                <span className="text-xs font-bold text-black font-mono">2024 — Expected 2028</span>
              </div>
            </div>
            <p className="text-[11px] text-black mt-1">
              <strong>Core Coursework:</strong> Data Structures & Algorithms, Object-Oriented Design, Operating Systems, Database Management Systems, Machine Learning Foundations, Computer Networks, Software Engineering
            </p>
          </div>

          {/* Technical Skills */}
          <div className="mb-6">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-black pb-1 border-b border-black/20 mb-2.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
              Technical Core Competencies
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-y-1.5 gap-x-4 text-xs text-black">
              <div>
                <strong className="text-black">Languages:</strong> Python, TypeScript, JavaScript (ES6+), C++, SQL, HTML5/CSS3
              </div>
              <div>
                <strong className="text-black">AI / ML:</strong> PyTorch, Scikit-Learn, LangChain, LangGraph, ChromaDB, Hugging Face
              </div>
              <div>
                <strong className="text-black">Frontend:</strong> React 18, Next.js, Tailwind CSS, Responsive Design, State Management
              </div>
              <div>
                <strong className="text-black">Backend & APIs:</strong> FastAPI, Node.js, Express, RESTful APIs, WebSockets
              </div>
              <div>
                <strong className="text-black">Databases:</strong> PostgreSQL, MongoDB, Redis, Vector Databases, SQLite
              </div>
              <div>
                <strong className="text-black">DevOps & Tools:</strong> Docker, Git & GitHub, Linux/Bash, Postman, Jest, CI/CD Actions
              </div>
            </div>
          </div>

          {/* Key Projects */}
          <div className="mb-6">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-black pb-1 border-b border-black/20 mb-3 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
              Featured Technical Projects
            </h2>

            <div className="space-y-3.5">
              {/* Project 1 */}
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs font-bold text-black">
                    Autonomous Vendor Evaluation System
                  </h3>
                  <span className="text-[10px] font-mono text-black">LangGraph • ChromaDB • Python • FastAPI</span>
                </div>
                <ul className="list-disc list-outside ml-4 mt-1 text-[11px] text-black space-y-0.5">
                  <li>Built stateful multi-agent system coordinating automated vendor risk evaluation and audit reports.</li>
                  <li>Integrated ChromaDB vector search with sub-50ms query latency and 47/47 passing verification tests.</li>
                </ul>
              </div>

              {/* Project 2 */}
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs font-bold text-black">
                    Biomedical Knowledge Graph Engineering
                  </h3>
                  <span className="text-[10px] font-mono text-black">BioCypher • Neo4j • Python • Ontologies</span>
                </div>
                <ul className="list-disc list-outside ml-4 mt-1 text-[11px] text-black space-y-0.5">
                  <li>Architected biomedical data pipelines harmonizing gene, disease, and compound knowledge representations.</li>
                  <li>Standardized multi-source data ingestion into validated Neo4j graph nodes and relationships.</li>
                </ul>
              </div>

              {/* Project 3 */}
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs font-bold text-black">
                    Full-Stack Interactive 3D & AI Web Application
                  </h3>
                  <span className="text-[10px] font-mono text-black">React • TypeScript • Tailwind CSS • Three.js</span>
                </div>
                <ul className="list-disc list-outside ml-4 mt-1 text-[11px] text-black space-y-0.5">
                  <li>Designed responsive, high-performance web applications with 3D canvas rendering and interactive states.</li>
                  <li>Delivered modular, accessible UI components with full support for light and night color themes.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Practical Experience & Leadership */}
          <div className="mb-6">
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-black pb-1 border-b border-black/20 mb-2.5 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
              Experience & Academic Practice
            </h2>

            <div className="space-y-2.5">
              <div>
                <div className="flex justify-between items-baseline">
                  <h3 className="text-xs font-bold text-black">
                    AI Engineering & Research Intern — iCog Labs
                  </h3>
                  <span className="text-[10px] font-mono text-black">Internship / Research</span>
                </div>
                <p className="text-[11px] font-medium text-black">Addis Ababa, ET</p>
                <ul className="list-disc list-outside ml-4 mt-1 text-[11px] text-black space-y-0.5">
                  <li>Developed agentic workflows using LangGraph ReAct StateGraph and ChromaDB vector retrieval.</li>
                  <li>Researched biomedical knowledge pipelines with BioCypher and Neo4j schemas.</li>
                  <li>Authored automated test suites maintaining 100% pass rate across 47 validation tests.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Certifications & Competitions */}
          <div>
            <h2 className="text-xs font-extrabold uppercase tracking-widest text-black pb-1 border-b border-black/20 mb-2 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 bg-emerald-600 rounded-full" />
              Problem Solving Profiles
            </h2>
            <div className="flex flex-wrap items-center justify-between text-xs text-black gap-2">
              <div>
                <strong>LeetCode (@brobruk):</strong> Data structures, graph algorithms, and dynamic programming
              </div>
              <div className="font-mono text-[11px] text-black">
                <strong>Kaggle (@brukeahmye):</strong> ML workflows and predictive modeling
              </div>
            </div>
          </div>

          {/* Footer of the White Paper */}
          <div className="mt-8 pt-3 border-t border-black/20 text-center text-[10px] text-black/60 font-mono flex items-center justify-between">
            <span>Biruk Ahmye — Technical Curriculum Vitae</span>
            <span>References and verification available upon request</span>
          </div>

        </div>
      </div>
    </div>
  );
}
