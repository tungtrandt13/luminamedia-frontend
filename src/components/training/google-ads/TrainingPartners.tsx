'use client';

import { getStrapiMedia } from "@/lib/strapi";

interface Props {
    title: string;
    logos: any[];
}

export default function TrainingPartners({ title, logos }: Props) {
    const logoItems = Array.isArray(logos) ? logos : ((logos as any)?.data || []);

    if (logoItems.length === 0) return null;

    return (
        <section className="w-full bg-black text-white px-[20px] py-[60px] lg:py-[100px]">
            <div className="mx-auto w-full max-w-[1500px]">
                <div className="flex flex-col items-center gap-[40px] lg:gap-[60px] w-full">
                    {title && (
                        <h2 className="font-semibold text-[32px] md:text-[40px] leading-tight md:leading-[52px] text-center text-white w-full">
                            {title}
                        </h2>
                    )}

                    <div className="flex flex-wrap justify-center items-center gap-[20px] lg:gap-[20px] w-full">
                        {logoItems.map((logo: any) => {
                            const finalUrl = getStrapiMedia(logo) || logo.url;

                            return finalUrl ? (
                                <img
                                    key={logo.id}
                                    src={finalUrl}
                                    alt={logo.name || logo.attributes?.name || 'Partner Logo'}
                                    className="h-[60px] md:h-[87px] w-auto object-contain shrink-0"
                                />
                            ) : null;
                        })}
                    </div>
                </div>
            </div>
        </section>
    );
}
