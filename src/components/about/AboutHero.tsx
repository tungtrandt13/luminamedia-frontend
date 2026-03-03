'use client';

import { normalizeStrapiText } from '@/lib/strapi';

interface Props {
    headline?: string;
    title?: string;
    bgImage?: string;
}

export default function AboutHero({ headline, title, bgImage }: Props) {
    const fallbackBg = '/images/about/about-hero-bg.png';

    return (
        <section className="w-full flex flex-col items-center justify-start overflow-hidden bg-[#000000] pt-[60px] md:pt-[100px]">
            <div className="w-full max-w-[1240px] px-5 flex flex-col items-start justify-start text-left mx-auto">
                <div className="max-w-[800px] mb-[60px] md:mb-[80px]">
                    {title && (
                        <p
                            className="text-[16px] md:text-[20px] font-semibold text-white mb-5 whitespace-pre-line"
                            dangerouslySetInnerHTML={{ __html: normalizeStrapiText(title) }}
                        />
                    )}
                    {headline ? (
                        <h1
                            className="text-[32px] sm:text-[40px] lg:text-[56px] font-semibold leading-[1.3] text-white tracking-tight whitespace-pre-line"
                            dangerouslySetInnerHTML={{ __html: normalizeStrapiText(headline) }}
                        />
                    ) : (
                        <h1 className="text-[32px] sm:text-[40px] lg:text-[56px] font-semibold leading-[1.3] text-white whitespace-pre-line tracking-tight">
                            Hành trình 5 năm
                            vươn ra <span className="text-[#AF7E2D]">thị trường
                                quốc tế</span>
                        </h1>
                    )}
                </div>
            </div>

            {/* Image Block Below Text */}
            <div className="w-full h-[400px] md:h-[676px] relative">
                <img
                    src={bgImage || fallbackBg}
                    alt="About Hero Background"
                    className="h-full w-full object-cover"
                />
            </div>
        </section>
    );
}
