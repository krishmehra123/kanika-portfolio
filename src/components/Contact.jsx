import React, { useState } from 'react';
import { personalInfo, referenceNotice } from '../data/portfolioData';
import { Mail, Phone, MapPin, Send, Copy, Check, Sparkles, Clock, Download, ShieldCheck, UserCheck } from 'lucide-react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const [formData, setFormData] = useState({
    name: '',
    organization: '',
    role: '',
    message: ''
  });

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Employment Inquiry / Professional Opportunity: ${formData.organization || formData.name}`);
    const body = encodeURIComponent(
      `Hello Kanika,\n\nName: ${formData.name}\nOrganization: ${formData.organization}\nOpportunity/Role: ${formData.role}\n\nMessage:\n${formData.message}\n\nBest regards,\n${formData.name}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-20 lg:py-28 bg-[#FFFFFF] border-t border-[#EAE2D3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-terracotta mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Connect & Inquire</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso tracking-tight leading-tight">
            Get in Touch for Opportunities in Vancouver
          </h2>
          <p className="mt-4 text-base sm:text-lg text-espresso-muted">
            Open to child & youth support, community caregiving, healthcare support, and commercial bakery production roles across Vancouver, North Vancouver, and the Lower Mainland.
          </p>
          <div className="w-16 h-1 bg-terracotta mt-4 rounded-full" />
        </div>

        {/* Contact Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
          
          {/* Left Column: Direct Verified Contact Cards */}
          <div className="lg:col-span-5 space-y-5">
            
            {/* Email Card */}
            <div className="bg-[#F8F5EF] rounded-xl border border-[#DFD4BF] p-6 shadow-soft-sm hover:border-terracotta/40 transition-all">
              <div className="flex items-start justify-between">
                <div className="w-12 h-12 rounded-lg bg-white border border-[#DFD4BF] flex items-center justify-center text-terracotta shadow-soft-sm">
                  <Mail className="w-6 h-6" />
                </div>
                <button
                  onClick={handleCopyEmail}
                  className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded text-xs font-semibold bg-white border border-[#DFD4BF] text-espresso hover:bg-[#F4EFE6] transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
                  aria-label="Copy Kanika's email address"
                >
                  {copied ? <Check className="w-3.5 h-3.5 text-sage-dark" /> : <Copy className="w-3.5 h-3.5" />}
                  <span>{copied ? 'Copied!' : 'Copy Email'}</span>
                </button>
              </div>

              <div className="mt-4">
                <span className="text-xs uppercase tracking-wider font-semibold text-espresso-muted">
                  Direct Email
                </span>
                <a 
                  href={`mailto:${personalInfo.email}`}
                  className="font-serif text-xl sm:text-2xl font-semibold text-espresso hover:text-terracotta transition-colors block mt-0.5 break-all focus:outline-none focus-visible:underline"
                >
                  {personalInfo.email}
                </a>
                <p className="text-xs text-espresso-muted mt-1.5">
                  Click to open your preferred email client directly.
                </p>
              </div>
            </div>

            {/* Telephone Card */}
            <div className="bg-[#F8F5EF] rounded-xl border border-[#DFD4BF] p-6 shadow-soft-sm hover:border-terracotta/40 transition-all">
              <div className="w-12 h-12 rounded-lg bg-white border border-[#DFD4BF] flex items-center justify-center text-terracotta shadow-soft-sm">
                <Phone className="w-6 h-6" />
              </div>

              <div className="mt-4">
                <span className="text-xs uppercase tracking-wider font-semibold text-espresso-muted">
                  Telephone Contact (Verified)
                </span>
                <a 
                  href={`tel:${personalInfo.rawPhone}`}
                  className="font-serif text-xl sm:text-2xl font-semibold text-espresso hover:text-terracotta transition-colors block mt-0.5 focus:outline-none focus-visible:underline"
                >
                  {personalInfo.phone}
                </a>
                <p className="text-xs text-espresso-muted mt-1.5">
                  Available for phone screenings, interviews, and direct inquiries.
                </p>
              </div>
            </div>

            {/* Professional References Card (Protecting Personal Phone Numbers) */}
            <div className="bg-[#F8F5EF] rounded-xl border border-[#DFD4BF] p-6 shadow-soft-sm">
              <div className="flex items-center gap-3 mb-2">
                <div className="w-9 h-9 rounded-lg bg-white border border-[#DFD4BF] flex items-center justify-center text-sage-dark">
                  <UserCheck className="w-4 h-4" />
                </div>
                <div>
                  <h4 className="font-serif text-lg font-semibold text-espresso">
                    Professional References
                  </h4>
                  <p className="text-xs text-espresso-muted">Verified Healthcare & Community Referees</p>
                </div>
              </div>

              <p className="text-xs text-espresso-muted leading-relaxed mt-2">
                {referenceNotice.text}
              </p>
              <div className="pt-3 border-t border-[#EAE2D3] mt-3 flex items-center gap-2 text-[11px] text-espresso font-medium">
                <ShieldCheck className="w-3.5 h-3.5 text-sage-dark flex-shrink-0" />
                <span>{referenceNotice.privacyNote}</span>
              </div>
            </div>

            {/* Resume Downloads Option Card */}
            <div className="p-5 rounded-xl bg-ivory border border-dashed border-terracotta/40 space-y-3">
              <div>
                <p className="text-xs font-bold text-espresso">Download Verifiable CV Documents</p>
                <p className="text-[11px] text-espresso-muted">Select the CV that best matches your hiring focus:</p>
              </div>

              <div className="flex flex-col sm:flex-row gap-2.5">
                <a
                  href={personalInfo.resumeHealthcarePdf}
                  download="Kanika_Mehra_Healthcare_Youth_Resume.pdf"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md bg-terracotta text-white text-xs font-semibold hover:bg-terracotta-dark transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>Child & Youth / Healthcare CV</span>
                </a>
                <a
                  href={personalInfo.resumeBakeryPdf}
                  download="Kanika_Bakery_FoodService_Resume.pdf"
                  className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-md bg-white border border-[#DFD4BF] text-espresso text-xs font-semibold hover:bg-[#F4EFE6] transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-sage-dark" />
                  <span>Bakery & Food Service CV</span>
                </a>
              </div>
            </div>

          </div>

          {/* Right Column: Direct Message Composer */}
          <div className="lg:col-span-7 bg-[#F8F5EF] rounded-2xl border border-[#DFD4BF] p-8 sm:p-10 shadow-soft-md">
            <div className="mb-6">
              <h3 className="font-serif text-2xl font-semibold text-espresso">
                Send an Inquiry or Interview Invitation
              </h3>
              <p className="text-xs sm:text-sm text-espresso-muted mt-1">
                Fill out the details below to launch a pre-composed message directly in your email client addressed to Kanika.
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label htmlFor="contact-name" className="block text-xs font-bold uppercase tracking-wider text-espresso mb-1.5">
                    Your Name <span className="text-terracotta">*</span>
                  </label>
                  <input
                    id="contact-name"
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="e.g. Sarah Jenkins"
                    className="w-full px-4 py-2.5 rounded-lg bg-white border border-[#DFD4BF] text-espresso text-sm placeholder:text-espresso-muted/50 focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta transition-colors"
                  />
                </div>

                <div>
                  <label htmlFor="contact-org" className="block text-xs font-bold uppercase tracking-wider text-espresso mb-1.5">
                    Organization / Facility
                  </label>
                  <input
                    id="contact-org"
                    type="text"
                    value={formData.organization}
                    onChange={(e) => setFormData({ ...formData, organization: e.target.value })}
                    placeholder="e.g. Community Centre / Care Home / Bakery"
                    className="w-full px-4 py-2.5 rounded-lg bg-white border border-[#DFD4BF] text-espresso text-sm placeholder:text-espresso-muted/50 focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta transition-colors"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="contact-role" className="block text-xs font-bold uppercase tracking-wider text-espresso mb-1.5">
                  Position / Subject
                </label>
                <input
                  id="contact-role"
                  type="text"
                  value={formData.role}
                  onChange={(e) => setFormData({ ...formData, role: e.target.value })}
                  placeholder="e.g. Child & Youth Support / Caregiver / Kitchen Operations"
                  className="w-full px-4 py-2.5 rounded-lg bg-white border border-[#DFD4BF] text-espresso text-sm placeholder:text-espresso-muted/50 focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta transition-colors"
                />
              </div>

              <div>
                <label htmlFor="contact-message" className="block text-xs font-bold uppercase tracking-wider text-espresso mb-1.5">
                  Message <span className="text-terracotta">*</span>
                </label>
                <textarea
                  id="contact-message"
                  required
                  rows={4}
                  value={formData.message}
                  onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  placeholder="Share details regarding shift schedule, facility environment, participant needs, or scheduling an interview..."
                  className="w-full px-4 py-2.5 rounded-lg bg-white border border-[#DFD4BF] text-espresso text-sm placeholder:text-espresso-muted/50 focus:outline-none focus:border-terracotta focus:ring-1 focus:ring-terracotta transition-colors resize-none"
                />
              </div>

              <div className="pt-2">
                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 rounded-md bg-terracotta text-white font-medium text-sm tracking-wide hover:bg-terracotta-dark shadow-soft-sm hover:shadow-soft-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
                >
                  <Send className="w-4 h-4" />
                  <span>Send Message via Email</span>
                </button>
              </div>

              <p className="text-[11px] text-espresso-muted mt-2">
                * Launches your default email client addressed to <span className="font-semibold text-espresso">{personalInfo.email}</span>. No third-party servers store your message.
              </p>
            </form>
          </div>

        </div>

      </div>
    </section>
  );
}
