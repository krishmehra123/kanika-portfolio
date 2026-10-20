import React from 'react';
import { certifications } from '../data/portfolioData';
import { ShieldCheck, AlertOctagon, GlassWater, Activity, FileCheck, CheckCircle2, Award, ShieldAlert } from 'lucide-react';

const iconMap = {
  ShieldCheck: ShieldCheck,
  AlertOctagon: AlertOctagon,
  GlassWater: GlassWater,
  Activity: Activity,
  FileCheck: FileCheck,
  ShieldAlert: ShieldAlert
};

export default function Certifications() {
  return (
    <section id="certifications" className="py-20 lg:py-28 bg-[#FFFFFF] border-y border-[#EAE2D3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-terracotta mb-3">
            <Award className="w-3.5 h-3.5" />
            <span>Health, Safety & Compliance</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso tracking-tight leading-tight">
            Certifications, Screenings & Clinical Clearances
          </h2>
          <p className="mt-4 text-base sm:text-lg text-espresso-muted">
            Combined from both verified CV records. Reflects comprehensive compliance across childcare, healthcare, community caregiving, and commercial food safety in British Columbia.
          </p>
          <div className="w-16 h-1 bg-terracotta mt-4 rounded-full" />
        </div>

        {/* Certifications Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {certifications.map((cert, idx) => {
            const IconComponent = iconMap[cert.icon] || ShieldCheck;

            return (
              <div 
                key={idx}
                className="bg-[#F8F5EF] rounded-xl border border-[#DFD4BF] p-6 hover:border-terracotta/40 hover:shadow-soft-md transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between gap-3 mb-4">
                    <div className="w-11 h-11 rounded-lg bg-white border border-[#DFD4BF] flex items-center justify-center text-terracotta shadow-soft-sm">
                      <IconComponent className="w-5 h-5" />
                    </div>

                    <span className="inline-flex items-center gap-1 px-2.5 py-1 rounded-full bg-sage-soft text-sage-dark text-xs font-semibold">
                      <CheckCircle2 className="w-3.5 h-3.5" />
                      <span>Documented</span>
                    </span>
                  </div>

                  <h3 className="font-serif text-xl font-semibold text-espresso mb-1">
                    {cert.name}
                  </h3>
                  
                  <p className="text-xs font-semibold text-terracotta uppercase tracking-wider mb-3">
                    {cert.subtitle}
                  </p>

                  <p className="text-xs sm:text-sm text-espresso-muted leading-relaxed">
                    {cert.desc}
                  </p>
                </div>

                <div className="mt-6 pt-4 border-t border-[#DFD4BF]/60 flex items-center justify-between text-[11px] text-espresso-muted font-medium">
                  <span>Source Verification</span>
                  <span className="text-espresso font-semibold text-right">{cert.source}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Credential Status Note */}
        <div className="mt-10 p-5 rounded-lg bg-ivory-50 border border-[#DFD4BF] flex items-center justify-between flex-wrap gap-4 text-xs text-espresso-muted">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-sage-dark flex-shrink-0" />
            <span>Documented qualifications across both CV records. Physical records and clinical screening certificates available upon request.</span>
          </div>
          <span className="font-medium text-espresso">Verified Without Unsubstantiated Expiry Claims</span>
        </div>

      </div>
    </section>
  );
}
