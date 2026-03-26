'use client';

import React, { useState, useCallback, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { normalizeStrapiText } from '@/lib/strapi';

export interface TiktokAdsTestimonial {
    id: number;
    quote: string;
    author: string;
    role: string;
    avatar?: string;
}

interface TiktokAdsTestimonialsProps {
    title: string;
    reviews: TiktokAdsTestimonial[];
}

export default function TiktokAdsTestimonials({
    title,
    reviews,
}: TiktokAdsTestimonialsProps) {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isScrollable, setIsScrollable] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        const checkScroll = () => {
            if (scrollRef.current) {
                setIsScrollable(scrollRef.current.scrollWidth > scrollRef.current.clientWidth + 5);
            }
        };
        checkScroll();
        window.addEventListener('resize', checkScroll);
        return () => window.removeEventListener('resize', checkScroll);
    }, [reviews]);

    const scrollToIndex = useCallback((idx: number) => {
        if (!scrollRef.current) return;
        const container = scrollRef.current;
        const cards = container.querySelectorAll('[data-card]');
        if (cards[idx]) {
            cards[idx].scrollIntoView({ behavior: 'smooth', block: 'nearest', inline: 'center' });
        }
        setCurrentIndex(idx);
    }, []);

    const handleNext = useCallback(() => {
        const nextIdx = (currentIndex + 1) % reviews.length;
        scrollToIndex(nextIdx);
    }, [currentIndex, reviews.length, scrollToIndex]);

    const handlePrev = useCallback(() => {
        const prevIdx = (currentIndex - 1 + reviews.length) % reviews.length;
        scrollToIndex(prevIdx);
    }, [currentIndex, reviews.length, scrollToIndex]);

    return (
        <section className="w-full bg-[#000000] text-white py-[60px] md:py-[100px] px-5 flex justify-center overflow-hidden">
            <div className="w-full max-w-[1240px] flex flex-col gap-[40px] md:gap-[80px]">
                {/* Header */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-[20px]">
                    <motion.h2
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-50px" }}
                        transition={{ duration: 0.6 }}
                        className="text-[32px] md:text-[40px] font-semibold leading-tight whitespace-pre-wrap max-w-[620px]"
                        dangerouslySetInnerHTML={{ __html: normalizeStrapiText(title) }}
                    />

                    {/* Controls */}
                    {isScrollable && (
                        <div className="flex items-center gap-[10px]">
                            <button
                                onClick={handlePrev}
                                className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-[50px] bg-white hover:bg-gray-200 flex items-center justify-center transition-colors shrink-0 group"
                                aria-label="Previous testimonial"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:-translate-x-1">
                                    <path d="M15 18L9 12L15 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                            <button
                                onClick={handleNext}
                                className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] rounded-[50px] bg-white hover:bg-gray-200 flex items-center justify-center transition-colors shrink-0 group"
                                aria-label="Next testimonial"
                            >
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg" className="transition-transform group-hover:translate-x-1">
                                    <path d="M9 18L15 12L9 6" stroke="black" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                </svg>
                            </button>
                        </div>
                    )}
                </div>

                {/* Carousel Content */}
                {reviews.length > 0 && (
                    <div className="flex flex-col w-full">
                        <div
                            ref={scrollRef}
                            className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-[20px] pb-4"
                        >
                            {reviews.map((review, index) => (
                                <div
                                    key={review.id}
                                    data-card
                                    className="flex-none snap-start w-[300px] md:w-[355px] bg-white rounded-[16px] p-[20px] md:px-[21px] md:py-[36px] flex flex-col justify-between h-[250px]"
                                >
                                    <div className="mb-6 h-[133px] overflow-hidden">
                                        <p
                                            className="font-semibold text-[16px] md:text-[20px] leading-[24px] text-black whitespace-pre-wrap"
                                            dangerouslySetInnerHTML={{ __html: normalizeStrapiText(review.quote) }}
                                        />
                                    </div>
                                    <div className="flex items-center gap-[15px] mt-auto">
                                        <div className="w-[50px] h-[50px] rounded-full bg-[#E5E5E5] overflow-hidden shrink-0 flex items-center justify-center">
                                            {review.avatar && review.avatar !== "" ? (
                                                <img src={review.avatar} alt={review.author} className="w-full h-full object-cover" />
                                            ) : (
                                                <span className="text-black/30 font-bold text-xl">{review.author.charAt(0)}</span>
                                            )}
                                        </div>
                                        <div className="flex flex-col gap-[3px]">
                                            <span className="text-[#000000] font-medium text-[16px] leading-[19px]">{review.author}</span>
                                            <span className="text-[#000000] font-mono font-normal text-[14px] leading-[16px] tracking-[-0.03em]">{review.role}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Dots */}
                        {isScrollable && (
                            <div className="flex justify-center items-center gap-[20px] mt-[40px]">
                                {reviews.map((_, i) => (
                                    <button
                                        key={i}
                                        onClick={() => scrollToIndex(i)}
                                        className={`w-[15px] h-[15px] md:w-[20px] md:h-[20px] rounded-[50px] transition-colors ${i === currentIndex ? 'bg-[#AF7E2D]' : 'bg-[#E5E5E5] hover:bg-gray-300'
                                            }`}
                                        aria-label={`Go to slide ${i + 1}`}
                                    />
                                ))}
                            </div>
                        )}
                    </div>
                )}
            </div>
        </section>
    );
}
