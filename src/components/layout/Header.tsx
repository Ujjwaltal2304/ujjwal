"use client";

import { useState } from "react";
import Link from "next/link";
import { Leaf, Menu, X, Search } from "lucide-react";

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-[var(--color-forest)]/10 bg-[var(--color-cream)]/95 backdrop-blur-md">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between gap-4">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="relative w-12 h-12 group-hover:scale-105 transition-transform duration-300">
            <svg viewBox="0 0 100 100" className="w-full h-full drop-shadow-sm" xmlns="http://www.w3.org/2000/svg">
              {/* Dotted arc */}
              <circle cx="36" cy="40" r="1.5" fill="#71c837" />
              <circle cx="32" cy="46" r="2" fill="#71c837" />
              <circle cx="28" cy="53" r="2.5" fill="#71c837" />
              <circle cx="26" cy="61" r="3" fill="#71c837" />
              <circle cx="26" cy="69" r="3.5" fill="#71c837" />
              <circle cx="28" cy="77" r="3.5" fill="#71c837" />
              <circle cx="32" cy="84" r="3" fill="#71c837" />
              <circle cx="38" cy="90" r="2.5" fill="#71c837" />
              <circle cx="45" cy="94" r="2.5" fill="#71c837" />
              <circle cx="52" cy="96" r="2" fill="#71c837" />
              <circle cx="59" cy="96" r="2" fill="#71c837" />
              <circle cx="66" cy="94" r="1.5" fill="#71c837" />
              <circle cx="72" cy="91" r="1.5" fill="#71c837" />
              <circle cx="77" cy="87" r="1" fill="#71c837" />
              <circle cx="82" cy="83" r="1" fill="#71c837" />
              <circle cx="86" cy="79" r="1" fill="#71c837" />

              {/* Medical Cross */}
              <path d="M 44 38 h 3 v -3 h 3 v 3 h 3 v 3 h -3 v 3 h -3 v -3 h -3 z" fill="#71c837" />

              {/* Pestle */}
              <path d="M 64 25 L 53 45 L 63 48 L 72 28 Z" fill="#28a745" />
              <circle cx="69" cy="25" r="5" fill="#28a745" />

              {/* Light Green Leaf */}
              <path d="M 43,35 C 28,45 28,65 38,75 C 41,60 45,45 43,35 Z" fill="#71c837" />
              
              {/* Dark Green Leaf */}
              <path d="M 69,40 C 72,55 58,75 40,78 C 45,65 55,45 69,40 Z" fill="#28a745" />
              
              {/* Veins */}
              <path d="M 38,75 C 39,60 41,50 43,35" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
              <path d="M 40,78 C 50,70 60,55 69,40" stroke="white" strokeWidth="1.5" fill="none" strokeLinecap="round" />
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="font-serif text-xl font-semibold leading-none text-[var(--color-forest)]">
              Dr. Demo
            </span>
            <span className="text-xs tracking-widest uppercase text-[var(--color-forest)]/70 mt-1">
              Ayurveda Clinic
            </span>
          </div>
        </Link>
        
        {/* Search Bar (Desktop) */}
        <div className="hidden md:flex items-center relative group max-w-xs w-full">
          <div className="relative w-full">
            <input 
              type="text" 
              placeholder="Search..."
              className="w-full pl-9 pr-4 py-2 border border-[var(--color-forest)]/15 rounded-sm bg-[var(--color-cream)]/50 focus:outline-none focus:border-[var(--color-terracotta)] text-xs text-[var(--color-forest)] font-medium"
            />
            <Search className="w-3.5 h-3.5 text-[var(--color-forest)]/40 absolute left-3 top-1/2 -translate-y-1/2" />
          </div>
          {/* Tooltip Popup */}
          <div className="absolute top-full left-0 mt-2 w-full bg-[var(--color-forest)] text-[var(--color-cream)] text-[10px] p-2.5 rounded-sm opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 shadow-md border border-[var(--color-cream)]/10">
            Search by speciality, city...
          </div>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 lg:gap-8 shrink-0">
          <div className="relative group">
            <Link href="/" className="text-sm font-medium hover:text-[var(--color-terracotta)] transition-colors">
              Home
            </Link>
            {/* Tooltip Popup */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-28 bg-[var(--color-forest)] text-[var(--color-cream)] text-[10px] p-2 rounded-sm text-center opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 shadow-md">
              Return to Homepage
            </div>
          </div>

          <div className="relative group">
            <Link href="/about" className="text-sm font-medium hover:text-[var(--color-terracotta)] transition-colors">
              About
            </Link>
            {/* Tooltip Popup */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-48 bg-[var(--color-forest)] text-[var(--color-cream)] text-[10px] p-2 rounded-sm text-center opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 shadow-md">
              Learn about Dr. Demo's experience
            </div>
          </div>

          <div className="relative group">
            <Link href="/treatments" className="text-sm font-medium hover:text-[var(--color-terracotta)] transition-colors">
              Treatments
            </Link>
            {/* Tooltip Popup */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-44 bg-[var(--color-forest)] text-[var(--color-cream)] text-[10px] p-2 rounded-sm text-center opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 shadow-md">
              View therapies &amp; consultation details
            </div>
          </div>

          <div className="relative group">
            <Link href="/lab-tests" className="text-sm font-medium hover:text-[var(--color-terracotta)] transition-colors">
              Lab Tests
            </Link>
            {/* Tooltip Popup */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-44 bg-[var(--color-forest)] text-[var(--color-cream)] text-[10px] p-2 rounded-sm text-center opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 shadow-md">
              Schedule blood tests &amp; health screenings
            </div>
          </div>

          <div className="relative group">
            <Link href="/portfolio" className="text-sm font-medium hover:text-[var(--color-terracotta)] transition-colors">
              Portfolio
            </Link>
            {/* Tooltip Popup */}
            <div className="absolute top-full left-1/2 -translate-x-1/2 mt-2 w-44 bg-[var(--color-forest)] text-[var(--color-cream)] text-[10px] p-2 rounded-sm text-center opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 shadow-md">
              See facilities &amp; patient experiences
            </div>
          </div>

          <div className="relative group">
            <Link
              href="/appointments"
              className="text-sm font-medium px-5 py-2.5 rounded-sm bg-[var(--color-terracotta)] text-[var(--color-cream)] hover:bg-[var(--color-terracotta)]/90 transition-colors shadow-sm block"
            >
              Book Appointment
            </Link>
            {/* Tooltip Popup */}
            <div className="absolute top-full right-0 mt-2 w-44 bg-[var(--color-forest)] text-[var(--color-cream)] text-[10px] p-2 rounded-sm text-center opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 shadow-md">
              Schedule consultation slot online
            </div>
          </div>
        </nav>

        {/* Mobile Menu Toggle */}
        <button 
          className="md:hidden text-[var(--color-forest)] p-2 hover:bg-[var(--color-forest)]/5 rounded-sm transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-label="Toggle menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Nav */}
      {isOpen && (
        <nav className="md:hidden border-t border-[var(--color-forest)]/10 bg-[var(--color-cream)] shadow-lg">
          <div className="flex flex-col p-4 space-y-2">
            
            {/* Mobile Search */}
            <div className="relative w-full mb-3">
              <input 
                type="text" 
                placeholder="Search by speciality, city..."
                className="w-full pl-9 pr-4 py-2.5 border border-[var(--color-forest)]/15 rounded-sm bg-white text-xs text-[var(--color-forest)] font-medium"
              />
              <Search className="w-4 h-4 text-[var(--color-forest)]/40 absolute left-3 top-1/2 -translate-y-1/2" />
            </div>

            <Link 
              href="/" 
              className="text-sm font-medium text-[var(--color-forest)] p-3 hover:bg-[var(--color-forest)]/5 rounded-sm transition-colors" 
              onClick={() => setIsOpen(false)}
            >
              Home
            </Link>
            <Link 
              href="/about" 
              className="text-sm font-medium text-[var(--color-forest)] p-3 hover:bg-[var(--color-forest)]/5 rounded-sm transition-colors" 
              onClick={() => setIsOpen(false)}
            >
              About
            </Link>
            <Link 
              href="/treatments" 
              className="text-sm font-medium text-[var(--color-forest)] p-3 hover:bg-[var(--color-forest)]/5 rounded-sm transition-colors" 
              onClick={() => setIsOpen(false)}
            >
              Treatments
            </Link>
            <Link 
              href="/lab-tests" 
              className="text-sm font-medium text-[var(--color-forest)] p-3 hover:bg-[var(--color-forest)]/5 rounded-sm transition-colors" 
              onClick={() => setIsOpen(false)}
            >
              Lab Tests
            </Link>
            <Link 
              href="/portfolio" 
              className="text-sm font-medium text-[var(--color-forest)] p-3 hover:bg-[var(--color-forest)]/5 rounded-sm transition-colors" 
              onClick={() => setIsOpen(false)}
            >
              Portfolio
            </Link>
            <Link
              href="/appointments"
              className="text-sm font-medium mt-2 px-5 py-3 text-center rounded-sm bg-[var(--color-terracotta)] text-[var(--color-cream)]"
              onClick={() => setIsOpen(false)}
            >
              Book Appointment
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
