import React from "react";
import { ArrowUpRight, BookOpen, CheckCircle2, ZoomIn, X } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

interface BookData {
  id: number;
  title: string;
  hook: string;
  sub: string;
  bullets: string[];
  buttonText: string;
  buttonUrl: string;
  themeColor: string; // forest, earth-warm, or accent-gold
  imageUrl?: string;
  coverStyle: {
    bg: string;
    text: string;
    accent: string;
    pattern: string;
    icon: React.ReactNode;
  };
}

interface BookCardProps {
  book: BookData;
  key?: React.Key | number | string;
}

export default function BookCard({ book }: BookCardProps) {
  const [isLightboxOpen, setIsLightboxOpen] = React.useState(false);

  React.useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setIsLightboxOpen(false);
      }
    };
    if (isLightboxOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isLightboxOpen]);

  return (
    <div 
      id={`book-card-${book.id}`}
      className="group relative flex flex-col bg-white rounded-3xl p-6 border border-earth-200 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:border-forest-100"
    >
      {/* 3D Book Cover Container */}
      <div className="flex justify-center mb-8 relative pt-4">
        {/* Book shadow on shelf */}
        <div className="absolute bottom-2 w-48 h-4 bg-earth-950/15 rounded-full blur-md group-hover:scale-x-105 group-hover:bg-earth-950/20 transition-all duration-300" />
        
        {/* The 3D Book */}
        <div 
          onClick={() => setIsLightboxOpen(true)}
          className="relative w-48 h-72 rounded-r-lg shadow-lg group-hover:shadow-2xl transition-all duration-300 transform group-hover:rotate-y-12 group-hover:scale-105 perspective-1000 origin-left flex flex-col overflow-hidden select-none cursor-zoom-in group/cover"
        >
          {book.imageUrl ? (
            <div className="absolute inset-0 bg-earth-900">
              <img 
                src={book.imageUrl} 
                alt={book.title} 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              {/* Left spine shadow */}
              <div className="absolute top-0 bottom-0 left-0 w-2.5 bg-black/35 rounded-r-sm shadow-inner" />
              {/* Right cover edge highlight */}
              <div className="absolute top-0 bottom-0 right-0 w-0.5 bg-white/10" />
              {/* Shine highlights */}
              <div className="absolute top-0 bottom-0 left-0 right-1/2 bg-gradient-to-r from-white/15 to-transparent pointer-events-none" />
              <div className="absolute top-0 bottom-0 left-12 right-0 bg-gradient-to-r from-black/0 via-white/5 to-black/0 pointer-events-none" />
            </div>
          ) : (
            /* Cover background fallback */
            <div className={`absolute inset-0 ${book.coverStyle.bg} flex flex-col justify-between p-5 text-left`}>
              {/* Elegant Vintage Pattern overlays */}
              <div className="absolute inset-0 opacity-10 mix-blend-overlay">
                <svg width="100%" height="100%">
                  <pattern id={`pattern-${book.id}`} width="20" height="20" patternUnits="userSpaceOnUse">
                    <path d={book.coverStyle.pattern} fill="none" stroke="currentColor" strokeWidth="1.5" />
                  </pattern>
                  <rect width="100%" height="100%" fill={`url(#pattern-${book.id})`} />
                </svg>
              </div>

              {/* Shine highlight */}
              <div className="absolute top-0 bottom-0 left-0 right-1/2 bg-gradient-to-r from-white/15 to-transparent pointer-events-none" />
              <div className="absolute top-0 bottom-0 left-12 right-0 bg-gradient-to-r from-black/0 via-white/5 to-black/0 pointer-events-none" />

              {/* Left spine shadow */}
              <div className="absolute top-0 bottom-0 left-0 w-2.5 bg-black/35 rounded-r-sm shadow-inner" />
              {/* Right cover edge highlight */}
              <div className="absolute top-0 bottom-0 right-0 w-0.5 bg-white/10" />

              {/* Author Name */}
              <div className="relative z-10 flex items-center justify-between">
                <span className={`text-[10px] tracking-[0.2em] font-sans font-semibold uppercase ${book.coverStyle.text} opacity-90`}>
                  ASHER HOLT
                </span>
                <BookOpen className={`w-3.5 h-3.5 ${book.coverStyle.accent} opacity-80`} />
              </div>

              {/* Cover Illustration */}
              <div className="relative z-10 my-auto flex justify-center py-2 text-white">
                <div className={`p-4 rounded-2xl bg-white/5 backdrop-blur-xs border border-white/10 ${book.coverStyle.accent}`}>
                  {book.coverStyle.icon}
                </div>
              </div>

              {/* Book Title & Subtitle */}
              <div className="relative z-10 space-y-1.5 mt-auto">
                <h4 className="font-serif font-bold text-sm leading-tight text-white line-clamp-3">
                  {book.title}
                </h4>
                <div className="w-8 h-0.5 bg-accent-gold" />
                <p className={`text-[9px] leading-relaxed font-sans line-clamp-2 ${book.coverStyle.text} opacity-75`}>
                  {book.sub}
                </p>
              </div>
            </div>
          )}

          {/* Zoom Overlay on Hover */}
          <div className="absolute inset-0 bg-black/50 opacity-0 group-hover/cover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-white pointer-events-none z-20">
            <ZoomIn className="w-8 h-8 text-accent-gold mb-1 filter drop-shadow-md" />
            <span className="text-[10px] tracking-wider uppercase font-bold text-white/95 filter drop-shadow-md">
              Enlarge Cover
            </span>
          </div>
        </div>
      </div>

      {/* Book Metadata */}
      <div className="flex-1 flex flex-col">
        <div className="mb-4">
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-forest-50 text-forest-700 border border-forest-100">
            Guidebook #{book.id}
          </span>
        </div>

        <h3 className="font-serif text-xl font-bold text-earth-950 mb-2 leading-tight tracking-tight">
          {book.title}
        </h3>
        
        <p className="font-sans font-medium text-sm text-forest-700 mb-6 italic">
          &ldquo;{book.hook}&rdquo;
        </p>

        {/* Mastered Skills Bullet Points */}
        <div className="space-y-3.5 mb-8">
          <p className="text-xs uppercase tracking-wider font-semibold text-earth-800">
            What You Will Master:
          </p>
          <ul className="space-y-2.5">
            {book.bullets.map((bullet, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-sm text-earth-800">
                <CheckCircle2 className="w-5 h-5 text-forest-600 shrink-0 mt-0.5" />
                <span className="leading-snug">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* Styled Call-to-Action Button */}
        <a
          href={book.buttonUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-auto inline-flex items-center justify-center gap-2 w-full py-4 px-6 rounded-2xl text-sm font-semibold tracking-wide bg-forest-900 hover:bg-forest-800 active:bg-forest-950 text-white shadow-md hover:shadow-lg transition-all duration-200 group-hover:scale-[1.01]"
        >
          {book.buttonText}
          <ArrowUpRight className="w-4 h-4 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-accent-gold" />
        </a>
      </div>

      {/* IMMERSIVE ART-GALLERY LIGHTBOX */}
      <AnimatePresence>
        {isLightboxOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="fixed inset-0 z-[100] bg-black/90 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 md:p-10 cursor-zoom-out"
            onClick={() => setIsLightboxOpen(false)}
          >
            {/* Close button */}
            <button
              className="absolute top-6 right-6 p-3 rounded-full bg-white/10 hover:bg-white/20 text-white border border-white/10 transition-colors focus:outline-none cursor-pointer z-50"
              onClick={(e) => {
                e.stopPropagation();
                setIsLightboxOpen(false);
              }}
              aria-label="Close details"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Lightbox content card */}
            <div 
              className="relative flex flex-col md:flex-row items-center max-w-4xl w-full bg-stone-900/40 rounded-3xl border border-white/10 p-6 md:p-10 gap-8 md:gap-12 cursor-default shadow-2xl overflow-y-auto max-h-[90vh]"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Visual Cover Side */}
              <motion.div 
                initial={{ scale: 0.92, y: 15 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.92, y: 15 }}
                transition={{ type: "spring", damping: 25, stiffness: 300 }}
                className="relative w-64 h-96 sm:w-72 sm:h-[432px] shrink-0 rounded-r-xl overflow-hidden shadow-2xl shadow-black/80 border border-white/5"
              >
                {book.imageUrl ? (
                  <img 
                    src={book.imageUrl} 
                    alt={book.title} 
                    className="w-full h-full object-cover"
                    referrerPolicy="no-referrer"
                  />
                ) : (
                  /* Cover background fallback */
                  <div className={`absolute inset-0 ${book.coverStyle.bg} flex flex-col justify-between p-6 text-left`}>
                    <div className="absolute inset-0 opacity-10 mix-blend-overlay">
                      <svg width="100%" height="100%">
                        <pattern id={`pattern-lightbox-${book.id}`} width="20" height="20" patternUnits="userSpaceOnUse">
                          <path d={book.coverStyle.pattern} fill="none" stroke="currentColor" strokeWidth="1.5" />
                        </pattern>
                        <rect width="100%" height="100%" fill={`url(#pattern-lightbox-${book.id})`} />
                      </svg>
                    </div>
                    {/* Shine highlights */}
                    <div className="absolute top-0 bottom-0 left-0 right-1/2 bg-gradient-to-r from-white/10 to-transparent pointer-events-none" />
                    {/* Author */}
                    <div className="relative z-10 flex items-center justify-between">
                      <span className={`text-xs tracking-[0.2em] font-sans font-semibold uppercase ${book.coverStyle.text} opacity-90`}>
                        ASHER HOLT
                      </span>
                      <BookOpen className={`w-4 h-4 ${book.coverStyle.accent} opacity-80`} />
                    </div>
                    {/* Icon */}
                    <div className="relative z-10 my-auto flex justify-center py-4 text-white">
                      <div className={`p-6 rounded-2xl bg-white/5 backdrop-blur-xs border border-white/10 ${book.coverStyle.accent}`}>
                        {book.coverStyle.icon}
                      </div>
                    </div>
                    {/* Title */}
                    <div className="relative z-10 space-y-2 mt-auto">
                      <h4 className="font-serif font-bold text-lg leading-tight text-white">
                        {book.title}
                      </h4>
                      <div className="w-12 h-0.5 bg-accent-gold" />
                      <p className={`text-xs leading-relaxed font-sans ${book.coverStyle.text} opacity-75`}>
                        {book.sub}
                      </p>
                    </div>
                  </div>
                )}
                {/* Spine & Page shadows */}
                <div className="absolute top-0 bottom-0 left-0 w-3 bg-black/40 rounded-r-xs shadow-inner pointer-events-none" />
                <div className="absolute top-0 bottom-0 right-0 w-0.5 bg-white/15 pointer-events-none" />
                <div className="absolute inset-0 bg-gradient-to-r from-white/10 via-transparent to-transparent pointer-events-none" />
              </motion.div>

              {/* Text Detail Side */}
              <div className="flex-1 text-left space-y-6">
                <div>
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-accent-gold/20 text-accent-gold border border-accent-gold/30 mb-3">
                    Guidebook #{book.id}
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-extrabold text-white leading-tight tracking-tight">
                    {book.title}
                  </h3>
                  <p className="font-sans text-sm text-amber-400 font-medium tracking-wide mt-1.5">
                    {book.sub}
                  </p>
                </div>

                <p className="font-sans text-stone-300 text-sm sm:text-base leading-relaxed italic border-l-2 border-accent-gold/40 pl-4 py-1">
                  &ldquo;{book.hook}&rdquo;
                </p>

                <div className="space-y-3">
                  <h5 className="text-xs uppercase tracking-wider font-semibold text-stone-400">
                    System Core Blueprints Included:
                  </h5>
                  <ul className="space-y-2">
                    {book.bullets.map((bullet, idx) => (
                      <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-stone-300">
                        <CheckCircle2 className="w-4.5 h-4.5 text-accent-gold shrink-0 mt-0.5" />
                        <span className="leading-normal">{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-white/10 flex flex-wrap gap-4 items-center justify-between">
                  <div className="text-stone-400 text-xs">
                    <span className="block font-medium">Author Signature:</span>
                    <span className="font-serif italic text-white text-sm">Asher Holt</span>
                  </div>
                  
                  <a
                    href={book.buttonUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 py-3 px-6 rounded-xl text-xs font-bold tracking-wide bg-accent-gold hover:bg-amber-600 text-forest-950 transition-all duration-200"
                  >
                    {book.buttonText}
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
