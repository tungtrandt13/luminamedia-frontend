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
        style={{ padding: 'clamp(40px, 8vw, 100px) clamp(12px, 4vw, 20px)', gap: 'clamp(32px, 6vw, 60px)' }}
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
              fontWeight: 600,
              fontSize: 'clamp(28px, 6vw, 56px)',
              lineHeight: 1.2,
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
              style={{ gap: 'clamp(32px, 5vw, 106px)', justifyContent: 'center' }}
            >

              {/* Rectangle 81 — cover image */}
              <div
                className="relative shrink-0 overflow-hidden w-full lg:w-[467px]"
                style={{
                  height: 'clamp(220px, 40vw, 373px)',
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
                className="flex flex-col items-start w-full"
                style={{
                  gap: 'clamp(16px, 3vw, 40px)',
                  maxWidth: '572px',
                  flex: '1',
                }}
              >
                {/* Post title */}
                <h1
                  style={{
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 600,
                    fontSize: 'clamp(22px, 4vw, 48px)',
                    lineHeight: 1.2,
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
                      fontWeight: 300,
                      fontSize: 'clamp(14px, 2vw, 20px)',
                      lineHeight: 1.5,
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
                    padding: 'clamp(12px, 2vw, 20px) clamp(20px, 4vw, 40px)',
                    gap: '10px',
                    background: '#AF7E2D',
                    borderRadius: '8px',
                    fontFamily: 'Inter, sans-serif',
                    fontWeight: 500,
                    fontSize: 'clamp(13px, 1.5vw, 16px)',
                    lineHeight: 1.2,
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
