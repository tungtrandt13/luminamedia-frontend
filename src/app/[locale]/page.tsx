import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { getHomepage } from '@/lib/strapi';
import { routing } from '@/i18n/routing';
import HPHero from '@/components/home/HPHero';
import HPJourney from '@/components/home/HPJourney';
import HPPartners from '@/components/home/HPPartners';
import HPFeaturedProjects from '@/components/home/HPFeaturedProjects';
import HPServices from '@/components/home/HPServices';
import HPWhyUs from '@/components/home/HPWhyUs';
import HPContact from '@/components/home/HPContact';
import { homepageMockData } from '@/lib/mock-data/homepage-mock';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  if (!routing.locales.includes(locale as typeof routing.locales[number])) notFound();
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://viss.com.vn';

  return {
    title: locale === 'vi'
      ? 'VISS International - Giải pháp thương mại quốc tế'
      : 'VISS International - International Trade Solutions',
    description: locale === 'vi'
      ? 'Công ty TNHH Thương mại và Dịch vụ Quốc tế VISS - Đối tác chiến lược cho sự tăng trưởng bền vững'
      : 'VISS International Trading and Services Company - Strategic partner for sustainable growth',
    alternates: {
      languages: {
        'vi': `${baseUrl}/vi`,
        'en': `${baseUrl}/en`,
      },
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as typeof routing.locales[number])) notFound();
  const currentLocale = (locale as 'vi' | 'en') || 'vi';
  const homepage = await getHomepage(locale) || homepageMockData[currentLocale] || homepageMockData.vi;

  return (
    <div className="flex flex-col w-full overflow-hidden bg-black text-white">
      {/* 1. Hero Section */}
      <HPHero
        headline={homepage.hp_hero?.headline}
        ctaText={homepage.hp_hero?.cta_text}
        ctaUrl={homepage.hp_hero?.cta_url}
        background={homepage.hp_hero?.background}
      />

      {/* 2. Journey Section */}
      <HPJourney
        title={homepage.hp_journey?.title}
        subtitle={homepage.hp_journey?.subtitle}
        quote={homepage.hp_journey?.quote}
        body={homepage.hp_journey?.body}
        ctaText={homepage.hp_journey?.cta_text}
        ctaUrl={homepage.hp_journey?.cta_url}
      />

      {/* 3. Partners Section */}
      <HPPartners
        title={homepage.hp_partners?.title}
        logos={homepage.hp_partners?.logos}
      />

      {/* 4. Featured Projects Section */}
      <HPFeaturedProjects
        title={homepage.hp_featured_projects?.title}
        description={homepage.hp_featured_projects?.description}
        projects={homepage.hp_featured_projects?.projects}
        ctaText={homepage.hp_featured_projects?.cta_text}
        ctaUrl={homepage.hp_featured_projects?.cta_url}
      />

      {/* 5. Services Section */}
      <HPServices
        title={homepage.hp_services?.title}
        description={homepage.hp_services?.description}
        services={homepage.hp_services?.services}
        ctaText={homepage.hp_services?.cta_text}
        ctaUrl={homepage.hp_services?.cta_url}
      />

      {/* 6. Why Us / Team Section */}
      <HPWhyUs
        title={homepage.hp_why_us?.title}
        description={homepage.hp_why_us?.description}
        primaryCtaText={homepage.hp_why_us?.primary_cta_text}
        primaryCtaUrl={homepage.hp_why_us?.primary_cta_url}
        secondaryCtaText={homepage.hp_why_us?.secondary_cta_text}
        secondaryCtaUrl={homepage.hp_why_us?.secondary_cta_url}
        stats={homepage.hp_why_us?.stats}
        image={homepage.hp_why_us?.image}
      />

      {/* 7. Contact Section */}
      <HPContact
        title={homepage.hp_contact?.title}
        description={homepage.hp_contact?.description}
        ctaText={homepage.hp_contact?.cta_text}
      />
    </div>
  );
}
