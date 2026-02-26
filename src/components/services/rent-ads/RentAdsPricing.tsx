'use client';

import React from 'react';
import { motion } from 'framer-motion';

export interface RentAdsPricingTier {
    id: number;
    fee_percentage: string;
    budget_range: string;
}

interface RentAdsPricingProps {
    title: string;
    description: string;
    tiers: RentAdsPricingTier[];
    benefitsTitle: string;
    benefits: string[];
}

export default function RentAdsPricing({
    title,
    description,
    tiers,
    benefitsTitle,
    benefits,
}: RentAdsPricingProps) {
    // Parse title to highlight "Thuê tài khoản Google Ads" in gold
    const renderTitle = () => {
        if (!title) return null;

        // Default fallback simple split if it matches the specific string
        if (title.includes('Thuê tài khoản Google Ads')) {
            const parts = title.split('Thuê tài khoản Google Ads');
            if (parts.length > 1) {
                return (
                    <>
                        {parts[0]} <span className="text-[#AF7E2D]">Thuê tài khoản Google Ads</span> {parts[1]}
                    </>
                );
            }
        }

        return title;
    };

    const fadeUpVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' as const } },
    };

    const staggerContainer = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.1,
            },
        },
    };

    return (
        <section className="w-full bg-white py-[60px] md:py-[100px] px-5 flex justify-center">
            <div className="w-full max-w-[1240px] flex flex-col gap-[40px] md:gap-[80px]">
                {/* Header Section */}
                <div className="flex flex-col lg:flex-row justify-between items-start gap-[20px] lg:gap-[110px]">
                    <motion.h2
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={fadeUpVariant}
                        className="text-[32px] md:text-[48px] lg:text-[56px] font-semibold text-black leading-[1.1] max-w-[500px]"
                    >
                        {renderTitle()}
                    </motion.h2>
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={fadeUpVariant}
                        className="text-[16px] md:text-[18px] lg:text-[20px] font-light text-black/80 leading-relaxed max-w-[610px]"
                    >
                        <p className="whitespace-pre-wrap">{description}</p>
                    </motion.div>
                </div>

                {/* Content Section */}
                <div className="flex flex-col lg:flex-row gap-[20px] w-full items-stretch">

                    {/* Left / Pricing Table */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={fadeUpVariant}
                        className="flex-1 bg-black rounded-[16px] p-[25px] flex flex-col min-h-[426px]"
                    >
                        <div className="flex justify-between items-center text-white/80 font-semibold text-[16px] md:text-[20px] px-[15px] md:px-[30px] pb-[15px] border-b border-[#333333]">
                            <span className="w-[104px]">Mức phí</span>
                            <span className="text-right sm:text-left flex-1 sm:ml-[196px]">Ngân sách quảng cáo</span>
                        </div>

                        <div className="flex flex-col flex-1 mt-4">
                            {tiers.map((tier, index) => (
                                <div
                                    key={tier.id}
                                    className={`flex justify-between items-center px-[15px] md:px-[30px] py-[25px] ${index !== tiers.length - 1 ? 'border-b border-[#333333]' : ''}`}
                                >
                                    <span className="text-white font-semibold text-[24px] md:text-[32px] w-[104px]">{tier.fee_percentage}</span>
                                    <span className="text-white font-semibold text-[20px] md:text-[32px] text-right sm:text-left flex-1 sm:ml-[195px]">{tier.budget_range}</span>
                                </div>
                            ))}
                        </div>
                    </motion.div>

                    {/* Right / Benefits */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, margin: "-50px" }}
                        variants={fadeUpVariant}
                        className="flex-1 bg-[#F5F5F5] rounded-[16px] p-[30px] md:p-[51px_25px] xl:p-[50px] flex flex-col gap-[26px] min-h-[426px]"
                    >
                        <h3 className="text-[24px] md:text-[32px] font-semibold text-black leading-[1.25] whitespace-pre-wrap">
                            {benefitsTitle}
                        </h3>

                        <motion.div
                            variants={staggerContainer}
                            className="flex flex-col mt-4"
                        >
                            {benefits.map((benefit, index) => (
                                <div key={index} className={`flex flex-col ${index !== benefits.length - 1 ? 'border-b border-[#DBE0EC] pb-[20px] mb-[20px]' : ''}`}>
                                    <div className="flex items-center gap-[20px]">
                                        <div className="w-[30px] h-[30px] rounded-full bg-[#AF7E2D] flex items-center justify-center shrink-0">
                                            <svg width="14" height="11" viewBox="0 0 14 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <path d="M4.61287 10.2312C4.30134 10.2312 4.02052 10.1118 3.77041 9.8732L0.358212 6.55169C0.119404 6.31977 0 6.04642 0 5.73163C0 5.42345 0.119404 5.15343 0.358212 4.92151C0.597022 4.68959 0.880486 4.57362 1.20861 4.57362C1.53673 4.57362 1.82019 4.693 2.05901 4.93175L4.61287 7.41738L11.5372 0.676645C11.7538 0.464977 12.0292 0.359144 12.3635 0.359144C12.6978 0.359144 12.9813 0.475114 13.2201 0.707038C13.4471 0.952131 13.5606 1.23819 13.5606 1.56521C13.5606 1.89223 13.4471 2.16492 13.2201 2.3833L5.43261 9.88344C5.1938 10.1154 4.92055 10.2312 4.61287 10.2312Z" fill="white" />
                                            </svg>
                                        </div>
                                        <span className="text-[16px] md:text-[20px] font-semibold text-black leading-tight flex-1">
                                            {benefit}
                                        </span>
                                    </div>
                                </div>
                            ))}
                        </motion.div>
                    </motion.div>

                </div>
            </div>
        </section>
    );
}
