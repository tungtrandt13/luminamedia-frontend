'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';

interface TiktokAdsHeroProps {
    title: string;
    description: string;
    ctaText: string;
    image?: string;
}

export default function TiktokAdsHero({
    title,
    description,
    ctaText,
    image,
}: TiktokAdsHeroProps) {
    const renderTitle = () => {
        if (!title) return null;
        const parts = title.split('Tiktok Ads');
        if (parts.length > 1) {
            return (
                <>
                    {parts[0]}<br className="hidden md:block" /><span className="text-[#AF7E2D]">Tiktok Ads</span>{parts[1]}
                </>
            );
        }
        return title;
    };

    return (
        <section className="relative w-full bg-[#000000] text-white overflow-hidden py-[60px] md:py-[100px] px-5 flex items-center justify-center min-h-[500px] md:min-h-[730px]">
            <div className="w-full max-w-[1240px] flex flex-col md:flex-row items-center justify-between gap-10 md:gap-[80px]">
                {/* Text Content */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="flex flex-col items-start gap-6 md:gap-[60px] w-full md:w-[604px]"
                >
                    <div className="flex flex-col gap-[20px] w-full">
                        {title && (
                            <h1 className="text-[40px] md:text-[56px] font-semibold leading-tight tracking-tight whitespace-pre-wrap text-white">
                                {renderTitle()}
                            </h1>
                        )}

                        {description && (
                            <p className="text-[16px] md:text-[20px] font-light leading-snug text-white whitespace-pre-wrap">
                                {description}
                            </p>
                        )}
                    </div>

                    {ctaText && (
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        >
                            <Link
                                href="#contact"
                                className="inline-flex items-center justify-center border border-white hover:bg-white hover:text-black text-white px-[40px] py-[20px] rounded-[8px] font-medium text-[16px] transition-colors duration-300"
                            >
                                {ctaText}
                            </Link>
                        </motion.div>
                    )}
                </motion.div>

                {/* Image Content */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.6, delay: 0.2, ease: 'easeOut' }}
                    className="w-full md:w-[555px] h-[300px] md:h-[530px] relative rounded-[20px] overflow-hidden"
                >
                    {/* Hero Image */}
                    <Image
                        src={image || "/images/services/tiktok-ads-hero.png"}
                        alt="Tiktok Ads Hero"
                        fill
                        className="object-cover"
                        onError={(e) => {
                            // Temporary fallback if image doesn't exist
                            const target = e.target as HTMLImageElement;
                            target.src = 'https://via.placeholder.com/555x530/111111/ffffff?text=TikTok+Ads+Image';
                        }}
                    />
                </motion.div>
            </div>
        </section>
    );
}
