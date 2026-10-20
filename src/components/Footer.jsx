import React from 'react';
import { personalInfo, navLinks } from '../data/portfolioData';
import { ArrowUp, Download } from 'lucide-react';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-espresso text-ivory py-16 border-t border-espresso-light relative overflow-hidden">
      
      {/* Decorative Warm Backlight */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-terracotta/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-10 pb-12 border-b border-espresso-light/60">
          
          {/* Brand Info */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-ivory text-espresso font-serif text-xl font-bold flex items-center justify-center border-2 border-terracotta">
                K
              </div>
              <div>
                <span className="font-serif text-2xl font-semibold tracking-wide text-white block">
                  Kanika
                </span>
                <span className="text-xs uppercase tracking-widest text-[#DFD4BF]/70 font-medium">
                  Vancouver, BC, Canada
                </span>
              </div>
            </div>

            <p className="text-sm text-[#DFD4BF]/80 max-w-sm leading-relaxed">
              Dedicated professional combining empathetic child & youth support, community caregiving, hospital patient assistance, and commercial bakery leadership in Greater Vancouver.
            </p>

            <div className="pt-2 flex flex-col gap-1.5">
              <a
                href={personalInfo.resumeHealthcarePdf}
                download="Kanika_Mehra_Healthcare_Youth_Resume.pdf"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-terracotta-light hover:text-white transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Child & Youth / Healthcare CV (PDF)</span>
              </a>
              <a
                href={personalInfo.resumeBakeryPdf}
                download="Kanika_Bakery_FoodService_Resume.pdf"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-semibold text-sage-light hover:text-white transition-colors"
              >
                <Download className="w-3.5 h-3.5" />
                <span>Download Bakery & Food-Service CV (PDF)</span>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-4">
            <h4 className="text-xs font-bold uppercase tracking-widest text-terracotta-light mb-4">
              Portfolio Navigation
            </h4>
            <div className="grid grid-cols-2 gap-2.5 text-sm text-[#DFD4BF]/80">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="hover:text-white transition-colors py-0.5 focus:outline-none focus-visible:text-white"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          {/* Shift Details & Location */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-widest text-terracotta-light mb-2">
              Professional Availability
            </h4>
            <p className="text-sm text-[#DFD4BF]/90">
              Available for day, afternoon, evening, weekend, and holiday rotations across Vancouver and the Lower Mainland.
            </p>
            <p className="text-xs text-[#DFD4BF]/60 pt-2">
              Phone: {personalInfo.phone} <br />
              Email: {personalInfo.email}
            </p>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#DFD4BF]/60">
          <p>
            © {new Date().getFullYear()} Kanika. All rights reserved. Balanced professional portfolio representing healthcare, caregiving, youth support, and food service.
          </p>

          <button
            onClick={scrollToTop}
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-espresso-light/60 hover:bg-espresso-light text-[#DFD4BF] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
            aria-label="Scroll back to top of page"
          >
            <span>Back to Top</span>
            <ArrowUp className="w-3.5 h-3.5" />
          </button>
        </div>

      </div>
    </footer>
  );
}
