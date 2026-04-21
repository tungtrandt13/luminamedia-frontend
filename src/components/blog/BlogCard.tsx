import Link from 'next/link';
import Image from 'next/image';
import { BlogPost, DEFAULT_BLOG_COVER } from '@/lib/mock-data/blog-mock';

interface Props {
  post: BlogPost;
  locale: string;
  featured?: boolean;
}

function formatDate(dateStr: string, locale: string): string {
  if (!dateStr) return '';
  const date = new Date(dateStr);
  return date.toLocaleDateString(locale === 'vi' ? 'vi-VN' : 'en-US', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  });
}

export default function BlogCard({ post, locale, featured = false }: Props) {
  return (
    <Link
      href={`/${locale}/blog/${post.slug}`}
      className={`group flex flex-col rounded-[16px] overflow-hidden bg-[#1a1a1a] border border-white/10 hover:border-[#AF7E2D]/50 transition-all duration-300 ${
        featured ? 'lg:flex-row' : ''
      }`}
    >
      {/* Cover Image */}
      <div className={`relative overflow-hidden shrink-0 ${featured ? 'w-full lg:w-[320px] h-[200px] lg:h-[240px]' : 'w-full h-[220px]'}`}>
        <Image
          src={post.coverImage || DEFAULT_BLOG_COVER}
          alt={post.title}
          fill
          className="object-cover group-hover:scale-[1.03] transition-transform duration-500"
          sizes={featured ? '(max-width: 1024px) 100vw, 320px' : '(max-width: 768px) 100vw, 400px'}
        />
        {/* Category Tag */}
        <span
          className="absolute top-3 left-3 px-3 py-1 rounded-[4px] text-[10px] sm:text-[12px] font-bold uppercase tracking-wide text-white"
          style={{ backgroundColor: post.categoryColor || '#AF7E2D' }}
        >
          {post.category}
        </span>
      </div>

      {/* Content */}
      <div className={`flex flex-col gap-4 p-5 sm:p-6 ${featured ? 'lg:gap-5 lg:p-8 lg:flex-1' : ''}`}>
        {/* Meta Row: Author + Date + Read time */}
        <div className="flex items-center gap-3">
          <div className="relative w-8 h-8 rounded-full overflow-hidden shrink-0 bg-[#2a2a2a]">
            {post.author.avatar ? (
              <Image
                src={post.author.avatar}
                alt={post.author.name}
                fill
                className="object-cover"
                sizes="32px"
              />
            ) : (
              <div className="w-full h-full flex items-center justify-center text-[12px] font-bold text-white/60">
                {post.author.name.charAt(0)}
              </div>
            )}
          </div>
          <span className="text-[12px] sm:text-[14px] text-white/50 font-light">
            {post.author.name}
          </span>
          <span className="text-white/30 text-[12px]">·</span>
          <span className="text-[12px] sm:text-[14px] text-white/50 font-light">
            {formatDate(post.publishedAt, locale)}
          </span>
          <span className="text-white/30 text-[12px]">·</span>
          <span className="text-[12px] sm:text-[14px] text-white/50 font-light">
            {post.readingTime} min read
          </span>
        </div>

        {/* Title */}
        <h3 className={`font-semibold text-white group-hover:text-[#AF7E2D] transition-colors leading-snug ${featured ? 'text-[20px] sm:text-[24px]' : 'text-[16px] sm:text-[18px]'}`}>
          {post.title}
        </h3>

        {/* Excerpt */}
        <p className="text-[14px] sm:text-[16px] text-white/60 font-light leading-relaxed line-clamp-3">
          {post.excerpt}
        </p>
      </div>
    </Link>
  );
}
