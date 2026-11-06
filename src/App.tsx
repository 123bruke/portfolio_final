import { useMemo, useState } from 'react';
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  BrainCircuit,
  Check,
  Code2,
  Database,
  Github,
  GraduationCap,
  Layers3,
  Mail,
  MapPin,
  Menu,
  X,
} from 'lucide-react';
import { FEATURED_PROJECTS } from './data/projects';
import { PERSONAL_INFO } from './data/personal';
import { SKILL_CATEGORIES } from './data/skills';
import portraitImage from './assets/images/biruk_portrait_1789856194221.jpg';
import './portfolio-redesign.css';

const navigation = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Projects', href: '#projects' },
  { label: 'Experience', href: '#experience' },
  { label: 'Contact', href: '#contact' },
];

const filters = ['All', 'AI / ML', 'AI Agents', 'Full-Stack', 'Research'] as const;
type ProjectFilter = (typeof filters)[number];

function SectionHeading({ eyebrow, title, description }: { eyebrow: string; title: string; description?: string }) {
  return (
    <div className="section-heading">
      <span className="eyebrow">{eyebrow}</span>
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}

export default function App() {
  const [activeFilter, setActiveFilter] = useState<ProjectFilter>('All');
  const [menuOpen, setMenuOpen] = useState(false);

  const projects = useMemo(() => FEATURED_PROJECTS.filter((project) => {
    if (activeFilter === 'All') return true;
    return project.category === activeFilter || project.secondaryCategories.includes(activeFilter);
  }), [activeFilter]);

  return (
    <div className="portfolio-shell">
      <a className="skip-link" href="#main">Skip to content</a>
      <header className="site-header">
        <div className="header-inner">
          <a className="wordmark" href="#home" aria-label={`${PERSONAL_INFO.name}, home`}>
            <span className="wordmark-mark">B</span>
            <span>{PERSONAL_INFO.name}<small>Developer & AI Engineer</small></span>
          </a>
          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <nav className={`site-nav${menuOpen ? ' is-open' : ''}`} aria-label="Main navigation">
            {navigation.map((item) => (
              <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
            ))}
            <a className="nav-contact" href="#contact" onClick={() => setMenuOpen(false)}>Let’s talk <ArrowUpRight size={15} /></a>
          </nav>
        </div>
      </header>

      <main id="main">
        <section className="hero section-wrap" id="home">
          <div className="hero-copy">
            <div className="availability"><span /> Open to opportunities</div>
            <p className="hero-intro">Hello, I’m</p>
            <h1>Biruk Ahmye<span className="hero-period">.</span></h1>
            <p className="hero-role">Full-Stack Developer <span>·</span> AI/ML Engineer</p>
            <p className="hero-description">I build thoughtful digital products and practical AI systems—from clean, responsive interfaces to intelligent applications that solve real problems.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#projects">Explore my work <ArrowRight size={17} /></a>
              <a className="button button-quiet" href={`mailto:${PERSONAL_INFO.email}`}><Mail size={17} /> Get in touch</a>
            </div>
            <div className="hero-location"><MapPin size={15} /> {PERSONAL_INFO.location}</div>
          </div>
          <div className="hero-visual">
            <div className="portrait-frame">
              <img src={portraitImage} alt={`${PERSONAL_INFO.name}, Full-Stack Developer and AI/ML Engineer`} />
            </div>
            <div className="portrait-note"><span className="note-icon"><Code2 size={17} /></span><span>Curious by nature.<br /><strong>Builder by practice.</strong></span></div>
            <div className="hero-orbit orbit-one" />
            <div className="hero-orbit orbit-two" />
          </div>
          <a className="scroll-cue" href="#about"><ArrowDown size={15} /> Scroll to explore</a>
        </section>

        <section className="about-section section-wrap section-pad" id="about">
          <SectionHeading eyebrow="A little about me" title="Engineering ideas into useful products." description="I enjoy the space where software engineering meets applied AI—turning ambitious ideas into useful, dependable experiences." />
          <div className="about-grid">
            <div className="about-story">
              <p>{PERSONAL_INFO.aboutText[0]}</p>
              <p>{PERSONAL_INFO.aboutText[1]}</p>
              <p>{PERSONAL_INFO.aboutText[2]}</p>
              <div className="about-location"><MapPin size={16} /> Based in {PERSONAL_INFO.location}</div>
            </div>
            <div className="about-facts">
              <article className="fact-card"><span className="fact-icon"><GraduationCap size={19} /></span><div><span className="fact-label">Currently studying</span><h3>Engineering at ASTU</h3><p>{PERSONAL_INFO.graduationPeriod}</p></div></article>
              <article className="fact-card"><span className="fact-icon"><BrainCircuit size={19} /></span><div><span className="fact-label">Areas of interest</span><h3>AI systems & product engineering</h3><p>Agents · Machine learning · Full-stack</p></div></article>
              <article className="fact-card"><span className="fact-icon"><Layers3 size={19} /></span><div><span className="fact-label">How I work</span><h3>Learn by building</h3><p>Practical, collaborative, and curious</p></div></article>
            </div>
          </div>
        </section>

        <section className="skills-section section-pad" id="skills">
          <div className="section-wrap">
            <SectionHeading eyebrow="My toolkit" title="Skills & technologies" description="A practical toolkit for designing, building, and improving full-stack and AI-powered products." />
            <div className="skills-grid">
              {SKILL_CATEGORIES.map((category, index) => {
                const Icon = [BrainCircuit, Code2, Layers3, Code2, Database, Check][index] ?? Code2;
                const skills = category.skills.map((skill) => skill.name);
                return (
                  <article className="skill-card" key={category.categoryKey}>
                    <div className="skill-card-heading"><span className="skill-icon"><Icon size={18} /></span><h3>{category.title}</h3></div>
                    <p>{category.description}</p>
                    <div className="skill-tags">{skills.map((skill) => <span key={skill}>{skill}</span>)}</div>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section className="projects-section section-wrap section-pad" id="projects">
          <SectionHeading eyebrow="Selected work" title="Projects I’m proud of." description="A selection of things I’ve built across AI, full-stack development, and research. Choose a category to explore." />
          <div className="project-filters" aria-label="Filter projects">
            {filters.map((filter) => <button key={filter} type="button" className={activeFilter === filter ? 'filter-chip active' : 'filter-chip'} onClick={() => setActiveFilter(filter)} aria-pressed={activeFilter === filter}>{filter}</button>)}
          </div>
          <div className="projects-grid">
            {projects.map((project, index) => (
              <article className="project-card" key={project.id}>
                <div className={`project-art project-art-${index % 4}`} aria-hidden="true"><span className="project-art-index">0{index + 1}</span><div className="project-art-shape"><Layers3 size={34} strokeWidth={1.2} /></div><span className="project-category">{project.category}</span></div>
                <div className="project-content">
                  <div className="project-title-row"><h3>{project.title}</h3><a href={project.githubUrl} target="_blank" rel="noreferrer" aria-label={`View ${project.title} on GitHub`}><ArrowUpRight size={18} /></a></div>
                  <p>{project.description}</p>
                  {project.testMetric && <div className="project-metric">{project.testMetric}</div>}
                  <div className="project-tech">{project.technologies.slice(0, 5).map((technology) => <span key={technology}>{technology}</span>)}</div>
                  <a className="project-link" href={project.githubUrl} target="_blank" rel="noreferrer"><Github size={15} /> View project <ArrowUpRight size={14} /></a>
                </div>
              </article>
            ))}
          </div>
          {projects.length === 0 && <p className="empty-projects">No projects in this category yet.</p>}
          <p className="projects-footnote">More experiments and code are available on <a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} /></a>.</p>
        </section>

        <section className="experience-section section-pad" id="experience">
          <div className="section-wrap">
            <SectionHeading eyebrow="The journey so far" title="Experience & education" description="A foundation in engineering, strengthened by hands-on work and research." />
            <div className="timeline">
              <article className="timeline-item"><span className="timeline-dot" /><div className="timeline-meta"><span>Professional experience</span><span>AI & Software</span></div><h3>AI/ML Engineering · iCog Labs</h3><p>Contributed to applied AI engineering, including an autonomous vendor assessment agent with policy retrieval, validation workflows, and automated tests.</p><div className="timeline-tags"><span>LangGraph</span><span>RAG</span><span>Python</span><span>Testing</span></div></article>
              <article className="timeline-item"><span className="timeline-dot" /><div className="timeline-meta"><span>Research experience</span><span>Biomedical data</span></div><h3>Knowledge Graph Research · BioCypher</h3><p>Worked on harmonizing biomedical data and representing relationships through ontology-aware knowledge graph workflows.</p><div className="timeline-tags"><span>BioCypher</span><span>Neo4j</span><span>Python</span></div></article>
              <article className="timeline-item"><span className="timeline-dot" /><div className="timeline-meta"><span>Education</span><span>{PERSONAL_INFO.graduationPeriod}</span></div><h3>{PERSONAL_INFO.university}</h3><p>Engineering student building a strong foundation in software, systems, and applied problem-solving.</p><div className="timeline-tags"><span>Engineering</span><span>Software development</span></div></article>
            </div>
          </div>
        </section>

        <section className="contact-section section-wrap section-pad" id="contact">
          <div className="contact-panel">
            <div className="contact-copy"><span className="eyebrow">Have a project in mind?</span><h2>Let’s build something<br /><span>meaningful.</span></h2><p>I’m always interested in thoughtful ideas, challenging problems, and opportunities to make useful things.</p><a className="button button-light" href={`mailto:${PERSONAL_INFO.email}`}>Say hello <ArrowUpRight size={17} /></a></div>
            <div className="contact-details"><a href={`mailto:${PERSONAL_INFO.email}`}><span><Mail size={17} /></span><div><small>Email</small><strong>{PERSONAL_INFO.email}</strong></div><ArrowUpRight size={16} /></a><a href={PERSONAL_INFO.github} target="_blank" rel="noreferrer"><span><Github size={17} /></span><div><small>GitHub</small><strong>github.com/123bruke</strong></div><ArrowUpRight size={16} /></a><a href={PERSONAL_INFO.linkedin} target="_blank" rel="noreferrer"><span><ArrowUpRight size={17} /></span><div><small>LinkedIn</small><strong>Connect professionally</strong></div><ArrowUpRight size={16} /></a></div>
          </div>
        </section>
      </main>

      <footer className="site-footer"><div className="section-wrap footer-inner"><a className="wordmark footer-brand" href="#home"><span className="wordmark-mark">B</span><span>{PERSONAL_INFO.name}<small>Building with purpose.</small></span></a><p>Designed & built with care · {new Date().getFullYear()}</p><a className="back-top" href="#home">Back to top <ArrowUpRight size={14} /></a></div></footer>
    </div>
  );
}
