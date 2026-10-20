import React from 'react';
import { personalInfo, keyPillars } from '../data/portfolioData';
import { Users, HeartHandshake, Activity, Wheat, CheckCircle2, Sparkles, BookOpen, Globe2 } from 'lucide-react';

const iconMap = {
  Users: Users,
  HeartHandshake: HeartHandshake,
  Activity: Activity,
  Wheat: Wheat
};

export default function About() {
  return (
    <section id="about" className="py-20 lg:py-28 bg-[#FFFFFF] border-y border-[#EAE2D3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-terracotta mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Professional Profile</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso tracking-tight leading-tight">
            Versatile Care, Community Mentorship & Kitchen Precision
          </h2>
          <div className="w-16 h-1 bg-terracotta mt-4 rounded-full" />
        </div>

        {/* Narrative & Pillars Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Combined Career Narrative */}
          <div className="lg:col-span-6 space-y-6 text-espresso-muted leading-relaxed text-base sm:text-lg">
            <p className="text-espresso font-medium text-lg sm:text-xl leading-snug">
              My professional journey unites hands-on child and youth support, empathetic senior caregiving, hospital patient assistance, and the discipline of commercial kitchen leadership.
            </p>
            
            <p>
              In youth work and childcare, including after-school support at Bee Haven / Bee Heaven and community autism mentorship, I create safe, structured environments that foster positive behaviour, social confidence, and communication. My approach emphasizes emotional regulation, visual routines, and trauma-informed support tailored to neurodiverse youth.
            </p>

            <p>
              In healthcare and caregiving, my experience spans both clinical inpatient support at Marwaha Hospital (vital sign recording, mobility, and patient feeding) and dedicated one-on-one community caregiving with ABC Home Support and Little Mountain Place, supporting seniors living with dementia through gentle companionship and consistent daily routines.
            </p>

            <p>
              Complementing my care background is substantial culinary and dietary experience: 8 months as Head Baker at Fresh St. Market overseeing commercial dough mixing, deck ovens, and production schedules, alongside 2.5 years as a senior-care Dietary Aide at South Granville Park Lodge ensuring meticulous dietary adherence and FoodSafe Level 1 standards.
            </p>

            {/* Academic & Language Strengths Callout */}
            <div className="p-5 rounded-lg bg-ivory border border-[#DFD4BF] mt-8">
              <h4 className="font-serif text-lg font-semibold text-espresso mb-3 flex items-center gap-2">
                <BookOpen className="w-4 h-4 text-terracotta" />
                <span>Science Foundation & Multilingual Communication</span>
              </h4>
              <p className="text-sm text-espresso-muted mb-4">
                Completed coursework in the Associate of Science (Biology) program at Capilano University, strengthening my clinical understanding of infection control, hygiene, human physiology, and meticulous record-keeping. Fluent in English, Hindi, and Punjabi, enabling inclusive communication with diverse families and clients.
              </p>
              <div className="flex flex-wrap gap-2 text-xs font-semibold text-espresso">
                <span className="px-2.5 py-1 rounded bg-white border border-[#DFD4BF]">Capilano University (Biology)</span>
                <span className="px-2.5 py-1 rounded bg-white border border-[#DFD4BF]">CPR & First Aid</span>
                <span className="px-2.5 py-1 rounded bg-white border border-[#DFD4BF]">FoodSafe Level 1</span>
                <span className="px-2.5 py-1 rounded bg-white border border-[#DFD4BF]">WHMIS</span>
                <span className="px-2.5 py-1 rounded bg-white border border-[#DFD4BF]">Clear Criminal Record Check</span>
                <span className="px-2.5 py-1 rounded bg-white border border-[#DFD4BF]">TB Test Clearance</span>
              </div>
            </div>

          </div>

          {/* Right Column: 4 Core Pillars */}
          <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-5">
            {keyPillars.map((pillar, idx) => {
              const IconComponent = iconMap[pillar.icon] || HeartHandshake;
              return (
                <div 
                  key={idx}
                  className="p-6 rounded-xl bg-ivory border border-[#DFD4BF] hover:border-terracotta/40 transition-all duration-300 shadow-soft-sm hover:shadow-soft-md flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-12 h-12 rounded-lg bg-white border border-[#DFD4BF] flex items-center justify-center text-terracotta mb-5 group-hover:bg-terracotta group-hover:text-white transition-colors duration-200">
                      <IconComponent className="w-6 h-6" />
                    </div>
                    <h3 className="font-serif text-xl text-espresso font-semibold mb-2 leading-snug">
                      {pillar.title}
                    </h3>
                    <p className="text-sm text-espresso-muted leading-relaxed">
                      {pillar.desc}
                    </p>
                  </div>

                  <div className="pt-4 mt-4 border-t border-[#EAE2D3] flex items-center gap-1.5 text-xs font-semibold text-terracotta">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sage-dark" />
                    <span>Verified Professional Competency</span>
                  </div>
                </div>
              );
            })}
          </div>

        </div>

      </div>
    </section>
  );
}
