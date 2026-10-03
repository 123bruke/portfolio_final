import { Project, ProjectCategory } from '../types';

export const FEATURED_PROJECTS: Project[] = [
  {
    id: 'omegaclaw',
    title: 'OmegaClaw — Local Multi-Agent AI System',
    category: 'AI Agents',
    secondaryCategories: ['AI / ML', 'Backend'],
    description: 'Production-oriented fully local AI agent platform built with LangGraph, LangChain, Ollama, ChromaDB, and FastAPI.',
    longDescription: 'OmegaClaw is an end-to-end local multi-agent architecture designed to run autonomous workflows completely on-premise without relying on external cloud LLM APIs. A centralized[...]',
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
    id: 'moseb-job-portal',
    title: 'Moseb AI-Powered Job Portal',
    category: 'AI Agents',
    secondaryCategories: ['Full-Stack', 'AI / ML'],
    description: 'Enterprise-scale AI-powered job matching platform leveraging intelligent agents for resume analysis, job recommendation, and candidate-employer alignment.',
    longDescription: 'A comprehensive job portal combining AI agents, machine learning, and full-stack architecture to revolutionize job matching. Implements multi-agent orchestration for candidate skill analysis, job requirement parsing, intelligent matching algorithms, and real-time notifications. Features include recruiter dashboards, candidate portfolios, AI-driven recommendation engines, and interview scheduling automation.',
    technologies: ['React 19', 'TypeScript', 'Python', 'LangGraph', 'FastAPI', 'Firebase', 'Tailwind CSS', 'Lucide React', 'LLMs', 'Vector Embeddings', 'Zustand'],
    features: [
      'Multi-agent AI orchestration for intelligent job matching and candidate ranking',
      'Resume parsing with skill extraction and proficiency level detection',
      'Dynamic job requirement analysis with semantic understanding',
      'Candidate recommendation engine powered by vector embeddings',
      'Real-time job alerts and notification system with subscriber management',
      'Recruiter dashboard with applicant tracking and filtering capabilities',
      'Candidate portfolio showcase with skill endorsements and project links',
      'Interview scheduling automation with calendar integration',
      'AI-powered interview preparation assistant with mock questions',
      'Salary estimation engine based on market data and skill levels',
      'Search optimization with advanced filtering and faceted navigation'
    ],
    architectureSummary: 'Frontend Portal -> AI Agent Orchestrator -> Resume/Job Processors -> Vector Database -> Matching Engine -> Recruiter Dashboard',
    architectureNodes: [
      { id: 'candidate', label: 'Candidate Portal', role: 'Profile & Job Search Interface', highlight: false },
      { id: 'recruiter', label: 'Recruiter Dashboard', role: 'Applicant Tracking & Management', highlight: false },
      { id: 'orchestrator', label: 'Agent Orchestrator', role: 'Multi-Agent Coordination', highlight: true },
      { id: 'resume-agent', label: 'Resume Processor', role: 'Skill Extraction & Parsing', highlight: false },
      { id: 'job-agent', label: 'Job Analyzer', role: 'Requirement Parsing & Classification', highlight: false },
      { id: 'match-agent', label: 'Matching Engine', role: 'Intelligent Job-Candidate Pairing', highlight: true },
      { id: 'vector-db', label: 'Vector Database', role: 'Skill & Requirement Embeddings', highlight: false },
      { id: 'recommendations', label: 'Recommendations', role: 'Ranked Job & Candidate Matches', highlight: true }
    ],
    architectureFlow: [
      'Candidate Portal',
      'Resume Upload',
      'Resume Processor',
      'Vector Database',
      'Matching Engine',
      'Job Recommendations',
      'Real-time Alerts'
    ],
    testMetric: 'Integrated testing across AI agents, API endpoints, and frontend components with automated test pipelines.',
    githubUrl: 'https://github.com/123bruke/Moseb_job_portal',
    featured: true,
    type: 'multi-agent'
  },
  {
    id: 'icog-vendor-agent',
    title: 'Autonomous Vendor Assessment Agent',
    category: 'AI Agents',
    secondaryCategories: ['RAG', 'Backend', 'AI / ML'],
    description: 'Production-style agentic web application that evaluates software vendor requests using a LangGraph ReAct workflow, policy retrieval, evidence validation, deterministic decision l[...]',
    longDescription: 'Built as a comprehensive vendor evaluation engine combining agentic reasoning with strict corporate governance. Employs a StateGraph-powered ReAct execution loop that retriev[...]',
    technologies: ['Python', 'LangGraph', 'ChromaDB', 'RAG', 'SQLite', 'SQLAlchemy', 'Flask', 'Gemini', 'pytest'],
    testMetric: '47 automated tests with 100% passing according to the project documentation.',
    features: [
      'Stateful ReAct agent loop implementing Reason -> Act -> Observe -> Validate -> Update State',
      'LangGraph StateGraph orchestration with structured retry and fallback paths',
      'ChromaDB vector retrieval for institutional policy checking and compliance rules',
      'Evidence freshness checking, conflict detection, and duplicate-action prevention',
      'Hardened security against prompt injection in untrusted vendor documents',
      'SSE-driven real-time execution dashboard and deterministic audit trail',
      '100% automated test pass rate across 47 comprehensive unit and integration tests'
    ],
    architectureSummary: 'ReAct agent loop: Reason -> Act -> Observe -> Validate -> Update State -> Final Decision',
    architectureNodes: [
      { id: 'reason', label: 'REASON', role: 'Evaluate request against company policies', highlight: true },
      { id: 'act', label: 'ACT', role: 'Invoke vector search, risk lookup, or math tools', highlight: false },
      { id: 'observe', label: 'OBSERVE', role: 'Ingest tool output & check evidence validity', highlight: false },
      { id: 'validate', label: 'VALIDATE', role: 'Enforce security, freshness & conflict checks', highlight: true },
      { id: 'state', label: 'UPDATE STATE', role: 'Synchronize audit log & state transitions', highlight: false },
      { id: 'decision', label: 'DECISION', role: 'Approve, Reject, or Escalate with Audit Trail', highlight: true }
    ],
    architectureFlow: [
      'REASON',
      'ACT',
      'OBSERVE',
      'VALIDATE',
      'UPDATE STATE',
      'CONTINUE / STOP'
    ],
    githubUrl: 'https://github.com/123bruke/icog_vendor/tree/main/vendor-assessment-agent',
    featured: true,
    type: 'react-agent'
  },
  {
    id: 'biocypher-research',
    title: 'BioCypher Knowledge Graph Research Project',
    category: 'Research',
    secondaryCategories: ['AI / ML'],
    description: 'Research-oriented engineering project integrating complex biomedical datasets into structured graph ontologies using BioCypher, Neo4j, and KGX workflows.',
    longDescription: 'Focuses on the engineering challenges of biomedical knowledge representation. Combines heterogeneous data sources into a unified knowledge graph schema, mapping entities and [...]',
    technologies: ['Python', 'BioCypher', 'Neo4j', 'Biomedical Data', 'Ontologies', 'KGX Workflows', 'MORK', 'Graph Algorithms'],
    features: [
      'Declarative schema mapping linking biomedical concepts with standard ontologies',
      'Entity extraction and relational normalization pipelines',
      'Neo4j graph database integration for multi-hop graph querying',
      'KGX (Knowledge Graph Exchange) data pipeline harmonization',
      'Scalable node and relationship serialization for large-scale biomedical graphs'
    ],
    architectureSummary: 'Biomedical Source Data -> Ontology Mapping -> BioCypher Pipeline -> Neo4j Graph Network',
    architectureNodes: [
      { id: 'bio-data', label: 'Biomedical Datasets', role: 'Genes, Diseases, Drugs, Pathways', highlight: false },
      { id: 'ontology', label: 'Ontology Mappings', role: 'Standardized Semantic Vocabularies', highlight: true },
      { id: 'biocypher', label: 'BioCypher Adapter', role: 'Extraction & Relational Standardization', highlight: true },
      { id: 'neo4j', label: 'Neo4j Graph Store', role: 'High-Performance Graph Relationships', highlight: true },
      { id: 'query', label: 'Knowledge Discovery', role: 'Multi-Hop Query & Relational Reasoning', highlight: false }
    ],
    githubUrl: 'https://github.com/123bruke/biocypher_intern_project',
    featured: true,
    type: 'knowledge-graph'
  },
  {
    id: '3d-chemistry-lab',
    title: 'Virtual 3D Chemistry Laboratory',
    category: '3D / Interactive',
    secondaryCategories: ['Full-Stack'],
    description: 'An interactive browser-based 3D chemistry laboratory designed for learning by doing, with physical equipment simulation and AI guidance.',
    longDescription: 'A modern web-based simulation environment that gives students hands-on lab experience directly in their browser. Implements accurate physics-based liquid transfers, digital [...]',
    technologies: ['React 19', 'TypeScript', 'Three.js', 'React Three Fiber', 'Zustand', 'Tailwind CSS', 'Vite', 'Express', 'Google GenAI SDK'],
    features: [
      'Interactive 3D laboratory scene built with React Three Fiber and Three.js',
      'Apparatus manipulation: Digital balance with real-time taring and weighing',
      'Graduated cylinder liquid transfer simulation with volume tracking',
      'Deterministic density and mass calculation validation logic',
      'Guided experiment workflow with reactive state management via Zustand',
      'Dynamic laboratory lighting, heating effects, and camera angle controls',
      'Integrated AI experiment assistant powered by Google GenAI SDK'
    ],
    architectureSummary: 'R3F Canvas -> Zustand State Machine -> Physics & Measurement Calculations -> AI Lab Assistant',
    githubUrl: 'https://github.com/123bruke/3d_labs',
    featured: true,
    type: '3d-lab'
  },
  {
    id: 'chatflow-app',
    title: 'ChatFlow — Real-Time Messaging Application',
    category: 'Full-Stack',
    secondaryCategories: ['Backend'],
    description: 'A responsive real-time messaging application built with React, TypeScript, Firebase Authentication, and Firestore.',
    longDescription: 'Engineered for smooth communication with high operational reliability. Features instant one-to-one messaging, live presence indicators (online/offline/last seen), read recei[...]',
    technologies: ['React 19', 'TypeScript', 'Vite', 'Tailwind CSS', 'Firebase', 'Firestore', 'Motion', 'Lucide React'],
    features: [
      'Sub-second real-time messaging driven by Firestore snapshot listeners',
      'Multi-provider Firebase Auth (Google OAuth, Email/Password, redirect fallbacks)',
      'Real-time user presence tracking (online state, offline detection, last active timestamp)',
      'Granular read receipts, unread badges, and optimistic message delivery',
      'Rich media messaging with image uploads and document attachments',
      'Dynamic user search and profile configuration',
      'Comprehensive, audited Firestore security rules for strict data isolation'
    ],
    architectureSummary: 'React Client -> Firebase Auth -> Firestore Realtime Listeners -> Secure Data Rules',
    githubUrl: 'https://github.com/123bruke/chat_app',
    featured: true,
    type: 'realtime-chat'
  },
  {
    id: 'ai-career-coach',
    title: 'AI Career Coach — Multi-Agent System',
    category: 'AI Agents',
    secondaryCategories: ['AI / ML'],
    description: 'Multi-agent career intelligence pipeline coordinating skill gap analysis, personalized roadmaps, resume auditing, and interview preparation.',
    longDescription: 'Leverages LangGraph and Google Gemini to assemble a team of coordinated AI specialists. A master supervisor delegates tasks to dedicated sub-agents, each focused strictly on[...]',
    technologies: ['Python', 'LangGraph', 'LangChain', 'Google Gemini', 'Multi-Agent Architecture'],
    features: [
      'Dedicated multi-agent pipeline coordinated by a centralized Supervisor agent',
      'Deep skill analysis mapping candidate strengths and missing competencies',
      'Tailored career recommendations aligned with current market demand',
      'Step-by-step personalized learning roadmaps with curated milestones',
      'Targeted resume review identifying impact gaps and syntax improvements',
      'Simulated technical interview preparation with evaluative feedback loops'
    ],
    architectureSummary: 'Supervisor -> Skill Analysis -> Career Recommender -> Roadmap -> Resume Review -> Interview Prep -> Final Report',
    architectureNodes: [
      { id: 'cc-skills', label: 'Skill Analysis', role: 'Extract core competencies & identify gaps', highlight: false },
      { id: 'cc-rec', label: 'Career Recommendations', role: 'Role alignment & trajectory planning', highlight: false },
      { id: 'cc-roadmap', label: 'Learning Roadmap', role: 'Phased milestones & resource curation', highlight: true },
      { id: 'cc-resume', label: 'Resume Review', role: 'Impact phrasing & ATS optimization', highlight: false },
      { id: 'cc-interview', label: 'Interview Prep', role: 'Domain-specific question simulation', highlight: false },
      { id: 'cc-report', label: 'Final Report', role: 'Structured multi-agent synthesis', highlight: true }
    ],
    architectureFlow: [
      'Skill Analysis',
      'Career Recommendations',
      'Learning Roadmap',
      'Resume Review',
      'Interview Preparation',
      'Final Report'
    ],
    githubUrl: 'https://github.com/123bruke/Local_AI_Agent/tree/main/ai_career_coach/ai_career_coach',
    featured: true,
    type: 'pipeline'
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
  },
  {
    id: 'digital-e-student',
    title: 'Digital E-Student',
    category: 'Full-Stack',
    secondaryCategories: ['Backend'],
    description: 'Comprehensive academic portal unifying assignment scheduling, grade tracking, peer discussion forums, and university announcements.',
    technologies: ['TypeScript', 'React', 'Node.js', 'Express', 'MongoDB'],
    features: [
      'Modular course management with role-based student access',
      'Deadline synchronization with calendar alerts',
      'Discussion channels with markdown formatting support'
    ],
    githubUrl: 'https://github.com/123bruke',
    featured: false,
    type: 'standard'
  }
];
