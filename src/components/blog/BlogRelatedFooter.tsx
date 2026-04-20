'use client';

import Image from 'next/image';
import Link from 'next/link';
import { BlogPost } from '@/lib/mock-data/blog-mock';

interface Props {
  title?: string;
  posts: BlogPost[];
  locale: string;
}

export default function BlogRelatedFooter({ title, posts, locale }: Props) {
  if (!posts || posts.length === 0) return null;

  return (
    <section
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        padding: '100px 20px',
        gap: '60px',
        background: '#FFF8ED',
        width: '100%',
      }}
    >
      {/* Header */}
      <div
        style={{
          width: '100%',
          maxWidth: '1240px',
        }}
      >
        <h2
          style={{
            fontFamily: "'Inter', sans-serif",
            fontWeight: 600,
            fontSize: '56px',
            lineHeight: '68px',
            color: '#000000',
            margin: 0,
          }}
        >
          {title || 'Related posts'}
        </h2>
      </div>

      {/* Cards Grid */}
      <div
        style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(3, 1fr)',
          gap: '20px',
          width: '100%',
          maxWidth: '1240px',
        }}
      >
        {posts.slice(0, 3).map((post) => (
          <Link
            key={post.id}
            href={`/${locale}/blog/${post.slug}`}
            style={{
              display: 'block',
              textDecoration: 'none',
              background: '#FFFFFF',
              borderRadius: '16px',
              overflow: 'hidden',
              transition: 'transform 0.2s ease, box-shadow 0.2s ease',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = 'translateY(-4px)';
              e.currentTarget.style.boxShadow = '0 8px 24px rgba(0,0,0,0.08)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = 'translateY(0)';
              e.currentTarget.style.boxShadow = 'none';
            }}
          >
            {/* Image */}
            <div
              style={{
                position: 'relative',
                width: '100%',
                height: '321px',
                borderRadius: '16px 16px 0 0',
                overflow: 'hidden',
              }}
            >
              {post.coverImage ? (
                <Image
                  src={post.coverImage}
                  alt={post.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 400px"
                />
              ) : (
                <div style={{ width: '100%', height: '100%', background: '#e5e5e5' }} />
              )}
            </div>

            {/* Title */}
            <div style={{ padding: '14px' }}>
              <h3
                style={{
                  fontFamily: "'Inter', sans-serif",
                  fontWeight: 600,
                  fontSize: '24px',
                  lineHeight: '32px',
                  color: '#000000',
                  margin: 0,
                }}
              >
                {post.title}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
