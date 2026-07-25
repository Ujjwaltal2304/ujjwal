import { notFound } from "next/navigation";
import { treatmentsData } from "@/data/siteContent";
import DynamicPageTemplate from "@/components/DynamicPageTemplate";
import { Metadata } from "next";

export function generateStaticParams() {
  return treatmentsData.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = treatmentsData.find((t) => t.slug === slug);
  if (!data) return { title: "Treatment Not Found" };
  
  return {
    title: `${data.title} | Ayurveda Treatments | Dr. Demo Clinic`,
    description: data.description,
  };
}

export default async function TreatmentPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = treatmentsData.find((t) => t.slug === slug);
  
  if (!data) {
    notFound();
  }

  return <DynamicPageTemplate data={data} category="Ayurveda Treatment" />;
}
