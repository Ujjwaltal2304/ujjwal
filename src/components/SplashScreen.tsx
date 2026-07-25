"use client";

import { useState, useEffect } from "react";
import { Leaf } from "lucide-react";

export default function SplashScreen() {
  const [show, setShow] = useState(true);
  const [fade, setFade] = useState(false);

  useEffect(() => {
    // Start fading out after 2 seconds
    const fadeTimer = setTimeout(() => {
      setFade(true);
    }, 2000);

    // Completely remove from DOM after 2.5 seconds (allowing for 0.5s fade out animation)
    const removeTimer = setTimeout(() => {
      setShow(false);
    }, 2500);

    return () => {
      clearTimeout(fadeTimer);
      clearTimeout(removeTimer);
    };
  }, []);

  if (!show) return null;

  return (
    <div 
      className={`fixed inset-0 z-[100] flex flex-col items-center justify-center bg-[var(--color-cream)] transition-opacity duration-500 ${fade ? 'opacity-0' : 'opacity-100'}`}
    >
      <div className="relative w-32 h-32 flex items-center justify-center">
        {/* Growing leaves animation using Tailwind arbitrary values for custom delays/scales */}
        <Leaf 
          className="absolute text-[var(--color-terracotta)] animate-[ping_2s_cubic-bezier(0,0,0.2,1)_infinite]" 
          style={{ width: '48px', height: '48px', animationIterationCount: 1 }}
        />
        <Leaf 
          className="absolute text-[var(--color-forest)] animate-[bounce_2s_ease-in-out_infinite]" 
          style={{ width: '64px', height: '64px', animationIterationCount: 1 }}
        />
        <div className="absolute flex gap-4 animate-[spin_3s_linear_infinite]" style={{ animationIterationCount: 1 }}>
          <Leaf className="w-8 h-8 text-[var(--color-terracotta)] opacity-80" />
          <Leaf className="w-8 h-8 text-emerald-500 opacity-80" />
        </div>
      </div>
      <h2 className="mt-8 font-serif text-2xl font-bold text-[var(--color-forest)] tracking-widest animate-pulse">
        DR. DEMO
      </h2>
      <p className="text-xs uppercase tracking-[0.3em] text-[var(--color-forest)]/60 mt-2">
        Ayurveda Clinic
      </p>
    </div>
  );
}
