import { SkillCategory } from '../types';

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: 'AI Engineering',
    categoryKey: 'ai-engineering',
    iconName: 'Cpu',
    description: 'Production architectures, agentic orchestration, and vector workflows',
    skills: [
      { name: 'LangGraph', level: 'Current Focus', highlight: true },
      { name: 'LangChain', level: 'Hands-on', highlight: true },
      { name: 'Google Gemini', level: 'Hands-on', highlight: true },
      { name: 'Ollama (Local LLMs)', level: 'Hands-on', highlight: true },
      { name: 'ChromaDB', level: 'Hands-on', highlight: true },
      { name: 'Vector Search', level: 'Hands-on' },
      { name: 'Agent Workflows', level: 'Current Focus', highlight: true },
      { name: 'Prompt Engineering', level: 'Experienced' },
      { name: 'AI App Architecture', level: 'Current Focus' },
      { name: 'FastAPI AI Services', level: 'Hands-on' }
    ]
  },
  {
    title: 'AI / Machine Learning',
    categoryKey: 'ai-ml',
    iconName: 'Brain',
    description: 'Foundational machine learning, deep neural nets, and computer vision',
    skills: [
      { name: 'PyTorch', level: 'Working Knowledge', highlight: true },
      { name: 'TensorFlow', level: 'Working Knowledge' },
      { name: 'Scikit-learn', level: 'Experienced', highlight: true },
      { name: 'XGBoost', level: 'Working Knowledge' },
      { name: 'OpenCV', level: 'Hands-on', highlight: true },
      { name: 'RAG Systems', level: 'Current Focus', highlight: true },
      { name: 'Multi-Agent Systems', level: 'Current Focus', highlight: true },
      { name: 'LLM Applications', level: 'Hands-on' },
      { name: 'Deep Learning', level: 'Working Knowledge' },
      { name: 'Computer Vision', level: 'Hands-on' }
    ]
  },
  {
    title: 'Full-Stack Development',
    categoryKey: 'fullstack',
    iconName: 'Layout',
    description: 'Modern frontend interfaces, reactive state, and server logic',
    skills: [
      { name: 'React 19', level: 'Experienced', highlight: true },
      { name: 'TypeScript', level: 'Experienced', highlight: true },
      { name: 'Vite', level: 'Experienced' },
      { name: 'Tailwind CSS', level: 'Experienced', highlight: true },
      { name: 'FastAPI', level: 'Hands-on', highlight: true },
      { name: 'Flask', level: 'Hands-on' },
      { name: 'Node.js', level: 'Hands-on' },
      { name: 'Express', level: 'Hands-on' }
    ]
  },
  {
    title: 'Programming Languages',
    categoryKey: 'programming',
    iconName: 'Terminal',
    description: 'Core languages for algorithm design and systems development',
    skills: [
      { name: 'Python', level: 'Experienced', highlight: true },
      { name: 'TypeScript', level: 'Experienced', highlight: true },
      { name: 'JavaScript', level: 'Experienced' },
      { name: 'SQL', level: 'Hands-on', highlight: true },
      { name: 'C++', level: 'Working Knowledge' },
      { name: 'HTML & CSS', level: 'Experienced' }
    ]
  },
  {
    title: 'Databases & Storage',
    categoryKey: 'databases',
    iconName: 'Database',
    description: 'Relational data stores, document databases, and vector engines',
    skills: [
      { name: 'ChromaDB', level: 'Hands-on', highlight: true },
      { name: 'PostgreSQL', level: 'Working Knowledge', highlight: true },
      { name: 'Firebase & Firestore', level: 'Experienced', highlight: true },
      { name: 'SQLite', level: 'Hands-on' },
      { name: 'MySQL', level: 'Working Knowledge' },
      { name: 'MongoDB', level: 'Working Knowledge' },
      { name: 'Supabase', level: 'Working Knowledge' },
      { name: 'Neo4j (Knowledge Graphs)', level: 'Working Knowledge' }
    ]
  },
  {
    title: 'DevOps & Tooling',
    categoryKey: 'devops',
    iconName: 'GitBranch',
    description: 'Modern developer workflow, containerization, and environments',
    skills: [
      { name: 'Docker', level: 'Working Knowledge', highlight: true },
      { name: 'Git & GitHub', level: 'Experienced', highlight: true },
      { name: 'Linux / WSL', level: 'Hands-on', highlight: true },
      { name: 'VS Code & Cursor', level: 'Experienced' },
      { name: 'Jupyter Notebooks', level: 'Experienced' },
      { name: 'Azure', level: 'Working Knowledge' }
    ]
  }
];
