import { notFound } from "next/navigation";
import { doctorsData } from "@/data/siteContent";
import DynamicPageTemplate from "@/components/DynamicPageTemplate";
import { Metadata } from "next";

export function generateStaticParams() {
  return doctorsData.map((item) => ({
    city: item.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ city: string }> }): Promise<Metadata> {
  const { city } = await params;
  const data = doctorsData.find((t) => t.slug === city);
  if (!data) return { title: "Doctors Not Found" };
  
  return {
    title: `${data.title} | Dr. Demo Clinic`,
    description: data.description,
  };
}

export default async function DoctorsPage({ params }: { params: Promise<{ city: string }> }) {
  const { city } = await params;
  const data = doctorsData.find((t) => t.slug === city);
  
  if (!data) {
    notFound();
  }

  return (
    <div className="flex-1 flex flex-col bg-white">
      <DynamicPageTemplate data={data} category="Ayurveda Doctors" />
      
      {/* Meet Our Doctors Section */}
      <section className="py-20 bg-gray-50 border-t border-gray-100">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-serif text-[#0A2540] font-semibold mb-4">Meet Our {data.city} Experts</h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              Our highly qualified Ayurveda practitioners are dedicated to providing personalized care and effective treatments.
            </p>
            <span className="inline-block px-3 py-1 bg-amber-100 text-amber-800 text-xs font-medium rounded-full mt-4">
              Sample Data - To be replaced with real practitioner profiles
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Dr. Aditi Sharma", specialty: "Panchkarma Specialist", experience: "15+ Years" },
              { name: "Dr. Rahul Menon", specialty: "Chronic Disease Management", experience: "12+ Years" },
              { name: "Dr. Priya Desai", specialty: "Preventive Healthcare", experience: "10+ Years" }
            ].map((doc, idx) => (
              <div key={idx} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100 text-center hover:shadow-md transition-shadow">
                <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 overflow-hidden">
                  <img src={`https://i.pravatar.cc/150?u=${doc.name}`} alt={doc.name} className="w-full h-full object-cover" />
                </div>
                <h3 className="text-xl font-serif text-[#0A2540] font-semibold">{doc.name}</h3>
                <p className="text-[#10B981] font-medium text-sm mt-1 mb-3">{doc.specialty}</p>
                <p className="text-gray-500 text-sm">Experience: {doc.experience}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
