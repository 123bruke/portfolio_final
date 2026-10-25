export type ProjectCategory = 
  | 'All'
  | 'AI / ML'
  | 'AI Agents'
  | 'RAG'
  | 'Full-Stack'
  | 'Computer Vision'
  | '3D / Interactive'
  | 'Research'
  | 'Backend';

export interface ArchitectureNode {
  id: string;
  label: string;
  role: string;
  details?: string;
  highlight?: boolean;
}

export interface Project {
  id: string;
  title: string;
  category: ProjectCategory;
  secondaryCategories: ProjectCategory[];
  description: string;
  longDescription?: string;
  technologies: string[];
  features: string[];
  architectureSummary?: string;
  architectureNodes?: ArchitectureNode[];
  architectureFlow?: string[];
  testMetric?: string;
  githubUrl: string;
  liveUrl?: string;
  featured: boolean;
  type: 'multi-agent' | 'react-agent' | 'knowledge-graph' | '3d-lab' | 'realtime-chat' | 'pipeline' | 'standard';
}

export interface SkillItem {
  name: string;
  level: 'Current Focus' | 'Hands-on' | 'Working Knowledge' | 'Experienced' | 'Exploration';
  highlight?: boolean;
}

export interface SkillCategory {
  title: string;
  categoryKey: string;
  iconName: string;
  description: string;
  skills: SkillItem[];
}

export interface TimelineEvent {
  title: string;
  role: string;
  organization?: string;
  period: string;
  description: string;
  highlights: string[];
  skills?: string[];
  iconName: string;
}

export interface ProcessStep {
  stepNumber: string;
  title: string;
  shortDesc: string;
  details: string[];
  tools: string[];
  iconName: string;
}

export interface StackLayer {
  layerName: string;
  description: string;
  technologies: string[];
  iconName: string;
}
