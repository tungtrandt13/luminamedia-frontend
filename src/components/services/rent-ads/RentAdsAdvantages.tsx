'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { normalizeStrapiText } from '@/lib/strapi';

interface RentAdsAdvantagesProps {
    title: string;
    description: string;
    points: string[];
}

export default function RentAdsAdvantages({
    title,
    description,
    points,
}: RentAdsAdvantagesProps) {
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    const pillVariants = {
        hidden: { opacity: 0, scale: 0.9, y: 10 },
        visible: { opacity: 1, scale: 1, y: 0, transition: { duration: 0.4, ease: 'easeOut' as const } },
    };

    return (
        <section className="w-full bg-[#FFF9EF] py-[60px] md:py-[100px] px-5 flex justify-center">
            <div className="w-full max-w-[1240px] flex flex-col lg:flex-row items-center gap-[50px]">
                {/* Left Column: Text */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-50px" }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 flex flex-col gap-[30px] md:gap-[40px] text-black w-full"
                >
                    {title && (
                        <h2
                            className="text-[32px] md:text-[48px] lg:text-[56px] font-semibold leading-tight whitespace-pre-wrap"
                            dangerouslySetInnerHTML={{ __html: normalizeStrapiText(title) }}
                        />
                    )}
                    {description && (
                        <p className="text-[16px] md:text-[18px] lg:text-[20px] font-light leading-relaxed text-black/80">
                            {description}
                        </p>
                    )}
                </motion.div>

                {/* Right Column: Pill Layouts */}
                <motion.div
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="flex-[1_0_0] flex flex-col items-center gap-[20px] w-full relative"
                >
                    {/* Row 1 */}
                    <div className="flex flex-wrap md:flex-nowrap justify-center lg:justify-start gap-[19px] w-full shrink-0">
                        {points.length > 0 && (
                            <motion.div variants={pillVariants} className="bg-[#AF7E2D] rounded-[50px] px-[30px] md:px-[60px] py-[15px] md:py-[20px] flex items-center justify-center shrink-0">
                                <span className="text-white font-semibold text-[16px] md:text-[20px] whitespace-nowrap leading-normal">{points[0]}</span>
                            </motion.div>
                        )}
                        {points.length > 1 && (
                            <motion.div variants={pillVariants} className="border border-[#AF7E2D] rounded-[50px] px-[30px] md:px-[60px] py-[15px] md:py-[20px] flex items-center justify-center shrink-0">
                                <span className="text-[#AF7E2D] font-semibold text-[16px] md:text-[20px] whitespace-nowrap leading-normal">{points[1]}</span>
                            </motion.div>
                        )}
                    </div>

                    {/* Row 2 */}
                    <div className="flex flex-wrap md:flex-nowrap justify-center lg:justify-start gap-[17px] w-full shrink-0">
                        {points.length > 2 && (
                            <motion.div variants={pillVariants} className="bg-[#AF7E2D] rounded-[50px] px-[30px] md:px-[60px] py-[15px] md:py-[20px] flex items-center justify-center shrink-0">
                                <span className="text-white font-semibold text-[16px] md:text-[20px] whitespace-nowrap leading-normal">{points[2]}</span>
                            </motion.div>
                        )}
                        {points.length > 0 && (
                            <motion.div variants={pillVariants} className="border border-[#AF7E2D] rounded-[50px] px-[30px] md:px-[60px] py-[15px] md:py-[20px] flex items-center justify-center shrink-0">
                                <span className="text-[#AF7E2D] font-semibold text-[16px] md:text-[20px] whitespace-nowrap leading-normal">{points[0]}</span>
                            </motion.div>
                        )}
                    </div>

                    {/* Row 3 - Centered */}
                    {points.length > 3 && (
                        <motion.div variants={pillVariants} className="bg-[#AF7E2D] rounded-[50px] px-[30px] md:px-[60px] py-[15px] md:py-[20px] flex items-center justify-center shrink-0">
                            <span className="text-white font-semibold text-[16px] md:text-[20px] whitespace-nowrap leading-normal">{points[3]}</span>
                        </motion.div>
                    )}

                    {/* Row 4 - Centered */}
                    <div className="flex flex-wrap md:flex-nowrap justify-center gap-[25px] shrink-0">
                        {points.length > 4 && (
                            <motion.div variants={pillVariants} className="border border-[#AF7E2D] rounded-[50px] px-[30px] md:px-[60px] py-[15px] md:py-[20px] flex items-center justify-center shrink-0">
                                <span className="text-[#AF7E2D] font-semibold text-[16px] md:text-[20px] whitespace-nowrap leading-normal">{points[4]}</span>
                            </motion.div>
                        )}
                        {points.length > 1 && (
                            <motion.div variants={pillVariants} className="bg-[#AF7E2D] rounded-[50px] px-[30px] md:px-[60px] py-[15px] md:py-[20px] flex items-center justify-center shrink-0">
                                <span className="text-white font-semibold text-[16px] md:text-[20px] whitespace-nowrap leading-normal">{points[1]}</span>
                            </motion.div>
                        )}
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
