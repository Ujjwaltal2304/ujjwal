import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";
import { PageData } from "@/data/siteContent";

export default function DynamicPageTemplate({ 
  data, 
  category 
}: { 
  data: PageData;
  category: string;
}) {
  return (
    <div className="flex-1 flex flex-col bg-white">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-4 bg-[#0A2540] overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <Image 
            src={data.imageUrl} 
            alt={data.title}
            fill
            className="object-cover"
          />
        </div>
        <div className="container mx-auto max-w-5xl relative z-10 text-center">
          <span className="inline-block text-[#38bdf8] uppercase tracking-widest text-sm font-semibold mb-4">
            {category}
          </span>
          <h1 className="text-4xl md:text-5xl font-serif font-bold text-white mb-6">
            {data.title}
          </h1>
          <div className="w-24 h-1 bg-[#10B981] mx-auto rounded-full"></div>
        </div>
      </section>

      {/* Content Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-8 md:p-12">
            <h2 className="text-2xl font-serif text-[#0A2540] font-semibold mb-6">Overview</h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-12">
              {data.description}
            </p>

            <h3 className="text-xl font-serif text-[#0A2540] font-semibold mb-6">Key Benefits & Approach</h3>
            <ul className="space-y-4 mb-12">
              {data.benefits.map((benefit, idx) => (
                <li key={idx} className="flex items-start gap-4">
                  <CheckCircle2 className="w-6 h-6 text-[#10B981] shrink-0 mt-0.5" />
                  <span className="text-gray-700">{benefit}</span>
                </li>
              ))}
            </ul>

            <div className="bg-[#f0fdf4] border border-[#bbf7d0] rounded-xl p-8 text-center">
              <h3 className="text-xl font-serif text-[#0A2540] font-semibold mb-4">
                Ready to begin your healing journey?
              </h3>
              <p className="text-gray-600 mb-8">
                Consult with our expert Ayurvedic practitioners today to discuss a personalized {data.title.toLowerCase()} plan.
              </p>
              <Link 
                href={`/appointments?service=${data.slug}`}
                className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-[#10B981] text-white font-medium rounded-lg hover:bg-[#059669] transition-colors shadow-lg shadow-[#10B981]/20 group"
              >
                Book an Appointment
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
