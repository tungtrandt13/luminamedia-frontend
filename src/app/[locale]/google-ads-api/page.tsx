import type { Metadata } from "next";

import CompliancePage from "@/components/compliance/CompliancePage";
import { googleAdsApiContent, resolveComplianceLocale } from "@/lib/compliance-content";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = resolveComplianceLocale(locale);
  const content = googleAdsApiContent[currentLocale];
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://luminamedia.vn";

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      languages: {
        vi: `${baseUrl}/vi/google-ads-api`,
        en: `${baseUrl}/en/google-ads-api`,
      },
    },
  };
}

export default async function GoogleAdsApiPage({ params }: Props) {
  const { locale } = await params;
  const currentLocale = resolveComplianceLocale(locale);

  return <CompliancePage content={googleAdsApiContent[currentLocale]} locale={currentLocale} />;
}
