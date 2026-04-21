'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useTranslations } from 'next-intl';
import { BlogPost, DEFAULT_BLOG_COVER } from '@/lib/mock-data/blog-mock';

interface Props {
  post?: BlogPost;
  locale?: string;
}

export default function BlogHero({ post, locale = 'vi' }: Props) {
  const t = useTranslations('blog');

  return (
    <section className="w-full bg-black text-white">
      {/* Frame 427321353 — outer wrapper */}
      <div
        className="flex flex-col items-center w-full"
        style={{ padding: '100px 20px', gap: '60px' }}
      >

        {/* Frame 427321352 — heading row */}
        <div
          className="flex flex-col items-start w-full"
          style={{ maxWidth: '1500px' }}
        >
          {/* Heading text — "Cập nhật những tin tức mới nhất" */}
          <h2
            style={{
              fontFamily: 'Inter, sans-serif',
              fontStyle: 'normal',
              fontWeight: 600,
              fontSize: '56px',
              lineHeight: '68px',
              color: '#FFFFFF',
              maxWidth: '596px',
            }}
          >
            {t('heroTitle')}
          </h2>
        </div>

        {/* Frame 427321415 — white card */}
        {post && (
          <div
            className="flex flex-col items-center w-full"
            style={{
              maxWidth: '1500px',
              padding: '80px 36px',
              background: '#FFFFFF',
              borderRadius: '16px',
            }}
          >
            {/* Frame 427321417 — image + content row */}
            <div
              className="flex flex-col lg:flex-row items-start w-full"
              style={{ gap: '106px', justifyContent: 'center' }}
            >

              {/* Rectangle 81 — cover image */}
              <div
                className="relative shrink-0 overflow-hidden"
                style={{
                  width: '467px',
                  height: '373px',
                  borderRadius: '16px',
                }}
              >
                {post.coverImage ? (
                  <Image
                    src={post.coverImage}
                    alt={post.title || 'Blog'}
                    fill
                    priority
                    className="object-cover"
                    sizes="467px"
                  />
                ) : (
                  <Image
                    src={DEFAULT_BLOG_COVER}
                    alt={post.title || 'Blog'}
                    fill
                    priority
                    className="object-cover"
                    sizes="467px"
                  />
                )}
              </div>

              {/* Frame 427321416 — text content */}
              <div
                className="flex flex-col items-start"
                style={{
                  gap: '40px',
                  maxWidth: '572px',
                  flex: '0 0 auto',
                }}
              >
                {/* Post title */}
                <h1
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontStyle: 'normal',
                    fontWeight: 600,
                    fontSize: '56px',
                    lineHeight: '68px',
                    color: '#000000',
                  }}
                >
                  {post.title || 'Blog'}
                </h1>

                {/* Description */}
                {(post.subtitle || post.excerpt) && (
                  <p
                    style={{
                      fontFamily: 'Inter, sans-serif',
                      fontStyle: 'normal',
                      fontWeight: 300,
                      fontSize: '20px',
                      lineHeight: '27px',
                      color: '#000000',
                    }}
                  >
                    {post.subtitle || post.excerpt}
                  </p>
                )}

                {/* Button primary */}
                <Link
                  href={post.slug ? `/${locale}/blog/${post.slug}` : `/${locale}/blog`}
                  className="inline-flex flex-row justify-center items-center hover:opacity-90 transition-opacity"
                  style={{
                    padding: '20px 40px',
                    gap: '10px',
                    background: '#AF7E2D',
                    borderRadius: '8px',
                    fontFamily: 'Inter, sans-serif',
                    fontStyle: 'normal',
                    fontWeight: 500,
                    fontSize: '16px',
                    lineHeight: '19px',
                    textAlign: 'center',
                    color: '#FFFFFF',
                  }}
                >
                  {t('readMore')}
                </Link>
              </div>

            </div>
          </div>
        )}

      </div>
    </section>
  );
}
