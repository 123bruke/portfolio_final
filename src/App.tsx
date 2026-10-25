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
import DevConsoleWidget from './components/DevConsoleWidget';
import { Project } from './types';
import { ThemeProvider, useTheme } from './context/ThemeContext';

function PortfolioApp() {
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isResumeOpen, setIsResumeOpen] = useState(false);
  const [isConsoleOpen, setIsConsoleOpen] = useState(false);

  return (
    <div
      className="min-h-screen relative bg-[#f8fafc] text-zinc-900 bg-clean-grid-light flex flex-col selection:bg-emerald-500/25 selection:text-emerald-700 transition-colors duration-200 overflow-x-hidden"
    >
      {/* Sticky Clean Navbar */}
      <Navbar 
        onOpenResume={() => setIsResumeOpen(true)} 
        onOpenConsole={() => setIsConsoleOpen(true)}
      />

      {/* Main Content Sections in Clean Bento Grid Hierarchy */}
      <main className="flex-grow relative z-10">
        {/* Bento Hero */}
        <Hero 
          onOpenResume={() => setIsResumeOpen(true)} 
          onOpenConsole={() => setIsConsoleOpen(true)}
        />

        {/* About & ASTU Engineering Background Bento */}
        <About />

        {/* Engineering Journey Progression */}
        <JourneyTimeline />

        {/* Categorized Skills Grid with Instant Search */}
        <SkillsSection />

        {/* Featured Projects Bento Grid with Interactive Architecture & Search */}
        <FeaturedProjects onSelectProject={(p) => setSelectedProject(p)} />

        {/* How I Build AI Systems (Methodology Grid) */}
        <AiEngineeringProcess />

        {/* Full-Stack Layered Architecture Grid */}
        <FullStackArchitecture />

        {/* Problem Solver (LeetCode, Kaggle, DSA, Algorithmic Logic) */}
        <ProblemSolver />

        {/* Experience (iCog Labs) & Education (ASTU) */}
        <ExperienceSection />

        {/* Contact Section with Validated Channels */}
        <ContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Project Detail Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />

      {/* Realistic Printable Resume Modal */}
      <ResumeModal
        isOpen={isResumeOpen}
        onClose={() => setIsResumeOpen(false)}
      />

      {/* Interactive Developer Terminal / Command Palette (New Feature) */}
      <DevConsoleWidget
        isOpen={isConsoleOpen}
        onClose={() => setIsConsoleOpen(false)}
        onOpenResume={() => {
          setIsConsoleOpen(false);
          setIsResumeOpen(true);
        }}
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
