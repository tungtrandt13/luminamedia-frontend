'use client';

interface Props {
    subtitle?: string;
    title?: string;
    description?: string;
    commitments?: string[];
}

import { normalizeStrapiText } from '@/lib/strapi';

export default function AboutStory({ subtitle, title, description, commitments = [] }: Props) {
    return (
        <section className="w-full bg-[#FCF8F2] text-[#111111] py-[60px] md:py-[100px]">
            <div className="mx-auto w-full max-w-[1280px] px-5">
                <div className="flex flex-col lg:flex-row gap-10 lg:gap-5 justify-between">

                    {/* Cột trái */}
                    <div className="flex-1 lg:max-w-[610px] flex flex-col gap-6">
                        {subtitle && (
                            <p
                                className="text-[18px] md:text-[20px] text-[#111111] font-semibold whitespace-pre-line"
                                dangerouslySetInnerHTML={{ __html: normalizeStrapiText(subtitle) }}
                            />
                        )}
                        {title ? (
                            <h2
                                className="text-[32px] sm:text-[40px] lg:text-[56px] font-semibold leading-[1.2] tracking-tight text-[#111111] whitespace-pre-line"
                                dangerouslySetInnerHTML={{ __html: normalizeStrapiText(title) }}
                            />
                        ) : (
                            <h2 className="text-[32px] sm:text-[40px] lg:text-[56px] font-semibold leading-[1.2] whitespace-pre-line tracking-tight">
                                Tiên phong mở rộng thị trường quốc tế với niềm tin phát triển bền vững
                            </h2>
                        )}
                    </div>

                    {/* Cột phải */}
                    <div className="flex-1 lg:max-w-[610px] flex flex-col gap-10">
                        {description ? (
                            <div
                                className="text-[18px] md:text-[20px] text-[#4A4A4A] font-normal leading-[1.6] whitespace-pre-line"
                                dangerouslySetInnerHTML={{ __html: normalizeStrapiText(description) }}
                            />
                        ) : (
                            <p className="text-[18px] md:text-[20px] text-[#4A4A4A] font-normal leading-[1.6]">
                                Ngay từ những ngày đầu, VISS lựa chọn con đường kinh doanh quốc tế...
                            </p>
                        )}

                        {commitments.length > 0 && (
                            <div className="flex flex-col gap-6">
                                {commitments.map((item, index) => (
                                    <div key={index} className="flex items-start gap-4">
                                        <div className="flex-shrink-0 mt-1 flex items-center justify-center w-[30px] h-[30px] rounded-full bg-[#AF7E2D]">
                                            <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M1 4.5L5 8.5L13 1" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                            </svg>
                                        </div>
                                        <p
                                            className="text-[18px] md:text-[20px] text-[#4A4A4A] font-normal leading-[1.4] whitespace-pre-line"
                                            dangerouslySetInnerHTML={{ __html: normalizeStrapiText(item) }}
                                        />
                                    </div>
                                ))}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}
