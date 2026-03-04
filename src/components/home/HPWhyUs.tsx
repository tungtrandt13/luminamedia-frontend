import Link from 'next/link';
import { getStrapiMedia, normalizeStrapiText } from '@/lib/strapi';
import type { HPStatCard } from '@/lib/strapi';
import { useTranslations } from 'next-intl';

interface Props {
  title?: string;
  description?: string;
  primaryCtaText?: string;
  primaryCtaUrl?: string;
  secondaryCtaText?: string;
  secondaryCtaUrl?: string;
  stats?: HPStatCard[];
  image?: any;
}

export default function HPWhyUs({
  title,
  description,
  primaryCtaText,
  primaryCtaUrl,
  secondaryCtaText,
  secondaryCtaUrl,
  stats,
  image,
}: Props) {
  const t = useTranslations('HomePage.hp_why_us');
  const imageUrl = getStrapiMedia(image);
  const normalizedTitle = normalizeStrapiText(title);

  return (
    <section className="w-full bg-black text-white relative overflow-hidden">
      <div className="mx-auto w-full max-w-[1500px] px-5 md:px-[20px] py-[100px]">
        <div className="flex flex-col lg:flex-row items-center lg:items-start justify-center gap-12 md:gap-[126px] max-w-[1500px]">

          {/* Left Column: Text & Buttons */}
          <div className="flex-1 flex flex-col gap-8 md:gap-[50px] w-full lg:max-w-none">
            <div className="space-y-4 md:space-y-[20px]">
              <h2
                className="text-[32px] sm:text-[40px] md:text-[40px] font-semibold leading-[1.3] whitespace-pre-line text-center lg:text-left"
                dangerouslySetInnerHTML={{ __html: normalizedTitle || t('title') }}
              />
              {description && (
                <p
                  className="text-[16px] md:text-[20px] text-white font-light leading-snug whitespace-pre-line lg:max-w-[600px] text-center lg:text-left"
                  dangerouslySetInnerHTML={{ __html: normalizeStrapiText(description) }}
                />
              )}
            </div>

            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-4 lg:gap-[20px]">
              {primaryCtaText && primaryCtaUrl && (
                <Link
                  href={primaryCtaUrl}
                  className="rounded-[8px] border border-white px-[40px] py-[20px] text-[16px] font-medium text-white transition-all hover:bg-white hover:text-black flex items-center justify-center shrink-0"
                >
                  {primaryCtaText}
                </Link>
              )}
              {secondaryCtaText && secondaryCtaUrl && (
                <Link
                  href={secondaryCtaUrl}
                  className="rounded-[8px] border border-white px-[40px] py-[20px] text-[16px] font-medium text-white transition-all hover:bg-white hover:text-black flex items-center justify-center shrink-0"
                >
                  {secondaryCtaText}
                </Link>
              )}
            </div>
          </div>

          {/* Right Column: Image & Stats overlapping */}
          <div className="flex flex-col md:flex-row items-center justify-center lg:justify-end relative w-full lg:w-[631px] shrink-0 md:pr-[80px]">
            {(() => {
              const statsArray = Array.isArray(stats) ? stats : (stats as any)?.data || [];
              if (statsArray.length === 0) return null;
              return (
                <div className="flex flex-col gap-4 lg:gap-[20px] z-10 w-full md:w-auto md:mr-[-80px] relative">
                  {statsArray.map((s: any) => (
                    <div key={s.id} className="bg-[#FFF8ED] text-black px-6 lg:px-[40px] py-[12px] lg:py-[16px] rounded-[16px] w-full md:w-[250px] lg:w-[300px] flex flex-col justify-center shadow-lg transition-transform hover:-translate-y-1 hover:shadow-xl group">
                      <div className="text-[36px] lg:text-[48px] font-semibold text-[#AF7E2D] leading-[1.1] md:pl-[12px] group-hover:pl-[16px] transition-all whitespace-pre-line" dangerouslySetInnerHTML={{ __html: normalizeStrapiText(s.value) }} />
                      <div className="text-[16px] lg:text-[20px] font-light leading-snug md:pl-[12px] group-hover:pl-[16px] transition-all whitespace-pre-line" dangerouslySetInnerHTML={{ __html: normalizeStrapiText(s.label) }} />
                    </div>
                  ))}
                </div>
              );
            })()}

            <div className="w-full md:w-[400px] h-[400px] md:h-[577px] shrink-0 z-0 overflow-hidden rounded-[16px] mt-8 md:mt-0 relative border border-white/10 md:mb-[-100px] lg:mb-0">
              {imageUrl ? (
                <img src={imageUrl} alt={title} className="w-full h-full object-cover" />
              ) : (
                <div className="flex h-full items-center justify-center bg-zinc-800 text-white/20">No Image</div>
              )}
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
