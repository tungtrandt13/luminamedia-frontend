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

  return (
    <section className="w-full bg-white text-black">
      <div className="mx-auto w-full max-w-[1500px] px-5 md:px-[20px] py-[100px]">
        <div className="mb-10 md:mb-[80px] max-w-[1314px] space-y-4 md:space-y-6">
          <h2 className="text-[32px] sm:text-[40px] md:text-[56px] font-semibold leading-tight text-black md:whitespace-pre-line">
            {normalizeStrapiText(title || t('title'))}
          </h2>
          {description && (
            <div className="max-w-[497px] text-[16px] md:text-[20px] text-black font-light leading-[1.6]">
              {description}
            </div>
          )}
        </div>

        <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {services.map((service) => {
            const iconUrl = getStrapiMedia(service.icon);

            return (
              <div
                key={service.id}
                className="group flex flex-col justify-start p-4 pt-[40px] lg:p-6 lg:pt-[50px] mt-[30px] rounded-[16px] border border-[#939292] bg-white hover:shadow-[0px_4px_24px_rgba(0,0,0,0.08)] transition-all duration-300 h-full relative"
              >
                {/* Overlapping Icon */}
                <div className="absolute left-6 -top-[25px]">
                  {iconUrl ? (
                    <div className="h-[50px] w-[50px] flex items-center justify-center rounded-full bg-[#AF7E2D] p-3 text-white">
                      <img src={iconUrl} alt={service.title} className="h-full w-full object-contain" style={{ filter: 'brightness(0) invert(1)' }} />
                    </div>
                  ) : (
                    <div className="h-[50px] w-[50px] rounded-full bg-[#AF7E2D]" />
                  )}
                </div>

                <div className="space-y-6 flex-grow flex flex-col">
                  <div className="space-y-3 md:space-y-4">
                    <h3 className="text-[18px] md:text-[20px] font-semibold leading-tight text-black whitespace-pre-line">
                      {normalizeStrapiText(service.title)}
                    </h3>
                    <div className="text-[16px] md:text-[18px] text-[#6C6C6C] font-light leading-snug whitespace-pre-line min-h-[48px]">
                      {normalizeStrapiText(service.description)}
                    </div>
                  </div>

                  {(() => {
                    const featuresArray = Array.isArray(service.features) ? service.features : (service.features as any)?.data || [];
                    if (featuresArray.length === 0) return null;
                    return (
                      <ul className="flex flex-col flex-grow mt-2">
                        {featuresArray.map((feature: any) => (
                          <li key={feature.id} className="flex flex-col justify-center min-h-[50px] py-3 border-t border-[#DBE0EC] text-[16px] text-black font-light leading-snug whitespace-pre-line">
                            {normalizeStrapiText(feature.text)}
                          </li>
                        ))}
                      </ul>
                    );
                  })()}
                </div>
              </div>
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
