import React from 'react';
import { skillCategories } from '../data/portfolioData';
import { Users, HeartHandshake, ShieldCheck, Wheat, CheckCircle, Sparkles, Flame, Heart } from 'lucide-react';

const iconMap = {
  Users: Users,
  HeartHandshake: HeartHandshake,
  ShieldCheck: ShieldCheck,
  Wheat: Wheat
};

export default function Skills() {
  return (
    <section id="skills" className="py-20 lg:py-28 bg-[#FFFFFF] border-y border-[#EAE2D3] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-terracotta mb-3">
            <Sparkles className="w-3.5 h-3.5" />
            <span>Core Competencies & Capabilities</span>
          </div>
          <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso tracking-tight leading-tight">
            Balanced Skills Across Care, Support & Kitchen Operations
          </h2>
          <p className="mt-4 text-base sm:text-lg text-espresso-muted">
            Prioritizing child & youth development, empathetic caregiving, and community inclusion, backed by proven commercial kitchen rigor and FoodSafe discipline.
          </p>
          <div className="w-16 h-1 bg-terracotta mt-4 rounded-full" />
        </div>

        {/* 4 Skill Categories Grid with Care Prominence */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skillCategories.map((group, idx) => {
            const IconComponent = iconMap[group.icon] || HeartHandshake;
            const isCarePriority = group.priority === "high";

            return (
              <div 
                key={idx}
                className={`rounded-xl border p-7 sm:p-8 flex flex-col justify-between transition-all duration-300 ${
                  isCarePriority 
                    ? 'bg-[#F8F5EF] border-terracotta/30 shadow-soft-sm hover:shadow-soft-md ring-1 ring-terracotta/10'
                    : 'bg-white border-[#DFD4BF] hover:border-terracotta/40 shadow-soft-sm'
                }`}
              >
                <div>
                  {/* Category Header */}
                  <div className="flex items-center justify-between gap-4 mb-4">
                    <div className="flex items-center gap-3.5">
                      <div className={`w-12 h-12 rounded-lg flex items-center justify-center shadow-soft-sm ${
                        isCarePriority ? 'bg-white text-terracotta border border-[#DFD4BF]' : 'bg-ivory text-espresso border border-[#DFD4BF]'
                      }`}>
                        <IconComponent className="w-6 h-6" />
                      </div>
                      <div>
                        <h3 className="font-serif text-2xl font-semibold text-espresso">
                          {group.category}
                        </h3>
                        <p className="text-xs text-espresso-muted mt-0.5">
                          {group.desc}
                        </p>
                      </div>
                    </div>

                    {isCarePriority && (
                      <span className="hidden sm:inline-block px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-terracotta/10 text-terracotta border border-terracotta/20">
                        Primary Focus
                      </span>
                    )}
                  </div>

                  <div className="w-full h-px bg-[#EAE2D3] my-5" />

                  {/* Skills Checklist */}
                  <ul className="space-y-3">
                    {group.skills.map((skill, sIdx) => (
                      <li key={sIdx} className="flex items-start gap-3 group/item">
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center mt-0.5 flex-shrink-0 ${
                          isCarePriority ? 'bg-white border border-terracotta/40 text-terracotta' : 'bg-ivory border border-[#DFD4BF] text-sage-dark'
                        }`}>
                          <CheckCircle className="w-3.5 h-3.5" />
                        </div>
                        <span className="text-sm font-medium text-espresso leading-snug">
                          {skill}
                        </span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Card Footer Tag */}
                <div className="mt-8 pt-4 border-t border-[#DFD4BF]/60 flex items-center justify-between text-xs text-espresso-muted">
                  <span className="font-semibold text-terracotta uppercase tracking-wider">
                    {group.skills.length} Documented Skills
                  </span>
                  <span className="text-[11px] bg-white px-2.5 py-0.5 rounded border border-[#DFD4BF]">
                    Hands-On Practice
                  </span>
                </div>

              </div>
            );
          })}
        </div>

        {/* Holistic Professional Synthesis Strip */}
        <div className="mt-12 bg-ivory rounded-xl border border-[#DFD4BF] p-6 sm:p-8">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
            <div className="max-w-xl">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-wider text-terracotta mb-1">
                <Heart className="w-4 h-4" />
                <span>Interdisciplinary Reliability</span>
              </div>
              <h4 className="font-serif text-xl sm:text-2xl font-semibold text-espresso">
                Bridging Care Empathy with Operational Discipline
              </h4>
              <p className="text-sm text-espresso-muted mt-1">
                The strict attention to detail required in commercial bakery production translates directly into impeccable medication scheduling, dietary restrictions, infection prevention, and calm routine adherence in community care.
              </p>
            </div>

            <div className="flex flex-wrap gap-2.5">
              {[
                "Trauma-Informed Care",
                "Positive Behaviour Support",
                "Sensory Routines",
                "Vital Signs Monitoring",
                "Dementia Reassurance",
                "FoodSafe Level 1",
                "CPR & First Aid"
              ].map((item, iIdx) => (
                <span 
                  key={iIdx}
                  className="px-3.5 py-1.5 rounded-lg text-xs font-semibold bg-white border border-[#DFD4BF] text-espresso shadow-soft-sm"
                >
                  {item}
                </span>
              ))}
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
