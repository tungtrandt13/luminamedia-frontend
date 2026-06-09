import { Metadata } from "next";
import HPContact from "@/components/home/HPContact";
import { strapiFetch, type StrapiResponse } from "@/lib/strapi";
import { contactMockData, type ContactPageData } from "@/lib/mock-data/contact-mock";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://luminamedia.vn";

  const isVi = locale === "vi";

  return {
    title: isVi ? "Liên hệ - Lumina Media Agency" : "Contact - Lumina Media Agency",
    description: isVi
      ? "Hãy liên hệ với Lumina Media Agency để được tư vấn giải pháp quảng cáo và thương mại điện tử phù hợp."
      : "Contact Lumina Media Agency for tailored advertising and e-commerce solutions.",
    alternates: {
      languages: {
        vi: `${baseUrl}/vi/contact`,
        en: `${baseUrl}/en/contact`,
      },
    },
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  const currentLocale = (locale as "vi" | "en") || "vi";

  const fallbackData: ContactPageData = contactMockData[currentLocale] || contactMockData.vi;
  let data: ContactPageData = fallbackData;

  try {
    const res = await strapiFetch<StrapiResponse<any>>({
      path: "/api/contact-page",
      query: {
        locale: currentLocale,
        populate: "*",
      },
      next: { revalidate: 60 },
    });

    const raw = Array.isArray(res.data)
      ? res.data.find((item: any) => item.locale === currentLocale) || res.data[0]
      : res.data;

    const section = raw?.contact_section;

    if (section?.title && section?.description && section?.cta_text) {
      data = {
        title: section.title,
        description: section.description,
        cta_text: section.cta_text,
      };
    }
  } catch (error) {
    // Fallback to mock data when Strapi is unavailable or response is invalid
    console.error("Failed to fetch contact page from Strapi, using mock data:", error);
  }

  return (
    <div className="flex flex-col w-full overflow-hidden bg-black text-white">
      <HPContact title={data.title} description={data.description} ctaText={data.cta_text} />
    </div>
  );
}
