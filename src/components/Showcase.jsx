import React, { useState } from 'react';
import { showcaseItems } from '../data/portfolioData';
import { Sparkles, Info, Eye, X, ZoomIn } from 'lucide-react';

export default function Showcase() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);

  const categories = ["All", "Child & Youth Support", "Caregiving & Healthcare", "Bakery & Food Service"];

  const filteredItems = activeCategory === "All" 
    ? showcaseItems 
    : showcaseItems.filter(item => item.category === activeCategory);

  return (
    <section id="showcase" className="py-20 lg:py-28 bg-[#F8F5EF] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-terracotta mb-3">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Practice Environments & Techniques</span>
            </div>
            <h2 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-espresso tracking-tight leading-tight">
              Work Environments & Core Practice
            </h2>
            <div className="w-16 h-1 bg-terracotta mt-4 rounded-full" />
          </div>

          {/* Professional Transparency Label */}
          <div className="max-w-md bg-white border border-[#DFD4BF] rounded-lg p-3.5 shadow-soft-sm flex items-start gap-3">
            <Info className="w-4 h-4 text-terracotta mt-0.5 flex-shrink-0" />
            <p className="text-xs text-espresso-muted leading-relaxed">
              <strong className="text-espresso font-semibold">Visual Practice Showcase:</strong> Illustrative photographs representing real-world practice settings across youth activity rooms, community caregiving, clinical hospital wards, and commercial bakeries.
            </p>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex flex-wrap items-center gap-2 mb-10 pb-2 border-b border-[#EAE2D3]" role="tablist">
          {categories.map((cat) => (
            <button
              key={cat}
              role="tab"
              aria-selected={activeCategory === cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all duration-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta ${
                activeCategory === cat
                  ? 'bg-espresso text-white shadow-soft-sm'
                  : 'bg-white text-espresso border border-[#DFD4BF] hover:bg-[#F4EFE6] hover:border-terracotta/40'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredItems.map((item) => (
            <div
              key={item.id}
              className="group bg-white rounded-xl border border-[#DFD4BF] overflow-hidden shadow-soft-sm hover:shadow-soft-lg transition-all duration-300 flex flex-col justify-between"
            >
              {/* Image Container with Hover Overlay */}
              <div 
                className="relative aspect-[4/3] overflow-hidden bg-[#EAE2D3] cursor-pointer"
                onClick={() => setSelectedItem(item)}
              >
                <img
                  src={item.image}
                  alt={item.alt}
                  className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out"
                  loading="lazy"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/images/childcare-activities.jpg';
                  }}
                />
                
                <div className="absolute inset-0 bg-espresso/40 opacity-0 group-hover:opacity-100 transition-opacity duration-200 flex items-center justify-center">
                  <div className="px-3 py-1.5 rounded-full bg-white/95 text-espresso text-xs font-semibold flex items-center gap-1.5 shadow-soft-md transform translate-y-2 group-hover:translate-y-0 transition-transform">
                    <ZoomIn className="w-3.5 h-3.5 text-terracotta" />
                    <span>View Focus Area</span>
                  </div>
                </div>

                {/* Category Badge */}
                <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded text-[10px] font-bold text-espresso uppercase tracking-wider shadow-soft-sm">
                  {item.category}
                </div>
              </div>

              {/* Content Description */}
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-serif text-lg font-semibold text-espresso mb-1.5 group-hover:text-terracotta transition-colors leading-snug">
                    {item.title}
                  </h3>
                  <p className="text-xs text-espresso-muted leading-relaxed mb-4">
                    {item.caption}
                  </p>
                </div>

                <div className="pt-3 border-t border-[#EAE2D3]">
                  <div className="flex flex-wrap gap-1.5">
                    {item.tags.map((tag, tIdx) => (
                      <span 
                        key={tIdx}
                        className="text-[10px] uppercase tracking-wider font-medium px-2 py-0.5 rounded bg-[#F8F5EF] text-espresso border border-[#EAE2D3]"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          ))}
        </div>

        {/* Modal / Lightbox for Full Inspection */}
        {selectedItem && (
          <div 
            className="fixed inset-0 z-50 bg-espresso/80 backdrop-blur-sm p-4 sm:p-6 flex items-center justify-center animate-in fade-in duration-200"
            onClick={() => setSelectedItem(null)}
          >
            <div 
              className="bg-white rounded-2xl max-w-3xl w-full overflow-hidden shadow-2xl border border-[#DFD4BF] relative"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedItem(null)}
                className="absolute top-4 right-4 z-10 w-9 h-9 rounded-full bg-espresso/70 hover:bg-espresso text-white flex items-center justify-center transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-terracotta"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="relative aspect-video w-full bg-[#35251F]">
                <img
                  src={selectedItem.image}
                  alt={selectedItem.alt}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="p-6 sm:p-8 bg-ivory-50">
                <div className="inline-block text-xs font-bold uppercase tracking-wider text-terracotta mb-2">
                  {selectedItem.category}
                </div>
                <h3 className="font-serif text-2xl sm:text-3xl text-espresso font-semibold mb-2">
                  {selectedItem.title}
                </h3>
                <p className="text-sm sm:text-base text-espresso-muted leading-relaxed mb-5">
                  {selectedItem.caption}
                </p>

                <div className="pt-4 border-t border-[#DFD4BF] flex flex-wrap items-center justify-between gap-3">
                  <div className="flex flex-wrap gap-2">
                    {selectedItem.tags.map((tag, idx) => (
                      <span key={idx} className="px-3 py-1 rounded bg-white text-xs font-semibold text-espresso border border-[#DFD4BF]">
                        {tag}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setSelectedItem(null)}
                    className="px-4 py-2 rounded-md bg-terracotta text-white text-xs font-semibold uppercase tracking-wider hover:bg-terracotta-dark transition-colors"
                  >
                    Done Viewing
                  </button>
                </div>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
