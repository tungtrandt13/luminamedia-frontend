import Link from 'next/link';
import Image from 'next/image';
import { getStrapiMedia, StrapiMedia } from '@/lib/strapi';

interface Props {
  title?: string;
  subtitle?: string;
  quote?: string;
  body?: Array<{ id: number; text: string }>;
  ctaText?: string;
  ctaUrl?: string;
  heroQuote?: string;
  heroBackground?: StrapiMedia;
  heroCtaText?: string;
  heroCtaUrl?: string;
  image?: StrapiMedia;
}

export default function HPJourney({
  title,
  subtitle,
  quote,
  body,
  ctaText,
  ctaUrl,
  heroQuote,
  heroBackground,
  heroCtaText,
  heroCtaUrl,
  image
}: Props) {
  const heroBgUrl = heroBackground ? getStrapiMedia(heroBackground) : null;
  const imageUrl = image ? getStrapiMedia(image) : null;

  return (
    <>
      {/* Main Journey Section */}
      <section className="w-full bg-black text-[#171717]">
        <div className="mx-auto w-full max-w-[1500px] px-5 md:px-[20px] lg:px-[124px] py-[100px]">
          <div className="grid gap-12 md:gap-[60px] lg:grid-cols-2 lg:gap-24 lg:items-start max-w-[1500px]">
            {/* Left Column: Titles & Quote */}
            <div className="space-y-6 md:space-y-8 lg:space-y-12">
              {/* Title Section */}
              <div className="space-y-4 md:space-y-6">
                {subtitle && (
                  <p className="text-[14px] md:text-[16px] font-bold uppercase tracking-wider text-[#AF7E2D] text-center lg:text-left">
                    {subtitle}
                  </p>
                )}
                <h2 className="text-[36px] sm:text-[44px] md:text-[52px] lg:text-[60px] font-bold leading-[1.1] tracking-[-0.02em] text-white text-center lg:text-left whitespace-pre-line">
                  {title || 'Hành trình từ năm 2020 vươn ra Thị trường toàn cầu'}
                </h2>
              </div>

              {/* Quote Section */}
              {quote && (
                <div className="relative mt-12 md:mt-[40px] pr-4 lg:pr-12 w-full">
                  <p className="text-[28px] md:text-[40px] font-semibold text-[#6C6C6C] leading-[1.3] text-center lg:text-left tracking-tight">
                    “{quote}”
                  </p>
                </div>
              )}
            </div>

            {/* Right Column: Description, Image & CTA */}
            <div className="flex flex-col space-y-8 md:space-y-10 lg:pl-10">
              {/* Body Text */}
              <div className="space-y-6">
                {body && body.length > 0 ? (
                  body.map((item) => (
                    <p
                      key={item.id}
                      className="text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] text-[#737373] text-center lg:text-left"
                    >
                      {item.text}
                    </p>
                  ))
                ) : (
                  <p className="text-[16px] md:text-[18px] lg:text-[20px] leading-[1.6] text-[#737373] text-center lg:text-left">
                    VISS International được thành lập năm 2020 từ niềm đam mê thương mại điện tử và khát vọng chinh phục thị trường quốc tế.
                  </p>
                )}
              </div>

              {/* CTA Button */}
              {ctaText && ctaUrl && (
                <div className="flex justify-center lg:justify-start pt-6">
                  <Link
                    href={ctaUrl}
                    className="inline-flex items-center justify-center rounded-[8px] bg-transparent border border-white/50 px-[40px] py-[20px] text-[16px] md:text-[20px] font-medium text-white transition-all hover:bg-white hover:text-black hover:border-white active:scale-95"
                  >
                    {ctaText}
                  </Link>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
