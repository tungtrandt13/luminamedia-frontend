'use client';

import Image from 'next/image';
import { BlogPost } from '@/lib/mock-data/blog-mock';

interface Props {
  post: BlogPost;
  locale: string;
}

export default function BlogDetailHeader({ post, locale }: Props) {
  return (
    <section className="w-full bg-black">
      <div
        className="mx-auto w-full flex items-center justify-center"
        style={{ padding: '60px 20px 80px' }}
      >
        {/* Cover Image — centered, with category badge */}
        <div
          className="relative w-full overflow-hidden"
          style={{ maxWidth: '700px', borderRadius: '16px' }}
        >
          <div className="relative w-full" style={{ height: '400px' }}>
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
          </div>

          {/* Category Badge */}
          {post.category && (
            <span
              className="absolute text-white text-[12px] font-bold uppercase tracking-wide"
              style={{
                bottom: '24px',
                right: '24px',
                padding: '8px 16px',
                borderRadius: '4px',
                backgroundColor: post.categoryColor || '#AF7E2D',
              }}
            >
              {post.category}
            </span>
          )}
        </div>
      </div>
    </section>
  );
}
