import React from "react";
import { ShieldCheck, Mail, BookOpen, Compass } from "lucide-react";

export default function AuthorSection() {
  return (
    <div 
      id="about-the-author" 
      className="bg-white rounded-3xl p-6 md:p-8 border border-earth-200 max-w-4xl mx-auto shadow-sm"
    >
      <div className="flex flex-col md:flex-row gap-8 items-center">
        
        {/* Left column: Author Avatar / Graphic Representation */}
        <div className="relative shrink-0">
          <div className="w-36 h-36 md:w-44 md:h-44 rounded-2xl bg-forest-950 flex flex-col items-center justify-center text-center p-4 border border-forest-800 shadow-md relative overflow-hidden">
            {/* Background vector rings */}
            <div className="absolute inset-0 opacity-10 flex items-center justify-center">
              <svg width="140" height="140" viewBox="0 0 100 100">
                <circle cx="50" cy="50" r="45" fill="none" stroke="currentColor" strokeWidth="2" strokeDasharray="5,5" />
                <circle cx="50" cy="50" r="30" fill="none" stroke="currentColor" strokeWidth="2" />
              </svg>
            </div>
            
            <Compass className="w-12 h-12 text-accent-gold mb-2 relative z-10 animate-spin-slow" />
            <span className="font-serif font-bold text-white tracking-wide text-lg relative z-10">Asher Holt</span>
            <span className="text-[10px] text-forest-100 tracking-[0.15em] uppercase font-bold relative z-10 mt-1">Pioneer & Author</span>
          </div>
          
          {/* Accent decoration */}
          <div className="absolute -bottom-2 -right-2 bg-accent-gold text-forest-950 p-1.5 rounded-lg shadow-sm border border-forest-900">
            <ShieldCheck className="w-4 h-4" />
          </div>
        </div>

        {/* Right column: Biography content */}
        <div className="flex-1 space-y-4 text-left">
          <span className="inline-flex px-3 py-1 rounded-full text-xs font-semibold bg-forest-50 text-forest-700 border border-forest-100">
            Meet the Author
          </span>
          
          <h3 className="font-serif text-2xl md:text-3xl font-bold text-earth-950 leading-tight">
            Asher Holt
          </h3>
          
          <p className="text-sm text-earth-800 leading-relaxed">
            Asher Holt is a seasoned off-grid design specialist, builder, and practical self-sufficiency advocate. For over two decades, Asher has lived in remote homesteads throughout the Pacific Northwest and Colorado, hands-on constructing cabins, configuring solar/battery storage plants, and engineering clean gravity-fed rainwater distribution loops.
          </p>

          <p className="text-sm text-earth-800 leading-relaxed">
            Asher wrote these simplified manuals to cut through the heavy technical jargon and deliver direct, step-by-step blueprints that any regular builder can successfully complete on an everyday budget.
          </p>

          {/* Quick Credibility Badges */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 text-xs text-earth-900 font-semibold font-sans">
            <div className="flex items-center gap-2 bg-earth-50 rounded-lg p-2.5 border border-earth-200">
              <BookOpen className="w-4 h-4 text-forest-700" />
              <span>3 Published Off-Grid Masterclasses</span>
            </div>
            <div className="flex items-center gap-2 bg-earth-50 rounded-lg p-2.5 border border-earth-200">
              <ShieldCheck className="w-4 h-4 text-forest-700" />
              <span>Tested, Code-Compliant Methods</span>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
