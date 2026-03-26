import Link from 'next/link';
import { getStrapiMedia } from '@/lib/strapi';
import type { HPServiceCard as HPServiceCardType } from '@/lib/strapi';
import { useTranslations } from 'next-intl';

import { normalizeStrapiText } from '@/lib/strapi';

interface Props {
  title?: string;
  description?: string;
  services?: HPServiceCardType[];
  ctaText?: string;
  ctaUrl?: string;
}

export default function HPServices({ title, description, services, ctaText, ctaUrl }: Props) {
  const t = useTranslations('HomePage.hp_services');
  if (!services || services.length === 0) return null;

  // Fallback URL mapping when service.url is not provided from Strapi
  const serviceUrlMap: Record<number, string> = {
    1: '/services/google-ads',
    2: '/services/rent-ads',
    3: '/services/tiktok-ads',
    4: '/services/tiktok-shop-ops',
  };

  return (
    <section className="w-full bg-white text-black">
      <div className="mx-auto w-full max-w-[1500px] px-5 md:px-[20px] py-[100px]">
        <div className="mb-10 md:mb-[80px] max-w-[1314px] space-y-4 md:space-y-6">
          <h2
            className="text-[32px] sm:text-[40px] md:text-[56px] font-semibold leading-tight text-black md:whitespace-pre-line"
            dangerouslySetInnerHTML={{ __html: normalizeStrapiText(title || t('title')) }}
          />
          {description && (
            <div className="max-w-[497px] text-[16px] md:text-[20px] text-black font-light leading-[1.6]">
              {description}
            </div>
          )}
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const iconUrl = getStrapiMedia(service.icon);
            const serviceUrl = service.url || serviceUrlMap[service.id] || '#';

            return (
              <Link
                key={service.id}
                href={serviceUrl}
                className="group flex flex-col justify-start rounded-[16px] border border-[#939292] bg-white hover:shadow-[0px_4px_24px_rgba(0,0,0,0.08)] hover:border-[#AF7E2D] transition-all duration-300 h-full cursor-pointer overflow-hidden"
              >
                <div className="flex flex-col gap-[24px] items-start px-[16px] py-[24px] h-full">
                  {/* Icon inside card */}
                  {iconUrl ? (
                    <div className="h-[50px] w-[50px] flex items-center justify-center rounded-full bg-[#AF7E2D] p-3 text-white shrink-0">
                      <img src={iconUrl} alt={service.title} className="h-full w-full object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
                    </div>
                  ) : (
                    <div className="h-[50px] w-[50px] rounded-full bg-[#AF7E2D] shrink-0" />
                  )}

                  {/* Title & Description */}
                  <div className="flex flex-col gap-[8px] text-[20px] text-black w-full">
                    <h3
                      className="font-semibold leading-normal whitespace-pre-line group-hover:text-[#AF7E2D] transition-colors"
                      dangerouslySetInnerHTML={{ __html: normalizeStrapiText(service.title) }}
                    />
                    <div
                      className="font-light leading-normal whitespace-pre-line"
                      dangerouslySetInnerHTML={{ __html: normalizeStrapiText(service.description) }}
                    />
                  </div>

                  {/* Feature List */}
                  {(() => {
                    const featuresArray = Array.isArray(service.features) ? service.features : (service.features as any)?.data || [];
                    if (featuresArray.length === 0) return null;
                    return (
                      <div className="flex flex-col w-full flex-grow">
                        {featuresArray.map((feature: any) => (
                          <div key={feature.id}
                            className="py-[8px] border-t border-[#DBE0EC] text-[20px] text-black font-light leading-normal"
                            dangerouslySetInnerHTML={{ __html: normalizeStrapiText(feature.text) }}
                          />
                        ))}
                      </div>
                    );
                  })()}
                </div>
              </Link>
            );
          })}
        </div>

        {ctaText && ctaUrl && (
          <div className="mt-12 md:mt-16 text-center">
            <Link
              href={ctaUrl}
              className="inline-flex items-center justify-center rounded-[8px] bg-[#AF7E2D] px-[40px] py-[20px] text-[16px] md:text-[20px] font-semibold text-white transition-all hover:opacity-90 hover:scale-105 active:scale-95"
            >
              {ctaText}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
