'use client';

import type { AdsServiceItem } from '@/lib/mock-data/google-ads-mock';

import { normalizeStrapiText } from '@/lib/strapi';

interface Props {
    title?: string;
    items?: AdsServiceItem[];
}

export default function AdsServicesList({ title, items = [] }: Props) {
    return (
        <section className="w-full bg-[#FFF9EF] text-black">
            <div className="mx-auto w-full max-w-[1500px] px-[20px] py-[60px] lg:py-[100px]">
                <div className="flex flex-col gap-10 lg:gap-[80px] items-center">

                    {/* Title */}
                    <h2
                        className="text-[36px] sm:text-[48px] lg:text-[56px] font-semibold text-center leading-tight"
                        dangerouslySetInnerHTML={{ __html: normalizeStrapiText(title || 'Các dịch vụ của chúng tôi') }}
                    />

                    {/* Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[22px] w-full">
                        {items.map((item) => (
                            <div
                                key={item.id}
                                className="border border-[#939292] rounded-[16px] px-[16px] py-[24px] flex flex-col gap-[24px] hover:border-[#AF7E2D] hover:-translate-y-1 transition-all duration-300 group"
                            >
                                {/* Icon */}
                                <div className="w-[50px] h-[50px] rounded-[100px] bg-[#AF7E2D] flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="p-[3px]">
                                        <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </div>

                                {/* Title */}
                                <h3
                                    className="text-[20px] font-semibold leading-[normal] whitespace-pre-line text-black"
                                    dangerouslySetInnerHTML={{ __html: normalizeStrapiText(item.title) }}
                                />

                                {/* Features list */}
                                <div className="flex flex-col w-full">
                                    {item.features.map((feature, idx) => (
                                        <div
                                            key={idx}
                                            className="border-t border-[#DBE0EC] py-[8px] flex items-start w-full"
                                        >
                                            <p
                                                className="text-[20px] font-light leading-[normal] text-black whitespace-pre-wrap"
                                                dangerouslySetInnerHTML={{ __html: normalizeStrapiText(feature) }}
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}
