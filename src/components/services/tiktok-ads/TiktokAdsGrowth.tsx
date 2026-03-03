'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { normalizeStrapiText } from '@/lib/strapi';

export interface TiktokAdsGrowthCard {
    id: number;
    title: string;
    points: string[];
}

interface TiktokAdsGrowthProps {
    title: string;
    cards: TiktokAdsGrowthCard[];
}

export default function TiktokAdsGrowth({ title, cards }: TiktokAdsGrowthProps) {
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
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="w-full max-w-[1038px] flex justify-center text-center"
                >
                    <h2
                        className="text-[32px] md:text-[48px] lg:text-[56px] font-semibold text-white leading-tight whitespace-pre-line"
                        dangerouslySetInnerHTML={{ __html: normalizeStrapiText(title) }}
                    />
                </motion.div>

                {/* Cards Grid */}
                <motion.div
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[20px] w-full"
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                >
                    {cards.map((card) => (
                        <motion.div
                            key={card.id}
                            variants={cardVariants}
                            className="bg-white border border-[#939292] rounded-[10px] px-[16px] py-[24px] lg:px-[24px] lg:py-[32px] flex flex-col items-start min-h-[300px] transition-transform hover:-translate-y-2 duration-300 gap-8"
                        >
                            {/* Card Title */}
                            <h3
                                className="text-[#AF7E2D] font-semibold text-[24px] lg:text-[32px] leading-[1.2] whitespace-pre-line min-h-[76px]"
                                dangerouslySetInnerHTML={{ __html: normalizeStrapiText(card.title) }}
                            />

                            {/* Card Points */}
                            <ul className="flex flex-col w-full h-full justify-between">
                                {card.points.map((point, index) => (
                                    <li
                                        key={index}
                                        className="border-t border-[#dbe0ec] py-[12px] lg:py-[16px] w-full flex-1"
                                    >
                                        <p
                                            className="text-black font-light text-[16px] lg:text-[20px] leading-snug whitespace-pre-line"
                                            dangerouslySetInnerHTML={{ __html: normalizeStrapiText(point) }}
                                        />
                                    </li>
                                ))}
                            </ul>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
