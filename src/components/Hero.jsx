import React, { useState } from 'react';
import { personalInfo } from '../data/portfolioData';
import { Download, ArrowDown, MapPin, Sparkles, HeartHandshake, CheckCircle2, ChevronDown, FileText } from 'lucide-react';

export default function Hero() {
  const [resumeDropdown, setResumeDropdown] = useState(false);

  return (
    <section 
      id="hero" 
      className="relative min-h-[92vh] pt-28 pb-16 lg:pt-36 lg:pb-24 flex items-center bg-subtle-grain overflow-hidden"
    >
      {/* Decorative Warm Ambient Glows */}
      <div className="absolute top-1/4 left-0 w-96 h-96 bg-terracotta/5 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 right-0 w-80 h-80 bg-sage/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Left Column: Text & Credibility */}
          <div className="lg:col-span-7 flex flex-col items-start">
            
            {/* Shift Availability Badge (Direct from CV) */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#EAE2D3]/70 border border-[#DFD4BF] text-espresso text-xs sm:text-sm font-medium mb-6 shadow-soft-sm">
              <span className="relative flex h-2.5 w-2.5">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sage opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-sage-dark"></span>
              </span>
              <span>{personalInfo.availability}</span>
            </div>

            {/* Main Editorial Headline */}
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl text-espresso tracking-tight leading-[1.14] mb-6 font-normal">
              Compassionate Care,{' '}
              <span className="italic font-serif text-terracotta underline decoration-[#EAE2D3] decoration-2 underline-offset-8">
                Community Support
              </span>{' '}
              & Professional Service.
            </h1>

            {/* Supporting Text */}
            <p className="text-base sm:text-lg lg:text-xl text-espresso-muted max-w-2xl leading-relaxed mb-8">
              {personalInfo.supportingText}
            </p>

            {/* CTAs with Dual Resume Download */}
            <div className="flex flex-wrap items-center gap-4 mb-10 w-full sm:w-auto relative">
              <a
                href="#experience"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-md bg-terracotta text-white font-medium text-sm tracking-wide hover:bg-terracotta-dark shadow-soft-md hover:shadow-soft-lg transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
              >
                <span>Explore My Experience</span>
                <ArrowDown className="w-4 h-4 animate-bounce" />
              </a>

              <div className="relative w-full sm:w-auto">
                <button
                  type="button"
                  onClick={() => setResumeDropdown(!resumeDropdown)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-md bg-white border border-[#DFD4BF] text-espresso font-medium text-sm tracking-wide hover:bg-[#F4EFE6] hover:border-terracotta/50 shadow-soft-sm transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
                  aria-expanded={resumeDropdown}
                >
                  <Download className="w-4 h-4 text-terracotta" />
                  <span>Download Resume</span>
                  <ChevronDown className={`w-3.5 h-3.5 transition-transform ${resumeDropdown ? 'rotate-180' : ''}`} />
                </button>

                {resumeDropdown && (
                  <div className="absolute left-0 sm:left-auto sm:right-0 top-full mt-2 w-72 bg-white rounded-lg shadow-soft-lg border border-[#DFD4BF] py-2 z-30 animate-in fade-in duration-150">
                    <a
                      href={personalInfo.resumeHealthcarePdf}
                      download="Kanika_Mehra_Healthcare_Youth_Resume.pdf"
                      onClick={() => setResumeDropdown(false)}
                      className="flex items-start gap-2.5 px-3 py-2.5 hover:bg-ivory text-left text-xs text-espresso"
                    >
                      <FileText className="w-4 h-4 text-terracotta mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="block font-semibold">Child & Youth / Healthcare CV</strong>
                        <span className="text-[11px] text-espresso-muted">Caregiving, Youth, Hospital (PDF)</span>
                      </div>
                    </a>
                    <a
                      href={personalInfo.resumeBakeryPdf}
                      download="Kanika_Bakery_FoodService_Resume.pdf"
                      onClick={() => setResumeDropdown(false)}
                      className="flex items-start gap-2.5 px-3 py-2.5 hover:bg-ivory text-left text-xs text-espresso border-t border-[#EAE2D3]"
                    >
                      <FileText className="w-4 h-4 text-sage-dark mt-0.5 flex-shrink-0" />
                      <div>
                        <strong className="block font-semibold">Bakery & Food-Service CV</strong>
                        <span className="text-[11px] text-espresso-muted">Head Baker & Dietary Aide (PDF)</span>
                      </div>
                    </a>
                  </div>
                )}
              </div>
            </div>

            {/* Key Fact Strip - Reflecting Balanced Background */}
            <div className="w-full pt-8 border-t border-[#EAE2D3] grid grid-cols-2 sm:grid-cols-3 gap-4">
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl font-semibold text-espresso">
                  Child & Youth
                </span>
                <span className="text-xs text-espresso-muted font-medium uppercase tracking-wider mt-0.5">
                  Autism & After-School Care
                </span>
              </div>
              <div className="flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl font-semibold text-espresso">
                  5+ Years
                </span>
                <span className="text-xs text-espresso-muted font-medium uppercase tracking-wider mt-0.5">
                  Healthcare & Caregiving
                </span>
              </div>
              <div className="col-span-2 sm:col-span-1 flex flex-col">
                <span className="font-serif text-2xl sm:text-3xl font-semibold text-terracotta">
                  Food & Bakery
                </span>
                <span className="text-xs text-espresso-muted font-medium uppercase tracking-wider mt-0.5">
                  Head Baker & Dietary Aide
                </span>
              </div>
            </div>

          </div>

          {/* Right Column: Balanced Care & Community Visual Frame */}
          <div className="lg:col-span-5 relative">
            <div className="relative mx-auto max-w-md lg:max-w-none">
              
              {/* Decorative Framing Accent */}
              <div className="absolute -inset-3 rounded-2xl bg-gradient-to-tr from-[#EAE2D3] to-[#F4EFE6] border border-[#DFD4BF] transform -rotate-1 hidden sm:block shadow-soft-sm" />
              
              {/* Main Visual Card */}
              <div className="relative rounded-xl overflow-hidden bg-white border border-[#DFD4BF] shadow-soft-lg">
                <div className="relative aspect-[4/5] overflow-hidden bg-[#EAE2D3]">
                  <img
                    src="/images/hero-care-support.jpg"
                    alt="Supportive community caregiving and inclusive environment"
                    className="w-full h-full object-cover object-center transform hover:scale-105 transition-transform duration-700 ease-out"
                    loading="eager"
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = '/images/childcare-activities.jpg';
                    }}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-espresso/85 via-espresso/20 to-transparent pointer-events-none" />
                  
                  {/* Floating Location Pill */}
                  <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md px-3 py-1.5 rounded-full border border-sand shadow-soft-sm flex items-center gap-1.5 text-xs font-semibold text-espresso">
                    <MapPin className="w-3.5 h-3.5 text-terracotta" />
                    <span>Vancouver, BC, Canada</span>
                  </div>

                  {/* Languages Pill */}
                  <div className="absolute top-4 right-4 bg-white/95 backdrop-blur-md px-2.5 py-1.5 rounded-full border border-sand shadow-soft-sm text-[11px] font-semibold text-espresso">
                    <span>En • Hi • Pa</span>
                  </div>

                  {/* Bottom Image Overlay Caption */}
                  <div className="absolute bottom-4 left-4 right-4 text-white">
                    <p className="text-xs uppercase tracking-widest text-[#EAE2D3] font-medium mb-1">
                      Professional Practice Focus
                    </p>
                    <p className="font-serif text-lg leading-snug">
                      Inclusive Youth Support, Compassionate Caregiving & Kitchen Excellence
                    </p>
                  </div>
                </div>

                {/* Card Sub-Banner */}
                <div className="p-4 bg-ivory-50 border-t border-[#EAE2D3] flex items-center justify-between text-xs text-espresso-muted">
                  <div className="flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-terracotta" />
                    <span className="font-medium text-espresso">Capilano University</span>
                  </div>
                  <span className="px-2 py-0.5 rounded bg-[#EAE2D3] font-semibold text-espresso text-[11px]">
                    Associate of Science
                  </span>
                </div>

              </div>

              {/* Verified Credentials Floating Badge */}
              <div className="absolute -bottom-5 -left-4 sm:-bottom-6 sm:-left-6 bg-white border border-[#DFD4BF] rounded-lg p-3 sm:p-4 shadow-soft-lg flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-sage-soft flex items-center justify-center text-sage-dark flex-shrink-0">
                  <CheckCircle2 className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-espresso">CPR, First Aid & FoodSafe</p>
                  <p className="text-[11px] text-espresso-muted">Clear CRC • WHMIS • TB Tested</p>
                </div>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
