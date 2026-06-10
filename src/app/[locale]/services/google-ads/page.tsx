import { Metadata } from 'next';
import AdsHero from '@/components/services/google-ads/AdsHero';
import AdsServicesList from '@/components/services/google-ads/AdsServicesList';
import AdsWhyUs from '@/components/services/google-ads/AdsWhyUs';
import AdsPackages from '@/components/services/google-ads/AdsPackages';
import AdsTestimonials from '@/components/services/google-ads/AdsTestimonials';
import AdsApiUsage from '@/components/services/google-ads/AdsApiUsage';
import AdsContact from '@/components/services/google-ads/AdsContact';
import { getGoogleAdsPage } from '@/lib/strapi';
import { googleAdsMockData } from '@/lib/mock-data/google-ads-mock';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://luminamedia.vn';

    return {
        title: locale === 'vi'
            ? 'Dịch vụ quảng cáo Google - Lumina Media Agency'
            : 'Google Advertising Services - Lumina Media Agency',
        description: locale === 'vi'
            ? 'Lumina Media Agency - Agency Google Ads lấy chuyển đổi làm trung tâm, đồng hành cùng doanh nghiệp tăng trưởng đơn hàng'
            : 'Lumina Media Agency - Conversion-centered Google Ads agency, partnering with businesses for order growth',
        alternates: {
            languages: {
                'vi': `${baseUrl}/vi/services/google-ads`,
                'en': `${baseUrl}/en/services/google-ads`,
            },
        },
    };
}

export default async function GoogleAdsPage({ params }: Props) {
    const { locale } = await params;
    const currentLocale = (locale as 'vi' | 'en') || 'vi';

    // Fetch data from Strapi
    let data = await getGoogleAdsPage(currentLocale);

    // Fallback to mock data if API fails
    if (!data) {
        data = googleAdsMockData[currentLocale] || googleAdsMockData['vi'];
    }

    return (
        <div className="flex flex-col w-full overflow-hidden bg-black text-white">
            {/* 1. Hero Section */}
            <AdsHero
                title={data.ads_hero.title}
                description={data.ads_hero.description}
                ctaText={data.ads_hero.cta_text}
                image={data.ads_hero.image}
            />

            {/* 2. Services List */}
            <AdsServicesList
                title={data.ads_services.title}
                items={data.ads_services.items}
            />

            {/* 3. Why Us */}
            <AdsWhyUs
                title={data.ads_why_us.title}
                highlightedText={data.ads_why_us.highlighted_text}
                points={data.ads_why_us.points}
                image={data.ads_why_us.image}
            />

            {/* 4. Packages */}
            <AdsPackages
                title={data.ads_packages.title}
                packages={data.ads_packages.packages}
            />

            {/* 5. Testimonials */}
            <AdsTestimonials
                title={data.ads_testimonials.title}
                reviews={data.ads_testimonials.reviews}
            />

            {/* 6. Google Ads API / MCC Usage */}
            <AdsApiUsage locale={currentLocale} />

            {/* 7. Contact */}
            <AdsContact
                title={data.ads_contact.title}
                description={data.ads_contact.description}
                ctaText={data.ads_contact.cta_text}
                fields={data.ads_contact.fields}
                locale={currentLocale}
            />
        </div>
    );
}
