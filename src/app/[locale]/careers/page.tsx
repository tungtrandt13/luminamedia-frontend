import type { Metadata } from "next";
import CareersHero from "@/components/careers/CareersHero";
import CareersJobs from "@/components/careers/CareersJobs";
import CareersBenefits from "@/components/careers/CareersBenefits";
import CareersCoreValues from "@/components/careers/CareersCoreValues";
import CareersApplyForm from "@/components/careers/CareersApplyForm";
import { careersMockData } from "@/lib/mock-data/careers-mock";
import { getCareerPage } from "@/lib/strapi";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://viss.com.vn";

  return {
    title:
      locale === "vi"
        ? "Tuyển dụng - VISS International"
        : "Careers - VISS International",
    description:
      locale === "vi"
        ? "Cơ hội nghề nghiệp tại VISS International."
        : "Career opportunities at VISS International.",
    alternates: {
      languages: {
        vi: `${baseUrl}/vi/careers`,
        en: `${baseUrl}/en/careers`,
      },
    },
  };
}

export default async function CareersPage({ params }: Props) {
  const { locale } = await params;
  const currentLocale = (locale as "vi" | "en") || "vi";

  // Fetch data from Strapi, fallback to mock data
  let data = await getCareerPage(currentLocale);
  if (!data) {
    data = careersMockData[currentLocale] || careersMockData.vi;
  }

  return (
    <div className="flex flex-col w-full overflow-hidden bg-black text-white">
      <CareersHero
        title={data.hero.title}
        description={data.hero.description}
        ctaText={data.hero.cta_text}
        image={data.hero.image}
      />

      <CareersJobs title={data.jobs.title} jobs={data.jobs.jobs} />

      <CareersBenefits
        title={data.benefits.title}
        description={data.benefits.description}
        detailsTitle={data.benefits.details_title}
        details={data.benefits.details}
      />

      <CareersCoreValues title={data.core_values.title} values={data.core_values.values} />

      <CareersApplyForm
        title={data.apply.title}
        subtitle={data.apply.subtitle}
        ctaText={data.apply.cta_text}
        fields={data.apply.fields}
      />
    </div>
  );
}

