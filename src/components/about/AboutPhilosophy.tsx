'use client';

interface Principle {
    label: string;
    value: string;
}

interface Props {
    title?: string;
    principles?: Principle[];
    images?: string[];
}

import { normalizeStrapiText } from '@/lib/strapi';

export default function AboutPhilosophy({ title, principles = [], images = [] }: Props) {
    // Fallback data if principles are empty
    const displayPrinciples = principles.length > 0 ? principles : [
        { label: "Thị trường", value: "WIN" },
        { label: "Doanh nghiệp", value: "WIN" },
        { label: "Con người", value: "WIN" }
    ];

    return (
        <section className="relative w-full bg-[#000000] text-white py-[80px] md:py-[120px] overflow-hidden min-h-[500px] flex items-center justify-center">

            {/* Background Images */}
            <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden h-full w-full">
                <img
                    src={images?.[0] || "/images/about/phi-bg-aura.png"}
                    alt="Left Background Pattern"
                    className="absolute -left-[369px] top-[-471px] w-[841px] h-[839px] max-w-none opacity-60 mix-blend-screen"
                />
                <img
                    src={images?.[1] || "/images/about/phi-bg-aura.png"}
                    alt="Right Background Pattern"
                    className="absolute left-[967px] top-[-73px] w-[804px] h-[802px] max-w-none opacity-60 mix-blend-screen"
                />
            </div>

            <div className="relative z-10 mx-auto w-full max-w-[1240px] px-5 flex flex-col items-center text-center">

                {/* Title */}
                <h2
                    className="text-[28px] sm:text-[36px] lg:text-[45px] font-semibold leading-[1.3] text-white max-w-[800px] mb-12 md:mb-16 whitespace-pre-line"
                    dangerouslySetInnerHTML={{ __html: normalizeStrapiText(title || 'Thị trường – Doanh nghiệp – Con người\ncùng phát triển bền vững') }}
                />

                {/* Principles Cards */}
                <div className="flex flex-col md:flex-row items-center justify-center gap-10 md:gap-16 w-full max-w-[800px]">
                    {displayPrinciples.map((p, idx) => (
                        <div key={idx} className="flex items-center">
                            <div className="flex flex-col gap-1 items-center md:items-start text-center md:text-left min-w-[120px]">
                                <span className="text-[16px] md:text-[20px] text-white font-semibold">{p.label}</span>
                                <span className="text-[32px] md:text-[40px] lg:text-[48px] font-semibold text-[#AF7E2D]">{p.value}</span>
                            </div>
                            {/* Divider line between cards, hide on last item */}
                            {idx < displayPrinciples.length - 1 && (
                                <div className="hidden md:block w-[1px] h-[80px] bg-[#333333] ml-16 relative left-[-20px]"></div>
                            )}
                        </div>
                    ))}
                </div>

            </div>
        </section>
    );
}
