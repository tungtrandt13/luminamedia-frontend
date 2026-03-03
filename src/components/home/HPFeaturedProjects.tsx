import Link from 'next/link';
import { getStrapiMedia, normalizeStrapiText } from '@/lib/strapi';
import type { HPProjectCard } from '@/lib/strapi';
import ArrowDropUp from '@/components/icons/ArrowDropUp';
import { useTranslations } from 'next-intl';

interface Props {
  title?: string;
  description?: string;
  projects?: HPProjectCard[];
  ctaText?: string;
  ctaUrl?: string;
}

export default function HPFeaturedProjects({ title, description, projects, ctaText, ctaUrl }: Props) {
  const t = useTranslations('HomePage.hp_featured_projects');
  if (!projects || projects.length === 0) return null;

  return (
    <section className="w-full bg-black text-white overflow-hidden">
      <div className="mx-auto w-full max-w-[1500px] px-5 md:px-[20px] py-[100px]">
        <div className="mb-10 lg:mb-[80px] flex flex-col md:flex-row md:items-center justify-between gap-6 lg:gap-16">
          <h2 className="text-[32px] sm:text-[40px] md:text-[48px] lg:text-[56px] font-bold leading-[1.21] shrink-0">
            {title || t('title')}
          </h2>
          {description && (
            <p className="text-[16px] md:text-[18px] lg:text-[20px] text-white font-light leading-snug w-full lg:max-w-[400px]">
              {description}
            </p>
          )}
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project) => {
            const imageUrl = getStrapiMedia(project.image);

            return (
              <Link
                key={project.id}
                href={project.url || '#'}
                className="group block bg-white rounded-[16px] overflow-hidden transition-transform hover:-translate-y-1"
              >
                <div className="h-[260px] overflow-hidden relative">
                  {imageUrl ? (
                    <img
                      src={imageUrl}
                      alt={project.title}
                      className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                  ) : (
                    <div className="flex h-full items-center justify-center bg-[#2A2A2A] text-white/10">No Image</div>
                  )}
                </div>

                <div className="p-5 pb-10 flex flex-col gap-5">
                  <div className="flex flex-col gap-2">
                    <div className="flex items-baseline gap-2">
                      {project.market_tag && (
                        <span className="text-[#939292] text-[16px] font-medium uppercase">
                          {project.market_tag}
                        </span>
                      )}
                      {project.category && (
                        <h4 className="text-black text-[18px] sm:text-[20px] font-semibold uppercase truncate">
                          {project.category}
                        </h4>
                      )}
                    </div>
                    <h3
                      className="text-black text-[18px] sm:text-[20px] font-light leading-snug line-clamp-3 whitespace-pre-line"
                      dangerouslySetInnerHTML={{ __html: normalizeStrapiText(project.title) }}
                    />
                  </div>

                  {/* Divider */}
                  <div className="w-full h-px bg-[#E5E5E5]"></div>

                  {/* Metrics */}
                  {(() => {
                    const metricsArray = Array.isArray(project.metrics) ? project.metrics : (project.metrics as any)?.data || [];
                    if (metricsArray.length === 0) return null;
                    return (
                      <div className="flex items-center justify-between">
                        {metricsArray.map((metric: any) => (
                          <div key={metric.id} className="flex flex-col min-w-[120px]">
                            <div className="flex items-center gap-1">
                              <div className="font-semibold text-[#af7e2d] flex items-baseline leading-none">
                                <span className="text-[32px] sm:text-[40px] leading-[1]">{metric.value}</span>
                                <span className="text-[20px] sm:text-[25.8px] leading-[1]">%</span>
                              </div>
                              <div className="flex items-center justify-center w-[40px] h-[40px] bg-[#EAF7E9] rounded-full shrink-0 ml-1">
                                <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                                  <path d="M11.6667 23.3333L20.0001 15L28.3334 23.3333H11.6667Z" fill="#11C900" />
                                </svg>
                              </div>
                            </div>
                            <div
                              className="text-black text-[12px] sm:text-[14px] font-normal leading-[16px] tracking-[-0.42px] whitespace-pre-line"
                              dangerouslySetInnerHTML={{ __html: normalizeStrapiText(metric.label) }}
                            />
                          </div>
                        ))}
                      </div>
                    );
                  })()}
                  {/* Bottom Divider */}
                  <div className="w-full h-px bg-[#E5E5E5]"></div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* CTA Button */}
        {ctaText && ctaUrl && (
          <div className="mt-10 lg:mt-16 flex justify-center">
            <Link
              href={ctaUrl}
              className="inline-flex items-center justify-center rounded-[8px] bg-transparent border border-white/50 px-[40px] py-[20px] text-[16px] md:text-[20px] font-medium text-white transition-all hover:bg-white hover:text-black hover:border-white active:scale-95"
            >
              {ctaText}
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
