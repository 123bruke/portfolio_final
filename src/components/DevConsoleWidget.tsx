import { useState, useRef, useEffect } from 'react';
import { Terminal, X, CornerDownLeft, Sparkles, Copy, Check, Minimize2, Maximize2 } from 'lucide-react';
import { PERSONAL_INFO } from '../data/personal';

interface DevConsoleWidgetProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenResume: () => void;
}

interface CommandHistoryItem {
  id: string;
  command: string;
  output: React.ReactNode;
  timestamp: string;
}

export default function DevConsoleWidget({ isOpen, onClose, onOpenResume }: DevConsoleWidgetProps) {
  const [input, setInput] = useState('');
  const [history, setHistory] = useState<CommandHistoryItem[]>([
    {
      id: 'init-1',
      command: 'sys.info',
      output: (
        <div className="space-y-1 text-xs">
          <div className="text-emerald-400 font-bold">Biruk Ahmye — AI/ML & Full-Stack Engineering Terminal v2.4</div>
          <div className="text-zinc-400">Environment: ASTU Engineering (2024 — 2028) • Addis Ababa, ET</div>
          <div className="text-zinc-300">Type <span className="text-cyan-300 font-bold">help</span> to list commands or click the quick action chips below.</div>
        </div>
      ),
      timestamp: '15:30:00'
    }
  ]);
  const [copied, setCopied] = useState(false);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const bottomRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
    }
  }, [isOpen]);

  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [history]);

  if (!isOpen) return null;

  const handleCommand = (cmdText: string) => {
    const trimmed = cmdText.trim().toLowerCase();
    if (!trimmed) return;

    const time = new Date().toLocaleTimeString();
    let response: React.ReactNode = null;

    switch (trimmed) {
      case 'help':
        response = (
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 text-xs py-1">
            <div><span className="text-emerald-400 font-bold">whoami</span> — Identity & ASTU engineering background</div>
            <div><span className="text-emerald-400 font-bold">skills</span> — Technical stack & AI agent frameworks</div>
            <div><span className="text-emerald-400 font-bold">projects</span> — Key production and research systems</div>
            <div><span className="text-emerald-400 font-bold">resume</span> — Open authentic printable PDF resume</div>
            <div><span className="text-emerald-400 font-bold">contact</span> — Email, phone, and direct links</div>
            <div><span className="text-emerald-400 font-bold">status</span> — Academic and internship availability</div>
            <div><span className="text-emerald-400 font-bold">clear</span> — Reset terminal output</div>
          </div>
        );
        break;

      case 'whoami':
      case 'bio':
      case 'about':
        response = (
          <div className="space-y-1 text-xs text-zinc-300">
            <p className="font-bold text-white">{PERSONAL_INFO.name} ({PERSONAL_INFO.headline})</p>
            <p className="text-zinc-400">{PERSONAL_INFO.heroTagline}</p>
            <p className="text-emerald-300">University: {PERSONAL_INFO.university} (Class of 2028)</p>
            <p className="text-zinc-400">Location: {PERSONAL_INFO.location}</p>
          </div>
        );
        break;

      case 'skills':
      case 'stack':
        response = (
          <div className="space-y-1.5 text-xs">
            <div className="text-emerald-300 font-bold">• AI & Agents: LangGraph, ChromaDB, Ollama, PyTorch, RAG, BioCypher</div>
            <div className="text-cyan-300 font-bold">• Full-Stack: React 19, TypeScript, FastAPI, Node.js, Tailwind CSS, PostgreSQL</div>
            <div className="text-zinc-300 font-bold">• Core: Data Structures & Algorithms, LeetCode problem solving, Python, C++</div>
          </div>
        );
        break;

      case 'projects':
        response = (
          <div className="space-y-1.5 text-xs text-zinc-300">
            <p><span className="text-emerald-400 font-bold">1. OmegaClaw</span> — Local on-premise Multi-Agent System (LangGraph + ChromaDB + FastAPI)</p>
            <p><span className="text-emerald-400 font-bold">2. Moseb Job Portal</span> — Enterprise AI agent candidate matching platform</p>
            <p><span className="text-emerald-400 font-bold">3. Vendor Assessment Agent</span> — 47 automated tests (100% pass) at iCog Labs</p>
            <p><span className="text-emerald-400 font-bold">4. BioCypher Knowledge Graph</span> — Biomedical ontology mapping with Neo4j</p>
            <p><span className="text-emerald-400 font-bold">5. 3D Chemistry Lab</span> — Browser simulation with AI experiment guidance</p>
          </div>
        );
        break;

      case 'resume':
        response = <div className="text-xs text-emerald-400 font-bold">Launching Resume Modal...</div>;
        setTimeout(() => onOpenResume(), 400);
        break;

      case 'contact':
        response = (
          <div className="space-y-1 text-xs">
            <div className="text-white">Email: <span className="text-emerald-400 font-mono font-bold">{PERSONAL_INFO.email}</span></div>
            <div className="text-white">Phone: <span className="text-emerald-400 font-mono font-bold">{PERSONAL_INFO.phone}</span></div>
            <div className="text-zinc-400">GitHub: {PERSONAL_INFO.github}</div>
            <div className="text-zinc-400">LinkedIn: {PERSONAL_INFO.linkedin}</div>
          </div>
        );
        break;

      case 'status':
        response = (
          <div className="space-y-1 text-xs text-zinc-300">
            <p className="text-emerald-400 font-bold">Status: OPEN for Software & AI Engineering Roles</p>
            <p>Academic Program: ASTU Engineering (2024 — 2028)</p>
            <p>Focus Areas: Multi-Agent AI systems, High-throughput Full-Stack web apps, RAG pipelines</p>
          </div>
        );
        break;

      case 'clear':
        setHistory([]);
        setInput('');
        return;

      default:
        response = (
          <div className="text-xs text-red-400">
            Command not recognized: <span className="font-bold">{cmdText}</span>. Type <span className="text-emerald-400 font-bold">help</span> to view available commands.
          </div>
        );
    }

    setHistory((prev) => [
      ...prev,
      {
        id: Math.random().toString(36).substring(7),
        command: cmdText,
        output: response,
        timestamp: time
      }
    ]);
    setInput('');
  };

  const copyContact = () => {
    navigator.clipboard.writeText(`${PERSONAL_INFO.name} <${PERSONAL_INFO.email}> - ${PERSONAL_INFO.phone}`);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div
      id="dev-console-overlay"
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        id="dev-console-window"
        className="relative w-full max-w-2xl rounded-2xl bg-zinc-950 border border-zinc-800 shadow-2xl overflow-hidden flex flex-col max-h-[85vh] text-left"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Titlebar */}
        <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800 select-none">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-1.5 mr-2">
              <span className="w-3 h-3 rounded-full bg-red-500/80 cursor-pointer" onClick={onClose} />
              <span className="w-3 h-3 rounded-full bg-yellow-500/80" />
              <span className="w-3 h-3 rounded-full bg-green-500/80" />
            </div>
            <Terminal className="w-4 h-4 text-emerald-400" />
            <span className="text-xs font-mono font-bold text-zinc-200">
              biruk@astu-node:~/portfolio$
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={copyContact}
              className="px-2 py-1 rounded text-[11px] font-mono font-medium bg-zinc-800 hover:bg-zinc-700 text-zinc-300 flex items-center gap-1 transition-colors"
              title="Copy Contact Info"
            >
              {copied ? <Check className="w-3 h-3 text-emerald-400" /> : <Copy className="w-3 h-3" />}
              <span>{copied ? 'Copied' : 'Contact'}</span>
            </button>
            <button
              onClick={onClose}
              className="p-1 rounded text-zinc-400 hover:text-white hover:bg-zinc-800 transition-colors"
            >
              <X className="w-4 h-4" />
            </button>
          </div>
        </div>

        {/* Quick Action Chips Bar */}
        <div className="px-4 py-2 bg-zinc-900/60 border-b border-zinc-800/80 flex flex-wrap items-center gap-1.5 text-[11px] font-mono">
          <span className="text-zinc-500 mr-1">Quick:</span>
          {['help', 'whoami', 'skills', 'projects', 'status', 'resume', 'contact'].map((cmd) => (
            <button
              key={cmd}
              onClick={() => handleCommand(cmd)}
              className="px-2 py-0.5 rounded bg-zinc-800 hover:bg-emerald-950/80 hover:text-emerald-300 hover:border-emerald-500/40 text-zinc-300 border border-zinc-700/60 transition-colors cursor-pointer"
            >
              {cmd}
            </button>
          ))}
          <button
            onClick={() => handleCommand('clear')}
            className="ml-auto text-zinc-500 hover:text-zinc-300 text-[10px]"
          >
            clear
          </button>
        </div>

        {/* Terminal Body */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4 font-mono text-xs text-zinc-200 bg-zinc-950/90">
          {history.map((item) => (
            <div key={item.id} className="space-y-1">
              <div className="flex items-center gap-2 text-zinc-400 text-[11px]">
                <span className="text-emerald-400 font-bold">biruk@astu:~$</span>
                <span className="text-white font-bold">{item.command}</span>
                <span className="text-[10px] text-zinc-600 ml-auto">{item.timestamp}</span>
              </div>
              <div className="pl-3 border-l-2 border-emerald-500/30 py-0.5">
                {item.output}
              </div>
            </div>
          ))}
          <div ref={bottomRef} />
        </div>

        {/* Prompt Input Line */}
        <form
          onSubmit={(e) => {
            e.preventDefault();
            handleCommand(input);
          }}
          className="flex items-center gap-2 px-4 py-3 bg-zinc-900 border-t border-zinc-800"
        >
          <span className="text-emerald-400 font-mono font-bold text-xs">biruk@astu:~$</span>
          <input
            ref={inputRef}
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Type 'help', 'skills', 'projects', 'resume'..."
            className="flex-1 bg-transparent border-none text-xs font-mono text-white placeholder:text-zinc-600 focus:outline-none"
          />
          <button
            type="submit"
            className="p-1 rounded bg-emerald-500 hover:bg-emerald-400 text-zinc-950 font-bold transition-colors cursor-pointer"
          >
            <CornerDownLeft className="w-3.5 h-3.5" />
          </button>
        </form>
      </div>
    </div>
  );
}
