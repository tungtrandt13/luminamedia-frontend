import type { Metadata } from "next";

import CompliancePage from "@/components/compliance/CompliancePage";
import { resolveComplianceLocale, termsContent } from "@/lib/compliance-content";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const currentLocale = resolveComplianceLocale(locale);
  const content = termsContent[currentLocale];
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || "https://luminamedia.vn";

  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: {
      languages: {
        vi: `${baseUrl}/vi/terms`,
        en: `${baseUrl}/en/terms`,
      },
    },
  };
}

export default async function TermsPage({ params }: Props) {
  const { locale } = await params;
  const currentLocale = resolveComplianceLocale(locale);

  return <CompliancePage content={termsContent[currentLocale]} locale={currentLocale} />;
}
