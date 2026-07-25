import { notFound } from "next/navigation";
import { aboutData } from "@/data/siteContent";
import DynamicPageTemplate from "@/components/DynamicPageTemplate";
import { Metadata } from "next";

export function generateStaticParams() {
  return aboutData.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = aboutData.find((t) => t.slug === slug);
  if (!data) return { title: "Page Not Found" };
  
  return {
    title: `${data.title} | About Dr. Demo Clinic`,
    description: data.description,
  };
}

export default async function AboutPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = aboutData.find((t) => t.slug === slug);
  
  if (!data) {
    notFound();
  }

  return (
    <div className="flex-1 flex flex-col bg-white">
      <DynamicPageTemplate data={data} category="About Us" />
      
      {slug === "careers" && (
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto max-w-4xl px-4">
            <h2 className="text-3xl font-serif text-[#0A2540] font-semibold mb-8 text-center">Current Openings</h2>
            <div className="space-y-4">
              {[
                { title: "Senior Ayurvedic Physician", location: "Bangalore", type: "Full-time" },
                { title: "Panchkarma Therapist", location: "Kochi", type: "Full-time" },
                { title: "Clinic Manager", location: "Delhi", type: "Contract" }
              ].map((job, idx) => (
                <div key={idx} className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 flex flex-col md:flex-row md:items-center justify-between gap-4">
                  <div>
                    <h3 className="text-lg font-semibold text-[#0A2540]">{job.title}</h3>
                    <p className="text-gray-500 text-sm mt-1">{job.location} • {job.type}</p>
                  </div>
                  <button className="px-6 py-2 bg-[#0A2540] text-white rounded-md text-sm font-medium hover:bg-[#113155] transition-colors">
                    Apply Now
                  </button>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {slug === "contact-us" && (
        <section className="py-20 bg-gray-50 border-t border-gray-100">
          <div className="container mx-auto max-w-3xl px-4">
            <div className="bg-white p-8 md:p-12 rounded-xl shadow-sm border border-gray-100">
              <h2 className="text-3xl font-serif text-[#0A2540] font-semibold mb-8 text-center">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#10B981]/50" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Email Address</label>
                    <input type="email" className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#10B981]/50" placeholder="john@example.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Message</label>
                  <textarea rows={4} className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#10B981]/50" placeholder="How can we help you?"></textarea>
                </div>
                <button type="button" className="w-full py-4 bg-[#10B981] text-white rounded-lg font-medium hover:bg-[#059669] transition-colors">
                  Submit Message
                </button>
              </form>
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
