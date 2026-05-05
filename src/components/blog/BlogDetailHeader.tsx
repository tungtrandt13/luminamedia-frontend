'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/lib/mock-data/blog-mock';

interface Props {
  post: BlogPost;
  locale: string;
}

function formatDate(dateStr: string, locale: string): string {
  try {
    return new Date(dateStr).toLocaleDateString(locale === 'vi' ? 'vi-VN' : 'en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

export default function BlogDetailHeader({ post, locale }: Props) {
  return (
    <section className="w-full bg-black text-white">
      <div
        className="mx-auto flex flex-col items-center"
        style={{
          padding: 'clamp(24px, 5vw, 60px) clamp(12px, 4vw, 20px) clamp(32px, 6vw, 80px)',
          gap: 'clamp(20px, 4vw, 40px)',
          maxWidth: '1500px',
        }}
      >
        {/* Back link */}
        <div className="w-full" style={{ maxWidth: '700px' }}>
          <Link
            href={`/${locale}/blog`}
            className="inline-flex items-center gap-2 text-white/50 hover:text-white transition-colors"
            style={{
              fontFamily: "'Inter', sans-serif",
              fontSize: 'clamp(12px, 1.5vw, 14px)',
              fontWeight: 400,
            }}
          >
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
              <path d="M10 3L5 8L10 13" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
            {locale === 'vi' ? ' Quay lại' : 'Back'}
          </Link>
        </div>

        {/* Cover Image */}
        <div
          className="relative w-full overflow-hidden"
          style={{
            maxWidth: '700px',
            borderRadius: 'clamp(12px, 2vw, 16px)',
            aspectRatio: '16/10',
          }}
        >
          {post.coverImage ? (
            <Image
              src={post.coverImage}
              alt={post.title}
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 700px"
            />
          ) : (
            <div className="w-full h-full bg-[#1a1a1a]" />
          )}
          {/* Category Badge */}
          {post.category && (
            <span
              className="absolute text-white"
              style={{
                bottom: 'clamp(12px, 2vw, 24px)',
                right: 'clamp(12px, 2vw, 24px)',
                padding: '6px 14px',
                borderRadius: '4px',
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(10px, 1.2vw, 12px)',
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: '0.5px',
                backgroundColor: post.categoryColor || '#AF7E2D',
              }}
            >
              {post.category}
            </span>
          )}
        </div>

        {/* Title + Meta */}
        <div
          className="w-full flex flex-col gap-4"
          style={{ maxWidth: '700px' }}
        >
          <h1
            style={{
              fontFamily: "'Inter', sans-serif",
              fontWeight: 700,
              fontSize: 'clamp(20px, 4vw, 40px)',
              lineHeight: 1.2,
              color: '#FFFFFF',
              margin: 0,
            }}
          >
            {post.title}
          </h1>
          {post.subtitle && (
            <p
              style={{
                fontFamily: "'Inter', sans-serif",
                fontWeight: 300,
                fontSize: 'clamp(14px, 1.8vw, 18px)',
                lineHeight: 1.5,
                color: '#FFFFFF',
                opacity: 0.7,
                margin: 0,
              }}
            >
              {post.subtitle}
            </p>
          )}
          {/* Meta row: author + date + read time */}
          <div
            className="flex flex-wrap items-center gap-x-3 gap-y-1"
            style={{ marginTop: '4px' }}
          >
            <div
              className="relative rounded-full overflow-hidden"
              style={{ width: '32px', height: '32px', background: '#2a2a2a', flexShrink: 0 }}
            >
              {post.author.avatar && (
                <Image
                  src={post.author.avatar}
                  alt={post.author.name}
                  fill
                  className="object-cover"
                  sizes="32px"
                />
              )}
            </div>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(12px, 1.4vw, 14px)',
                color: '#FFFFFF',
                opacity: 0.6,
              }}
            >
              {post.author.name}
            </span>
            <span style={{ color: '#FFFFFF', opacity: 0.3, fontSize: '12px' }}>•</span>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(12px, 1.4vw, 14px)',
                color: '#FFFFFF',
                opacity: 0.6,
              }}
            >
              {formatDate(post.publishedAt, locale)}
            </span>
            <span style={{ color: '#FFFFFF', opacity: 0.3, fontSize: '12px' }}>•</span>
            <span
              style={{
                fontFamily: "'Inter', sans-serif",
                fontSize: 'clamp(12px, 1.4vw, 14px)',
                color: '#FFFFFF',
                opacity: 0.6,
              }}
            >
              {post.readingTime} min read
            </span>
          </div>
        </div>
      </div>
    </section>
  );
}
