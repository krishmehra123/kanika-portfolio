import React, { useState, useEffect, useRef } from 'react';
import { navLinks, personalInfo } from '../data/portfolioData';
import { Download, Menu, X, ArrowUpRight, ChevronDown, FileText } from 'lucide-react';

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [downloadDropdownOpen, setDownloadDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close dropdown on outside click or Escape
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setDownloadDropdownOpen(false);
      }
    };
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        setMobileMenuOpen(false);
        setDownloadDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-[#F8F5EF]/95 backdrop-blur-md shadow-soft-sm border-b border-[#EAE2D3] py-3' 
          : 'bg-[#F8F5EF]/80 backdrop-blur-sm py-4 sm:py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          
          {/* Brand Identity / Monogram */}
          <a 
            href="#hero" 
            className="flex items-center gap-3 group focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta rounded-lg p-1"
            aria-label="Kanika Portfolio Home"
          >
            <div className="w-10 h-10 rounded-full bg-espresso flex items-center justify-center text-ivory font-serif text-xl border-2 border-terracotta/40 group-hover:border-terracotta transition-colors shadow-soft-sm">
              <span>K</span>
            </div>
            <div className="flex flex-col">
              <span className="font-serif text-xl sm:text-2xl tracking-wide text-espresso font-semibold group-hover:text-terracotta transition-colors">
                Kanika
              </span>
              <span className="text-[11px] font-sans uppercase tracking-widest text-espresso-muted font-medium">
                Care, Community & Food Service
              </span>
            </div>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-6 xl:gap-7" aria-label="Main Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                className="text-sm font-medium text-espresso/80 hover:text-terracotta transition-colors relative py-1 focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta rounded"
              >
                {link.name}
              </a>
            ))}
          </nav>

          {/* Action CTAs: Download Resume Dropdown */}
          <div className="hidden sm:flex items-center gap-3 relative" ref={dropdownRef}>
            <button
              onClick={() => setDownloadDropdownOpen(!downloadDropdownOpen)}
              type="button"
              className="inline-flex items-center gap-2 px-4 py-2 text-xs uppercase tracking-wider font-semibold rounded-md bg-terracotta text-white hover:bg-terracotta-dark shadow-soft-sm hover:shadow-soft-md transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta focus-visible:ring-offset-2"
              aria-expanded={downloadDropdownOpen}
              aria-label="Download Resumes"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Resume</span>
              <ChevronDown className={`w-3.5 h-3.5 transition-transform ${downloadDropdownOpen ? 'rotate-180' : ''}`} />
            </button>

            {/* Resume Dropdown Menu */}
            {downloadDropdownOpen && (
              <div className="absolute right-0 top-full mt-2 w-72 bg-white rounded-lg shadow-soft-lg border border-[#DFD4BF] py-2 z-50 animate-in fade-in slide-in-from-top-2 duration-150">
                <div className="px-3 py-1.5 text-[11px] font-bold uppercase tracking-wider text-espresso-muted border-b border-[#EAE2D3]">
                  Select CV to Download
                </div>
                <a
                  href={personalInfo.resumeHealthcarePdf}
                  download="Kanika_Mehra_Healthcare_Youth_Resume.pdf"
                  onClick={() => setDownloadDropdownOpen(false)}
                  className="flex items-start gap-2.5 px-3 py-2.5 hover:bg-ivory text-left text-xs text-espresso transition-colors"
                >
                  <FileText className="w-4 h-4 text-terracotta mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block font-semibold text-espresso">Child & Youth / Healthcare CV</strong>
                    <span className="text-[11px] text-espresso-muted">Latest CV • Caregiving, Youth, Hospital (PDF)</span>
                  </div>
                </a>
                <a
                  href={personalInfo.resumeBakeryPdf}
                  download="Kanika_Bakery_FoodService_Resume.pdf"
                  onClick={() => setDownloadDropdownOpen(false)}
                  className="flex items-start gap-2.5 px-3 py-2.5 hover:bg-ivory text-left text-xs text-espresso transition-colors border-t border-[#EAE2D3]"
                >
                  <FileText className="w-4 h-4 text-sage-dark mt-0.5 flex-shrink-0" />
                  <div>
                    <strong className="block font-semibold text-espresso">Bakery & Food-Service CV</strong>
                    <span className="text-[11px] text-espresso-muted">Head Baker & Dietary Aide CV (PDF)</span>
                  </div>
                </a>
              </div>
            )}
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              type="button"
              className="p-2 rounded-md text-espresso hover:text-terracotta hover:bg-[#EAE2D3]/50 focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
              aria-expanded={mobileMenuOpen}
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-b border-[#EAE2D3] bg-[#F8F5EF] px-4 pt-3 pb-6 shadow-soft-lg animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col gap-2" aria-label="Mobile Navigation">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="px-3 py-2.5 rounded-md text-base font-medium text-espresso hover:bg-terracotta/10 hover:text-terracotta transition-colors flex items-center justify-between"
              >
                <span>{link.name}</span>
                <ArrowUpRight className="w-4 h-4 opacity-50" />
              </a>
            ))}
            
            <div className="pt-3 border-t border-[#EAE2D3] mt-2 flex flex-col gap-2">
              <span className="text-[11px] uppercase tracking-wider font-bold text-espresso-muted px-1">
                Download Resume Files:
              </span>
              <a
                href={personalInfo.resumeHealthcarePdf}
                download="Kanika_Mehra_Healthcare_Youth_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2.5 text-xs font-semibold rounded-md bg-terracotta text-white hover:bg-terracotta-dark transition-colors"
              >
                <Download className="w-4 h-4" />
                <span>Child & Youth / Healthcare CV (PDF)</span>
              </a>
              <a
                href={personalInfo.resumeBakeryPdf}
                download="Kanika_Bakery_FoodService_Resume.pdf"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full flex items-center justify-center gap-2 px-4 py-2 text-xs font-semibold rounded-md bg-white border border-[#DFD4BF] text-espresso hover:bg-ivory transition-colors"
              >
                <Download className="w-3.5 h-3.5 text-sage-dark" />
                <span>Bakery & Food Service CV (PDF)</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
