import { notFound } from "next/navigation";
import { conditionsData } from "@/data/siteContent";
import DynamicPageTemplate from "@/components/DynamicPageTemplate";
import { Metadata } from "next";

export function generateStaticParams() {
  return conditionsData.map((item) => ({
    slug: item.slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const data = conditionsData.find((t) => t.slug === slug);
  if (!data) return { title: "Condition Not Found" };
  
  return {
    title: `${data.title} | Ayurveda Treatments for Conditions | Dr. Demo Clinic`,
    description: data.description,
  };
}

export default async function ConditionPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const data = conditionsData.find((t) => t.slug === slug);
  
  if (!data) {
    notFound();
  }

  return <DynamicPageTemplate data={data} category="Diseases & Conditions" />;
}
