'use client';

import { useState, useMemo } from 'react';
import { useTranslations } from 'next-intl';
import Link from 'next/link';
import Image from 'next/image';
import { BlogPost, DEFAULT_BLOG_COVER } from '@/lib/mock-data/blog-mock';

interface Props {
  title?: string;
  posts: BlogPost[];
  locale: string;
}

const ITEMS_PER_PAGE = 6; // 3 columns x 2 rows

export default function BlogLatestSection({ title, posts, locale }: Props) {
  const t = useTranslations('blog');
  const [currentPage, setCurrentPage] = useState(0);

  const totalPages = useMemo(
    () => Math.max(1, Math.ceil(posts.length / ITEMS_PER_PAGE)),
    [posts.length]
  );

  const currentPosts = useMemo(
    () => posts.slice(currentPage * ITEMS_PER_PAGE, (currentPage + 1) * ITEMS_PER_PAGE),
    [posts, currentPage]
  );

  if (!posts || posts.length === 0) return null;

  const handlePrev = () => setCurrentPage((p) => Math.max(0, p - 1));
  const handleNext = () => setCurrentPage((p) => Math.min(totalPages - 1, p + 1));

  return (
    <section
      id="latest-post"
      className="w-full"
      style={{ background: '#FDF5EC', padding: '80px 20px' }}
    >
      <div
        className="mx-auto w-full"
        style={{ maxWidth: '1240px' }}
      >
        {/* Header: title + arrows */}
        <div
          className="flex items-center justify-between"
          style={{ marginBottom: '48px' }}
        >
          <h2
            style={{
              fontFamily: 'Inter, sans-serif',
              fontWeight: 700,
              fontSize: 'clamp(24px, 4vw, 36px)',
              lineHeight: 1.2,
              color: '#000000',
            }}
          >
            {title || t('latestTitle')}
          </h2>

          {/* Navigation Arrows */}
          <div className="flex items-center" style={{ gap: '12px' }}>
            <button
              onClick={handlePrev}
              disabled={currentPage === 0}
              className="flex items-center justify-center rounded-full transition-opacity"
              style={{
                width: '44px',
                height: '44px',
                background: currentPage === 0 ? '#D4C5A9' : '#AF7E2D',
                opacity: currentPage === 0 ? 0.5 : 1,
                cursor: currentPage === 0 ? 'default' : 'pointer',
              }}
              aria-label="Previous page"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M11 4L6 9L11 14" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            <button
              onClick={handleNext}
              disabled={currentPage === totalPages - 1}
              className="flex items-center justify-center rounded-full transition-opacity"
              style={{
                width: '44px',
                height: '44px',
                background: currentPage === totalPages - 1 ? '#D4C5A9' : '#AF7E2D',
                opacity: currentPage === totalPages - 1 ? 0.5 : 1,
                cursor: currentPage === totalPages - 1 ? 'default' : 'pointer',
              }}
              aria-label="Next page"
            >
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                <path d="M7 4L12 9L7 14" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </div>
        </div>

        {/* Cards Grid — 3 columns, 2 rows */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ gap: '32px', rowGap: '40px' }}
        >
          {currentPosts.map((post) => (
            <Link
              key={post.id}
              href={`/${locale}/blog/${post.slug}`}
              className="group flex flex-col"
              style={{ gap: '16px' }}
            >
              {/* Cover Image */}
              <div
                className="relative w-full overflow-hidden"
                style={{ height: '240px', borderRadius: '16px' }}
              >
                <Image
                  src={post.coverImage || DEFAULT_BLOG_COVER}
                  alt={post.title}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
                  sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>

              {/* Title */}
              <h3
                className="group-hover:text-[#AF7E2D] transition-colors"
                style={{
                  fontFamily: 'Inter, sans-serif',
                  fontWeight: 600,
                  fontSize: '20px',
                  lineHeight: '28px',
                  color: '#000000',
                }}
              >
                {post.title}
              </h3>
            </Link>
          ))}
        </div>

        {/* Pagination Dots */}
        <div
          className="flex items-center justify-center"
          style={{ marginTop: '48px', gap: '10px' }}
        >
          {Array.from({ length: totalPages }).map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentPage(idx)}
              className="rounded-full transition-all duration-300"
              style={{
                width: idx === currentPage ? '12px' : '10px',
                height: idx === currentPage ? '12px' : '10px',
                background: idx === currentPage ? '#AF7E2D' : '#D1D1D1',
                cursor: 'pointer',
                border: 'none',
              }}
              aria-label={`Page ${idx + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
