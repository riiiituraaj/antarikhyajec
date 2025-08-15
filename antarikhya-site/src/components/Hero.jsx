import React from "react";

export default function Hero() {
  return (
    <section id="hero" className="section bg-black text-white" data-scroll-section>
      <div className="max-w-6xl mx-auto text-center px-6">
        <h1 className="font-display text-[48px] md:text-[96px] leading-tight tracking-[0.08em]">Exploring<br/>Beyond Limits</h1>
        <p className="mt-6 text-gray-300 text-xl md:text-2xl">The Astronomy & Science Club of Jorhat Engineering College</p>
        <div className="mt-8">
          <div className="scroll-cue mx-auto" aria-hidden>
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none"><path d="M12 16l-6-8h12l-6 8z" fill="rgba(255,255,255,0.6)"/></svg>
          </div>
        </div>
      </div>
    </section>
  );
}

