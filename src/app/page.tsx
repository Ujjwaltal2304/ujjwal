import Link from "next/link";
import { ArrowRight, Leaf, Droplet, Wind, Coffee, Activity, Heart, ExternalLink, MapPin, Award, Users, Clock, HeartPulse, Bone, Smile, FlaskConical, Mail, Phone } from "lucide-react";
import TherapiesSlider from "@/components/TherapiesSlider";
import BackgroundCarousel from "@/components/BackgroundCarousel";
import FAQSection from "@/components/FAQSection";

export default function Home() {
  const heroImages = [
    "/hero-bg/herbs-plates.png",
    "/hero-bg/spice-spoons.png",
    "/hero-bg/herbal-hands.png",
    "/hero-bg/herbs-cutting-board.png"
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Top Color Strip - Home */}
      <div className="h-1.5 w-full bg-[var(--color-terracotta)] shrink-0"></div>
      
      {/* 1. Hero */}
      <section className="relative py-32 md:py-48 overflow-hidden">
        <BackgroundCarousel images={heroImages} intervalMs={6000} overlayOpacity={45} />
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-emerald-400 drop-shadow-md">
              <Leaf className="w-4 h-4" /> Established Ayurvedic Practice
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-white font-semibold leading-[1.15] drop-shadow-lg">
              Authentic Panchkarma &amp; <br className="hidden md:block" /> Ayurvedic Care Across the region
            </h1>
            <p className="text-lg md:text-xl text-white/90 max-w-2xl mx-auto leading-relaxed drop-shadow-md">
              Clinical, evidence-based Ayurvedic medicine and traditional Panchkarma therapies to restore your body's natural balance.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link 
                href="/appointments" 
                className="btn-pop px-8 py-4 bg-[var(--color-forest)] text-[var(--color-cream)] font-medium rounded-sm hover:bg-[var(--color-forest)]/90 transition-colors shadow-sm"
              >
                Book an Appointment
              </Link>
              <Link 
                href="/treatments" 
                className="btn-pop px-8 py-4 bg-white/10 backdrop-blur-sm text-white font-medium rounded-sm border border-white/30 hover:border-white/60 hover:bg-white/20 transition-colors shadow-sm"
              >
                Explore Treatments
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Intro to Dr. Demo */}
      <section className="py-20 bg-white border-y border-[var(--color-forest)]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-serif text-[var(--color-forest)] font-medium">Under the Care of Dr. Demo</h2>
            <p className="text-[var(--color-forest)]/80 leading-relaxed text-lg">
              With extensive clinical experience in traditional Ayurvedic medicine, Dr. Demo specializes in chronic disease management and authentic Panchkarma detoxification. Every treatment plan is meticulously tailored to the patient's unique physiological constitution and current state of health.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-[var(--color-terracotta)] font-medium hover:text-[var(--color-terracotta)]/80 transition-colors mt-2">
              Learn more about Dr. Demo <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Popular Therapies Slider */}
      <TherapiesSlider />

      {/* Specialities Section */}
      <section className="py-20 bg-white border-b border-[var(--color-forest)]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-forest)] font-medium">GENERAL CLINICAL SPECIALISTS</h2>
            <p className="text-[var(--color-forest)]/70 max-w-2xl mx-auto">Providing targeted therapies and diagnostic assessments across key medical disciplines.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "General Ayurveda Physician",
                desc: "Expert consultation and diagnostic assessments for overall health, metabolic balance, and holistic wellness.",
                icon: Activity
              },
              {
                title: "Panchkarma Specialists",
                desc: "Complete metabolic restoration and customized detoxification therapies for chronic condition management.",
                icon: Droplet
              },
              {
                title: "Kayachitsa (General Medicine)",
                desc: "Traditional Ayurvedic internal medicine focusing on treating the entire body system and treating systemic diseases.",
                icon: HeartPulse
              },
              {
                title: "Swasthavaritta (Preventive Healthcare)",
                desc: "Preventive medicine, lifestyle modifications, and dietary counseling to maintain optimal health and immunity.",
                icon: Leaf
              }
            ].map((spec, idx) => (
              <div key={idx} className="bg-[var(--color-cream)]/20 p-8 border border-[var(--color-forest)]/10 rounded-sm hover:border-[var(--color-terracotta)]/40 transition-colors">
                <spec.icon className="w-8 h-8 text-[var(--color-terracotta)] mb-6" />
                <h3 className="text-xl font-serif text-[var(--color-forest)] font-medium mb-3">{spec.title}</h3>
                <p className="text-sm text-[var(--color-forest)]/70 leading-relaxed">{spec.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Disease Wise Specialists */}
      <section className="py-20 bg-[var(--color-cream)]/45 border-b border-[var(--color-forest)]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-forest)] font-medium">DISEASE WISE SPECIALIST</h2>
            <p className="text-[var(--color-forest)]/70 max-w-2xl mx-auto">Focused Ayurvedic clinical expertise for specific chronic and lifestyle diseases.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                title: "Diabetes Specialist",
                desc: "Metabolic correction and blood sugar regulation through authentic dietary planning and Ayurvedic formulations.",
                icon: Activity
              },
              {
                title: "Arthritis & Joint Pain Specialist",
                desc: "Targeted therapies for pain relief, joint mobility restoration, and cartilage support in all forms of arthritis.",
                icon: Bone
              },
              {
                title: "Digestive Disorder Specialist",
                desc: "Treatment for acidity, IBS, chronic constipation, and restoring gut microbiome balance using natural herbs.",
                icon: Leaf
              },
              {
                title: "Skin & Hair Specialist",
                desc: "Holistic care for chronic dermatological conditions and natural hair revitalization therapies.",
                icon: Smile
              },
              {
                title: "Liver & Kidney Care Specialist",
                desc: "Advanced detoxification protocols and supportive care for optimal hepatic and renal function.",
                icon: Droplet
              },
              {
                title: "PCOS & Women's Health Specialist",
                desc: "Hormonal balancing, menstrual regulation, and comprehensive gynecological support through Ayurveda.",
                icon: Users
              }
            ].map((spec, idx) => (
              <div key={idx} className="bg-white p-8 border border-[var(--color-forest)]/10 rounded-sm shadow-sm flex flex-col items-center text-center hover:border-[var(--color-terracotta)]/40 transition-colors">
                <div className="p-3 bg-[var(--color-cream)] rounded-full text-[var(--color-terracotta)] mb-4">
                  <spec.icon className="w-8 h-8" />
                </div>
                <h3 className="text-xl font-serif text-[var(--color-forest)] font-bold mb-3">{spec.title}</h3>
                <p className="text-sm text-[var(--color-forest)]/70 leading-relaxed">
                  {spec.desc}
                </p>
                <div className="mt-6">
                  <Link href={`/appointments?specialist=${encodeURIComponent(spec.title)}`} className="text-[var(--color-terracotta)] font-medium text-sm hover:underline flex items-center justify-center gap-1">
                    Consult Now <ArrowRight className="w-3 h-3" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 bg-[var(--color-cream)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-forest)] font-medium">Specialized Therapies</h2>
            <p className="text-[var(--color-forest)]/70 max-w-2xl mx-auto">Comprehensive Ayurvedic treatments administered in a professional, clinical setting.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {/* Treatment Cards */}
            {[
              { title: "Panchakarma", desc: "Comprehensive five-step detoxification protocol to eliminate deep-rooted toxins and restore metabolic balance.", icon: Activity },
              { title: "Shirodhara", desc: "Continuous pouring of medicated oils over the forehead to treat neurological and psychological disorders.", icon: Droplet },
              { title: "Abhyanga", desc: "Therapeutic full-body massage with warm, dosha-specific herbal oils to improve circulation and reduce stress.", icon: Wind },
              { title: "Nasyam", desc: "Administration of herbal preparations through the nasal passage, effective for ENT and respiratory ailments.", icon: Leaf },
              { title: "Herbal Consultation", desc: "In-depth diagnostic assessment to prescribe specific herbal formulations for chronic condition management.", icon: Coffee },
              { title: "Diet & Lifestyle", desc: "Personalized nutritional and routine counseling based on Ayurvedic principles for long-term preventative health.", icon: Heart },
            ].map((treatment, idx) => (
              <div key={idx} className="bg-white p-8 border border-[var(--color-forest)]/10 rounded-sm hover:border-[var(--color-terracotta)]/50 transition-colors group">
                <treatment.icon className="w-8 h-8 text-[var(--color-terracotta)] mb-6 opacity-90" />
                <h3 className="text-xl font-serif text-[var(--color-forest)] font-medium mb-3">{treatment.title}</h3>
                <p className="text-[var(--color-forest)]/70 text-sm leading-relaxed mb-6">{treatment.desc}</p>
                <Link href="/treatments" className="text-sm font-medium text-[var(--color-forest)] group-hover:text-[var(--color-terracotta)] transition-colors inline-flex items-center gap-1.5">
                  View details <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Lab Tests Section */}
      <section className="py-20 bg-white border-b border-[var(--color-forest)]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-forest)] font-medium">Book Clinical Blood Tests</h2>
            <p className="text-[var(--color-forest)]/70 max-w-2xl mx-auto">Get accurate, certified laboratory blood tests directly managed at our Main and City centers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                category: "Diabetes and Sugar",
                icon: Activity,
                tests: ["Blood Sugar (Fasting)", "Blood Sugar (PP)"]
              },
              {
                category: "General Health",
                icon: HeartPulse,
                tests: ["Complete Blood Count (CBC)", "ESR", "CRP (Inflammation)"]
              },
              {
                category: "Thyroid",
                icon: FlaskConical,
                tests: ["T3", "T4", "TSH"]
              },
              {
                category: "Infection and Immunity",
                icon: Leaf,
                tests: ["Dengue Test", "Typhoid Test", "Malaria Test", "Covid-19 Test (if applicable)"]
              },
              {
                category: "Full Body Packages",
                icon: Users,
                tests: [
                  "Basic Health Checkup",
                  "Diabetes Packages",
                  "Thyroid Packages",
                  "Women's Health Packages",
                  "Senior Citizen Health Checkup",
                  "Full Body Checkup"
                ]
              }
            ].map((section, idx) => (
              <div key={idx} className="bg-[var(--color-cream)]/20 p-8 border border-[var(--color-forest)]/10 rounded-sm hover:border-[var(--color-terracotta)]/40 transition-colors flex flex-col">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-white rounded-full text-[var(--color-terracotta)] shadow-sm">
                    <section.icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-xl font-serif text-[var(--color-forest)] font-medium">{section.category}</h3>
                </div>
                <ul className="space-y-3 mb-8 flex-1">
                  {section.tests.map((test, testIdx) => (
                    <li key={testIdx} className="flex items-start gap-2 text-sm text-[var(--color-forest)]/80">
                      <div className="w-1.5 h-1.5 rounded-full bg-[var(--color-terracotta)] mt-1.5 shrink-0" />
                      <span>{test}</span>
                    </li>
                  ))}
                </ul>
                <Link href={`/appointments?category=${encodeURIComponent(section.category)}`} className="text-xs font-semibold text-[var(--color-forest)] hover:text-[var(--color-terracotta)] transition-colors inline-flex items-center gap-1 mt-auto">
                  Book from this category <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            ))}
          </div>

          {/* Frequently Booked Tests List */}
          <div className="mt-16 bg-[var(--color-cream)]/30 p-8 rounded-sm border border-[var(--color-forest)]/10 max-w-4xl mx-auto">
            <h3 className="font-serif text-xl font-semibold text-[var(--color-forest)] mb-4 text-center">Frequently Booked Tests Checklist</h3>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-center">
              <div className="bg-white p-4 border border-[var(--color-forest)]/5 rounded-sm hover:border-[var(--color-terracotta)]/30 transition-colors">
                <span className="text-[10px] font-bold tracking-wider text-[var(--color-terracotta)] uppercase block mb-1">Most Popular</span>
                <h4 className="font-semibold text-sm text-[var(--color-forest)]">CBC &amp; ESR Panel</h4>
                <p className="text-[10px] text-[var(--color-forest)]/60 mt-1">General Health &amp; Infection Check</p>
                <Link href="/appointments?service=lab-tests&test=cbc" className="mt-3 inline-block text-xs font-semibold text-[var(--color-terracotta)] hover:underline">Quick Book &rarr;</Link>
              </div>
              <div className="bg-white p-4 border border-[var(--color-forest)]/5 rounded-sm hover:border-[var(--color-terracotta)]/30 transition-colors">
                <span className="text-[10px] font-bold tracking-wider text-[var(--color-terracotta)] uppercase block mb-1">Standard</span>
                <h4 className="font-semibold text-sm text-[var(--color-forest)]">Lipid &amp; Sugar Panel</h4>
                <p className="text-[10px] text-[var(--color-forest)]/60 mt-1">Heart &amp; Diabetes Health</p>
                <Link href="/appointments?service=lab-tests&test=lipid" className="mt-3 inline-block text-xs font-semibold text-[var(--color-terracotta)] hover:underline">Quick Book &rarr;</Link>
              </div>
              <div className="bg-white p-4 border border-[var(--color-forest)]/5 rounded-sm hover:border-[var(--color-terracotta)]/30 transition-colors">
                <span className="text-[10px] font-bold tracking-wider text-[var(--color-terracotta)] uppercase block mb-1">Essential</span>
                <h4 className="font-semibold text-sm text-[var(--color-forest)]">Thyroid (TSH Only)</h4>
                <p className="text-[10px] text-[var(--color-forest)]/60 mt-1">Basic Metabolism Screen</p>
                <Link href="/appointments?service=lab-tests&test=thyroid" className="mt-3 inline-block text-xs font-semibold text-[var(--color-terracotta)] hover:underline">Quick Book &rarr;</Link>
              </div>
            </div>
          </div>
        </div>
      </section>


      {/* 5. Simple trust strip */}
      <section className="py-16 bg-white border-b border-[var(--color-forest)]/10">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-8 text-center divide-y sm:divide-y-0 sm:divide-x divide-[var(--color-forest)]/10">
            <div className="flex flex-col items-center pt-6 sm:pt-0">
              <Award className="w-8 h-8 text-[var(--color-terracotta)] mb-4" />
              <div className="text-3xl font-serif font-semibold text-[var(--color-forest)] mb-1">15+</div>
              <div className="text-sm font-medium text-[var(--color-forest)]/60 uppercase tracking-wide">Years Experience</div>
            </div>
            <div className="flex flex-col items-center pt-6 sm:pt-0">
              <Users className="w-8 h-8 text-[var(--color-terracotta)] mb-4" />
              <div className="text-3xl font-serif font-semibold text-[var(--color-forest)] mb-1">5,000+</div>
              <div className="text-sm font-medium text-[var(--color-forest)]/60 uppercase tracking-wide">Patients Treated</div>
            </div>
            <div className="flex flex-col items-center pt-6 sm:pt-0">
              <Leaf className="w-8 h-8 text-[var(--color-terracotta)] mb-4" />
              <div className="text-2xl font-serif font-semibold text-[var(--color-forest)] mb-2 mt-1">BAMS, MD</div>
              <div className="text-sm font-medium text-[var(--color-forest)]/60 uppercase tracking-wide">Certified Ayurveda</div>
            </div>
          </div>
        </div>
      </section>

      {/* 6. Final CTA banner with Doctor Contacts */}
      <section className="py-24 bg-[var(--color-cream)] border-t border-[var(--color-forest)]/10">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-forest)] font-medium leading-snug">
              Begin your journey toward optimal health and lasting wellness.
            </h2>
            <p className="text-[var(--color-forest)]/70 text-lg max-w-2xl mx-auto">
              Schedule a consultation at either of our clinic locations to discuss a personalized treatment plan, or contact Dr. Demo directly.
            </p>

            {/* Direct Doctor Contacts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto pt-6 text-left">
              <div className="bg-white p-6 border border-[var(--color-forest)]/10 rounded-sm shadow-sm flex items-start gap-4">
                <div className="p-3 bg-[var(--color-cream)] rounded-full text-[var(--color-terracotta)] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[var(--color-forest)] mb-1">Direct Call / WhatsApp</h4>
                  <a href="tel:1234567890" className="text-sm font-bold text-[var(--color-forest)] hover:text-[var(--color-terracotta)] transition-colors block">
                    1234567890
                  </a>
                  <p className="text-[10px] text-[var(--color-forest)]/50 mt-1">Available 10:00 AM – 8:00 PM</p>
                </div>
              </div>

              <div className="bg-white p-6 border border-[var(--color-forest)]/10 rounded-sm shadow-sm flex items-start gap-4">
                <div className="p-3 bg-[var(--color-cream)] rounded-full text-[var(--color-terracotta)] shrink-0">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[var(--color-forest)] mb-1">Email Consultation</h4>
                  <a href="mailto:demo@gmaail.com" className="text-sm font-bold text-[var(--color-forest)] hover:text-[var(--color-terracotta)] transition-colors block break-all">
                    demo@gmaail.com
                  </a>
                  <p className="text-[10px] text-[var(--color-forest)]/50 mt-1">For reports &amp; clinical queries</p>
                </div>
              </div>
            </div>

            <div className="pt-8">
              <Link 
                href="/appointments" 
                className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-forest)] text-[var(--color-cream)] font-medium rounded-sm hover:bg-[var(--color-forest)]/90 transition-colors shadow-sm"
              >
                Book Appointment Online
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />
    </div>
  );
}
