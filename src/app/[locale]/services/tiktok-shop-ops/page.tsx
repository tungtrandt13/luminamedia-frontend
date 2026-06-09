import { Metadata } from 'next';
import { getTiktokShopOpsPage } from '@/lib/strapi';

import TiktokShopOpsHero from '@/components/services/tiktok-shop-ops/TiktokShopOpsHero';
import TiktokShopOpsAbout from '@/components/services/tiktok-shop-ops/TiktokShopOpsAbout';
import TiktokShopOpsSolution from '@/components/services/tiktok-shop-ops/TiktokShopOpsSolution';
import TiktokShopOpsCaseStudies from '@/components/services/tiktok-shop-ops/TiktokShopOpsCaseStudies';
import TiktokShopOpsContact from '@/components/services/tiktok-shop-ops/TiktokShopOpsContact';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://luminamedia.vn';

  return {
    title:
      locale === 'vi'
        ? 'Dịch vụ vận hành gian hàng TikTok Shop - Lumina Media Agency'
        : 'TikTok Shop Operations Service - Lumina Media Agency',
    description:
      locale === 'vi'
        ? 'Dịch vụ vận hành gian hàng TikTok Shop toàn diện từ Lumina Media Agency.'
        : 'Comprehensive TikTok Shop operations service by Lumina Media Agency.',
    alternates: {
      languages: {
        vi: `${baseUrl}/vi/services/tiktok-shop-ops`,
        en: `${baseUrl}/en/services/tiktok-shop-ops`,
      },
    },
  };
}

export default async function TiktokShopOpsPage({ params }: Props) {
  const { locale } = await params;
  const currentLocale = (locale as 'vi' | 'en') || 'vi';

  const data = await getTiktokShopOpsPage(currentLocale);

  if (!data) {
    return null;
  }

  return (
    <div className="flex flex-col w-full overflow-hidden bg-[#000000] text-white">
      <TiktokShopOpsHero
        title={data.hero.title}
        description={data.hero.description}
        ctaText={data.hero.cta_text}
        imageSrc={data.hero.image}
      />

      <TiktokShopOpsAbout
        title={data.about.title}
        paragraphs={data.about.paragraphs}
        images={data.about.images}
      />

      <TiktokShopOpsSolution
        title={data.solution.title}
        description={data.solution.description}
        steps={data.solution.steps}
      />

      <TiktokShopOpsCaseStudies
        title={data.case_studies.title}
        description={data.case_studies.description}
        items={data.case_studies.items}
      />

      <TiktokShopOpsContact
        title={data.contact.title}
        description={data.contact.description}
        benefits={data.contact.benefits}
        ctaText={data.contact.cta_text}
        fields={data.contact.fields}
        locale={currentLocale}
      />
    </div>
  );
}
