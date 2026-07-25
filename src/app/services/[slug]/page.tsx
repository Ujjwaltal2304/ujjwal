import { notFound } from "next/navigation";
import { servicesData } from "@/data/siteContent";
import DynamicPageTemplate from "@/components/DynamicPageTemplate";
import { Metadata } from "next";

export function generateStaticParams() {
  return servicesData.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = servicesData.find((t) => t.slug === slug);
  if (!data) return { title: "Service Not Found" };
  
  return {
    title: `${data.title} | Ayurveda Services | Dr. Demo Clinic`,
    description: data.description,
  };
}

export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = servicesData.find((t) => t.slug === slug);
  
  if (!data) {
    notFound();
  }

  return <DynamicPageTemplate data={data} category="Ayurveda Services" />;
}
