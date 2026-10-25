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

    const mailtoSubject = encodeURIComponent(`[Portfolio Inquiry] ${formState.subject}`);
    const mailtoBody = encodeURIComponent(
      `Name: ${formState.name}\nEmail: ${formState.email}\n\nMessage:\n${formState.message}`
    );
    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${mailtoSubject}&body=${mailtoBody}`;

    setIsSubmitted(true);
    window.location.href = mailtoUrl;
  };

  return (
    <section id="contact" className="py-10 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionBorderFrame>
          {/* Section Header */}
          <div className="max-w-3xl mb-8">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/40 text-xs font-mono text-emerald-800 dark:text-cyan-300 font-bold mb-3 shadow-xs">
              <Terminal className="w-3.5 h-3.5" />
              <span>09 // CONNECT</span>
            </div>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-gradient-title">
              Let's Build Something Intelligent
            </h2>
            <p className="mt-2 text-sm sm:text-base text-zinc-700 dark:text-zinc-300 leading-relaxed font-normal">
              I am open to software engineering opportunities, AI projects, full-stack collaborations, and technically challenging problems.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
            
            {/* Left Column: Direct Channels & Verified Profiles (5 cols) */}
            <div className="lg:col-span-5 space-y-4">
              
              {/* Email Card */}
              <div className="bento-card p-5">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-zinc-500">EMAIL ADDRESS</div>
                      <a
                        href={`mailto:${PERSONAL_INFO.email}`}
                        className="text-xs sm:text-sm font-bold text-zinc-950 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 font-mono"
                      >
                        {PERSONAL_INFO.email}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyEmail}
                    className="btn-secondary px-2.5 py-1 text-xs"
                    title="Copy Email"
                  >
                    {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Phone Card */}
              <div className="bento-card p-5">
                <div className="flex items-center justify-between gap-3 mb-2">
                  <div className="flex items-center gap-2.5">
                    <div className="p-2 rounded-lg bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <div className="text-[11px] font-mono text-zinc-500">DIRECT PHONE</div>
                      <a
                        href={`tel:${PERSONAL_INFO.phone}`}
                        className="text-xs sm:text-sm font-bold text-zinc-950 dark:text-white hover:text-emerald-600 dark:hover:text-emerald-400 font-mono"
                      >
                        {PERSONAL_INFO.phone}
                      </a>
                    </div>
                  </div>

                  <button
                    onClick={handleCopyPhone}
                    className="btn-secondary px-2.5 py-1 text-xs"
                    title="Copy Phone"
                  >
                    {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-500" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                  </button>
                </div>
              </div>

              {/* Social & Coding Profiles Bento Grid */}
              <div className="bento-card p-5 space-y-3">
                <div className="text-xs font-mono uppercase text-zinc-500 font-semibold pb-2 border-b border-zinc-200 dark:border-zinc-800">
                  Verified Engineering Profiles
                </div>

                <div className="grid grid-cols-2 gap-2 text-xs">
                  <a
                    href={PERSONAL_INFO.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary p-2.5 justify-start text-xs"
                  >
                    <Github className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>GitHub</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary p-2.5 justify-start text-xs"
                  >
                    <Linkedin className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>LinkedIn</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.leetcode}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary p-2.5 justify-start text-xs"
                  >
                    <Code2 className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>LeetCode</span>
                  </a>

                  <a
                    href={PERSONAL_INFO.kaggle}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn-secondary p-2.5 justify-start text-xs"
                  >
                    <Binary className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                    <span>Kaggle</span>
                  </a>
                </div>
              </div>

            </div>

            {/* Right Column: Verified Contact Form (7 cols) */}
            <div className="lg:col-span-7">
              <div className="bento-card p-6 sm:p-8">
                <h3 className="text-lg sm:text-xl font-extrabold text-zinc-950 dark:text-white tracking-tight mb-1.5">
                  Send a Direct Message
                </h3>
                <p className="text-xs sm:text-sm text-zinc-600 dark:text-zinc-400 mb-6 font-normal">
                  Fill in the details below to transmit a project inquiry, internship offer, or technical question.
                </p>

                {isSubmitted && (
                  <div className="mb-6 p-4 rounded-xl bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/40 flex items-start gap-3">
                    <Check className="w-5 h-5 text-emerald-600 dark:text-emerald-400 shrink-0 mt-0.5" />
                    <div>
                      <div className="text-sm font-bold text-emerald-900 dark:text-emerald-300">
                        Email Client Prepared
                      </div>
                      <div className="text-xs text-zinc-700 dark:text-zinc-300 mt-1">
                        Your message has been formatted. If your email client didn't open automatically, write directly to <span className="font-mono text-emerald-700 dark:text-emerald-300 font-bold">{PERSONAL_INFO.email}</span>.
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
                        className="block text-xs font-mono uppercase text-zinc-800 dark:text-zinc-200 font-semibold mb-1.5"
                      >
                        Your Name *
                      </label>
                      <input
                        id="contact-name"
                        type="text"
                        placeholder="e.g. Alex Chen"
                        value={formState.name}
                        onChange={(e) => setFormState({ ...formState, name: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border text-sm text-zinc-950 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 transition-all ${
                          errors.name
                            ? 'border-red-500 focus:ring-red-400'
                            : 'border-zinc-300 dark:border-zinc-700 focus:border-emerald-500'
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
                        className="block text-xs font-mono uppercase text-zinc-800 dark:text-zinc-200 font-semibold mb-1.5"
                      >
                        Your Email *
                      </label>
                      <input
                        id="contact-email"
                        type="email"
                        placeholder="e.g. alex@company.com"
                        value={formState.email}
                        onChange={(e) => setFormState({ ...formState, email: e.target.value })}
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border text-sm text-zinc-950 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 transition-all ${
                          errors.email
                            ? 'border-red-500 focus:ring-red-400'
                            : 'border-zinc-300 dark:border-zinc-700 focus:border-emerald-500'
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
                      className="block text-xs font-mono uppercase text-zinc-800 dark:text-zinc-200 font-semibold mb-1.5"
                    >
                      Subject *
                    </label>
                    <input
                      id="contact-subject"
                      type="text"
                      placeholder="e.g. AI Engineering Role / Full-Stack Project"
                      value={formState.subject}
                      onChange={(e) => setFormState({ ...formState, subject: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border text-sm text-zinc-950 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 transition-all ${
                        errors.subject
                          ? 'border-red-500 focus:ring-red-400'
                          : 'border-zinc-300 dark:border-zinc-700 focus:border-emerald-500'
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
                      className="block text-xs font-mono uppercase text-zinc-800 dark:text-zinc-200 font-semibold mb-1.5"
                    >
                      Message *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={4}
                      placeholder="Describe the opportunity, technical challenge, or project scope..."
                      value={formState.message}
                      onChange={(e) => setFormState({ ...formState, message: e.target.value })}
                      className={`w-full px-3.5 py-2.5 rounded-xl bg-white dark:bg-zinc-900 border text-sm text-zinc-950 dark:text-white placeholder:text-zinc-400 dark:placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-emerald-400/50 transition-all ${
                        errors.message
                          ? 'border-red-500 focus:ring-red-400'
                          : 'border-zinc-300 dark:border-zinc-700 focus:border-emerald-500'
                      }`}
                    />
                    {errors.message && (
                      <span className="text-[11px] text-red-500 mt-1 flex items-center gap-1">
                        <AlertCircle className="w-3 h-3" />
                        {errors.message}
                      </span>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="btn-primary w-full py-3"
                  >
                    <Send className="w-4 h-4" />
                    <span>Send Message to Biruk</span>
                  </button>
                </form>
              </div>
            </div>

          </div>
        </SectionBorderFrame>
      </div>
    </section>
  );
}
