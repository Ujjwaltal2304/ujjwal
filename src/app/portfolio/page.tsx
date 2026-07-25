"use client";

import { useState } from "react";
import { Star, Award, ShieldCheck, MapPin, Search } from "lucide-react";

export default function PortfolioPage() {
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: "All Gallery" },
    { id: "facilities", label: "Clinic Facilities" },
    { id: "treatments", label: "Treatment Chambers" },
    { id: "credentials", label: "Certifications & Credibility" }
  ];

  const galleryItems = [
    {
      id: 1,
      category: "facilities",
      title: "Main Consultation Suite (Main)",
      desc: "Private consultation room equipped for traditional pulse diagnostics (Nadi Pariksha) and patient history evaluations.",
      placeholder: "Consultation Suite Photo Placeholder\n[3:4 Portrait]"
    },
    {
      id: 2,
      category: "treatments",
      title: "Traditional Panchkarma Therapy Room",
      desc: "Hygienic treatment chamber featuring an authentic hand-carved wooden Droni (massage table) for oil therapies.",
      placeholder: "Panchkarma Droni Chamber\n[16:10 Landscape]"
    },
    {
      id: 3,
      category: "credentials",
      title: "State Council Registration Certificate",
      desc: "Official medical practitioner credentials registered under the Board of Ayurvedic and Unani Systems of Medicine, the region.",
      placeholder: "Registration Certificate\n[4:5 Portrait]"
    },
    {
      id: 4,
      category: "facilities",
      title: "Evening Consult Clinic (City)",
      desc: "Our second consultation suite in Mann Nagar, City, serving patients during evening hours.",
      placeholder: "City Consult Suite\n[4:3 Landscape]"
    },
    {
      id: 5,
      category: "treatments",
      title: "Shirodhara Oil Flow Equipment",
      desc: "Dedicated Shirodhara setup with temperature-controlled oil dispensing vessels and sound-insulated therapy area.",
      placeholder: "Shirodhara Setup Area\n[3:4 Portrait]"
    },
    {
      id: 6,
      category: "credentials",
      title: "Ayurveda Medicine PG Specialization",
      desc: "Certification of postgraduate credentials in Panchkarma and classical therapeutics.",
      placeholder: "Specialization Certificate\n[4:5 Portrait]"
    }
  ];

  const testimonials = [
    {
      quote: "The chronic digestive issues I suffered from for 5 years were addressed successfully by Dr. Demo. The clinical approach to Panchkarma and strict dietary adjustment made a massive difference.",
      author: "Mr. Sharma, Main",
      treatment: "Panchakarma (Detoxification)"
    },
    {
      quote: "I visited the City clinic for chronic sciatica pain. After 7 sessions of customized Abhyanga and specialized basti, the nerve compression reduced significantly.",
      author: "Mrs. Kaur, City",
      treatment: "Abhyanga & Basti Therapy"
    },
    {
      quote: "Very professional clinical setup. Unlike commercial spas, Dr. Demo conducts a rigorous pulse diagnosis first and only prescribes therapies that are medically necessary.",
      author: "Dr. A. Verma, City",
      treatment: "General Consultation & Nasyam"
    },
    {
      quote: "I highly recommend the herbal treatments here. My long-standing skin issues have cleared up after three months of guided herbal medication and lifestyle advice.",
      author: "S. Amit Singh, Main",
      treatment: "Herbal Consultation"
    }
  ];

  const filteredItems = activeFilter === "all" 
    ? galleryItems 
    : galleryItems.filter(item => item.category === activeFilter);

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-cream)]">
      {/* Top Color Strip - Portfolio */}
      <div className="h-1.5 w-full bg-[#fb7185] shrink-0"></div>
      {/* Header */}
      <section className="pt-24 pb-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-serif text-[var(--color-forest)] font-semibold mb-6">
            Clinic Portfolio &amp; Credibility
          </h1>
          <p className="text-lg text-[var(--color-forest)]/80 max-w-2xl leading-relaxed">
            Evidence of an established clinical practice. Browse photos of our diagnostic suites, sterile treatment chambers, and official practitioner credentials.
          </p>
          <div className="w-20 h-1 bg-[var(--color-terracotta)] rounded-full mt-6"></div>
        </div>
      </section>

      {/* Filter Tabs */}
      <section className="py-4 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="flex flex-wrap gap-2 border-b border-[var(--color-forest)]/10 pb-4">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-5 py-2.5 text-xs font-semibold uppercase tracking-wider transition-colors duration-200 rounded-sm border ${
                  activeFilter === cat.id
                    ? "bg-[var(--color-forest)] text-[var(--color-cream)] border-[var(--color-forest)]"
                    : "bg-white text-[var(--color-forest)] border-[var(--color-forest)]/10 hover:bg-[var(--color-forest)]/5"
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredItems.map((item) => (
              <div 
                key={item.id} 
                className="bg-white border border-[var(--color-forest)]/10 rounded-sm overflow-hidden shadow-sm flex flex-col hover:border-[var(--color-terracotta)]/40 transition-colors"
              >
                {/* Photo Space */}
                <div className="w-full aspect-[4/3] bg-[var(--color-forest)]/5 border-b border-[var(--color-forest)]/10 p-6 flex flex-col items-center justify-center text-center relative group">
                  <div className="space-y-2 select-none pointer-events-none">
                    <Search className="w-8 h-8 text-[var(--color-terracotta)] opacity-40 mx-auto mb-2" />
                    <p className="text-xs font-semibold uppercase tracking-wider text-[var(--color-forest)]/60">
                      {item.placeholder.split('\n')[0]}
                    </p>
                    <p className="text-[10px] text-[var(--color-forest)]/40 font-mono">
                      {item.placeholder.split('\n')[1] || ""}
                    </p>
                  </div>
                </div>

                {/* Text Content */}
                <div className="p-6 flex-1 flex flex-col justify-between">
                  <div>
                    <span className="text-[10px] font-bold uppercase tracking-wider text-[var(--color-terracotta)] mb-2 block">
                      {item.category === "facilities" ? "Facility Space" : item.category === "treatments" ? "Therapy Setup" : "Credentials"}
                    </span>
                    <h3 className="font-serif text-lg font-semibold text-[var(--color-forest)] mb-2">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[var(--color-forest)]/70 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Patient Testimonials */}
      <section className="py-16 bg-white border-t border-[var(--color-forest)]/10 px-4 mb-20">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center max-w-2xl mx-auto mb-12 space-y-3">
            <h2 className="text-3xl font-serif text-[var(--color-forest)] font-semibold">Clinical Testimonials</h2>
            <p className="text-sm text-[var(--color-forest)]/70">
              Read how Dr. Demo's customized medical therapies and Panchkarma programs have helped patients manage chronic illnesses.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {testimonials.map((test, i) => (
              <div 
                key={i} 
                className="bg-[var(--color-cream)]/30 p-8 border border-[var(--color-forest)]/10 rounded-sm shadow-sm flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex gap-1 text-[var(--color-terracotta)]">
                    {[...Array(5)].map((_, idx) => (
                      <Star key={idx} className="w-4 h-4 fill-current" />
                    ))}
                  </div>
                  <p className="text-sm text-[var(--color-forest)]/80 italic leading-relaxed">
                    "{test.quote}"
                  </p>
                </div>
                <div className="pt-6 border-t border-[var(--color-forest)]/10 mt-6 flex justify-between items-center">
                  <div>
                    <p className="text-sm font-bold text-[var(--color-forest)]">{test.author}</p>
                    <p className="text-xs text-[var(--color-terracotta)] font-medium mt-0.5">{test.treatment}</p>
                  </div>
                  <ShieldCheck className="w-5 h-5 text-[var(--color-forest)]/30" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
