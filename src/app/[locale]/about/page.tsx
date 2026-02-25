import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import AboutHero from '@/components/about/AboutHero';
import AboutStory from '@/components/about/AboutStory';
import AboutPhilosophy from '@/components/about/AboutPhilosophy';
import AboutCoreValues from '@/components/about/AboutCoreValues';
import AboutTeam from '@/components/about/AboutTeam';
import AboutTestimonials from '@/components/about/AboutTestimonials';
import HPContact from '@/components/home/HPContact';
import { getAboutPage } from '@/lib/strapi';
import { aboutUsMockData } from '@/lib/mock-data/about-us-mock';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://viss.com.vn';

    return {
        title: locale === 'vi'
            ? 'Về Chúng Tôi - VISS International'
            : 'About Us - VISS International',
        description: locale === 'vi'
            ? 'Câu chuyện và hành trình 5 năm phát triển bền vững của VISS International'
            : 'The story and 5-year journey of sustainable development of VISS International',
        alternates: {
            languages: {
                'vi': `${baseUrl}/vi/about`,
                'en': `${baseUrl}/en/about`,
            },
        },
    };
}

export default async function AboutPage({ params }: Props) {
    const { locale } = await params;

    // Try fetching from Strapi first, fallback to mock data
    const isVi = locale === 'vi';
    const strapiData = await getAboutPage(locale);
    const mockData = isVi ? aboutUsMockData.vi : aboutUsMockData.en;
    const data = strapiData || mockData;

    if (!data) {
        return notFound();
    }

    return (
        <div className="flex flex-col w-full overflow-hidden bg-black text-white">
            {/* 1. Hero Section */}
            <AboutHero
                headline={data.about_hero?.headline}
                title={data.about_hero?.title}
                bgImage={data.about_hero?.bg_image}
            />

            {/* 2. Story Section */}
            <AboutStory
                subtitle={data.about_story?.subtitle}
                title={data.about_story?.title}
                description={data.about_story?.description}
                commitments={data.about_story?.commitments}
            />

            {/* 3. Philosophy Section */}
            <AboutPhilosophy
                title={data.about_philosophy?.title}
                principles={data.about_philosophy?.principles}
                images={data.about_philosophy?.images}
            />

            {/* 4. Core Values Section */}
            <AboutCoreValues
                title={data.about_core_values?.title}
                values={data.about_core_values?.values}
            />

            {/* 5. Team Section */}
            <AboutTeam
                title={data.about_team?.title}
                members={data.about_team?.members}
            />

            {/* 6. Testimonials Section */}
            <AboutTestimonials
                title={data.about_testimonials?.title}
                reviews={data.about_testimonials?.reviews}
            />

            {/* 7. Contact Section */}
            <HPContact
                title={data.about_contact?.title}
                description={data.about_contact?.description}
                ctaText={data.about_contact?.cta_text}
            />

        </div>
    );
}
