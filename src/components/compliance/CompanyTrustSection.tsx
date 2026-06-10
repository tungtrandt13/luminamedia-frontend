import Link from "next/link";

import { companyProfileContent, resolveComplianceLocale } from "@/lib/compliance-content";

type Props = {
  locale: string;
};

export default function CompanyTrustSection({ locale }: Props) {
  const currentLocale = resolveComplianceLocale(locale);
  const content = companyProfileContent[currentLocale];

  return (
    <section className="w-full bg-[#FCF8F2] text-[#111111]">
      <div className="mx-auto grid w-full max-w-[1500px] gap-10 px-5 py-[60px] md:py-[90px] lg:grid-cols-[0.9fr_1.1fr] lg:gap-[90px]">
        <div className="flex flex-col gap-5">
          <p className="text-[14px] font-semibold uppercase tracking-[0.12em] text-[#AF7E2D]">
            {content.eyebrow}
          </p>
          <h2 className="text-[30px] font-semibold leading-[1.2] md:text-[44px]">
            {content.title}
          </h2>
          <p className="text-[16px] font-light leading-[1.75] text-[#4A4A4A] md:text-[18px]">
            {content.description}
          </p>
          <div className="flex flex-wrap gap-3 pt-2">
            {content.links.map((link) => (
              <Link
                key={link.href}
                href={`/${currentLocale}${link.href}`}
                className="rounded-[8px] border border-[#AF7E2D]/35 px-4 py-3 text-[14px] font-medium text-[#AF7E2D] transition-colors hover:bg-[#AF7E2D] hover:text-white"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="flex flex-col gap-4">
            <h3 className="text-[22px] font-semibold">{content.identityTitle}</h3>
            <dl className="flex flex-col border-t border-black/10">
              {content.identityItems.map((item) => (
                <div key={item.label} className="grid gap-2 border-b border-black/10 py-4">
                  <dt className="text-[13px] font-semibold uppercase tracking-[0.08em] text-[#AF7E2D]">
                    {item.label}
                  </dt>
                  <dd className="text-[15px] leading-[1.65] text-[#3A3A3A]">
                    {item.href ? (
                      <Link href={item.href} className="transition-colors hover:text-[#AF7E2D]">
                        {item.value}
                      </Link>
                    ) : (
                      item.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>

          <div className="flex flex-col gap-4">
            <h3 className="text-[22px] font-semibold">{content.operationsTitle}</h3>
            <ul className="flex flex-col border-t border-black/10">
              {content.operations.map((item) => (
                <li key={item} className="border-b border-black/10 py-4 text-[15px] leading-[1.65] text-[#3A3A3A]">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
