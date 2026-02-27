'use client';

import React, { useState, useCallback, useEffect } from 'react';
import { motion } from 'framer-motion';

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

    const handleNext = useCallback(() => {
        setCurrentIndex((prev) => (prev + 1) % reviews.length);
    }, [reviews.length]);

    const handlePrev = useCallback(() => {
        setCurrentIndex((prev) => (prev - 1 + reviews.length) % reviews.length);
    }, [reviews.length]);

    // Format specific sentence in quote to Gold color based on Figma spec
    const renderQuote = (quote: string) => {
        const highlightText = "Đội ngũ hiểu rất rõ mục tiêu kinh doanh và luôn tối ưu";
        if (quote.includes(highlightText)) {
            const parts = quote.split(highlightText);
            return (
                <>
                    {parts[0]}
                    <span className="text-[#AF7E2D]">{highlightText}</span>
                    {parts[1]}
                </>
            );
        }
        return quote;
    };

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
                    >
                        {title}
                    </motion.h2>

                    {/* Controls */}
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
                </div>

                {/* Carousel Content */}
                {reviews.length > 0 && (
                    <div className="flex flex-col w-full">
                        <div className="flex overflow-x-auto snap-x snap-mandatory hide-scrollbar gap-[20px] pb-4">
                            {reviews.map((review, index) => (
                                <div
                                    key={review.id}
                                    style={{
                                        // To handle sliding based on standard CSS without an external carousel library
                                        transform: `translateX(calc(-${currentIndex * 100}% - ${currentIndex * 20}px))`
                                    }}
                                    className="flex-none snap-start w-[300px] md:w-[355px] bg-white rounded-[16px] p-[20px] md:px-[21px] md:py-[36px] flex flex-col justify-between h-[250px] transition-transform duration-500 ease-in-out"
                                >
                                    <div className="mb-6 h-[133px] overflow-hidden">
                                        <p className="font-semibold text-[16px] md:text-[20px] leading-snug text-black whitespace-pre-wrap">
                                            {renderQuote(review.quote)}
                                        </p>
                                    </div>
                                    <div className="flex items-center gap-[15px] mt-auto">
                                        <div className="w-[50px] h-[50px] rounded-full bg-[#E5E5E5] overflow-hidden shrink-0 flex items-center justify-center">
                                            {review.avatar && review.avatar !== "" ? (
                                                // eslint-disable-next-line @next/next/no-img-element
                                                <img src={review.avatar} alt={review.author} className="w-full h-full object-cover" />
                                            ) : (
                                                <span className="text-black/30 font-bold text-xl">{review.author.charAt(0)}</span>
                                            )}
                                        </div>
                                        <div className="flex flex-col">
                                            <span className="text-black font-medium text-[16px] leading-[normal]">{review.author}</span>
                                            <span className="text-black font-mono text-[14px] leading-[16px] tracking-[-0.42px]">{review.role}</span>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Dots */}
                        <div className="flex justify-center items-center gap-[20px] mt-[40px]">
                            {reviews.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentIndex(i)}
                                    className={`w-[15px] h-[15px] md:w-[20px] md:h-[20px] rounded-[50px] transition-colors ${i === currentIndex ? 'bg-[#AF7E2D]' : 'bg-[#E5E5E5] hover:bg-gray-300'
                                        }`}
                                    aria-label={`Go to slide ${i + 1}`}
                                />
                            ))}
                        </div>
                    </div>
                )}
            </div>
        </section>
    );
}
