import { useState, useEffect } from 'react';
import { Menu, X, Github, Linkedin, FileText, ArrowRight, Sun, Moon, Terminal } from 'lucide-react';
import { PERSONAL_INFO } from '../data/personal';
import { useTheme } from '../context/ThemeContext';

interface NavbarProps {
  onOpenResume: () => void;
  onOpenConsole?: () => void;
}

export default function Navbar({ onOpenResume, onOpenConsole }: NavbarProps) {
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
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-200 ${
        isScrolled
          ? 'bg-white/95 dark:bg-zinc-950/95 backdrop-blur-md border-b border-zinc-200 dark:border-zinc-800 shadow-sm py-2.5'
          : 'bg-transparent border-b border-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
        {/* Brand Identity with Avatar */}
        <a
          href="#home"
          id="navbar-brand-link"
          className="flex items-center gap-3 group focus:outline-none rounded-md p-1"
        >
          <div className="relative w-9 h-9 rounded-xl overflow-hidden border-2 border-emerald-500/50 shadow-xs shrink-0 bg-zinc-950 group-hover:border-emerald-500 transition-colors">
            <img 
              src="/biruk_photo.jpg" 
              alt={PERSONAL_INFO.name} 
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex flex-col text-left">
            <span className="text-sm font-bold tracking-tight text-zinc-950 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
              {PERSONAL_INFO.name}
            </span>
            <span className="text-[11px] font-mono text-emerald-700 dark:text-emerald-400 font-bold tracking-wider">
              ASTU • Full-Stack & AI/ML
            </span>
          </div>
        </a>

        {/* Desktop Navigation Links */}
        <nav id="desktop-nav-links" className="hidden lg:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = activeSection === link.id;
            return (
              <a
                key={link.id}
                id={`nav-link-${link.id}`}
                href={link.href}
                className={`px-3 py-1.5 text-xs font-semibold rounded-lg transition-colors ${
                  isActive
                    ? 'text-emerald-900 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/40 font-bold'
                    : 'text-zinc-700 dark:text-zinc-300 hover:text-zinc-950 dark:hover:text-white hover:bg-zinc-100 dark:hover:bg-zinc-800/60'
                }`}
              >
                {link.label}
              </a>
            );
          })}
        </nav>

        {/* Right Action Tools: Terminal, Theme Toggle, Resume, Connect */}
        <div className="hidden sm:flex items-center gap-2">
          {/* Interactive Dev Terminal Trigger */}
          {onOpenConsole && (
            <button
              onClick={onOpenConsole}
              className="btn-secondary px-2.5 py-1.5 text-xs"
              title="Open Interactive Developer Terminal"
            >
              <Terminal className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
              <span>Terminal</span>
            </button>
          )}

          {/* Theme Toggle Button */}
          <button
            id="theme-toggle-btn"
            type="button"
            onClick={toggleTheme}
            className="btn-secondary p-2 rounded-xl text-zinc-800 dark:text-zinc-200"
            aria-label={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            title={theme === 'dark' ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-emerald-400" />
            ) : (
              <Moon className="w-4 h-4 text-emerald-700" />
            )}
          </button>

          <a
            id="nav-github-link"
            href={PERSONAL_INFO.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="btn-secondary p-2 text-zinc-800 dark:text-zinc-200"
          >
            <Github className="w-4 h-4" />
          </a>

          <button
            id="nav-resume-button"
            onClick={onOpenResume}
            className="btn-secondary px-3 py-1.5 text-xs"
          >
            <FileText className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
            <span>Resume</span>
          </button>

          <a
            id="nav-contact-button"
            href="#contact"
            className="btn-primary px-3.5 py-1.5 text-xs"
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
            className="btn-secondary p-2"
            aria-label="Toggle Theme"
          >
            {theme === 'dark' ? (
              <Sun className="w-4 h-4 text-emerald-400" />
            ) : (
              <Moon className="w-4 h-4 text-emerald-700" />
            )}
          </button>

          <button
            id="mobile-menu-trigger"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="btn-secondary p-2"
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
          className="lg:hidden bg-white dark:bg-zinc-950 border-b border-zinc-200 dark:border-zinc-800 px-4 pt-3 pb-6 space-y-2 mt-2 shadow-xl"
        >
          <div className="grid grid-cols-1 gap-1">
            {navLinks.map((link) => (
              <a
                key={link.id}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className={`px-3.5 py-2 rounded-lg text-sm font-semibold transition-colors ${
                  activeSection === link.id
                    ? 'text-emerald-900 dark:text-emerald-300 bg-emerald-100 dark:bg-emerald-950/60 font-bold'
                    : 'text-zinc-700 dark:text-zinc-300 hover:bg-zinc-100 dark:hover:bg-zinc-800'
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="pt-4 border-t border-zinc-200 dark:border-zinc-800 grid grid-cols-3 gap-2">
            {onOpenConsole && (
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenConsole();
                }}
                className="btn-secondary py-2 text-xs"
              >
                <Terminal className="w-3.5 h-3.5 text-emerald-500" />
                <span>CLI</span>
              </button>
            )}

            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onOpenResume();
              }}
              className="btn-secondary py-2 text-xs"
            >
              <FileText className="w-3.5 h-3.5 text-emerald-500" />
              <span>Resume</span>
            </button>

            <a
              href="#contact"
              onClick={() => setMobileMenuOpen(false)}
              className="btn-primary py-2 text-xs"
            >
              <span>Connect</span>
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
