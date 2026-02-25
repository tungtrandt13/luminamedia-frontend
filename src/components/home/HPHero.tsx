import Link from 'next/link';
import { getStrapiMedia } from '@/lib/strapi';

interface Props {
  headline?: string;
  ctaText?: string;
  ctaUrl?: string;
  background?: any;
}

export default function HPHero({ headline, ctaText, ctaUrl, background }: Props) {
  const bgUrl = getStrapiMedia(background?.url || background?.data?.attributes?.url);
  const fallbackBg = '/images/home-hero-bg.png';

  return (
    <section className="relative min-h-[800px] w-full flex items-center justify-center overflow-hidden bg-[#000000]">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={bgUrl || fallbackBg}
          alt="Hero Background"
          className="h-full w-full object-cover opacity-80 mix-blend-screen"
        />
        <div
          className="absolute inset-0"
          style={{
            background: 'linear-gradient(180deg, rgba(0, 0, 0, 1) 0%, rgba(0, 0, 0, 0) 50%)'
          }}
        />
      </div>

      <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 py-[100px] flex flex-col items-center justify-center text-center">
        <div className="max-w-[800px]">
          <h1 className="text-[32px] sm:text-[40px] font-semibold leading-[1.3] text-white whitespace-pre-line">
            {headline || '"Khởi nguồn từ đam mê thương mại\nđiện tử – VISS International vươn mình\nchinh phục thị trường toàn cầu"'}
          </h1>

          <div className="mt-8 md:mt-12 flex justify-center">
            {ctaText && ctaUrl ? (
              <Link
                href={ctaUrl}
                className="inline-flex items-center justify-center rounded-[8px] bg-[#AF7E2D] border border-[#AF7E2D] px-[40px] py-[16px] text-[16px] md:text-[20px] font-semibold text-white transition-all hover:bg-transparent hover:text-[#AF7E2D] hover:scale-105 active:scale-95"
              >
                {ctaText}
              </Link>
            ) : (
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-[8px] bg-[#AF7E2D] border border-[#AF7E2D] px-[40px] py-[16px] text-[16px] md:text-[20px] font-semibold text-white transition-all hover:bg-transparent hover:text-[#AF7E2D] hover:scale-105 active:scale-95"
              >
                {ctaText || 'Xem thêm'}
              </Link>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
