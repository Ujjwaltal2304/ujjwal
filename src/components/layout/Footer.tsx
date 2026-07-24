import Link from "next/link";
import { ExternalLink } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-forest)] text-[var(--color-cream)] pt-16 pb-8">
      <div className="container mx-auto px-4">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-4">
            <h4 className="font-serif text-2xl font-semibold mb-2">Phagwara Clinic</h4>
            <div className="space-y-2 text-[var(--color-cream)]/80 text-sm leading-relaxed">
              <p>Singla Market, Prime Tower</p>
              <p>Opposite Bus Stand Road</p>
              <p>Phagwara, Punjab 144401</p>
              <p className="font-medium pt-2 text-[var(--color-cream)]">Timings: 10am–4pm (Sunday off)</p>
            </div>
            <a 
              href="https://maps.app.goo.gl/LinxEXfSQyDCB7km7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-terracotta)] hover:text-[var(--color-terracotta)]/80 transition-colors mt-2"
            >
              Get Directions <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="space-y-4">
            <h4 className="font-serif text-2xl font-semibold mb-2">Jalandhar Clinic</h4>
            <div className="space-y-2 text-[var(--color-cream)]/80 text-sm leading-relaxed">
              <p>119, Mann Nagar, near Satguru Kabir Chowk</p>
              <p>Wadala Chowk Road, Urban Estate</p>
              <p>Jalandhar, Punjab 144001</p>
              <p className="font-medium pt-2 text-[var(--color-cream)]">Timings: 5pm–8pm (Sunday off)</p>
            </div>
            <a 
              href="https://maps.app.goo.gl/jKiWeG4DbcQLTeVZ7" 
              target="_blank" 
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-[var(--color-terracotta)] hover:text-[var(--color-terracotta)]/80 transition-colors mt-2"
            >
              Get Directions <ExternalLink className="w-4 h-4" />
            </a>
          </div>
        </div>
        
        <div className="border-t border-[var(--color-cream)]/20 pt-8 flex flex-col md:flex-row items-center justify-between gap-6 md:gap-4 text-xs text-[var(--color-cream)]/60 text-center md:text-left">
          <p>&copy; {new Date().getFullYear()} Dr. Demo Ayurveda Clinic. All rights reserved.</p>
          <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
            <div className="flex gap-4">
              <Link href="/about" className="hover:text-[var(--color-cream)] transition-colors">About</Link>
              <Link href="/treatments" className="hover:text-[var(--color-cream)] transition-colors">Treatments</Link>
              <Link href="/appointments" className="hover:text-[var(--color-cream)] transition-colors">Appointments</Link>
            </div>
            <span className="hidden sm:inline text-[var(--color-cream)]/30">|</span>
            <p>Website by <a href="#" className="hover:text-[var(--color-cream)] transition-colors font-medium">Kenet Technologies</a></p>
          </div>
        </div>
      </div>
    </footer>
  );
}
