import { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import JourneyTimeline from './components/JourneyTimeline';
import SkillsSection from './components/SkillsSection';
import FeaturedProjects from './components/FeaturedProjects';
import AiEngineeringProcess from './components/AiEngineeringProcess';
import FullStackArchitecture from './components/FullStackArchitecture';
import ProblemSolver from './components/ProblemSolver';
import ExperienceSection from './components/ExperienceSection';
import ContactSection from './components/ContactSection';
import Footer from './components/Footer';
import ProjectModal from './components/ProjectModal';
import ResumeModal from './components/ResumeModal';
import MovingGradient3D from './components/MovingGradient3D';
import { Project } from './types';
import { ThemeProvider, useTheme } from './context/ThemeContext';
import { useScrollReveal } from './hooks/useScrollReveal';

function PortfolioApp() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const { theme } = useTheme();

  // Initialize scroll reveal animations across all sections
  useScrollReveal();

  return (
    <div
      className={`min-h-screen relative ${
        theme === 'dark'
          ? 'bg-black text-white'
          : 'bg-white text-black'
      } flex flex-col selection:bg-emerald-500/30 selection:text-emerald-400 dark:selection:text-emerald-300 selection:text-emerald-950 transition-colors duration-300 overflow-x-hidden`}
    >
      {/* 3D Moving Gradient Background (Green, White, and Black) */}
      <MovingGradient3D />

      {/* Sticky Glass Navbar with Theme Switcher & Resume Trigger */}
      <Navbar onOpenResume={() => setIsResumeOpen(true)} />

      {/* Main Content Sections */}
      <main className="flex-grow relative z-10">
        {/* Hero with Biruk Ahmye portrait and 3D cursor network */}
        <Hero onOpenResume={() => setIsResumeOpen(true)} />

        {/* About Me & ASTU Engineering Background */}
        <About />

        {/* Vertical Animated Engineering Journey Timeline */}
        <JourneyTimeline />

        {/* Categorized Skills without fake percentages */}
        <SkillsSection />

        {/* Featured Projects with Architecture Diagrams & Filters */}
        <FeaturedProjects onSelectProject={(p) => setSelectedProject(p)} />

        {/* How I Build AI Systems (Interactive Methodology) */}
        <AiEngineeringProcess />

        {/* Full-Stack Layered Architecture Diagram */}
        <FullStackArchitecture />

        {/* Problem Solver (LeetCode, Kaggle, DSA, Logic) */}
        <ProblemSolver />

        {/* Experience & Education (ASTU) */}
        <ExperienceSection />

        {/* Contact with validated form and verified channels */}
        <ContactSection />
      </main>

      {/* Footer */}
      <div className="relative z-10">
        <Footer />
      </div>

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Realistic White Papered PDF Look Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />
    </div>
  );
}

export default function App() {
  return (
    <ThemeProvider>
      <PortfolioApp />
    </ThemeProvider>
  );
}
