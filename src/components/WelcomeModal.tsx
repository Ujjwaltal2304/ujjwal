"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { X, UserPlus, Stethoscope, Store } from "lucide-react";

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Check if the user has already made a selection
    const hasSelected = localStorage.getItem("userRole");
    if (!hasSelected) {
      // Small delay for smooth entry
      const timer = setTimeout(() => setIsOpen(true), 800);
      return () => clearTimeout(timer);
    }
  }, []);

  if (!isOpen) return null;

  const handleSelection = (role: string, route: string) => {
    localStorage.setItem("userRole", role);
    setIsOpen(false);
    
    if (route) {
      router.push(route);
    }
  };

  const handleClose = () => {
    localStorage.setItem("userRole", "guest"); // Mark as guest so it doesn't pop up again
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-[var(--color-forest)]/40 backdrop-blur-sm p-4 animate-in fade-in duration-300">
      <div 
        className="relative w-full max-w-lg bg-white rounded-sm shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300"
      >
        {/* Close button */}
        <button 
          onClick={handleClose}
          className="absolute top-4 right-4 text-[var(--color-forest)]/40 hover:text-[var(--color-forest)] hover:bg-[var(--color-forest)]/5 p-2 rounded-full transition-colors z-10"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header */}
        <div className="bg-[var(--color-cream)] p-8 text-center border-b border-[var(--color-forest)]/10">
          <h2 className="text-3xl font-serif font-semibold text-[var(--color-forest)] mb-2">
            Welcome to Dr. Demo's Clinic
          </h2>
          <p className="text-[var(--color-forest)]/70 text-sm">
            Please tell us who you are so we can personalize your experience.
          </p>
        </div>

        {/* Options */}
        <div className="p-6 space-y-4 bg-white">
          <button
            onClick={() => handleSelection("doctor", "/doctor")}
            className="w-full flex items-center gap-4 p-4 rounded-sm border border-[var(--color-forest)]/15 hover:border-[var(--color-terracotta)]/50 hover:bg-[var(--color-cream)]/50 text-left transition-all btn-pop group"
          >
            <div className="p-3 bg-[var(--color-cream)] rounded-full text-[var(--color-terracotta)] group-hover:bg-[var(--color-terracotta)] group-hover:text-white transition-colors">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-[var(--color-forest)]">Doctor / Student</h3>
              <p className="text-xs text-[var(--color-forest)]/60 mt-1">Access clinical resources, academic materials, and practitioner tools.</p>
            </div>
          </button>

          <button
            onClick={() => handleSelection("chemist", "/chemist")}
            className="w-full flex items-center gap-4 p-4 rounded-sm border border-[var(--color-forest)]/15 hover:border-[var(--color-terracotta)]/50 hover:bg-[var(--color-cream)]/50 text-left transition-all btn-pop group"
          >
            <div className="p-3 bg-[var(--color-cream)] rounded-full text-[var(--color-terracotta)] group-hover:bg-[var(--color-terracotta)] group-hover:text-white transition-colors">
              <Store className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-[var(--color-forest)]">Chemist / Retailer</h3>
              <p className="text-xs text-[var(--color-forest)]/60 mt-1">View wholesale inventory, place orders, and manage stock.</p>
            </div>
          </button>

          <button
            onClick={() => handleSelection("patient", "")}
            className="w-full flex items-center gap-4 p-4 rounded-sm border border-[var(--color-forest)]/15 hover:border-[var(--color-terracotta)]/50 hover:bg-[var(--color-cream)]/50 text-left transition-all btn-pop group"
          >
            <div className="p-3 bg-[var(--color-cream)] rounded-full text-[var(--color-terracotta)] group-hover:bg-[var(--color-terracotta)] group-hover:text-white transition-colors">
              <UserPlus className="w-6 h-6" />
            </div>
            <div>
              <h3 className="font-semibold text-[var(--color-forest)]">Patient</h3>
              <p className="text-xs text-[var(--color-forest)]/60 mt-1">Explore therapies, book appointments, and read wellness blogs.</p>
            </div>
          </button>
        </div>

      </div>
    </div>
  );
}
