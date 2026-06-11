import { Metadata } from 'next';
import { getRentAdsPage } from '@/lib/strapi';
import { mockRentAdsPageData } from '@/lib/mock-data/rent-ads-mock';

// Components
import RentAdsHero from '@/components/services/rent-ads/RentAdsHero';
import RentAdsWhyUs from '@/components/services/rent-ads/RentAdsWhyUs';
import RentAdsAdvantages from '@/components/services/rent-ads/RentAdsAdvantages';
import RentAdsPricing from '@/components/services/rent-ads/RentAdsPricing';
import RentAdsProcess from '@/components/services/rent-ads/RentAdsProcess';
import RentAdsTestimonials from '@/components/services/rent-ads/RentAdsTestimonials';
import RentAdsContact from '@/components/services/rent-ads/RentAdsContact';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://luminamedia.vn';

    return {
        title: locale === 'vi'
            ? 'Hỗ trợ vận hành tài khoản Google Ads - Lumina Media Agency'
            : 'Google Ads Account Operations Support - Lumina Media Agency',
        description: locale === 'vi'
            ? 'Hỗ trợ rà soát, vận hành và báo cáo tài khoản Google Ads theo hướng minh bạch, an toàn và tuân thủ chính sách.'
            : 'Supporting Google Ads account review, operations, and reporting with transparent, secure, policy-aligned workflows.',
        robots: {
            index: false,
            follow: false,
        },
        alternates: {
            languages: {
                'vi': `${baseUrl}/vi/services/rent-ads`,
                'en': `${baseUrl}/en/services/rent-ads`,
            },
        },
    };
}

export default async function RentAdsPage({ params }: Props) {
    const { locale } = await params;
    const currentLocale = (locale as 'vi' | 'en') || 'vi';

    // Fetch data from Strapi
    let data = await getRentAdsPage(currentLocale);

    // Fallback to mock data if API fails or returns null
    if (!data) {
        data = mockRentAdsPageData[currentLocale] || mockRentAdsPageData['vi'];
    }

    return (
        <div className="flex flex-col w-full overflow-hidden bg-black text-white">
            {/* 1. Hero Section */}
            <RentAdsHero
                title={data.rent_hero.title}
                headline={data.rent_hero.headline}
                description={data.rent_hero.description}
                ctaText={data.rent_hero.cta_text}
            />

            {/* 2. Why Us Grid */}
            <RentAdsWhyUs
                title={data.rent_why_us.title}
                cards={data.rent_why_us.cards}
            />

            {/* 3. Advantages */}
            <RentAdsAdvantages
                title={data.rent_advantages.title}
                description={data.rent_advantages.description}
                points={data.rent_advantages.points}
            />

            {/* 4. Pricing */}
            <RentAdsPricing
                title={data.rent_pricing.title}
                description={data.rent_pricing.description}
                tiers={data.rent_pricing.tiers}
                benefitsTitle={data.rent_pricing.benefits_title}
                benefits={data.rent_pricing.benefits}
                consultCtaText={data.rent_pricing.consult_cta_text}
            />

            {/* 5. Process Steps */}
            <RentAdsProcess
                title={data.rent_process.title}
                steps={data.rent_process.steps}
            />

            {/* 6. Testimonials Carousel */}
            <RentAdsTestimonials
                title={data.rent_testimonials.title}
                reviews={data.rent_testimonials.reviews}
            />

            {/* 7. Contact Form */}
            <RentAdsContact
                title={data.rent_contact.title}
                description={data.rent_contact.description}
                ctaText={data.rent_contact.cta_text}
                fields={data.rent_contact.fields}
                locale={currentLocale}
            />
        </div>
    );
}
