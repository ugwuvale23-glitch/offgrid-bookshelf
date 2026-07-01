import React from "react";
import { 
  BookOpen, 
  Sparkles, 
  CheckCircle, 
  ExternalLink, 
  Layers, 
  Hammer, 
  Droplet, 
  ShieldAlert, 
  Heart,
  Compass
} from "lucide-react";
import BookCard from "./components/BookCard";
import Calculator from "./components/Calculator";
import Reviews from "./components/Reviews";
import AuthorSection from "./components/AuthorSection";
import ShareWidget from "./components/ShareWidget";

import coverPowerWater from "./assets/images/cover_power_water_1782921309462.jpg";
import coverCabinBuild from "./assets/images/cover_cabin_build_1782921324561.jpg";
import coverHomesteadProjects from "./assets/images/cover_homestead_projects_1782921337656.jpg";
import offGridBg from "./assets/images/off_grid_bg_1782922285102.jpg";

const booksData = [
  {
    id: 1,
    title: "Off-Grid Power and Water Systems Simplified",
    hook: "Master solar power, battery banks, water harvesting, and off-grid plumbing without the technical overwhelm.",
    sub: "Volume I: Energy & Hydraulics",
    imageUrl: coverPowerWater,
    bullets: [
      "Size your off-grid battery bank (LiFePO4/lead-acid) with 100% precision",
      "Wire and align solar panels in optimal series-parallel combinations",
      "Design zero-waste rainwater collection loops with first-flush diverters",
      "Troubleshoot 12V DC plumbing and water pumps like a certified pro"
    ],
    buttonText: "View on Amazon",
    buttonUrl: "https://www.amazon.com/Off-Grid-Power-Water-Systems-Simplified/dp/B0FHQQ3CMQ",
    themeColor: "forest",
    coverStyle: {
      bg: "bg-forest-950",
      text: "text-forest-100",
      accent: "text-accent-gold",
      pattern: "M0 10 h20 M10 0 v20",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <circle cx="12" cy="12" r="5" strokeWidth="2" />
          <path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" strokeWidth="2" strokeLinecap="round" />
          <path d="M12 12c-2 0-3 1.5-3 3.5s1 2.5 3 2.5 3-.5 3-2.5-1-3.5-3-3.5z" strokeWidth="1.5" />
        </svg>
      )
    }
  },
  {
    id: 2,
    title: "Build Your Off-Grid Cabin for Under $5,000",
    hook: "A step-by-step blueprint to designing, sourcing materials, and constructing a budget-friendly cabin from scratch.",
    sub: "Volume II: Structural Blueprints",
    imageUrl: coverCabinBuild,
    bullets: [
      "Implement the 3-4-5 triangle leveling method for a perfectly square layout",
      "Lay gravel pads, concrete block piers, or mobile skids for under $400",
      "Framing strategies (OVE) that cut dimensional lumber waste by 30%",
      "Source architectural salvage windows and insulate safely on a budget"
    ],
    buttonText: "View on Amazon",
    buttonUrl: "https://www.amazon.com/Build-Off-Grid-Cabin-Under-Step/dp/B0FH2XJ3RG/",
    themeColor: "earth-dark",
    coverStyle: {
      bg: "bg-amber-950",
      text: "text-amber-100",
      accent: "text-accent-gold",
      pattern: "M0 0 L20 20 M20 0 L0 20",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M3 12l9-9 9 9M5 10v10a1 1 0 001 1h12a1 1 0 001-1V10M9 21V11h6v10" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    }
  },
  {
    id: 3,
    title: "Backyard Homestead Projects & Preservation",
    hook: "The ultimate guide to small-scale homesteading, food preservation, and step-by-step projects for true self-sufficiency.",
    sub: "Volume III: Permaculture & Pantry",
    imageUrl: coverHomesteadProjects,
    bullets: [
      "Establish sustainable permaculture zones for heavy year-round output",
      "Build high-efficiency wood stove hearths & rocket mass heaters",
      "Master food preservation: dehydration, root cellars & pressure canning",
      "Implement zero-waste greywater filtering & reliable composting toilets"
    ],
    buttonText: "View on Amazon",
    buttonUrl: "https://www.amazon.com/Backyard-Homestead-Projects-Preservation-Self-Sufficiency-ebook/dp/B0FJCM82LZ",
    themeColor: "moss",
    coverStyle: {
      bg: "bg-stone-900",
      text: "text-stone-100",
      accent: "text-accent-gold",
      pattern: "M10 0 L10 20 M0 10 L20 10",
      icon: (
        <svg className="w-10 h-10" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path d="M12 2a10 10 0 00-10 10c0 4.42 3.58 8 10 8s10-3.58 10-8A10 10 0 0012 2z" strokeWidth="2" />
          <path d="M12 6v12M8 10c0-1.5 1.5-2 4-2s4 .5 4 2-1.5 2-4 2-4-.5-4-2z" strokeWidth="1.5" />
        </svg>
      )
    }
  }
];

export default function App() {
  const handleScrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-earth-warm font-sans text-earth-900 selection:bg-forest-100 selection:text-forest-950 antialiased">
      {/* HEADER / NAVIGATION */}
      <header className="sticky top-0 z-50 bg-forest-950/90 backdrop-blur-md border-b border-forest-900/40 text-forest-100">
        <div className="max-w-6xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2 cursor-pointer" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
            <Compass className="w-6 h-6 text-accent-gold animate-spin-slow" />
            <div className="flex flex-col">
              <span className="font-serif font-bold text-base leading-none text-white tracking-tight">ASHER HOLT</span>
              <span className="text-[9px] uppercase font-bold tracking-[0.15em] text-accent-gold mt-0.5">Grid-Free Press</span>
            </div>
          </div>
          
          <nav className="hidden md:flex items-center gap-8 text-xs font-semibold text-forest-100/90">
            <button onClick={() => handleScrollTo("bookstore-catalog")} className="hover:text-accent-gold transition-colors">
              The Book Catalog
            </button>
            <button onClick={() => handleScrollTo("self-reliance-calculator")} className="hover:text-accent-gold transition-colors">
              Interactive Sizer
            </button>
            <button onClick={() => handleScrollTo("testimonials-section")} className="hover:text-accent-gold transition-colors">
              DIY Stories
            </button>
            <button onClick={() => handleScrollTo("about-the-author")} className="hover:text-accent-gold transition-colors">
              Meet Asher
            </button>
          </nav>

          <div>
            <button 
              onClick={() => handleScrollTo("bookstore-catalog")}
              className="py-2.5 px-4 rounded-xl text-xs font-bold bg-accent-gold hover:bg-amber-600 text-forest-950 shadow-xs transition-all"
            >
              Get Bookmarks
            </button>
          </div>
        </div>
      </header>

      {/* HERO SECTION WITH AMBIENT BACKGROUND */}
      <section 
        className="relative bg-cover bg-center text-center overflow-hidden py-24 md:py-36 border-b border-earth-200"
        style={{ backgroundImage: `url(${offGridBg})` }}
      >
        {/* Cinematic rich overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-forest-950/85 via-forest-950/70 to-earth-warm/95" />
        
        <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-8">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-forest-900/85 backdrop-blur-xs text-accent-gold border border-forest-800 text-xs font-semibold tracking-wide">
            <Sparkles className="w-3.5 h-3.5 text-accent-gold animate-pulse" /> An Expert Guide to Sustainable, Independent Living
          </div>

          <div className="space-y-4 max-w-4xl mx-auto">
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-extrabold text-white tracking-tight leading-[1.08] lg:leading-[1.12]">
              Break Free From The Grid &amp; <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-gold via-yellow-200 to-amber-500">
                Claim Your Sovereignty
              </span>
            </h1>
            <p className="font-sans text-base sm:text-lg md:text-xl text-forest-100 max-w-2xl mx-auto leading-relaxed font-light">
              Stop renting your water, energy, and shelter. Learn to design high-yield solar rigs, construct your own forest cabin under $5,000, and capture thousands of gallons of pure rain on any budget.
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <button
              onClick={() => handleScrollTo("bookstore-catalog")}
              className="w-full sm:w-auto py-4 px-8 rounded-2xl text-sm font-bold tracking-wide bg-accent-gold hover:bg-amber-600 active:bg-amber-700 text-forest-950 shadow-lg transition-all"
            >
              Explore Book Series
            </button>
            <button
              onClick={() => handleScrollTo("self-reliance-calculator")}
              className="w-full sm:w-auto py-4 px-8 rounded-2xl text-sm font-bold tracking-wide bg-white/10 backdrop-blur-xs hover:bg-white/20 text-white border border-white/20 transition-all"
            >
              Calculate Your Sizing Potential
            </button>
          </div>

          {/* Feature Icons Ribbon */}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto pt-12 mt-16 border-t border-white/10 text-left">
            <div className="flex gap-3 bg-forest-950/40 backdrop-blur-md p-4 rounded-2xl border border-white/5 shadow-xs">
              <div className="p-3 h-12 w-12 rounded-xl bg-forest-900 border border-forest-800 flex items-center justify-center shrink-0">
                <Layers className="w-5 h-5 text-accent-gold" />
              </div>
              <div>
                <h5 className="font-bold text-sm text-white">Modular Systems</h5>
                <p className="text-xs text-forest-100/80 mt-0.5">Start small and scale your homestead safely over time.</p>
              </div>
            </div>

            <div className="flex gap-3 bg-forest-950/40 backdrop-blur-md p-4 rounded-2xl border border-white/5 shadow-xs">
              <div className="p-3 h-12 w-12 rounded-xl bg-forest-900 border border-forest-800 flex items-center justify-center shrink-0">
                <Hammer className="w-5 h-5 text-accent-gold" />
              </div>
              <div>
                <h5 className="font-bold text-sm text-white">Simplified DIY</h5>
                <p className="text-xs text-forest-100/80 mt-0.5">Clear blueprints built for regular folks without licenses.</p>
              </div>
            </div>

            <div className="flex gap-3 bg-forest-950/40 backdrop-blur-md p-4 rounded-2xl border border-white/5 shadow-xs">
              <div className="p-3 h-12 w-12 rounded-xl bg-forest-900 border border-forest-800 flex items-center justify-center shrink-0">
                <Droplet className="w-5 h-5 text-accent-gold" />
              </div>
              <div>
                <h5 className="font-bold text-sm text-white">Water Sovereignty</h5>
                <p className="text-xs text-forest-100/80 mt-0.5">Design low-cost filters to capture and treat pristine rain.</p>
              </div>
            </div>

            <div className="flex gap-3 bg-forest-950/40 backdrop-blur-md p-4 rounded-2xl border border-white/5 shadow-xs">
              <div className="p-3 h-12 w-12 rounded-xl bg-forest-900 border border-forest-800 flex items-center justify-center shrink-0">
                <CheckCircle className="w-5 h-5 text-accent-gold" />
              </div>
              <div>
                <h5 className="font-bold text-sm text-white">Toxin &amp; Bill Free</h5>
                <p className="text-xs text-forest-100/80 mt-0.5">Eradicate thousands of dollars in utility fees and rental overhead.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* THE BOOK CATALOG GRID */}
      <section id="bookstore-catalog" className="bg-earth-50 border-y border-earth-200 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 space-y-12 md:space-y-16">
          
          {/* Header */}
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <span className="text-xs uppercase tracking-[0.22em] font-bold text-forest-700 block">
              THE BLUEPRINT MANUAL SERIES
            </span>
            <h2 className="font-serif text-3xl md:text-4xl font-extrabold text-earth-950 tracking-tight leading-tight">
              Sovereign Living, Volume by Volume
            </h2>
            <p className="text-sm text-earth-800 max-w-lg mx-auto">
              Each guidebook breaks down a core quadrant of off-grid engineering into direct checklists, budget templates, and clear physical blueprints.
            </p>
          </div>

          {/* Book Catalog Grid */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {booksData.map((book) => (
              <BookCard key={book.id} book={book} />
            ))}
          </div>

          {/* TRUST & REASSURANCE BAR */}
          <div className="max-w-3xl mx-auto bg-white rounded-3xl p-6 border border-earth-200 text-center space-y-4 shadow-xs">
            <p className="text-xs uppercase tracking-[0.15em] font-bold text-forest-700">
              Available Worldwide in All Major Book Formats
            </p>
            <div className="flex flex-wrap items-center justify-center gap-6 text-sm text-earth-800 font-semibold">
              <div className="flex items-center gap-2 bg-earth-50 py-2 px-4 rounded-xl border border-earth-200">
                <span className="w-2 h-2 rounded-full bg-forest-600 animate-pulse" />
                <span>Amazon Kindle (E-Book)</span>
              </div>
              <div className="flex items-center gap-2 bg-earth-50 py-2 px-4 rounded-xl border border-earth-200">
                <span className="w-2 h-2 rounded-full bg-accent-gold" />
                <span>Premium Paperback</span>
              </div>
              <div className="flex items-center gap-2 bg-earth-50 py-2 px-4 rounded-xl border border-earth-200">
                <span className="w-2 h-2 rounded-full bg-forest-700" />
                <span>Heirloom Cloth Hardcover</span>
              </div>
            </div>
            <p className="text-[11px] text-earth-800 italic">
              Shipped and distributed globally via Amazon Prime. Secure transaction backing guaranteed.
            </p>
          </div>

        </div>
      </section>

      {/* CALCULATOR SECTION */}
      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <Calculator />
        </div>
      </section>

      {/* REVIEW SECTION */}
      <section className="bg-earth-50 border-t border-earth-200 py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <Reviews />
        </div>
      </section>

      {/* AUTHOR BIO SECTION */}
      <section className="py-20 md:py-28 border-t border-earth-200">
        <div className="max-w-6xl mx-auto px-6">
          <AuthorSection />
        </div>
      </section>

      {/* FOOTER */}
      <footer className="bg-earth-950 text-white/90 border-t border-earth-900 pt-16 pb-12">
        <div className="max-w-6xl mx-auto px-6 space-y-12">
          
          {/* Top Block */}
          <div className="flex flex-col md:flex-row gap-8 justify-between">
            <div className="space-y-4 max-w-sm">
              <div className="flex items-center gap-2">
                <Compass className="w-7 h-7 text-accent-gold animate-spin-slow" />
                <div className="flex flex-col">
                  <span className="font-serif font-bold text-lg text-white leading-none">ASHER HOLT</span>
                  <span className="text-[10px] uppercase font-bold tracking-[0.2em] text-accent-gold mt-1">Grid-Free Press</span>
                </div>
              </div>
              <p className="text-xs text-white/70 leading-relaxed">
                Empowering individuals and families worldwide with robust, textbook-grade blueprints to achieve off-grid power, water, and shelter independence on standard, accessible budgets.
              </p>
            </div>

            {/* Nav Shortcuts */}
            <div className="grid grid-cols-2 gap-8 text-xs font-medium">
              <div className="space-y-3">
                <h6 className="uppercase tracking-wider font-bold text-white/50 text-[10px]">The Manuals</h6>
                <ul className="space-y-2">
                  <li>
                    <a href="https://www.amazon.com/Off-Grid-Power-Water-Systems-Simplified/dp/B0FHQQ3CMQ" target="_blank" rel="noopener noreferrer" className="hover:text-accent-gold transition-colors flex items-center gap-1">
                      Volume I: Power &amp; Water <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.amazon.com/Build-Off-Grid-Cabin-Under-Step/dp/B0FH2XJ3RG/" target="_blank" rel="noopener noreferrer" className="hover:text-accent-gold transition-colors flex items-center gap-1">
                      Volume II: Cabin Build <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                  <li>
                    <a href="https://www.amazon.com/Backyard-Homestead-Projects-Preservation-Self-Sufficiency-ebook/dp/B0FJCM82LZ" target="_blank" rel="noopener noreferrer" className="hover:text-accent-gold transition-colors flex items-center gap-1">
                      Volume III: Homestead <ExternalLink className="w-3 h-3" />
                    </a>
                  </li>
                </ul>
              </div>

              <div className="space-y-3">
                <h6 className="uppercase tracking-wider font-bold text-white/50 text-[10px]">Quick Jumps</h6>
                <ul className="space-y-2">
                  <li>
                    <button onClick={() => handleScrollTo("self-reliance-calculator")} className="hover:text-accent-gold transition-colors text-left">
                      Solar &amp; Rain Sizer
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleScrollTo("testimonials-section")} className="hover:text-accent-gold transition-colors text-left">
                      Homestead Testimonials
                    </button>
                  </li>
                  <li>
                    <button onClick={() => handleScrollTo("about-the-author")} className="hover:text-accent-gold transition-colors text-left">
                      About Asher Holt
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="h-px bg-white/10" />

          {/* Legal / Warning Disclaimer Block derived from safety guidelines in book pages */}
          <div className="bg-white/5 rounded-2xl p-5 border border-white/10 text-[11px] text-white/70 leading-relaxed space-y-2.5">
            <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-amber-500/10 text-amber-300 font-bold uppercase tracking-wider text-[9px] border border-amber-500/20">
              <ShieldAlert className="w-3 h-3" /> Important Safety Notice &amp; Legal Disclaimer
            </span>
            <p>
              <strong>Electrical &amp; Structural Safety First:</strong> As detailed inside Chapter 1 of the manuals, working with electricity, high-voltage battery storage banks, structural wood loads, and water filtration involves inherent risk. Low-voltage 12V DC setups can deliver massive amperages capable of causing dangerous arcing and thermal hazards if short-circuited. Always relieve plumbing hydraulic pressure before servicing fittings.
            </p>
            <p>
              <strong>Zoning &amp; Regulatory Codes:</strong> Building regulations, groundwater drilling limits, and rainwater collection legislation vary drastically by state and county. Readers assume full responsibility for auditing local laws, structural safety limits, and municipal restrictions before beginning site-clearing, foundation construction, or hardware deployment. When in doubt, always seek the consultation of certified professional engineers, plumbers, and licensed electricians.
            </p>
          </div>

          {/* Bottom attribution */}
          <div className="pt-4 flex flex-col sm:flex-row items-center justify-between text-xs text-white/55 gap-4">
            <span>&copy; 2026 Grid-Free Press &amp; Asher Holt. All Rights Reserved.</span>
            <span className="flex items-center gap-1">
              Crafted for off-grid freedom with <Heart className="w-3 h-3 text-red-500 fill-red-500" /> and raw self-reliance.
            </span>
          </div>

        </div>
      </footer>

      {/* Floating social media sharing bar and mobile trigger */}
      <ShareWidget />
    </div>
  );
}
