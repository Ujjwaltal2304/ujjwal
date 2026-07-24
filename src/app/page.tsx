import Link from "next/link";
import { ArrowRight, Leaf, Droplet, Wind, Coffee, Activity, Heart, ExternalLink, MapPin, Award, Users, Clock, HeartPulse, Bone, Smile, FlaskConical, Mail, Phone } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Hero */}
      <section className="relative py-24 md:py-32 overflow-hidden bg-[var(--color-cream)]">
        {/* Subtle decorative linework/texture */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, var(--color-forest) 1px, transparent 0)', backgroundSize: '40px 40px' }}></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-4xl mx-auto text-center space-y-8">
            <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-[var(--color-terracotta)]">
              <Leaf className="w-4 h-4" /> Established Ayurvedic Practice
            </span>
            <h1 className="text-4xl md:text-6xl font-serif text-[var(--color-forest)] font-semibold leading-[1.15]">
              Authentic Panchkarma &amp; <br className="hidden md:block" /> Ayurvedic Care Across Punjab
            </h1>
            <p className="text-lg md:text-xl text-[var(--color-forest)]/80 max-w-2xl mx-auto leading-relaxed">
              Clinical, evidence-based Ayurvedic medicine and traditional Panchkarma therapies to restore your body's natural balance.
            </p>
            <div className="flex flex-wrap items-center justify-center gap-4 pt-4">
              <Link 
                href="/appointments" 
                className="px-8 py-4 bg-[var(--color-forest)] text-[var(--color-cream)] font-medium rounded-sm hover:bg-[var(--color-forest)]/90 transition-colors shadow-sm"
              >
                Book an Appointment
              </Link>
              <Link 
                href="/treatments" 
                className="px-8 py-4 bg-transparent text-[var(--color-forest)] font-medium rounded-sm border border-[var(--color-forest)]/20 hover:border-[var(--color-forest)]/40 transition-colors"
              >
                Explore Treatments
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Intro to Dr. Dogra */}
      <section className="py-20 bg-white border-y border-[var(--color-forest)]/5">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center space-y-6">
            <h2 className="text-3xl font-serif text-[var(--color-forest)] font-medium">Under the Care of Dr. Dogra</h2>
            <p className="text-[var(--color-forest)]/80 leading-relaxed text-lg">
              With extensive clinical experience in traditional Ayurvedic medicine, Dr. Dogra specializes in chronic disease management and authentic Panchkarma detoxification. Every treatment plan is meticulously tailored to the patient's unique physiological constitution and current state of health.
            </p>
            <Link href="/about" className="inline-flex items-center gap-2 text-[var(--color-terracotta)] font-medium hover:text-[var(--color-terracotta)]/80 transition-colors mt-2">
              Learn more about Dr. Dogra <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Specialities Section */}
      <section className="py-20 bg-white border-b border-[var(--color-forest)]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-forest)] font-medium">Clinical Specialities</h2>
            <p className="text-[var(--color-forest)]/70 max-w-2xl mx-auto">Providing targeted therapies and diagnostic assessments across key medical disciplines.</p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Cardiology",
                desc: "Ayurvedic cardiovascular support focusing on arterial health, blood pressure management, and heart resilience.",
                icon: HeartPulse
              },
              {
                title: "Orthopedics",
                desc: "Therapies for joint regeneration, skeletal strength, back pain relief, sciatica management, and arthritis care.",
                icon: Bone
              },
              {
                title: "Dental Care",
                desc: "Traditional oral therapies including oil pulling (Gandusha) and mineral-rich herbal treatments for gum and tooth vitality.",
                icon: Smile
              },
              {
                title: "Ayurveda & Panchkarma",
                desc: "Complete metabolic restoration, chronic disease diagnostics, and customized detoxification treatments.",
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

      {/* Specialized Clinical Programs (Heart & Cancer Care) */}
      <section className="py-20 bg-[var(--color-cream)]/45 border-b border-[var(--color-forest)]/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <span className="text-xs font-bold uppercase tracking-wider text-[var(--color-terracotta)]">Specialized Programs</span>
            <h2 className="text-3xl md:text-4xl font-serif text-[var(--color-forest)] font-medium">Cardiology &amp; Supportive Oncology</h2>
            <p className="text-[var(--color-forest)]/70 max-w-2xl mx-auto">Scientifically guided Ayurvedic protocols designed to support cardiac recovery and provide cellular restoration for oncology patients.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Heart Patient Program */}
            <div className="bg-white p-8 border border-[var(--color-forest)]/10 rounded-sm shadow-sm flex flex-col justify-between hover:border-[var(--color-terracotta)]/40 transition-colors">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[var(--color-cream)] rounded-sm text-[var(--color-terracotta)]">
                    <HeartPulse className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif text-[var(--color-forest)] font-bold">Cardiovascular Care</h3>
                </div>
                <p className="text-sm text-[var(--color-forest)]/80 leading-relaxed">
                  Our heart wellness program focuses on optimizing arterial health, managing vascular pressure, and reducing systemic stress through classical Ayurvedic methods.
                </p>
                
                <div className="space-y-4 pt-2 border-t border-[var(--color-forest)]/5">
                  <div>
                    <h4 className="text-xs font-bold text-[var(--color-forest)] uppercase tracking-wider mb-1">Key Treatments</h4>
                    <ul className="text-xs text-[var(--color-forest)]/70 space-y-1.5 list-disc pl-4">
                      <li><strong>Hrud Basti:</strong> Medicated oil pooling over the cardiac region to strengthen heart muscles.</li>
                      <li><strong>Shirodhara:</strong> Neuro-hormonal calming to alleviate cardiac hypertension.</li>
                      <li><strong>Arjuna Ksheerapaka:</strong> Traditional medicated milk decoction for vascular resilience.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[var(--color-forest)] uppercase tracking-wider mb-1">Common Prescriptions</h4>
                    <p className="text-xs text-[var(--color-forest)]/70 leading-relaxed">
                      Cardiotonic formulations including <em>Arjunarishta</em>, <em>Prabhakar Vati</em>, and <em>Hridayarnava Rasa</em> under clinical supervision.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <Link href="/appointments?treatment=cardiology" className="inline-flex items-center justify-center w-full py-3 bg-[var(--color-forest)] hover:bg-[var(--color-forest)]/90 text-[var(--color-cream)] font-medium rounded-sm text-xs transition-colors shadow-sm">
                  Book Cardiology Consultation
                </Link>
              </div>
            </div>

            {/* Cancer Patient Supportive Program */}
            <div className="bg-white p-8 border border-[var(--color-forest)]/10 rounded-sm shadow-sm flex flex-col justify-between hover:border-[var(--color-terracotta)]/40 transition-colors">
              <div className="space-y-6">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 bg-[var(--color-cream)] rounded-sm text-[var(--color-terracotta)]">
                    <Activity className="w-6 h-6" />
                  </div>
                  <h3 className="text-xl font-serif text-[var(--color-forest)] font-bold">Supportive Oncology Care</h3>
                </div>
                <p className="text-sm text-[var(--color-forest)]/80 leading-relaxed">
                  Complementary protocols to assist patients undergoing chemotherapy and radiation. Designed to boost immunity, alleviate treatment side effects, and improve quality of life.
                </p>

                <div className="space-y-4 pt-2 border-t border-[var(--color-forest)]/5">
                  <div>
                    <h4 className="text-xs font-bold text-[var(--color-forest)] uppercase tracking-wider mb-1">Key Programs</h4>
                    <ul className="text-xs text-[var(--color-forest)]/70 space-y-1.5 list-disc pl-4">
                      <li><strong>Rasayana Therapy:</strong> Rejuvenation therapies focused on cellular restoration and cellular immunity.</li>
                      <li><strong>Symptomatic Relief:</strong> Natural therapies to reduce nausea, loss of appetite, and chronic fatigue.</li>
                      <li><strong>Guided Ahara:</strong> Highly regulated nutritional diets to support liver and kidney detoxification during chemo.</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[var(--color-forest)] uppercase tracking-wider mb-1">Common Prescriptions</h4>
                    <p className="text-xs text-[var(--color-forest)]/70 leading-relaxed">
                      Immunomodulating preparations including <em>Ashwagandha</em>, <em>Kanchanar Guggulu</em>, and customized <em>Amalaki Rasayana</em>.
                    </p>
                  </div>
                </div>
              </div>

              <div className="pt-8">
                <Link href="/appointments?treatment=oncology" className="inline-flex items-center justify-center w-full py-3 bg-[var(--color-forest)] hover:bg-[var(--color-forest)]/90 text-[var(--color-cream)] font-medium rounded-sm text-xs transition-colors shadow-sm">
                  Book Supportive Oncology Consult
                </Link>
              </div>
            </div>
          </div>
          
          <div className="text-center mt-8">
            <p className="text-[10px] text-[var(--color-forest)]/50 italic max-w-lg mx-auto">
              *Note: Oncology protocols are supportive and complementary. They do not replace standard chemotherapy, radiation, or surgical interventions.
            </p>
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
            <p className="text-[var(--color-forest)]/70 max-w-2xl mx-auto">Get accurate, certified laboratory blood tests directly managed at our Phagwara and Jalandhar centers.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                title: "Complete Blood Count (CBC)",
                desc: "Evaluates overall health and detects a wide range of conditions including anemia, infection, and leukemia.",
                tooltip: "Analyzes red blood cells, white blood cells, platelets, hemoglobin, and hematocrit. No fasting required. Reports in 24 hours.",
                link: "/appointments?service=lab-tests&test=cbc"
              },
              {
                title: "Lipid Profile (Cholesterol)",
                desc: "Measures cholesterol and triglyceride levels to assess cardiovascular risk and lipid metabolism.",
                tooltip: "Measures Total Cholesterol, HDL (good), LDL (bad), and Triglycerides. Requires 10-12 hours strict fasting. Reports in 24 hours.",
                link: "/appointments?service=lab-tests&test=lipid"
              },
              {
                title: "Thyroid Profile (T3, T4, TSH)",
                desc: "Evaluates thyroid gland function and diagnoses metabolic rate anomalies, hypo- or hyperthyroidism.",
                tooltip: "Measures Total T3, Total T4, and Thyroid Stimulating Hormone (TSH). Morning sample preferred. Reports in 24 hours.",
                link: "/appointments?service=lab-tests&test=thyroid"
              },
              {
                title: "Diabetes Panel (HbA1c & Sugar)",
                desc: "Monitors glycemic control, average blood sugar levels, and assists in diabetes diagnosis.",
                tooltip: "Includes Fasting Blood Glucose and HbA1c (3-month average). Fasting required for glucose. Reports in 24 hours.",
                link: "/appointments?service=lab-tests&test=diabetes"
              },
              {
                title: "Liver Function Test (LFT)",
                desc: "Assesses hepatic health, enzyme levels, protein synthesis, and detects potential liver disorders.",
                tooltip: "Measures Bilirubin, SGOT, SGPT, Alkaline Phosphatase, Albumin, and Total Protein. Fasting preferred. Reports in 24 hours.",
                link: "/appointments?service=lab-tests&test=lft"
              },
              {
                title: "Kidney Function Test (KFT)",
                desc: "Evaluates renal filtration efficacy, electrolyte balance, and detects signs of kidney stress.",
                tooltip: "Measures Blood Urea, Serum Creatinine, Uric Acid, and vital electrolytes (Sodium, Potassium). Reports in 24 hours.",
                link: "/appointments?service=lab-tests&test=kft"
              }
            ].map((test, idx) => (
              <div key={idx} className="relative bg-[var(--color-cream)]/20 p-8 border border-[var(--color-forest)]/10 rounded-sm hover:border-[var(--color-terracotta)]/40 transition-colors group cursor-help flex flex-col justify-between">
                <div>
                  <FlaskConical className="w-8 h-8 text-[var(--color-terracotta)] mb-6" />
                  <h3 className="text-lg font-serif text-[var(--color-forest)] font-medium mb-3">{test.title}</h3>
                  <p className="text-xs text-[var(--color-forest)]/70 leading-relaxed mb-6">{test.desc}</p>
                </div>
                <Link href={test.link} className="text-xs font-semibold text-[var(--color-forest)] group-hover:text-[var(--color-terracotta)] transition-colors inline-flex items-center gap-1">
                  Book This Test <ArrowRight className="w-3.5 h-3.5" />
                </Link>

                {/* Tooltip Popup on Hover */}
                <div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-3 w-64 bg-[var(--color-forest)] text-[var(--color-cream)] text-[11px] p-3 rounded-sm opacity-0 pointer-events-none group-hover:opacity-100 transition-opacity z-50 shadow-lg text-center leading-relaxed border border-[var(--color-cream)]/15">
                  <div className="font-bold mb-1 uppercase tracking-wider text-[var(--color-terracotta)]">Clinical Details</div>
                  {test.tooltip}
                  <div className="absolute top-full left-1/2 -translate-x-1/2 w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[6px] border-t-[var(--color-forest)]"></div>
                </div>
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

      <section className="py-24 bg-[var(--color-forest)] text-[var(--color-cream)]">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16 space-y-4">
            <h2 className="text-3xl md:text-4xl font-serif font-medium">Clinic Locations</h2>
            <p className="text-[var(--color-cream)]/70 max-w-2xl mx-auto">Serving patients across two dedicated facilities in Punjab.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {/* Phagwara */}
            <div className="bg-[var(--color-cream)]/5 p-8 border border-[var(--color-cream)]/10 rounded-sm">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[var(--color-terracotta)] shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-serif font-medium mb-4">Phagwara Clinic</h3>
                  <div className="space-y-1 text-[var(--color-cream)]/80 text-sm leading-relaxed mb-6">
                    <p>Singla Market, Prime Tower</p>
                    <p>Opposite Bus Stand Road</p>
                    <p>Phagwara, Punjab 144401</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--color-cream)]/90 font-medium mb-8">
                    <Clock className="w-4 h-4 text-[var(--color-terracotta)]" />
                    <p>10:00 AM – 4:00 PM (Sunday off)</p>
                  </div>
                  <a 
                    href="https://maps.app.goo.gl/LinxEXfSQyDCB7km7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-[var(--color-terracotta)] text-[var(--color-cream)] font-medium rounded-sm hover:bg-[var(--color-terracotta)]/90 transition-colors text-sm"
                  >
                    Get Directions <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>

            {/* Jalandhar */}
            <div className="bg-[var(--color-cream)]/5 p-8 border border-[var(--color-cream)]/10 rounded-sm">
              <div className="flex items-start gap-4">
                <MapPin className="w-6 h-6 text-[var(--color-terracotta)] shrink-0 mt-1" />
                <div>
                  <h3 className="text-xl font-serif font-medium mb-4">Jalandhar Clinic</h3>
                  <div className="space-y-1 text-[var(--color-cream)]/80 text-sm leading-relaxed mb-6">
                    <p>119, Mann Nagar, near Satguru Kabir Chowk</p>
                    <p>Wadala Chowk Road, Urban Estate</p>
                    <p>Jalandhar, Punjab 144001</p>
                  </div>
                  <div className="flex items-center gap-2 text-sm text-[var(--color-cream)]/90 font-medium mb-8">
                    <Clock className="w-4 h-4 text-[var(--color-terracotta)]" />
                    <p>5:00 PM – 8:00 PM (Sunday off)</p>
                  </div>
                  <a 
                    href="https://maps.app.goo.gl/jKiWeG4DbcQLTeVZ7" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center gap-2 w-full sm:w-auto px-6 py-3 bg-[var(--color-terracotta)] text-[var(--color-cream)] font-medium rounded-sm hover:bg-[var(--color-terracotta)]/90 transition-colors text-sm"
                  >
                    Get Directions <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
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
              Schedule a consultation at either of our clinic locations to discuss a personalized treatment plan, or contact Dr. Dogra directly.
            </p>

            {/* Direct Doctor Contacts */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 max-w-2xl mx-auto pt-6 text-left">
              <div className="bg-white p-6 border border-[var(--color-forest)]/10 rounded-sm shadow-sm flex items-start gap-4">
                <div className="p-3 bg-[var(--color-cream)] rounded-full text-[var(--color-terracotta)] shrink-0">
                  <Phone className="w-5 h-5" />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-semibold text-[var(--color-forest)] mb-1">Direct Call / WhatsApp</h4>
                  <a href="tel:+919876543210" className="text-sm font-bold text-[var(--color-forest)] hover:text-[var(--color-terracotta)] transition-colors block">
                    +91 98765 43210
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
                  <a href="mailto:dr.dogra.ayurveda@gmail.com" className="text-sm font-bold text-[var(--color-forest)] hover:text-[var(--color-terracotta)] transition-colors block break-all">
                    dr.dogra.ayurveda@gmail.com
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
    </div>
  );
}
