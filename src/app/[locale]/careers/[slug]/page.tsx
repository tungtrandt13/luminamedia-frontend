import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { careersMockData } from "@/lib/mock-data/careers-mock";
import { getCareerPage } from "@/lib/strapi";
import CareerDetailClient from "@/components/careers/CareerDetailClient";

interface Props {
  params: Promise<{ locale: string; slug: string }>;
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const currentLocale = (locale as "vi" | "en") in careersMockData ? (locale as "vi" | "en") : "vi";

  let data = await getCareerPage(currentLocale);
  const mockData = careersMockData[currentLocale] || careersMockData.vi;

  let job = data?.jobs?.jobs?.find((j) => j.slug === slug);
  if (!job) {
    console.warn(`[Career Metadata] Slug "${slug}" not found in Strapi for locale "${currentLocale}"`);
    data = mockData;
    job = data.jobs.jobs.find((j) => j.slug === slug);
  }

  if (!job) {
    return { title: "Not Found" };
  }

  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://luminamedia.vn";

  return {
    title: `${job.title} | Lumina Media Agency`,
    description: job.description ?? `${job.title} tại Lumina Media Agency`,
    alternates: {
      languages: {
        vi: `${baseUrl}/vi/careers/${slug}`,
        en: `${baseUrl}/en/careers/${slug}`,
      },
    },
  };
}

export default async function CareerDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const currentLocale = (locale as "vi" | "en") in careersMockData ? (locale as "vi" | "en") : "vi";

  const data = await getCareerPage(currentLocale);
  const mockData = careersMockData[currentLocale] || careersMockData.vi;

  let job = data?.jobs?.jobs?.find((j) => j.slug === slug);
  let finalData = data;
  
  if (!job) {
    console.warn(`[Career Detail] Slug "${slug}" not found in Strapi for locale "${currentLocale}", falling back to mock data`);
    finalData = mockData;
    job = finalData.jobs.jobs.find((j) => j.slug === slug);
  }

  if (!job || !finalData) notFound();

  const relatedJobs = finalData.jobs.jobs.filter((j) => j.slug !== slug).slice(0, 4);
  const applyFormData = finalData.apply;

  return (
    <CareerDetailClient
      job={job}
      relatedJobs={relatedJobs}
      applyFormData={applyFormData}
      locale={currentLocale}
    />
  );
}
