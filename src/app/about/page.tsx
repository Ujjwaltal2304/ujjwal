import { Award, GraduationCap, MapPin } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-cream)]">
      {/* Header Section */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-serif text-[var(--color-forest)] font-semibold mb-6">
            About Dr. Dogra
          </h1>
          <div className="w-20 h-1 bg-[var(--color-terracotta)] rounded-full"></div>
        </div>
      </section>

      {/* Bio Section */}
      <section className="py-12 px-4 mb-20">
        <div className="container mx-auto max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-20 items-start">
            
            {/* Photo Placeholder */}
            <div className="md:col-span-5 lg:col-span-4 flex flex-col gap-6">
              <div className="w-full aspect-[3/4] bg-[var(--color-forest)]/10 rounded-sm flex items-center justify-center border border-[var(--color-forest)]/20 overflow-hidden relative shadow-sm">
                <div className="absolute inset-0 flex flex-col items-center justify-center text-[var(--color-forest)]/40 gap-3 p-6 text-center">
                  <svg className="w-12 h-12" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                  </svg>
                  <span className="text-sm font-medium uppercase tracking-widest">[Professional Portrait Placeholder]</span>
                </div>
              </div>
              
              {/* Quick Facts */}
              <div className="bg-white p-6 border border-[var(--color-forest)]/10 rounded-sm space-y-4 shadow-sm">
                <div>
                  <h3 className="text-xs font-semibold text-[var(--color-forest)]/60 uppercase tracking-wider mb-1">Qualifications</h3>
                  <p className="text-[var(--color-forest)] font-medium">BAMS, [University Name]</p>
                  <p className="text-[var(--color-forest)] font-medium">MD (Ayurveda), [University Name]</p>
                </div>
                <div className="pt-3 border-t border-[var(--color-forest)]/10">
                  <h3 className="text-xs font-semibold text-[var(--color-forest)]/60 uppercase tracking-wider mb-1">Experience</h3>
                  <p className="text-[var(--color-forest)] font-medium">15+ Years of Clinical Practice</p>
                </div>
                <div className="pt-3 border-t border-[var(--color-forest)]/10">
                  <h3 className="text-xs font-semibold text-[var(--color-forest)]/60 uppercase tracking-wider mb-2">Specializations</h3>
                  <ul className="text-[var(--color-forest)] font-medium text-sm space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-terracotta)] mt-0.5">•</span> Panchkarma Detoxification
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-terracotta)] mt-0.5">•</span> Chronic Disease Management
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-terracotta)] mt-0.5">•</span> Neurological Disorders
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-[var(--color-terracotta)] mt-0.5">•</span> Metabolic Imbalances
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Content */}
            <div className="md:col-span-7 lg:col-span-8 space-y-12">
              
              {/* Philosophy */}
              <div className="space-y-6 text-lg text-[var(--color-forest)]/90 leading-relaxed">
                <h2 className="text-2xl font-serif text-[var(--color-forest)] font-semibold mb-4">Clinical Philosophy & Approach</h2>
                <p>
                  Dr. Dogra's practice is rooted in the classical principles of Ayurveda, integrating rigorous traditional diagnostics with contemporary clinical protocols. The core philosophy centers on treating the underlying pathophysiology of disease rather than merely suppressing symptoms. Every treatment regimen is meticulously formulated based on an individual's unique physiological constitution (Prakriti) and the current state of doshic imbalance (Vikriti).
                </p>
                <p>
                  Specializing in Panchkarma—the comprehensive five-step detoxification and bio-purification therapy—Dr. Dogra employs these intensive procedures to eliminate deep-seated metabolic toxins. This systemic purification restores the body's innate homeostasis, enabling enhanced cellular function and long-term remission in various chronic conditions.
                </p>
                <p>
                  Care is administered in a disciplined, professional clinical environment where patient safety, hygiene, and the authenticity of therapeutic herbal preparations are paramount. The ultimate goal is to provide evidence-based, holistic interventions that foster sustained health, vitality, and systemic resilience.
                </p>
              </div>

              {/* Milestones / Timeline */}
              <div className="pt-10 border-t border-[var(--color-forest)]/10">
                <h2 className="text-2xl font-serif text-[var(--color-forest)] font-semibold mb-8">Professional Milestones</h2>
                
                <div className="space-y-8 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-[var(--color-forest)]/20 before:to-transparent">
                  
                  {/* Timeline Item 1 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[var(--color-cream)] bg-[var(--color-terracotta)] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      <GraduationCap className="w-4 h-4" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-sm border border-[var(--color-forest)]/10 shadow-sm">
                      <h3 className="font-semibold text-[var(--color-forest)] mb-1">Medical Education</h3>
                      <p className="text-sm text-[var(--color-forest)]/70 leading-relaxed">Completed BAMS from [University Name], followed by specialized postgraduate training in authentic Panchkarma therapies.</p>
                    </div>
                  </div>

                  {/* Timeline Item 2 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[var(--color-cream)] bg-[var(--color-terracotta)] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-sm border border-[var(--color-forest)]/10 shadow-sm">
                      <h3 className="font-semibold text-[var(--color-forest)] mb-1">Phagwara Clinic Established</h3>
                      <p className="text-sm text-[var(--color-forest)]/70 leading-relaxed">Opened the primary Panchkarma center in Phagwara, offering comprehensive indoor therapies and chronic care.</p>
                    </div>
                  </div>

                  {/* Timeline Item 3 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[var(--color-cream)] bg-[var(--color-terracotta)] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      <MapPin className="w-4 h-4" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-sm border border-[var(--color-forest)]/10 shadow-sm">
                      <h3 className="font-semibold text-[var(--color-forest)] mb-1">Jalandhar Expansion</h3>
                      <p className="text-sm text-[var(--color-forest)]/70 leading-relaxed">Extended clinical services to Jalandhar to serve a growing patient base with evening consultation hours.</p>
                    </div>
                  </div>

                  {/* Timeline Item 4 */}
                  <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                    <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-[var(--color-cream)] bg-[var(--color-terracotta)] text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                      <Award className="w-4 h-4" />
                    </div>
                    <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] bg-white p-5 rounded-sm border border-[var(--color-forest)]/10 shadow-sm">
                      <h3 className="font-semibold text-[var(--color-forest)] mb-1">15+ Years of Excellence</h3>
                      <p className="text-sm text-[var(--color-forest)]/70 leading-relaxed">Continuing to lead the field in authentic Ayurvedic treatments, having successfully treated over 5,000 patients across Punjab.</p>
                    </div>
                  </div>

                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
