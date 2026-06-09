import { Metadata } from 'next';
import { getTiktokAdsPage } from '@/lib/strapi';
import { mockTiktokAdsPageData } from '@/lib/mock-data/tiktok-ads-mock';

// Components
import TiktokAdsHero from '@/components/services/tiktok-ads/TiktokAdsHero';
import TiktokAdsWhyUs from '@/components/services/tiktok-ads/TiktokAdsWhyUs';
import TiktokAdsGrowth from '@/components/services/tiktok-ads/TiktokAdsGrowth';
import TiktokAdsProcess from '@/components/services/tiktok-ads/TiktokAdsProcess';
import TiktokAdsTestimonials from '@/components/services/tiktok-ads/TiktokAdsTestimonials';
import TiktokAdsContact from '@/components/services/tiktok-ads/TiktokAdsContact';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://luminamedia.vn';

    return {
        title: locale === 'vi'
            ? 'Dịch vụ quảng cáo Tiktok Ads - Lumina Media Agency'
            : 'Tiktok Ads Service - Lumina Media Agency',
        description: locale === 'vi'
            ? 'Dịch vụ quảng cáo Tiktok Ads toàn diện từ Lumina Media Agency.'
            : 'Comprehensive Tiktok Ads service by Lumina Media Agency.',
        alternates: {
            languages: {
                'vi': `${baseUrl}/vi/services/tiktok-ads`,
                'en': `${baseUrl}/en/services/tiktok-ads`,
            },
        },
    };
}

export default async function TiktokAdsPage({ params }: Props) {
    const { locale } = await params;
    const currentLocale = (locale as 'vi' | 'en') || 'vi';

    // Fetch data from Strapi API, fallback to mock data if API is unavailable
    const strapiData = await getTiktokAdsPage(currentLocale);
    const data = strapiData || mockTiktokAdsPageData[currentLocale] || mockTiktokAdsPageData['vi'];

    return (
        <div className="flex flex-col w-full overflow-hidden bg-[#FAFAFA] text-black">
            {/* 1. Hero Section */}
            <TiktokAdsHero
                title={data.tiktok_hero.title}
                description={data.tiktok_hero.description}
                ctaText={data.tiktok_hero.cta_text}
                image={data.tiktok_hero.image}
            />

            {/* 2. Growth Section */}
            <TiktokAdsGrowth
                title={data.tiktok_growth.title}
                cards={data.tiktok_growth.cards}
            />

            {/* 3. Process Steps */}
            <TiktokAdsProcess
                title={data.tiktok_process.title}
                steps={data.tiktok_process.steps}
            />

            {/* 4. Why Choose Us */}
            <TiktokAdsWhyUs
                title={data.tiktok_why_us.title}
                points={data.tiktok_why_us.points}
                image={data.tiktok_why_us.image}
            />

            {/* 5. Testimonials Carousel */}
            <TiktokAdsTestimonials
                title={data.tiktok_testimonials.title}
                reviews={data.tiktok_testimonials.reviews}
            />

            {/* 6. Contact Form */}
            <TiktokAdsContact
                title={data.tiktok_contact.title}
                description={data.tiktok_contact.description}
                ctaText={data.tiktok_contact.cta_text}
                fields={data.tiktok_contact.fields}
                locale={currentLocale}
            />
        </div>
    );
}
