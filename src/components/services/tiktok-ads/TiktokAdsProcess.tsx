'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface TiktokAdsProcessStep {
    id: number;
    step_number: string;
    title: string;
    description: string;
}

interface TiktokAdsProcessProps {
    title: string;
    steps: TiktokAdsProcessStep[];
}

export default function TiktokAdsProcess({ title, steps }: TiktokAdsProcessProps) {
    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.15,
            },
        },
    };

    const itemVariant = {
        hidden: { opacity: 0, x: 20 },
        visible: { opacity: 1, x: 0, transition: { duration: 0.5, ease: 'easeOut' as const } },
    };

    return (
        <section className="w-full bg-[#000000] text-white py-[60px] md:py-[100px] px-5 flex justify-center">
            <div className="w-full max-w-[1240px] flex flex-col lg:flex-row gap-[40px] lg:gap-[40px] items-start justify-center">
                {/* Left Side: Title */}
                <div className="flex-1 w-full lg:sticky lg:top-[120px]">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="text-[32px] md:text-[48px] lg:text-[56px] font-semibold leading-tight whitespace-pre-wrap max-w-[595px]"
                    >
                        {title}
                    </motion.h2>
                </div>

                {/* Right Side: Steps */}
                <motion.div
                    variants={staggerContainer}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-100px" }}
                    className="flex-[1.2] w-full flex flex-col gap-[30px] md:gap-[48px]"
                >
                    {steps.map((step) => (
                        <motion.div
                            key={step.id}
                            variants={itemVariant}
                            className="flex gap-[20px] md:gap-[31px] items-center group"
                        >
                            <div className="w-[50px] h-[50px] md:w-[60px] md:h-[60px] rounded-[50px] bg-[#AF7E2D] flex flex-col items-center justify-center shrink-0 transition-transform duration-300 group-hover:scale-110">
                                <span className="text-white font-semibold text-[18px] md:text-[20px] leading-none">
                                    {step.step_number}
                                </span>
                            </div>
                            <div className="flex flex-col gap-[4px] md:gap-[8px] w-full">
                                <h3 className="text-white font-semibold text-[18px] md:text-[20px] leading-snug whitespace-pre-wrap">
                                    {step.title}
                                </h3>
                                <p className="text-white font-light text-[16px] md:text-[20px] leading-snug whitespace-pre-wrap">
                                    {step.description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
}
