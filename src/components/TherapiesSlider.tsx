"use client";

import { useState, useEffect, useCallback, useRef } from "react";
import { ChevronLeft, ChevronRight, Leaf } from "lucide-react";
import Image from "next/image";

const therapies = [
  {
    id: 1,
    name: "Abhyangam",
    image: "https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&w=600&auto=format&fit=crop",
    desc: "Full body oil massage"
  },
  {
    id: 2,
    name: "Shirodhara",
    image: "https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&w=600&auto=format&fit=crop",
    desc: "Warm oil poured over forehead"
  },
  {
    id: 3,
    name: "Panchakarma",
    image: "https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&w=600&auto=format&fit=crop",
    desc: "Complete body detoxification"
  },
  {
    id: 4,
    name: "Udvartana",
    image: "https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&w=600&auto=format&fit=crop",
    desc: "Herbal powder massage"
  },
  {
    id: 5,
    name: "Nasya",
    image: "https://images.unsplash.com/photo-1542840410-3092f99611a3?q=80&w=600&auto=format&fit=crop",
    desc: "Nasal administration of herbs"
  },
  {
    id: 6,
    name: "Kativasti",
    image: "https://images.unsplash.com/photo-1512290923902-8a9f81dc236c?q=80&w=600&auto=format&fit=crop",
    desc: "Lower back pain treatment"
  }
];

export default function TherapiesSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);
  const [itemsPerView, setItemsPerView] = useState(1);

  // Determine items per view based on window size
  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1024) {
        setItemsPerView(4);
      } else if (window.innerWidth >= 768) {
        setItemsPerView(2);
      } else {
        setItemsPerView(1);
      }
    };
    
    // Initial check
    handleResize();
    
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const totalGroups = Math.max(1, therapies.length - itemsPerView + 1);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev + 1) % totalGroups);
  }, [totalGroups]);

  const prevSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev - 1 + totalGroups) % totalGroups);
  }, [totalGroups]);

  // Auto scroll effect
  useEffect(() => {
    if (!isHovered) {
      const timer = setInterval(() => {
        nextSlide();
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [isHovered, nextSlide]);

  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <span className="inline-flex items-center justify-center gap-2 text-sm font-medium uppercase tracking-widest text-emerald-600 mb-4">
            <Leaf className="w-4 h-4" /> Signature Treatments
          </span>
          <h2 className="text-4xl font-serif text-[#0A2540] font-bold">Popular Ayurveda Therapies</h2>
          <div className="w-24 h-1 bg-emerald-500 mx-auto mt-6 rounded-full"></div>
        </div>

        <div 
          className="relative px-12"
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          {/* Slider Container */}
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-700 ease-in-out"
              style={{ transform: `translateX(-${currentIndex * (100 / itemsPerView)}%)` }}
            >
              {therapies.map((therapy) => (
                <div 
                  key={therapy.id} 
                  className="flex-shrink-0 px-4"
                  style={{ width: `${100 / itemsPerView}%` }}
                >
                  <div className="flex flex-col items-center group">
                    <div className="relative w-48 h-48 md:w-56 md:h-56 rounded-full overflow-hidden mb-6 shadow-xl border-4 border-white group-hover:border-emerald-100 transition-colors duration-300">
                      <div className="absolute inset-0 bg-black/10 group-hover:bg-black/0 transition-colors z-10 duration-300"></div>
                      <Image 
                        src={therapy.image} 
                        alt={therapy.name}
                        fill
                        className="object-cover group-hover:scale-110 transition-transform duration-700"
                      />
                    </div>
                    <h3 className="text-2xl font-serif font-semibold text-[#0A2540] group-hover:text-emerald-600 transition-colors">{therapy.name}</h3>
                    <p className="text-[#0A2540]/60 mt-2 text-center text-sm">{therapy.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Navigation Arrows */}
          <button 
            onClick={prevSlide}
            className="absolute left-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-[#0A2540] hover:bg-emerald-50 hover:text-emerald-600 transition-colors z-10"
            aria-label="Previous slide"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>
          
          <button 
            onClick={nextSlide}
            className="absolute right-0 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white shadow-lg border border-gray-100 flex items-center justify-center text-[#0A2540] hover:bg-emerald-50 hover:text-emerald-600 transition-colors z-10"
            aria-label="Next slide"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>

        {/* Navigation Dots */}
        <div className="flex justify-center gap-2 mt-12">
          {Array.from({ length: totalGroups }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentIndex(idx)}
              className={`w-2.5 h-2.5 rounded-full transition-all duration-300 ${
                currentIndex === idx 
                  ? "bg-emerald-500 w-8" 
                  : "bg-gray-300 hover:bg-emerald-300"
              }`}
              aria-label={`Go to slide ${idx + 1}`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
