import { Metadata } from 'next';
import TrainingHero from '@/components/training/google-ads/TrainingHero';
import TrainingCourses from '@/components/training/google-ads/TrainingCourses';
import TrainingGallery from '@/components/training/google-ads/TrainingGallery';
import TrainingInstructor from '@/components/training/google-ads/TrainingInstructor';
import TrainingContact from '@/components/training/google-ads/TrainingContact';
import TrainingPartners from '@/components/training/google-ads/TrainingPartners';
import { trainingMockData } from '@/lib/mock-data/training-mock';
import { getTrainingPage } from '@/lib/strapi';

type Props = {
    params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { locale } = await params;
    const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://viss.com.vn';

    return {
        title: locale === 'vi'
            ? 'Đào tạo Google Ads CONVERSION - VISS International'
            : 'Google Ads CONVERSION Training - VISS International',
        description: locale === 'vi'
            ? 'Chương trình đào tạo Google Ads CONVERSION thực hành trên số liệu thật.'
            : 'Google Ads CONVERSION training program based on real data.',
        alternates: {
            languages: {
                'vi': `${baseUrl}/vi/training`,
                'en': `${baseUrl}/en/training`,
            },
        },
    };
}

export default async function TrainingPage({ params }: Props) {
    const { locale } = await params;
    const currentLocale = (locale as 'vi' | 'en') || 'vi';

    // Fetch data from Strapi
    let data = await getTrainingPage(currentLocale);

    if (!data) {
        data = trainingMockData[currentLocale] || trainingMockData['vi'];
    }

    // Mock partners data as fallback
    const partnersMock = [
        { id: 1, name: 'Partner 1', url: '/images/training/partner-1.png' },
        { id: 2, name: 'Partner 2', url: '/images/training/partner-2.png' },
        { id: 3, name: 'Partner 3', url: '/images/training/partner-3.png' }
    ];

    const { getGlobalSettings } = await import('@/lib/strapi');
    const globalSettings = await getGlobalSettings(currentLocale);
    const partnersData = globalSettings?.training_partners || partnersMock;

    return (
        <div className="flex flex-col w-full overflow-hidden bg-black text-white">
            {/* 1. Hero Section */}
            <TrainingHero
                title={data.training_hero.title}
                description={data.training_hero.description}
                ctaText={data.training_hero.cta_text}
                image={data.training_hero.image}
            />

            {/* 2. Courses List */}
            <TrainingCourses
                title={data.training_courses.title}
                highlightedText={data.training_courses.highlighted_text}
                items={data.training_courses.items}
                ctaText={data.training_courses.cta_text}
            />

            {/* 3. Gallery */}
            <TrainingGallery
                title={data.training_gallery.title}
                highlightedText={data.training_gallery.highlighted_text}
                images={data.training_gallery.images}
            />

            {/* 4. Instructor */}
            <TrainingInstructor
                title={data.training_instructor.title}
                name={data.training_instructor.name}
                role={data.training_instructor.role}
                details={data.training_instructor.details}
                quote={data.training_instructor.quote}
                image={data.training_instructor.image}
            />

            {/* 5. Contact Form */}
            <TrainingContact
                title={data.training_contact.title}
                description={data.training_contact.description}
                ctaText={data.training_contact.cta_text}
                fields={data.training_contact.fields}
                courseOptions={data.training_contact.course_options}
            />

            {/* 6. Partners */}
            <TrainingPartners
                title={currentLocale === 'vi' ? 'Đối tác chiến lược' : 'Strategic Partners'}
                logos={partnersData}
            />
        </div>
    );
}
