'use client';

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

export interface TiktokAdsWhyUsPoint {
    id: number;
    title: string;
    description?: string;
}

interface TiktokAdsWhyUsProps {
    title: string;
    points: TiktokAdsWhyUsPoint[];
    image?: string;
}

export default function TiktokAdsWhyUs({ title, points, image }: TiktokAdsWhyUsProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(0);

    const toggleAccordion = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const renderTitle = () => {
        if (!title) return null;
        const parts = title.split('VISSCOM');
        if (parts.length > 1) {
            return (
                <>
                    {parts[0]}<br className="hidden lg:block" /><span className="text-[#AF7E2D]">VISSCOM</span>{parts[1]}
                </>
            );
        }
        return title;
    };

    const renderDescription = (description?: string) => {
        if (!description) return null;

        // If the description contains bullets/sentences that should be a list
        // based on the figma design, we split it here.
        // E.g., "Cấp tài khoản TikTok Ads Agency Hạn mức cao, đa tiền tệ Quản lý & theo dõi minh bạch"
        // Let's split by uppercase letters if it's the specific concatenated string from mock data
        // or just render it as a paragraph if it's standard text.

        const isListString = description.includes('Cấp tài khoản') || description.includes('Hạn mức cao') || description.includes('Quản lý & theo dõi');

        if (isListString) {
            return (
                <ul className="list-disc pl-6 text-white/80 font-light text-[18px] md:text-[20px] pt-4 pb-2 space-y-2">
                    <li>Cấp tài khoản TikTok Ads Agency</li>
                    <li>Hạn mức cao, đa tiền tệ</li>
                    <li>Quản lý & theo dõi minh bạch</li>
                </ul>
            );
        }

        return (
            <div className="pt-4 pb-2">
                <p className="font-light text-white/80 text-[18px] md:text-[20px] leading-relaxed">
                    {description}
                </p>
            </div>
        );
    };

    return (
        <section className="w-full bg-[#000000] py-[60px] md:py-[100px] px-5 flex justify-center">
            <div className="w-full max-w-[1240px] flex flex-col lg:flex-row gap-[60px] lg:gap-[80px] items-center lg:items-start justify-between">
                {/* Left Side: Content & Accordion */}
                <motion.div
                    initial={{ opacity: 0, x: -30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6 }}
                    className="flex-1 w-full max-w-[507px] flex flex-col gap-[40px] md:gap-[80px]"
                >
                    <h2 className="text-[32px] md:text-[48px] lg:text-[56px] font-semibold text-white leading-tight">
                        {renderTitle()}
                    </h2>

                    <div className="flex flex-col w-full">
                        {points.map((point, index) => {
                            const isOpen = openIndex === index;
                            return (
                                <div key={point.id} className="w-full flex border-b border-[#333333] last:border-b-0 flex-col py-[16px]">
                                    <button
                                        onClick={() => toggleAccordion(index)}
                                        className="w-full flex items-center justify-between group"
                                        aria-expanded={isOpen}
                                    >
                                        <div className="flex items-center gap-[16px] md:gap-[20px]">
                                            <div className="w-[24px] h-[24px] md:w-[30px] md:h-[30px] rounded-full bg-[#AF7E2D] flex items-center justify-center shrink-0">
                                                <svg width="14" height="10" viewBox="0 0 14 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M4.80806 9.80806L0.24585 5.24585L1.65963 3.83206L4.80806 6.97405L12.0913 0.126465L13.5051 1.54025L4.80806 9.80806Z" fill="white" />
                                                </svg>
                                            </div>
                                            <span className={`text-left font-semibold text-[18px] md:text-[20px] transition-colors ${isOpen ? 'text-white' : 'text-[#E5E5E5] group-hover:text-white'}`}>
                                                {point.title}
                                            </span>
                                        </div>
                                        <div className="shrink-0 ml-4 transition-transform duration-300 flex items-center justify-center">
                                            {isOpen ? (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 14.5L12 9.5L17 14.5" stroke="#AF7E2D" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            ) : (
                                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                    <path d="M7 9.5L12 14.5L17 9.5" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                                </svg>
                                            )}
                                        </div>
                                    </button>

                                    <AnimatePresence initial={false}>
                                        {isOpen && point.description && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.3, ease: 'easeInOut' }}
                                                className="overflow-hidden pl-[40px] md:pl-[50px] pr-[30px]"
                                            >
                                                {renderDescription(point.description)}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            );
                        })}
                    </div>
                </motion.div>

                {/* Right Side: Image */}
                <motion.div
                    initial={{ opacity: 0, x: 30 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.6, delay: 0.2 }}
                    className="flex-1 w-full max-w-[666px] relative"
                >
                    <div className="w-full aspect-[4/5] lg:aspect-[1/1] xl:aspect-[666/666] lg:h-[666px] relative rounded-[16px] overflow-hidden">
                        <Image
                            src={image || "/images/services/tiktok-ads-why-us.png"}
                            alt="Tiktok Ads - Tại sao chọn Visscom"
                            fill
                            className="object-cover"
                            sizes="(max-width: 1024px) 100vw, 50vw"
                        />
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
