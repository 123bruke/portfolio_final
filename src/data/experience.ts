import { TimelineEvent, ProcessStep, StackLayer } from '../types';

export const TIMELINE_EVENTS: TimelineEvent[] = [
  {
    title: 'Engineering Student',
    role: 'Undergraduate Engineering Program',
    organization: 'Adama Science and Technology University (ASTU)',
    period: 'Current',
    description: 'Pursuing rigorous engineering education while actively translating theoretical computation into real-world software and practical AI engineering systems.',
    highlights: [
      'Focusing on computational problem solving, data structures, and algorithms',
      'Building practical AI/ML systems and production-oriented software alongside academic coursework',
      'Active on competitive programming platforms and research initiatives'
    ],
    iconName: 'GraduationCap'
  },
  {
    title: 'AI Engineering & Research Experience',
    role: 'AI Engineering & Research Intern',
    organization: 'iCog Labs',
    period: 'Internship / Research Experience',
    description: 'Contributed to production-style agentic AI research, graph knowledge engineering, and autonomous evaluation workflows.',
    highlights: [
      'Developed LangGraph-driven ReAct autonomous agent workflows with policy verification and deterministic fallback paths',
      'Researched biomedical knowledge graph integration pipelines with BioCypher and Neo4j ontologies',
      'Engineered automated test suites achieving 100% pass rates across rigorous agent state checks'
    ],
    iconName: 'Cpu'
  },
  {
    title: 'Autonomous AI Engineering',
    role: 'Self-Directed Systems Builder',
    organization: 'Independent Engineering',
    period: 'Ongoing',
    description: 'Architecting local multi-agent systems and enterprise-style LLM applications using LangGraph, LangChain, ChromaDB, and FastAPI.',
    highlights: [
      'Created OmegaClaw, an autonomous multi-agent platform running completely local LLMs on Ollama',
      'Implemented RAG pipelines with vector memory retrieval, query reformulations, and hallucination safeguards',
      'Integrated deterministic tool calling, math calculators, and compliance verification engines'
    ],
    iconName: 'Bot'
  },
  {
    title: 'Full-Stack Software Development',
    role: 'Modern Web & Systems Developer',
    organization: 'Production Applications',
    period: 'Ongoing',
    description: 'Developing high-performance, interactive applications using React 19, TypeScript, Node.js, FastAPI, Three.js, and cloud backends.',
    highlights: [
      'Built a Virtual 3D Chemistry Lab using React Three Fiber, physical measurement simulation, and Google GenAI SDK',
      'Engineered ChatFlow, a sub-second real-time messaging application with Firebase Firestore and strict security rules',
      'Designed responsive, accessible web interfaces prioritizing mathematical typography and clean architectural boundaries'
    ],
    iconName: 'Layout'
  },
  {
    title: 'Algorithmic Problem Solving',
    role: 'Competitive Programmer & Continuous Learner',
    organization: 'LeetCode & Codeforces',
    period: 'Continuous',
    description: 'Systematically breaking complex computing problems into efficient, verified algorithms and clean implementations.',
    highlights: [
      'Regular practice solving Data Structures and Algorithms challenges on LeetCode (@brobruk)',
      'Participating in Kaggle competitions (@brukeahmye) exploring machine learning modeling and feature engineering',
      'Focusing on computational complexity, space/time optimization, and robust edge-case handling'
    ],
    iconName: 'Code'
  }
];

export const AI_BUILD_PROCESS: ProcessStep[] = [
  {
    stepNumber: '01',
    title: 'Problem Formulation',
    shortDesc: 'Deconstruct requirements into clear deterministic and generative boundaries',
    details: [
      'Identify whether the problem requires deterministic algorithms, RAG, single-shot LLM inference, or a multi-agent state machine.',
      'Define strict boundary conditions, success metrics, cost budgets, and latency constraints.'
    ],
    tools: ['Architecture Design', 'Requirement Boundary Mapping', 'Constraint Analysis'],
    iconName: 'Target'
  },
  {
    stepNumber: '02',
    title: 'Data & Knowledge Curation',
    shortDesc: 'Clean, chunk, and structure domain data into vector and relational stores',
    details: [
      'Ingest unstructured documents, domain schemas, or tabular datasets.',
      'Select optimal chunking strategies, semantic embedding models, and index into ChromaDB / vector memory.'
    ],
    tools: ['ChromaDB', 'Vector Embeddings', 'Document Ingestion', 'Semantic Chunking'],
    iconName: 'Database'
  },
  {
    stepNumber: '03',
    title: 'Model & Local Inference Selection',
    shortDesc: 'Choose appropriate foundation models or local offline models',
    details: [
      'Match task complexity to lightweight local LLMs (Ollama / Llama / Mistral) or cloud foundation models (Google Gemini).',
      'Enforce strict system prompts, JSON schemas, and structured outputs.'
    ],
    tools: ['Ollama (Local LLMs)', 'Google Gemini', 'Structured JSON Output', 'Prompt Engineering'],
    iconName: 'Cpu'
  },
  {
    stepNumber: '04',
    title: 'Retrieval & Tool Integration',
    shortDesc: 'Equip models with deterministic APIs, vector search, and safe calculators',
    details: [
      'Connect external tools via LangChain / LangGraph tool interfaces.',
      'Implement safe execution sandboxes, schema validation, and guardrails against prompt injection.'
    ],
    tools: ['Tool Interfaces', 'Safe Calculators', 'API Adapters', 'Vector Retrieval'],
    iconName: 'Wrench'
  },
  {
    stepNumber: '05',
    title: 'Agentic StateGraph Workflow',
    shortDesc: 'Orchestrate autonomous loops with supervisor routing and validation cycles',
    details: [
      'Model the decision flow as a state graph using LangGraph.',
      'Implement ReAct loops: Reason -> Act -> Observe -> Validate -> Update State, with clear termination conditions.'
    ],
    tools: ['LangGraph', 'StateGraph', 'ReAct Loops', 'Multi-Agent Supervision'],
    iconName: 'GitMerge'
  },
  {
    stepNumber: '06',
    title: 'Backend API & Verification',
    shortDesc: 'Wrap workflows in production FastAPI endpoints with automated test suites',
    details: [
      'Expose clean REST and Server-Sent Events (SSE) streaming endpoints.',
      'Write comprehensive unit and integration tests (pytest) verifying agent state transitions and tool outputs.'
    ],
    tools: ['FastAPI', 'SSE Streaming', 'Pytest (100% Pass Goals)', 'OpenAPI / Swagger'],
    iconName: 'Server'
  },
  {
    stepNumber: '07',
    title: 'User Interface & Interaction',
    shortDesc: 'Deliver reactive, modern user experiences for human-in-the-loop oversight',
    details: [
      'Build responsive frontends using React 19, TypeScript, and Tailwind CSS.',
      'Provide transparent execution logs, human approval triggers, and audit trails.'
    ],
    tools: ['React 19', 'TypeScript', 'Tailwind CSS', 'Audit Dashboards'],
    iconName: 'Layout'
  },
  {
    stepNumber: '08',
    title: 'Containerization & Deployment',
    shortDesc: 'Package services into reproducible environments ready for production',
    details: [
      'Containerize backend services and vector engines using Docker.',
      'Configure environment secrets, health-checks, and persistent storage volumes.'
    ],
    tools: ['Docker', 'Linux / WSL', 'Git & CI', 'Azure / Cloud Deployment'],
    iconName: 'Boxes'
  }
];

export const FULL_STACK_LAYERS: StackLayer[] = [
  {
    layerName: 'Frontend Interface',
    description: 'Modern, high-performance, accessible client-side applications with reactive state and 3D experiences.',
    technologies: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Three.js / R3F', 'Zustand', 'Motion'],
    iconName: 'Monitor'
  },
  {
    layerName: 'API & Backend Services',
    description: 'High-throughput asynchronous APIs, event streams, and deterministic business logic.',
    technologies: ['FastAPI (Python)', 'Flask', 'Node.js', 'Express', 'SSE Streaming', 'REST APIs', 'Pydantic'],
    iconName: 'Server'
  },
  {
    layerName: 'Data & Persistence Layer',
    description: 'Relational databases, real-time document stores, and specialized vector embeddings.',
    technologies: ['ChromaDB (Vector)', 'Firebase Firestore', 'PostgreSQL', 'SQLite / SQLAlchemy', 'Neo4j Graph', 'MongoDB', 'Supabase'],
    iconName: 'Database'
  },
  {
    layerName: 'AI & Agent Orchestration',
    description: 'Multi-agent frameworks, local LLM execution, retrieval pipelines, and reasoning loops.',
    technologies: ['LangGraph StateGraph', 'LangChain', 'Ollama (Local LLMs)', 'Google Gemini SDK', 'RAG Pipelines', 'ReAct Loops'],
    iconName: 'Cpu'
  },
  {
    layerName: 'DevOps & Tooling',
    description: 'Reproducible containerization, version control, automated testing, and development environments.',
    technologies: ['Docker', 'Git & GitHub', 'Pytest (Automated Testing)', 'Linux / WSL', 'VS Code & Cursor', 'Azure'],
    iconName: 'Layers'
  }
];
