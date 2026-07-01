import React, { useState, useEffect } from "react";
import { Share2, Link, Check, Facebook, Twitter } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";

export default function ShareWidget() {
  const [currentUrl, setCurrentUrl] = useState("");
  const [copied, setCopied] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);

  useEffect(() => {
    setCurrentUrl(window.location.href);
  }, []);

  const shareTitle = "Check out Asher Holt's Off-Grid and Self-Sufficiency Bookstore Hub!";
  const facebookShareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(currentUrl)}`;
  const pinterestShareUrl = `https://pinterest.com/pin/create/button/?url=${encodeURIComponent(currentUrl)}&description=${encodeURIComponent(shareTitle)}`;
  const twitterShareUrl = `https://twitter.com/intent/tweet?url=${encodeURIComponent(currentUrl)}&text=${encodeURIComponent(shareTitle)}`;

  const handleCopyLink = () => {
    navigator.clipboard.writeText(currentUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <>
      {/* DESKTOP STICKY SIDEBAR SHARE WIDGET */}
      <div 
        id="desktop-share-sidebar"
        className="hidden lg:flex fixed left-6 top-1/2 -translate-y-1/2 z-40 flex-col gap-3"
      >
        <div className="bg-white/95 backdrop-blur-md border border-earth-200 rounded-2xl p-2.5 shadow-xl flex flex-col gap-2.5">
          <div className="p-2 text-center text-forest-900 border-b border-earth-100 mb-1">
            <Share2 className="w-4 h-4 mx-auto" />
            <span className="text-[9px] font-bold uppercase tracking-wider block mt-1 text-earth-800">Share</span>
          </div>

          {/* Facebook */}
          <a
            href={facebookShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Share on Facebook"
            className="w-10 h-10 rounded-xl bg-earth-50 hover:bg-forest-900 hover:text-white border border-earth-200 hover:border-forest-900 flex items-center justify-center text-earth-950 transition-all duration-300"
          >
            <i className="fa-brands fa-facebook text-lg"></i>
          </a>

          {/* Pinterest */}
          <a
            href={pinterestShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Share on Pinterest"
            className="w-10 h-10 rounded-xl bg-earth-50 hover:bg-red-600 hover:text-white border border-earth-200 hover:border-red-600 flex items-center justify-center text-earth-950 transition-all duration-300"
          >
            <i className="fa-brands fa-pinterest text-lg"></i>
          </a>

          {/* Twitter / X */}
          <a
            href={twitterShareUrl}
            target="_blank"
            rel="noopener noreferrer"
            title="Share on X"
            className="w-10 h-10 rounded-xl bg-earth-50 hover:bg-earth-950 hover:text-white border border-earth-200 hover:border-earth-950 flex items-center justify-center text-earth-950 transition-all duration-300"
          >
            <i className="fa-brands fa-x-twitter text-lg"></i>
          </a>

          {/* Copy Link Button */}
          <button
            onClick={handleCopyLink}
            title="Copy Link"
            className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 ${
              copied 
                ? "bg-forest-100 border-forest-600 text-forest-900" 
                : "bg-earth-50 border-earth-200 hover:bg-forest-900 hover:text-white hover:border-forest-900 text-earth-950"
            }`}
          >
            {copied ? <Check className="w-4.5 h-4.5" /> : <Link className="w-4.5 h-4.5" />}
          </button>
        </div>
      </div>

      {/* MOBILE FLOATING SHARE EXPANDER BUTTON */}
      <div 
        id="mobile-share-floating"
        className="lg:hidden fixed bottom-6 right-6 z-40 flex flex-col items-end gap-3"
      >
        <AnimatePresence>
          {isMobileOpen && (
            <motion.div 
              initial={{ opacity: 0, y: 15, scale: 0.9 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 15, scale: 0.9 }}
              className="bg-white/95 backdrop-blur-md border border-earth-200 rounded-2xl p-2 shadow-xl flex flex-col gap-2"
            >
              {/* Facebook */}
              <a
                href={facebookShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-earth-50 flex items-center justify-center text-[#1877F2]"
              >
                <i className="fa-brands fa-facebook text-xl"></i>
              </a>

              {/* Pinterest */}
              <a
                href={pinterestShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-earth-50 flex items-center justify-center text-[#BD081C]"
              >
                <i className="fa-brands fa-pinterest text-xl"></i>
              </a>

              {/* Twitter / X */}
              <a
                href={twitterShareUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-xl bg-earth-50 flex items-center justify-center text-[#0F1419]"
              >
                <i className="fa-brands fa-x-twitter text-lg"></i>
              </a>

              {/* Copy Link */}
              <button
                onClick={handleCopyLink}
                className={`w-10 h-10 rounded-xl flex items-center justify-center ${
                  copied ? "bg-forest-100 text-forest-900" : "bg-earth-50 text-earth-950"
                }`}
              >
                {copied ? <Check className="w-4.5 h-4.5" /> : <Link className="w-4.5 h-4.5" />}
              </button>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Main Floating Trigger Button */}
        <button
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          className="w-12 h-12 bg-forest-900 text-white rounded-full flex items-center justify-center shadow-lg hover:bg-forest-800 transition-colors z-50 cursor-pointer"
        >
          {isMobileOpen ? (
            <Check className="w-5 h-5 text-accent-gold" />
          ) : (
            <Share2 className="w-5 h-5 text-accent-gold" />
          )}
        </button>
      </div>
    </>
  );
}
