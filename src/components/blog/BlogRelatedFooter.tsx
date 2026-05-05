'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/lib/mock-data/blog-mock';

interface Props {
  title?: string;
  posts: BlogPost[];
  locale: string;
}

function formatDate(dateStr: string, locale: string): string {
  try {
    const date = new Date(dateStr);
    return date.toLocaleDateString(locale === 'vi' ? 'vi-VN' : 'en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric',
    });
  } catch {
    return dateStr;
  }
}

export default function BlogRelatedFooter({ title, posts, locale }: Props) {
  if (!posts || posts.length === 0) return null;

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '60px 16px 80px',
        gap: '36px',
        background: '#FFF8ED',
        width: '100%',
      }}
    >
      {/* Header */}
      <div style={{ width: '100%', maxWidth: '1240px' }}>
        <h2
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 700,
            fontSize: 'clamp(28px, 5vw, 48px)',
            lineHeight: 1.2,
            color: '#000000',
            margin: 0,
          }}
        >
          {title || 'Related posts'}
        </h2>
        <div
          style={{
            marginTop: '8px',
            width: '40px',
            height: '3px',
            borderRadius: '2px',
            background: '#AF7E2D',
          }}
        />
      </div>

      {/* Cards — horizontal scroll on mobile, grid on desktop */}
      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
        style={{
          width: '100%',
          maxWidth: '1240px',
          gap: '16px',
        }}
      >
        {posts.slice(0, 3).map((post) => (
          <Link
            key={post.id}
            href={`/${locale}/blog/${post.slug}`}
            style={{
              display: 'flex',
              flexDirection: 'column',
              textDecoration: 'none',
              background: '#FFFFFF',
              borderRadius: '16px',
              overflow: 'hidden',
              transition: 'transform 0.25s ease, box-shadow 0.25s ease',
              boxShadow: '0 2px 12px rgba(0,0,0,0.06)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-6px)';
              e.currentTarget.style.boxShadow = '0 12px 32px rgba(0,0,0,0.12)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.06)';
            }}
          >
            {/* Image */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                aspectRatio: '16/10',
                overflow: 'hidden',
                flexShrink: 0,
              }}
            >
              {post.coverImage ? (
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 400px"
                />
              ) : (
                <div style={{ width: '100%', height: '100%', background: '#e5e5e5' }} />
              )}
              {/* Category tag overlay */}
              <span
                style={{
                  position: 'absolute',
                  top: '12px',
                  left: '12px',
                  padding: '4px 10px',
                  borderRadius: '20px',
                  fontSize: '11px',
                  fontWeight: 600,
                  fontFamily: "'Inter', sans-serif",
                  color: '#FFFFFF',
                  background: 'rgba(0,0,0,0.45)',
                  backdropFilter: 'blur(4px)',
                  WebkitBackdropFilter: 'blur(4px)',
                  letterSpacing: '0.3px',
                  textTransform: 'uppercase',
                }}
              >
                {post.category}
              </span>
            </div>

            {/* Content */}
            <div
              style={{
                padding: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '8px',
                flex: 1,
              }}
            >
              <h3
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: 'clamp(15px, 2vw, 18px)',
                  lineHeight: 1.4,
                  color: '#111111',
                  margin: 0,
                  display: '-webkit-box',
                  WebkitLineClamp: 3,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {post.title}
              </h3>
              <p
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 400,
                  fontSize: '13px',
                  lineHeight: 1.5,
                  color: '#666666',
                  margin: 0,
                  display: '-webkit-box',
                  WebkitLineClamp: 2,
                  WebkitBoxOrient: 'vertical',
                  overflow: 'hidden',
                }}
              >
                {post.excerpt}
              </p>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '6px',
                  marginTop: 'auto',
                  paddingTop: '8px',
                }}
              >
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '12px',
                    color: '#999999',
                  }}
                >
                  {formatDate(post.publishedAt, locale)}
                </span>
                <span style={{ color: '#D4C5A9', fontSize: '12px' }}>•</span>
                <span
                  style={{
                    fontFamily: "'Inter', sans-serif",
                    fontSize: '12px',
                    color: '#999999',
                  }}
                >
                  {post.readingTime} min
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
