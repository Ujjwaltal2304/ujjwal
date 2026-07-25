"use client";

import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import { X, User, Stethoscope, Store, ArrowRight, UserCircle2 } from "lucide-react";

export default function WelcomeModal() {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();

  useEffect(() => {
    // Show modal instantly for a smooth, lag-free experience
    setIsOpen(true);
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
    localStorage.setItem("userRole", "guest");
    setIsOpen(false);
  };

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/60 backdrop-blur-sm p-4 animate-in fade-in duration-150">
      <div 
        className="relative w-full max-w-lg bg-white rounded-xl shadow-2xl overflow-hidden animate-in zoom-in-95 duration-150 pb-8"
      >
        {/* Header */}
        <div className="pt-8 pb-6 px-8 text-center relative">
          <button 
            onClick={handleClose}
            className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition-colors p-1"
            aria-label="Close"
          >
            <X className="w-5 h-5" />
          </button>
          
          <h2 className="text-2xl font-sans font-semibold text-gray-800 mb-1">
            Welcome to Dr. Demo's Clinic
          </h2>
          <p className="text-gray-500 text-sm">
            Select your user type to continue
          </p>
        </div>

        {/* Options */}
        <div className="px-8 space-y-4">
          <button
            onClick={() => handleSelection("doctor", "/doctor")}
            className="w-full flex items-center gap-4 px-5 py-4 rounded-lg bg-[#14b8a6] hover:bg-[#0d9488] text-left transition-colors group shadow-md"
          >
            <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-white/20 rounded-full text-white">
              <Stethoscope className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-white text-lg leading-tight">Doctor/Student</h3>
              <p className="text-xs text-white/80 mt-1">Join registered Ayurveda practitioners.</p>
            </div>
            <ArrowRight className="w-5 h-5 text-white shrink-0 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => handleSelection("chemist", "/chemist")}
            className="w-full flex items-center gap-4 px-5 py-4 rounded-lg bg-[#14b8a6] hover:bg-[#0d9488] text-left transition-colors group shadow-md"
          >
            <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-white/20 rounded-full text-white">
              <Store className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-white text-lg leading-tight">Chemist/Retailer</h3>
              <p className="text-xs text-white/80 mt-1">The Largest Selection of Ayurvedic Medicines.</p>
            </div>
            <ArrowRight className="w-5 h-5 text-white shrink-0 group-hover:translate-x-1 transition-transform" />
          </button>

          <button
            onClick={() => handleSelection("patient", "")}
            className="w-full flex items-center gap-4 px-5 py-4 rounded-lg bg-[#14b8a6] hover:bg-[#0d9488] text-left transition-colors group shadow-md"
          >
            <div className="shrink-0 flex items-center justify-center w-12 h-12 bg-white/20 rounded-full text-white">
              <UserCircle2 className="w-6 h-6" />
            </div>
            <div className="flex-1">
              <h3 className="font-semibold text-white text-lg leading-tight">Patient</h3>
              <p className="text-xs text-white/80 mt-1">Consult certified Ayurvedic doctors online.</p>
            </div>
            <ArrowRight className="w-5 h-5 text-white shrink-0 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
