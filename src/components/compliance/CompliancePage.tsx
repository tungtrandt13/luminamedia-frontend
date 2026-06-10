import Link from "next/link";

import type { CompliancePageContent } from "@/lib/compliance-content";

type Props = {
  content: CompliancePageContent;
  locale: string;
};

export default function CompliancePage({ content, locale }: Props) {
  const localizedCtaHref = content.cta?.href
    ? `/${locale}${content.cta.href.startsWith("/") ? content.cta.href : `/${content.cta.href}`}`
    : "";

  return (
    <main className="w-full bg-black text-white">
      <section className="mx-auto flex w-full max-w-[1100px] flex-col gap-10 px-5 py-[80px] md:py-[120px]">
        <div className="flex max-w-[860px] flex-col gap-5">
          <p className="text-[14px] font-semibold uppercase tracking-[0.12em] text-[#AF7E2D]">
            {content.eyebrow}
          </p>
          <h1 className="text-[36px] font-semibold leading-[1.12] md:text-[56px]">
            {content.title}
          </h1>
          <p className="text-[17px] font-light leading-[1.7] text-[#D8D8D8] md:text-[20px]">
            {content.description}
          </p>
          <p className="text-[14px] text-[#A3A3A3]">{content.updatedLabel}</p>
        </div>

        <div className="flex flex-col border-t border-white/15">
          {content.sections.map((section) => (
            <section
              key={section.title}
              className="grid gap-5 border-b border-white/15 py-8 md:grid-cols-[280px_1fr] md:gap-12"
            >
              <h2 className="text-[22px] font-semibold leading-[1.3] text-white">
                {section.title}
              </h2>
              <div className="flex flex-col gap-4 text-[16px] font-light leading-[1.75] text-[#D8D8D8]">
                {section.paragraphs?.map((paragraph) => (
                  <p key={paragraph}>{paragraph}</p>
                ))}
                {section.bullets && (
                  <ul className="flex list-disc flex-col gap-3 pl-5">
                    {section.bullets.map((bullet) => (
                      <li key={bullet}>{bullet}</li>
                    ))}
                  </ul>
                )}
              </div>
            </section>
          ))}
        </div>

        {content.cta && (
          <Link
            href={localizedCtaHref}
            className="w-fit rounded-[8px] bg-[#AF7E2D] px-6 py-4 text-[16px] font-medium text-white transition-colors hover:bg-white hover:text-black"
          >
            {content.cta.label}
          </Link>
        )}
      </section>
    </main>
  );
}
