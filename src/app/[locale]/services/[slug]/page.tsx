import Link from "next/link";
import { notFound } from "next/navigation";
import { getServiceBySlug, getStrapiMedia } from "@/lib/strapi";
import { getTranslations } from "next-intl/server";
import createDOMPurify from "dompurify";
import { JSDOM } from "jsdom";

const window = new JSDOM("").window;
const DOMPurify = createDOMPurify(window as any);

type PageParams = {
  locale: string;
  slug: string;
};

interface Props {
  params: Promise<PageParams>;
}

export default async function ServiceDetailPage({ params }: Props) {
  const resolvedParams = await params;
  const { locale, slug } = resolvedParams;

  const t = await getTranslations({ locale });
  const tService = await getTranslations({ locale, namespace: 'ServiceDetail' });
  const service = await getServiceBySlug(slug, locale);

  if (!service) {
    notFound();
  }

  const iconUrl = getStrapiMedia(
    // Support both direct media object and Strapi-populated relation
    (service.icon as any)?.url || (service.icon as any)?.data?.attributes?.url
  );

  return (
    <main className="w-full bg-[#FFF8ED] text-[#171717]">
      <div className="mx-auto w-full max-w-[1240px] px-5 py-[60px] md:py-[100px]">
        {/* Breadcrumb */}
        <nav className="mb-6 text-sm text-black/60">
          <ol className="flex items-center gap-2">
            <li>
              <Link
                href={`/${locale}`}
                className="hover:text-black transition-colors"
              >
                {t('Navigation.home')}
              </Link>
            </li>
            <li>/</li>
            <li>
              <Link
                href={`/${locale}#services`}
                className="hover:text-black transition-colors"
              >
                {t('Navigation.services')}
              </Link>
            </li>
            <li>/</li>
            <li className="text-black font-medium truncate max-w-[180px] md:max-w-none">
              {service.name}
            </li>
          </ol>
        </nav>

        <article className="grid gap-10 md:grid-cols-[minmax(0,3fr)_minmax(0,2fr)] items-start">
          <div className="space-y-6">
            <header className="space-y-4">
              <p className="inline-flex items-center rounded-full bg-brand-gold/10 px-4 py-2 text-xs md:text-sm font-medium text-brand-gold uppercase tracking-[0.16em]">
                {tService('tagline', { fallback: 'Dịch vụ của Lumina Media Agency' })}
              </p>
              <h1 className="text-[28px] md:text-[40px] lg:text-[48px] font-semibold leading-tight">
                {service.name}
              </h1>
              {service.short_description && (
                <p className="text-[16px] md:text-[18px] text-black/70 leading-relaxed">
                  {service.short_description}
                </p>
              )}
            </header>

            {service.full_content && (
              <div className="prose prose-invert max-w-none text-[16px] md:text-[18px] leading-[1.7] text-black/80">
                <div
                  dangerouslySetInnerHTML={{
                    __html: DOMPurify.sanitize(service.full_content),
                  }}
                />
              </div>
            )}
          </div>

          <aside className="space-y-6 rounded-[var(--radius-lg)] border border-[#939292] bg-white p-6 md:p-8 lg:p-10">
            {iconUrl && (
              <div className="mb-4 flex items-center justify-center">
                <div className="h-16 w-16 md:h-20 md:w-20 flex items-center justify-center rounded-full bg-brand-gold/10 p-3">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={iconUrl}
                    alt={service.name}
                    className="h-full w-full object-contain"
                  />
                </div>
              </div>
            )}

            <div className="space-y-3 text-sm md:text-base text-black/70">
              <div className="flex justify-between gap-4 border-b border-[#DBE0EC] pb-3">
                <span className="font-medium text-black/80">
                  {tService('service_code', { fallback: 'Mã dịch vụ' })}
                </span>
                <span className="font-semibold text-[#171717]">
                  {service.slug}
                </span>
              </div>
              <div className="pt-3 text-[13px] md:text-[14px] text-black/60 leading-relaxed">
                {tService('contact_description', { fallback: 'Liên hệ đội ngũ Lumina Media Agency để được tư vấn chi tiết về dịch vụ này và cách triển khai phù hợp với doanh nghiệp của bạn.' })}
              </div>
            </div>

            <div className="pt-4">
              <Link
                href={`/${locale}#contact`}
                className="inline-flex w-full items-center justify-center rounded-[var(--radius-md)] bg-[#171717] px-6 py-3 text-[14px] md:text-[16px] font-semibold text-white transition-all hover:scale-[1.02]"
              >
                {tService('cta_button', { fallback: 'Nhận tư vấn từ Lumina Media Agency' })}
              </Link>
            </div>
          </aside>
        </article>
      </div>
    </main>
  );
}
