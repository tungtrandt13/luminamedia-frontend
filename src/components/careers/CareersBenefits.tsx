function CheckIcon({ className }: { className?: string }) {
  return (
    <svg
      width="16"
      height="12"
      viewBox="0 0 16 12"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <path
        d="M1.5 6.5L5.8 10.5L14.5 1.5"
        stroke="currentColor"
        strokeWidth="2.2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

interface Props {
  title: string;
  description: string;
  detailsTitle: string;
  details: string[];
}

import { normalizeStrapiText } from '@/lib/strapi';

export default function CareersBenefits({ title, description, detailsTitle, details }: Props) {
  return (
    <section className="w-full bg-white text-black">
      <div className="mx-auto w-full max-w-[1500px] px-5 py-[60px] md:py-[100px]">
        <div className="flex flex-col lg:flex-row items-start justify-between gap-10 lg:gap-[80px]">
          <div className="flex-1 py-[10px] md:py-[19px]">
            <h2
              className="text-[34px] sm:text-[44px] lg:text-[56px] font-semibold leading-[1.1] max-w-[520px] whitespace-pre-wrap"
              dangerouslySetInnerHTML={{ __html: normalizeStrapiText(title) }}
            />
            <p className="mt-6 text-[16px] md:text-[20px] font-light leading-[1.55] text-black/90 whitespace-pre-line max-w-[520px]">
              {normalizeStrapiText(description)}
            </p>
          </div>

          <div className="w-full lg:w-[610px] bg-[#F5F5F5] rounded-[16px] px-[24px] md:px-[40px] py-[40px] md:py-[60px]">
            <h3 className="text-[24px] md:text-[32px] font-semibold leading-[1.25]">
              {detailsTitle}
            </h3>

            <div className="mt-[30px] md:mt-[60px]">
              {details.map((item, idx) => (
                <div key={item} className="py-[14px]">
                  <div className="flex items-start gap-[20px]">
                    <div className="grid place-items-center shrink-0 size-[30px] rounded-full bg-[#AF7E2D] text-white">
                      <CheckIcon className="text-white" />
                    </div>
                    <p className="text-[16px] md:text-[20px] font-semibold leading-[1.35] whitespace-pre-line">
                      {normalizeStrapiText(item)}
                    </p>
                  </div>
                  {idx < details.length - 1 && (
                    <div className="mt-[18px] h-px w-full bg-black/10" />
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

