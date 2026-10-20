import React from 'react';
import { educationInfo } from '../data/portfolioData';
import { GraduationCap, MapPin, Calendar, CheckCircle2, BookOpen, AlertCircle } from 'lucide-react';

export default function Education() {
  return (
    <section id="education" className="py-16 lg:py-24 bg-[#F8F5EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-12">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-terracotta mb-2">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>Academic Background</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl text-espresso tracking-tight">
            Higher Education
          </h2>
          <div className="w-12 h-1 bg-terracotta mt-3 rounded-full" />
        </div>

        {/* Focused Editorial Card */}
        <div className="max-w-4xl bg-white rounded-xl border border-[#DFD4BF] p-7 sm:p-9 shadow-soft-sm hover:shadow-soft-md transition-all duration-300">
          <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 border-b border-[#EAE2D3] pb-6 mb-6">
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-lg bg-ivory border border-[#DFD4BF] flex items-center justify-center text-terracotta flex-shrink-0 mt-1">
                <BookOpen className="w-6 h-6" />
              </div>
              <div>
                <span className="text-xs font-bold uppercase tracking-widest text-terracotta">
                  Post-Secondary Science Credential
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-espresso">
                  {educationInfo.degree}
                </h3>
                <p className="text-base font-semibold text-espresso-muted mt-0.5">
                  {educationInfo.institution}
                </p>
                
                {/* Note regarding completion year difference between the two CVs */}
                <div className="mt-2.5 inline-flex items-start gap-1.5 px-3 py-1.5 rounded-md bg-amber-50 border border-amber-200 text-amber-900 text-xs">
                  <AlertCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-amber-700" />
                  <span><strong>Document Note:</strong> {educationInfo.flagNote}</span>
                </div>
              </div>
            </div>

            <div className="flex sm:flex-col items-start sm:items-end justify-between gap-1 text-xs text-espresso-muted flex-shrink-0">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-sage-soft text-sage-dark font-semibold">
                <Calendar className="w-3.5 h-3.5" />
                <span>{educationInfo.originalCompletedYear}</span>
              </span>
              <span className="inline-flex items-center gap-1.5 mt-1">
                <MapPin className="w-3.5 h-3.5 text-terracotta" />
                <span>{educationInfo.location}</span>
              </span>
            </div>
          </div>

          {/* Academic Highlights */}
          <div className="space-y-3">
            <h4 className="text-xs uppercase tracking-wider font-bold text-espresso">
              Relevance to Healthcare, Youth Development & Food Hygiene
            </h4>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1">
              {educationInfo.highlights.map((item, idx) => (
                <div key={idx} className="p-4 rounded-lg bg-[#F8F5EF] border border-[#DFD4BF] flex items-start gap-2.5">
                  <CheckCircle2 className="w-4 h-4 text-terracotta mt-0.5 flex-shrink-0" />
                  <p className="text-xs text-espresso leading-relaxed">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
