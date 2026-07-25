"use client";

import { useState, useEffect, useRef } from "react";
import Image from "next/image";

interface BackgroundCarouselProps {
  images: string[];
  intervalMs?: number;
  overlayOpacity?: number; // 0 to 100
}

export default function BackgroundCarousel({ 
  images, 
  intervalMs = 6000,
  overlayOpacity = 60
}: BackgroundCarouselProps) {
  const [activeIndex, setActiveIndex] = useState(0);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  const startCarousel = () => {
    if (intervalRef.current) clearInterval(intervalRef.current);
    intervalRef.current = setInterval(() => {
      setActiveIndex((current) => (current + 1) % images.length);
    }, intervalMs);
  };

  const stopCarousel = () => {
    if (intervalRef.current) {
      clearInterval(intervalRef.current);
      intervalRef.current = null;
    }
  };

  useEffect(() => {
    // Initial start
    startCarousel();

    // Handle Page Visibility API to pause animation when tab is inactive
    const handleVisibilityChange = () => {
      if (document.hidden) {
        stopCarousel();
      } else {
        startCarousel();
      }
    };

    document.addEventListener("visibilitychange", handleVisibilityChange);

    return () => {
      stopCarousel();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
    };
  }, [images.length, intervalMs]);

  if (!images || images.length === 0) return null;

  return (
    <div className="absolute inset-0 w-full h-full overflow-hidden bg-[#0A2540] z-0">
      {images.map((src, index) => {
        const isActive = index === activeIndex;
        return (
          <div 
            key={src}
            className={`absolute inset-0 w-full h-full transition-opacity duration-[1500ms] ease-in-out ${
              isActive ? "opacity-100" : "opacity-0"
            }`}
          >
            {/* 
              Ken Burns effect:
              When active, we scale from 100% to 110% over the hold duration + transition duration.
              When inactive, it holds its scale briefly before resetting (or instantly resets hidden).
            */}
            <div className="w-full h-full relative">
              <Image
                src={src}
                alt={`Background slide ${index + 1}`}
                fill
                priority={index === 0}
                className="object-cover object-center"
                sizes="100vw"
                quality={100}
                unoptimized={true}
              />
            </div>
          </div>
        );
      })}

      {/* Dark Semi-Transparent Overlay */}
      <div 
        className="absolute inset-0 z-10 pointer-events-none"
        style={{
          background: `linear-gradient(to right, rgba(10, 37, 64, ${overlayOpacity / 100}), rgba(0, 0, 0, ${(overlayOpacity - 20) / 100}))`
        }}
      />
    </div>
  );
}
