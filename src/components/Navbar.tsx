import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, FileText, ArrowRight, Sun, Moon } from 'lucide-react';
import { PERSONAL_INFO } from '../data/personal';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenResume: () => void;
}

export default function Navbar({ onOpenResume }: NavbarProps) {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const { theme, toggleTheme } = useTheme();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'about', 'journey', 'skills', 'projects', 'ai-architecture', 'problem-solving', 'experience', 'contact'];
      const scrollPosition = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'About', href: '#about', id: 'about' },
    { label: 'Skills', href: '#skills', id: 'skills' },
    { label: 'Projects', href: '#projects', id: 'projects' },
    { label: 'AI Systems', href: '#ai-architecture', id: 'ai-architecture' },
    { label: 'Problem Solving', href: '#problem-solving', id: 'problem-solving' },
    { label: 'Experience', href: '#experience', id: 'experience' },
    { label: 'Contact', href: '#contact', id: 'contact' },
  ];

  return (
    <header
      id="main-navbar"
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/95 dark:bg-black/95 backdrop-blur-md border-b border-black/10 dark:border-emerald-500/20 shadow-lg py-3'
          : 'bg-transparent border-b border-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand identity with Photo Avatar */}
        <a
          href="#home"
          id="navbar-brand-link"
          className="flex items-center gap-3 group focus:outline-none rounded-md p-1"
        >
          <div className="relative w-9 h-9 rounded-full overflow-hidden border-2 border-emerald-400 shadow-md shadow-emerald-950/40 group-hover:scale-105 transition-all">
            <img 
              src="/biruk_photo.jpg" 
              alt={PERSONAL_INFO.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <span className="text-sm font-bold tracking-tight text-zinc-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 font-bold tracking-wider">
              ASTU • Full-Stack & AI/ML
            </span>
          </div>
        </a>

        {/* Desktop Navigation with high contrast black text in light mode */}
        <nav id="desktop-nav-links" className="hidden lg:flex items-center gap-1 xl:gap-2">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 ${
                  isActive
                    ? 'text-emerald-800 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-500/15 border border-emerald-400/50 dark:border-emerald-500/40 font-bold shadow-sm'
                    : 'text-zinc-700 dark:text-slate-300 hover:text-zinc-950 dark:hover:text-white hover:bg-black/5 dark:hover:bg-white/5 border border-transparent'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right CTA Actions & Theme Switcher */}
        <div className="hidden sm:flex items-center gap-2.5">
          {/* Light / Night Mode Switcher Button */}
          <button
            id="theme-toggle-btn"
            type="button"
            onClick={toggleTheme}
            className="btn-3d-transparent p-2 text-zinc-900 dark:text-white rounded-xl transition-all cursor-pointer"
            aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Night Mode'}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Night Mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-emerald-400 animate-spin-slow" />
            ) : (
              <Moon className="w-4 h-4 text-emerald-800" />
            )}
          </button>

          <a
            id="nav-github-link"
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="btn-3d-transparent p-2 text-zinc-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 rounded-xl transition-colors"
          >
            <Github className="w-4 h-4" />
          </a>

          <a
            id="nav-linkedin-link"
            href={PERSONAL_INFO.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="btn-3d-transparent p-2 text-zinc-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 rounded-xl transition-colors"
          >
            <Linkedin className="w-4 h-4" />
          </a>

          <button
            id="nav-resume-button"
            onClick={onOpenResume}
            className="btn-3d-transparent inline-flex items-center gap-2 px-3.5 py-2 text-xs font-semibold text-zinc-900 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-300 rounded-xl cursor-pointer shadow-sm"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Resume</span>
          </button>

          <a
            id="nav-contact-button"
            href="#contact"
            className="btn-3d-gradient inline-flex items-center gap-1.5 px-4 py-2 text-xs font-bold text-emerald-950 dark:text-white hover:text-white rounded-xl shadow-md cursor-pointer"
          >
            <span>Connect</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </a>
        </div>

        {/* Mobile menu trigger & Theme toggle */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            type="button"
            onClick={toggleTheme}
            className="btn-3d-transparent p-2 text-zinc-900 dark:text-white rounded-xl"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-emerald-400" />
            ) : (
              <Moon className="w-4 h-4 text-emerald-800" />
            )}
          </button>

          <button
            id="mobile-menu-trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn-3d-transparent p-2 rounded-xl text-zinc-900 dark:text-white hover:bg-black/5 dark:hover:bg-white/10 transition-colors"
            aria-label={mobileMenuOpen ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div 
          id="mobile-nav-menu"
          className="lg:hidden bg-white/95 dark:bg-black/95 border-b border-black/10 dark:border-emerald-500/20 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-2xl backdrop-blur-xl"
        >
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  activeSection === link.id
                    ? 'text-emerald-800 dark:text-emerald-400 bg-emerald-100 dark:bg-emerald-500/20 font-bold'
                    : 'text-zinc-700 dark:text-slate-300 hover:bg-black/5 dark:hover:bg-white/5'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-black/10 dark:border-white/10 grid grid-cols-2 gap-2">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="btn-3d-transparent flex items-center justify-center gap-2 px-3 py-2.5 rounded-xl text-xs font-semibold text-zinc-900 dark:text-white"
            >
              <FileText className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>PDF Resume</span>
            </button>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-3d-gradient flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl text-xs font-bold text-emerald-950 dark:text-white hover:text-white"
            >
              <span>Connect</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
