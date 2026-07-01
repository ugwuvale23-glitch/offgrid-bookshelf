import React from "react";
import { Star, Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  location: string;
  project: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    quote: "Following the step-by-step blueprints, I built our 10x15 solo retreat for exactly $4,120. Sourcing salvaged windows and setting up a simple single-pitch roof as detailed in Asher's book made all the difference.",
    author: "David L.",
    location: "Oregon",
    project: "Built a 150 Sq Ft Off-Grid Cabin",
    rating: 5,
  },
  {
    quote: "The solar array calculations in Volume 1 are bulletproof. I was ready to drop $2,000 on a pre-packaged kit, but using the DIY component blueprint, I configured an entry-level system for under $450 that powers all my essentials.",
    author: "Sarah M.",
    location: "Montana",
    project: "Installed 12V Battery & Solar Loop",
    rating: 5,
  },
  {
    quote: "The simple first-flush rainwater calculation and slow-sand filter guide completely transformed our property. We harvested and safely treated over 12,000 gallons of pure rainwater last year without the technical overwhelm.",
    author: "Miguel T.",
    location: "Texas",
    project: "Implemented 1,000 Gal Water System",
    rating: 5,
  },
];

export default function Reviews() {
  return (
    <div id="testimonials-section" className="space-y-8">
      <div className="text-center max-w-lg mx-auto">
        <h3 className="font-serif text-2xl md:text-3xl font-bold text-earth-950 mb-2">
          From the Field: Real DIY Success Stories
        </h3>
        <p className="text-sm text-earth-800">
          See how regular folks are breaking free from utility bills, designing cabins, and capturing resources with these step-by-step masterclasses.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
        {testimonials.map((t, idx) => (
          <div 
            key={idx} 
            className="flex flex-col justify-between bg-white border border-earth-200 rounded-3xl p-6 shadow-xs relative overflow-hidden transition-all duration-300 hover:border-forest-100 hover:shadow-md"
          >
            {/* Top quote icon */}
            <div className="absolute top-4 right-4 text-forest-100/40 opacity-70">
              <Quote className="w-10 h-10" strokeWidth={1} />
            </div>

            <div className="relative z-10 space-y-4">
              {/* Rating stars */}
              <div className="flex gap-1">
                {[...Array(t.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-accent-gold stroke-accent-gold" />
                ))}
              </div>

              {/* Quote Text */}
              <p className="text-sm text-earth-800 leading-relaxed italic">
                &ldquo;{t.quote}&rdquo;
              </p>
            </div>

            {/* Author details */}
            <div className="border-t border-earth-100 pt-4 mt-6 flex flex-col">
              <span className="font-sans font-bold text-sm text-earth-950">
                {t.author}
              </span>
              <span className="text-xs text-earth-800">
                {t.location} &bull; <span className="text-forest-600 font-medium">{t.project}</span>
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
