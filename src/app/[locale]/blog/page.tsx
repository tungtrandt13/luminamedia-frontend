import { Metadata } from 'next';
import BlogHero from '@/components/blog/BlogHero';
import BlogLatestSection from '@/components/blog/BlogLatestSection';
import { getBlogPosts } from '@/lib/strapi';
import { blogListingMockData } from '@/lib/mock-data/blog-mock';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://viss.com.vn';

  return {
    title: locale === 'vi' ? 'Blog - VISS International' : 'Blog - VISS International',
    description:
      locale === 'vi'
        ? 'Kiến thức & Chiến lược Marketing từ VISS International'
        : 'Marketing Knowledge & Strategy from VISS International',
    alternates: {
      languages: {
        vi: `${baseUrl}/vi/blog`,
        en: `${baseUrl}/en/blog`,
      },
    },
  };
}

export default async function BlogPage({ params }: Props) {
  const { locale } = await params;
  const currentLocale = (locale as 'vi' | 'en') || 'vi';

  // Try fetching from Strapi first, fallback to mock data
  let posts = await getBlogPosts(currentLocale);

  if (posts.length === 0) {
    posts = blogListingMockData[currentLocale].latest.posts;
  }

  const mockData = blogListingMockData[currentLocale];

  return (
    <div className="flex flex-col w-full overflow-hidden bg-black text-white">
      {/* Hero — Featured post */}
      <BlogHero
        post={posts[0]}
        locale={currentLocale}
      />

      {/* Latest Posts — all posts except hero (posts[0]) */}
      <BlogLatestSection
        title={mockData.latest.title}
        posts={posts.slice(1)}
        locale={currentLocale}
      />
    </div>
  );
}
