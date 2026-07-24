import { Activity, Droplet, Wind, Leaf, HelpCircle, Heart, Calendar } from "lucide-react";
import Link from "next/link";

export default function TreatmentsPage() {
  const treatments = [
    {
      id: "panchakarma",
      title: "Panchakarma (Detox Therapy)",
      icon: Activity,
      duration: "7 to 21 Days (customized)",
      description: "A comprehensive five-stage purification therapy designed to eradicate deep-rooted somatic toxins, restore metabolic balance, and rebuild systemic immunity. It involves pre-cleansing therapies, active elimination protocols, and structured dietary transition guidelines tailored to your constitution.",
      indications: ["Chronic autoimmune conditions", "Metabolic syndrome", "Systemic toxicity", "General debility"]
    },
    {
      id: "shirodhara",
      title: "Shirodhara",
      icon: Droplet,
      duration: "45 to 60 Minutes",
      description: "A specialized therapy involving a continuous, gentle stream of warm medicated herbal oil, milk, or decoction poured over the forehead. This treatment acts directly on the central nervous system to induce deep relaxation, alleviate stress, and treat neurological hypertension.",
      indications: ["Chronic stress & anxiety", "Insomnia & sleep disorders", "Migraines & tension headaches", "Neurological hypertension"]
    },
    {
      id: "abhyanga",
      title: "Abhyanga (Oil Massage Therapy)",
      icon: Wind,
      duration: "60 Minutes",
      description: "A full-body massage utilizing warm, custom-blended herbal oils selected according to the patient's physiological constitution and clinical diagnosis. Administered by trained therapists, it increases lymphatic flow, enhances dermal absorption of medicinal active ingredients, and lubricates joint complexes.",
      indications: ["Joint stiffness & osteoarthritis", "Muscular fatigue & chronic pain", "Poor lymphatic circulation", "Dry skin & aging tissues"]
    },
    {
      id: "nasyam",
      title: "Nasyam",
      icon: Leaf,
      duration: "30 Minutes",
      description: "Administration of specific medicated drops, powders, or herbal juices through the nasal passages to clear the head and neck regions. It helps in detoxifying the sinuses, improving respiration, and relieving chronic headaches or cervical spondylosis.",
      indications: ["Chronic sinusitis & allergies", "Cervical spondylosis", "Frequent headaches", "ENT congestion & throat conditions"]
    },
    {
      id: "kizhi",
      title: "Kizhi (Pouch Therapy)",
      icon: Activity,
      duration: "45 to 60 Minutes",
      description: "Therapeutic application of heated cloth bags filled with medicinal leaves, herbs, or warm sand powders to the body. This process induces sweating and is exceptionally effective for relieving joint inflammation, muscular spasms, and localized chronic pain.",
      indications: ["Joint inflammation & swelling", "Chronic back pain", "Sciatica & muscular spasms", "Rheumatoid arthritis symptoms"]
    },
    {
      id: "herbal-consultation",
      title: "Herbal Consultation & Prescription",
      icon: HelpCircle,
      duration: "30 Minutes",
      description: "In-depth diagnostic assessment utilizing traditional pulse diagnosis (Nadi Pariksha), tongue inspection, and physical analysis to formulate targeted treatment plans. Dr. Demo prescribes customized, single-herb or poly-herbal pharmacopoeia preparations combined with strict dosage regimens.",
      indications: ["Chronic digestive disorders (IBS, acid reflux)", "Hormonal imbalances", "Cardiovascular wellness", "Skin diseases (psoriasis, eczema)"]
    },
    {
      id: "diet-lifestyle",
      title: "Diet and Lifestyle Counselling",
      icon: Heart,
      duration: "30 Minutes",
      description: "Personalized nutritional schedules and daily/seasonal routine adjustments tailored to your metabolic rate and doshic composition. Focuses on identifying incompatible food combinations (Viruddha Ahara), optimizing digestive fire (Agni), and aligning habits with natural circadian rhythms.",
      indications: ["Preventative health maintenance", "Post-detox stabilization", "Weight management", "Stress and routine disruption"]
    }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[var(--color-cream)]">
      {/* Header */}
      <section className="pt-24 pb-16 px-4">
        <div className="container mx-auto max-w-5xl">
          <h1 className="text-4xl md:text-5xl font-serif text-[var(--color-forest)] font-semibold mb-6">
            Treatments &amp; Services
          </h1>
          <p className="text-lg text-[var(--color-forest)]/80 max-w-2xl leading-relaxed">
            Our clinic offers authentic, clinically supervised Ayurvedic therapies. Every procedure is administered under strict hygienic guidelines using pure herbal ingredients.
          </p>
          <div className="w-20 h-1 bg-[var(--color-terracotta)] rounded-full mt-6"></div>
        </div>
      </section>

      {/* Treatments List */}
      <section className="py-12 px-4 mb-16">
        <div className="container mx-auto max-w-5xl space-y-16">
          {treatments.map((t) => (
            <div 
              key={t.id} 
              id={t.id}
              className="bg-white p-8 md:p-12 border border-[var(--color-forest)]/10 rounded-sm shadow-sm grid grid-cols-1 lg:grid-cols-12 gap-8 items-start scroll-mt-24"
            >
              <div className="lg:col-span-4 space-y-4">
                <div className="inline-flex p-4 bg-[var(--color-cream)] rounded-sm text-[var(--color-terracotta)]">
                  <t.icon className="w-8 h-8" />
                </div>
                <h2 className="text-2xl font-serif text-[var(--color-forest)] font-semibold leading-tight">
                  {t.title}
                </h2>
                <div className="space-y-1.5 pt-2">
                  <h4 className="text-xs font-semibold text-[var(--color-forest)]/50 uppercase tracking-wider">Duration</h4>
                  <p className="text-sm font-medium text-[var(--color-forest)]">{t.duration}</p>
                </div>
                <div className="space-y-1.5 pt-2">
                  <h4 className="text-xs font-semibold text-[var(--color-forest)]/50 uppercase tracking-wider">Clinical Indications</h4>
                  <ul className="text-sm text-[var(--color-forest)]/80 space-y-1">
                    {t.indications.map((ind, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-[var(--color-terracotta)] shrink-0" />
                        {ind}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
              
              <div className="lg:col-span-8 space-y-6 lg:border-l lg:border-[var(--color-forest)]/10 lg:pl-8">
                <p className="text-lg font-medium text-[var(--color-forest)]/90 leading-relaxed">
                  {t.description}
                </p>
                <div className="pt-4">
                  <Link 
                    href={`/appointments?treatment=${t.id}`}
                    className="inline-flex items-center gap-2 text-sm font-semibold text-[var(--color-terracotta)] hover:underline"
                  >
                    Book this treatment <Calendar className="w-4 h-4" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Note Strip */}
      <section className="bg-[var(--color-forest)] text-[var(--color-cream)] py-16 px-4">
        <div className="container mx-auto max-w-3xl text-center space-y-6">
          <h3 className="font-serif text-2xl font-semibold">Important Clinical Notice</h3>
          <p className="text-sm text-[var(--color-cream)]/80 leading-relaxed">
            Panchkarma procedures are clinical interventions. Therapy duration, scheduling, and choice of herbal oils or formulations are exclusively determined by Dr. Demo following a comprehensive physical and pulse examination. We do not provide self-selected wellness therapies without diagnosis.
          </p>
          <div className="pt-4">
            <Link 
              href="/appointments"
              className="inline-flex items-center justify-center px-8 py-4 bg-[var(--color-terracotta)] text-[var(--color-cream)] font-medium rounded-sm hover:bg-[var(--color-terracotta)]/90 transition-colors"
            >
              Book Initial Diagnostic Consultation
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
