import { Project, ProjectCategory } from '../types';

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'ethio-football-digitals',
    title: 'Ethio Football Digitals — PitchSide',
    category: 'Full-Stack',
    secondaryCategories: ['AI / ML', 'AI Agents', '3D / Interactive', 'Research', 'Backend'],
    description: 'A football platform combining a player community, direct messaging, AI football assistant, match predictions, a private admin dashboard, and the original 5v5 football game.',
    longDescription: 'PitchSide evolves the original 5v5 arcade football project into a broader social and analytics platform. The public player portal includes community features, follow and message flows, AI football support, and a match prediction workflow, while a separate admin app handles private operations and verification.',
    technologies: ['React 19', 'TypeScript', 'Three.js', 'FastAPI', 'PostgreSQL', 'Neo4j', 'scikit-learn'],
    features: [
      'Player profiles, social feed, follow system, and community discovery',
      'Direct messaging between mutual-follow connections',
      'AI football assistant and stats questions with clear fallback behavior',
      'Match prediction workflow using trained historical football data',
      'Admin-only portal with role-based access and monitoring',
      'Original 3D 5v5 game preserved and playable'
    ],
    architectureSummary: 'Player frontend + admin frontend -> FastAPI services -> PostgreSQL and Neo4j, with local AI assistant and a separate match prediction model workflow.',
    githubUrl: 'https://github.com/123bruke/Ethio_Football_Digitals',
    featured: true,
    type: 'standard'
  },
  {
    id: 'omegaclaw',
    title: 'OmegaClaw — Local Multi-Agent AI System',
    category: 'AI Agents',
    secondaryCategories: ['AI / ML', 'Backend'],
    description: 'Production-oriented fully local AI agent platform built with LangGraph, LangChain, Ollama, ChromaDB, and FastAPI.',
    longDescription: 'OmegaClaw is an end-to-end local multi-agent architecture designed to run autonomous workflows completely on-premise without relying on external cloud LLM APIs. A centralized supervisor orchestrates research, writing, review, and memory retrieval tasks across specialized agent roles.',
    technologies: ['Python', 'LangGraph', 'LangChain', 'Ollama', 'FastAPI', 'ChromaDB', 'LLMs', 'Vector Memory'],
    features: [
      'Fully local AI architecture executing on consumer hardware via Ollama',
      'Supervisor-based dynamic task routing and intent classification',
      'Specialized Research, Writer, and Reviewer multi-agent collaboration',
      'Hybrid memory: Long-term ChromaDB vector storage + conversational window memory',
      'Production FastAPI REST interface with interactive OpenAPI/Swagger documentation',
      'Dedicated health check, state validation, and test suite'
    ],
    architectureSummary: 'Centralized Supervisor delegates to Research -> Writer -> Reviewer -> Vector Memory -> Synthesized Response',
    architectureNodes: [
      { id: 'user', label: 'User Query', role: 'Input Request', highlight: false },
      { id: 'supervisor', label: 'Supervisor Agent', role: 'Routing & Plan Decomposition', highlight: true },
      { id: 'research', label: 'Research Agent', role: 'Knowledge Extraction & Search', highlight: false },
      { id: 'writer', label: 'Writer Agent', role: 'Drafting & Content Synthesis', highlight: false },
      { id: 'reviewer', label: 'Reviewer Agent', role: 'Verification & Constraint Check', highlight: false },
      { id: 'memory', label: 'Memory Agent', role: 'ChromaDB Vector Retrieval & Persistence', highlight: false },
      { id: 'output', label: 'Final Response', role: 'Audited Solution', highlight: true },
    ],
    architectureFlow: [
      'User Query',
      'Supervisor Agent',
      'Research Agent',
      'Writer Agent',
      'Reviewer Agent',
      'Memory Agent',
      'Final Response'
    ],
    githubUrl: 'https://github.com/123bruke/Omegaclaw',
    featured: true,
    type: 'multi-agent'
  },
  {
    id: 'visionrag',
    title: 'VisionRAG — Multimodal Retrieval-Augmented Generation',
    category: 'RAG',
    secondaryCategories: ['AI / ML', 'Computer Vision'],
    description: 'Production-grade Multimodal RAG platform synthesizing grounded answers across technical diagrams, multi-column scientific PDFs, high-resolution imagery, and video streams.',
    longDescription: 'VisionRAG is an advanced multimodal retrieval-augmented generation platform capable of ingesting, parsing, grounding, and reasoning over complex visual documents. Features combine vision-language retrieval, structured document parsing, and answer synthesis for grounded outputs.',
    technologies: ['Python', 'FastAPI', 'ColPali', 'Vision LLMs', 'Multimodal Embeddings', 'LangChain', 'React', 'TypeScript', 'WebRTC', 'ChromaDB'],
    features: [
      'Retrieval over complex diagrams, PDFs, and high-resolution visual content',
      'Multimodal embeddings and vector search for grounded answers',
      'Source-aware generation with evidence tracing',
      'Interactive visual QA and document interaction workflows',
      'FastAPI pipeline for scale and reliability'
    ],
    architectureSummary: 'Document ingestion -> vision-aware chunking -> multimodal embedding -> retrieval + synthesis -> grounded answer output.',
    githubUrl: 'https://github.com/123bruke/VisionRAG',
    featured: true,
    type: 'knowledge-graph'
  },
  {
    id: 'moseb-ai-portal',
    title: 'Moseb AI-Powered Job Portal',
    category: 'AI Agents',
    secondaryCategories: ['Full-Stack', 'AI / ML'],
    description: 'Enterprise-scale AI-powered job matching platform leveraging intelligent agents for resume analysis, job recommendation, and candidate-employer alignment.',
    technologies: ['React 19', 'TypeScript', 'Python', 'LangGraph', 'FastAPI', 'PostgreSQL'],
    features: [
      'Candidate and employer job discovery flows',
      'AI-based resume and job alignment analysis',
      'Agentic recommendation and decision support',
      'Production-ready, role-aware matching workflow'
    ],
    githubUrl: 'https://github.com/123bruke/Moseb-AI-Portal',
    featured: true,
    type: 'react-agent'
  },
  {
    id: 'family-guest-house',
    title: 'Family Guest House Management System',
    category: 'Full-Stack',
    secondaryCategories: ['Backend'],
    description: 'Internal web application for managing guest-house operations: rooms, guests, reservations, stays, payments, expenses, and financial reports.',
    technologies: ['Python', 'FastAPI', 'PostgreSQL', 'Node.js', 'React'],
    features: [
      'Room and reservation management',
      'Guest stay and payment tracking',
      'Expense reporting and financial summaries',
      'Operations-focused internal dashboard'
    ],
    githubUrl: 'https://github.com/123bruke/Family-Guest-House',
    featured: true,
    type: 'standard'
  },
  {
    id: 'vendor-assessment-agent',
    title: 'Autonomous Vendor Assessment Agent',
    category: 'AI Agents',
    secondaryCategories: ['RAG', 'Full-Stack'],
    description: 'Production-style agentic web application that evaluates software vendor requests using a LangGraph ReAct workflow, policy retrieval, evidence validation, and deterministic decision logic.',
    technologies: ['Python', 'LangGraph', 'ChromaDB', 'RAG', 'FastAPI', 'React'],
    features: [
      'Policy-aware vendor evaluation workflow',
      'Evidence retrieval and validation pipeline',
      'Deterministic decision logic and structured output',
      'Automated test coverage and review support'
    ],
    githubUrl: 'https://github.com/123bruke/Autonomous-Vendor-Assessment-Agent',
    featured: true,
    type: 'standard'
  },
  {
    id: 'biocypher-knowledge-graph',
    title: 'BioCypher Knowledge Graph Research Project',
    category: 'Research',
    secondaryCategories: ['AI / ML', 'Backend'],
    description: 'Research-oriented engineering project integrating complex biomedical datasets into structured graph ontologies using BioCypher, Neo4j, and KGX workflows.',
    technologies: ['Python', 'BioCypher', 'Neo4j', 'Biomedical Data', 'Knowledge Graphs'],
    features: [
      'Data harmonization from biomedical sources',
      'Ontology-aware knowledge mapping',
      'Graph-based relationship modeling',
      'Research-grade data engineering pipeline'
    ],
    githubUrl: 'https://github.com/123bruke/BioCypher-Knowledge-Graph',
    featured: true,
    type: 'knowledge-graph'
  },
  {
    id: 'virtual-3d-chemistry-lab',
    title: 'Virtual 3D Chemistry Laboratory',
    category: '3D / Interactive',
    secondaryCategories: ['Full-Stack'],
    description: 'An interactive browser-based 3D chemistry laboratory designed for learning by doing, with physical equipment simulation and AI guidance.',
    technologies: ['React 19', 'TypeScript', 'Three.js', 'React Three Fiber', 'WebGL'],
    features: [
      'Interactive 3D equipment simulation',
      'Hands-on chemistry learning flow',
      'Browser-based lab experience',
      'AI-assisted educational interactions'
    ],
    githubUrl: 'https://github.com/123bruke/Virtual-3D-Chemistry-Lab',
    featured: true,
    type: '3d-lab'
  },
  {
    id: 'chatflow',
    title: 'ChatFlow — Real-Time Messaging Application',
    category: 'Full-Stack',
    secondaryCategories: ['AI / ML'],
    description: 'A responsive real-time messaging application built with React, TypeScript, Firebase Authentication, and Firestore.',
    technologies: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Firebase'],
    features: [
      'Real-time messaging flows',
      'Authentication and user sessions',
      'Responsive chat interfaces',
      'Firestore-backed real-time update handling'
    ],
    githubUrl: 'https://github.com/123bruke/ChatFlow',
    featured: true,
    type: 'realtime-chat'
  },
  {
    id: 'ai-career-coach',
    title: 'AI Career Coach — Multi-Agent System',
    category: 'AI Agents',
    secondaryCategories: ['AI / ML', 'Full-Stack'],
    description: 'Multi-agent career intelligence pipeline coordinating skill gap analysis, personalized roadmaps, resume auditing, and interview preparation.',
    technologies: ['Python', 'LangGraph', 'LangChain', 'Google Gemini', 'FastAPI', 'React'],
    features: [
      'Skill gap evaluation and recommendations',
      'Personalized roadmap generation',
      'Resume audit and interview prep support',
      'Multi-agent orchestration workflow'
    ],
    githubUrl: 'https://github.com/123bruke/AI-Career-Coach',
    featured: true,
    type: 'multi-agent'
  }
];

export const MORE_PROJECTS: Project[] = [
  {
    id: 'smart-ai-hospital',
    title: 'SMART AI Hospital',
    category: 'AI / ML',
    secondaryCategories: ['Full-Stack', 'Backend'],
    description: 'Intelligent healthcare management and clinical decision support system integrating patient records with diagnostic assistance.',
    technologies: ['Python', 'Machine Learning', 'FastAPI', 'React', 'PostgreSQL'],
    features: [
      'Automated patient triage and symptom evaluation',
      'Secure Electronic Health Records (EHR) management',
      'Clinical assistance module supporting preliminary decision making'
    ],
    githubUrl: 'https://github.com/123bruke',
    featured: false,
    type: 'standard'
  },
  {
    id: 'astu-ai-assistant',
    title: 'ASTU AI Assistant',
    category: 'RAG',
    secondaryCategories: ['AI Agents', 'Full-Stack'],
    description: 'Campus-specific RAG assistant trained on Adama Science and Technology University academic regulations, course curricula, and student guides.',
    technologies: ['Python', 'LangChain', 'ChromaDB', 'Vector Search', 'FastAPI', 'React'],
    features: [
      'Semantic document retrieval over university guidelines and syllabi',
      'Source-cited conversational responses with low hallucination rate',
      'Tailored for engineering students and academic inquiries'
    ],
    githubUrl: 'https://github.com/123bruke',
    featured: false,
    type: 'standard'
  },
  {
    id: 'photo-maths',
    title: 'Photo Maths',
    category: 'Computer Vision',
    secondaryCategories: ['AI / ML', 'Full-Stack'],
    description: 'Vision-based mathematical equation solver using OCR, LaTeX tokenization, and step-by-step computational logic.',
    technologies: ['Python', 'OpenCV', 'Computer Vision', 'SymPy', 'React Native / Web'],
    features: [
      'Image preprocessing and mathematical symbol segmentation',
      'LaTeX equation extraction and structural parsing',
      'Step-by-step algorithmic solution walkthrough'
    ],
    githubUrl: 'https://github.com/123bruke',
    featured: false,
    type: 'standard'
  },
  {
    id: 'smart-resume-checker',
    title: 'Smart Resume Checker',
    category: 'AI / ML',
    secondaryCategories: ['RAG', 'Full-Stack'],
    description: 'Automated resume analysis tool scoring keyword relevance, format readability, and job description alignment using embeddings.',
    technologies: ['Python', 'NLP', 'Vector Embeddings', 'FastAPI', 'Tailwind CSS'],
    features: [
      'Embedding-based cosine similarity against targeted job requisitions',
      'Action verb and quantitative metric density scoring',
      'Actionable recommendations for technical candidates'
    ],
    githubUrl: 'https://github.com/123bruke',
    featured: false,
    type: 'standard'
  },
  {
    id: 'moseb-ai',
    title: 'Moseb AI',
    category: 'AI / ML',
    secondaryCategories: ['Full-Stack'],
    description: 'Culturally-aware culinary and dietary intelligent assistant providing ingredient substitutions and nutrition optimization.',
    technologies: ['Python', 'LLMs', 'Prompt Engineering', 'React', 'Tailwind CSS'],
    features: [
      'Domain-specific knowledge integration for regional ingredients',
      'Dynamic recipe generation based on available pantry items',
      'Dietary constraint validation'
    ],
    githubUrl: 'https://github.com/123bruke',
    featured: false,
    type: 'standard'
  }
];

export const PROJECT_CATEGORIES: ProjectCategory[] = ['All', 'AI / ML', 'AI Agents', 'RAG', 'Full-Stack', 'Computer Vision', '3D / Interactive', 'Research', 'Backend'];

export const FEATURED_PROJECT_IDS = FEATURED_PROJECTS.map((project) => project.id);

export const PROJECT_COUNT = FEATURED_PROJECTS.length + MORE_PROJECTS.length;

export default FEATURED_PROJECTS;















































































































































































