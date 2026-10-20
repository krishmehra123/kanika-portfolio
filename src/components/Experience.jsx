import React, { useState } from 'react';
import { experienceList } from '../data/portfolioData';
import { Briefcase, MapPin, ChevronDown, ChevronUp, AlertCircle, Filter } from 'lucide-react';

export default function Experience() {
  const [expandedId, setExpandedId] = useState(experienceList[0].id);
  const [selectedCategory, setSelectedCategory] = useState("All");

  const categories = ["All", "Child & Youth", "Caregiving & Healthcare", "Food Service"];

  const filteredJobs = experienceList.filter(job => {
    if (selectedCategory === "All") return true;
    if (selectedCategory === "Child & Youth") {
      return job.tag.includes("Childcare") || job.tag.includes("Youth");
    }
    if (selectedCategory === "Caregiving & Healthcare") {
      return job.tag.includes("Caregiving") || job.tag.includes("Healthcare") || job.tag.includes("Wellness");
    }
    if (selectedCategory === "Food Service") {
      return job.tag.includes("Food") || job.tag.includes("Bakery") || job.tag.includes("Kitchen");
    }
    return true;
  });

  const toggleExpand = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  return (
    <section id="experience" className="py-20 lg:py-28 bg-[#F8F5EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-terracotta mb-3">
              <Briefcase className="w-3.5 h-3.5" />
              <span>Career Chronology & Roles</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso tracking-tight leading-tight">
              Professional Experience
            </h2>
            <p className="mt-4 text-base sm:text-lg text-espresso-muted">
              Grounded in care, youth mentorship, healthcare, and commercial food service. Sourced directly from both verified CV records.
            </p>
            <div className="w-16 h-1 bg-terracotta mt-4 rounded-full" />
          </div>

          {/* Category Filter Pills */}
          <div className="flex flex-wrap gap-2 pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta ${
                  selectedCategory === cat
                    ? 'bg-espresso text-white shadow-soft-sm'
                    : 'bg-white text-espresso border border-[#DFD4BF] hover:bg-[#F4EFE6]'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Vertical Timeline / Editorial Cards */}
        <div className="relative border-l-2 border-[#DFD4BF] ml-4 sm:ml-8 md:ml-36 pl-6 sm:pl-10 space-y-12">
          {filteredJobs.map((job) => {
            const isExpanded = expandedId === job.id;

            return (
              <div key={job.id} className="relative group">
                
                {/* Timeline Node Point */}
                <div className="absolute -left-[31px] sm:-left-[47px] top-1.5 w-6 h-6 rounded-full bg-white border-4 border-terracotta group-hover:scale-110 group-hover:border-terracotta-dark transition-all duration-200 shadow-soft-sm" />

                {/* Left Date Label on Large Displays */}
                <div className="hidden md:block absolute -left-52 top-1 text-right w-44">
                  <span className="font-serif text-lg font-semibold text-espresso block leading-tight">
                    {job.duration}
                  </span>
                  <span className="text-[11px] uppercase tracking-wider text-espresso-muted font-medium block mt-0.5">
                    {job.tag}
                  </span>
                </div>

                {/* Main Experience Card */}
                <div className="bg-white rounded-xl border border-[#DFD4BF] p-6 sm:p-8 shadow-soft-sm hover:shadow-soft-md transition-all duration-300">
                  
                  {/* Top Role & Company Info */}
                  <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-[#EAE2D3] pb-5 mb-5">
                    <div>
                      <div className="flex items-center gap-2 mb-1.5">
                        <span className="md:hidden text-xs font-semibold px-2.5 py-0.5 rounded bg-[#EAE2D3] text-espresso uppercase tracking-wider">
                          {job.duration}
                        </span>
                        <span className="text-xs font-semibold text-terracotta uppercase tracking-wider">
                          {job.tag}
                        </span>
                      </div>
                      
                      <h3 className="font-serif text-2xl sm:text-3xl font-semibold text-espresso">
                        {job.role}
                      </h3>
                      
                      <p className="text-base sm:text-lg font-medium text-terracotta mt-0.5">
                        {job.company}
                      </p>

                      {/* Flagged CV Discrepancy Note */}
                      {job.companyNote && (
                        <div className="mt-2 inline-flex items-start gap-1.5 px-3 py-1.5 rounded-md bg-amber-50 border border-amber-200 text-amber-900 text-xs">
                          <AlertCircle className="w-3.5 h-3.5 mt-0.5 flex-shrink-0 text-amber-700" />
                          <span><strong>Note:</strong> {job.companyNote}</span>
                        </div>
                      )}
                    </div>

                    <div className="flex items-center gap-4 text-xs sm:text-sm text-espresso-muted flex-shrink-0">
                      <div className="flex items-center gap-1.5">
                        <MapPin className="w-4 h-4 text-terracotta" />
                        <span>{job.location}</span>
                      </div>
                    </div>
                  </div>

                  {/* Summary Narrative */}
                  <p className="text-base text-espresso-muted leading-relaxed mb-6">
                    {job.summary}
                  </p>

                  {/* Key Skills Pill Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {job.skills.map((skill, sIdx) => (
                      <span 
                        key={sIdx}
                        className="px-3 py-1 rounded-md text-xs font-medium bg-[#F8F5EF] text-espresso border border-[#DFD4BF]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>

                  {/* Expandable Responsibilities Accordion */}
                  <div>
                    <button
                      onClick={() => toggleExpand(job.id)}
                      className="inline-flex items-center gap-2 text-xs uppercase tracking-wider font-bold text-terracotta hover:text-terracotta-dark focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta rounded py-1"
                      aria-expanded={isExpanded}
                    >
                      <span>{isExpanded ? 'Hide Specific Responsibilities' : `View Specific Responsibilities (${job.responsibilities.length})`}</span>
                      {isExpanded ? <ChevronUp className="w-4 h-4" /> : <ChevronDown className="w-4 h-4" />}
                    </button>

                    {isExpanded && (
                      <ul className="mt-4 pt-4 border-t border-[#EAE2D3] space-y-2.5 animate-in fade-in duration-200">
                        {job.responsibilities.map((resp, rIdx) => (
                          <li key={rIdx} className="flex items-start gap-3 text-sm text-espresso-muted leading-relaxed">
                            <span className="w-1.5 h-1.5 rounded-full bg-terracotta mt-2 flex-shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>

                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
