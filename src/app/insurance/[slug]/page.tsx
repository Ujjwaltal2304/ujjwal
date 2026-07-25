import { notFound } from "next/navigation";
import { insuranceData } from "@/data/siteContent";
import DynamicPageTemplate from "@/components/DynamicPageTemplate";
import { Metadata } from "next";

export function generateStaticParams() {
  return insuranceData.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = insuranceData.find((t) => t.slug === slug);
  if (!data) return { title: "Insurance Not Found" };
  
  return {
    title: `${data.title} | Insurance | Dr. Demo Clinic`,
    description: data.description,
  };
}

export default async function InsurancePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = insuranceData.find((t) => t.slug === slug);
  
  if (!data) {
    notFound();
  }

  return <DynamicPageTemplate data={data} category="Insurance & More" />;
}
