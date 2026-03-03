'use client';

import React from 'react';
import { motion } from 'framer-motion';
import Link from 'next/link';
import { normalizeStrapiText } from '@/lib/strapi';

interface RentAdsHeroProps {
    title: string;
    headline: string;
    description: string;
    ctaText: string;
}

export default function RentAdsHero({
    title,
    headline,
    description,
    ctaText,
}: RentAdsHeroProps) {
    // Parse headline to highlight "Tài khoản" in gold if it exists
    const parts = headline.split('Tài khoản');
    const renderHeadline = () => {
        if (parts.length > 1) {
            return (
                <>
                    {parts[0]} <span className="text-[#AF7E2D]">Tài khoản</span> {parts[1]}
                </>
            );
        }
        return headline;
    };

    return (
        <section className="relative w-full bg-[#000000] text-white overflow-hidden py-[60px] md:py-[100px] px-5 flex items-center justify-center min-h-[500px] md:min-h-[600px]">


            <div className="relative z-10 w-full max-w-[1240px] mx-auto flex flex-col items-center justify-center text-center gap-8 md:gap-10">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, ease: 'easeOut' }}
                    className="flex flex-col items-center gap-5 md:gap-6 w-full"
                >
                    {title && (
                        <h3 className="text-[16px] md:text-[20px] font-semibold text-white/90">
                            {title}
                        </h3>
                    )}

                    {headline && (
                        <h1 className="text-[32px] md:text-[48px] lg:text-[56px] font-semibold leading-[1.2] tracking-tight whitespace-pre-line">
                            {renderHeadline()}
                        </h1>
                    )}

                    {description && (
                        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light leading-relaxed text-white/80 max-w-[800px] whitespace-pre-wrap mt-2">
                            {normalizeStrapiText(description)}
                        </p>
                    )}
                </motion.div>

                {ctaText && (
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                    >
                        <Link
                            href="#contact"
                            className="inline-flex items-center justify-center bg-[#AF7E2D] hover:bg-[#c28c32] text-white px-8 md:px-10 py-3 md:py-4 rounded-[8px] font-medium text-[16px] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_4px_20px_rgba(175,126,45,0.4)]"
                        >
                            {ctaText}
                        </Link>
                    </motion.div>
                )}
            </div>
        </section>
    );
}
