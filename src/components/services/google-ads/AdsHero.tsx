'use client';

import { normalizeStrapiText } from '@/lib/strapi';

interface Props {
    title?: string;
    description?: string;
    ctaText?: string;
    image?: string;
}

export default function AdsHero({ title, description, ctaText, image }: Props) {
    return (
        <section className="w-full bg-black text-white">
            <div className="mx-auto w-full max-w-[1500px] px-[20px] py-[60px] lg:py-[100px]">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-[125px] items-center lg:items-start justify-center">

                    {/* Left – Text */}
                    <div className="flex flex-col gap-10 lg:gap-[80px] w-full lg:w-[505px] shrink-0">
                        <div className="flex flex-col gap-6 lg:gap-[40px]">
                            <h1 className="text-[36px] sm:text-[48px] lg:text-[56px] font-semibold leading-tight lg:leading-[1] whitespace-pre-line text-center lg:text-left">
                                {normalizeStrapiText(title || 'Dịch vụ quảng cáo\nGoogle')}
                            </h1>
                            {description && (
                                <p className="text-[16px] lg:text-[20px] font-light leading-snug lg:leading-[1.5] text-center lg:text-left">
                                    {normalizeStrapiText(description)}
                                </p>
                            )}
                        </div>

                        {ctaText && (
                            <button className="self-center lg:self-start flex items-center justify-center border border-white px-[40px] py-[20px] rounded-[8px] text-white font-medium text-[16px] hover:bg-white hover:text-black transition-colors">
                                {ctaText}
                            </button>
                        )}
                    </div>

                    {/* Right – Image */}
                    <div className="flex-1 w-full lg:h-[518px] rounded-[16px] overflow-hidden">
                        {image ? (
                            <img
                                src={image}
                                alt={title || 'Google Ads'}
                                className="w-full h-full object-cover rounded-[16px]"
                            />
                        ) : (
                            <div className="w-full h-full min-h-[300px] bg-gradient-to-br from-[#1a1a1a] to-[#2a2a2a] flex items-center justify-center rounded-[16px] border border-white/10">
                                <div className="text-center p-8">
                                    <div className="text-[60px] mb-4">📊</div>
                                    <p className="text-white/40 text-[18px] font-light">Google Ads</p>
                                </div>
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}
