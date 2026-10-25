import { useState } from 'react';
import { 
  Mail, 
  Phone, 
  MapPin, 
  Send, 
  Check, 
  Copy, 
  ExternalLink, 
  Terminal, 
  Github, 
  Linkedin, 
  Code2, 
  Binary, 
  Eye, 
  EyeOff, 
  ChevronDown, 
  ChevronUp 
} from 'lucide-react';
import { PERSONAL_INFO } from '../data/personal';
import SectionBorderFrame from './SectionBorderFrame';

export default function ContactSection() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);
  const [isSectionHidden, setIsSectionHidden] = useState(false);

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

    const mailtoUrl = `mailto:${PERSONAL_INFO.email}?subject=${encodeURIComponent(
      `[Portfolio Inquiry] ${formState.subject}`
    )}&body=${encodeURIComponent(
      `From: ${formState.name} (${formState.email})\n\nMessage:\n${formState.message}`
    )}`;

    window.open(mailtoUrl, '_blank');
    setIsSubmitted(true);
  };

  return (
    <section id="contact" className="py-10 scroll-mt-24 relative transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionBorderFrame>
          {/* Section Header with Hide/Show Toggle */}
          <div className="flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-8">
            <div className="max-w-3xl">
              {/* Green highlight for Main Point */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-300 text-xs font-mono text-emerald-800 font-bold mb-3 shadow-2xs">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span>COMMUNICATION & INQUIRIES</span>
              </div>
              <h2 className="text-2xl sm:text-4xl font-black tracking-tight text-black">
                Let's Build Something Intelligent
              </h2>
              <p className="mt-2 text-sm sm:text-base text-zinc-700 leading-relaxed font-normal">
                Open to software engineering opportunities, AI projects, full-stack collaborations, and technically challenging problems.
              </p>
            </div>

            {/* Native Hide/Show Button */}
            <button
              onClick={() => setIsSectionHidden(!isSectionHidden)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono font-bold rounded-lg border border-zinc-300 bg-white hover:bg-zinc-100 text-black shadow-2xs transition-all duration-200 cursor-pointer self-start sm:self-auto shrink-0"
              title={isSectionHidden ? "Expand Contact" : "Collapse Contact"}
            >
              {isSectionHidden ? (
                <>
                  <Eye className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Show Contact</span>
                  <ChevronDown className="w-3 h-3 text-zinc-500" />
                </>
              ) : (
                <>
                  <EyeOff className="w-3.5 h-3.5 text-zinc-600" />
                  <span>Hide Details</span>
                  <ChevronUp className="w-3 h-3 text-zinc-500" />
                </>
              )}
            </button>
          </div>

          {/* Smooth Collapsible Content Container */}
          <div
            className={`transition-all duration-300 ease-in-out overflow-hidden ${
              isSectionHidden ? 'max-h-0 opacity-0 pointer-events-none' : 'max-h-[3000px] opacity-100'
            }`}
          >
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8">
              
              {/* Left Column: Direct Channels & Verified Profiles (5 cols) */}
              <div className="lg:col-span-5 space-y-4">
                
                {/* Email Card */}
                <div className="bento-card p-5 hover:border-emerald-300 transition-all duration-200">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600">
                        <Mail className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] font-mono text-zinc-600 font-bold">EMAIL ADDRESS</div>
                        <a
                          href={`mailto:${PERSONAL_INFO.email}`}
                          className="text-xs sm:text-sm font-bold text-black hover:text-emerald-700 font-mono transition-colors"
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
                      {copiedEmail ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-black" />}
                      <span>{copiedEmail ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                {/* Phone Card */}
                <div className="bento-card p-5 hover:border-emerald-300 transition-all duration-200">
                  <div className="flex items-center justify-between gap-3 mb-2">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 rounded-lg bg-emerald-50 border border-emerald-200 text-emerald-600">
                        <Phone className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-[11px] font-mono text-zinc-600 font-bold">DIRECT PHONE</div>
                        <a
                          href={`tel:${PERSONAL_INFO.phone}`}
                          className="text-xs sm:text-sm font-bold text-black hover:text-emerald-700 font-mono transition-colors"
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
                      {copiedPhone ? <Check className="w-3.5 h-3.5 text-emerald-600" /> : <Copy className="w-3.5 h-3.5 text-black" />}
                      <span>{copiedPhone ? 'Copied' : 'Copy'}</span>
                    </button>
                  </div>
                </div>

                {/* Social & Coding Profiles Bento Grid */}
                <div className="bento-card p-5 space-y-3">
                  <div className="text-xs font-mono uppercase text-emerald-800 font-bold pb-2 border-b border-zinc-200 flex items-center justify-between">
                    <span>Verified Engineering Profiles</span>
                    <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-2 py-0.5 rounded">Active</span>
                  </div>

                  <div className="grid grid-cols-2 gap-2 text-xs">
                    <a
                      href={PERSONAL_INFO.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary p-2.5 justify-start text-xs font-bold hover:border-emerald-400"
                    >
                      <Github className="w-4 h-4 text-black" />
                      <span>GitHub</span>
                    </a>

                    <a
                      href={PERSONAL_INFO.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary p-2.5 justify-start text-xs font-bold hover:border-emerald-400"
                    >
                      <Linkedin className="w-4 h-4 text-black" />
                      <span>LinkedIn</span>
                    </a>

                    <a
                      href={PERSONAL_INFO.leetcode}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary p-2.5 justify-start text-xs font-bold hover:border-emerald-400"
                    >
                      <Code2 className="w-4 h-4 text-black" />
                      <span>LeetCode</span>
                    </a>

                    <a
                      href={PERSONAL_INFO.kaggle}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn-secondary p-2.5 justify-start text-xs font-bold hover:border-emerald-400"
                    >
                      <Binary className="w-4 h-4 text-black" />
                      <span>Kaggle</span>
                    </a>
                  </div>
                </div>

              </div>

              {/* Right Column: Verified Contact Form (7 cols) */}
              <div className="lg:col-span-7">
                <div className="bento-card p-6 sm:p-8 hover:border-emerald-300 transition-all duration-200">
                  <h3 className="text-lg sm:text-xl font-black text-black tracking-tight mb-1.5">
                    Send a Direct Message
                  </h3>
                  <p className="text-xs sm:text-sm text-zinc-700 mb-6 font-normal">
                    Fill in the details below to transmit a project inquiry, internship offer, or technical question.
                  </p>

                  {isSubmitted && (
                    <div className="mb-6 p-4 rounded-xl bg-emerald-50 border border-emerald-300 flex items-start gap-3">
                      <Check className="w-5 h-5 text-emerald-600 shrink-0 mt-0.5" />
                      <div>
                        <div className="text-sm font-bold text-emerald-950">
                          Email Client Prepared
                        </div>
                        <div className="text-xs text-emerald-900 mt-1">
                          Your message has been formatted. If your email client didn't open automatically, write directly to <span className="font-mono text-black font-bold">{PERSONAL_INFO.email}</span>.
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
                          className="block text-xs font-mono uppercase text-black font-bold mb-1.5"
                        >
                          Your Name *
                        </label>
                        <input
                          id="contact-name"
                          type="text"
                          value={formState.name}
                          onChange={(e) => {
                            setFormState({ ...formState, name: e.target.value });
                            if (errors.name) setErrors({ ...errors, name: '' });
                          }}
                          placeholder="e.g. John Doe"
                          className={`w-full px-3.5 py-2.5 rounded-xl bg-white border text-sm text-black placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all ${
                            errors.name ? 'border-red-500' : 'border-zinc-300 focus:border-black'
                          }`}
                        />
                        {errors.name && (
                          <span className="text-[11px] text-red-600 mt-1 font-mono block">
                            {errors.name}
                          </span>
                        )}
                      </div>

                      {/* Email */}
                      <div>
                        <label
                          htmlFor="contact-email"
                          className="block text-xs font-mono uppercase text-black font-bold mb-1.5"
                        >
                          Your Email *
                        </label>
                        <input
                          id="contact-email"
                          type="email"
                          value={formState.email}
                          onChange={(e) => {
                            setFormState({ ...formState, email: e.target.value });
                            if (errors.email) setErrors({ ...errors, email: '' });
                          }}
                          placeholder="e.g. john@example.com"
                          className={`w-full px-3.5 py-2.5 rounded-xl bg-white border text-sm text-black placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all ${
                            errors.email ? 'border-red-500' : 'border-zinc-300 focus:border-black'
                          }`}
                        />
                        {errors.email && (
                          <span className="text-[11px] text-red-600 mt-1 font-mono block">
                            {errors.email}
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Subject */}
                    <div>
                      <label
                        htmlFor="contact-subject"
                        className="block text-xs font-mono uppercase text-black font-bold mb-1.5"
                      >
                        Subject *
                      </label>
                      <input
                        id="contact-subject"
                        type="text"
                        value={formState.subject}
                        onChange={(e) => {
                          setFormState({ ...formState, subject: e.target.value });
                          if (errors.subject) setErrors({ ...errors, subject: '' });
                        }}
                        placeholder="e.g. AI System Collaboration or Internship Offer"
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-white border text-sm text-black placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all ${
                          errors.subject ? 'border-red-500' : 'border-zinc-300 focus:border-black'
                        }`}
                      />
                      {errors.subject && (
                        <span className="text-[11px] text-red-600 mt-1 font-mono block">
                          {errors.subject}
                        </span>
                      )}
                    </div>

                    {/* Message */}
                    <div>
                      <label
                        htmlFor="contact-message"
                        className="block text-xs font-mono uppercase text-black font-bold mb-1.5"
                      >
                        Message *
                      </label>
                      <textarea
                        id="contact-message"
                        rows={4}
                        value={formState.message}
                        onChange={(e) => {
                          setFormState({ ...formState, message: e.target.value });
                          if (errors.message) setErrors({ ...errors, message: '' });
                        }}
                        placeholder="Describe your technical inquiry, project scope, or opportunity..."
                        className={`w-full px-3.5 py-2.5 rounded-xl bg-white border text-sm text-black placeholder:text-zinc-500 focus:outline-none focus:ring-2 focus:ring-black/10 transition-all resize-y ${
                          errors.message ? 'border-red-500' : 'border-zinc-300 focus:border-black'
                        }`}
                      />
                      {errors.message && (
                        <span className="text-[11px] text-red-600 mt-1 font-mono block">
                          {errors.message}
                        </span>
                      )}
                    </div>

                    {/* Submit Button */}
                    <button
                      type="submit"
                      className="btn-primary w-full py-3"
                    >
                      <Send className="w-4 h-4 text-white" />
                      <span>Transmit Message</span>
                    </button>
                  </form>
                </div>
              </div>

            </div>
          </div>
        </SectionBorderFrame>
      </div>
    </section>
  );
}
