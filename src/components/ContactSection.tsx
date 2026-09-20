import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  Github, 
  Linkedin, 
  Code2, 
  Binary, 
  Send, 
  Copy, 
  Check, 
  Terminal, 
  ExternalLink, 
  AlertCircle 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/personal';
import SectionBorderFrame from './SectionBorderFrame';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const [formState, setFormState] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(PERSONAL_INFO.phone);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 2000);
  };

  const validateForm = () => {
    const errs: { [key: string]: string } = {};
    if (!formState.name.trim()) errs.name = 'Please provide your name';
    if (!formState.email.trim()) {
      errs.email = 'Please provide your email address';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formState.email)) {
      errs.email = 'Please provide a valid email address';
    }
    if (!formState.subject.trim()) errs.subject = 'Please provide a subject';
    if (!formState.message.trim() || formState.message.trim().length < 10) {
      errs.message = 'Please provide a message of at least 10 characters';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    // Direct mailto generation for authentic, real message transmission
    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formState.subject}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setIsSubmitted(true);
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-12 relative transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 reveal-on-scroll">
        <SectionBorderFrame>
          {/* Section Header */}
          <div className="max-w-3xl mb-12">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/40 text-xs font-mono text-emerald-800 dark:text-cyan-300 font-bold mb-3 shadow-[0_0_10px_rgba(52,211,153,0.2)]">
              <Terminal className="w-3.5 h-3.5" />
              <span>09 // CONNECT</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gradient-title">
              Let's Build Something Intelligent
            </h2>
            <p className="mt-2 text-base text-zinc-800 dark:text-emerald-100/90 leading-relaxed font-medium">
              I'm open to opportunities, collaborations, AI engineering projects, full-stack development work, and technically challenging problems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            
            {/* Left Column: Direct Channels & Verified Profiles */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Email card */}
              <div className="glass-card rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:border-emerald-400/60 shadow-xl group hover:scale-[1.01]">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-black/80 border border-black/10 dark:border-emerald-500/40 flex items-center justify-center text-emerald-600 dark:text-cyan-300 shadow-md group-hover:border-emerald-400/60">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-zinc-600 dark:text-slate-400">Direct Email</div>
                      <div className="text-sm sm:text-base font-bold text-zinc-950 dark:text-white font-mono">
                        {PERSONAL_INFO.email}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="btn-3d-transparent p-2.5 rounded-xl text-zinc-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-cyan-300 cursor-pointer transition-colors"
                    aria-label="Copy email to clipboard"
                    title="Copy email address"
                  >
                    {copiedEmail ? (
                      <Check className="w-4 h-4 text-emerald-600 dark:text-cyan-300" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <a
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono text-emerald-700 dark:text-cyan-300 hover:underline font-bold"
                >
                  <span>Compose email in client</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Phone card */}
              <div className="glass-card rounded-2xl p-5 sm:p-6 transition-all duration-300 hover:border-emerald-400/60 shadow-xl group hover:scale-[1.01]">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 rounded-xl bg-white dark:bg-black/80 border border-black/10 dark:border-emerald-500/40 flex items-center justify-center text-emerald-600 dark:text-cyan-300 shadow-md group-hover:border-emerald-400/60">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div>
                      <div className="text-xs font-mono text-zinc-600 dark:text-slate-400">Phone / Telegram</div>
                      <div className="text-sm sm:text-base font-bold text-zinc-950 dark:text-white font-mono">
                        {PERSONAL_INFO.phone}
                      </div>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyPhone}
                    className="btn-3d-transparent p-2.5 rounded-xl text-zinc-800 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-cyan-300 cursor-pointer transition-colors"
                    aria-label="Copy phone number"
                    title="Copy phone number"
                  >
                    {copiedPhone ? (
                      <Check className="w-4 h-4 text-emerald-600 dark:text-cyan-300" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                <a
                  href={`tel:${PERSONAL_INFO.phone}`}
                  className="mt-3 inline-flex items-center gap-1.5 text-xs font-mono text-emerald-700 dark:text-cyan-300 hover:underline font-bold"
                >
                  <span>Call phone number</span>
                  <ExternalLink className="w-3 h-3" />
                </a>
              </div>

              {/* Social & Professional Links with 3D Transparent Gradient buttons */}
              <div className="glass-card rounded-2xl p-6 shadow-xl">
                <h4 className="text-xs font-mono uppercase text-emerald-800 dark:text-cyan-300 font-bold tracking-wider mb-4">
                  Engineering & Coding Profiles
                </h4>

                <div className="grid grid-cols-2 gap-3">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-3d-transparent flex items-center gap-2.5 p-3 rounded-xl text-zinc-950 dark:text-slate-100 hover:text-emerald-600 dark:hover:text-cyan-300 text-xs font-bold shadow-sm"
                  >
                    <Github className="w-4 h-4 text-emerald-600 dark:text-cyan-300" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-3d-transparent flex items-center gap-2.5 p-3 rounded-xl text-zinc-950 dark:text-slate-100 hover:text-emerald-600 dark:hover:text-cyan-300 text-xs font-bold shadow-sm"
                  >
                    <Linkedin className="w-4 h-4 text-emerald-600 dark:text-cyan-300" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-3d-transparent flex items-center gap-2.5 p-3 rounded-xl text-zinc-950 dark:text-slate-100 hover:text-emerald-600 dark:hover:text-cyan-300 text-xs font-bold shadow-sm"
                  >
                    <Code2 className="w-4 h-4 text-emerald-600 dark:text-cyan-300" />
                    <span>LeetCode</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.kaggle}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-3d-transparent flex items-center gap-2.5 p-3 rounded-xl text-zinc-950 dark:text-slate-100 hover:text-emerald-600 dark:hover:text-cyan-300 text-xs font-bold shadow-sm"
                  >
                    <Binary className="w-4 h-4 text-emerald-600 dark:text-cyan-300" />
                    <span>Kaggle</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Verified Contact Form */}
            <div className="lg:col-span-7">
              <div className="glass-card rounded-2xl p-6 sm:p-8 relative overflow-hidden shadow-2xl">
                <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-emerald-500 via-emerald-300 to-white" />

                <h3 className="text-xl font-extrabold text-zinc-950 dark:text-white tracking-tight mb-2">
                  Send a Message
                </h3>
                <p className="text-xs sm:text-sm text-zinc-700 dark:text-slate-300 mb-6 font-normal">
                  Fill in the details below to reach me directly for engineering roles, project inquiries, or collaborations.
                </p>

                {isSubmitted && (
                  <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/40 flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 dark:text-cyan-300 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-emerald-900 dark:text-emerald-300">
                        Message Prepared
                      </div>
                      <div className="text-xs text-zinc-700 dark:text-slate-200 mt-1">
                        Your message has been formatted and opened in your email client. You can also email directly at <span className="font-mono text-emerald-800 dark:text-cyan-300 font-bold">{PERSONAL_INFO.email}</span>.
                      </div>
                    </div>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-4 text-left">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label
                        htmlFor="contact-name"
                        className="block text-xs font-mono uppercase text-zinc-800 dark:text-slate-200 font-semibold mb-1.5"
                      >
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="e.g. Alex Smith"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-black/60 border text-sm text-zinc-950 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 transition-all ${
                          errors.name
                            ? 'border-red-500/60 focus:ring-red-400'
                            : 'border-black/20 dark:border-emerald-500/30 focus:border-emerald-400'
                        }`}
                      />
                      {errors.name && (
                        <span className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.name}
                        </span>
                      )}
                    </div>

                    {/* Email */}
                    <div>
                      <label
                        htmlFor="contact-email"
                        className="block text-xs font-mono uppercase text-zinc-800 dark:text-slate-200 font-semibold mb-1.5"
                      >
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="e.g. alex@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-black/60 border text-sm text-zinc-950 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 transition-all ${
                          errors.email
                            ? 'border-red-500/60 focus:ring-red-400'
                            : 'border-black/20 dark:border-emerald-500/30 focus:border-emerald-400'
                        }`}
                      />
                      {errors.email && (
                        <span className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                          <AlertCircle className="w-3 h-3" />
                          {errors.email}
                        </span>
                      )}
                    </div>
                  </div>

                  {/* Subject */}
                  <div>
                    <label
                      htmlFor="contact-subject"
                      className="block text-xs font-mono uppercase text-zinc-800 dark:text-slate-200 font-semibold mb-1.5"
                    >
                      Subject *
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      placeholder="e.g. AI Engineering Collaboration / Full-Stack Role"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-black/60 border text-sm text-zinc-950 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 transition-all ${
                        errors.subject
                          ? 'border-red-500/60 focus:ring-red-400'
                          : 'border-black/20 dark:border-emerald-500/30 focus:border-emerald-400'
                      }`}
                    />
                    {errors.subject && (
                      <span className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.subject}
                      </span>
                    )}
                  </div>

                  {/* Message */}
                  <div>
                    <label
                      htmlFor="contact-message"
                      className="block text-xs font-mono uppercase text-zinc-800 dark:text-slate-200 font-semibold mb-1.5"
                    >
                      Message (min 10 characters) *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      placeholder="Describe the opportunity, project architecture, or technical details..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-black/60 border text-sm text-zinc-950 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 transition-all ${
                        errors.message
                          ? 'border-red-500/60 focus:ring-red-400'
                          : 'border-black/20 dark:border-emerald-500/30 focus:border-emerald-400'
                      }`}
                    />
                    {errors.message && (
                      <span className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    className="btn-3d-gradient w-full inline-flex items-center justify-center gap-2 py-3.5 px-6 rounded-xl text-sm font-bold text-emerald-950 dark:text-white hover:text-white transition-all cursor-pointer shadow-lg"
                  >
                    <Send className="w-4 h-4 text-emerald-700 dark:text-cyan-300" />
                    <span>Send Message to Biruk</span>
                  </button>

                  <div className="text-center">
                    <span className="text-[11px] font-mono text-zinc-600 dark:text-slate-400">
                      Standard response time: typically within 24 hours
                    </span>
                  </div>
                </form>

              </div>
            </div>

          </div>
        </SectionBorderFrame>
      </div>
    </section>
  );
}
