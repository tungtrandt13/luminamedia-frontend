import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import BlogDetailHeader from '@/components/blog/BlogDetailHeader';
import BlogTOC from '@/components/blog/BlogTOC';
import BlogBody from '@/components/blog/BlogBody';
import BlogRelatedFooter from '@/components/blog/BlogRelatedFooter';
import { getBlogPostBySlug as getStrapiPost } from '@/lib/strapi';
import {
  getBlogPostBySlug as getMockPost,
  getRelatedPosts,
} from '@/lib/mock-data/blog-mock';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const baseUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://viss.com.vn';

  const post =
    (await getStrapiPost(slug, locale)) ||
    getMockPost(slug, (locale as 'vi' | 'en') || 'vi');
  if (!post) {
    return {
      title:
        locale === 'vi' ? 'Bài viết - VISS International' : 'Article - VISS International',
    };
  }

  return {
    title: `${post.title} - VISS International`,
    description: post.excerpt,
    alternates: {
      languages: {
        vi: `${baseUrl}/vi/blog/${slug}`,
        en: `${baseUrl}/en/blog/${slug}`,
      },
    },
  };
}

export default async function BlogDetailPage({ params }: Props) {
  const { locale, slug } = await params;
  const currentLocale = (locale as 'vi' | 'en') || 'vi';

  // Try Strapi first, fallback to mock data
  const post =
    (await getStrapiPost(slug, locale)) || getMockPost(slug, currentLocale);
  if (!post) {
    return notFound();
  }

  // Related posts from mock data (Strapi version would return full related data)
  const relatedPosts = getRelatedPosts(post, currentLocale);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* Header: Back link, Title, Meta, Cover */}
      <BlogDetailHeader post={post} locale={currentLocale} />

      {/* Body + TOC */}
      <div className="mx-auto w-full max-w-[1500px] px-5 lg:px-10 pb-[60px] lg:pb-[100px]">
        <div className="flex gap-[60px] items-start">
          {/* TOC Sidebar */}
          <BlogTOC items={post.toc || []} />

          {/* Article Content */}
          <article className="flex-1 min-w-0">
            <BlogBody content={post.content} />
          </article>
        </div>
      </div>

      {/* Related Posts */}
      {relatedPosts.length > 0 && (
        <BlogRelatedFooter posts={relatedPosts} locale={currentLocale} />
      )}
    </div>
  );
}
