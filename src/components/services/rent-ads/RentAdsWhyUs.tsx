'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { normalizeStrapiText } from '@/lib/strapi';

// Using a slightly different interface than the mock specifically for the component design,
// mapping will be handled in the parent page
export interface RentAdsWhyUsCardData {
    id: number;
    title: string;
    points: string[];
}

interface RentAdsWhyUsProps {
    title: string;
    cards: RentAdsWhyUsCardData[];
}

export default function RentAdsWhyUs({ title, cards }: RentAdsWhyUsProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const cardVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
    };

    return (
        <section className="w-full bg-[#000000] py-[60px] md:py-[100px] px-5 flex justify-center">
            <div className="w-full max-w-[1240px] flex flex-col items-center gap-[40px] md:gap-[80px]">
                {/* Title */}
                {title && (
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.6 }}
                        className="text-center text-[32px] md:text-[48px] lg:text-[56px] font-semibold text-white leading-tight max-w-[905px] whitespace-pre-wrap"
                        dangerouslySetInnerHTML={{ __html: normalizeStrapiText(title) }}
                    />
                )}

                {/* Cards Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 w-full"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {cards.map((card) => (
                        <motion.div
                            key={card.id}
                            variants={cardVariants}
                            className="bg-white rounded-[10px] border border-[#939292] p-6 lg:p-[24px_16px] xl:p-6 flex flex-col h-full transition-transform hover:-translate-y-2 duration-300"
                        >
                            {/* Card Title - fixed height area so all cards align */}
                            <div className="min-h-[80px] lg:min-h-[100px] mb-6 lg:mb-[40px]">
                                <h3
                                    className="text-[#AF7E2D] font-semibold text-[24px] lg:text-[32px] leading-[1.2] whitespace-pre-line"
                                    dangerouslySetInnerHTML={{ __html: normalizeStrapiText(card.title) }}
                                />
                            </div>

                            {/* Card Points - always aligned at same position */}
                            <div className="flex flex-col w-full">
                                {card.points.map((point, index) => (
                                    <div
                                        key={index}
                                        className="border-t border-[#dbe0ec] py-3 lg:py-[8px] xl:py-3 w-full"
                                    >
                                        <p
                                            className="text-black font-light text-[16px] lg:text-[18px] xl:text-[20px] leading-[1.4] whitespace-pre-line"
                                            dangerouslySetInnerHTML={{ __html: normalizeStrapiText(point) }}
                                        />
                                    </div>
                                ))}
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
