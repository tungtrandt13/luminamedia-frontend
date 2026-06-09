'use client';

import { useState, useRef, useCallback, useEffect } from 'react';
import type { AdsTestimonial } from '@/lib/mock-data/google-ads-mock';
import { normalizeStrapiText } from '@/lib/strapi';

interface Props {
    title?: string;
    reviews?: AdsTestimonial[];
}

export default function AdsTestimonials({ title, reviews = [] }: Props) {
    const [activeIndex, setActiveIndex] = useState(0);
    const [isScrollable, setIsScrollable] = useState(false);
    const scrollRef = useRef<HTMLDivElement>(null);

    const totalPages = Math.max(1, reviews.length);

    useEffect(() => {
        const checkScroll = () => {
            if (scrollRef.current) {
                // allow a small threshold (e.g. 5px) to avoid rounding issues
                setIsScrollable(scrollRef.current.scrollWidth > scrollRef.current.clientWidth + 5);
            }
        };
        // initial check
        checkScroll();
        // check on resize
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
        setActiveIndex(idx);
    }, []);

    const handlePrev = () => {
        const newIndex = activeIndex > 0 ? activeIndex - 1 : reviews.length - 1;
        scrollToIndex(newIndex);
    };

    const handleNext = () => {
        const newIndex = activeIndex < reviews.length - 1 ? activeIndex + 1 : 0;
        scrollToIndex(newIndex);
    };

    return (
        <section className="w-full bg-black text-white px-[20px] py-[60px] lg:py-[100px] flex items-center justify-center overflow-hidden">
            <div className="w-full max-w-[1500px]">
                <div className="flex flex-col gap-[80px] w-full max-w-[1240px] mx-auto">
                    {/* Header: Title + Nav */}
                    <div className="flex items-center justify-between w-full">
                        <h2
                            className="text-[32px] lg:text-[40px] font-semibold leading-[1.3] lg:leading-[52px] whitespace-pre-line flex-1"
                            dangerouslySetInnerHTML={{ __html: normalizeStrapiText(title || 'Khách hàng nói gì về\nLumina Media Agency') }}
                        />

                        {/* Navigation Buttons */}
                        {isScrollable && (
                            <div className="flex gap-[9px] items-center justify-end flex-1">
                                <button
                                    onClick={handlePrev}
                                    className="w-[50px] h-[50px] rounded-[50px] bg-[#AF7E2D] p-[10px] flex items-center justify-center hover:bg-[#956b25] transition-colors shrink-0"
                                    aria-label="Previous"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                                <button
                                    onClick={handleNext}
                                    className="w-[50px] h-[50px] rounded-[50px] bg-[#AF7E2D] p-[10px] flex items-center justify-center hover:bg-[#956b25] transition-colors shrink-0 rotate-180"
                                    aria-label="Next"
                                >
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M15 18L9 12L15 6" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                    </svg>
                                </button>
                            </div>
                        )}
                    </div>

                    {/* Cards Content */}
                    <div className="flex flex-col gap-[40px] items-center w-full">
                        {/* Cards Wrapper */}
                        <div
                            ref={scrollRef}
                            className="flex overflow-x-auto snap-x snap-mandatory lg:flex-row lg:justify-between w-full gap-[20px] scrollbar-hide pb-4 lg:pb-0"
                        >
                            {reviews.map((review, idx) => (
                                <div
                                    key={review.id}
                                    data-card
                                    className="w-[300px] sm:w-[350px] lg:w-[400px] shrink-0 snap-center bg-white h-[250px] px-[21px] py-[13px] rounded-[16px] flex flex-col"
                                >
                                    <div className="flex flex-col gap-[36px] w-full">
                                        {/* Quote */}
                                        <div className="h-[132px] text-black">
                                            <p
                                                className="text-[18px] lg:text-[20px] font-semibold leading-[24px] whitespace-pre-wrap"
                                                dangerouslySetInnerHTML={{ __html: normalizeStrapiText(review.quote) }}
                                            />
                                        </div>

                                        {/* Author */}
                                        <div className="flex items-center gap-[15px] w-full">
                                            <div className="w-[50px] h-[50px] shrink-0 relative">
                                                <img
                                                    src={review.avatar || '/images/default-avatar.png'}
                                                    alt={review.author}
                                                    className="absolute inset-0 w-full h-full rounded-full object-cover bg-gray-200"
                                                    onError={(e) => {
                                                        const target = e.target as HTMLImageElement;
                                                        target.style.display = 'none';
                                                    }}
                                                />
                                            </div>
                                            <div className="flex flex-col gap-[3px] text-[#000000] w-full overflow-hidden">
                                                <h4 className="text-[16px] font-medium leading-[19px] truncate">
                                                    {review.author}
                                                </h4>
                                                <p className="text-[14px] font-mono font-normal tracking-[-0.03em] leading-[16px] text-[#000000] truncate">
                                                    {review.role}
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* Pagination Dots */}
                        {isScrollable && (
                            <div className="flex justify-center items-center gap-[20px] w-full">
                                {Array.from({ length: totalPages }).map((_, idx) => (
                                    <button
                                        key={idx}
                                        onClick={() => scrollToIndex(idx)}
                                        className="relative flex items-center justify-center w-[20px] h-[20px]"
                                        aria-label={`Page ${idx + 1}`}
                                    >
                                        {idx === activeIndex ? (
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="10" cy="10" r="10" fill="#AF7E2D" />
                                            </svg>
                                        ) : (
                                            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                                                <circle cx="10" cy="10" r="10" fill="#EAEAEA" />
                                            </svg>
                                        )}
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                </div>
            </div>
        </section>
    );
}
